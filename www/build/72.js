webpackJsonp([72],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRestitusiPageModule", function() { return AddRestitusiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_restitusi__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddRestitusiPageModule = /** @class */ (function () {
    function AddRestitusiPageModule() {
    }
    AddRestitusiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_restitusi__["a" /* AddRestitusiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_restitusi__["a" /* AddRestitusiPage */]),
            ],
        })
    ], AddRestitusiPageModule);
    return AddRestitusiPageModule;
}());

//# sourceMappingURL=add-restitusi.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRestitusiPage; });
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









/**
 * Generated class for the AddRestitusiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddRestitusiPage = /** @class */ (function () {
    function AddRestitusiPage(navCtrl, navParams, viewCtrl, datePicker, platform, datePipe, toastCtrl, soapService, storage, loadingCtrl, oneSignal, alertCtrl, modalCtrl) {
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
        this.modalCtrl = modalCtrl;
        this.jenisRestitusi = 'kesehatan';
        this.dataList = [];
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_5__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_5__config__["h" /* sender_id */]);
        oneSignal.endInit();
        this.tglPengajuan = new Date();
        this.tglPengajuan = this.datePipe.transform(this.tglPengajuan, 'dd/MM/yyyy');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    AddRestitusiPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddRestitusiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddRestitusiPage');
    };
    AddRestitusiPage.prototype.addNota = function (param, index) {
        var _this = this;
        //console.log(index);
        var modal = this.modalCtrl.create("AddNotaRestitusiPage", {
            dataPasien: param
        }, {
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modal.present();
        modal.onDidDismiss(function (res) {
            //console.log(res);
            if (res['data'] != null) {
                if (index == null) {
                    //console.log('tambah baru');
                    _this.dataList.push({
                        tglNota: res['data']['tglNota'],
                        namaPasien: res['data']['namaPasien'],
                        statusKeluarga: res['data']['statusKeluarga'],
                        biayaDokter: res['data']['biayaDokter'],
                        biayaObat: res['data']['biayaObat'],
                        biayaTindakan: res['data']['biayaTindakan'],
                        biayaPerawatan: res['data']['biayaPerawatan'],
                        biayaAdministrasi: res['data']['biayaAdministrasi'],
                        biayaKacamata: res['data']['biayaKacamata'],
                        biayaLain: res['data']['biayaLain']
                    });
                }
                else {
                    //console.log('edit');
                    _this.dataList[index]['tglNota'] = res['data']['tglNota'],
                        _this.dataList[index]['namaPasien'] = res['data']['namaPasien'],
                        _this.dataList[index]['statusKeluarga'] = res['data']['statusKeluarga'],
                        _this.dataList[index]['biayaDokter'] = res['data']['biayaDokter'],
                        _this.dataList[index]['biayaObat'] = res['data']['biayaObat'],
                        _this.dataList[index]['biayaTindakan'] = res['data']['biayaTindakan'],
                        _this.dataList[index]['biayaPerawatan'] = res['data']['biayaPerawatan'],
                        _this.dataList[index]['biayaAdministrasi'] = res['data']['biayaAdministrasi'],
                        _this.dataList[index]['biayaKacamata'] = res['data']['biayaKacamata'],
                        _this.dataList[index]['biayaLain'] = res['data']['biayaLain'];
                }
            }
            //console.log(this.dataList);
        });
    };
    AddRestitusiPage.prototype.delete = function (index) {
        this.presentConfirm('del', 'Apakah anda yakin ingin menghapus nota ini ?', index);
    };
    AddRestitusiPage.prototype.presentConfirm = function (type, msg, index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: msg,
            cssClass: 'alert',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                        if (type == 'clean') {
                            if (_this.jenisRestitusiLama == 'kesehatan') {
                                _this.jenisRestitusi = 'kacamata';
                            }
                            else if (_this.jenisRestitusiLama == 'kacamata') {
                                _this.jenisRestitusi = 'kesehatan';
                            }
                        }
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        //console.log('Buy clicked');
                        if (type == 'clean') {
                            _this.dataList = [];
                        }
                        if (type == 'del') {
                            _this.dataList.splice(index, 1);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AddRestitusiPage.prototype.onChangeJenis = function (event) {
        // console.log(event);
        // this.jenisRestitusiLama = this.jenisRestitusi;
        // if (this.dataList.length > 0) {
        //   this.presentConfirm('clean','Mengganti tipe pengajuan akan menghapus nota yang sudah diinput, apakah anda yakin ?','');
        // } 
        this.dataList = [];
    };
    AddRestitusiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-restitusi',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-restitusi/add-restitusi.html"*/'<!--\n  Generated template for the AddRestitusiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light">Pengajuan Restitusi</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/start_date.png" class="icons">\n    </span>\n    <ion-label stacked>Tanggal Pengajuan</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="tglPengajuan"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/jenis_cuti.png" class="icons">\n    </span>\n    <ion-label stacked>Jenis Pengajuan</ion-label>\n    <ion-select [(ngModel)]="jenisRestitusi" placeholder="" (ionChange)="onChangeJenis($event)" >\n      <ion-option value="kacamata">kacamata</ion-option>\n      <ion-option value="kesehatan">kesehatan</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <br>\n\n  <div class="my-card" *ngFor="let data of dataList;let i = index" >        \n\n    <table width="100%">\n      <tr>\n        <td width="45%">\n          <span ion-text text-wrap class="font-small" color="danger">\n            Tanggal Nota\n          </span>\n        </td>\n        <td width="5%">\n          <span ion-text text-wrap class="font-small" color="danger">\n            :\n          </span>\n        </td>\n        <td width="50%">\n          <span ion-text text-wrap class="font-small" color="danger">\n            {{ data[\'tglNota\'] }}\n          </span>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            Nama Pasien\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            :\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            {{ data[\'namaPasien\'] }}\n          </span>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            Status Keluarga\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            :\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            {{ data[\'statusKeluarga\'] }}\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            Rincian Biaya\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n            :\n          </span>\n        </td>\n        <td>\n          <span ion-text text-wrap class="font-small">\n\n          </span>\n        </td>\n      </tr>\n    </table>\n\n    <div class="row">\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Dokter\n        </span><br>       \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaDokter\'] }}\n        </span>\n      </div>\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Obat\n        </span><br>\n       \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaObat\'] }}\n        </span>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Tindakan\n        </span><br>\n        \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaTindakan\'] }}\n        </span>\n      </div>\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Perawatan\n        </span><br>      \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaPerawatan\'] }}\n        </span>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Administrasi\n        </span><br>        \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaAdministrasi\'] }}\n        </span>\n      </div>\n      <div class="col">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Biaya Lain-lain\n        </span><br>       \n        <span ion-text text-wrap class="font-small">\n          {{ data[\'biayaLain\'] }}\n        </span>\n      </div>\n    </div> \n    \n    <div class="row" >\n      <div class="col" style="padding: 0 !important;" >\n        <button ion-button icon-start style="width: 95% !important;" outline (click)="addNota(data, i)" >\n          <ion-icon name="md-create"></ion-icon>\n          Ubah\n        </button>\n      </div>\n        <div class="col" style="padding: 0 !important;" >\n          <button ion-button icon-start style="width: 95% !important;" outline color="danger" (click)="delete(i)" >\n            <ion-icon name="md-close"></ion-icon>\n            Hapus\n          </button>\n        </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer style="padding:5px;">\n  <table width="100%">\n    <tr>\n      <td width="50%" align="center" (click)="addNota(\'\',null)">\n        <button ion-button icon-start style="width: 95% !important;">\n          <ion-icon name="ios-add"></ion-icon>\n          Tambah\n        </button>\n      </td>\n      <td width="50%" align="center">\n        <button ion-button icon-start style="width: 95% !important;" color="secondary" (click)="submit()" [disabled]=\'dataList.length == 0\' >\n          <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n          Submit\n        </button>\n      </td>\n    </tr>\n  </table>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-restitusi/add-restitusi.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AddRestitusiPage);
    return AddRestitusiPage;
}());

//# sourceMappingURL=add-restitusi.js.map

/***/ })

});
//# sourceMappingURL=72.js.map