import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController  } from 'ionic-angular';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';

/**
 * Generated class for the KoreksiAbsenPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-koreksi-absen-personal',
  providers: [SoapService],
  templateUrl: 'koreksi-absen-personal.html',
})
export class KoreksiAbsenPersonalPage {
  ApprovalForm:FormGroup;
  userdataTPK:any;
  dataAbsen:any;
  jenisAbsen:any;
  errorMsg:any;
  alasanList:any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _fb: FormBuilder,
    public viewCtrl:ViewController,
    public soapService:SoapService,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {   

    this.userdataTPK = navParams.get('userdataTPK');
    this.dataAbsen = navParams.get('dataAbsen');
    this.jenisAbsen = navParams.get('jenisAbsen');    

    this.ApprovalForm = this._fb.group({
      fcAlasan: ['', Validators.compose([
        Validators.required
      ])],
      fcJmlHari: [1, Validators.compose([
        Validators.required
      ])],
      fcKeterangan: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.getAlasan();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KoreksiAbsenPersonalPage');
  }

  getAlasan() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",       
      cssClass: 'transparent',
      dismissOnPageChange:true
    });
    loading.present();
    this.soapService.post(api_base_url,'eoffice_absen_alasan',{fStream:JSON.stringify({
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        nipp : this.userdataTPK['data']['NIPP'],
        id_user: this.userdataTPK['data']['IDUSER'],
        tno: this.userdataTPK['data']['TNO']      
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));            
      if (responData['rcmsg'] == "SUCCESS") {         
        this.alasanList = [];
        this.alasanList = responData['data'];   

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
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      loading.dismiss();
    });
  }

  submit() {  
    if (this.ApprovalForm.controls.fcJmlHari.value < 1 ) {
      this.errorMsg = "*Jumlah hari tidak boleh 0";
    } else {
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
        content: "Mohon Tunggu...",       
        cssClass: 'transparent',
        dismissOnPageChange:true
      });
      loading.present();
      this.soapService.post(api_base_url,'eoffice_absen_koreksi',{fStream:JSON.stringify({
          usernameEDI : api_user, 
          passwordEDI : api_pass, 
          nipp : this.userdataTPK['data']['NIPP'],
          id_absen: this.dataAbsen['ID'],
          jenis_absen: this.jenisAbsen,
          absen_hari: this.ApprovalForm.controls.fcJmlHari.value,
          keterangan:  this.ApprovalForm.controls.fcKeterangan.value,
          alasan:  this.ApprovalForm.controls.fcAlasan.value
        }
      )}).then(result => {
        var responData = JSON.parse(String(result)); 
        // console.log(responData)           ;
        if (responData['rcmsg'] == "SUCCESS") {          
          let toast = this.toastCtrl.create({
            message: 'Koreksi Absen Berhasil',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.viewCtrl.dismiss({isCancel:false}).then(() => {
            this.sendNotif();
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
        let toast = this.toastCtrl.create({
          message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        loading.dismiss();
      });   
    }   
  }

  sendNotif() {
    this.soapService
    .post(api_base_url,'eoffice_notif_imove_nipp',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass,
        nipp		: [],
        data		: {
          "res": "KoreksiAbsenBawahanPage"          
        },
        content	: {
          "en": "Pengajuan Koreksi Absen dari " + this.userdataTPK['data']['NAMA'] + " membutuhkan tindak lanjut."
        },
        heading : {
          "en": "Pengajuan Koreksi Absen"
        },
        id_kategori: '',
        id_user: this.userdataTPK['data']['IDUSER'],
        id_jabatan: this.userdataTPK['data']['IDJABATAN']
      }
    
    )}).then(result => {
      let hasil = JSON.parse(String(result));                
      this.navCtrl.pop();
    }).catch(error => {                      
      this.navCtrl.pop();
        
    });
  }

  cancel() {
    this.viewCtrl.dismiss({isCancel:true});
  }

}
