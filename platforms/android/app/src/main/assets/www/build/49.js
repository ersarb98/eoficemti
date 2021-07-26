webpackJsonp([49],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KoreksiAbsenPersonalPageModule", function() { return KoreksiAbsenPersonalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koreksi_absen_personal__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KoreksiAbsenPersonalPageModule = /** @class */ (function () {
    function KoreksiAbsenPersonalPageModule() {
    }
    KoreksiAbsenPersonalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__koreksi_absen_personal__["a" /* KoreksiAbsenPersonalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__koreksi_absen_personal__["a" /* KoreksiAbsenPersonalPage */]),
            ],
        })
    ], KoreksiAbsenPersonalPageModule);
    return KoreksiAbsenPersonalPageModule;
}());

//# sourceMappingURL=koreksi-absen-personal.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KoreksiAbsenPersonalPage; });
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
 * Generated class for the KoreksiAbsenPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KoreksiAbsenPersonalPage = /** @class */ (function () {
    function KoreksiAbsenPersonalPage(navCtrl, navParams, _fb, viewCtrl, soapService, storage, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.viewCtrl = viewCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.alasanList = [];
        this.userdataTPK = navParams.get('userdataTPK');
        this.dataAbsen = navParams.get('dataAbsen');
        this.jenisAbsen = navParams.get('jenisAbsen');
        this.ApprovalForm = this._fb.group({
            fcAlasan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcJmlHari: [1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcKeterangan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
        this.getAlasan();
    }
    KoreksiAbsenPersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KoreksiAbsenPersonalPage');
    };
    KoreksiAbsenPersonalPage.prototype.getAlasan = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.soapService.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_absen_alasan', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                nipp: this.userdataTPK['data']['NIPP'],
                id_user: this.userdataTPK['data']['IDUSER'],
                tno: this.userdataTPK['data']['TNO']
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.alasanList = [];
                _this.alasanList = responData['data'];
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
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
        });
    };
    KoreksiAbsenPersonalPage.prototype.submit = function () {
        var _this = this;
        if (this.ApprovalForm.controls.fcJmlHari.value < 1) {
            this.errorMsg = "*Jumlah hari tidak boleh 0";
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
                content: "Mohon Tunggu...",
                cssClass: 'transparent',
                dismissOnPageChange: true
            });
            loading_1.present();
            this.soapService.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_absen_koreksi', { fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                    nipp: this.userdataTPK['data']['NIPP'],
                    id_absen: this.dataAbsen['ID'],
                    jenis_absen: this.jenisAbsen,
                    absen_hari: this.ApprovalForm.controls.fcJmlHari.value,
                    keterangan: this.ApprovalForm.controls.fcKeterangan.value,
                    alasan: this.ApprovalForm.controls.fcAlasan.value
                }) }).then(function (result) {
                var responData = JSON.parse(String(result));
                // console.log(responData)           ;
                if (responData['rcmsg'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: 'Koreksi Absen Berhasil',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.viewCtrl.dismiss({ isCancel: false }).then(function () {
                        _this.sendNotif();
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
                loading_1.dismiss();
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({
                    message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loading_1.dismiss();
            });
        }
    };
    KoreksiAbsenPersonalPage.prototype.sendNotif = function () {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                nipp: [],
                data: {
                    "res": "KoreksiAbsenBawahanPage"
                },
                content: {
                    "en": "Pengajuan Koreksi Absen dari " + this.userdataTPK['data']['NAMA'] + " membutuhkan tindak lanjut."
                },
                heading: {
                    "en": "Pengajuan Koreksi Absen"
                },
                id_kategori: '',
                id_user: this.userdataTPK['data']['IDUSER'],
                id_jabatan: this.userdataTPK['data']['IDJABATAN']
            }) }).then(function (result) {
            var hasil = JSON.parse(String(result));
            _this.navCtrl.pop();
        }).catch(function (error) {
            _this.navCtrl.pop();
        });
    };
    KoreksiAbsenPersonalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({ isCancel: true });
    };
    KoreksiAbsenPersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-koreksi-absen-personal',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/koreksi-absen-personal/koreksi-absen-personal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><span style="color:#FFF">Koreksi Absen</span></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="ApprovalForm" class="list-form">\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/logo/alasan.png" class="icons">\n      </span>\n      <ion-label stacked>Alasan</ion-label>\n      <ion-select formControlName="fcAlasan" placeholder="">\n        <div *ngIf="alasanList.length != 0" >\n            <ion-option  *ngFor="let alasan of alasanList"  value="{{alasan[\'JENIS_ALASAN\']}}">{{ alasan[\'JENIS_ALASAN\'] }}</ion-option>\n        </div>                \n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/logo/start_date.png" class="icons">\n      </span>\n      <ion-label stacked>Jumlah hari</ion-label>\n      <ion-input type="number" min=\'1\' max=\'5\' formControlName="fcJmlHari" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span item-left>\n        <img src="assets/imgs/logo/perihal.png" class="icons">\n      </span>\n      <ion-label stacked>Keterangan</ion-label>\n      <ion-input type="text" formControlName="fcKeterangan" placeholder=""></ion-input>\n    </ion-item>\n\n    <p ion-text align="start" color="danger">{{errorMsg}}</p>\n\n    <div class="row">\n      <div class="col">\n        <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="cancel()" margin-top>\n          <ion-icon name="md-close"></ion-icon>\n          Batal\n        </button>\n      </div>\n      <div class="col">\n        <button ion-button icon-start full color="primary" style="border-radius: 5px;" margin-top (click)="submit()"\n          [disabled]="!ApprovalForm.valid">\n          <ion-icon name="md-checkmark"></ion-icon>\n          Submit\n        </button>\n      </div>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/koreksi-absen-personal/koreksi-absen-personal.html"*/,
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
    ], KoreksiAbsenPersonalPage);
    return KoreksiAbsenPersonalPage;
}());

//# sourceMappingURL=koreksi-absen-personal.js.map

/***/ })

});
//# sourceMappingURL=49.js.map