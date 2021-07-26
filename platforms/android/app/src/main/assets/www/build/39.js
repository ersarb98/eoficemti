webpackJsonp([39],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P2bCatatanPageModule", function() { return P2bCatatanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__p2b_catatan__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var P2bCatatanPageModule = /** @class */ (function () {
    function P2bCatatanPageModule() {
    }
    P2bCatatanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__p2b_catatan__["a" /* P2bCatatanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__p2b_catatan__["a" /* P2bCatatanPage */]),
            ],
        })
    ], P2bCatatanPageModule);
    return P2bCatatanPageModule;
}());

//# sourceMappingURL=p2b-catatan.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P2bCatatanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
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
 * Generated class for the P2bCatatanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var P2bCatatanPage = /** @class */ (function () {
    function P2bCatatanPage(navCtrl, navParams, alertCtrl, loadingCtrl, soapService, oneSignal, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.oneSignal = oneSignal;
        this.toastCtrl = toastCtrl;
    }
    P2bCatatanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad P2bCatatanPage');
    };
    P2bCatatanPage.prototype.doKeberatan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Anda yakin ingin melakukan keberatan ?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'TIDAK',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'YA',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_p2b_keberatan_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp_user: _this.userdataTPK['data']['NIPP'],
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                id_penilai: _this.p2buser['P2B_ID_ATASAN_2'],
                                id_jabatan_penilai: _this.p2buser['P2B_ID_JAB_ATASAN_2'],
                                year: _this.p2bdata['Tahun'],
                                month: _this.convertMonths(_this.p2bdata['Bulan'])
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: 'Pengajuan Keberatan Berhasil.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present().then(function () {
                                    _this.pushNotif('keberatan');
                                    _this.navCtrl.pop();
                                });
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            loading.dismiss();
                            _this.isLoading = false;
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    P2bCatatanPage.prototype.pushNotif = function (type) {
        var _this = this;
        var userList = [];
        var res;
        var en;
        if (type == 'dinilai') {
            res = 'P2bPage';
            en = 'Pengajuan P2B anda telah dinilai oleh atasan';
            userList.push(this.p2bdata['NIPP']);
        }
        else if (type == 'kembalikan') {
            res = 'P2bPage';
            en = 'Pengajuan P2B anda dikembalikan oleh atasan';
            userList.push(this.p2bdata['NIPP']);
        }
        else if (type == 'keberatan') {
            res = 'P2bPage';
            en = 'Ada Pengajuan Keberatan P2B dari ' + this.userdataTPK['data']['NAMA'];
            userList.push(this.p2buser['P2B_NIPP_ATASAN_2']);
        }
        else if (type == 'penilaian') {
            res = 'RencanaKerjaBawahanListPage';
            en = 'Ada Pengajuan P2B dari ' + this.userdataTPK['data']['NAMA'];
            userList.push(this.p2buser['P2B_NIPP_ATASAN_1']);
        }
        else if (type == 'finished') {
            res = 'P2bPage';
            en = 'Pengajuan keberatan P2B anda telah dinilai oleh ' + this.userdataTPK['data']['NAMA'];
            userList.push(this.p2bdata['NIPP']);
        }
        else {
        }
        this.oneSignal.getIds().then(function (id) {
            _this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', {
                fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                    nipp: userList,
                    data: {
                        "res": res,
                        "p2buser": _this.p2buser
                    },
                    heading: {
                        "en": "P2B"
                    },
                    content: {
                        "en": en
                    },
                })
            }).then(function (result) {
                var hasil = JSON.parse(String(result));
            }).catch(function (error) {
            });
        });
    };
    P2bCatatanPage.prototype.convertMonths = function (month) {
        switch (month) {
            case 'JANUARI':
                return "1";
            case 'FEBRUARI':
                return "2";
            case 'MARET':
                return "3";
            case 'APRIL':
                return "4";
            case 'MEI':
                return "5";
            case 'JUNI':
                return "6";
            case 'JULI':
                return "7";
            case 'AGUSTUS':
                return "8";
            case 'SEPTEMBER':
                return "9";
            case 'OKTOBER':
                return "10";
            case 'NOVEMBER':
                return "11";
            case 'DESEMBER':
                return "12";
            default:
                return "false";
        }
    };
    P2bCatatanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-p2b-catatan',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b-catatan/p2b-catatan.html"*/'<!--\n  Generated template for the P2bCatatanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>p2bCatatan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b-catatan/p2b-catatan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], P2bCatatanPage);
    return P2bCatatanPage;
}());

//# sourceMappingURL=p2b-catatan.js.map

/***/ })

});
//# sourceMappingURL=39.js.map