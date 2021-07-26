webpackJsonp([77],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCutiPageModule", function() { return AddCutiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_cuti__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCutiPageModule = /** @class */ (function () {
    function AddCutiPageModule() {
    }
    AddCutiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_cuti__["a" /* AddCutiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_cuti__["a" /* AddCutiPage */]),
            ],
        })
    ], AddCutiPageModule);
    return AddCutiPageModule;
}());

//# sourceMappingURL=add-cuti.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCutiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { dashCaseToCamelCase } from '@angular/compiler/src/util';

/**
 * Generated class for the AddCutiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCutiPage = /** @class */ (function () {
    function AddCutiPage(navCtrl, navParams, viewCtrl, datePicker, platform, datePipe, toastCtrl, soapService, storage, loadingCtrl, oneSignal, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.datePicker = datePicker;
        this.platform = platform;
        this.datePipe = datePipe;
        this.toastCtrl = toastCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.jenisPengajuan = '';
        this.tanggalMulai = '';
        this.jamMulai = '23';
        this.jamSelesai = '23';
        this.tanggalSelesai = '';
        this.alamat = '';
        this.alasan = '';
        this.errorMsg = '';
        this.jumHari = 0;
        this.disable = false;
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_5__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_5__config__["h" /* sender_id */]);
        oneSignal.endInit();
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    AddCutiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCutiPage');
    };
    AddCutiPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddCutiPage.prototype.showDatePicker = function (type) {
        var _this = this;
        var myDate = new Date();
        var datePickerOption;
        if (this.jenisPengajuan == 'Cuti Sakit') {
            datePickerOption = {
                date: myDate,
                mode: 'date',
                androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
            };
        }
        else {
            datePickerOption = {
                date: myDate,
                mode: 'date',
                minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
                androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
            };
        }
        if (type == 1) {
            this.datePicker.show(datePickerOption).then(function (date) {
                _this.firstDate = date;
                _this.tanggalMulai = _this.datePipe.transform(date, 'dd/MM/yyyy');
                _this.startTglSelesai = date;
            }, function (err) { return console.log('Error occurred while getting date: ', err); });
        }
        else if (type == 2) {
            if (this.tanggalMulai == '') {
                var toast = this.toastCtrl.create({
                    message: 'tanggal mulai harus diisi dahulu.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                myDate = new Date(this.startTglSelesai);
                this.datePicker.show({
                    date: myDate,
                    mode: 'date',
                    minDate: this.platform.is('ios') ? myDate : (myDate).valueOf(),
                    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
                }).then(function (date) {
                    _this.secondDate = date;
                    _this.tanggalSelesai = _this.datePipe.transform(date, 'dd/MM/yyyy');
                    _this.getJumHari();
                }, function (err) { return console.log('Error occurred while getting date: ', err); });
            }
        }
    };
    AddCutiPage.prototype.checkFocus = function (data) {
        this.showDatePicker(data);
    };
    AddCutiPage.prototype.getJumHari = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mengambil Data Cuti...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_cuti_jumlah', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                id_user: this.userdataTPK['data']['IDUSER'],
                tgl_mulai: this.tanggalMulai,
                tgl_selesai: this.tanggalSelesai,
            })
        })
            .then(function (result) {
            var responData = JSON.parse(String(result));
            //console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.jumHari = responData['data']['JUMLAH_HARI'];
                loading.dismiss();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: responData['rcmsg'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loading.dismiss();
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan hari, silahkan periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
        });
    };
    AddCutiPage.prototype.doInsert = function () {
        var _this = this;
        var validationForm;
        if (this.jenisPengajuan == 'Cuti Tahunan') {
            validationForm = this.jenisPengajuan == '' || this.tanggalMulai == '' || this.tanggalSelesai == '' || this.jamMulai == '' || this.jamSelesai == '' || this.alamat == '' || this.alasan == '' || this.jumHari == '';
        }
        else {
            validationForm = this.jenisPengajuan == '' || this.tanggalMulai == '' || this.tanggalSelesai == '' || this.jamMulai == '' || this.jamSelesai == '' || this.alamat == '' || this.alasan == '';
        }
        if (validationForm) {
            this.errorMsg = '*mohon melengkapi seluruh input.';
        }
        else {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'Anda yakin ingin mengajukan cuti ?',
                cssClass: 'alert',
                buttons: [
                    {
                        text: 'TIDAK',
                        role: 'cancel',
                        handler: function () {
                            //console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'YA',
                        handler: function () {
                            // if (Date.parse(this.tanggalSelesai) <= Date.parse(this.tanggalMulai)) {
                            // } else {
                            //   let toast = this.toastCtrl.create({
                            //     message: 'Tanggal Selesai tidak boleh kurang dari tanggal mulai.',
                            //     duration: 3000,
                            //     position: 'bottom'
                            //   });
                            //   toast.present();
                            // }
                            var loading = _this.loadingCtrl.create({
                                spinner: 'dots',
                                content: "Mengubah Data...",
                                cssClass: 'transparent',
                                dismissOnPageChange: true
                            });
                            loading.present();
                            _this.soapService
                                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_cuti_new', {
                                fStream: JSON.stringify({
                                    usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                                    passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                                    id_user: _this.userdataTPK['data']['IDUSER'],
                                    id_cabang: _this.userdataTPK['data']['IDCABANG'],
                                    jenis: _this.jenisPengajuan,
                                    tgl_mulai: _this.tanggalMulai,
                                    tgl_selesai: _this.tanggalSelesai,
                                    jam_mulai: _this.jamMulai,
                                    jam_selesai: _this.jamSelesai,
                                    alasan: _this.alasan,
                                    alasan_cuti_penting: _this.alasan,
                                    lokasi: _this.alamat,
                                    jumlah: _this.jumHari,
                                    sisa_cuti: _this.userdataTPK['data']['SISA_CUTI']
                                })
                            })
                                .then(function (result) {
                                var responData = JSON.parse(String(result));
                                if (responData['rcmsg'] == "SUCCESS") {
                                    var toast = _this.toastCtrl.create({
                                        message: 'Berhasil mengajukan cuti.',
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    _this.pushNotif();
                                    toast.present();
                                    loading.dismiss();
                                    _this.cancel();
                                }
                                else {
                                    var toast = _this.toastCtrl.create({
                                        message: responData['rcmsg'],
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                    loading.dismiss();
                                }
                            })
                                .catch(function (error) {
                                var toast = _this.toastCtrl.create({
                                    message: 'Input gagal, silahkan periksa koneksi internet anda.',
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
            if (this.jenisPengajuan == 'Izin Tidak Memotong Cuti' || this.jenisPengajuan == 'Masa Haid') {
                if (this.jumHari > 0 && this.jumHari <= 2) {
                    alert_1.present();
                }
                else {
                    this.errorMsg = '*' + this.alasan + " maksimal 2 hari";
                }
            }
            else if (this.jenisPengajuan == 'Cuti Penting') {
                if (this.alasan == 'Keluarga sakit keras atau meninggal dunia' || this.alasan == 'Melangsungkan perkawinan yang pertama') {
                    if (this.jumHari >= 2 && this.jumHari <= 7) {
                        alert_1.present();
                    }
                    else {
                        this.errorMsg = '*' + this.alasan + " minimal 2 hari dan maksimal 7 hari";
                    }
                }
                else if (this.alasan == 'Mengurus harta warisan') {
                    if (this.jumHari > 0 && this.jumHari <= 7) {
                        alert_1.present();
                    }
                    else {
                        this.errorMsg = '*' + this.alasan + " maksimal 7 hari";
                    }
                }
            }
            else {
                alert_1.present();
            }
        }
    };
    AddCutiPage.prototype.pushNotif = function () {
        var _this = this;
        this.oneSignal.getIds().then(function (id) {
            _this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_notif_imove', {
                fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                    id_user: [_this.userdataTPK['data']['ID_USER_ATASAN']],
                    data: {
                        res: "InboxPage"
                    },
                    content: {
                        "en": "Pengajuan cuti dari " + _this.userdataTPK['data']['NAMA'] + " memerlukan persetujuan."
                    },
                    heading: {
                        "en": "Pengajuan Cuti"
                    }
                })
            }).then(function (result) {
                var hasil = JSON.parse(String(result));
            }).catch(function (error) {
                //console.log(error);
                _this.navCtrl.pop();
            });
        });
    };
    AddCutiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-cuti',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-cuti/add-cuti.html"*/'<!--\n  Generated template for the UpdateUserdataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <span ion-text color="light">Pengajuan Cuti/Izin</span>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cancel()">\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <span item-left>\n            <img src="assets/imgs/menu-icon/jenis_cuti.png" class="icons">\n        </span>\n        <ion-label stacked>Jenis Pengajuan</ion-label>\n        <ion-select [(ngModel)]="jenisPengajuan" placeholder="">\n            <ion-option value="Izin">Izin</ion-option>            \n            <ion-option value="Izin Tidak Memotong Cuti">Izin Tidak Memotong Cuti</ion-option>            \n            <ion-option value="Cuti Tahunan">Cuti Tahunan</ion-option>\n            <ion-option value="Cuti Besar">Cuti Besar</ion-option>\n            <ion-option value="Cuti Sakit">Cuti Sakit</ion-option>\n            <ion-option value="Cuti Bersalin">Cuti Bersalin dan Gugur Kandungan</ion-option>\n            <ion-option value="Cuti Penting">Cuti Karena Alasan Penting</ion-option>\n            <ion-option value="Cuti Diluar">Cuti Diluar Tanggungan Perusahaan</ion-option>        \n            <ion-option value="Cuti Massal">Cuti Massal / Cuti Bersama</ion-option>        \n            <ion-option value="Masa Haid">Cuti Haid</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <div>\n        <ion-item style="width:70%; float: left;">\n            <span item-left>\n                <img src="assets/imgs/menu-icon/start_date.png" class="icons">\n            </span>\n            <ion-label stacked>Tanggal Mulai</ion-label>\n            <ion-input type="text" [readonly]="true" (ionFocus)="checkFocus(1)" (click)="checkFocus(1)" [(ngModel)]="tanggalMulai"></ion-input>\n        </ion-item>\n\n        <ion-item style="width:30%; float:right;padding-top:14px;padding-left:3px !important;">\n            <ion-select [(ngModel)]="jamMulai" placeholder="" style="max-width:100%;">\n                <ion-option value="23">7:00</ion-option>\n                <ion-option value="24">19:00</ion-option>\n                <ion-option value="1">0:00</ion-option>\n                <ion-option value="2">8:00</ion-option>\n                <ion-option value="3">8:30</ion-option>\n                <ion-option value="4">9:00</ion-option>\n                <ion-option value="5">9:30</ion-option>\n                <ion-option value="6">10:00</ion-option>\n                <ion-option value="7">10:30</ion-option>\n                <ion-option value="8">11:00</ion-option>\n                <ion-option value="9">11:30</ion-option>\n                <ion-option value="10">12:00</ion-option>\n                <ion-option value="11">12:30</ion-option>\n                <ion-option value="12">13:00</ion-option>\n                <ion-option value="13">13:30</ion-option>\n                <ion-option value="14">14:00</ion-option>\n                <ion-option value="15">14:30</ion-option>\n                <ion-option value="16">15:00</ion-option>\n                <ion-option value="17">15:30</ion-option>\n                <ion-option value="18">16:00</ion-option>\n                <ion-option value="19">16:30</ion-option>\n                <ion-option value="20">17:00</ion-option>\n                <ion-option value="21">17:30</ion-option>\n                <ion-option value="22">18.00</ion-option>\n                <ion-option value="25">20:00</ion-option>\n                <ion-option value="26">6:00</ion-option>\n                <ion-option value="28">7:30</ion-option>\n            </ion-select>\n        </ion-item>\n    </div>\n\n    <div>\n        <ion-item style="width:70%; float: left;">\n            <span item-left>\n                <img src="assets/imgs/menu-icon/end_date.png" class="icons">\n            </span>\n            <ion-label stacked>Tanggal Selesai</ion-label>\n            <!-- <ion-input type="text" [readonly]="true" (ionFocus)="checkFocus(2)" [(ngModel)]="tanggalSelesai"> -->\n                <ion-input type="text" [readonly]="true" (click)="checkFocus(2)" (ionFocus)="checkFocus(2)" [(ngModel)]="tanggalSelesai">\n            </ion-input>\n        </ion-item>\n\n        <ion-item style="width:30%; float:right;padding-top:14px;padding-left:3px !important;">\n            <ion-select [(ngModel)]="jamSelesai" placeholder="" style="max-width:100%;">\n                <ion-option value="23">7:30</ion-option>\n                <ion-option value="24">20:00</ion-option>\n                <ion-option value="1">8:00</ion-option>\n                <ion-option value="2">8:30</ion-option>\n                <ion-option value="3">9:00</ion-option>\n                <ion-option value="4">9:30</ion-option>\n                <ion-option value="5">10:00</ion-option>\n                <ion-option value="6">10:30</ion-option>\n                <ion-option value="7">11:00</ion-option>\n                <ion-option value="8">11:30</ion-option>\n                <ion-option value="9">12:00</ion-option>\n                <ion-option value="10">12:30</ion-option>\n                <ion-option value="11">13:00</ion-option>\n                <ion-option value="12">13:30</ion-option>\n                <ion-option value="13">14:00</ion-option>\n                <ion-option value="14">14:30</ion-option>\n                <ion-option value="15">15:00</ion-option>\n                <ion-option value="16">15:30</ion-option>\n                <ion-option value="17">16:00</ion-option>\n                <ion-option value="18">16:30</ion-option>\n                <ion-option value="19">17:00</ion-option>\n                <ion-option value="20">17:30</ion-option>\n                <ion-option value="21">18:00</ion-option>\n                <ion-option value="22">19.00</ion-option>\n                <ion-option value="25">22:00</ion-option>\n                <ion-option value="26">7:00</ion-option>\n                <ion-option value="28">8:00</ion-option>\n            </ion-select>\n        </ion-item>\n    </div>\n\n    <div *ngIf="jenisPengajuan == \'Cuti Tahunan\' && tanggalSelesai != \'\'" >\n        <ion-item>\n            <span item-left>\n                <img src="assets/imgs/menu-icon/jumHari.png" class="icons">\n            </span>\n            <ion-label stacked>Jumlah Hari</ion-label>\n            <ion-input type="number" [(ngModel)]="jumHari"></ion-input>\n        </ion-item>\n\n        <p ion-text text-wrap color="color4" style="padding-left:8px !important;">*Bila terdapat kesalahan jumlah hari silahkan disesuaikan</p>\n        <p ion-text text-wrap color="danger" style="padding-left:8px !important;">Sisa Cuti Tahunan : <b>{{ userdataTPK[\'data\'][\'SISA_CUTI\'] }}</b></p>\n    </div>\n\n    <ion-item>\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alamat.png" class="icons">\n        </span>\n        <ion-label stacked>Alamat Selama Cuti</ion-label>\n        <ion-textarea rows="3" [(ngModel)]="alamat"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="jenisPengajuan != \'Cuti Penting\' && jenisPengajuan != \'Izin Tidak Memotong Cuti\' && jenisPengajuan != \'Cuti Bersalin\'">\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n        </span>\n        <ion-label stacked>Alasan</ion-label>\n        <ion-input type="text" [(ngModel)]="alasan"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="jenisPengajuan == \'Cuti Penting\'">\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n        </span>\n        <ion-label stacked>Alasan</ion-label>\n        <ion-select [(ngModel)]="alasan" placeholder="">\n            <ion-option value="Keluarga sakit keras atau meninggal dunia">Keluarga sakit keras atau meninggal dunia</ion-option>\n            <ion-option value="Mengurus harta warisan">Mengurus harta warisan</ion-option>\n            <ion-option value="Melangsungkan perkawinan yang pertama">Melangsungkan perkawinan yang pertama</ion-option>\n            <ion-option value="Melaksanakan Ibadah Haji ke Tanah Suci">Melaksanakan Ibadah Haji ke Tanah Suci</ion-option>\n            <ion-option value="Melaksanakan Ibadah Umroh">Melaksanakan Ibadah Umroh</ion-option>\n            <ion-option value="Lainnya yang ditetapkan perusahaan">Lainnya yang ditetapkan perusahaan</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="jenisPengajuan == \'Izin Tidak Memotong Cuti\'">\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n        </span>\n        <ion-label stacked>Alasan</ion-label>\n        <ion-select [(ngModel)]="alasan" placeholder="">\n            <ion-option value="Khitanan anak">Khitanan anak</ion-option>\n            <ion-option value="Pernikahan anak">Pernikahan anak</ion-option>\n            <ion-option value="Pekerja pindah rumah">Pekerja pindah rumah</ion-option>\n            <ion-option value="Istri pekerja melahirkan atau keguguran">Istri pekerja melahirkan atau keguguran</ion-option>            \n        </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="jenisPengajuan == \'Cuti Bersalin\'">\n        <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n        </span>\n        <ion-label stacked>Alasan</ion-label>\n        <ion-select [(ngModel)]="alasan" placeholder="">\n            <ion-option value="Cuti bersalin">Cuti bersalin</ion-option>\n            <ion-option value="Cuti gugur kandungan">Cuti gugur kandungan</ion-option>            \n        </ion-select>\n    </ion-item>\n    <p ion-text text-wrap color="danger" style="padding-left:8px !important;">{{errorMsg}}</p>\n    <br>\n    <div class="row">\n        <div class="col">\n            <button ion-button full icon-start color="danger" style="border-radius: 5px;" (click)="cancel()">\n                <ion-icon name="close"></ion-icon>\n                Batal\n            </button>\n        </div>\n        <div class="col">\n            <button ion-button full icon-end style="border-radius: 5px;" [disabled]=\'disable\' (click)="doInsert()">\n                Ajukan\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-cuti/add-cuti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddCutiPage);
    return AddCutiPage;
}());

//# sourceMappingURL=add-cuti.js.map

/***/ })

});
//# sourceMappingURL=77.js.map