webpackJsonp([80],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenMobileDetailPageModule", function() { return AbsenMobileDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__absen_mobile_detail__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbsenMobileDetailPageModule = /** @class */ (function () {
    function AbsenMobileDetailPageModule() {
    }
    AbsenMobileDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__absen_mobile_detail__["a" /* AbsenMobileDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__absen_mobile_detail__["a" /* AbsenMobileDetailPage */]),
            ],
        })
    ], AbsenMobileDetailPageModule);
    return AbsenMobileDetailPageModule;
}());

//# sourceMappingURL=absen-mobile-detail.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenMobileDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// declare var google;
/**
 * Generated class for the AbsenMobileDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbsenMobileDetailPage = /** @class */ (function () {
    function AbsenMobileDetailPage(navCtrl, navParams, soapService, storage, toastCtrl, alertCtrl, http, sanitizer, modalCtrl, datepipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.datepipe = datepipe;
        this.isLoading = true;
        this.isLoadingCheckInAddress = false;
        this.isLoadingCheckOutAddress = false;
        this.activityList = [];
        // this.geocoder = new google.maps.Geocoder;
        this.date = navParams.get('date');
        this.shift = navParams.get('shift');
        this.idUser = navParams.get('id_user');
        this.nipp = navParams.get('nipp');
        this.nama = navParams.get('nama');
        this.fromPage = navParams.get('fromPage');
        console.log(this.fromPage);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getDetail();
        });
    }
    AbsenMobileDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbsenMobileDetailPage');
    };
    AbsenMobileDetailPage.prototype.getDetail = function () {
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
        var _this = this;
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
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': "*/*",
            //'Access-Control-Allow-Origin':'http://localhost:8100',
            // 'x-ibm-client-id': client_id,
            // 'x-ibm-client-secret': client_secret,
            'username': __WEBPACK_IMPORTED_MODULE_2__config__["e" /* api_user */],
            'password': __WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_pass */],
            'externalId': rand.toString(),
            'timestamp': formattedDate,
            'Content-Type': 'application/json'
        });
        console.log({
            'usernameEDI': __WEBPACK_IMPORTED_MODULE_2__config__["e" /* api_user */],
            'passwordEDI': __WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_pass */],
            'id_user': this.idUser,
            'tgl': this.date
        });
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */] + 'am6_detail_absen.php', {
            'usernameEDI': __WEBPACK_IMPORTED_MODULE_2__config__["e" /* api_user */],
            'passwordEDI': __WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_pass */],
            'id_user': this.idUser,
            'tgl': this.date
        }).subscribe(function (data) {
            console.log(data);
            if (data['rcmsg'] == 'SUCCESS') {
                _this.absenDetail = data['data'];
                console.log(_this.absenDetail);
                if (_this.absenDetail != null) {
                    if (_this.absenDetail['CHECK_IN_PHOTO'] != null) {
                        _this.absenDetail['CHECK_IN_PHOTO'] = __WEBPACK_IMPORTED_MODULE_2__config__["i" /* url_image */] + '/' + _this.absenDetail['CHECK_IN_PHOTO'];
                    }
                    if (_this.absenDetail['CHECK_OUT_PHOTO'] != null) {
                        _this.absenDetail['CHECK_OUT_PHOTO'] = __WEBPACK_IMPORTED_MODULE_2__config__["i" /* url_image */] + '/' + _this.absenDetail['CHECK_OUT_PHOTO'];
                    }
                    // if (this.absenDetail['CHECK_IN_PHOTO'] != "") {
                    //   this.absenDetail['CHECK_IN_PHOTO'] = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + this.absenDetail['CHECK_IN_PHOTO']);
                    // }
                    // if (this.absenDetail['CHECK_OUT_PHOTO'] != "") {
                    //   this.absenDetail['CHECK_OUT_PHOTO'] = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + this.absenDetail['CHECK_OUT_PHOTO']);
                    // }
                    if (_this.absenDetail['CHECK_IN_GEO'] != "") {
                        _this.checkInAddress = _this.absenDetail['CHECK_IN_GEO'];
                    }
                    if (_this.absenDetail['CHECK_OUT_GEO'] != "") {
                        _this.checkOutAddress = _this.absenDetail['CHECK_OUT_GEO'];
                    }
                }
                // this.isLoading = false;
                _this.getDetailActivity();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data, Silahkan Coba Kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.isLoading = false;
            }
        }, function (err) {
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
        });
    };
    AbsenMobileDetailPage.prototype.geocodeLatLngCheckIn = function (lat, long) {
        var _this = this;
        var latlng = { lat: parseFloat(lat), lng: parseFloat(long) };
        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
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
                    _this.checkInAddress = geoResult;
                    _this.isLoadingCheckInAddress = false;
                    //console.log(results[0].formatted_address);                         
                }
                else {
                    console.log('location not found');
                    _this.isLoadingCheckInAddress = false;
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
                _this.isLoadingCheckInAddress = false;
            }
        });
    };
    AbsenMobileDetailPage.prototype.geocodeLatLngCheckOut = function (lat, long) {
        var _this = this;
        var latlng = { lat: parseFloat(lat), lng: parseFloat(long) };
        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
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
                    _this.checkOutAddress = geoResult;
                    _this.isLoadingCheckOutAddress = false;
                    //console.log(results[0].formatted_address);                         
                }
                else {
                    console.log('location not found');
                    _this.isLoadingCheckOutAddress = false;
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
                _this.isLoadingCheckOutAddress = false;
            }
        });
    };
    AbsenMobileDetailPage.prototype.openMap = function (long, lat) {
        this.navCtrl.push("MapPage", {
            "type": "",
            "long": long,
            "lat": lat,
            "fromPage": "AbsenMobileDetailPage"
        }).then(function () {
        });
    };
    AbsenMobileDetailPage.prototype.openPhoto = function (data) {
        this.navCtrl.push("PhotoViewerPage", {
            "photo": data
        }).then(function () {
        });
        // console.log(data);
        // var options = {
        //   share: true,
        //   headers: 'HTTP'
        // };
        // var myURL = data;
        // this.photoViewer.show(myURL, '', options);
    };
    AbsenMobileDetailPage.prototype.openModalRating = function (type, rateFor) {
        var _this = this;
        var myType = '';
        if (type == 'rate') {
            myType = 'my-modal2';
        }
        else if (type == 'task') {
            myType = 'my-modal3';
        }
        var modal = this.modalCtrl.create("RateAbsensiPage", {
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
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data != null) {
                if (data['isSubmit']) {
                    _this.getDetail();
                }
            }
        });
    };
    AbsenMobileDetailPage.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    AbsenMobileDetailPage.prototype.getDetailActivity = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */] + "am7_activity.php", {
            "usernameEDI": "EDI-USERNAME",
            "passwordEDI": "RURJLVBBU1NXT1JE",
            "id_user": this.idUser,
            "nipp": this.nipp,
            "arr_param": [],
            "action": "SELECT",
            "tgl": this.date,
            'select_type': 'preview'
        }, {}).subscribe(function (data) {
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
                _this.activityList = data['data'];
                _this.isLoading = false;
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan data activity, coba kembali.',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.isLoading = false;
            }
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan data activity, coba kembali.',
                buttons: ['OK']
            });
            alert.present();
            _this.isLoading = false;
        });
    };
    AbsenMobileDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-absen-mobile-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/absen-mobile-detail/absen-mobile-detail.html"*/'<!--\n  Generated template for the AbsenMobileDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Absen Mobile</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #FFF;">\n\n  <div *ngIf="!isLoading && (absenDetail != null  || activityList.length > 0)">\n    <!-- <div *ngIf="fromPage == \'AbsenBawahanPage\'" class="header-bawahan" >\n      <span ion-text text-wrap class="font3" color="light"><b>{{ nama }}</b></span>\n        <span ion-text text-wrap class="font3" color="light"><b>{{ absenDetail[\'NM_JABATAN\'] }}</b></span>\n    </div> -->\n\n    <ion-card>\n      <ion-card-content>\n\n        <table width="100%">\n          <tr>\n            <td colspan="3">\n              <span ion-text text-wrap class="font3"><b>{{ absenDetail[\'DATE\'] }}</b></span>\n              <span ion-text text-wrap class="font3" style="color:#959595;float: right;">{{ shift }}</span>\n              <br>\n              <br>\n            </td>\n          </tr>\n          <!-- <tr *ngIf="fromPage == \'AbsenBawahanPage\'"> -->\n          <tr>\n            <td colspan="3" style="text-align: center;">\n              <span ion-text text-wrap class="font3"><b>{{ nama }}</b></span><br>\n              <span ion-text text-wrap class="font3" style="color:#959595;">{{ absenDetail[\'NIPP\'] }}</span><br>\n              <span ion-text text-wrap class="font3">{{ absenDetail[\'NM_JABATAN\'] }}</span><br><br>\n            </td>\n          </tr>\n          <tr>\n            <td align="right" width="45%">\n              <div style="width: 100%;text-align: right;">\n                <span ion-text text-wrap class="font" color="secondary">Check In</span><br />\n              </div>\n\n              <span text-wrap ion-text class="font2" style="word-break: break-all;">\n                <b>{{ absenDetail[\'CHECK_IN\'] }}</b>\n              </span>\n              <span ion-text text-wrap class="font2" *ngIf="absenDetail[\'CHECK_IN\'] == null">\n                <b> --:--:-- </b>\n              </span>\n            </td>\n            <td width="10%" valign="center" align="center">\n              <!-- <ion-icon md="md-arrow-round-forward"></ion-icon> -->\n              <div style="margin-top: 20px;">\n                <b> - </b>\n              </div>\n\n            </td>\n            <td align="left" width="45%">\n              <div style="width: 100%;text-align: left !important;">\n                <span ion-text text-wrap class="font" color="danger">Check Out</span><br />\n              </div>\n\n              <span text-wrap ion-text class="font2" style="word-break: break-all;">\n                <b>{{ absenDetail[\'CHECK_OUT\'] }}</b>\n              </span>\n              <span ion-text text-wrap class="font2" *ngIf="absenDetail[\'CHECK_OUT\'] == null">\n                <b> --:--:-- </b>\n              </span>\n            </td>\n          </tr>\n          <tr>\n            <td colspan="3" align="center">\n              <!-- <span ion-text text-wrap class="font3" style="color:#959595;">\n                {{ absenDetail[\'CHECK_IN_TYPE\'] }}\n              </span> -->\n              <br>\n\n              <div *ngIf="fromPage == \'AbsenBawahanPage\'">\n                <!-- <div\n                  *ngIf="absenDetail[\'CHECK_OUT\'] != null && absenDetail[\'CHECK_OUT_RATE_SPV\'] == null || absenDetail[\'CHECK_OUT_RATE_SPV\'] == \'0\'">\n\n                  <button ion-button icon-end outline class="my-button" style=" border-radius: 12px;" color="color2"\n                    (click)="openModalRating(\'rate\', \'bawahan\')">\n                    Nilai Kinerja Harian\n                    <ion-icon name="md-star-outline"></ion-icon>\n                  </button>\n                  <br>\n                </div> -->\n\n                <!-- \n                <div\n                  *ngIf="(absenDetail[\'CHECK_IN_RATE\'] != null && absenDetail[\'CHECK_IN_RATE\'] != \'0\') && (absenDetail[\'CHECK_OUT_RATE_SPV\'] != null && absenDetail[\'CHECK_OUT_RATE_SPV\'] != \'0\')">\n                  <span *ngFor="let item of createRange(5);let i = index" style="font-size:1.8rem;">\n                    <ion-icon name="star" color="color2" *ngIf="i+1 <= absenDetail[\'CHECK_IN_RATE\']"></ion-icon>\n                    <ion-icon name="star" color="color4" *ngIf="i+1 > absenDetail[\'CHECK_IN_RATE\']"></ion-icon>\n                  </span>\n                </div>\n\n                <div\n                  *ngIf="(absenDetail[\'CHECK_IN_RATE\'] == null || absenDetail[\'CHECK_IN_RATE\'] == \'0\') && (absenDetail[\'CHECK_OUT_RATE_SPV\'] != null && absenDetail[\'CHECK_OUT_RATE_SPV\'] != \'0\')">\n                  <span style="font-size:1.8rem;">\n                    <ion-icon name="star" color="color4"></ion-icon>\n                    <ion-icon name="star" color="color4"></ion-icon>\n                    <ion-icon name="star" color="color4"></ion-icon>\n                    <ion-icon name="star" color="color4"></ion-icon>\n                    <ion-icon name="star" color="color4"></ion-icon>\n                  </span>\n                </div> -->\n              </div>\n\n              <div *ngIf="fromPage != \'AbsenBawahanPage\'">\n                <!-- <div\n                  *ngIf="absenDetail[\'CHECK_OUT\'] != null && absenDetail[\'CHECK_IN_RATE\'] == null || absenDetail[\'CHECK_IN_RATE\'] == \'0\'">\n                  <button ion-button icon-end outline class="my-button" style=" border-radius: 12px;" color="color2"\n                    (click)="openModalRating(\'rate\', \'atasan\')">\n                    Nilai Kinerja Harian\n                    <ion-icon name="md-star-outline"></ion-icon>\n                  </button>\n                  <br>\n                </div> -->\n\n\n                <!-- <div\n                  *ngIf="(absenDetail[\'CHECK_OUT_RATE_SPV\'] != null && absenDetail[\'CHECK_OUT_RATE_SPV\'] != \'0\') && (absenDetail[\'CHECK_IN_RATE\'] != null && absenDetail[\'CHECK_IN_RATE\'] != \'0\')">\n                  <span *ngFor="let item of createRange(5);let i = index" style="font-size:1.8rem;">\n                    <ion-icon name="star" color="color2" *ngIf="i+1 <= absenDetail[\'CHECK_OUT_RATE_SPV\']"></ion-icon>\n                    <ion-icon name="star" color="color4" *ngIf="i+1 > absenDetail[\'CHECK_OUT_RATE_SPV\']"></ion-icon>\n                  </span>\n                </div>\n\n                <div\n                  *ngIf="(absenDetail[\'CHECK_OUT_RATE_SPV\'] == null || absenDetail[\'CHECK_OUT_RATE_SPV\'] == \'0\')  && (absenDetail[\'CHECK_IN_RATE\'] != null && absenDetail[\'CHECK_IN_RATE\'] != \'0\')">\n                  <span style="font-size:1.8rem;">\n                    <ion-icon name="star" color="color4"></ion-icon>\n                    <ion-icon name="star" color="color4"></ion-icon>\n                    <ion-icon name="star" color="color4"></ion-icon>\n                    <ion-icon name="star" color="color4"></ion-icon>\n                    <ion-icon name="star" color="color4"></ion-icon>\n                  </span>\n                </div> -->\n              </div>\n\n\n              <!-- <div\n                *ngIf="(absenDetail[\'CHECK_OUT_RATE_SPV\'] != null && absenDetail[\'CHECK_OUT_RATE_SPV\'] != \'0\') && (absenDetail[\'CHECK_IN_RATE\'] != null && absenDetail[\'CHECK_IN_RATE\'] != \'0\')">\n                <span ion-text text-wrap class="font" style="color:#959595;">Evaluasi Harian dari Atasan</span><br />\n                <span *ngFor="let item of createRange(5);let i = index" style="font-size:1.8rem;">\n                  <ion-icon name="star" color="color2" *ngIf="i+1 <= absenDetail[\'CHECK_OUT_RATE_SPV\']"></ion-icon>\n                  <ion-icon name="star" color="color4" *ngIf="i+1 > absenDetail[\'CHECK_OUT_RATE_SPV\']"></ion-icon>\n                </span>\n                <br>\n                <span *ngIf="absenDetail[\'CHECK_OUT_RATE_SPV\'] == \'1\'" style="color: red;" class="font">Kurang</span>\n                <span *ngIf="absenDetail[\'CHECK_OUT_RATE_SPV\'] == \'2\'" style="color: red;" class="font">Cukup</span>\n                <span *ngIf="absenDetail[\'CHECK_OUT_RATE_SPV\'] == \'3\'" style="color: orange;" class="font">Baik</span>\n                <span *ngIf="absenDetail[\'CHECK_OUT_RATE_SPV\'] == \'4\'" style="color: green;"\n                  class="font">Memuaskan</span>\n                <span *ngIf="absenDetail[\'CHECK_OUT_RATE_SPV\'] == \'5\'" style="color: green;" class="font">Sangat\n                  Memuaskan</span>\n              </div> -->\n\n<!-- \n              <div\n                *ngIf="(absenDetail[\'CHECK_IN_RATE\'] != null && absenDetail[\'CHECK_IN_RATE\'] != \'0\') && (absenDetail[\'CHECK_OUT_RATE_SPV\'] != null && absenDetail[\'CHECK_OUT_RATE_SPV\'] != \'0\')">\n                <span ion-text text-wrap class="font" style="color:#959595;">Evaluasi dari Bawahan</span><br />\n                <span *ngFor="let item of createRange(5);let i = index" style="font-size:1.8rem;">\n                  <ion-icon name="star" color="color2" *ngIf="i+1 <= absenDetail[\'CHECK_IN_RATE\']"></ion-icon>\n                  <ion-icon name="star" color="color4" *ngIf="i+1 > absenDetail[\'CHECK_IN_RATE\']"></ion-icon>\n                </span><br>\n                <span *ngIf="absenDetail[\'CHECK_IN_RATE\'] == \'1\'" style="color: red;" class="font">Kurang</span>\n                <span *ngIf="absenDetail[\'CHECK_IN_RATE\'] == \'2\'" style="color: red;" class="font">Cukup</span>\n                <span *ngIf="absenDetail[\'CHECK_IN_RATE\'] == \'3\'" style="color: orange;" class="font">Baik</span>\n                <span *ngIf="absenDetail[\'CHECK_IN_RATE\'] == \'4\'" style="color: green;"\n                  class="font">Memuaskan</span>\n                <span *ngIf="absenDetail[\'CHECK_IN_RATE\'] == \'5\'" style="color: green;" class="font">Sangat\n                  Memuaskan</span>\n              </div> -->\n\n\n\n\n\n            </td>\n          </tr>\n        </table>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content style="position: relative !important;">\n        <div class="add-taks" *ngIf="fromPage == \'AbsenBawahanPage\' && absenDetail[\'CHECK_OUT\'] == null">\n          <ion-icon name="md-create" class="add-task-icon" color="light" (click)="openModalRating(\'task\')"></ion-icon>\n        </div>\n        <table>\n          <tr>\n            <td valign="top" width="38%">\n              <div style="position: relative;">\n                <img *ngIf="absenDetail[\'CHECK_IN_PHOTO\'] == null" src="assets/flat-icon/photo_dummy_2.png"\n                  class="foto-check-dummy">\n                <!-- <img *ngIf="absenDetail[\'CHECK_IN_PHOTO\'] != null" src="{{ absenDetail[\'CHECK_IN_PHOTO\'] }}" -->\n                <img *ngIf="absenDetail[\'CHECK_IN_PHOTO\'] != null" [src]="absenDetail[\'CHECK_IN_PHOTO\']"\n                  class="foto-check">\n\n                <table class="my-table" *ngIf="absenDetail[\'CHECK_IN_PHOTO\'] != null">\n                  <tr>\n                    <td width="50%" style="padding-right: 2.5px;">\n                      <button ion-button icon-only class="my-button-2" color="light"\n                        (click)="openPhoto(absenDetail[\'CHECK_IN_PHOTO\'])">\n                        <ion-icon name="md-camera" color="googleColor"></ion-icon>\n                      </button>\n                    </td>\n                    <td style="padding-left: 2.5px;">\n                      <button ion-button icon-only class="my-button-3" color="light"\n                        (click)="openMap(this.absenDetail[\'CHECK_IN_LONGITUDE\'],this.absenDetail[\'CHECK_IN_LATITUDE\'])">\n                        <ion-icon name="md-pin" color="googleColor"></ion-icon>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n\n              </div>\n\n            </td>\n            <td valign="top">\n              <table width="100%" style="margin-left:8px;">\n                <tr>\n                  <!-- <td valign="top" width="48px" align="left">\n                    <img src="assets/flat-icon/checkin.png" class="icons">\n                  </td> -->\n                  <td colspan="3" style="padding-left: 3px;">\n                    <span ion-text text-wrap class="font3" color="secondary"><b>Check In Activity</b></span>\n                    <span ion-text text-wrap class="font3" color="secondary"\n                      *ngIf="absenDetail[\'CHECK_IN_TYPE\'] != null"><b> ({{ absenDetail[\'CHECK_IN_TYPE\'] }})</b></span>\n                    <br>\n\n                    <div *ngIf="absenDetail[\'CHECK_IN\'] != null">\n                      <table>\n                        <tr *ngFor="let activity of activityList; let i = index">\n                          <td width="10%" align="left" valign="top">{{ i+ 1}}. </td>\n                          <td width="90%" align="left" valign="top">\n                            <span ion-text text-wrap class="font3"\n                              style="white-space: pre-line !important;">{{ activity[\'ACTIVITY\'] }}</span>\n                          </td>\n                        </tr>\n                      </table>\n                    </div>\n\n                    <div *ngIf="absenDetail[\'CHECK_IN\'] == null">\n                      <span ion-text text-wrap class="font3" *ngIf="absenDetail[\'CHECK_IN_ACTIVITY\'] == null">\n                        -\n                      </span>\n                    </div>\n                    <!-- <span ion-text text-wrap class="font3" style="white-space: pre-line !important;">{{ absenDetail[\'CHECK_IN_ACTIVITY\'] }}</span> -->\n                    <!-- <span ion-text text-wrap class="font3" *ngIf="absenDetail[\'CHECK_IN_ACTIVITY\'] == null">\n                      -\n                    </span> -->\n                    <br>\n                    <br>\n                    <!-- <span ion-text text-wrap class="font3" color="secondary" *ngIf="absenDetail[\'CHECK_IN_ACTIVITY_SPV\'] != null" ><b>Arahan Atasan</b></span><br>\n                    <span ion-text text-wrap class="font3" style="white-space: pre-line !important;" *ngIf="absenDetail[\'CHECK_IN_ACTIVITY_SPV\'] != null" >{{ absenDetail[\'CHECK_IN_ACTIVITY_SPV\'] }}</span>                    \n                    <br>\n                    <br> -->\n                  </td>\n                </tr>\n                <tr>\n                  <!-- <td valign="top" width="48px" align="left">\n                    <img src="assets/flat-icon/pin.png" class="icons">\n                  </td>\n                  <td colspan="2">\n                    \n                    <span ion-text text-wrap class="font3" *ngIf="!isLoadingCheckInAddress && checkInAddress != null" (click)="openMap(this.absenDetail[\'CHECK_IN_LONGITUDE\'],this.absenDetail[\'CHECK_IN_LATITUDE\'])">\n                      {{ checkInAddress }}\n                    </span>\n                    <div *ngIf="isLoadingCheckInAddress && checkInAddress == null">\n                      <div class="animate-skeleton-background loading-3"></div>\n                      <div class="animate-skeleton-background loading-4"></div>\n                      <div class="animate-skeleton-background loading-5"></div>\n                    </div>\n                    <span ion-text text-wrap class="font3" *ngIf="!isLoadingCheckInAddress && checkInAddress == null">\n                      -\n                    </span>\n                  </td> -->\n                  <!-- <td colspan="3" >\n                    <button ion-button icon-start outline class="my-button" color="secondary" (click)="openMap(this.absenDetail[\'CHECK_IN_LONGITUDE\'],this.absenDetail[\'CHECK_IN_LATITUDE\'])">\n                      <ion-icon name="md-pin"></ion-icon>\n                      Location                    \n                    </button>\n                  </td> -->\n                </tr>\n                <!-- <tr>          \n                  <td colspan="3">           \n                    <br> \n                    <div class="lihat-foto-checkin" >\n                      <table style="margin-right: auto;margin-left: auto;" >\n                        <tr>\n                          <td width="40px">\n                            <img src="assets/flat-icon/camera2.png" class="icons">\n                          </td>\n                          <td>\n                            Lihat Foto Check In\n                          </td>\n                        </tr>\n                      </table>                          \n                    </div>\n                  </td>\n                </tr>        -->\n              </table>\n            </td>\n          </tr>\n        </table>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <table>\n          <tr>\n            <td valign="top" width="38%">\n              <div style="position: relative;">\n                <img *ngIf="absenDetail[\'CHECK_OUT_PHOTO\'] == null" src="assets/flat-icon/photo_dummy_2.png"\n                  class="foto-check-dummy">\n                <img *ngIf="absenDetail[\'CHECK_OUT_PHOTO\'] != null" [src]="absenDetail[\'CHECK_OUT_PHOTO\']"\n                  class="foto-check">\n                <table class="my-table" *ngIf="absenDetail[\'CHECK_OUT_PHOTO\'] != null">\n                  <tr>\n                    <td width="50%" style="padding-right: 2.5px;">\n                      <button ion-button icon-only class="my-button-2" color="light"\n                        (click)="openPhoto(absenDetail[\'CHECK_OUT_PHOTO\'])">\n                        <ion-icon name="md-camera" color="googleColor"></ion-icon>\n                      </button>\n                    </td>\n                    <td style="padding-left: 2.5px;">\n                      <button ion-button icon-only class="my-button-3" color="light"\n                        (click)="openMap(this.absenDetail[\'CHECK_OUT_LONGITUDE\'],this.absenDetail[\'CHECK_OUT_LATITUDE\'])">\n                        <ion-icon name="md-pin" color="googleColor"></ion-icon>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n\n            </td>\n            <td valign="top">\n              <table width="100%" style="margin-left:8px;">\n                <tr>\n                  <!-- <td valign="top" width="48px" align="left">\n                    <img src="assets/flat-icon/checkout.png" class="icons">\n                  </td> -->\n                  <td colspan="3" style="padding-left: 3px;">\n                    <span ion-text text-wrap class="font3" color="danger"><b>Check Out Activity</b></span>\n                    <span ion-text text-wrap class="font3" color="danger"\n                      *ngIf="absenDetail[\'CHECK_OUT_TYPE\'] != null"><b> ( {{ absenDetail[\'CHECK_OUT_TYPE\'] }} )</b></span>\n\n                    <br>\n                    <!-- <span ion-text text-wrap class="font3"\n                      style="white-space: pre-line !important;">{{ absenDetail[\'CHECK_OUT_ACTIVITY\'] }}</span>\n                    <span ion-text text-wrap class="font3" *ngIf="absenDetail[\'CHECK_OUT_ACTIVITY\'] == null">\n                      -\n                    </span> -->\n\n                    <div *ngIf="absenDetail[\'CHECK_OUT\'] != null">\n                      <table>\n                        <tr *ngFor="let activity of activityList; let i = index">\n                          <td width="10%" align="left" valign="top">{{ i+ 1}}. </td>\n                          <td width="90%" align="left" valign="top">\n                            <span ion-text text-wrap class="font3" *ngIf="activity[\'STATUS\'] != null"\n                              style="white-space: pre-line !important;">{{ activity[\'ACTIVITY\'] }} - {{ activity[\'STATUS\'] }}\n                            </span>\n                            <span ion-text text-wrap class="font3" *ngIf="activity[\'STATUS\'] == null"\n                              style="white-space: pre-line !important;">{{ activity[\'ACTIVITY\'] }}\n                            </span>\n                          </td>\n                        </tr>\n                      </table>\n                    </div>\n\n                    <div *ngIf="absenDetail[\'CHECK_OUT\'] == null">\n                      <span ion-text text-wrap class="font3" *ngIf="absenDetail[\'CHECK_IN_ACTIVITY\'] == null">\n                        -\n                      </span>\n                    </div>\n\n\n                    <br>\n                    <br>\n                    <span ion-text text-wrap class="font3" color="danger"\n                      *ngIf="absenDetail[\'CHECK_OUT_ACTIVITY_SPV\'] != null"><b>Komentar Atasan</b></span><br>\n                    <span ion-text text-wrap class="font3" style="white-space: pre-line !important;"\n                      *ngIf="absenDetail[\'CHECK_OUT_ACTIVITY_SPV\'] != null">{{ absenDetail[\'CHECK_OUT_ACTIVITY_SPV\'] }}</span>\n                    <br>\n                    <br>\n                  </td>\n                </tr>\n                <tr>\n                  <!-- <td valign="top" width="48px" align="left">\n                    <img src="assets/flat-icon/pin.png" class="icons">\n                  </td>\n                  <td colspan="2">                    \n                    <span ion-text text-wrap class="font3" *ngIf="!isLoadingCheckOutAddress && checkOutAddress != null" (click)="openMap(this.absenDetail[\'CHECK_OUT_LONGITUDE\'],this.absenDetail[\'CHECK_OUT_LATITUDE\'])">\n                      {{ checkOutAddress }}\n                    </span>\n                    <div *ngIf="isLoadingCheckOutAddress && checkOutAddress == null">\n                      <div class="animate-skeleton-background loading-3"></div>\n                      <div class="animate-skeleton-background loading-4"></div>\n                      <div class="animate-skeleton-background loading-5"></div>\n                    </div>\n\n                    <div *ngIf="!isLoadingCheckOutAddress && checkOutAddress == null">\n                      -\n                    </div>\n                  </td> -->\n                  <!-- <td colspan="3" >\n                    <button ion-button icon-start outline class="my-button" color="danger" (click)="openMap(this.absenDetail[\'CHECK_OUT_LONGITUDE\'],this.absenDetail[\'CHECK_OUT_LATITUDE\'])">\n                      <ion-icon name="md-pin"></ion-icon>\n                      Location                    \n                    </button>\n                  </td> -->\n                </tr>\n                <!--         \n                <tr>          \n                  <td colspan="3">           \n                    <br> \n                    <div class="lihat-foto-checkout" >\n                      <table style="margin-right: auto;margin-left: auto;" >\n                        <tr>\n                          <td width="40px">\n                            <img src="assets/flat-icon/camera2.png" class="icons">\n                          </td>\n                          <td>\n                            Lihat Foto Check Out\n                          </td>\n                        </tr>\n                      </table>                          \n                    </div>\n                  </td>\n                </tr>   -->\n              </table>\n            </td>\n          </tr>\n        </table>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf="isLoading && (absenDetail == null  || activityList.length == 0)">\n    <ion-card>\n      <ion-card-content>\n        <table width="100%">\n          <tr>\n            <td colspan="3">\n              <div class="animate-skeleton-background loading-1" style="float: left;"></div>\n              <div class="animate-skeleton-background loading-1" style="float: right;"></div>\n              <br>\n              <br>\n            </td>\n          </tr>\n          <tr>\n            <td align="right" width="45%">\n              <div style="width: 100%;text-align: right;">\n                <span ion-text text-wrap class="font" color="secondary">Check In</span><br />\n              </div>\n\n              <div class="animate-skeleton-background loading-2">\n\n              </div>\n            </td>\n            <td width="10%" valign="center" align="center">\n              <div style="margin-top: 20px;">\n                <b> - </b>\n              </div>\n\n            </td>\n            <td align="left" width="45%">\n              <div style="width: 100%;text-align: left !important;">\n                <span ion-text text-wrap class="font" color="danger">Check Out</span><br />\n              </div>\n\n              <div class="animate-skeleton-background loading-2">\n\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td colspan="3" align="center">\n              <div class="animate-skeleton-background loading-1">\n\n              </div>\n            </td>\n          </tr>\n        </table>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <table>\n          <tr>\n            <td valign="top" width="38%">\n              <img src="assets/flat-icon/photo_dummy_2.png" class="animate-skeleton-background foto-check">\n            </td>\n            <td>\n              <table width="100%">\n                <tr>\n                  <td valign="top" width="48px" align="left">\n                    <img src="assets/flat-icon/checkin.png" class="icons">\n                  </td>\n                  <td colspan="2">\n                    <span ion-text text-wrap class="font3" color="secondary"><b>Check In Activity</b></span>\n                    <br>\n                    <div class="animate-skeleton-background loading-3"></div>\n                    <div class="animate-skeleton-background loading-4"></div>\n                    <div class="animate-skeleton-background loading-5"></div>\n                    <br>\n                    <br>\n                  </td>\n                </tr>\n                <tr>\n                  <!-- <td valign="top" width="48px" align="left">\n                    <img src="assets/flat-icon/pin.png" class="icons">\n                  </td>\n                  <td colspan="2">\n                    <div class="animate-skeleton-background loading-3"></div>\n                    <div class="animate-skeleton-background loading-4"></div>\n                    <div class="animate-skeleton-background loading-5"></div>\n                  </td> -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n        </table>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <table>\n          <tr>\n            <td valign="top" width="38%">\n              <img src="assets/flat-icon/photo_dummy_2.png" class="animate-skeleton-background foto-check">\n            </td>\n            <td>\n              <table width="100%">\n                <tr>\n                  <td valign="top" width="48px" align="left">\n                    <img src="assets/flat-icon/checkout.png" class="icons">\n                  </td>\n                  <td colspan="2">\n                    <span ion-text text-wrap class="font3" color="danger"><b>Check Out Activity</b></span>\n                    <br>\n                    <div class="animate-skeleton-background loading-3"></div>\n                    <div class="animate-skeleton-background loading-4"></div>\n                    <div class="animate-skeleton-background loading-5"></div>\n                    <br>\n                    <br>\n                  </td>\n                </tr>\n                <tr>\n                  <!-- <td valign="top" width="48px" align="left">\n                    <img src="assets/flat-icon/pin.png" class="icons">\n                  </td>\n                  <td colspan="2">\n                    <div class="animate-skeleton-background loading-3"></div>\n                    <div class="animate-skeleton-background loading-4"></div>\n                    <div class="animate-skeleton-background loading-5"></div>\n                  </td> -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n        </table>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf="!isLoading && absenDetail == null && activityList.length == 0" style="text-align: center;">\n    <ion-card>\n      <ion-card-content>\n        <span ion-text text-wrap> tidak ada data.</span>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<!-- <div *ngIf="!isLoading && absenDetail != null">\n  <ion-footer *ngIf="fromPage == \'AbsenBawahanPage\' && absenDetail[\'CHECK_OUT\'] != null" >   \n    <button ion-button icon-end class="my-button" style=" border-radius: 12px;" color="color2" (click)="openModalRating(\'rate\')">\n      Nilai Kinerja Harian\n      <ion-icon name="md-star-outline"></ion-icon>\n    </button>  \n</ion-footer>\n</div> -->'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/absen-mobile-detail/absen-mobile-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["e" /* DatePipe */]])
    ], AbsenMobileDetailPage);
    return AbsenMobileDetailPage;
}());

//# sourceMappingURL=absen-mobile-detail.js.map

/***/ })

});
//# sourceMappingURL=80.js.map