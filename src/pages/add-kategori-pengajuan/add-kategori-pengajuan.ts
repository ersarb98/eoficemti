import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, AlertController, Searchbar, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SoapService } from '../soap.service';

import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass,sc_code } from '../../config';

/**
 * Generated class for the AddKategoriPengajuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-kategori-pengajuan',
  providers: [SoapService],
  templateUrl: 'add-kategori-pengajuan.html',
})
export class AddKategoriPengajuanPage {
  public addKategoriForm:FormGroup;
  isLoading:boolean=true;
  loading:any;
  userdata:any;
  userdataIPCContact:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _fb: FormBuilder,
    public viewCtrl: ViewController, 
    public soapService:SoapService,
    public loadingCtrl:LoadingController,
    public storage:Storage,
    public alertCtrl:AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController

  ) {
    this.addKategoriForm = this._fb.group({
      fcKategori: ['', Validators.compose([
        Validators.required
      ])]               
    });
  }

  ionViewDidEnter() {   
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",       
      cssClass: 'transparent',
      dismissOnPageChange:true
    });
    loading.present();
    this.isLoading = true;  
    this.storage.get('userdataIPCContact').then((val2) => {
      this.userdataIPCContact = val2;
      //console.log(this.userdataIPCContact);
      loading.dismiss();
      this.isLoading = false;

    });          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddKategoriPengajuanPage');
  }

  sendData() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",       
      cssClass: 'transparent',
      //dismissOnPageChange:true
    });
    loading.present();
    this.isLoading = true;
    this.soapService
    .post(api_base_url,'eoffice_add_cat_ipcc',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass,                        
        kategori: this.addKategoriForm.controls.fcKategori.value,
        id_dir: this.userdataIPCContact['ID_DIR']

      }
    )}).then(result => {
      var responData = JSON.parse(String(result));
      //console.log(responData);
      if (responData['rcmsg'] == "SUCCESS") {
        let toast = this.toastCtrl.create({
          message: 'Tambah Kategori Berhasil',
          duration: 3000,
          position: 'bottom'
        });
        toast.present().then(() => {
          this.viewCtrl.dismiss();
        });
        
      } else {        
        let toast = this.toastCtrl.create({
          message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present(); 
      }  
      loading.dismiss();      
    })
    .catch(error => {
      //console.log(error);
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(); 
      loading.dismiss();             
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }


}
