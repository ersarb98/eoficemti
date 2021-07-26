import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';
/**
 * Generated class for the ApproveKoreksiAbsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approve-koreksi-absen',
  providers: [SoapService],
  templateUrl: 'approve-koreksi-absen.html',
})
export class ApproveKoreksiAbsenPage {
  ApprovalForm: FormGroup;
  status: any;
  is_tno: any;
  dataKoreksi: any;
  errorMsg: any;
  userdataTPK: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _fb: FormBuilder,
    public viewCtrl: ViewController,
    public soapService: SoapService,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {

    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
    });
    this.status = navParams.get('status');
    this.dataKoreksi = navParams.get('dataKoreksi');
    // console.log(this.dataKoreksi);
    this.is_tno = navParams.get('is_tno');

    this.ApprovalForm = this._fb.group({
      fcKomentarDatang: ['', Validators.compose([
        Validators.required
      ])],
      fcKomentarPulang: ['', Validators.compose([
        Validators.required
      ])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApproveKoreksiAbsenPage');
  }

  submit() {
    if ((this.dataKoreksi['KETERANGAN KOREKSI DATANG'] == '' || this.dataKoreksi['KETERANGAN KOREKSI DATANG'] == null) && (this.dataKoreksi['STATUS KOREKSI DATANG'] == '' || this.dataKoreksi['STATUS KOREKSI DATANG'] == '')) {
      if (this.ApprovalForm.controls.fcKomentarPulang.value != '') {
        this.sendData();
      } else {
        // console.log('error pulang');
        this.errorMsg = '*Field Tidak Boleh Kosong';
      }
    } else if ((this.dataKoreksi['KETERANGAN KOREKSI PULANG'] == '' || this.dataKoreksi['KETERANGAN KOREKSI PULANG'] == null) && this.dataKoreksi['STATUS KOREKSI PULANG'] == '' || this.dataKoreksi['STATUS KOREKSI PULANG'] == null) {
      if (this.ApprovalForm.controls.fcKomentarDatang.value != '') {
        this.sendData();
      } else {
        // console.log('error datang');
        this.errorMsg = '*Field Tidak Boleh Kosong';
      }
    } else {
      if (this.ApprovalForm.controls.fcKomentarDatang.value != '' && this.ApprovalForm.controls.fcKomentarPulang.value != '') {
        this.sendData();
      } else {
        this.errorMsg = '*Field Tidak Boleh Kosong';
      }
    }
  }

  sendData() {
    var tno = this.is_tno ? "1" : "0";    
    var msg="";
    if (this.status == 1) {
      msg="Anda yakin ingin approve koreksi absen bawahan ?"
    } else if (this.status == 0) {
      msg="Anda yakin ingin decline koreksi absen bawahan ?"
    } else {
      // console.log('error here');
    }

    let alert = this.alertCtrl.create({
      subTitle: msg,
      cssClass: 'alert',
      buttons: [
        {
          text: 'TIDAK',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'YA',
          handler: () => {
            let loading = this.loadingCtrl.create({
              spinner: 'dots',
              content: "Mohon Tunggu...",
              cssClass: 'transparent',
              //dismissOnPageChange:true
            });
            loading.present();
            this.soapService.post(api_base_url, 'eoffice_absen_confirm', {
              fStream: JSON.stringify({
                usernameEDI: api_user,
                passwordEDI: api_pass,
                nipp: this.dataKoreksi['NIPP'],
                id_koreksi: this.dataKoreksi['ID KOREKSI'],
                komen_datang: this.ApprovalForm.controls.fcKomentarDatang.value,
                komen_pulang: this.ApprovalForm.controls.fcKomentarPulang.value,
                is_tno: this.is_tno ? "1" : "0",
                confirm: this.status,
              }
              )
            }).then(result => {
              var responData = JSON.parse(String(result));
              if (responData['rcmsg'] == "SUCCESS") {                
                this.viewCtrl.dismiss().then(() => {
                  if (this.status == 1) {
                    this.sendNotif('approve');
                  } else if (this.status == 0) {
                    this.sendNotif('decline');
                  } else {
                    // console.log('error here');
                  }

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
                // console.log(error);
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
      ]
    });
    alert.present();
  }

  sendNotif(type) {    
    this.soapService
      .post(api_base_url, 'eoffice_notif_imove_nipp', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            nipp: [this.dataKoreksi['NIPP']],
            data: {
              "res": "AbsenListPage"
            },
            content: {
              "en": type == 'approve' ? "Pengajuan Koreksi Absen Anda Disetujui Oleh " + this.userdataTPK['data']['NAMA'] : "Pengajuan Koreksi Absen Anda Ditolak Oleh " + this.userdataTPK['data']['NAMA']
            },
            heading : {
              "en": "Pengajuan Koreksi Absen"
            },
            id_kategori: '',
            id_user: '',
            id_jabatan: ''
          }

        )
      }).then(result => {
        let hasil = JSON.parse(String(result));        
        this.navCtrl.pop();
      }).catch(error => {
        // console.log(error);
        this.navCtrl.pop();

      });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}



