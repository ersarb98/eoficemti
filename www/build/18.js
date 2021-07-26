webpackJsonp([18],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSppdPageModule", function() { return SearchSppdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_sppd__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchSppdPageModule = /** @class */ (function () {
    function SearchSppdPageModule() {
    }
    SearchSppdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_sppd__["a" /* SearchSppdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_sppd__["a" /* SearchSppdPage */]),
            ],
        })
    ], SearchSppdPageModule);
    return SearchSppdPageModule;
}());

//# sourceMappingURL=search-sppd.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchSppdPage; });
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
 * Generated class for the SearchSppdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchSppdPage = /** @class */ (function () {
    function SearchSppdPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl, viewCtrl, datePicker, datePipe) {
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
        this.isLoading = false;
        this.sppdList = [];
        this.fakeUsers = new Array(5);
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.noPengajuan = '';
        this.perihal = '';
        this.penanggungJawab = '';
        this.tglPengajuan = '';
        this.startDate = '';
        this.endDate = '';
        this.kotaTujuan = '';
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    SearchSppdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchSppdPage');
    };
    SearchSppdPage.prototype.showDatePicker = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (type == 1) {
                _this.startDate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else if (type == 2) {
                _this.endDate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else if (type == 3) {
                _this.tglPengajuan = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    SearchSppdPage.prototype.getSppdList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_sppd_list', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                id_user: this.userdataTPK['data']['IDUSER'],
                // id_user:,
                no_pengajuan: this.noPengajuan,
                perihal: this.perihal,
                penanggung_jawab: this.penanggungJawab,
                tgl_pengajuan: this.tglPengajuan,
                start_date: this.startDate,
                end_date: this.endDate,
                kota_tujuan: this.kotaTujuan,
                atas: this.batasAtas,
                bawah: this.batasBawah
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.sppdList = [];
                }
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.sppdList.push(responData['data'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data SPPD, silahkan coba kembali.',
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
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan data SPPD, periksa koneksi internet anda.',
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
    SearchSppdPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.sppdList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 10;
            this.getSppdList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    SearchSppdPage.prototype.doSearch = function () {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.sppdList = [];
        this.getSppdList('first', '');
    };
    SearchSppdPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchSppdPage.prototype.clearField = function () {
        this.noPengajuan = '';
        this.perihal = '';
        this.penanggungJawab = '';
        this.tglPengajuan = '';
        this.startDate = '';
        this.endDate = '';
        this.kotaTujuan = '';
    };
    SearchSppdPage.prototype.goToDetail = function (message) {
        this.navCtrl.push("InboxDetailPage", {
            from_modul: 'sppd',
            messageData: message,
            nipp: this.userdataTPK['data']['NIPP'],
            userdataTPK: this.userdataTPK
        });
    };
    SearchSppdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-sppd',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-sppd/search-sppd.html"*/'<!--\n  Generated template for the SearchSppdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span style="color:#FFF">Search SPPD</span></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/search-inbox/no_surat.png" class="icons">\n    </span>\n    <ion-label stacked>No. Pengajuan</ion-label>\n    <ion-input type="text" [(ngModel)]="noPengajuan"></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/search-inbox/perihal.png" class="icons">\n    </span>\n    <ion-label stacked>Perihal</ion-label>\n    <ion-input type="text" [(ngModel)]="perihal"></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/search-inbox/pengirim.png" class="icons">\n    </span>\n    <ion-label stacked>Penanggung Jawab</ion-label>\n    <ion-input type="text" [(ngModel)]="penanggungJawab"></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/jumHari.png" class="icons">\n    </span>\n    <ion-label stacked>Tanggal Pengajuan</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="tglPengajuan" (ionFocus)="showDatePicker(3)"\n      (click)="showDatePicker(1)"></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/logo/start_date.png" class="icons">\n    </span>\n    <ion-label stacked>Tanggal Mulai</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="startDate" (ionFocus)="showDatePicker(1)"\n      (click)="showDatePicker(1)" placeholder=""></ion-input>\n  </ion-item>\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/logo/end_date.png" class="icons">\n    </span>\n    <ion-label stacked>Tanggal Selesai</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="endDate" (ionFocus)="showDatePicker(2)"\n      (click)="showDatePicker(2)" placeholder=""></ion-input>\n  </ion-item>\n\n  <ion-item no-padding>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/sppd.png" class="icons">\n    </span>\n    <ion-label stacked>Kota Tujuan</ion-label>\n    <ion-input type="text" [readonly]="true" [(ngModel)]="kotaTujuan" (ionFocus)="showDatePicker(3)"\n      (click)="showDatePicker(1)"></ion-input>\n  </ion-item>\n\n  <div class="row">\n    <div class="col">\n      <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="clearField()" margin-top>\n        <ion-icon name="md-close"></ion-icon>\n        clear\n      </button>\n    </div>\n    <div class="col">\n      <button ion-button icon-start full color="primary" style="border-radius: 5px;" margin-top (click)="doSearch()"\n        [disabled]="noPengajuan == \'\' && perihal == \'\' && penanggungJawab == \'\' && tglPengajuan == \'\' && startDate == \'\' && endDate == \'\' && kotaTujuan == \'\' ? true : false">\n        <ion-icon name="md-checkmark"></ion-icon>\n        Cari\n      </button>\n    </div>\n  </div>\n\n  <ion-list class="dining_List" *ngIf="sppdList.length == 0  && isLoading == false">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data SPPD.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="sppdList.length != 0 && isLoading == false">\n    <ion-card *ngFor="let sppd of sppdList" class="my-card" (click)="goToDetail(sppd)">\n      <ion-item>\n        <span item-start>\n          <img src="assets/imgs/menu-icon/sppd.png" class="icons">\n        </span>\n        <div>\n          <span ion-text text-wrap class="font3" color="danger" *ngIf="sppd[\'TEMPAT_SPPD\'] == \'\' || sppd[\'TEMPAT_SPPD\'] == null"><b> - </b></span>\n          <span ion-text text-wrap class="font3" color="danger"><b>{{ sppd[\'TEMPAT_SPPD\'] }}</b></span><br />\n        </div>\n\n        <div>\n          <span ion-text text-wrap class="font3" color="danger" *ngIf="sppd[\'PERIHAL\'] == \'\' || sppd[\'PERIHAL\'] == null"><b> - </b></span>\n          <span ion-text text-wrap class="font2">{{ sppd[\'PERIHAL\'] }}</span><br>\n        </div>\n        \n        <span ion-text text-wrap class="font" color="color4" >\n          {{ sppd[\'TGL_MULAI\'] }} <span ion-text text-wrap color="color4">s/d</span>\n          {{ sppd[\'TGL_AKHIR\'] }}\n        </span> <br>\n        <span ion-text text-wrap style="font-size: 1.2rem;" color="primary"><b>{{ sppd[\'KETERANGAN\'] }}</b></span>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'sppdList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-sppd/search-sppd.html"*/,
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
    ], SearchSppdPage);
    return SearchSppdPage;
}());

//# sourceMappingURL=search-sppd.js.map

/***/ })

});
//# sourceMappingURL=18.js.map