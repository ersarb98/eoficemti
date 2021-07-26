webpackJsonp([68],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDirektoratListPageModule", function() { return AdminDirektoratListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_direktorat_list__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminDirektoratListPageModule = /** @class */ (function () {
    function AdminDirektoratListPageModule() {
    }
    AdminDirektoratListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_direktorat_list__["a" /* AdminDirektoratListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_direktorat_list__["a" /* AdminDirektoratListPage */]),
            ],
        })
    ], AdminDirektoratListPageModule);
    return AdminDirektoratListPageModule;
}());

//# sourceMappingURL=admin-direktorat-list.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDirektoratListPage; });
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
 * Generated class for the AdminDirektoratListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminDirektoratListPage = /** @class */ (function () {
    function AdminDirektoratListPage(navCtrl, navParams, modalCtrl, viewCtrl, soapService, loadingCtrl, storage, alertCtrl, toastCtrl, popoverCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.isLoading = true;
        this.adminDirektoratList = [];
        this.fakeUsers = new Array(5);
    }
    AdminDirektoratListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.adminDirektoratList = [];
        this.storage.get('userdataIPCContact').then(function (val) {
            _this.userdataIPCContact = val;
            _this.getAdminDirektorat('first', '');
        });
    };
    AdminDirektoratListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminDirektoratListPage');
    };
    AdminDirektoratListPage.prototype.openModal = function (modalPage) {
        var _this = this;
        var modal = this.modalCtrl.create(modalPage, {}, {
            enableBackdropDismiss: true,
            showBackdrop: true
            // cssClass:'my-modal'
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            // console.log(data);    
            _this.adminDirektoratList = [];
            _this.batasAtas = 1;
            _this.batasBawah = 10;
            _this.getAdminDirektorat('first', '');
        });
    };
    AdminDirektoratListPage.prototype.getAdminDirektorat = function (type, functionName) {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_admin_list_ipcc', {
            fStream: JSON.stringify({
                "usernameEDI": __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                "passwordEDI": __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                "id_dir": "",
                "atas": this.batasAtas,
                "bawah": this.batasBawah
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.adminDirektoratList = [];
                }
                if (responData['data'].length > 0 && !_this.isEmptyObject(responData['data'][0])) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.adminDirektoratList.push(responData['data'][i]);
                    }
                }
                // console.log(this.adminDirektoratList);                 
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
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
            if (type == 'first' && functionName == '') {
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
        });
    };
    AdminDirektoratListPage.prototype.doRefresh = function (refresher) {
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.getAdminDirektorat('refresh', refresher);
    };
    AdminDirektoratListPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.adminDirektoratList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 10;
            this.getAdminDirektorat('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    // openEditPage(val) {
    //   let modal = this.modalCtrl.create('AddAdminDirektoratPage',{
    //     editData : val
    //   }, {
    //     enableBackdropDismiss: true,
    //     showBackdrop:true
    //     // cssClass:'my-modal'
    //   });
    //   modal.present();
    //   modal.onDidDismiss(data => {   
    //     console.log(data);    
    //     this.adminDirektoratList = [];
    //     this.batasAtas = 1;
    //     this.batasBawah = 10;       
    //     this.getAdminDirektorat('first', '');
    //   });
    // } 
    AdminDirektoratListPage.prototype.showOption = function (val) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Pilih Aksi',
            buttons: [
                {
                    text: 'Ubah',
                    role: 'koreksiDatang',
                    handler: function () {
                        // console.log('Ubah clicked');
                        var modal = _this.modalCtrl.create('AddAdminDirektoratPage', {
                            editData: val
                        }, {
                            enableBackdropDismiss: true,
                            showBackdrop: true
                            // cssClass:'my-modal'
                        });
                        modal.present();
                        modal.onDidDismiss(function (data) {
                            // console.log(data);
                            _this.adminDirektoratList = [];
                            _this.batasAtas = 1;
                            _this.batasBawah = 10;
                            _this.getAdminDirektorat('first', '');
                        });
                    }
                },
                {
                    text: 'Hapus',
                    handler: function () {
                        // console.log('Hapus clicked');
                        _this.deleteUser(val);
                    }
                },
                {
                    text: 'Tutup',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AdminDirektoratListPage.prototype.deleteUser = function (val) {
        var _this = this;
        var myLoading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        myLoading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_del_user_ipcc', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: val['NIPP']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['HASIL'].includes('Success')) {
                    _this.adminDirektoratList = [];
                    _this.batasAtas = 1;
                    _this.batasBawah = 10;
                    var toast = _this.toastCtrl.create({
                        message: 'Hapus Berhasil.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present().then(function () {
                        _this.getAdminDirektorat('first', '');
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
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
            myLoading.dismiss();
        })
            .catch(function (error) {
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            myLoading.dismiss();
        });
    };
    AdminDirektoratListPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    AdminDirektoratListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin-direktorat-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/admin-direktorat-list/admin-direktorat-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="!isSearch">\n      <span ion-text color="light" class="fw500">Admin Direktorat</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="dining_List" *ngIf="adminDirektoratList.length == 0 && isLoading == false">\n    <ion-item tapplable>\n      <div style="padding:7px">\n        <span text-wrap ion-text class="font">Belum Ada Admin Direktorat</span><br />\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="adminDirektoratList.length > 0 && isLoading == false">\n    <ion-card class="my-card" *ngFor="let adminDirektorat of adminDirektoratList" (click)="showOption(adminDirektorat)">\n      <ion-item>\n        <span item-start>\n          <img src="assets/imgs/logo/direktorat-icon.png" class="icons">\n        </span>\n        <div style="padding:8px">\n          <span ion-text text-wrap class="font bold">{{ adminDirektorat[\'LAST_NAME\'] }} |\n            {{ adminDirektorat[\'NIPP\'] }}</span><br />\n          <span ion-text text-wrap color="primary" class="font2">{{ adminDirektorat[\'DIREKTORAT\'] }}</span> <br />\n        </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>  \n\n  <ion-list *ngIf=\'adminDirektoratList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="crescent">\n    </ion-refresher-content>\n  </ion-refresher>\n\n</ion-content>\n\n<ion-footer>\n  <ion-fab right bottom style="right:20px;bottom:20px;">\n    <button ion-fab color="primary" (click)="openModal(\'AddAdminDirektoratPage\')">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/admin-direktorat-list/admin-direktorat-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], AdminDirektoratListPage);
    return AdminDirektoratListPage;
}());

//# sourceMappingURL=admin-direktorat-list.js.map

/***/ })

});
//# sourceMappingURL=68.js.map