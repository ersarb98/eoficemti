webpackJsonp([16],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUangMukaPageModule", function() { return SearchUangMukaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_uang_muka__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchUangMukaPageModule = /** @class */ (function () {
    function SearchUangMukaPageModule() {
    }
    SearchUangMukaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_uang_muka__["a" /* SearchUangMukaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_uang_muka__["a" /* SearchUangMukaPage */]),
            ],
        })
    ], SearchUangMukaPageModule);
    return SearchUangMukaPageModule;
}());

//# sourceMappingURL=search-uang-muka.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUangMukaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(21);
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
 * Generated class for the SearchUangMukaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchUangMukaPage = /** @class */ (function () {
    function SearchUangMukaPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl, viewCtrl, datePicker, datePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.datePicker = datePicker;
        this.datePipe = datePipe;
        this.isLoading = true;
        this.uangMukaList = [];
        this.fakeUsers = new Array(5);
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    SearchUangMukaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchUangMukaPage');
    };
    SearchUangMukaPage.prototype.showDatePicker = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (type == 1) {
                // this.startDate = this.datePipe.transform(date, 'dd-MM-yyyy'); 
            }
            else if (type == 2) {
                // this.endDate = this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else if (type == 3) {
                _this.tglPengajuan = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    SearchUangMukaPage.prototype.getUangMukaList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_uang_muka_list', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                id_user: this.userdataTPK['data']['IDUSER'],
                no_surat: this.noSurat,
                perihal: this.perihal,
                no_jkk: this.noJkk,
                no_pertanggungjawaban: this.noPertanggungjawaban,
                tgl_pengajuan: this.tglPengajuan,
                atas: this.batasAtas,
                bawah: this.batasBawah
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.uangMukaList = [];
                }
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.uangMukaList.push(responData['data'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data cuti, silahkan coba kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            if (type == 'first' && functionName == '') {
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan data cuti, periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'first' && functionName == '') {
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            _this.isLoading = false;
        });
    };
    SearchUangMukaPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.uangMukaList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 10;
            this.getUangMukaList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    SearchUangMukaPage.prototype.doSearch = function () {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.uangMukaList = [];
        this.getUangMukaList('first', '');
    };
    SearchUangMukaPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchUangMukaPage.prototype.clearField = function () {
        this.noSurat = '';
        this.perihal = '';
        this.noJkk = '';
        this.noPertanggungjawaban = '';
        this.tglPengajuan = '';
    };
    SearchUangMukaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-uang-muka',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-uang-muka/search-uang-muka.html"*/'<!--\n  Generated template for the SearchUangMukaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span style="color:#FFF">Search Uang Muka</span></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/search-inbox/no_surat.png" class="icons">\n    </span>\n    <ion-label stacked>No. Pengajuan UM</ion-label>\n    <ion-input type="text" [(ngModel)]="noPengajuan"></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/search-inbox/perihal.png" class="icons">\n    </span>\n    <ion-label stacked>Perihal</ion-label>\n    <ion-input type="text" [(ngModel)]="perihal"></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/jumHari.png" class="icons">\n    </span>\n    <ion-label stacked>Tanggal Pengajuan UM</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="tglPengajuan" (ionFocus)="showDatePicker(3)"\n      (click)="showDatePicker(1)"></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/jumHari.png" class="icons">\n    </span>\n    <ion-label stacked>No. JKK</ion-label>\n    <ion-input type="text" [(ngModel)]="noJkk"\n      ></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/jumHari.png" class="icons">\n    </span>\n    <ion-label stacked>No. Pertanggungjawaban UM</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="noPertanggungjawaban"></ion-input>\n  </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-uang-muka/search-uang-muka.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* DatePipe */]])
    ], SearchUangMukaPage);
    return SearchUangMukaPage;
}());

//# sourceMappingURL=search-uang-muka.js.map

/***/ })

});
//# sourceMappingURL=16.js.map