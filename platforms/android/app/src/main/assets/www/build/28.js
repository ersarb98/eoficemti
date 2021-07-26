webpackJsonp([28],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RencanaKerjaBawahanListPageModule", function() { return RencanaKerjaBawahanListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rencana_kerja_bawahan_list__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RencanaKerjaBawahanListPageModule = /** @class */ (function () {
    function RencanaKerjaBawahanListPageModule() {
    }
    RencanaKerjaBawahanListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rencana_kerja_bawahan_list__["a" /* RencanaKerjaBawahanListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rencana_kerja_bawahan_list__["a" /* RencanaKerjaBawahanListPage */]),
            ],
        })
    ], RencanaKerjaBawahanListPageModule);
    return RencanaKerjaBawahanListPageModule;
}());

//# sourceMappingURL=rencana-kerja-bawahan-list.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RencanaKerjaBawahanListPage; });
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
 * Generated class for the RencanaKerjaBawahanListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RencanaKerjaBawahanListPage = /** @class */ (function () {
    function RencanaKerjaBawahanListPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, datepipe, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.datepipe = datepipe;
        this.toastCtrl = toastCtrl;
        this.rencanaKerjaList = [];
        this.fakeUsers = new Array(5);
        this.isLoading = true;
    }
    RencanaKerjaBawahanListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RencanaKerjaBawahanListPage');
    };
    RencanaKerjaBawahanListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon Tunggu...",
        //   cssClass: 'transparent',
        //   dismissOnPageChange: true
        // });
        // this.loading.present();      
        this.year = this.datepipe.transform(new Date(), 'yyyy');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getP2bUser();
        });
    };
    RencanaKerjaBawahanListPage.prototype.getList = function () {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_rencana_bawahan', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_jab: this.p2buser['P2B_ID_JAB_USER']
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.rencanaKerjaList = [];
                if (responData['data']['Data List Evaluasi'].length > 0) {
                    for (var i = 0; i < responData['data']['Data List Evaluasi'].length; i++) {
                        _this.rencanaKerjaList.push(responData['data']['Data List Evaluasi'][i]);
                    }
                }
                if (responData['data']['Data List Keberatan'].length > 0) {
                    for (var i = 0; i < responData['data']['Data List Keberatan'].length; i++) {
                        _this.rencanaKerjaList.push(responData['data']['Data List Keberatan'][i]);
                    }
                }
                if (responData['data']['Data List Rencana'].length > 0) {
                    for (var i = 0; i < responData['data']['Data List Rencana'].length; i++) {
                        _this.rencanaKerjaList.push(responData['data']['Data List Rencana'][i]);
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
            //this.loading.dismiss();           
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            // this.loading.dismiss();
            _this.isLoading = false;
        });
    };
    RencanaKerjaBawahanListPage.prototype.goToDetail = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__p2b_detail_p2b_detail__["a" /* P2bDetailPage */], {
            userdataTPK: this.userdataTPK,
            p2bdata: data,
            p2buser: this.p2buser,
            type: 'koreksi'
        });
    };
    RencanaKerjaBawahanListPage.prototype.getP2bUser = function () {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_user', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.userdataTPK.data.NIPP
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.p2buser = responData['data'];
                _this.getList();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: responData['rcmsg'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                // this.loading.dismiss();
                _this.isLoading = false;
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
            // this.loading.dismiss();
        });
    };
    RencanaKerjaBawahanListPage.prototype.convertMonths = function (month) {
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
    RencanaKerjaBawahanListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rencana-kerja-bawahan-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/rencana-kerja-bawahan-list/rencana-kerja-bawahan-list.html"*/'<!--\n  Generated template for the EvalBawahanListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!isSearch">\n      <span ion-text color="light" class="fw500">Rencana Kerja Bawahan</span>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list class="dining_List" *ngIf="rencanaKerjaList.length == 0 && isLoading == false">\n    <ion-card class="my-card">\n      <ion-item tapplable>\n        <span ion-text class="font2">Tidak ada Data P2B</span>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="rencanaKerjaList.length != 0 && isLoading == false">\n    <ion-card *ngFor="let rencanaKerja of rencanaKerjaList" (click)="goToDetail(rencanaKerja)" class="my-card">\n      <ion-item tapplable>\n        <span ion-text text-wrap class="font bold">{{ rencanaKerja[\'Nama\'] }}</span> <br>\n        <span ion-text text-wrap class="font">{{ rencanaKerja[\'Bulan\'] }}, {{ rencanaKerja[\'Tahun\'] }}</span> <br>\n        <span ion-text text-wrap class="font2" color="orange">{{ rencanaKerja[\'Tanggal Entry\'] }}</span>\n        <ion-badge *ngIf="rencanaKerja[\'Status\'] == \'EVALUATED SAVED\'" color="secondary" item-end>Evaluated Saved\n        </ion-badge>\n        <ion-badge *ngIf="rencanaKerja[\'Status\'] == \'EVALUATED\'" color="secondary" item-end>Evaluated</ion-badge>\n        <ion-badge *ngIf="rencanaKerja[\'Status\'] == \'FINISHED\'" color="secondary" item-end>Finished</ion-badge>\n        <ion-badge *ngIf="rencanaKerja[\'Status\'] == \'POSTED\'" color="primary" item-end>Posted</ion-badge>\n        <ion-badge *ngIf="rencanaKerja[\'Status\'] == \'SAVED\'" color="primary" item-end>Saved</ion-badge>\n        <ion-badge *ngIf="rencanaKerja[\'Status\'] == \'KEBERATAN\'" color="orange" item-end>Keberatan</ion-badge>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf="rencanaKerjaList.length == 0 && isLoading == true">\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1 "> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n  \n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/rencana-kerja-bawahan-list/rencana-kerja-bawahan-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], RencanaKerjaBawahanListPage);
    return RencanaKerjaBawahanListPage;
}());

//# sourceMappingURL=rencana-kerja-bawahan-list.js.map

/***/ })

});
//# sourceMappingURL=28.js.map