import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController, App, ViewController } from 'ionic-angular';
import {api_base_url, api_user, api_pass, api_res} from '../../config';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the FingerprintModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerprint-modal',
  providers: [SoapService],
  templateUrl: 'fingerprint-modal.html',
})
export class FingerprintModalPage {
  isLoading: Boolean = false;
  userdataTPK: any;
  dataValidasi: any;
  activityList: any;

  personId: any;
  date: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public storage: Storage,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public datepipe: DatePipe,
    public alertCtrl: AlertController,
    public http: HttpClient,
    public appCtrl: App,
    public viewCtrl: ViewController
  ) {
    // this.dataValidasi = navParams.get('dataValidasi');
    console.log(this.dataValidasi);
    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      // this.personId = this.userdataTPK['data']['PERSON_ID'];
      console.log(this.userdataTPK);
      this.isLoading = true;
      this.getValidasi();
    });

    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let bulan = (currentMonth < 10) ? "0" + (currentMonth + 1).toString() : (currentMonth + 1).toString();
    let tgl = date.getDate();    
    this.date = tgl + '-' + bulan + '-' + currentYear;
    console.log(this.date);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintModalPage');
  }

  openActivityPage() {
    if (this.dataValidasi['CHECK_IN'] == false || this.dataValidasi['CHECK_OUT'] == false) {
      this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push('InsertNoteAttendancePage', {
        "fromPage": "AbsenActivityPage",
        "shiftDate": this.dataValidasi['SHIFT_DATE']
      });    
    } else {
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Belum ada data absensi, silahkan melakukan Check In/Check Out terlebih dahulu.',
        buttons: ['OK']
      });
      alert.present(); 
    }

    // let loading = this.loadingCtrl.create({
    //   spinner: 'dots',
    //   content: "Mohon Tunggu...",
    //   cssClass: 'transparent',
    //   dismissOnPageChange: true
    // });
    // loading.present();
    // this.soapService.post(api_base_url, 'am6_detail_absen', {
    //   fStream: JSON.stringify(
    //     {
    //       usernameEDI: api_user,
    //       passwordEDI: api_pass,
    //       person_id: this.personId,
    //       tgl: this.date
    //     }
    //   )
    // }).then(result => {
    //   var responData = JSON.parse(String(result));

    //   if (responData['rcmsg'] == "SUCCESS") {
    //     this.activityList = responData['data'];

    //     if (this.activityList.length != 0) {
    //       // if (this.activityList['CHECK_IN_PHOTO'] != null) {
    //       //   this.activityList['CHECK_IN_PHOTO'] = url_image + '/' + this.activityList['CHECK_IN_PHOTO'];
    //       // } 
    //       // if (this.activityList['CHECK_OUT_PHOTO'] != null) {
    //       //   this.activityList['CHECK_OUT_PHOTO'] = url_image + '/' + this.activityList['CHECK_OUT_PHOTO'];
    //       // }
    //       console.log(this.activityList);
    //       if (this.activityList['CHECK_IN'] == '' && this.activityList['CHECK_OUT'] == '') {
    //         let alert = this.alertCtrl.create({
    //           title: '',
    //           subTitle: 'Belum ada data absensi, silahkan melakukan Check In/Check Out terlebih dahulu.',
    //           buttons: ['OK']
    //         });
    //         alert.present();
    //       } else if (this.activityList['CHECK_IN'] != '' && this.activityList['CHECK_OUT'] == '') {
    //         this.navCtrl.push('InsertNoteAttendancePage', {
    //           "transactionId": '',
    //           "checkType": 'CHECK_IN',
    //           "attendanceType": this.activityList['CHECK_IN_TYPE'],
    //           "long": this.activityList['CHECK_IN_LONGITUDE'],
    //           "lat": this.activityList['CHECK_IN_LATITUDE'],
    //           "photo": this.activityList['CHECK_IN_PHOTO'],
    //           "checkTime": this.activityList['CHECK_IN'],
    //           'date': this.activityList['DATE'],
    //           "activity": this.activityList['CHECK_IN_ACTIVITY'],
    //           "fromPage": "AbsenActivityPage"
    //         });
    //       } else if (this.activityList['CHECK_IN'] == '' && this.activityList['CHECK_OUT'] != '') {
    //         this.navCtrl.push('InsertNoteAttendancePage', {
    //           "transactionId": '',
    //           "checkType": 'CHECK_OUT',
    //           "attendanceType": this.activityList['CHECK_OUT_TYPE'],
    //           "long": this.activityList['CHECK_OUT_LONGITUDE'],
    //           "lat": this.activityList['CHECK_OUT_LATITUDE'],
    //           "photo": this.activityList['CHECK_OUT_PHOTO'],
    //           "checkTime": this.activityList['CHECK_OUT'],
    //           'date': this.activityList['DATE'],
    //           "activity": this.activityList['CHECK_OUT_ACTIVITY'],
    //           "fromPage": "AbsenActivityPage"
    //         });
    //       } else if (this.activityList['CHECK_IN'] != '' && this.activityList['CHECK_OUT'] != '') {
    //         this.navCtrl.push('InsertNoteAttendancePage', {
    //           "transactionId": '',
    //           "checkType": 'CHECK_OUT',
    //           "attendanceType": this.activityList['CHECK_OUT_TYPE'],
    //           "long": this.activityList['CHECK_OUT_LONGITUDE'],
    //           "lat": this.activityList['CHECK_OUT_LATITUDE'],
    //           "photo": this.activityList['CHECK_OUT_PHOTO'],
    //           "checkTime": this.activityList['CHECK_OUT'],
    //           'date': this.activityList['DATE'],
    //           "activity": this.activityList['CHECK_OUT_ACTIVITY'],
    //           "fromPage": "AbsenActivityPage"
    //         });
    //       }

    //     }
    //     loading.dismiss();

    //   } else {
    //     console.log(responData);
    //     let toast = this.toastCtrl.create({
    //       message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();
    //     loading.dismiss();
    //   }

    // }).catch(error => {
    //   console.log(error);
    //   let toast = this.toastCtrl.create({
    //     message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
    //     duration: 3000,
    //     position: 'bottom'
    //   });
    //   toast.present();
    //   loading.dismiss();
    // });


    // this.http.get(api_base_url_apim_absensi + 'preview?' + 'person=' + this.personId + '&tgl=' + this.date, {
    //   headers
    // }).subscribe(data => {
    //   console.log(data);
    //   this.activityList = data;     
    //   console.log(this.activityList);
    //   if (this.activityList['CHECK_IN'] == '' && this.activityList['CHECK_OUT'] == '') {
    //     let alert = this.alertCtrl.create({
    //       title: '',
    //       subTitle: 'Belum ada data absensi, silahkan melakukan Check In/Check Out terlebih dahulu.',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //   } else if (this.activityList['CHECK_IN'] != '' && this.activityList['CHECK_OUT'] == '') {
    //     this.navCtrl.push('InsertNoteAttendancePage', {
    //       "transactionId": '',
    //       "checkType": 'CHECK_IN',
    //       "attendanceType": this.activityList['CHECK_IN_TYPE'],
    //       "long": this.activityList['CHECK_IN_LONGITUDE'],
    //       "lat": this.activityList['CHECK_IN_LATITUDE'],
    //       "photo": this.activityList['CHECK_IN_PHOTO'],
    //       "checkTime": this.activityList['CHECK_IN'],
    //       'date': this.activityList['DATE'],
    //       "activity": this.activityList['CHECK_IN_ACTIVITY'],
    //       "fromPage": "AbsenActivityPage"
    //     });
    //   } else if (this.activityList['CHECK_IN'] == '' && this.activityList['CHECK_OUT'] != '') {
    //     this.navCtrl.push('InsertNoteAttendancePage', {
    //       "transactionId": '',
    //       "checkType": 'CHECK_OUT',
    //       "attendanceType": this.activityList['CHECK_OUT_TYPE'],
    //       "long": this.activityList['CHECK_OUT_LONGITUDE'],
    //       "lat": this.activityList['CHECK_OUT_LATITUDE'],
    //       "photo": this.activityList['CHECK_OUT_PHOTO'],
    //       "checkTime": this.activityList['CHECK_OUT'],
    //       'date': this.activityList['DATE'],
    //       "activity": this.activityList['CHECK_OUT_ACTIVITY'],
    //       "fromPage": "AbsenActivityPage"
    //     });
    //   } else if (this.activityList['CHECK_IN'] != '' && this.activityList['CHECK_OUT'] != '') {
    //     this.navCtrl.push('InsertNoteAttendancePage', {
    //       "transactionId": '',
    //       "checkType": 'CHECK_OUT',
    //       "attendanceType": this.activityList['CHECK_OUT_TYPE'],
    //       "long": this.activityList['CHECK_OUT_LONGITUDE'],
    //       "lat": this.activityList['CHECK_OUT_LATITUDE'],
    //       "photo": this.activityList['CHECK_OUT_PHOTO'],
    //       "checkTime": this.activityList['CHECK_OUT'],
    //       'date': this.activityList['DATE'],
    //       "activity": this.activityList['CHECK_OUT_ACTIVITY'],
    //       "fromPage": "AbsenActivityPage"
    //     });
    //   }
    //   loading.dismiss();
    // }, err => {
    //   console.log(err);
    //   let toast = this.toastCtrl.create({
    //     message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
    //     duration: 3000,
    //     position: 'bottom'
    //   });
    //   toast.present();
    //   loading.dismiss();
    // });
  }

  openTeamPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push('AbsenTeamHadirkoePage', {
      "idUser": this.userdataTPK['data']['IDUSER'],
      "date": this.datepipe.transform(new Date(), 'dd-MM-yyyy'),
      "fromPage": "AbsenActivityPage"
    }); 
  }

  openPage(page, type) {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(page, {
      "type": type,
      "long": "",
      "lat": "",
      "fromPage": "FingerprintModalPage",
      "dataValidasi":this.dataValidasi
    });
    // this.navCtrl.push(page, {
    //   "type": type,
    //   "long": "",
    //   "lat": "",
    //   "fromPage": "FingerprintModalPage"
    // }).then(() => {

    // });
  }

  getValidasi() {
    // this.soapService.post(api_res, 'am3_check_shift', {
    //   fStream: JSON.stringify(
    //     {
    //       usernameEDI: api_user,
    //       passwordEDI: api_pass,
    //       person_id: this.userdataTPK['data']['PERSON_ID'],
    //       nipp: this.userdataTPK['data']['NIPP'],
    //       id_user: this.userdataTPK['data']['IDUSER']
    //     }
    //   )
    // })
    //   .then(result => {
    //     console.log(result);
    //     var responData = JSON.parse(String(result));
    //     this.dataValidasi = responData;        
    //     this.isLoading = false;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.isLoading = false;
    //   });

    // var date = new Date();
    // var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
    // var rand = Math.floor((Math.random() * 100000000) + 1);

    // var headers = new HttpHeaders({
    //   'Accept': "*/*",
    //   // 'Access-Control-Allow-Origin': 'http://localhost:8100',
    //   'x-ibm-client-id': client_id,
    //   'x-ibm-client-secret': client_secret,
    //   'username': api_user,
    //   'password': api_pass,
    //   'externalId': rand.toString(),
    //   'timestamp': formattedDate,
    //   'Content-Type': 'application/json'
    // });

    this.http.post(api_res + 'am3_check_shift.php', {
      usernameEDI: api_user,
      passwordEDI: api_pass,
      person_id: this.userdataTPK['data']['PERSON_ID'],
      nipp: this.userdataTPK['data']['NIPP'],
      id_user: this.userdataTPK['data']['IDUSER']            
    }).subscribe(data => {
      console.log(data);
      //var responData = JSON.parse(data);
      this.dataValidasi = data['data'];
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    });
  }



}
