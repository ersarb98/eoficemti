import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the OutboxDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outbox-detail',
  providers: [SoapService],
  templateUrl: 'outbox-detail.html',
})
export class OutboxDetailPage {
  isLoading: boolean = true;
  showAllPenerima: boolean = false;
  messageData: any;
  nipp: any;
  messageDetail: any;
  penerima: Array<any> = [];
  loading: any;
  attachmentList: Array<any> = [];

  dasarSuratPerintah: any;
  isiPerintah: any;
  showDetailPesan: Boolean = false;

  showAllPenerimaJabatan: boolean = false;
  showAllTembusanJabatan: boolean = false;
  showAllPenerimaPekerja: boolean = false;
  showAllTembusanPekerja: boolean = false;
  showAllPenerimaNonPekerja: boolean = false;
  showAllTembusanNonPekerja: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public inAppBrowser: InAppBrowser,
    public toastCtrl: ToastController
  ) {

  }
  
  show() {
    this.showDetailPesan = !this.showDetailPesan;
  }

  ionViewWillLoad() {
    this.messageData = this.navParams.get('messageData');
    this.nipp = this.navParams.get('nipp');   
    this.getDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutboxDetailPage');
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
            from_modul: 'outbox'
          }
        )
      }).then(result => {
        var responData = JSON.parse(String(result));        
        if (responData['rcmsg'] == "SUCCESS") {
          this.messageDetail = responData['data'];
          if (this.messageDetail['Jenis Surat'] == 'Surat Perintah') {
            this.dasarSuratPerintah = this.messageDetail['Isi Surat'].split('xxdasaxx_').pop().split('_xxperintxx_')[0] + '<br>';
            this.dasarSuratPerintah = this.dasarSuratPerintah.replace(/_/gi, "<br><br>");
            this.isiPerintah = this.messageDetail['Isi Surat'].split('_xxperintxx_')[1];
            this.isiPerintah = this.isiPerintah.replace(/_/gi, "<br><br>");           
          }

          this.attachmentList = this.messageDetail['Attachment'];
          this.getPenerima();          
        } else {
          let toast = this.toastCtrl.create({
            message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
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
        this.isLoading = false;
      });
  }

  // showMore() {
  //   this.showAllPenerima = !this.showAllPenerima;
  // }

  showMore(type) {

    //this.showAllPenerima = !this.showAllPenerima;
    if (type == 1) {
      this.showAllPenerimaJabatan = !this.showAllPenerimaJabatan;
    } else if (type == 2) {
      this.showAllTembusanJabatan = !this.showAllTembusanJabatan;
    } else if (type == 3) {
      this.showAllPenerimaPekerja = !this.showAllPenerimaPekerja;
    } else if (type == 4) {
      this.showAllTembusanPekerja = !this.showAllTembusanPekerja;
    } else if (type == 5) {
      this.showAllPenerimaNonPekerja = !this.showAllPenerimaNonPekerja;
    } else if (type == 6) {
      this.showAllTembusanNonPekerja = !this.showAllTembusanNonPekerja;
    } else {

    }
  }

  getPenerima() {

    if (this.messageDetail['Penerima Pekerja'] != null) {
      for (var i = 0; i < this.messageDetail['Penerima Pekerja'].length; i++) {
        this.penerima.push(this.messageDetail['Penerima Pekerja'][i]);
      }
    }

    if (this.messageDetail['Penerima Jabatan'] != null) {
      for (var i = 0; i < this.messageDetail['Penerima Jabatan'].length; i++) {
        this.penerima.push(this.messageDetail['Penerima Jabatan'][i]);
      }
    }

    if (this.messageDetail['Penerima Non Pekerja'] != null) {
      for (var i = 0; i < this.messageDetail['Penerima Non Pekerja'].length; i++) {
        this.penerima.push(this.messageDetail['Penerima Non Pekerja'][i]);
      }

    }

    if (this.messageDetail['Tembusan Pekerja'] != null) {
      for (var i = 0; i < this.messageDetail['Tembusan Pekerja'].length; i++) {
        this.penerima.push(this.messageDetail['Tembusan Pekerja'][i]);
      }

    }

    if (this.messageDetail['Tembusan Jabatan'] != null) {
      for (var i = 0; i < this.messageDetail['Penerima Jabatan'].length; i++) {
        this.penerima.push(this.messageDetail['Penerima Jabatan'][i]);
      }
    }

    if (this.messageDetail['Tembusan Non Pekerja'] != null) {
      for (var i = 0; i < this.messageDetail['Tembusan Non Pekerja'].length; i++) {
        this.penerima.push(this.messageDetail['Tembusan Non Pekerja'][i]);
      }

    }
    
  }

  subStrAttachment(data) {
    var str = data;
    var n = str.lastIndexOf('/');    
    return str.substring(n + 1);
  }

  goToLogSurat() {
    this.navCtrl.push('LogSuratPage', {
      idSurat: this.messageDetail['ID Surat']
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

  downloadInbox(data) {    
    this.loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "mohon tunggu...",
      cssClass: 'transparent',      
    });
    this.loading.present();
    this.soapService
      .post(api_base_url, 'find_file', {
        fStream: JSON.stringify(
          // {
          //   usernameEDI: api_user,
          //   passwordEDI: api_pass,
          //   fileName: data
          // }
          {
            "usernameEDI": api_user,
            "passwordEDI": api_pass,
            "fileName": data,
            "id_surat":this.messageDetail['ID Surat'],
            "jenis_surat":this.messageDetail['Kode Jenis Surat'],
            "no_surat":this.messageData['No_Surat']
          }
        )
      }).then(result => {
        var responData = JSON.parse(String(result));        
        this.loading.dismiss();
        const options: InAppBrowserOptions = {
          zoom: 'no'
        }
        
        const browser = this.inAppBrowser.create(responData['data']['LINK'], '_system', options);
      })
      .catch(error => {        
        let toast = this.toastCtrl.create({
          message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.loading.dismiss();
      });
  }

  downloadAttach(data) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBrowser.create(data, '_system', options);  
  }

}
