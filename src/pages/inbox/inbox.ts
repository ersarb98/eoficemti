import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from 'ionic-angular';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  providers: [SoapService],
  templateUrl: 'inbox.html',
})
export class InboxPage {
  messages: Array<any> = [];
  isLoading: boolean = true;
  userdataTPK: any;
  halaman = 1;
  isSearch: boolean = false;
  inputSearch: any;
  fakeUsers: Array<any> = new Array(5);

  loadingFilter:Boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public ngZone: NgZone,
    public toastCtrl: ToastController
  ) {    
  }

  ionViewDidEnter() {            
    this.storage.get('userdataTPK').then(val => {
      this.halaman = 1;
      this.userdataTPK = val;

      this.getMessages('first','');              
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  getMessages(type, functionName) {
    // if (type == 'first' && functionName == '') {
    this.isLoading = true;  
    // }

    // console.log(JSON.stringify({
    //   usernameEDI: api_user,
    //   passwordEDI: api_pass,
    //   iduser: this.userdataTPK.data.IDUSER,
    //   idjabatan: this.userdataTPK.data.IDJABATAN,
    //   page: this.halaman,
    //   jmlpage: '20',
    //   perihal: "",
    //   tanggalawal: "",
    //   tanggalakhir: "",
    //   sorting: "3",  
    //   filter:"0"  
    // }));
    
    this.soapService
      .post(api_base_url, 'eoffice_inbox', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            iduser: this.userdataTPK.data.IDUSER,
            idjabatan: this.userdataTPK.data.IDJABATAN,
            page: this.halaman,
            jmlpage: '20',
            perihal: "",
            tanggalawal: "",
            tanggalakhir: "",
            sorting: "1",  
            filter:"0"          
          }
        )
      }).then(result => {        
        var responData = JSON.parse(String(result));              
        console.log(responData);
        if (responData['rcmsg'] == "SUCCESS") {
          if (type == 'refresh' && functionName != '') {
            this.messages = [];
          } else if (type == 'first' && functionName == '') {
            this.messages = [];
          }
          if (responData['data']['List_Inbox'].length > 0 && !this.isEmptyObject(responData['data']['List_Inbox'][0])) {                
            for (var i = 0; i < responData['data']['List_Inbox'].length; i++) {
              this.messages.push(responData['data']['List_Inbox'][i]);
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
        if (type == 'first' && functionName == '') {
          
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
        if (type == 'first' && functionName == '') {
          
        } else if (type == 'infinite' && functionName != '') {
          functionName.complete();
        } else if (type == 'refresh' && functionName != '') {
          functionName.complete();
        }
        this.isLoading = false;
      });
  }

  goToDetail(message) {    
    this.navCtrl.push("InboxDetailPage", {
      messageData: message,
      nipp: this.userdataTPK['data']['NIPP'],
      userdataTPK: this.userdataTPK
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

  submitSearch() {    
    this.navCtrl.push('InboxSearchPage', {
      inputSearch: this.inputSearch,
      userdataTPK: this.userdataTPK,
      type: 'inbox'
    })
  }

  showModal(page) {
    let modal = this.modalCtrl.create(page, {
      openFrom: 'inboxPage'
    }, {
        enableBackdropDismiss: true,
        showBackdrop: true,        
      });
    modal.present();
  }

  isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  doArsip(data) {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mengarsip Surat...",
      cssClass: 'transparent',
      dismissOnPageChange: true
    });
    loading.present();
    this.soapService
      .post(api_base_url, 'eoffice_arsip_add', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            id_surat: data['id_surat'],
            keterangan: data['Status'],
            id_user: this.userdataTPK.data.IDUSER,
            id_jab: this.userdataTPK.data.IDJABATAN,
          }
        )
      }).then(result => {
        var responData = JSON.parse(String(result));        
        let toast = this.toastCtrl.create({
          message: 'Surat Berhasil Diarsipkan.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.getMessages('first', '');
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
