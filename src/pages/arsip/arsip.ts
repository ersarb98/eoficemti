import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from 'ionic-angular';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';

/**
 * Generated class for the ArsipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arsip',
  providers: [SoapService],
  templateUrl: 'arsip.html',
})
export class ArsipPage {
  messages: Array<any> = [];  
  isLoading:boolean=true;
  userdataTPK:any;
  halaman = 1;
  isSearch:boolean = false;
  inputSearch:any;
  fakeUsers: Array<any> = new Array(5);

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,    
    public soapService:SoapService,
    public loadingCtrl:LoadingController,
    public storage:Storage,
    public alertCtrl:AlertController,
    public modalCtrl: ModalController,    
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidEnter() {
    if (this.isSearch) { 
      this.showSearch();
    }        
    this.storage.get('userdataTPK').then(val => {
      this.halaman = 1;
      console.log(val);      
      this.userdataTPK = val;     
      this.getMessages('first','');              
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArsipPage');
  }

  getMessages(type,functionName) {   
    this.isLoading = true;
    this.soapService
    .post(api_base_url,'eoffice_arsip',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        iduser : this.userdataTPK.data.IDUSER,
        idjabatan : this.userdataTPK.data.IDJABATAN,
        page : this.halaman,
        jmlpage : '20',
        perihal : "",
        tanggalawal : "",
        tanggalakhir : "",
        sorting : "3"
      }
    )}).then(result => {      
      var responData = JSON.parse(String(result));            
      if (responData['rcmsg'] == "SUCCESS") {
        if (type == 'refresh' && functionName != '') {
          this.messages = [];
        } else if (type == 'first' && functionName == '') {
          this.messages= [];
        }
        if (responData['data']['List_Arsip'].length > 0 && !this.isEmptyObject(responData['data']['List_Arsip'][0])) {          
          for (var i = 0; i < responData['data']['List_Arsip'].length; i++) {
            this.messages.push(responData['data']['List_Arsip'][i]);
          }          
        }                        
        
      } else {
        let toast = this.toastCtrl.create({
          message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present(); 
      }
      if (type == 'first' && functionName == '' ) {
        
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }
      this.isLoading = false;       
    })
    .catch(error => {      
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();      
      if (type == 'first' && functionName == '' ) {
        // loading.dismiss();
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }
      this.isLoading = false;       
    });
  }

  goToDetail(message) {    
    this.navCtrl.push("InboxDetailPage",{
      messageData: message,
      nipp: this.userdataTPK['data']['NIPP'],
      userdata: this.userdataTPK
    });
  }

  doInfinite(infiniteScroll) {
    
    this.halaman++;    
    this.getMessages('infinite', infiniteScroll);
  }

  doRefresh(refresher) {    
    this.halaman = 1;
    this.getMessages('refresh', refresher);  
  }

  showSearch() {
    this.isSearch = !this.isSearch;
  }
  
  submitSearch() {    
    this.navCtrl.push('InboxSearchPage',{
      inputSearch: this.inputSearch,
      userdata: this.userdataTPK,
      type: 'inbox'
    })
  }

  showModal(page) {
    let modal = this.modalCtrl.create(page,{
      openFrom : 'inboxPage'      
    }, {
      enableBackdropDismiss: true,
      showBackdrop:true,
      // cssClass:'my-modal2' 
    });
    modal.present();
  }

  isEmptyObject(obj) {
    for(var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          return false;
       }
    } 
    return true;
  }

  doKembalikan(data) {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mengembalikan Surat...",       
      cssClass: 'transparent',
      dismissOnPageChange:true
    });
    loading.present();
    this.soapService
    .post(api_base_url,'eoffice_arsip_kembalikan',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        id_surat: data['id_surat'] ,
        keterangan: data['Status'],
        id_user : this.userdataTPK.data.IDUSER,
        id_jab : this.userdataTPK.data.IDJABATAN,        
      }
    )}).then(result => { 
      var responData = JSON.parse(String(result));      
      let toast = this.toastCtrl.create({
        message: 'Surat Berhasil Dikembalikan ke Kontak Masuk.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.getMessages('first','');
      loading.dismiss();
    }).catch(error => {
      let toast = this.toastCtrl.create({
        message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      loading.dismiss();
    });
  }


}
