webpackJsonp([61],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalBawahanListPageModule", function() { return EvalBawahanListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eval_bawahan_list__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EvalBawahanListPageModule = /** @class */ (function () {
    function EvalBawahanListPageModule() {
    }
    EvalBawahanListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__eval_bawahan_list__["a" /* EvalBawahanListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__eval_bawahan_list__["a" /* EvalBawahanListPage */]),
            ],
        })
    ], EvalBawahanListPageModule);
    return EvalBawahanListPageModule;
}());

//# sourceMappingURL=eval-bawahan-list.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvalBawahanListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__p2b_detail_p2b_detail__ = __webpack_require__(208);
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
 * Generated class for the EvalBawahanListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvalBawahanListPage = /** @class */ (function () {
    function EvalBawahanListPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, datepipe, platform, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.datepipe = datepipe;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.evalBawahanList = [];
        this.fakeUsers = new Array(5);
        this.isLoading = true;
        this.platform.registerBackButtonAction(function () {
            // console.log('click');
            navCtrl.pop();
        });
        this.p2buser = navParams.get('p2buser');
    }
    EvalBawahanListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.year = this.datepipe.transform(new Date(), 'yyyy');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getList();
        });
    };
    EvalBawahanListPage.prototype.getList = function () {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_list_eval_bawah', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_jab: this.p2buser['P2B_ID_JAB_USER'],
                year: this.year
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                // console.log(responData);
                _this.evalBawahanList = [];
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.evalBawahanList.push(responData['data'][i]);
                    }
                }
                // console.log(this.evalBawahanList);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
        });
    };
    EvalBawahanListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EvalBawahanListPage');
    };
    EvalBawahanListPage.prototype.goToDetail = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__p2b_detail_p2b_detail__["a" /* P2bDetailPage */], {
            userdataTPK: this.userdataTPK,
            p2bdata: data,
            p2buser: this.p2buser
        });
    };
    EvalBawahanListPage.prototype.convertMonths = function (month) {
        switch (month) {
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
    EvalBawahanListPage.prototype.openTestPage = function (page) {
        this.navCtrl.push(page);
    };
    EvalBawahanListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-eval-bawahan-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/eval-bawahan-list/eval-bawahan-list.html"*/'<!--\n  Generated template for the EvalBawahanListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!isSearch">\n      <span ion-text color="light" class="fw500">List Evaluasi Bawahan</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n  <ion-list class="dining_List" *ngIf="evalBawahanList.length == 0 && isLoading == false">\n    <ion-card class="my-card">\n      <ion-item tapplable>\n        <span ion-text class="font2">Tidak ada Data P2B</span>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="evalBawahanList.length != 0">\n    <ion-card *ngFor="let evalBawahan of evalBawahanList" (click)="goToDetail(evalBawahan)" class="my-card">\n      <ion-item tapplable>\n        <span ion-text text-wrap class="font bold">{{ evalBawahan[\'Nama\'] }}</span> <br>\n        <span ion-text text-wrap class="font">{{ convertMonths(evalBawahan[\'Bulan\']) }}, {{ evalBawahan[\'Tahun\'] }}</span> <br>\n        <span ion-text text-wrap class="font2" color="orange">{{  evalBawahan[\'Tanggal\'] }}</span> <br>\n        <span ion-text text-wrap class="font2">Skor : </span>\n        <span ion-text text-wrap class="font2">{{ evalBawahan[\'Nilai\'] }}</span>\n        <span ion-text text-wrap class="font2" *ngIf="evalBawahan[\'Nilai\'] == \'\'"> - </span>\n        <ion-badge *ngIf="evalBawahan[\'Status\'] == \'EVALUATED SAVED\'" color="secondary" item-end>Evaluated Saved\n        </ion-badge>\n        <ion-badge *ngIf="evalBawahan[\'Status\'] == \'EVALUATED\'" color="secondary" item-end>Evaluated</ion-badge>\n        <ion-badge *ngIf="evalBawahan[\'Status\'] == \'FINISHED\'" color="secondary" item-end>Finished</ion-badge>\n        <ion-badge *ngIf="evalBawahan[\'Status\'] == \'POSTED\'" color="primary" item-end>Posted</ion-badge>\n        <ion-badge *ngIf="evalBawahan[\'Status\'] == \'SAVED\'" color="primary" item-end>Saved</ion-badge>\n        <ion-badge *ngIf="evalBawahan[\'Status\'] == \'KEBERATAN\'" color="orange" item-end>Keberatan</ion-badge>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'evalBawahanList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <h2 class="animate-skeleton-background"></h2>\n        <h3 class="animate-skeleton-background"></h3>\n        <p class="animate-skeleton-background"> </p>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/eval-bawahan-list/eval-bawahan-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], EvalBawahanListPage);
    return EvalBawahanListPage;
}());

//# sourceMappingURL=eval-bawahan-list.js.map

/***/ })

});
//# sourceMappingURL=61.js.map