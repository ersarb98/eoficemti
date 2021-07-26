webpackJsonp([57],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home3PageModule", function() { return Home3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home3__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Home3PageModule = /** @class */ (function () {
    function Home3PageModule() {
    }
    Home3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home3__["a" /* Home3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home3__["a" /* Home3Page */]),
            ],
        })
    ], Home3PageModule);
    return Home3PageModule;
}());

//# sourceMappingURL=home3.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(202);
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
 * Generated class for the Home3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Home3Page = /** @class */ (function () {
    function Home3Page(navCtrl, navParams, alertCtrl, app, storage, loadingCtrl, soapService, toastCtrl, device, inAppBrowser, oneSignal, modalCtrl, http, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.toastCtrl = toastCtrl;
        this.device = device;
        this.inAppBrowser = inAppBrowser;
        this.oneSignal = oneSignal;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.platform = platform;
        this.isLoading = true;
        this.agendaList = [];
        this.isSkipUpdate = false;
        this.isLoadingHadirkoe = true;
    }
    Home3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Home3Page');
    };
    Home3Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            // console.log(val);
            _this.userdataTPK = val;
            _this.getBadges();
            _this.getBadgesP2b();
            _this.getBadgesPrpo();
            _this.getValidasi();
            _this.newSession('first', '');
            _this.getData('first', '');
            _this.cekVersi();
        });
    };
    Home3Page.prototype.newSession = function (type, functionName) {
        // let loading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon Tunggu...",
        //   cssClass: 'transparent',
        //   dismissOnPageChange: true
        // });
        var _this = this;
        // if (type == 'refresh') {
        //   loading.present();
        // }
        // this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_get_user_data', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                username: this.userdataTPK['data']['NIPP'],
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['login_status'] == '404 Not Found') {
                    // console.log(responData['data']['login_status']);
                }
                else if (responData['data'] == undefined) {
                    // console.log(responData['data']);
                }
                else if (responData['data']['login_status'] == 'AP NOT ALLOWED') {
                    // console.log(responData['data']['login_status']);
                }
                else {
                    _this.userdataTPK = responData;
                    _this.storage.set('userdataTPK', responData).then(function () {
                        //this.getData(type, functionName, loading);
                    });
                }
            }
            else {
                // console.log("error here");
                //loading.dismiss();
                // this.isLoading = false;
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'refresh') {
                functionName.complete();
                // loading.dismiss();
            }
            // this.isLoading = false;
        });
    };
    Home3Page.prototype.getData = function (type, functionName) {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_home', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                iduser: this.userdataTPK.data.IDUSER,
                idjabatan: this.userdataTPK.data.IDJABATAN,
                nipp: this.userdataTPK.data.NIPP,
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.agendaList = [];
                for (var i = 0; i < responData['data']['AGENDA_HARI_INI'].length; i++) {
                    _this.agendaList.push(responData['data']['AGENDA_HARI_INI'][i]);
                }
                if (type == 'refresh') {
                    functionName.complete();
                    // loading.dismiss();
                }
                _this.isLoading = false;
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                if (type == 'refresh') {
                    functionName.complete();
                }
                _this.isLoading = false;
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'refresh') {
                functionName.complete();
                // loading.dismiss();
            }
            _this.isLoading = false;
        });
    };
    Home3Page.prototype.getBadges = function () {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_countbadges', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                iduser: this.userdataTPK['data']['IDUSER'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                nipp: this.userdataTPK['data']['NIPP']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.badgesList = responData['data'];
                console.log(_this.badgesList);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal Mendapatkan Notifikasi, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    Home3Page.prototype.getBadgesP2b = function () {
        // this.soapService
        //   .post(api_p2b_url, 'eoffice_countbadges', {
        //     fStream: JSON.stringify(
        //       {
        //         usernameEDI: api_user,
        //         passwordEDI: api_pass,
        //         iduser: this.userdataTPK['data']['IDUSER'],
        //         idjabatan: this.userdataTPK['data']['IDJABATAN'],
        //         nipp: this.userdataTPK['data']['NIPP']
        //       }
        //     )
        //   }).then(result => {
        //     var responData = JSON.parse(String(result));
        //     console.log(responData);
        //     if (responData['rcmsg'] == "SUCCESS") {
        //       this.badgesP2b = responData['data'];
        //       // console.log(this.badgesList);
        //     } else {
        //       let toast = this.toastCtrl.create({
        //         message: 'Gagal Mendapatkan Notifikasi, Coba Beberapa Saat Lagi.',
        //         duration: 3000,
        //         position: 'bottom'
        //       });
        //       toast.present();
        //     }
        //   })
        //   .catch(error => {
        //     let toast = this.toastCtrl.create({
        //       message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
        //       duration: 3000,
        //       position: 'bottom'
        //     });
        //     toast.present();
        //   });
    };
    Home3Page.prototype.getBadgesPrpo = function () {
        // this.soapService
        //   .post(api_p2b_url, 'eoffice_countbadgestpk', {
        //     fStream: JSON.stringify(
        //       {
        //         usernameEDI: api_user,
        //         passwordEDI: api_pass,
        //         nipp: this.userdataTPK['data']['NIPP']
        //       }
        //     )
        //   }).then(result => {
        //     var responData = JSON.parse(String(result));
        //     if (responData['rcmsg'] == "SUCCESS") {
        //       this.badgesPrpoList = responData['data'];
        //       console.log(this.badgesPrpoList);
        //     } else {
        //     }
        //   })
        //   .catch(error => {
        //   });
    };
    Home3Page.prototype.doRefresh = function (refresher) {
        this.getBadges();
        this.getBadgesP2b();
        this.getBadgesPrpo();
        this.getValidasi();
        this.getData('refresh', refresher);
        this.newSession('refresh', refresher);
        this.cekVersi();
    };
    Home3Page.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Apakah anda yakin ingin log out ?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'TIDAK',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'YA',
                    handler: function () {
                        _this.app.getRootNav().setRoot('LoginPage').then(function () {
                            //this.events.unsubscribe('user:data',() => {});
                            _this.storage.clear();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    Home3Page.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    Home3Page.prototype.openPage2 = function (page, param) {
        this.navCtrl.push(page, {
            modul: param
        });
    };
    Home3Page.prototype.notEmpty = function (val) {
        if (typeof val != "undefined") {
            return true;
        }
        else {
            return false;
        }
    };
    Home3Page.prototype.parse = function (val) {
        var intValue = parseInt(val);
        if (intValue > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Home3Page.prototype.cekVersi = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.oneSignal.getIds().then(function (id) {
                console.log(id);
                _this.soapService.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_bypass_wso', {
                    fStream: JSON.stringify({
                        sc_type: 'check_version',
                        sc_code: "",
                        data: {
                            "platform": "ios",
                            "version": "1.4.3",
                            "player_id": id.userId,
                            "nipp": _this.userdataTPK.data.NIPP,
                            "model": _this.device.model,
                            "uuid": _this.device.uuid
                        }
                    })
                }).then(function (result) {
                    var responData = JSON.parse(String(result));
                    console.log(responData);
                    if (responData['rcmsg'] == "SUCCESS") {
                        if ((responData['data']['POPUP'] == "1" || responData['data']['POPUP'] == "2" || responData['data']['POPUP'] == "3")) {
                            _this.showVersiPopup(responData['data']['POPUP'], responData['data']['POPUP_MESSAGE'], responData['data']['URL']);
                        }
                        else {
                        }
                    }
                    else {
                    }
                })
                    .catch(function (error) {
                    console.log(error);
                });
            });
        }
    };
    Home3Page.prototype.showVersiPopup = function (popupCode, popupMessage, url) {
        var _this = this;
        var myButton = [];
        if (popupCode == "1") {
            myButton = [
                {
                    text: 'LEWATI',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.isSkipUpdate = true;
                        // return false;
                    }
                },
                {
                    text: 'UPDATE',
                    handler: function () {
                        var options = {
                            zoom: 'no'
                        };
                        var browser = _this.inAppBrowser.create(url, '_system', options);
                        return false;
                    }
                }
            ];
        }
        else if (popupCode == "2") {
            myButton = [
                {
                    text: 'UPDATE',
                    handler: function () {
                        // this.market.open('ipc.imove');
                        var options = {
                            zoom: 'no'
                        };
                        var browser = _this.inAppBrowser.create(url, '_system', options);
                        return false;
                    }
                }
            ];
        }
        else if (popupCode == "3") {
            myButton = [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ];
        }
        var alert = this.alertCtrl.create({
            subTitle: popupMessage,
            enableBackdropDismiss: false,
            cssClass: 'alert',
            buttons: myButton
        });
        alert.present();
    };
    Home3Page.prototype.showModal = function (myModal) {
        var modal = this.modalCtrl.create(myModal, {}, {
            enableBackdropDismiss: true,
            showBackdrop: true,
            cssClass: 'my-modal10'
        });
        modal.present();
    };
    Home3Page.prototype.getValidasi = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_res */] + 'am3_check_shift.php', {
            usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
            passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
            person_id: this.userdataTPK['data']['PERSON_ID'],
            nipp: this.userdataTPK['data']['NIPP'],
            id_user: this.userdataTPK['data']['IDUSER']
        }).subscribe(function (data) {
            console.log(data);
            //var responData = JSON.parse(data);
            _this.dataValidasi = data['data'];
            _this.isLoadingHadirkoe = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingHadirkoe = false;
        });
    };
    Home3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home3',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/home3/home3.html"*/'<!--\n  Generated template for the Home3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <img src="assets/imgs/ipc-tpk-logo.png" style="width:65px;height:auto; margin-left:10px; display:inline-block"\n      height="40px" />\n    <ion-title class="titleicon" style="display:inline-block">\n      <span ion-text><b>PPI Office System</b></span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openPage(\'SettingPage\')">\n        <ion-icon style="font-size:2.5rem;" name="md-settings" color="color6"></ion-icon>\n      </button>\n      <button ion-button (click)="logout()">\n        <ion-icon style="font-size:2.5rem;" name="md-log-out" color="color6"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="header-container" *ngIf="userdataTPK != null">\n    <div class="welcome-class">\n      <span ion-text text-wrap>Welcome,</span> <br>\n      <span *ngIf="userdataTPK != null" ion-text text-wrap> <b>{{ userdataTPK[\'data\'][\'NAMA\'] }}</b></span>\n    </div>\n    <!-- <div class="header-img"></div> -->\n\n    <ion-slides style="margin-top: 50px;" autoplay="5000" loop="true" speed="500">\n      <ion-slide class="my-slide">\n        <img src="assets/imgs/slide-1.png" class="my-slider-img">\n      </ion-slide>\n      <ion-slide class="my-slide">\n        <img src="assets/imgs/slide-2.png" class="my-slider-img">\n      </ion-slide>\n      <ion-slide class="my-slide">\n        <img src="assets/imgs/slide-3.png" class="my-slider-img">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-card class="header-card" *ngIf="isLoadingHadirkoe == false && dataValidasi != null">\n      <div class="menu-container">\n        <div class="menu-content" (click)="openPage(\'InboxPage\')">\n          <div class="img-container color-1"><img src="assets/imgs/menu-icon/inbox-white.png"></div>\n          <span ion-text text-wrap>Surat Masuk</span>\n          <ion-badge class="my-badge" *ngIf="badgesList != null && parse(badgesList[\'JUMLAH_SURAT_ALL_BADGES\'])"\n            color="danger">{{badgesList[\'JUMLAH_SURAT_ALL_BADGES\']}}</ion-badge>\n        </div>\n\n        <div class="menu-content" (click)="openPage(\'OutboxPage\')">\n          <div class="img-container color-2"><img src="assets/imgs/menu-icon/outbox-white.png"></div>\n          <span ion-text text-wrap>Surat Keluar</span>\n        </div>\n\n        <!-- <div class="menu-content" *ngIf="userdataTPK[\'data\'][\'TNO\'] == true || dataValidasi[\'HADIRKOE\'] == false"\n          (click)="openPage(\'SppdListPage\')">\n          <div class="img-container color-3"><img src="assets/imgs/menu-icon/sppd-white.png"></div>\n          <span ion-text text-wrap>SPPD</span>\n        </div> -->\n        <div class="menu-content"\n          (click)="showModal(\'FingerprintModalPage\')">\n          <div class="img-container color-8"><img src="assets/flat-icon/hadirkoe.png"></div>\n          <span ion-text text-wrap>HadirKoe</span>\n        </div>\n      </div>\n    </ion-card>\n\n    <ion-card class="header-card" *ngIf="isLoadingHadirkoe == true && dataValidasi == null">\n      <div class="menu-container">\n        <div class="menu-content">\n          <div class="animate-skeleton-background load-3"></div>\n        </div>\n\n        <div class="menu-content">\n          <div class="animate-skeleton-background load-3"></div>\n        </div>\n\n        <div class="menu-content">\n          <div class="animate-skeleton-background load-3"></div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n  <!-- <div class="my-card-3">\n    <div class="my-card-3-content" style="border-right: 1px solid #e6e6e6;">\n      <span ion-text text-wrap color="danger"\n        *ngIf="badgesList != null"><b>{{ badgesList[\'JUMLAH_SURAT_BELUM_APPROVE\'] }} surat</b></span>\n      <span ion-text text-wrap color="danger" *ngIf="badgesList == null"><b>0 surat</b></span>\n      <br>\n      <span ion-text text-wrap class="font-mini" color="gray">Butuh Approval</span>\n    </div>\n    <div class="my-card-3-content">\n      <span ion-text text-wrap color="danger"><b>5 surat</b></span> <br>\n      <span ion-text text-wrap class="font-mini" color="gray">Belum Didisposisi</span>\n    </div>\n  </div> -->\n  <br>\n  <div *ngIf="userdataTPK != null">\n    <div *ngIf="userdataTPK[\'data\'][\'TNO\'] == false">\n      <div style="margin-top: 175px;" class="menu-container">\n        <div class="menu-content-2" (click)="openPage(\'AbsenListPage\')">\n          <div class="img-container-2"><img src="assets/imgs/menu-icon/absensi.png"></div>\n          <span ion-text text-wrap>Absensi</span>\n          <ion-badge class="my-badge" *ngIf="badgesList != null && parse(badgesList[\'JUMLAH_ABSEN_BELUM_KOREKSI\'])"\n            color="danger">{{ badgesList[\'JUMLAH_ABSEN_BELUM_KOREKSI\'] }}\n          </ion-badge>\n        </div>\n\n        <div class="menu-content-2" (click)="openPage(\'CutiListPage\')">\n          <div class="img-container-2"><img src="assets/imgs/menu-icon/cuti.png"></div>\n          <span ion-text text-wrap>Cuti/Izin</span>\n        </div>\n\n        <div class="menu-content-2" (click)="openPage(\'SppdListPage\')">\n          <div class="img-container-2"><img src="assets/imgs/menu-icon/sppd-2.png"></div>\n          <span ion-text text-wrap>SPPD</span>\n        </div>\n\n        <div class="menu-content-2" (click)="openPage(\'\')">\n          <div class="img-container-2"><img src="assets/imgs/menu-icon/survey.png"></div>\n          <span ion-text text-wrap>Arsip Personal</span>\n        </div>\n      </div>\n\n      <div *ngIf="dataValidasi != null">\n        <div style="margin-top: 20px;" class="menu-container">\n          <div class="menu-content-2" (click)="openPage(\'SppdListPage\')">\n            <div class="img-container-2"><img src="assets/imgs/menu-icon/sppd-2.png"></div>\n            <span ion-text text-wrap>E-CV</span>\n          </div>\n\n          <div class="menu-content-2">\n          </div>\n\n          <div class="menu-content-2">\n          </div>\n\n          <div class="menu-content-2">\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <br>\n\n  <div class="divider"></div>\n\n\n\n  <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>AGENDA</b>\n    </span> <br>\n    <span ion-text text-wrap class="font-mini" color="gray">\n      Daftar agenda anda saat ini\n    </span>\n  </div>\n\n  <ion-card *ngIf=\'isLoading == true && agendaList.length == 0\' class="my-card">\n    <ion-item>\n      <div class="animate-skeleton-background load-2"></div>\n      <div class="animate-skeleton-background load-1"></div>\n      <div style="\n              width:100%;\n              border-bottom: 1px solid lightgray;\n              padding: 5px;\n              margin-bottom:5px;">\n      </div>\n      <div class="animate-skeleton-background load-2"> </div>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class="my-card" *ngIf="isLoading == false && agendaList.length == 0">\n    <ion-item>\n      <span ion-text text-wrap class="font-small" style="text-align:center;">\n        Tidak ada agenda hari ini.\n      </span>\n    </ion-item>\n  </ion-card>\n\n  <ion-slides pager="true" paginationType="bullets" *ngIf=\'agendaList.length > 0\'>\n    <ion-slide *ngFor="let agenda of agendaList">\n      <ion-card class="my-card">\n        <ion-item>\n          <span ion-text text-wrap class="font-mini">\n            {{ agenda[\'Tanggal_Mulai\'] }} {{ agenda[\'Start_Time\'] }} - {{ agenda[\'End_Time\'] }}\n          </span> <br>\n          <span ion-text text-wrap class="font-mini">\n            {{ agenda[\'Nama_Tempat\'] }}\n          </span>\n          <div style="\n                      width:100%;\n                      border-bottom: 1px solid white;\n                      padding: 5px;\n                      margin-bottom:5px;">\n          </div>\n          <span ion-text text-wrap class="font-small">\n            <b>{{ agenda[\'Acara\'] }}</b>\n          </span>\n        </ion-item>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <br>\n  <br>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/home3/home3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], Home3Page);
    return Home3Page;
}());

//# sourceMappingURL=home3.js.map

/***/ })

});
//# sourceMappingURL=57.js.map