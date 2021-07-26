webpackJsonp([29],{

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrpoListPageModule", function() { return PrpoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prpo_list__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrpoListPageModule = /** @class */ (function () {
    function PrpoListPageModule() {
    }
    PrpoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prpo_list__["a" /* PrpoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prpo_list__["a" /* PrpoListPage */]),
            ],
        })
    ], PrpoListPageModule);
    return PrpoListPageModule;
}());

//# sourceMappingURL=prpo-list.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrpoListPage; });
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
 * Generated class for the PrpoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrpoListPage = /** @class */ (function () {
    function PrpoListPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.prpoList = [];
        this.fakeUsers = new Array(5);
        this.batasAtas = 1;
        this.batasBawah = 10;
    }
    PrpoListPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PrpoListPage');
        // this.storage.get('userdataTPK').then(val => {
        //   this.userdataTPK = val;
        //   this.getPrpoList('first', '');
        // });
    };
    PrpoListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad PrpoListPage');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.prpoList = [];
            _this.getPrpoList('first', '');
        });
    };
    PrpoListPage.prototype.getPrpoList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_bypass_wso', {
            fStream: JSON.stringify({
                sc_type: "notif_prpo_tpk",
                sc_code: "",
                data: {
                    nipp: this.userdataTPK['data']['NIPP'],
                    // nipp: '270055960',
                    atas: this.batasAtas,
                    bawah: this.batasBawah
                }
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.prpoList = [];
                }
                if (_this.isEmptyObject(responData['data'][0]) == false) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.prpoList.push(responData['data'][i]);
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
    PrpoListPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.prpoList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 10;
            this.getPrpoList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    PrpoListPage.prototype.doRefresh = function (refresher) {
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.getPrpoList('refresh', refresher);
    };
    PrpoListPage.prototype.goToDetail = function (data) {
        this.navCtrl.push("PrpoDetailPage", {
            prpoData: data,
        });
    };
    PrpoListPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    PrpoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-prpo-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/prpo-list/prpo-list.html"*/'<!--\n  Generated template for the PrpoListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Approval PR/PO</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf="prpoList.length == 0  && isLoading == false">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data PR/PO.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf="prpoList.length != 0 && isLoading == false">\n    <ion-card *ngFor="let prpo of prpoList" class="my-card" (click)="goToDetail(prpo)">\n      <ion-item>\n        <span item-start>\n          <img src="assets/imgs/menu-icon/approval-prpo.png" class="icons">\n        </span>\n        <span ion-text text-wrap class="font2" color="danger">{{ prpo[\'DOCUMENT_TYPE\'] }}</span><br>\n        <span ion-text text-wrap class="font" color="primary">From : {{ prpo[\'FROM_USER\'] }}</span><br>\n        <span ion-text text-wrap class="font">{{ prpo[\'SUBJECT\'] }}</span><br>\n        <span ion-text text-wrap class="font" color="color4">Sent : {{ prpo[\'BEGIN_DATE\'] }}</span><br>\n\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'prpoList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/prpo-list/prpo-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], PrpoListPage);
    return PrpoListPage;
}());

//# sourceMappingURL=prpo-list.js.map

/***/ })

});
//# sourceMappingURL=29.js.map