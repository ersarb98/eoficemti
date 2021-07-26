import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import {DatePicker} from '@ionic-native/date-picker';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass,sc_code } from '../../config';
import { DatePipe } from '@angular/common';
/**
 * Generated class for the SearchCutiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more in fo on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-search-cuti',
  providers: [SoapService],
  templateUrl: 'search-cuti.html',
})
export class SearchCutiPage {
  cutiType:any = "";
  approvalStatus:any ="";
  startDate:any ="";
  endDate:any ="";  
  cutiList:Array<any> = [];
  loading:any;
  batasAtas = 1;
  batasBawah = 20;
  isLoading:boolean = false;
  userdataTPK:any;
  fakeUsers: Array<any> = new Array(5);

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,    
    public storage: Storage,        
    public loadingCtrl: LoadingController,
    public soapService: SoapService,
    public datePicker: DatePicker,
    public alertCtrl: AlertController,    
    public datePipe: DatePipe,
    public toastCtrl: ToastController
  ) {

    this.storage.get('userdataTPK').then(val => {      
      this.userdataTPK = val;            
        
    });  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchCutiPage');
  }
  
  closeModal(){
  	 this.viewCtrl.dismiss();
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
        }
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  getCutiList(type, functionName) {      
    if (type == 'first' && functionName == '' ) {      
      this.isLoading = true; 
    }    
    this.soapService
    .post(api_base_url,'eoffice_cuti_list',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass,
        id_user:this.userdataTPK['data']['IDUSER'],
        search_jenis:this.cutiType,
        search_tgl_pengajuan:"",
        search_tgl_mulai: this.startDate,
        search_tgl_selesai:this.endDate,
        search_alasan:"",
        search_status: this.approvalStatus,
        atas: this.batasAtas,
        bawah: this.batasBawah      
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));      
      if (responData['rcmsg'] == "SUCCESS") {
        if (type == 'refresh' && functionName != '') {
          this.cutiList = [];
        }
        if (responData['data']['Cuti Personal'].length > 0 ) {
          for (var i = 0; i < responData['data']['Cuti Personal'].length; i++) {
            this.cutiList.push(responData['data']['Cuti Personal'][i]);
          }
        }        
      } else {
        let toast = this.toastCtrl.create({
          message: 'Gagal mendapatkan data cuti, silahkan coba kembali.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }

      if (type == 'first' && functionName == '') {
        
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }
      this.isLoading = false;  
    })
    .catch(error => {      
      let toast = this.toastCtrl.create({
        message: 'Gagal mendapatkan data cuti, periksa koneksi internet anda.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    
      if (type == 'first' && functionName == '') {
        
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }

      this.isLoading = false;
    });
  }

  doSearch() {    
    this.batasAtas = 1;
    this.batasBawah = 20;
    this.cutiList = []; 
    this.getCutiList('first', '');    
  }

  doInfinite(infiniteScroll) {
    if (this.cutiList.length >= 20) {
      this.batasAtas = this.batasBawah + 1;
      this.batasBawah = this.batasBawah + 20;
      this.getCutiList('infinite', infiniteScroll);  
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
    this.approvalStatus = "";
    this.cutiType = "";
    this.startDate = "";
    this.endDate = "";
  }

  checkFocus(data) {
    this.showDatePicker(data);
  }

  goToDetail(data) {    
    this.navCtrl.push("CutiDetailPage", {
      "data": data,
      "nipp": this.userdataTPK['data']['NIPP'],
      "userdataTPK": this.userdataTPK
    });
  }

}
