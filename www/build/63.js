webpackJsonp([63],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutiListPageModule", function() { return CutiListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuti_list__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CutiListPageModule = /** @class */ (function () {
    function CutiListPageModule() {
    }
    CutiListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cuti_list__["a" /* CutiListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cuti_list__["a" /* CutiListPage */]),
            ],
        })
    ], CutiListPageModule);
    return CutiListPageModule;
}());

//# sourceMappingURL=cuti-list.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CutiListPage; });
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
 * Generated class for the CutiListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CutiListPage = /** @class */ (function () {
    function CutiListPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.cutiList = [];
        this.fakeUsers = new Array(5);
        this.batasAtas = 1;
        this.batasBawah = 10;
    }
    CutiListPage.prototype.ionViewDidEnter = function () {
    };
    CutiListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            if (_this.userdataTPK['data']['DATA_BAWAHAN'].length == 0 && _this.userdataTPK['data']['DATA_BAWAHAN_TNO'].length == 0) {
                _this.isAtasan = false;
            }
            else {
                _this.isAtasan = true;
            }
            _this.getCutiList('first', '');
        });
    };
    CutiListPage.prototype.goToForm = function () {
        var modal = this.modalCtrl.create("AddCutiPage", {
            openFrom: 'CutiListPage'
        }, {
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modal.present();
    };
    CutiListPage.prototype.getCutiList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_cuti_list', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_user: this.userdataTPK['data']['IDUSER'],
                search_jenis: "",
                search_tgl_pengajuan: "",
                search_tgl_mulai: "",
                search_tgl_selesai: "",
                search_alasan: "",
                atas: this.batasAtas,
                bawah: this.batasBawah
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.cutiList = [];
                }
                if (responData['data']['Cuti Personal'].length > 0) {
                    for (var i = 0; i < responData['data']['Cuti Personal'].length; i++) {
                        _this.cutiList.push(responData['data']['Cuti Personal'][i]);
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
    CutiListPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.cutiList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 10;
            this.getCutiList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    CutiListPage.prototype.doRefresh = function (refresher) {
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.getCutiList('refresh', refresher);
    };
    CutiListPage.prototype.searchCuti = function () {
        var modal = this.modalCtrl.create('SearchCutiPage');
        modal.present();
    };
    CutiListPage.prototype.goToDetail = function (data) {
        this.navCtrl.push("CutiDetailPage", {
            "data": data,
            "nipp": this.userdataTPK['data']['NIPP'],
            "userdataTPK": this.userdataTPK
        });
    };
    CutiListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cuti-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/cuti-list/cuti-list.html"*/'<!--\n  Generated template for the CutiListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Izin/Cuti</span>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="searchCuti()">\n        <ion-icon style="font-size:2.4rem;" name="md-search" color="light"></ion-icon>\n      </button>\n\n      <!-- <button ion-button *ngIf="isAtasan" (click)="presentPopover($event)">\n            <ion-icon style="font-size:2.4rem;" name="more" color="danger"></ion-icon>\n          </button>  -->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list class="dining_List" *ngIf="cutiList.length == 0  && isLoading == false">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data izin/cuti.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="cutiList.length != 0 && isLoading == false">   \n    <ion-card *ngFor="let cuti of cutiList" class="my-card" (click)="goToDetail(cuti)">\n      <ion-item>\n        <span item-start>\n          <img src="assets/imgs/menu-icon/cuti.png" class="icons">\n        </span>\n        <span ion-text text-wrap class="font3" color="danger"><b>{{ cuti[\'Jumlah\'] }} hari</b></span><br />\n        <span ion-text text-wrap class="font2"><b>{{ cuti[\'Jenis\'] }}</b></span><br>\n        <span ion-text text-wrap class="font">\n          {{ cuti[\'Tanggal Mulai\'] }} <span ion-text text-wrap color="primary"><b>s/d</b></span> {{ cuti[\'Tanggal Selesai\'] }}\n        </span>\n        <span ion-text text-wrap style="font-size: 1.2rem;" color="primary"  item-end><b>{{ cuti[\'Status\'] }}</b></span>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'cutiList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n<ion-footer>\n  <ion-fab right bottom style="margin-right:10px; margin-bottom: 10px;">\n    <button ion-fab color="red" (click)="goToForm()">\n      <ion-icon name="md-add" color="light"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/cuti-list/cuti-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], CutiListPage);
    return CutiListPage;
}());

//# sourceMappingURL=cuti-list.js.map

/***/ })

});
//# sourceMappingURL=63.js.map