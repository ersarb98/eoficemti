import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ToastController, LoadingController } from 'ionic-angular';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass, api_p2b_url } from '../../config';
import { DatePipe } from '@angular/common';
import { P2bDetailPage } from '../p2b-detail/p2b-detail';
/**
 * Generated class for the EvalBawahanListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eval-bawahan-list', 
  providers: [SoapService],
  templateUrl: 'eval-bawahan-list.html',
})
export class EvalBawahanListPage {
  userdataTPK:any;
  year:any;
  evalBawahanList: Array<any> = []; 
  p2buser:any;
  fakeUsers: Array<any> = new Array(5);
  isLoading: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public soapService:SoapService,
    public loadingCtrl: LoadingController,
    public storage:Storage,
    public alertCtrl:AlertController,
    public datepipe: DatePipe,
    public platform: Platform,
    public toastCtrl: ToastController
  ) {            
    this.platform.registerBackButtonAction(() => {
      // console.log('click');
      navCtrl.pop();
    });
    this.p2buser = navParams.get('p2buser');
  }

  ionViewWillEnter() {
    this.year = this.datepipe.transform(new Date(), 'yyyy'); 
    this.storage.get('userdataTPK').then((val) => {
      this.userdataTPK = val;      
      this.getList();
    });        
  }

  getList() {
    this.isLoading = true;      
    this.soapService
    .post(api_p2b_url,'eoffice_p2b_list_eval_bawah',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        id_jab: this.p2buser['P2B_ID_JAB_USER'],
        year: this.year
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));            
      if (responData['rcmsg'] == "SUCCESS") {
        // console.log(responData);
        this.evalBawahanList = [];
        if (responData['data'].length > 0) {
          for(let i =0; i < responData['data'].length;i++) {
            this.evalBawahanList.push(responData['data'][i]);
          }
        }
        // console.log(this.evalBawahanList);
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
      // console.log(error);
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.isLoading = false;   
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvalBawahanListPage');
  }

  goToDetail(data) {
    this.navCtrl.push(P2bDetailPage,{ 
      userdataTPK : this.userdataTPK,
      p2bdata : data,
      p2buser : this.p2buser 
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

  openTestPage(page) {
    this.navCtrl.push(page);
  }

}
