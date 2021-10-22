import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from 'ionic-angular';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';

/**
 * Generated class for the SppdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sppd-list',
  providers: [SoapService],
  templateUrl: 'sppd-list.html',
})
export class SppdListPage {
  userdataTPK: any;
  isLoading: Boolean = true;
  sppdList: Array<any> = [];
  fakeUsers: Array<any> = new Array(5);
  batasAtas = 1;
  batasBawah = 10;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SppdListPage');

  }

  ionViewDidEnter() {
    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      this.sppdList = [];
      this.batasAtas = 1;
      this.batasBawah = 10;
      this.getSppdList('first', '');
    });
  }

  goToForm() {
    let modal = this.modalCtrl.create("AddSppdPage", {
    }, {
      enableBackdropDismiss: true,
      showBackdrop: true,
      // cssClass:'my-modal2' 
    });
    modal.present();

    modal.onDidDismiss(data => {
      if (data != null) {
        this.sppdList = [];
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.getSppdList('first', '');
      }
    });
  }

  getSppdList(type, functionName) {
    if (type == 'first' && functionName == '') {
      this.isLoading = true;
    }
    this.soapService
      .post(api_base_url, 'eoffice_sppd_list', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            id_user: this.userdataTPK['data']['IDUSER'],
            // id_user:'1497',v
            no_pengajuan: '',
            perihal: '',
            penanggung_jawab: '',
            tgl_pengajuan: '',
            start_date: '',
            end_date: '',
            kota_tujuan: '',
            atas: this.batasAtas,
            bawah: this.batasBawah
          }
        )
      }).then(result => {
        var responData = JSON.parse(String(result));
        console.log(responData);
        if (responData['rcmsg'] == "SUCCESS") {
          if (type == 'refresh' && functionName != '') {
            this.sppdList = [];
          }
          if (responData['data'].length > 0) {
            for (var i = 0; i < responData['data'].length; i++) {
              this.sppdList.push(responData['data'][i]);
            }
          }
        } else {
          let toast = this.toastCtrl.create({
            message: 'Gagal mendapatkan data SPPD, silahkan coba kembali.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }

        if (type == 'first' && functionName == '') {
          this.isLoading = false;
        } else if (type == 'infinite' && functionName != '') {
          functionName.complete();
        } else if (type == 'refresh' && functionName != '') {
          functionName.complete();
        }

      })
      .catch(error => {
        console.log(error);
        let toast = this.toastCtrl.create({
          message: 'Gagal mendapatkan data SPPD, periksa koneksi internet anda.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();

        if (type == 'first' && functionName == '') {
          this.isLoading = false;
        } else if (type == 'infinite' && functionName != '') {
          functionName.complete();
        } else if (type == 'refresh' && functionName != '') {
          functionName.complete();
        }

        this.isLoading = false;
      });
  }

  doInfinite(infiniteScroll) {
    if (this.sppdList.length >= 10) {
      this.batasAtas = this.batasBawah + 1;
      this.batasBawah = this.batasBawah + 10;
      this.getSppdList('infinite', infiniteScroll);
    } else {
      infiniteScroll.complete();
    }
  }

  doRefresh(refresher) {
    this.batasAtas = 1;
    this.batasBawah = 10;
    this.getSppdList('refresh', refresher);
  }

  searchSppd() {
    const modal = this.modalCtrl.create('SearchSppdPage');
    modal.present();
  }

  goToDetail(message) {
    console.log(message['IS_REVISI'] ); 
    if (message['KETERANGAN'] == 'SIMPAN') {
      let alert = this.alertCtrl.create({
        title: message['PERIHAL'],
        subTitle: '',
        cssClass: 'alert',
        buttons: [
          {
            text: 'PREVIEW',

            handler: () => {
              this.navCtrl.push("InboxDetailPage", {
                from_modul: 'sppd',
                messageData: message,
                nipp: this.userdataTPK['data']['NIPP'],
                userdataTPK: this.userdataTPK
              });
            }
          },
          {
            text: 'EDIT',

            handler: () => {

            }
          },
          {
            text: 'DELETE',

            handler: () => {
              this.deleteSPPD(message);
            }
          }
        ]
      });
      alert.present();
    } else if (message['IS_REVISI'] == true) {
      let alert = this.alertCtrl.create({
        title: message['PERIHAL'],
        subTitle: '',
        cssClass: 'alert',
        buttons: [
          {
            text: 'PREVIEW',

            handler: () => {
              this.navCtrl.push("InboxDetailPage", {
                from_modul: 'sppd',
                messageData: message,
                nipp: this.userdataTPK['data']['NIPP'],
                userdataTPK: this.userdataTPK
              });
            }
          },
          {
            text: 'REVISI',

            handler: () => {
              this.navCtrl.push("InboxDetailPage", {
                from_modul: 'sppd',
                messageData: message,
                nipp: this.userdataTPK['data']['NIPP'],
                userdataTPK: this.userdataTPK,
                isRevisi: true
              });
            }
          },
          {
            text: 'PELAPORAN',

            handler: () => {
            }
          }
        ]
      });
      alert.present();
    } else {
      this.navCtrl.push("InboxDetailPage", {
        from_modul: 'sppd',
        messageData: message,
        nipp: this.userdataTPK['data']['NIPP'],
        userdataTPK: this.userdataTPK
      });
    }

  }

  deleteSPPD(data) {
    let alert = this.alertCtrl.create({
      title: "Apakah anda yakin ingin menghapus pengajuan ini?",
      subTitle: '',
      cssClass: 'alert',
      buttons: [
        {
          text: 'Ya',

          handler: () => {
            let loading = this.loadingCtrl.create({
              spinner: 'dots',
              content: "Menghapus pengajuan...",
              cssClass: 'transparent',
              dismissOnPageChange: true
            });
            loading.present();
            this.soapService
              .post(api_base_url, 'eoffice_delete_sppd', {
                fStream: JSON.stringify(
                  {
                    usernameEDI: api_user,
                    passwordEDI: api_pass,
                    id_surat: data['ID_SURAT']
                  }
                )
              }).then(result => {
                var responData = JSON.parse(String(result));
                console.log(responData);
                if (responData['rcmsg'] == "SUCCESS") {
                  var findIndex = this.sppdList.findIndex(x =>x.ID_SURAT.includes(data['ID_SURAT']));
                  this.sppdList.splice(findIndex, 1);

                  let toast = this.toastCtrl.create({
                    message: 'Pengajuan berhasil dihapus.',
                    duration: 3000,
                    position: 'bottom'
                  });
                  toast.present();
                  
                } else {
                  let toast = this.toastCtrl.create({
                    message: 'Gagal menghapus data SPPD, silahkan coba kembali.',
                    duration: 3000,
                    position: 'bottom'
                  });
                  toast.present();
                }
                loading.dismiss();
              })
              .catch(error => {
                console.log(error);
                let toast = this.toastCtrl.create({
                  message: 'Gagal menghapus data SPPD, periksa koneksi internet anda.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                loading.dismiss();
              });
          }
        },
        {
          text: 'Tidak',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }


}
