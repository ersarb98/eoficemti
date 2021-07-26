import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass, api_p2b_url } from '../../config';
import { DatePipe } from '@angular/common';
import { P2bDetailPage } from '../p2b-detail/p2b-detail';
/**
 * Generated class for the RencanaKerjaBawahanListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rencana-kerja-bawahan-list',
  providers: [SoapService],
  templateUrl: 'rencana-kerja-bawahan-list.html',
})
export class RencanaKerjaBawahanListPage {
  userdataTPK:any;
  year:any;
  rencanaKerjaList: Array<any> = []; 
  p2buser:any;
  fakeUsers: Array<any> = new Array(5);
  loading:any;
  isLoading:Boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public soapService:SoapService,
    public loadingCtrl:LoadingController,
    public storage:Storage,
    public alertCtrl:AlertController,
    public datepipe: DatePipe,
    public toastCtrl: ToastController
  ) {
    
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RencanaKerjaBawahanListPage');    
  }

  ionViewWillEnter() {  
    // this.loading = this.loadingCtrl.create({
    //   spinner: 'dots',
    //   content: "Mohon Tunggu...",
    //   cssClass: 'transparent',
    //   dismissOnPageChange: true
    // });
    // this.loading.present();      
    this.year = this.datepipe.transform(new Date(), 'yyyy'); 
    this.storage.get('userdataTPK').then((val) => {
      this.userdataTPK = val;   
      this.getP2bUser();   
      
    });        
  }

  getList() {  
    this.soapService
    .post(api_p2b_url,'eoffice_p2b_rencana_bawahan',{fStream:JSON.stringify(
      {
        usernameEDI : api_user,
        passwordEDI : api_pass,
        id_jab: this.p2buser['P2B_ID_JAB_USER'] 
      }
    )}).then(result => {
      
      var responData = JSON.parse(String(result));          
      console.log(responData);
      if (responData['rcmsg'] == "SUCCESS") {        
        this.rencanaKerjaList = [];
        if (responData['data']['Data List Evaluasi'].length > 0) {
          for(let i =0; i < responData['data']['Data List Evaluasi'].length;i++) {
            this.rencanaKerjaList.push(responData['data']['Data List Evaluasi'][i]);
          }
        }

        if (responData['data']['Data List Keberatan'].length > 0) {
          for(let i =0; i < responData['data']['Data List Keberatan'].length;i++) {
            this.rencanaKerjaList.push(responData['data']['Data List Keberatan'][i]);
          }
        }

        if (responData['data']['Data List Rencana'].length > 0) {
          for(let i =0; i < responData['data']['Data List Rencana'].length;i++) {
            this.rencanaKerjaList.push(responData['data']['Data List Rencana'][i]);
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
      //this.loading.dismiss();           
      this.isLoading = false;
    })
    .catch(error => {      
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      // this.loading.dismiss();
      this.isLoading = false;          
    });
  }

  goToDetail(data) { 
    this.navCtrl.push(P2bDetailPage,{ 
      userdataTPK : this.userdataTPK,
      p2bdata : data,
      p2buser : this.p2buser,
      type: 'koreksi'
    });
  }

  getP2bUser() {
    this.isLoading = true;
    this.soapService
      .post(api_p2b_url, 'eoffice_p2b_user', {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: this.userdataTPK.data.NIPP         
        }         
        )
      }).then(result => {
        var responData = JSON.parse(String(result));
        if (responData['rcmsg'] == "SUCCESS") {          
          this.p2buser = responData['data'];          
          this.getList();
        } else {                        
          let toast = this.toastCtrl.create({
            message: responData['rcmsg'],
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          // this.loading.dismiss();
          this.isLoading = false;
        }
      })
      .catch(error => {        
        let toast = this.toastCtrl.create({
          message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.isLoading = false;
        // this.loading.dismiss();
      });
  }

  convertMonths(month) {
    switch (month) {
      case '1':
          return "Januari";          
      case '2':
          return "Februari";          
      case '3':
          return "Maret";          
      case '4':
          return "April";          
      case '5':
          return "Mei";          
      case '6':
          return "Juni";          
      case '7':
          return "Juli";          
      case '8':
          return "Agustus";
      case '9':
          return "September";
      case '10':
          return "Oktober";          
      case '11':
          return "November";        
      case '12':
          return "Desember";          
      default:
          return "false";          
    }
  }

}
