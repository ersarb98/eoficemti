webpackJsonp([8],{

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UangMukaListPageModule", function() { return UangMukaListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uang_muka_list__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UangMukaListPageModule = /** @class */ (function () {
    function UangMukaListPageModule() {
    }
    UangMukaListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__uang_muka_list__["a" /* UangMukaListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__uang_muka_list__["a" /* UangMukaListPage */]),
            ],
        })
    ], UangMukaListPageModule);
    return UangMukaListPageModule;
}());

//# sourceMappingURL=uang-muka-list.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UangMukaListPage; });
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
 * Generated class for the UangMukaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UangMukaListPage = /** @class */ (function () {
    function UangMukaListPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.uangMukaList = [];
        this.fakeUsers = new Array(5);
        this.batasAtas = 1;
        this.batasBawah = 10;
    }
    UangMukaListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad UangMukaListPage');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getUangMukaList('first', '');
        });
    };
    UangMukaListPage.prototype.getUangMukaList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_uang_muka_list', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_user: this.userdataTPK['data']['IDUSER'],
                no_surat: '',
                perihal: '',
                no_jkk: '',
                no_pertanggungjawaban: '',
                tgl_pengajuan: '',
                atas: this.batasAtas,
                bawah: this.batasBawah
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.uangMukaList = [];
                }
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.uangMukaList.push(responData['data'][i]);
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
    UangMukaListPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.uangMukaList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 10;
            this.getUangMukaList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    UangMukaListPage.prototype.doRefresh = function (refresher) {
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.getUangMukaList('refresh', refresher);
    };
    UangMukaListPage.prototype.searchUangMuka = function () {
        var modal = this.modalCtrl.create('SearchUangMukaPage');
        modal.present();
    };
    UangMukaListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-uang-muka-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/uang-muka-list/uang-muka-list.html"*/'<!--\n  Generated template for the UangMukaListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span ion-text color="light" class="fw500">Pengajuan Uang Muka</span></ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="searchUangMuka()">\n        <ion-icon style="font-size:2.4rem;" name="md-search" color="light"></ion-icon>\n      </button>\n  \n      <!-- <button ion-button *ngIf="isAtasan" (click)="presentPopover($event)">\n            <ion-icon style="font-size:2.4rem;" name="more" color="danger"></ion-icon>\n          </button>  -->\n    </ion-buttons>\n  </ion-navbar>\n\n  \n</ion-header>\n\n<ion-content>\n\n  <ion-list class="dining_List" *ngIf="uangMukaList.length == 0  && isLoading == false">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data uangMuka.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="uangMukaList.length != 0 && isLoading == false">\n    <ion-card *ngFor="let uangMuka of uangMukaList" class="my-card" (click)="goToDetail(uangMuka)">\n      <ion-item>\n        <span item-start>\n          <img src="assets/imgs/menu-icon/uang-muka.png" class="icons">\n        </span>\n        <div>\n          <span ion-text text-wrap class="font3" color="danger" *ngIf="uangMuka[\'NO_SURAT\'] == \'\' || uangMuka[\'NO_SURAT\'] == null"><b> - </b></span>\n          <span ion-text text-wrap class="font3" color="danger"><b>{{ uangMuka[\'NO_SURAT\'] }}</b></span><br />\n        </div>\n\n        <div>\n          <span ion-text text-wrap class="font3" *ngIf="uangMuka[\'PERIHAL\'] == \'\' || uangMuka[\'PERIHAL\'] == null"><b> - </b></span>\n          <span ion-text text-wrap class="font2">{{ uangMuka[\'PERIHAL\'] }}</span><br>\n        </div>\n\n        <span ion-text text-wrap class="font" color="color4" >\n            JKK Belum Keluar  \n        </span> <br>\n\n        <span ion-text text-wrap class="font" color="color4" >\n          Pertanggungjawaban belum dibuat\n      </span> <br>\n        \n        <span ion-text text-wrap class="font" color="color4" >\n          {{ uangMuka[\'TGL_SURAT\'] }}          \n        </span> <br>\n        <span ion-text text-wrap style="font-size: 1.2rem;" color="primary"><b>{{ uangMuka[\'KETERANGAN\'] }}</b></span>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'uangMukaList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher> \n\n</ion-content>\n\n<ion-footer>\n  <ion-fab right bottom style="margin-right:10px; margin-bottom: 10px;">\n    <button ion-fab color="red" (click)="goToForm()">\n      <ion-icon name="md-add" color="light"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-footer>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/uang-muka-list/uang-muka-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], UangMukaListPage);
    return UangMukaListPage;
}());

//# sourceMappingURL=uang-muka-list.js.map

/***/ })

});
//# sourceMappingURL=8.js.map