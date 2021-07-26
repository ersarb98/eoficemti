import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass, sc_code } from '../../config';
import { SoapService } from '../soap.service';
/**
 * Generated class for the LogSuratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-surat',
  providers: [SoapService],
  templateUrl: 'log-surat.html',
})
export class LogSuratPage {
  idSurat:any;
  loading:any;
  isLoading:boolean=false;
  logList:Array<any> = [];
  batasAtas = 1;
  batasBawah = 20;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public soapService: SoapService, 
    public toastCtrl: ToastController   
  ) {
    this.idSurat = navParams.get('idSurat');
    this.loadingPresent();
    this.getLog('first', '');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogSuratPage');
  }

  getLog(type, functionName) {    
    
    this.isLoading = true;
    this.soapService
    .post(api_base_url,'eoffice_log_surat',{fStream:JSON.stringify(
      {   usernameEDI : api_user,
          passwordEDI : api_pass,
          id_surat : atob(this.idSurat), 
          atas : this.batasAtas,
          bawah : this.batasBawah
      }    
    )}).then(result => {
      var responData = JSON.parse(String(result));      
      if (responData['rcmsg'] == "SUCCESS") {    
        if (type == 'refresh' && functionName != '') {
          this.logList = [];
        }    
        if (responData['data']['Log_Surat'].length > 0 && !this.isEmptyObject(responData['data']['Log_Surat'][0])) {
          for (var i = 0; i < responData['data']['Log_Surat'].length; i++) {
            this.logList.push(responData['data']['Log_Surat'][i]);
          }
        }           
      } else {
        let toast = this.toastCtrl.create({
          message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();  
      } 
      
      if (type == 'first' && functionName == '' ) {
        this.loadingDismiss();
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }      
    })
    .catch(error => {      
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();     
            
      if (type == 'first' && functionName == '' ) {
        this.loadingDismiss();        
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();        
      }
    });
  }

  doInfinite(infiniteScroll) {
    if (this.logList.length >= 10) {
      this.batasAtas = this.batasBawah + 1;
      this.batasBawah = this.batasBawah + 20;
      this.getLog('infinite', infiniteScroll);  
    } else {
      infiniteScroll.complete();
    }
    
  }

  doRefresh(refresher) {
    this.batasAtas = 1;
    this.batasBawah = 20;

    this.getLog('refresh',refresher);
  }

  loadingPresent() {
    this.loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",       
      cssClass: 'transparent',      
    });
    this.loading.present();
  }

  loadingDismiss() {
    if(this.loading.present()) {
      this.loading.dismiss(); 
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

}
