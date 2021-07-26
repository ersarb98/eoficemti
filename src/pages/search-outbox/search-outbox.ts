import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import {DatePicker} from '@ionic-native/date-picker';
import { DatePipe } from '@angular/common';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass,sc_code } from '../../config';
import { Platform } from 'ionic-angular';

/** 
 * Generated class for the SearchOutboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-outbox',
  providers: [SoapService],
  templateUrl: 'search-outbox.html',
})
export class SearchOutboxPage {
  perihal:any = "";
  jenisSurat:any="";
  noSurat:any="";
  statusSurat:any="";
  startDate:any = "";
  endDate:any = "";  

  messages:Array<any> = [];
  loading:any;
  batasAtas = 1;
  batasBawah = 10;
  isLoading:boolean = false;
  userdataTPK:any;
  fakeUsers: Array<any> = new Array(5);

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
    public toastCtrl: ToastController

  ) {
    this.storage.get('userdataTPK').then(val => {      
      this.userdataTPK = val;            
        
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchOutboxPage');
  }

  showDatePicker(type:number) {
    this.datePicker.show({
      date: new Date(),
      maxDate: new Date().valueOf(),
      mode: 'date',      
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
    this.batasAtas = 1;
    this.batasBawah = 10;
    this.messages = [];
    if (this.startDate == '' && this.endDate != '') {
      this.startDate = this.endDate;
    } else if (this.endDate == '' && this.startDate != '') {
      this.endDate = this.startDate;
    }
    this.getmessages('first', '');
  } 

  getmessages(type, functionName) {   
    if (type == 'first' && functionName == '' ) {      
      this.isLoading = true;
    }        
    this.soapService
    .post(api_base_url,'eoffice_outbox',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        iduser : this.userdataTPK['data']['IDUSER'],
        idjabatan : this.userdataTPK['data']['IDJABATAN'],
        jn_surat : this.jenisSurat,
        no_surat: this.noSurat,
        status_surat: this.statusSurat,
        page : this.batasAtas,
        jmlpage : this.batasBawah,
        perihal : this.perihal,
        tanggalawal : this.startDate,
        tanggalakhir : this.endDate    
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));            
      if (responData['rcmsg'] == "SUCCESS") {
        if (responData['data']['List Outbox'].length > 0 ) {
          for (var i = 0; i < responData['data']['List Outbox'].length; i++) {
            this.messages.push(responData['data']['List Outbox'][i]);
          }          
        }                        
        
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan pesan',
          buttons: ['OK']
        });
        alert.present();
      }
      
      if (type == 'first' && functionName == '' ) {
        
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }

      this.isLoading = false;  
    })
    .catch(error => {      
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan pesan',
        buttons: ['OK']
      });
      alert.present();      

      if (type == 'first' && functionName == '' ) {
        
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }
      this.isLoading = false;
    });
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  goToDetail(message) {
    this.navCtrl.push("OutboxDetailPage",{
      messageData: message,
      nipp: this.userdataTPK['data']['NIPP']
    });
  }

  doInfinite(infiniteScroll) {     
    if (this.messages.length >= 10) {
      this.batasAtas++;      
      this.getmessages('infinite', infiniteScroll);  
    } else {
      infiniteScroll.complete();
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
    this.perihal = "";
    this.jenisSurat = "";
    this.noSurat ="";
    this.statusSurat ="";
    this.startDate = "";
    this.endDate = "";  
  }

  checkFocus(data) {
    this.showDatePicker(data);
  }

}
