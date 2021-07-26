import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';
import { api_base_url, api_user, api_pass, url_image, api_res } from '../../config';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { a } from '@angular/core/src/render3';
import { from } from 'rxjs/observable/from';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

// declare var google;

/**
 * Generated class for the AbsenMobileDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absen-mobile-detail',
  providers: [SoapService],
  templateUrl: 'absen-mobile-detail.html',
})
export class AbsenMobileDetailPage {
  userdataTPK: any;
  date: any;
  shift: any;
  idUser: any;
  nama: any;

  isLoading: Boolean = true;
  absenDetail: any;
  isLoadingCheckInAddress: Boolean = false;
  checkInAddress: any;
  isLoadingCheckOutAddress: Boolean = false;
  checkOutAddress: any;
  fromPage: any;

  geocoder: any;
  activityList = [];
  nipp: any;




  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public storage: Storage,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public http: HttpClient,
    public sanitizer: DomSanitizer,
    public modalCtrl: ModalController,
    public datepipe: DatePipe

  ) {
    // this.geocoder = new google.maps.Geocoder;
    this.date = navParams.get('date');
    this.shift = navParams.get('shift');
    this.idUser = navParams.get('id_user');
    this.nipp = navParams.get('nipp');
    this.nama = navParams.get('nama');
    this.fromPage = navParams.get('fromPage');
    console.log(this.fromPage);
    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      this.getDetail();
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsenMobileDetailPage');
  }

  getDetail() {
    // this.isLoading = true;
    // this.soapService.post(api_base_url, 'am6_detail_absen', {
    //   fStream: JSON.stringify(
    //     {
    //       usernameEDI: api_user,
    //       passwordEDI: api_pass,
    //       person_id: this.idUser,
    //       tgl: this.date
    //     }
    //   )
    // }).then(result => {
    //   var responData = JSON.parse(String(result));

    //   if (responData['rcmsg'] == "SUCCESS") {
    //     this.absenDetail = responData['data'];
    //     console.log(this.absenDetail);
    //     if (this.absenDetail != null) {
    //       if (this.absenDetail['CHECK_IN_PHOTO'] != null) {
    //         this.absenDetail['CHECK_IN_PHOTO'] = url_image + '/' + this.absenDetail['CHECK_IN_PHOTO'];
    //       } 
    //       if (this.absenDetail['CHECK_OUT_PHOTO'] != null) {
    //         this.absenDetail['CHECK_OUT_PHOTO'] = url_image + '/' + this.absenDetail['CHECK_OUT_PHOTO'];
    //       }

    //       if (this.absenDetail['CHECK_IN_GEO'] != null) {
    //         this.checkInAddress = this.absenDetail['CHECK_IN_GEO'];
    //       } 
    //       if (this.absenDetail['CHECK_OUT_GEO'] != null) {
    //         this.checkOutAddress = this.absenDetail['CHECK_OUT_GEO'];
    //       }

    //     }        
    //     this.isLoading = false;

    //   } else {
    //     console.log(responData);
    //     let toast = this.toastCtrl.create({
    //       message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();
    //     this.isLoading = false;
    //   }

    // })
    //   .catch(error => {
    //     console.log(error);
    //     let toast = this.toastCtrl.create({
    //       message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();
    //     this.isLoading = false;
    //   });
    var date = new Date();
    var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
    var rand = Math.floor((Math.random() * 100000000) + 1);

    var headers = new HttpHeaders({
      'Accept': "*/*",
      //'Access-Control-Allow-Origin':'http://localhost:8100',
      // 'x-ibm-client-id': client_id,
      // 'x-ibm-client-secret': client_secret,
      'username': api_user,
      'password': api_pass,
      'externalId': rand.toString(),
      'timestamp': formattedDate,
      'Content-Type': 'application/json'
    });

    console.log({
      'usernameEDI': api_user,
      'passwordEDI': api_pass,
      'id_user': this.idUser,
      'tgl': this.date
    });

    this.http.post(api_res + 'am6_detail_absen.php', {
      'usernameEDI': api_user,
      'passwordEDI': api_pass,
      'id_user': this.idUser,
      'tgl': this.date
    }).subscribe(data => {
      console.log(data);
      if (data['rcmsg'] == 'SUCCESS') {
        this.absenDetail = data['data'];
        console.log(this.absenDetail);
        if (this.absenDetail != null) {
          if (this.absenDetail['CHECK_IN_PHOTO'] != null) {
            this.absenDetail['CHECK_IN_PHOTO'] = url_image + '/' + this.absenDetail['CHECK_IN_PHOTO'];
          }
          if (this.absenDetail['CHECK_OUT_PHOTO'] != null) {
            this.absenDetail['CHECK_OUT_PHOTO'] = url_image + '/' + this.absenDetail['CHECK_OUT_PHOTO'];
          }

          // if (this.absenDetail['CHECK_IN_PHOTO'] != "") {
          //   this.absenDetail['CHECK_IN_PHOTO'] = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + this.absenDetail['CHECK_IN_PHOTO']);
          // }
          // if (this.absenDetail['CHECK_OUT_PHOTO'] != "") {
          //   this.absenDetail['CHECK_OUT_PHOTO'] = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + this.absenDetail['CHECK_OUT_PHOTO']);
          // }



          if (this.absenDetail['CHECK_IN_GEO'] != "") {
            this.checkInAddress = this.absenDetail['CHECK_IN_GEO'];
          }
          if (this.absenDetail['CHECK_OUT_GEO'] != "") {
            this.checkOutAddress = this.absenDetail['CHECK_OUT_GEO'];
          }

        }
        // this.isLoading = false;
        this.getDetailActivity();
      } else {
        let toast = this.toastCtrl.create({
          message: 'Gagal mendapatkan data, Silahkan Coba Kembali.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.isLoading = false;
      }

    }, err => {
      console.log(err);
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.isLoading = false;
    });
  }

  geocodeLatLngCheckIn(lat, long) {

    var latlng = { lat: parseFloat(lat), lng: parseFloat(long) };
    this.geocoder.geocode({ 'location': latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          //console.log(results[0].formatted_address); 
          // this.currAddress = results[0];   
          var geoResult = results[0].formatted_address;
          // if (geoResult.length > 125) {
          //   this.checkInAddress = geoResult.substring(0,125) + "...";            
          // } else {
          //   this.checkInAddress = geoResult;            
          // }
          this.checkInAddress = geoResult;
          this.isLoadingCheckInAddress = false;


          //console.log(results[0].formatted_address);                         
        } else {
          console.log('location not found');
          this.isLoadingCheckInAddress = false;
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
        this.isLoadingCheckInAddress = false;
      }

    });
  }

  geocodeLatLngCheckOut(lat, long) {

    var latlng = { lat: parseFloat(lat), lng: parseFloat(long) };
    this.geocoder.geocode({ 'location': latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          //console.log(results[0].formatted_address); 
          // this.currAddress = results[0];   
          var geoResult = results[0].formatted_address;
          // if (geoResult.length > 125) {
          //   this.checkOutAddress = geoResult.substring(0,125) + "...";            
          // } else {
          //   this.checkOutAddress = geoResult;            
          // }          
          this.checkOutAddress = geoResult;
          this.isLoadingCheckOutAddress = false;

          //console.log(results[0].formatted_address);                         
        } else {
          console.log('location not found');
          this.isLoadingCheckOutAddress = false;
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
        this.isLoadingCheckOutAddress = false;
      }
    });
  }

  openMap(long, lat) {
    this.navCtrl.push("MapPage", {
      "type": "",
      "long": long,
      "lat": lat,
      "fromPage": "AbsenMobileDetailPage"
    }).then(() => {

    });
  }

  openPhoto(data) {
    this.navCtrl.push("PhotoViewerPage", {
      "photo": data
    }).then(() => {

    });
    // console.log(data);
    // var options = {
    //   share: true,
    //   headers: 'HTTP'
    // };
    // var myURL = data;
    // this.photoViewer.show(myURL, '', options);
  }

  openModalRating(type, rateFor) {
    var myType = '';

    if (type == 'rate') {
      myType = 'my-modal2';
    } else if (type == 'task') {
      myType = 'my-modal3';
    }

    let modal = this.modalCtrl.create("RateAbsensiPage", {
      // kepadaList : this.userdataTPK['data']['LISTOFFICER'],
      "data": this.absenDetail,
      "type": type,
      "shiftDate": this.date,
      'fromPage': 'AbsenMobileDetailPage',
      'rateFor': rateFor
    }, {
      enableBackdropDismiss: true,
      showBackdrop: true,
      cssClass: myType
    });
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
      if (data != null) {
        if (data['isSubmit']) {
          this.getDetail();
        }
      }

    });
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }





  getDetailActivity() {
    this.http.post(api_res + "am7_activity.php", {
      "usernameEDI": "EDI-USERNAME",
      "passwordEDI": "RURJLVBBU1NXT1JE",
      "id_user": this.idUser,
      "nipp": this.nipp,
      "arr_param": [],
      "action": "SELECT",
      "tgl": this.date,
      'select_type': 'preview'

    }, {
      // headers
    }).subscribe(data => {
      console.log(data);
      if (data['rcmsg'] == "SUCCESS") {
        // for (var i=0;i<data['data'].length;i++) {
        //   this.activityList.push(
        //     {
        //       'att_activity_id':data['data'][i]['ATT_ACTIVITY_ID'],
        //       'activity':data['data'][i]['ACTIVITY'],
        //       'status':data['data'][i]['STATUS'],
        //       'tgl_awal':data['data'][i]['TGL_AWAL'],
        //       'tgl_akhir':data['data'][i]['TGL_AKHIR'],  
        //     }
        //   )         
        // }

        this.activityList = data['data'];
        this.isLoading = false;
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan data activity, coba kembali.',
          buttons: ['OK']
        });
        alert.present();
        this.isLoading = false;
      }
    }, err => {
      console.log(err);
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan data activity, coba kembali.',
        buttons: ['OK']
      });
      alert.present();
      this.isLoading = false;
    });
  }



}
