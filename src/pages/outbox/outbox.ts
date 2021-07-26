import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from 'ionic-angular';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass, sc_type, sc_code } from '../../config';
/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outbox',  
  providers: [SoapService],
  templateUrl: 'outbox.html', 
}) 
export class OutboxPage {
  messages: Array<any> = [];
  isLoading:boolean = true;
  userdataTPK:any; 
  halaman = 1;
  isSearch:boolean = false;
  inputSearch:any;
  batasAtas = 1;
  batasBawah = 20;
  loading:any;
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

  ionViewWillEnter() {
    if (this.isSearch) {
      this.showSearch();
    }
  }

  ionViewWillLoad() {    
    this.storage.get('userdataTPK').then(val => {      
      this.userdataTPK = val;            
      this.getMessages(val,this.halaman);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }  

  getMessages(val, hal) {    
    
    this.isLoading = true;
    this.soapService
    .post(api_base_url,'eoffice_outbox',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        iduser : val.data.IDUSER,
        idjabatan : val.data.IDJABATAN,
        page : hal,
        jmlpage : "10",
        perihal : "",
        tanggalawal : "",
        tanggalakhir : ""        
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));
            // console.log(responData);
      if (responData['rcmsg'] == "SUCCESS") {
        if (responData['data']['List Outbox'].length > 0 ) {
          for (var i = 0; i < responData['data']['List Outbox'].length; i++) {
            this.messages.push(responData['data']['List Outbox'][i]);
          }          
        }                        
        
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan pesan',
          buttons: ['OK']
        });
        alert.present();
      }       
      this.isLoading = false;  
    })
    .catch(error => {      
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan pesan',
        buttons: ['OK']
      });
      alert.present();      
      this.isLoading = false;
    });
  }

  goToDetail(message) {
    this.navCtrl.push("OutboxDetailPage",{
      messageData: message,
      nipp: this.userdataTPK['data']['NIPP']
    });
  }

  doInfinite(infiniteScroll) {
    this.halaman++;
    
    this.soapService
    .post(api_base_url,'eoffice_outbox',{fStream:JSON.stringify(    
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        iduser : this.userdataTPK.data.IDUSER,
        idjabatan : this.userdataTPK.data.IDJABATAN,
        page : this.halaman,
        jmlpage : "10",
        perihal : "",
        tanggalawal : "",
        tanggalakhir : "",
        sorting : "0"        
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));            
      if (responData['rcmsg'] == "SUCCESS") {
        if (responData['data']['List Outbox'].length > 0) {
          for (var i = 0; i < responData['data']['List Outbox'].length; i++) {
            this.messages.push(responData['data']['List Outbox'][i]);
          }          
        }                        
        
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan pesan',
          buttons: ['OK']
        });
        alert.present();
      }      
      infiniteScroll.complete();             
    })
    .catch(error => {      
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan pesan',
        buttons: ['OK']
      });
      alert.present();          
      infiniteScroll.complete();    
    });
  }

  doRefresh(refresher) {    
    this.halaman = 1;

    this.soapService
    .post(api_base_url,'eoffice_outbox',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        iduser : this.userdataTPK.data.IDUSER,
        idjabatan : this.userdataTPK.data.IDJABATAN,
        page : this.halaman,
        jmlpage : "10",
        perihal : "",
        tanggalawal : "",
        tanggalakhir : "",      
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));            
      if (responData['rcmsg'] == "SUCCESS") {
        if (responData['data']['List Outbox'].length > 0 && !this.isEmptyObject(responData['data']['List Outbox'][0])) {
          this.messages = [];
          for (var i = 0; i < responData['data']['List Outbox'].length; i++) {
            this.messages.push(responData['data']['List Outbox'][i]);
          }          
        }                                
        
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan pesan',
          buttons: ['OK']
        });
        alert.present();
      }      
      refresher.complete();            
    })
    .catch(error => {      
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan pesan',
        buttons: ['OK']
      });
      alert.present();          
      refresher.complete();    
    });
      
  }

  showSearch() {
    this.isSearch = !this.isSearch;
  }
  
  submitSearch() {    
    this.navCtrl.push('InboxSearchPage',{
      inputSearch: this.inputSearch,
      userdataTPK: this.userdataTPK,
      type: 'outbox'
    })
  } 

  showModal(page) {
    let modal = this.modalCtrl.create(page,{      
    }, {
      enableBackdropDismiss: true,
      showBackdrop:true,
      //cssClass:'my-modal2'
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
}
