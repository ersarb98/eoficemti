import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { api_base_url, api_user, api_pass, sc_code, api_res } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { SoapService } from '../soap.service';

/**
 * Generated class for the RateAbsensiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate-absensi',
  providers: [SoapService],
  templateUrl: 'rate-absensi.html',
})
export class RateAbsensiPage {
  rate: any = '';
  data: any;
  type: any;
  userdataTPK: any;

  activity: any = '';
  fromPage:any;
  shiftDate:any;
  rateFor:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public http: HttpClient,
    public storage: Storage,
    public soapService:SoapService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public datepipe: DatePipe
  ) {
    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      console.log(this.userdataTPK);
    });
    this.type = navParams.get('type');
    this.data = navParams.get('data');
    this.shiftDate = navParams.get('shiftDate');
    // this.shiftDate = datepipe.transform(this.shiftDate,'dd/MM/yyyy');
    this.rateFor = navParams.get('rateFor');
    this.fromPage = navParams.get('fromPage');

    console.log(this.data); 

    if (this.data['CHECK_IN_ACTIVITY_SPV'] != '') {
      this.activity = this.data['CHECK_IN_ACTIVITY_SPV'];
    }

    console.log(this.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateAbsensiPage');
  }

  onModelChange() {
    console.log(this.rate);
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  isDisable() {
    if (this.type == 'rate' && this.fromPage == 'AbsenMobileDetailPage') {    
      if (this.rateFor == 'bawahan') {
        if (this.rate == '' || this.rate == null || this.activity == '' || this.activity == null) {
          return true;
        } else {
          return false; 
        }
      } else if (this.rateFor == 'atasan') {
        if (this.rate == '' || this.rate == null) {
          return true;
        } else {
          return false;
        }
      }
      
    } else if (this.type == 'rate' && this.fromPage == 'InsertNoteAttendancePage') {
      if (this.rate == '' || this.rate == null) {
        return true;
      } else {
        return false;
      }
    } else if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
      if (this.activity == '' || this.activity == null) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  doInsert() {
    let loader = this.loadingCtrl.create({
      content: "Mohon tunggu...",
      spinner: 'dots',
      cssClass: 'transparent',
      dismissOnPageChange: true

    });
    loader.present();  

    let rate = '0';
    let rate_spv = '0';
    let activity_spv = '';
    let check_type = '';
    let pesan = '';

    // if (this.fromPage == 'AbsenMobileDetailPage') {
      
    //   if (this.type == 'rate') {
    //     rate_spv = this.rate;
    //     rate = (this.data['CHECK_IN_RATE'] == '') ? '0' : this.data['CHECK_IN_RATE'];
    //     this.activity = this.data['CHECK_IN_ACTIVITY_SPV'];
    //   } else if (this.type == 'task') {
    //     rate_spv = this.rate;
    //     rate = (this.data['CHECK_IN_RATE'] == '') ? '0' : this.data['CHECK_IN_RATE'];        
    //   }    
      
    // } else if (this.fromPage == 'InsertNoteAttendancePage') {
    //   rate = this.rate;
    //   rate_spv = (this.data['CHECK_IN_RATE_SPV'] == '') ? '0' : this.data['CHECK_IN_RATE_SPV'];
    // }
    if (this.type == 'rate' && this.fromPage == 'AbsenMobileDetailPage') {
      if (this.rateFor == 'bawahan') {
        rate_spv = this.rate;
        activity_spv = this.activity;
        check_type = 'OUT';         
        pesan = 'Evaluasi'; 
      } else if (this.rateFor == 'atasan') {
        rate = this.rate;
        activity_spv = this.data['CHECK_IN_ACTIVITY_SPV'];
        check_type = 'IN';
        pesan = 'Evaluasi'; 
      }    
    } else if (this.type == 'rate' && this.fromPage == 'InsertNoteAttendancePage') {
      rate = this.rate;
      activity_spv = this.data['CHECK_IN_ACTIVITY_SPV'];
      check_type = 'IN';
      pesan = 'Evaluasi'; 
    } else if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
      check_type = 'IN';
      activity_spv = this.activity;  
      pesan = 'Arahan';   
    } else {
      return true;
    }   

    var date = new Date();
    var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
    var rand = Math.floor((Math.random() * 100000000) + 1);

    var headers = new HttpHeaders({
      'Accept':"*/*",
      //'Access-Control-Allow-Origin':'http://localhost:8100',
      // 'x-ibm-client-id': client_id,
      // 'x-ibm-client-secret': client_secret,
      'username': api_user,
      'password': api_pass,
      'externalId': rand.toString(),
      'timestamp': formattedDate,
      'Content-Type': 'application/json'
    });



    // this.http.post(api_base_url_apim_absensi + 'absen', {        
    //   "nipp": this.data['NIPP'],
    //   "photo": '',
    //   "lat": '',
    //   "long": '',
    //   "attendance_type": '',
    //   "geo": '',
    //   "check_type": check_type,
    //   'activity': '',
    //   'activity_spv': activity_spv,
    //   'rate': rate.toString(),
    //   'rate_spv': rate_spv.toString(),
    //   'act_type': '3'      
    // }, {
    //   // headers
    // }).subscribe(data => {
    //   console.log(data);
    //   if (data['status'] == "SUCCESS") {
    //     let toast = this.toastCtrl.create({
    //       message: "Berhasil menambahkan " + pesan + " .",
    //       duration: 4000,
    //       position: 'bottom'
    //     });
    //     loader.dismiss();
    //     toast.present();
    //     this.viewCtrl.dismiss({
    //       isSubmit: true
    //     });
    //   } else {
    //     let toast = this.toastCtrl.create({
    //       message: "gagal menambahkan " + pesan + ", coba kembali.",
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();
    //     loader.dismiss();
    //     this.navCtrl.setRoot('HomePage');
    //   }
    // }, err => {
    //   console.log(err);
    //   let toast = this.toastCtrl.create({
    //     message: "gagal menambahkan "  +  pesan + ", coba kembali.",
    //     duration: 3000,
    //     position: 'bottom'
    //   });
    //   toast.present();
    //   loader.dismiss();
    //   this.navCtrl.setRoot('HomePage');
    // });

    if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
      var tgl_awal  = this.datepipe.transform(new Date(),'dd-MM-yyyy');
      this.http.post(api_res + "am7_activity.php", {
        "usernameEDI": "EDI-USERNAME",
        "passwordEDI": "RURJLVBBU1NXT1JE",
        "id_user":this.data['ID_USER'],
        "nipp":this.data['NIPP'],
        "arr_param": [
          {
            'att_activity_id':'',
            'activity': '(Arahan Atasan) ' + activity_spv,
            'status':'',
            'tgl_awal': tgl_awal,
            'tgl_akhir':'',  
          }
        ],
        "action":'INSERT',
        "tgl": "",      
  
      }, {
        // headers
      }).subscribe(data => {
        console.log(data);
        if (data['rcmsg'] == "SUCCESS") {
          // this.pushNotif();
          let toast = this.toastCtrl.create({
            message: "Berhasil menambahkan " + pesan + " .",
            duration: 4000,
            position: 'bottom'
          });
          loader.dismiss();
          toast.present();
          this.viewCtrl.dismiss({
            isSubmit: true
          });
        } else {
          let toast = this.toastCtrl.create({
            message: "gagal menambahkan " + pesan + ", coba kembali.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
          // this.navCtrl.setRoot('HomePage');
          this.viewCtrl.dismiss({
            isSubmit: false
          });    
        }
      }, err => {
        let toast = this.toastCtrl.create({
          message: "gagal menambahkan "  +  pesan + ", coba kembali.",
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        loader.dismiss();
        // this.navCtrl.setRoot('HomePage');
        this.viewCtrl.dismiss({
          isSubmit: false
        });
      });
    } else {
      this.http.post(api_res + "am1_insert_absen_res.php", {
        "usernameEDI": "EDI-USERNAME",
        "passwordEDI": "RURJLVBBU1NXT1JE",
        "nipp": this.data['NIPP'],
        "photo": '',
        "lat": '',
        "long": '',
        "attendance_type": '',
        "geo": '',
        "check_type": check_type,
        'activity': '',
        'activity_spv': activity_spv,
        'rate': rate.toString(),
        'rate_spv': rate_spv.toString(),
        'act_type': '3',
        'shift_date':this.shiftDate
  
      }, {
        // headers
      }).subscribe(data => {
        console.log(data);
        if (data['rcmsg'] == "SUCCESS") {
          let toast = this.toastCtrl.create({
            message: "Berhasil menambahkan " + pesan + " .",
            duration: 4000,
            position: 'bottom'
          });
          loader.dismiss();
          toast.present();
          this.viewCtrl.dismiss({
            isSubmit: true
          });
        } else {
          let toast = this.toastCtrl.create({
            message: "gagal menambahkan " + pesan + ", coba kembali.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
          // this.navCtrl.setRoot('HomePage');
          this.viewCtrl.dismiss({
            isSubmit: false
          });
        }
      }, err => {
        console.log(err);
        let toast = this.toastCtrl.create({
          message: "gagal menambahkan "  +  pesan + ", coba kembali.",
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        loader.dismiss();
        // this.navCtrl.setRoot('HomePage');
        this.viewCtrl.dismiss({
          isSubmit: false
        });
      });
  
    }
   

  }

  pushNotif() {
    this.soapService
          .post(api_res,'eoffice_notif_imove_nipp',{fStream:JSON.stringify(
            {
              usernameEDI : api_user, 
              passwordEDI : api_pass,
              nipp		: [this.data['NIPP']],
              data		: {
                "res": "HomePage"
              },
              content	: {
                "en":"Anda mendapat arahan/tugas tambahan dari Atasan."
              },
              heading : {
                "en" : "Arahan/Tugas Tambahan dari Atasan"
              },
              id_kategori: ''
            }
          
          )}).then(result => {
            let hasil = JSON.parse(String(result));
            console.log("push notif : " + hasil);                        
          }).catch(error => {
              
            console.log(error);            

              
          });	
  }

}
