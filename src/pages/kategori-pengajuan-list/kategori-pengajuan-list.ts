import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, LoadingController, AlertController, Searchbar, ToastController } from 'ionic-angular';
import { SoapService } from '../soap.service';
 
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass,sc_code } from '../../config';
/**
 * Generated class for the KategoriPengajuanListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kategori-pengajuan-list',
  providers: [SoapService],
  templateUrl: 'kategori-pengajuan-list.html',
})
export class KategoriPengajuanListPage {
  isLoading:boolean = true;
  kategoriList:Array<any> = [];
  loading:any;
  userdataTPK:any;
  userdataIPCContact:any;  
  fakeUsers: Array<any> = new Array(5);

  constructor(
    public navCtrl: NavController,  
    public navParams: NavParams,    
    public viewCtrl: ViewController, 
    public soapService:SoapService,
    public loadingCtrl:LoadingController,
    public storage:Storage,
    public alertCtrl:AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidEnter() {      
    this.storage.get('userdataTPK').then((val) => {
      this.userdataTPK = val;
      this.storage.get('userdataIPCContact').then((val2) => {
        this.userdataIPCContact = val2;
        this.getKategoriList(''); 
      });
      
    });   
  }

  getKategoriList(type) {  
    this.isLoading = true;
    this.soapService
    .post(api_base_url,'eoffice_data_kategori_ipcc',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass,        
        id_dir: this.userdataIPCContact['ID_DIR']
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));
      // console.log(responData);
      if (responData['rcmsg'] == "SUCCESS") {
        this.kategoriList = []; 
        if (responData['data'].length > 0 && !this.isEmptyObject(responData['data'][0])) {
          for (let i=0; i < responData['data'].length; i++) {
            this.kategoriList.push(responData['data'][i]);
          }                        
        }         
        // console.log(this.kategoriList);
      } else {        
        let toast = this.toastCtrl.create({
          message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present(); 
      } 
      if (type == '') {           
      } else {
        type.complete();
      }
      this.isLoading = false;
      
    })
    .catch(error => {
      // console.log(error);
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();   
      if (type == '') {

      } else {
        type.complete();
      }

      this.isLoading = false;
    });
  } 

  doRefresh(refresher) {     
    this.getKategoriList(refresher);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriPengajuanListPage');
  }

  openModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage,{}, {
      enableBackdropDismiss: true,
      showBackdrop:true
      // cssClass:'my-modal'
    });
    modal.present();
    modal.onDidDismiss((data)=> {    
      this.getKategoriList(''); 
    });
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
