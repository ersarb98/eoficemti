webpackJsonp([51],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KategoriPengajuanListPageModule", function() { return KategoriPengajuanListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kategori_pengajuan_list__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KategoriPengajuanListPageModule = /** @class */ (function () {
    function KategoriPengajuanListPageModule() {
    }
    KategoriPengajuanListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kategori_pengajuan_list__["a" /* KategoriPengajuanListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kategori_pengajuan_list__["a" /* KategoriPengajuanListPage */]),
            ],
        })
    ], KategoriPengajuanListPageModule);
    return KategoriPengajuanListPageModule;
}());

//# sourceMappingURL=kategori-pengajuan-list.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KategoriPengajuanListPage; });
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
 * Generated class for the KategoriPengajuanListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KategoriPengajuanListPage = /** @class */ (function () {
    function KategoriPengajuanListPage(navCtrl, navParams, viewCtrl, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.kategoriList = [];
        this.fakeUsers = new Array(5);
    }
    KategoriPengajuanListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.storage.get('userdataIPCContact').then(function (val2) {
                _this.userdataIPCContact = val2;
                _this.getKategoriList('');
            });
        });
    };
    KategoriPengajuanListPage.prototype.getKategoriList = function (type) {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_data_kategori_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_dir: this.userdataIPCContact['ID_DIR']
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.kategoriList = [];
                if (responData['data'].length > 0 && !_this.isEmptyObject(responData['data'][0])) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.kategoriList.push(responData['data'][i]);
                    }
                }
                // console.log(this.kategoriList);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            if (type == '') {
            }
            else {
                type.complete();
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
            if (type == '') {
            }
            else {
                type.complete();
            }
            _this.isLoading = false;
        });
    };
    KategoriPengajuanListPage.prototype.doRefresh = function (refresher) {
        this.getKategoriList(refresher);
    };
    KategoriPengajuanListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KategoriPengajuanListPage');
    };
    KategoriPengajuanListPage.prototype.openModal = function (modalPage) {
        var _this = this;
        var modal = this.modalCtrl.create(modalPage, {}, {
            enableBackdropDismiss: true,
            showBackdrop: true
            // cssClass:'my-modal'
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.getKategoriList('');
        });
    };
    KategoriPengajuanListPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    KategoriPengajuanListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-kategori-pengajuan-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/kategori-pengajuan-list/kategori-pengajuan-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Kategori Pengajuan</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list class="dining_List" *ngIf="kategoriList.length == 0 && isLoading == false">\n    <ion-item tapplable>\n      <div style="padding:7px">\n        <span text-wrap ion-text class="font">Tidak ada Kategori</span><br />\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="kategoriList.length > 0 && isLoading == false">\n    <ion-card class="my-card" *ngFor="let kategori of kategoriList">\n      <ion-item>\n        <span item-start>\n          <img src="assets/imgs/logo/category-icon.png" class="icons">\n        </span>\n        <div style="padding:8px">\n          <span ion-text text-wrap class="font bold">{{ kategori[\'KATEGORI\'] }}</span><br />\n          <span ion-text text-wrap color="primary" class="font">{{ userdataIPCContact[\'DIREKTORAT\'] }}</span>\n        </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>   \n\n  <ion-list *ngIf=\'kategoriList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="crescent">\n    </ion-refresher-content>\n  </ion-refresher>\n\n</ion-content>\n\n<ion-footer>\n  <ion-fab right bottom style="right:20px;bottom:20px;">\n    <button ion-fab color="primary" (click)="openModal(\'AddKategoriPengajuanPage\')">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/kategori-pengajuan-list/kategori-pengajuan-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], KategoriPengajuanListPage);
    return KategoriPengajuanListPage;
}());

//# sourceMappingURL=kategori-pengajuan-list.js.map

/***/ })

});
//# sourceMappingURL=51.js.map