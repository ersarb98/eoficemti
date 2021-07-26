import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from 'ionic-angular';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass} from '../../config';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { not } from '@angular/compiler/src/output/output_ast';


/**
 * Generated class for the CutiDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuti-detail',
  providers: [SoapService],
  templateUrl: 'cuti-detail.html',
})
export class CutiDetailPage {
  isLoading: boolean = true;
  userdataTPK: any;
  messageData: any;
  nipp: any;
  messageDetail: any;
  linkSurat: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public inAppBrowser: InAppBrowser
  ) {

  }

  ionViewWillLoad() {
    this.messageData = this.navParams.get('data');
    this.nipp = this.navParams.get('nipp');    
    this.getDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CutiDetailPage');
  }

  getDetail() {
    this.isLoading = true;
    this.soapService
      .post(api_base_url, 'eoffice_viewmail', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            nipp: this.nipp,
            linkSurat: this.messageData['Location'],
            from_modul: 'cuti'
          }
        )
      }).then(result => {
        var responData = JSON.parse(String(result));        

        if (responData['rcmsg'] == "SUCCESS") {
          this.messageDetail = responData['data'];          

          this.linkSurat = this.messageDetail['Link Surat Asli'];
        } else {
          let toast = this.toastCtrl.create({
            message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
        // loading.dismiss();
        this.isLoading = false;
      })
      .catch(error => {        
        let toast = this.toastCtrl.create({
          message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        // loading.dismiss();
        this.isLoading = false;
      });
  }

  isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  goToLogSurat() {
    this.navCtrl.push('LogSuratPage', {
      idSurat: this.messageDetail['ID Surat']
    });
  }

  downloadInbox(data) {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mengunduh surat...",
      cssClass: 'transparent',
      dismissOnPageChange: true
    });
    loading.present();
    this.soapService
      .post(api_base_url, 'find_file_cuti', {
        fStream: JSON.stringify(
          {
            "usernameEDI": api_user,
            "passwordEDI": api_pass,
            "fileName": data,
            "id_surat":this.messageDetail['ID Surat'],
            "jenis_surat":this.messageDetail['Kode Jenis Surat'],
            "no_surat":''
          }
        )
      }).then(result => {
        var responData = JSON.parse(String(result));        
        loading.dismiss(); 
        const options: InAppBrowserOptions = {
          zoom: 'no'
        }

        const browser = this.inAppBrowser.create(responData['data']['LINK'], '_system', options);

      })
      .catch(error => {        
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal download surat, silahkan coba lagi',
          buttons: ['OK']
        });
        alert.present();
        loading.dismiss();
      });
  }

  replaceNomorSurat(noSurat) {
    var result = '';
    console.log(noSurat);
    //result = noSurat.replace(/[-.\/]/g, "_"); 

    // result = result.replace(/-/g, '_');    
    //return result + '.pdf';
    return '';
  }


}
