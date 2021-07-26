webpackJsonp([67],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveKoreksiAbsenPageModule", function() { return ApproveKoreksiAbsenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approve_koreksi_absen__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApproveKoreksiAbsenPageModule = /** @class */ (function () {
    function ApproveKoreksiAbsenPageModule() {
    }
    ApproveKoreksiAbsenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__approve_koreksi_absen__["a" /* ApproveKoreksiAbsenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__approve_koreksi_absen__["a" /* ApproveKoreksiAbsenPage */]),
            ],
        })
    ], ApproveKoreksiAbsenPageModule);
    return ApproveKoreksiAbsenPageModule;
}());

//# sourceMappingURL=approve-koreksi-absen.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveKoreksiAbsenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(103);
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
 * Generated class for the ApproveKoreksiAbsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApproveKoreksiAbsenPage = /** @class */ (function () {
    function ApproveKoreksiAbsenPage(navCtrl, navParams, _fb, viewCtrl, soapService, storage, loadingCtrl, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.viewCtrl = viewCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
        this.status = navParams.get('status');
        this.dataKoreksi = navParams.get('dataKoreksi');
        // console.log(this.dataKoreksi);
        this.is_tno = navParams.get('is_tno');
        this.ApprovalForm = this._fb.group({
            fcKomentarDatang: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcKomentarPulang: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    }
    ApproveKoreksiAbsenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApproveKoreksiAbsenPage');
    };
    ApproveKoreksiAbsenPage.prototype.submit = function () {
        if ((this.dataKoreksi['KETERANGAN KOREKSI DATANG'] == '' || this.dataKoreksi['KETERANGAN KOREKSI DATANG'] == null) && (this.dataKoreksi['STATUS KOREKSI DATANG'] == '' || this.dataKoreksi['STATUS KOREKSI DATANG'] == '')) {
            if (this.ApprovalForm.controls.fcKomentarPulang.value != '') {
                this.sendData();
            }
            else {
                // console.log('error pulang');
                this.errorMsg = '*Field Tidak Boleh Kosong';
            }
        }
        else if ((this.dataKoreksi['KETERANGAN KOREKSI PULANG'] == '' || this.dataKoreksi['KETERANGAN KOREKSI PULANG'] == null) && this.dataKoreksi['STATUS KOREKSI PULANG'] == '' || this.dataKoreksi['STATUS KOREKSI PULANG'] == null) {
            if (this.ApprovalForm.controls.fcKomentarDatang.value != '') {
                this.sendData();
            }
            else {
                // console.log('error datang');
                this.errorMsg = '*Field Tidak Boleh Kosong';
            }
        }
        else {
            if (this.ApprovalForm.controls.fcKomentarDatang.value != '' && this.ApprovalForm.controls.fcKomentarPulang.value != '') {
                this.sendData();
            }
            else {
                this.errorMsg = '*Field Tidak Boleh Kosong';
            }
        }
    };
    ApproveKoreksiAbsenPage.prototype.sendData = function () {
        var _this = this;
        var tno = this.is_tno ? "1" : "0";
        var msg = "";
        if (this.status == 1) {
            msg = "Anda yakin ingin approve koreksi absen bawahan ?";
        }
        else if (this.status == 0) {
            msg = "Anda yakin ingin decline koreksi absen bawahan ?";
        }
        else {
            // console.log('error here');
        }
        var alert = this.alertCtrl.create({
            subTitle: msg,
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
                        var loading = _this.loadingCtrl.create({
                            spinner: 'dots',
                            content: "Mohon Tunggu...",
                            cssClass: 'transparent',
                        });
                        loading.present();
                        _this.soapService.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_absen_confirm', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                                nipp: _this.dataKoreksi['NIPP'],
                                id_koreksi: _this.dataKoreksi['ID KOREKSI'],
                                komen_datang: _this.ApprovalForm.controls.fcKomentarDatang.value,
                                komen_pulang: _this.ApprovalForm.controls.fcKomentarPulang.value,
                                is_tno: _this.is_tno ? "1" : "0",
                                confirm: _this.status,
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                _this.viewCtrl.dismiss().then(function () {
                                    if (_this.status == 1) {
                                        _this.sendNotif('approve');
                                    }
                                    else if (_this.status == 0) {
                                        _this.sendNotif('decline');
                                    }
                                    else {
                                        // console.log('error here');
                                    }
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
                        })
                            .catch(function (error) {
                            // console.log(error);
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ApproveKoreksiAbsenPage.prototype.sendNotif = function (type) {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                nipp: [this.dataKoreksi['NIPP']],
                data: {
                    "res": "AbsenListPage"
                },
                content: {
                    "en": type == 'approve' ? "Pengajuan Koreksi Absen Anda Disetujui Oleh " + this.userdataTPK['data']['NAMA'] : "Pengajuan Koreksi Absen Anda Ditolak Oleh " + this.userdataTPK['data']['NAMA']
                },
                heading: {
                    "en": "Pengajuan Koreksi Absen"
                },
                id_kategori: '',
                id_user: '',
                id_jabatan: ''
            })
        }).then(function (result) {
            var hasil = JSON.parse(String(result));
            _this.navCtrl.pop();
        }).catch(function (error) {
            // console.log(error);
            _this.navCtrl.pop();
        });
    };
    ApproveKoreksiAbsenPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ApproveKoreksiAbsenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-approve-koreksi-absen',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/approve-koreksi-absen/approve-koreksi-absen.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><span style="color:#FFF">Koreksi Absen</span></ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cancel()">\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="appForm">\n        <form [formGroup]="ApprovalForm" class="list-form">\n            <ion-item no-padding\n                [hidden]="(dataKoreksi[\'KETERANGAN KOREKSI DATANG\'] == \'\' && dataKoreksi[\'STATUS KOREKSI DATANG\'] == \'\' ) ? true : false ">\n                <span item-left>\n                    <img src="assets/imgs/logo/perihal.png" class="icons">\n                </span>\n                <ion-label stacked>Komentar Datang</ion-label>\n                <ion-input type="text" formControlName="fcKomentarDatang" placeholder=""></ion-input>\n            </ion-item>\n            <ion-item no-padding\n                [hidden]="(dataKoreksi[\'KETERANGAN KOREKSI PULANG\'] == \'\' && dataKoreksi[\'STATUS KOREKSI PULANG\'] == \'\' ) ? true : false ">\n                <span item-left>\n                    <img src="assets/imgs/logo/perihal2.png" class="icons">\n                </span>\n                <ion-label stacked>Komentar Pulang</ion-label>\n                <ion-input type="text" formControlName="fcKomentarPulang" placeholder=""></ion-input>\n            </ion-item>\n            <p ion-text color="danger">{{errorMsg}}</p>\n\n            <div class="row">\n                <div class="col">\n                    <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="cancel()"\n                        margin-top>\n                        <ion-icon name="md-close"></ion-icon>\n                        Batal\n                    </button>\n                </div>\n                <div class="col">\n                    <button ion-button icon-start full color="primary" style="border-radius: 5px;" margin-top\n                        (click)="submit()">\n                        <ion-icon name="md-checkmark"></ion-icon>\n                        Koreksi\n                    </button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/approve-koreksi-absen/approve-koreksi-absen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ApproveKoreksiAbsenPage);
    return ApproveKoreksiAbsenPage;
}());

//# sourceMappingURL=approve-koreksi-absen.js.map

/***/ })

});
//# sourceMappingURL=67.js.map