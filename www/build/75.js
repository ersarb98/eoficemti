webpackJsonp([75],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotaRestitusiPageModule", function() { return AddNotaRestitusiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_nota_restitusi__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNotaRestitusiPageModule = /** @class */ (function () {
    function AddNotaRestitusiPageModule() {
    }
    AddNotaRestitusiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_nota_restitusi__["a" /* AddNotaRestitusiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_nota_restitusi__["a" /* AddNotaRestitusiPage */]),
            ],
        })
    ], AddNotaRestitusiPageModule);
    return AddNotaRestitusiPageModule;
}());

//# sourceMappingURL=add-nota-restitusi.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotaRestitusiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(52);
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
 * Generated class for the AddNotaRestitusiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNotaRestitusiPage = /** @class */ (function () {
    function AddNotaRestitusiPage(navCtrl, navParams, viewCtrl, datePicker, platform, datePipe, toastCtrl, soapService, storage, loadingCtrl, oneSignal, alertCtrl, modalCtrl) {
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
        this.dataPasien = navParams.get('dataPasien');
        if (this.dataPasien != '') {
            this.tglNota = this.dataPasien['tglNota'];
            this.namaPasien = this.dataPasien['namaPasien'];
            this.statusKeluarga = this.dataPasien['statusKeluarga'];
            this.biayaDokter = this.dataPasien['biayaDokter'];
            this.biayaObat = this.dataPasien['biayaObat'];
            this.biayaTindakan = this.dataPasien['biayaTindakan'];
            this.biayaPerawatan = this.dataPasien['biayaPerawatan'];
            this.biayaAdministrasi = this.dataPasien['biayaAdministrasi'];
            this.biayaKacamata = this.dataPasien['biayaKacamata'];
            this.biayaLain = this.dataPasien['biayaLain'];
        }
    }
    AddNotaRestitusiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNotaRestitusiPage');
    };
    AddNotaRestitusiPage.prototype.showDatePicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            _this.tglNota = _this.datePipe.transform(date, 'dd/MM/yyyy');
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    AddNotaRestitusiPage.prototype.submit = function () {
        var data = {
            tglNota: this.tglNota,
            namaPasien: this.namaPasien,
            statusKeluarga: this.statusKeluarga,
            biayaDokter: this.biayaDokter,
            biayaObat: this.biayaObat,
            biayaTindakan: this.biayaTindakan,
            biayaPerawatan: this.biayaPerawatan,
            biayaAdministrasi: this.biayaAdministrasi,
            biayaKacamata: this.biayaKacamata,
            biayaLain: this.biayaLain
        };
        this.viewCtrl.dismiss({
            'data': data
        });
    };
    AddNotaRestitusiPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({
            'data': null
        });
    };
    AddNotaRestitusiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-nota-restitusi',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-nota-restitusi/add-nota-restitusi.html"*/'<!--\n  Generated template for the AddNotaRestitusiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>addNotaRestitusi</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>      \n    <span item-left>\n      <img src="assets/imgs/menu-icon/start_date.png" class="icons">\n    </span>\n    <ion-label stacked>Tanggal nota</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="tglNota" (ionFocus)="showDatePicker()" (click)="showDatePicker()"></ion-input>\n  </ion-item>\n  \n  <ion-item>  \n    <span item-left>\n      <img src="assets/imgs/logo/pasien.png" class="icons">\n    </span>   \n    <ion-label stacked>Nama pasien</ion-label>\n    <ion-input type="text" [(ngModel)]="namaPasien"></ion-input>\n  </ion-item>\n  \n  <ion-item>     \n    <span item-left>\n      <img src="assets/imgs/logo/status_keluarga.png" class="icons">\n    </span>   \n    <ion-label stacked>Status keluarga</ion-label>\n    <ion-input type="text" [(ngModel)]="statusKeluarga"></ion-input>\n  </ion-item>\n\n  <ion-item>     \n    <span item-left>\n      <img src="assets/imgs/logo/biaya_dokter.png" class="icons">\n    </span>\n    <ion-label stacked>Biaya dokter (Rp.)</ion-label>\n    <ion-input type="number" [(ngModel)]="biayaDokter"></ion-input>\n  </ion-item>\n\n  <ion-item>     \n    <span item-left>\n      <img src="assets/imgs/logo/biaya_obat.png" class="icons">\n    </span>\n    <ion-label stacked>Biaya obat (Rp.)</ion-label>\n    <ion-input type="number" [(ngModel)]="biayaObat"></ion-input>\n  </ion-item>  \n\n  <ion-item>     \n    <span item-left>\n      <img src="assets/imgs/logo/biaya_tindakan.png" class="icons">\n    </span>\n    <ion-label stacked>Biaya tindakan (Rp.)</ion-label>\n    <ion-input type="number" [(ngModel)]="biayaTindakan"></ion-input>\n  </ion-item>  \n\n  <ion-item>     \n    <span item-left>\n      <img src="assets/imgs/logo/biaya_perawatan.png" class="icons">\n    </span>\n    <ion-label stacked>Biaya perawatan (Rp.)</ion-label>\n    <ion-input type="number" [(ngModel)]="biayaPerawatan"></ion-input>\n  </ion-item>  \n\n  <ion-item>     \n    <span item-left>\n      <img src="assets/imgs/menu-icon/uang-muka.png" class="icons">\n    </span>\n    <ion-label stacked>Biaya administrasi (Rp.)</ion-label>\n    <ion-input type="number" [(ngModel)]="biayaAdministrasi"></ion-input>\n  </ion-item>  \n\n  <ion-item>     \n    <span item-left>\n      <img src="assets/imgs/logo/biaya_kacamata.png" class="icons">\n    </span>\n    <ion-label stacked>Biaya kacamata (Rp.)</ion-label>\n    <ion-input type="number" [(ngModel)]="biayaKacamata"></ion-input>\n  </ion-item> \n  \n  <ion-item>     \n    <span item-left>\n      <img src="assets/imgs/logo/document-icon.png" class="icons">\n    </span>\n    <ion-label stacked>Biaya lain-lain (Rp.)</ion-label>\n    <ion-input type="number" [(ngModel)]="biayaLain"></ion-input>\n  </ion-item>  \n  <br>\n  <button ion-button icon-start style="width: 100% !important;" (click)="submit()" >\n    <ion-icon name="md-checkmark"></ion-icon>\n    Submit\n  </button>\n  <br>\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-nota-restitusi/add-nota-restitusi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AddNotaRestitusiPage);
    return AddNotaRestitusiPage;
}());

//# sourceMappingURL=add-nota-restitusi.js.map

/***/ })

});
//# sourceMappingURL=75.js.map