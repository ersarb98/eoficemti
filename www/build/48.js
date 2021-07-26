webpackJsonp([48],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogSuratPageModule", function() { return LogSuratPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_surat__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogSuratPageModule = /** @class */ (function () {
    function LogSuratPageModule() {
    }
    LogSuratPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__log_surat__["a" /* LogSuratPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__log_surat__["a" /* LogSuratPage */]),
            ],
        })
    ], LogSuratPageModule);
    return LogSuratPageModule;
}());

//# sourceMappingURL=log-surat.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogSuratPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
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
 * Generated class for the LogSuratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogSuratPage = /** @class */ (function () {
    function LogSuratPage(navCtrl, navParams, storage, loadingCtrl, alertCtrl, soapService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.toastCtrl = toastCtrl;
        this.isLoading = false;
        this.logList = [];
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.idSurat = navParams.get('idSurat');
        this.loadingPresent();
        this.getLog('first', '');
    }
    LogSuratPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogSuratPage');
    };
    LogSuratPage.prototype.getLog = function (type, functionName) {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_log_surat', { fStream: JSON.stringify({ usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                id_surat: atob(this.idSurat),
                atas: this.batasAtas,
                bawah: this.batasBawah
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.logList = [];
                }
                if (responData['data']['Log_Surat'].length > 0 && !_this.isEmptyObject(responData['data']['Log_Surat'][0])) {
                    for (var i = 0; i < responData['data']['Log_Surat'].length; i++) {
                        _this.logList.push(responData['data']['Log_Surat'][i]);
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
                _this.loadingDismiss();
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
                _this.loadingDismiss();
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
        });
    };
    LogSuratPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.logList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 20;
            this.getLog('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    LogSuratPage.prototype.doRefresh = function (refresher) {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.getLog('refresh', refresher);
    };
    LogSuratPage.prototype.loadingPresent = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
    };
    LogSuratPage.prototype.loadingDismiss = function () {
        if (this.loading.present()) {
            this.loading.dismiss();
        }
    };
    LogSuratPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    LogSuratPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-log-surat',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/log-surat/log-surat.html"*/'<!--\n  Generated template for the LogSuratPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n            <span ion-text color="light" class="fw500">Log Surat</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#fff">\n    <ion-list class="dining_List">	\n        <ion-item *ngFor="let log of logList" (click)="goToDetail(log)" tapplable>        	\n            <div style="padding:7px"> \n            	<span ion-text text-wrap style="font-size:1.4rem;" color="danger" ><b>{{ log[\'KETERANGAN\'] }}</b></span><br />\n              <span ion-text text-wrap style="font-size:1.3rem">{{ log[\'KOMENTAR\'] }}</span><br />\n              <span ion-text text-wrap style="font-size:1.3rem">{{ log[\'PEGAWAI\']  }}</span><br />               \n              <div style="font-size:1.2rem;padding-top:6px"><span ion-text text-wrap color="primary">{{ log[\'TGL_LOG\']  }}</span></div>\n            </div>             \n        </ion-item>       \n    </ion-list> \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n        \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="crescent"> \n        </ion-refresher-content>\n    </ion-refresher>\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/log-surat/log-surat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], LogSuratPage);
    return LogSuratPage;
}());

//# sourceMappingURL=log-surat.js.map

/***/ })

});
//# sourceMappingURL=48.js.map