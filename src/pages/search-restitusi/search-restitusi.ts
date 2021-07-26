import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import {DatePicker} from '@ionic-native/date-picker';
import { DatePipe } from '@angular/common';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass,sc_code } from '../../config';
import { Platform } from 'ionic-angular';
import { CurrencyPipe } from '@angular/common';


/**
 * Generated class for the SearchRestitusiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-restitusi',
  providers: [SoapService],
  templateUrl: 'search-restitusi.html',
})
export class SearchRestitusiPage {
  startDate:any;
  endDate:any;
  statusRestitusi:any;
  nomorRestitusi:any;

  restitusiList:Array<any> = [];
  loading:any;
  batasAtas = 1;
  batasBawah = 50;
  isLoading:boolean = true;
  userdata:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:ViewController,     
    public storage: Storage,        
    public loadingCtrl: LoadingController,
    public soapService: SoapService,
    public alertCtrl: AlertController,  
    public datePipe: DatePipe,
    public datePicker: DatePicker,
    public platform: Platform,
    public currencyPipe: CurrencyPipe,
    public toastCtrl: ToastController
  ) {
    this.storage.get('userdata').then(val => {      
      this.userdata = val;                    
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchRestitusiPage');
  }

  showDatePicker(type:number) {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      //minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),    
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(date => {
        if (type == 1) {
          this.startDate = this.datePipe.transform(date, 'dd-MM-yyyy'); 
        } else if (type == 2) {   
          this.endDate = this.datePipe.transform(date, 'dd-MM-yyyy');        
        }
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  doSearch() {
    // console.log(this.perihal);
    // console.log(this.tglMulai);
    // console.log(this.tglMulai);
    // console.log(this.penanggungJawab);
    console.log('do search');
    this.getSppdList();
  }

  getSppdList() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",       
      cssClass: 'transparent',
      dismissOnPageChange:true
    });
    loading.present();
    this.isLoading = true;
    console.log(this.userdata['data']['NIPP']);
    this.soapService
    .post(api_base_url,'eoffice_bypass_wso',{fStream:JSON.stringify(
      {
        sc_type: 'searchrestitusi',
        sc_code: sc_code,        
        data : {
          person_id : this.userdata['data']['PERSON_ID'], 
          no_restitusi: this.nomorRestitusi,
          status_restitusi: this.statusRestitusi,
          tgl_pengajuan: this.startDate,
          tgl_pengajuan_akhir: this.endDate,       
          atas : this.batasAtas,
          bawah : this.batasBawah
        }         
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));
            console.log(responData);
      if (responData['rcmsg'] == "SUCCESS") {            
        this.restitusiList = [];          
        if (responData['data'].length > 0 && !this.isEmptyObject(responData['data'][0])) {
          for (var i = 0; i < responData['data'].length; i++) {
            this.restitusiList.push(responData['data'][i]);
          }
        }
        console.log(this.restitusiList);        
      } else {
        let toast = this.toastCtrl.create({
          message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();           
      }        
      loading.dismiss(); 
      this.isLoading = false;
    })
    .catch(error => {
      console.log(error);
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();   
      loading.dismiss();
      this.isLoading = false;
    });
  }

  
  closeModal(){
  	 this.viewCtrl.dismiss();
  }  

  convertCurrency(  money) {    
    if (money != '') {
      let hasil = this.currencyPipe.transform(money,'IDR');
      return hasil.substr(3);
    } else {
      return '0';
    }
  }

  isEmptyObject(obj) {
    for(var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          return false;
       }
    }  
    return true;
  }  

  clearField() {
    this.nomorRestitusi = '';
    this.statusRestitusi = '';
    this.startDate = '';
    this.endDate = '';
  }

  checkFocus(data) {
    this.showDatePicker(data);
  }
}
