webpackJsonp([50],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KoreksiAbsenBawahanPageModule", function() { return KoreksiAbsenBawahanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koreksi_absen_bawahan__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KoreksiAbsenBawahanPageModule = /** @class */ (function () {
    function KoreksiAbsenBawahanPageModule() {
    }
    KoreksiAbsenBawahanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__koreksi_absen_bawahan__["a" /* KoreksiAbsenBawahanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__koreksi_absen_bawahan__["a" /* KoreksiAbsenBawahanPage */]),
            ],
        })
    ], KoreksiAbsenBawahanPageModule);
    return KoreksiAbsenBawahanPageModule;
}());

//# sourceMappingURL=koreksi-absen-bawahan.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KoreksiAbsenBawahanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
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
 * Generated class for the KoreksiAbsenBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KoreksiAbsenBawahanPage = /** @class */ (function () {
    function KoreksiAbsenBawahanPage(navCtrl, navParams, loadingCtrl, alertCtrl, soapService, storage, datepipe, actionSheetCtrl, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.datepipe = datepipe;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.dataBawahanList = [];
        this.dataKoreksiList = [];
        this.tahunList = [];
        var date = new Date();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth();
        this.tahun = this.currentYear;
        this.bulan = this.currentMonth + 1;
        for (var i = 0; i < 10; i++) {
            this.tahunList.push(this.currentYear - i);
        }
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getDataBawahan((_this.currentMonth + 1), _this.tahun);
        });
    }
    KoreksiAbsenBawahanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KoreksiAbsenBawahanPage');
    };
    KoreksiAbsenBawahanPage.prototype.getDataBawahan = function (bln, thn) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        var m = bln;
        this.soapService.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_absen_bawahan', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.userdataTPK['data']['NIPP'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                bulan: m < 10 ? '0' + m : m,
                tahun: thn
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.dataKoreksiList = [];
                _this.dataKoreksiList = responData['data']['LIST_OFFICER'];
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
    };
    KoreksiAbsenBawahanPage.prototype.convertMonths = function () {
        switch (this.bulan) {
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
    };
    KoreksiAbsenBawahanPage.prototype.selectVal = function () {
        this.dataKoreksiList = [];
        if (this.dataBawahanList[this.index]['DATA KOREKSI'].length > 0) {
            for (var i = 0; i < this.dataBawahanList[this.index]['DATA KOREKSI'].length; i++) {
                this.dataKoreksiList.push(this.dataBawahanList[this.index]['DATA KOREKSI'][i]);
            }
        }
    };
    KoreksiAbsenBawahanPage.prototype.showOption = function (data) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Pilih Proses',
            buttons: [
                {
                    text: 'Approve',
                    role: 'koreksiDatang',
                    handler: function () {
                        var modal = _this.modalCtrl.create("ApproveKoreksiAbsenPage", {
                            dataKoreksi: data,
                            status: '1',
                            is_tno: data['IS_TNO']
                        }, {
                            enableBackdropDismiss: true,
                            showBackdrop: true,
                            cssClass: 'my-modal2'
                        });
                        modal.present();
                        modal.onDidDismiss(function (data) {
                            _this.getDataBawahan(_this.bulan, _this.tahun);
                        });
                    }
                },
                {
                    text: 'Decline',
                    handler: function () {
                        var modal = _this.modalCtrl.create("ApproveKoreksiAbsenPage", {
                            dataKoreksi: data,
                            status: '0',
                            is_tno: data['IS_TNO']
                        }, {
                            enableBackdropDismiss: true,
                            showBackdrop: true,
                            cssClass: 'my-modal2'
                        });
                        modal.present();
                        modal.onDidDismiss(function (data) {
                            _this.getDataBawahan(_this.bulan, _this.tahun);
                        });
                    }
                },
                {
                    text: 'Tutup',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    KoreksiAbsenBawahanPage.prototype.searchDataKoreksi = function () {
        this.getDataBawahan(this.bulan, this.tahun);
    };
    KoreksiAbsenBawahanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-koreksi-absen-bawahan',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/koreksi-absen-bawahan/koreksi-absen-bawahan.html"*/'<!--\n  Generated template for the CutiListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n            <span ion-text color="light" class="fw500">Koreksi Absen Bawahan</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="divs">\n        <ion-item no-lines style="padding-left:8px !important">\n            <ion-select [(ngModel)]="bulan" placeholder="Pilih Bulan">\n                <!-- <ion-option *ngFor="let m of bulanList" value="{{m[\'bulan\']}}_{{m[\'tahun\']}}">{{ convertMonths2(m[\'bulan\']) }} {{m[\'tahun\']}}</ion-option>                    </ion-select> -->\n                <ion-option value="1">Januari</ion-option>\n                <ion-option value="2">Februari</ion-option>\n                <ion-option value="3">Maret</ion-option>\n                <ion-option value="4">April</ion-option>\n                <ion-option value="5">Mei</ion-option>\n                <ion-option value="6">Juni</ion-option>\n                <ion-option value="7">Juli</ion-option>\n                <ion-option value="8">Agustus</ion-option>\n                <ion-option value="9">September</ion-option>\n                <ion-option value="10">Oktober</ion-option>\n                <ion-option value="11">November</ion-option>\n                <ion-option value="12">Desember</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item no-lines style="padding-left:8px !important">\n            <ion-select [(ngModel)]="tahun" placeholder="Pilih Tahun">\n                <ion-option *ngFor="let tahun of tahunList" value="{{tahun}}">{{tahun}}</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <button ion-button block icon-start color="primary" class="button" margin-top (click)="searchDataKoreksi()"\n            [disabled]="(bulan == null || tahun == null) ? true : false">\n            <ion-icon name="md-search"></ion-icon>\n            Cari\n        </button>\n    </div>\n\n    <div *ngIf="!isLoading">\n        <ion-grid fixed no-padding *ngIf="dataKoreksiList.length == 0" fixed>\n            <ion-row>\n                <ion-col col-12>\n\n                    <ion-card class="primary-bg">\n                        <ion-card-content>\n                            <p text-center class="text-white">Tidak ada data koreksi</p>\n                        </ion-card-content>\n                    </ion-card>\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <div *ngIf="dataKoreksiList.length > 0">\n            <ion-card *ngFor="let dataKoreksi of dataKoreksiList" (click)="showOption(dataKoreksi)">\n                <ion-item tapplable>\n                    <span ion-text text-wrap class="font2 bold" color="dark">{{ dataKoreksi[\'NAMA\'] }} | </span>\n                    <span ion-text text-wrap class="font2" color="danger">Tanggal {{dataKoreksi[\'TANGGAL\']}}\n                    </span> <br>\n\n                    <div style="display: table;width:100%;">\n                        <div style="display: table-cell;">\n                            <span ion-text text-wrap class="font" style="color:#959595">Datang :</span>\n                            <span ion-text text-wrap class="font2"\n                                *ngIf="dataKoreksi[\'JAM MASUK\'] == \'\' || dataKoreksi[\'JAM MASUK\'] == null"> -\n                            </span>\n                            <span ion-text text-wrap class="font2"\n                                *ngIf="dataKoreksi[\'JAM MASUK\'] != \'\' || dataKoreksi[\'JAM MASUK\'] != null">\n                                {{ dataKoreksi[\'JAM MASUK\'] }} </span>\n                        </div>\n\n                        <div style="display: table-cell;text-align: right;">\n                            <span ion-text text-wrap class="font" color="primary"\n                                *ngIf="dataKoreksi[\'STATUS KOREKSI DATANG\'] == \'POSTED\'">\n                                {{ dataKoreksi[\'STATUS KOREKSI DATANG\'] }}\n                            </span>\n                            <span ion-text text-wrap class="font" color="secondary"\n                                *ngIf="dataKoreksi[\'STATUS KOREKSI DATANG\'] == \'APPROVED\'">\n                                {{ dataKoreksi[\'STATUS KOREKSI DATANG\'] }}</span>\n                        </div>\n                    </div>\n\n                    <span ion-text text-wrap class="font" style="color:#959595">Ket. koreksi datang :</span>\n                    <br>\n                    <span ion-text text-wrap class="font2"\n                        *ngIf="dataKoreksi[\'KETERANGAN KOREKSI DATANG\'] == \'\' || dataKoreksi[\'KETERANGAN KOREKSI DATANG\'] == null">\n                        -\n                    </span>\n                    <span ion-text text-wrap class="font2">{{ dataKoreksi[\'KETERANGAN KOREKSI DATANG\'] }}</span>\n\n                    <br><br>\n\n                    <div style="display: table;width:100%;">\n                        <div style="display: table-cell;">\n                            <span ion-text text-wrap class="font" style="color:#959595">Pulang :</span>\n                            <span ion-text text-wrap class="font2"\n                                *ngIf="dataKoreksi[\'JAM PULANG\'] == \'\' || dataKoreksi[\'JAM PULANG\'] == null"> -\n                            </span>\n                            <span ion-text text-wrap class="font2"\n                                *ngIf="dataKoreksi[\'JAM PULANG\'] != \'\' || dataKoreksi[\'JAM PULANG\'] != null">{{ dataKoreksi[\'JAM PULANG\'] }}</span>\n                        </div>\n\n                        <div style="display: table-cell;text-align: right;">\n                            <span ion-text text-wrap class="font" color="primary"\n                                *ngIf="dataKoreksi[\'STATUS KOREKSI PULANG\'] == \'POSTED\'">\n                                {{ dataKoreksi[\'STATUS KOREKSI PULANG\'] }}\n                            </span>\n                            <span ion-text text-wrap class="font" color="secondary"\n                                *ngIf="dataKoreksi[\'STATUS KOREKSI PULANG\'] == \'APPROVED\'">\n                                {{ dataKoreksi[\'STATUS KOREKSI PULANG\'] }}</span>\n                        </div>\n                    </div>\n\n                    <span ion-text text-wrap class="font" style="color:#959595">Ket. koreksi Pulang :</span>\n                    <br>\n                    <span ion-text text-wrap class="font2"\n                        *ngIf="dataKoreksi[\'KETERANGAN KOREKSI PULANG\'] == \'\' || dataKoreksi[\'KETERANGAN KOREKSI PULANG\'] == null">\n                        -\n                    </span>\n                    <span ion-text text-wrap class="font2">{{ dataKoreksi[\'KETERANGAN KOREKSI PULANG\'] }}</span>\n                </ion-item>\n            </ion-card>\n        </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/koreksi-absen-bawahan/koreksi-absen-bawahan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], KoreksiAbsenBawahanPage);
    return KoreksiAbsenBawahanPage;
}());

//# sourceMappingURL=koreksi-absen-bawahan.js.map

/***/ })

});
//# sourceMappingURL=50.js.map