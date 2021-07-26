webpackJsonp([35],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayslipDetailPageModule", function() { return PayslipDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payslip_detail__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayslipDetailPageModule = /** @class */ (function () {
    function PayslipDetailPageModule() {
    }
    PayslipDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payslip_detail__["a" /* PayslipDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payslip_detail__["a" /* PayslipDetailPage */]),
            ],
        })
    ], PayslipDetailPageModule);
    return PayslipDetailPageModule;
}());

//# sourceMappingURL=payslip-detail.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayslipDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
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
 * Generated class for the PayslipDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayslipDetailPage = /** @class */ (function () {
    function PayslipDetailPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.periodGroup = navParams.get('periodGroup');
        this.nipp = navParams.get('nipp');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK);
            _this.getDetail();
        });
    }
    PayslipDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayslipDetailPage');
    };
    PayslipDetailPage.prototype.getDetail = function () {
        var _this = this;
        this.soapService
            .post("http://103.19.80.188/api/index.php?wsdl", 'eoffice_payslip_detail', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.nipp,
                period_group: this.periodGroup
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.payslipDetail = responData;
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan detail payslip, silahkan coba kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan detail payslip, periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
        });
    };
    PayslipDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payslip-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/payslip-detail/payslip-detail.html"*/'<!--\n  Generated template for the PayslipDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Detail E-Payment Slip</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\'isLoading == false && payslipDetail != null\'>\n    <ion-card class="my-card">\n      <ion-item>\n        <span ion-text text-wrap class="font-small">\n          <b>{{ payslipDetail[\'data\'][\'NAMA\'] }}</b>\n        </span> <br>\n        <span ion-text text-wrap class="font-mini">\n          {{ payslipDetail[\'data\'][\'NIPP\'] }}\n        </span>\n        <div class="garis">\n        </div>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Jabatan\n        </span> <br>\n        <!-- <span ion-text text-wrap class="font-small">\n          {{ payslipDetail[\'data\'][\'JABATAN\'] }}\n        </span> <br> -->\n        <span ion-text text-wrap class="font-small">\n          {{ userdataTPK[\'data\'][\'NAMAJABATAN\'] }}\n        </span> <br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Unit\n        </span> <br>\n        <!-- <span ion-text text-wrap class="font-small">\n          {{ payslipDetail[\'data\'][\'UNIT\'] }}\n        </span> <br> -->\n        <span ion-text text-wrap class="font-small">\n          {{ userdataTPK[\'data\'][\'DIVISI\'] }}\n        </span> <br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          GRADE\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n          {{ payslipDetail[\'data\'][\'GRADE\'] }}\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Bulan\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n          {{ payslipDetail[\'data\'][\'BULAN\'] }}\n        </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <div class="header-text">\n          <span ion-text text-wrap>\n            <img src="assets/imgs/menu-icon/money-bag2.png" class="icons">\n          </span>\n          <span ion-text text-wrap class="font-small" style="color:#090;">\n            <b>List Penghasilan</b>\n          </span>\n        </div>\n\n        <div class="garis"></div>\n\n        <div *ngIf="payslipDetail[\'data\'][\'LIST_PENGHASILAN\'].length == 0">\n          <span ion-text text-wrap class="font-small" color="color4">\n            -\n          </span>\n        </div>\n\n        <div *ngFor="let penghasilan of payslipDetail[\'data\'][\'LIST_PENGHASILAN\']">\n          <span ion-text text-wrap class="font-small list-span" color="color4">\n            {{ penghasilan[\'NAMA_PENGHASILAN\'] }}\n          </span>\n          <span style="float:right;" ion-text text-wrap class="font-small">\n            {{ penghasilan[\'AMOUNT_PENGHASILAN\'] }}\n          </span>\n          <br>\n        </div>\n\n        <br>\n\n        <span ion-text text-wrap class="font-small" style="float:left;">\n          <b>Total Penghasilan</b>\n        </span>\n        <span ion-text text-wrap class="font-small" style="float:right;">\n          <b>{{ payslipDetail[\'data\'][\'TOTAL_PENGHASILAN\'] }}</b>\n        </span> <br>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <div class="header-text">\n          <span ion-text text-wrap>\n            <img src="assets/imgs/menu-icon/money-bag1.png" class="icons">\n          </span>\n          <span ion-text text-wrap class="font-small" color="color6">\n            <b>List Potongan</b>\n          </span>\n        </div>\n\n        <div class="garis"></div>\n\n        <div *ngIf="payslipDetail[\'data\'][\'LIST_POTONGAN\'].length == 0">\n          <span ion-text text-wrap class="font-small" color="color4">\n            -\n          </span>\n        </div>\n\n        <div *ngFor="let penghasilan of payslipDetail[\'data\'][\'LIST_POTONGAN\']">\n          <span ion-text text-wrap class="font-small list-span" color="color4">\n            {{ penghasilan[\'NAMA_PENGHASILAN\'] }}\n          </span>\n          <span style="float:right;" ion-text text-wrap class="font-small">\n            {{ penghasilan[\'AMOUNT_PENGHASILAN\'] }}\n          </span>\n          <br>\n        </div>\n        <br>\n\n        <span ion-text text-wrap class="font-small" style="float:left;">\n          <b>Total Potongan</b>\n        </span>\n        <span ion-text text-wrap class="font-small" style="float:right;">\n          <b>{{ payslipDetail[\'data\'][\'TOTAL_POTONGAN\'] }}</b>\n        </span> <br>\n      </ion-item>\n    </ion-card>\n\n    <ion-card style="box-shadow: none !important;" >\n      <ion-item no-lines class="header-card">\n        <span ion-text text-wrap class="font-small" color="light" style="float:left;">\n          <b>TOTAL BERSIH</b>\n        </span>\n        <span ion-text text-wrap class="font-small" color="light" style="float:right;">\n          <b>{{ payslipDetail[\'data\'][\'TOTAL_BERSIH\'] }}</b>\n        </span>\n      </ion-item>\n    </ion-card>\n  </div>\n\n\n  <div *ngIf=\'isLoading == true && payslipDetail == null\'>\n    <ion-card class="my-card">\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="garis"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n        <div class="animate-skeleton-background load-3"></div>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="garis"></div>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div><br>\n        <div class="animate-skeleton-background load-1"> </div>\n        <div class="animate-skeleton-background load-3"></div>\n      </ion-item>\n    </ion-card>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/payslip-detail/payslip-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], PayslipDetailPage);
    return PayslipDetailPage;
}());

//# sourceMappingURL=payslip-detail.js.map

/***/ })

});
//# sourceMappingURL=35.js.map