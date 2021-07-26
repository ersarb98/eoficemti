webpackJsonp([20],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPayslipPageModule", function() { return SearchPayslipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_payslip__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPayslipPageModule = /** @class */ (function () {
    function SearchPayslipPageModule() {
    }
    SearchPayslipPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_payslip__["a" /* SearchPayslipPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_payslip__["a" /* SearchPayslipPage */]),
            ],
        })
    ], SearchPayslipPageModule);
    return SearchPayslipPageModule;
}());

//# sourceMappingURL=search-payslip.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPayslipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(103);
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
 * Generated class for the SearchPayslipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPayslipPage = /** @class */ (function () {
    function SearchPayslipPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, soapService, alertCtrl, datePipe, datePicker, platform, currencyPipe, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.datePicker = datePicker;
        this.platform = platform;
        this.currencyPipe = currencyPipe;
        this.toastCtrl = toastCtrl;
        this.tahun = '';
        this.bulan = '';
        this.currentYear = '';
        this.tahunList = [];
        this.epayslipList = [];
        this.isLoading = false;
        this.halaman = 1;
        this.fakeUsers = new Array(5);
        this.batasAtas = 1;
        this.batasBawah = 20;
        var date = new Date();
        var currentYear = date.getFullYear();
        var lastYear = date.getFullYear() - 1;
        var currentMonth = date.getMonth();
        this.bulan = (currentMonth + 1).toString();
        this.tahun = currentYear;
        for (var i = 0; i < 10; i++) {
            this.tahunList.push(currentYear - i);
        }
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            //this.getSearchList('first','');
        });
    }
    SearchPayslipPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPayslipPage');
    };
    SearchPayslipPage.prototype.doSearch = function () {
        //this.halaman = 1;
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.epayslipList = [];
        this.getSearchList('first', '');
    };
    SearchPayslipPage.prototype.getSearchList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post('http://103.19.80.188/api/index.php?wsdl', 'eoffice_bypass_wso', {
            fStream: JSON.stringify({
                sc_type: 'searchpayslip',
                sc_code: __WEBPACK_IMPORTED_MODULE_6__config__["g" /* sc_code */],
                data: {
                    nipp: this.userdataTPK['data']['NIPP'],
                    bulan: this.bulan,
                    tahun: this.tahun,
                    atas: this.batasAtas,
                    bawah: this.batasBawah
                }
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.epayslipList = [];
                }
                if (responData['data'].length > 0 && !_this.isEmptyObject(responData['data'][0])) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.epayslipList.push(responData['data'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
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
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
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
        });
    };
    SearchPayslipPage.prototype.doInfinite = function (infiniteScroll) {
        // this.halaman++;
        if (this.epayslipList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 10;
            this.getSearchList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
        // this.getSearchList('infinite', infiniteScroll);
    };
    SearchPayslipPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchPayslipPage.prototype.clearField = function () {
        this.tahun = '';
        this.bulan = '';
    };
    SearchPayslipPage.prototype.convertCurrency = function (money1, money2) {
        if (money1 != '' && money2 != '') {
            var hasil = parseInt(money1) - parseInt(money2);
            var final = this.currencyPipe.transform(hasil, 'IDR');
            console.log(final);
            return String(final).substr(3);
        }
        else {
            return '0';
        }
    };
    SearchPayslipPage.prototype.goToDetail = function (data) {
        this.navCtrl.push('PayslipDetailPage', { periodGroup: data['PERIOD_GROUP'], nipp: this.userdataTPK.data.NIPP });
    };
    SearchPayslipPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    SearchPayslipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-payslip',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-payslip/search-payslip.html"*/'<!--\n\n  Generated template for the SearchCutiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title><span style="color:#FFF">Search Payslip</span></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="divs">\n\n    <ion-list>\n\n      <ion-item no-lines style="padding-left:8px !important">\n\n        <ion-select [(ngModel)]="tahun" placeholder="Tahun Payslip">\n\n          <ion-option *ngFor="let tahun of tahunList" value="{{tahun}}">{{tahun}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines style="padding-left:8px !important">\n\n        <ion-select [(ngModel)]="bulan" placeholder="Pilih Bulan">\n\n          <!-- <ion-option *ngFor="let m of bulanList" value="{{m[\'bulan\']}}_{{m[\'tahun\']}}">{{ convertMonths2(m[\'bulan\']) }} {{m[\'tahun\']}}</ion-option>                    </ion-select> -->\n\n          <ion-option value="1">Januari</ion-option>\n\n          <ion-option value="2">Februari</ion-option>\n\n          <ion-option value="3">Maret</ion-option>\n\n          <ion-option value="4">April</ion-option>\n\n          <ion-option value="5">Mei</ion-option>\n\n          <ion-option value="6">Juni</ion-option>\n\n          <ion-option value="7">Juli</ion-option>\n\n          <ion-option value="8">Agustus</ion-option>\n\n          <ion-option value="9">September</ion-option>\n\n          <ion-option value="10">Oktober</ion-option>\n\n          <ion-option value="11">November</ion-option>\n\n          <ion-option value="12">Desember</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div class="row">\n\n      <div class="col">\n\n        <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="clearField()">\n\n          <ion-icon name="md-close"></ion-icon>\n\n          clear\n\n        </button>\n\n      </div>\n\n      <div class="col">\n\n        <button ion-button icon-start full color="primary" style="border-radius: 5px;" (click)="doSearch()"\n\n          [disabled]="tahun == \'\' && bulan== \'\' ? true : false">\n\n          <ion-icon name="ios-search"></ion-icon>\n\n          Cari\n\n        </button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <ion-list class="dining_List" *ngIf="isEmptyObject(epayslipList[0]) && isLoading == false">\n\n    <ion-item tapplable>\n\n      <div style="padding:7px">\n\n        <span text-wrap ion-text class="font">Tidak ada data Payslip</span><br />\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list class="dining_List" *ngIf="!isEmptyObject(epayslipList[0])">\n\n    <ion-card *ngFor="let epayslip of epayslipList" (click)="goToDetail(epayslip)" class="my-card">\n\n      <ion-item>\n\n        <span item-start>\n\n          <img src="assets/imgs/menu-icon/save-money1.png" class="icons">\n\n        </span>\n\n        <span text-wrap ion-text class="font-header" color="danger"> <b> {{ epayslip[\'PERIOD_GROUP\'] }} </b>\n\n        </span><br />\n\n        <span ion-text color="dark" class="font-header">Bulan : {{ epayslip[\'PERIOD_MONTH\'] }}</span>\n\n        <div text-wrap ion-text class="font2" style="color:#00AF80;margin-top:9px;font-weight:500">\n\n          Rp. {{ convertCurrency(epayslip[\'TOTAL_PENERIMAAN\'], epayslip[\'TOTAL_POTONGAN\']) }}</div> \n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf=\'isEmptyObject(epayslipList[0]) && isLoading == true\'>\n\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n\n      <ion-item>\n\n        <div class="animate-skeleton-background load-2"></div>\n\n        <div class="animate-skeleton-background load-3"></div>\n\n        <div class="animate-skeleton-background load-1"> </div>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-payslip/search-payslip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SearchPayslipPage);
    return SearchPayslipPage;
}());

//# sourceMappingURL=search-payslip.js.map

/***/ })

});
//# sourceMappingURL=20.js.map