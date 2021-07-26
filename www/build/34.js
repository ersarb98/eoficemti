webpackJsonp([34],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayslipListPageModule", function() { return PayslipListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payslip_list__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayslipListPageModule = /** @class */ (function () {
    function PayslipListPageModule() {
    }
    PayslipListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payslip_list__["a" /* PayslipListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payslip_list__["a" /* PayslipListPage */]),
            ],
        })
    ], PayslipListPageModule);
    return PayslipListPageModule;
}());

//# sourceMappingURL=payslip-list.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayslipListPage; });
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
 * Generated class for the PayslipListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayslipListPage = /** @class */ (function () {
    function PayslipListPage(navCtrl, navParams, loadingCtrl, alertCtrl, soapService, storage, modalCtrl, currencyPipe, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.currencyPipe = currencyPipe;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.epayslipList = [];
        this.halaman = 1;
        this.fakeUsers = new Array(5);
    }
    PayslipListPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getPayslipList('first', '');
        });
    };
    PayslipListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayslipListPage');
    };
    PayslipListPage.prototype.goToDetail = function (data) {
        this.navCtrl.push('PayslipDetailPage', { periodGroup: data['PERIOD_GROUP'], nipp: this.userdataTPK.data.NIPP });
    };
    PayslipListPage.prototype.doInfinite = function (infiniteScroll) {
        this.halaman++;
        this.getPayslipList('infinite', infiniteScroll);
    };
    PayslipListPage.prototype.doRefresh = function (refresher) {
        this.halaman = 1;
        this.getPayslipList('refresh', refresher);
    };
    PayslipListPage.prototype.getPayslipList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post("http://103.19.80.188/api/index.php?wsdl", 'eoffice_payslip_list', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.userdataTPK['data']['NIPP'],
                page: this.halaman,
                jmlpage: "15",
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
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
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'first' && functionName == '') {
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
    PayslipListPage.prototype.searchPayslip = function () {
        var modal = this.modalCtrl.create('SearchPayslipPage');
        modal.present();
    };
    PayslipListPage.prototype.convertCurrency = function (money, money2) {
        if (money != '' && money2 != '') {
            money = parseInt(money) - parseInt(money2);
            var hasil = this.currencyPipe.transform(money, 'IDR');
            return hasil.substr(3);
        }
        else {
            return '0';
        }
    };
    PayslipListPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    PayslipListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payslip-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/payslip-list/payslip-list.html"*/'<!--\n\n  Generated template for the PayslipListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <span ion-text color="light" class="fw500">E-Payment Slip</span>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="searchPayslip()">\n\n        <ion-icon style="font-size:2.4rem;" name="md-search" color="light"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list class="dining_List" *ngIf="isEmptyObject(epayslipList[0]) && isLoading == false">\n\n    <ion-item tapplable>\n\n      <div style="padding:7px">\n\n        <span text-wrap ion-text class="font">Tidak ada data Payslip</span><br />\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list class="dining_List" *ngIf="!isEmptyObject(epayslipList[0])">\n\n    <ion-card  *ngFor="let epayslip of epayslipList" (click)="goToDetail(epayslip)" class="my-card">\n\n      <ion-item>\n\n        <span item-start>\n\n          <img src="assets/imgs/menu-icon/save-money1.png" class="icons">\n\n        </span>      \n\n          <span text-wrap ion-text class="font-header" color="danger"> <b> {{ epayslip[\'PERIOD_GROUP\'] }} </b> </span><br />\n\n          <span ion-text color="dark" class="font-header">Bulan : {{ epayslip[\'PERIOD_MONTH\'] }}</span>\n\n          <div text-wrap ion-text class="font-mini" style="color:#00AF80;margin-top:9px;font-weight:500">\n\n            <!-- Rp. {{ convertCurrency(epayslip[\'TOTAL_PENERIMAAN\'], epayslip[\'TOTAL_POTONGAN\'] ) }}</div> -->\n\n            {{ epayslip[\'TOTAL PENDAPATAN\'] }}</div>        \n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf=\'isEmptyObject(epayslipList[0]) && isLoading == true\'>\n\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n\n      <ion-item>\n\n        <div class="animate-skeleton-background load-2"></div>\n\n        <div class="animate-skeleton-background load-3"></div>\n\n        <div class="animate-skeleton-background load-1"> </div>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n\n      refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/payslip-list/payslip-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], PayslipListPage);
    return PayslipListPage;
}());

//# sourceMappingURL=payslip-list.js.map

/***/ })

});
//# sourceMappingURL=34.js.map