webpackJsonp([60],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerprintModalPageModule", function() { return FingerprintModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fingerprint_modal__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FingerprintModalPageModule = /** @class */ (function () {
    function FingerprintModalPageModule() {
    }
    FingerprintModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fingerprint_modal__["a" /* FingerprintModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fingerprint_modal__["a" /* FingerprintModalPage */]),
            ],
        })
    ], FingerprintModalPageModule);
    return FingerprintModalPageModule;
}());

//# sourceMappingURL=fingerprint-modal.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FingerprintModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FingerprintModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FingerprintModalPage = /** @class */ (function () {
    function FingerprintModalPage(navCtrl, navParams, soapService, storage, toastCtrl, loadingCtrl, datepipe, alertCtrl, http, appCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.datepipe = datepipe;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.isLoading = false;
        // this.dataValidasi = navParams.get('dataValidasi');
        console.log(this.dataValidasi);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            // this.personId = this.userdataTPK['data']['PERSON_ID'];
            console.log(_this.userdataTPK);
            _this.isLoading = true;
            _this.getValidasi();
        });
        var date = new Date();
        var currentYear = date.getFullYear();
        var currentMonth = date.getMonth();
        var bulan = (currentMonth < 10) ? "0" + (currentMonth + 1).toString() : (currentMonth + 1).toString();
        var tgl = date.getDate();
        this.date = tgl + '-' + bulan + '-' + currentYear;
        console.log(this.date);
    }
    FingerprintModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FingerprintModalPage');
    };
    FingerprintModalPage.prototype.openActivityPage = function () {
        if (this.dataValidasi['CHECK_IN'] == false || this.dataValidasi['CHECK_OUT'] == false) {
            this.viewCtrl.dismiss();
            this.appCtrl.getRootNav().push('InsertNoteAttendancePage', {
                "fromPage": "AbsenActivityPage",
                "shiftDate": this.dataValidasi['SHIFT_DATE']
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: '',
                subTitle: 'Belum ada data absensi, silahkan melakukan Check In/Check Out terlebih dahulu.',
                buttons: ['OK']
            });
            alert_1.present();
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
    };
    FingerprintModalPage.prototype.openTeamPage = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push('AbsenTeamHadirkoePage', {
            "idUser": this.userdataTPK['data']['IDUSER'],
            "date": this.datepipe.transform(new Date(), 'dd-MM-yyyy'),
            "fromPage": "AbsenActivityPage"
        });
    };
    FingerprintModalPage.prototype.openPage = function (page, type) {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(page, {
            "type": type,
            "long": "",
            "lat": "",
            "fromPage": "FingerprintModalPage",
            "dataValidasi": this.dataValidasi
        });
        // this.navCtrl.push(page, {
        //   "type": type,
        //   "long": "",
        //   "lat": "",
        //   "fromPage": "FingerprintModalPage"
        // }).then(() => {
        // });
    };
    FingerprintModalPage.prototype.getValidasi = function () {
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
        var _this = this;
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
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */] + 'am3_check_shift.php', {
            usernameEDI: __WEBPACK_IMPORTED_MODULE_2__config__["e" /* api_user */],
            passwordEDI: __WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_pass */],
            person_id: this.userdataTPK['data']['PERSON_ID'],
            nipp: this.userdataTPK['data']['NIPP'],
            id_user: this.userdataTPK['data']['IDUSER']
        }).subscribe(function (data) {
            console.log(data);
            //var responData = JSON.parse(data);
            _this.dataValidasi = data['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
        });
    };
    FingerprintModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-fingerprint-modal',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/fingerprint-modal/fingerprint-modal.html"*/'<!--\n  Generated template for the FingerprintModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding-top style="background-color:#FFF" scrollY="false" >\n  <p><b>Hadirkoe</b></p>\n  <hr>\n  <ion-grid class="my-grid" *ngIf="!isLoading && dataValidasi != null">\n  <!-- <ion-grid class="my-grid"> -->\n    <ion-row >\n      <ion-col col-3 >\n        <div *ngIf="dataValidasi[\'CHECK_IN\'] == true" (click)="openPage(\'MapPage\',\'checkin\')">\n          <img style="width: 45%;\n          height: auto;          \n          max-width: 35vw;" src="assets/flat-icon/checkin.png" /> \n          <span class="title">Check In</span>          \n        </div>                  \n        \n        <div *ngIf="dataValidasi[\'CHECK_IN\'] == false" style="opacity: 0.4;">\n          <img style="width: 45%;\n          height: auto;          \n          max-width: 35vw;" src="assets/flat-icon/checkin.png" /> \n          <span class="title">Check In</span>          \n        </div>  \n      </ion-col>\n      <ion-col col-3>\n        <div *ngIf="dataValidasi[\'CHECK_OUT\'] == true" (click)="openPage(\'MapPage\',\'checkout\')">\n          <img style="width: 45%;\n          height: auto;          \n          max-width: 35vw;" src="assets/flat-icon/checkout.png" />\n          <span class="title">Check Out</span>\n        </div>\n\n        <div *ngIf="dataValidasi[\'CHECK_OUT\'] == false" style="opacity: 0.4;">\n          <img style="width: 45%;\n          height: auto;          \n          max-width: 35vw;" src="assets/flat-icon/checkout.png" />\n          <span class="title">Check Out</span>\n        </div>\n\n      </ion-col> \n      <ion-col col-3>\n        <div (click)="openActivityPage()">\n          <img style="width: 45%;\n          height: auto;          \n          max-width: 35vw;" src="assets/flat-icon/activity.png" />\n          <span class="title">Activity</span>\n        </div>\n      </ion-col>     \n      <ion-col col-3>\n        <div (click)="openTeamPage()">\n          <img style="width: 45%;\n          height: auto;          \n          max-width: 35vw;" src="assets/flat-icon/team.png" />\n          <span class="title">Team</span> \n        </div>\n      </ion-col>     \n    </ion-row>   \n  </ion-grid>\n\n  <ion-grid class="my-grid" *ngIf="isLoading && dataValidasi == null" >\n    <ion-row >\n      <ion-col col-3 >\n        <div class="animate-skeleton-background load-icon">\n        </div>         \n      </ion-col>\n      <ion-col col-3 >\n        <div class="animate-skeleton-background load-icon">\n        </div>         \n      </ion-col>\n      <ion-col col-3>\n        <div class="animate-skeleton-background load-icon">                    \n        </div> \n      </ion-col> \n      <ion-col col-3>\n        <div class="animate-skeleton-background load-icon">                    \n        </div> \n      </ion-col>     \n    </ion-row>   \n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/fingerprint-modal/fingerprint-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], FingerprintModalPage);
    return FingerprintModalPage;
}());

//# sourceMappingURL=fingerprint-modal.js.map

/***/ })

});
//# sourceMappingURL=60.js.map