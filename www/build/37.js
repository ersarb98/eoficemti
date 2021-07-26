webpackJsonp([37],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P2bRemarkPageModule", function() { return P2bRemarkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__p2b_remark__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var P2bRemarkPageModule = /** @class */ (function () {
    function P2bRemarkPageModule() {
    }
    P2bRemarkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__p2b_remark__["a" /* P2bRemarkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__p2b_remark__["a" /* P2bRemarkPage */]),
            ],
        })
    ], P2bRemarkPageModule);
    return P2bRemarkPageModule;
}());

//# sourceMappingURL=p2b-remark.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P2bRemarkPage; });
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
 * Generated class for the P2bRemarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var P2bRemarkPage = /** @class */ (function () {
    function P2bRemarkPage(navCtrl, navParams, storage, loadingCtrl, alertCtrl, soapService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.toastCtrl = toastCtrl;
        this.isLoading = false;
        this.remarkList = [];
        this.batasBawah = 0;
        this.batasAtas = 10;
        this.idEval = navParams.get('idEval');
        this.loadingPresent();
        this.getLog('first', '');
    }
    P2bRemarkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad P2bRemarkPage');
    };
    P2bRemarkPage.prototype.getLog = function (type, functionName) {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* api_p2b_url */], 'eoffice_p2b_remarks', { fStream: JSON.stringify({ usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                id_eval: this.idEval,
                atas: this.batasAtas,
                bawah: this.batasBawah
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.remarkList = [];
                }
                if (responData['data'].length > 0 && !_this.isEmptyObject(responData['data'][0])) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        var splitted = responData['data'][i]['REMARKS'].split(" <br/> ");
                        var ket = void 0;
                        if (splitted[1]) {
                            ket = splitted[1];
                        }
                        else {
                            ket = "-";
                        }
                        _this.remarkList.push({
                            NAMA: responData['data'][i]['NAMA'],
                            KEGIATAN: splitted[0],
                            KETERANGAN: ket,
                            TGL: responData['data'][i]['TGL_ENTRY']
                        });
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
    P2bRemarkPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.remarkList.length >= 10) {
            this.batasBawah = (this.batasBawah == 0) ? this.batasBawah + 11 : this.batasBawah + 9;
            this.batasAtas = this.batasBawah + 10;
            this.getLog('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    P2bRemarkPage.prototype.doRefresh = function (refresher) {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.getLog('refresh', refresher);
    };
    P2bRemarkPage.prototype.loadingPresent = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
    };
    P2bRemarkPage.prototype.loadingDismiss = function () {
        if (this.loading.present()) {
            this.loading.dismiss();
        }
    };
    P2bRemarkPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    P2bRemarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-p2b-remark',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b-remark/p2b-remark.html"*/'<!--\n  Generated template for the LogSuratPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n            <span ion-text color="light" class="fw500">Remarks</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#fff">\n    <ion-list class="dining_List">	\n        <ion-item *ngFor="let log of remarkList" tapplable>        	 \n            <div style="padding:7px"> \n            	<span ion-text text-wrap style="font-size:1.3rem;font-weight:500" class="bold">{{ log[\'KEGIATAN\'] }}</span><br />\n              <span ion-text text-wrap style="font-size:1.3rem">{{ log[\'KETERANGAN\'] }}</span><br />\n              <span ion-text text-wrap style="font-size:1.3rem">{{ log[\'NAMA\']  }}</span><br />               \n              <div style="font-size:1.5rem;padding-top:6px"><span style="color:#F60">{{ log[\'TGL\']  }}</span></div>\n            </div>             \n        </ion-item>       \n    </ion-list> \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n        \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="crescent"> \n        </ion-refresher-content>\n    </ion-refresher>\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b-remark/p2b-remark.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], P2bRemarkPage);
    return P2bRemarkPage;
}());

//# sourceMappingURL=p2b-remark.js.map

/***/ })

});
//# sourceMappingURL=37.js.map