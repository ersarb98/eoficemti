import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController, ViewController } from 'ionic-angular';
import {DatePicker} from '@ionic-native/date-picker';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the SearchSppdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-sppd',
  providers: [SoapService],
  templateUrl: 'search-sppd.html',
})
export class SearchSppdPage {
  userdataTPK:any;
  isLoading: Boolean = false;
  sppdList: Array<any> = [];
  fakeUsers: Array<any> = new Array(5);  
  batasAtas = 1;
  batasBawah = 10;
  
  noPengajuan:any = '';
  perihal:any = '';
  penanggungJawab:any = '';
  tglPengajuan:any = '';
  startDate:any = '';
  endDate:any = '';
  kotaTujuan:any = '';



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public datePicker: DatePicker,
    public datePipe: DatePipe
  ) {
    this.storage.get('userdataTPK').then(val => {      
      this.userdataTPK = val;            
        
    });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchSppdPage');
  }

  showDatePicker(type:number) {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(date => {
        if (type == 1) {
          this.startDate = this.datePipe.transform(date, 'dd-MM-yyyy'); 
        } else if (type == 2) {
          this.endDate = this.datePipe.transform(date, 'dd-MM-yyyy');
        } else if (type == 3) {
          this.tglPengajuan = this.datePipe.transform(date, 'dd-MM-yyyy');
        }
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  getSppdList(type, functionName) {    
    if (type == 'first' && functionName == '') {
      this.isLoading = true;  
    }    
    this.soapService
      .post(api_base_url, 'eoffice_sppd_list', {
        fStream: JSON.stringify(
          {
            usernameEDI : api_user, 
            passwordEDI : api_pass,
            id_user:this.userdataTPK['data']['IDUSER'],
            // id_user:,
            no_pengajuan : this.noPengajuan,
            perihal 		: this.perihal,
            penanggung_jawab : this.penanggungJawab,
            tgl_pengajuan : this.tglPengajuan,
            start_date : this.startDate,
            end_date : this.endDate,
            kota_tujuan : this.kotaTujuan,
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
          if (responData['data'].length > 0 ) {
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
        console.log(error) ;
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

  doSearch() {    
    this.batasAtas = 1;
    this.batasBawah = 20;
    this.sppdList = []; 
    this.getSppdList('first', '');    
  }

  closeModal(){
    this.viewCtrl.dismiss();
 }

 clearField() {
  this.noPengajuan = '';
  this.perihal= '';
  this.penanggungJawab= '';
  this.tglPengajuan= '';
  this.startDate= '';
  this.endDate= '';
  this.kotaTujuan= '';
}

goToDetail(message) {
  this.navCtrl.push("InboxDetailPage", {
    from_modul: 'sppd',
    messageData: message,
    nipp: this.userdataTPK['data']['NIPP'],
    userdataTPK: this.userdataTPK
  });
}

}
