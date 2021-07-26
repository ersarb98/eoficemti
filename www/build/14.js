webpackJsonp([14],{

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__soap_service__ = __webpack_require__(200);
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, storage, alertCtrl, app, oneSignal, soapService, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.oneSignal = oneSignal;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.isLoading = true;
    }
    SettingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.isLoading = true;
        // let loading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon tunggu...",
        //   cssClass: 'transparent', 
        //   dismissOnPageChange: true
        // });
        // loading.present();
        this.storage.get('userdataTPK').then(function (val) {
            _this.newSession(val);
        });
    };
    SettingPage.prototype.notEmpty = function (val) {
        if (typeof val != "undefined") {
            return true;
        }
        else {
            return false;
        }
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.newSession = function (val) {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_get_user_data', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                username: val['data']['NIPP'],
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['login_status'] == '404 Not Found') {
                }
                else if (responData['data'] == undefined) {
                }
                else if (responData['data']['login_status'] == 'AP NOT ALLOWED') {
                }
                else {
                    _this.userdataTPK = responData;
                    _this.storage.set('userdataTPK', responData).then(function () {
                    });
                }
            }
            else {
            }
            // loading.dismiss();
            _this.isLoading = false;
        })
            .catch(function (error) {
            // loading.dismiss();
            _this.isLoading = false;
        });
    };
    SettingPage.prototype.goToUpdate = function (type) {
        this.navCtrl.push("UpdateUserdataPage", {
            "updateType": type,
            "userdataTPK": this.userdataTPK
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting',
            providers: [__WEBPACK_IMPORTED_MODULE_5__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="white">Setting</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div class="header-container">\n    <div class="header-img"></div>\n    <div class="img-container">\n      <img *ngIf="notEmpty(userdataTPK)" src="{{ userdataTPK[\'data\'][\'FOTO\'] }}" class="my-img" />\n      <img *ngIf="!notEmpty(userdataTPK)" src="assets/imgs/menu-icon/person.png" class="my-img" />\n      <!-- <img src="assets/imgs/setting-icon/camera_blue.png" class="edit-profile"> -->\n    </div>\n  </div>\n\n  <div *ngIf="isLoading == false && notEmpty(userdataTPK)">\n    <div style="margin-top:50px;" class="user-info">\n      <span ion-text class="user-info-name">\n          <b>{{ userdataTPK[\'data\'][\'NAMA\'] }}</b>\n      </span><br>\n      <span ion-text text-wrap class="user-info-jab">\n          {{ userdataTPK[\'data\'][\'NAMAJABATAN\'] }}\n      </span>\n    </div>\n\n    <ion-card class="setting-card">\n      <ion-item>\n        <div item-start class="icon-container">\n          <img src="assets/imgs/setting-icon/nipp.png" class="icons">\n        </div>\n        <span ion-text text-wrap class="font-mini" color="gray">\n          NIPP\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n          {{ userdataTPK[\'data\'][\'NIPP\'] }}\n        </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="setting-card" style="border-left: 4px solid lightblue">\n      <ion-item>\n        <div item-start class="icon-container">\n          <img src="assets/imgs/setting-icon/email.png" class="icons">\n        </div>\n        <span ion-text text-wrap class="font-mini" color="gray">\n          Email\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n          {{ userdataTPK[\'data\'][\'EMAIL\'] }}\n        </span>\n        <span item-end ion-text text-wrap class="font-small" style="float:right !important;" color="primary"\n          (click)="goToUpdate(\'email\')">\n          <ion-icon name="md-create"></ion-icon>\n          Ubah\n        </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="setting-card" style="border-left: 4px solid lightgreen">\n      <ion-item>\n        <div item-start class="icon-container">\n          <img src="assets/imgs/setting-icon/phone.png" class="icons">\n        </div>\n        <span ion-text text-wrap class="font-mini" color="gray">\n          Nomor Telepon\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n            {{ userdataTPK[\'data\'][\'HP\'] }}\n          </span>\n        <span item-end ion-text text-wrap class="font-small" style="float:right !important;" color="primary"\n          (click)="goToUpdate(\'hp\')">\n          <ion-icon name="md-create"></ion-icon>\n          Ubah\n        </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="setting-card" style="border-left: 4px solid mediumpurple;margin-bottom: 50px;">\n      <ion-item>\n        <div item-start class="icon-container">\n          <img src="assets/imgs/setting-icon/pass3.png" class="icons">\n        </div>\n        <span ion-text text-wrap class="font-mini" color="gray">\n          Password\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n          ************\n        </span>\n        <span item-end ion-text text-wrap class="font-small" style="float:right !important;" color="primary"\n          (click)="goToUpdate(\'pass\')">\n          <ion-icon name="md-create"></ion-icon>\n          Ubah\n        </span>\n      </ion-item>\n    </ion-card>\n  </div>\n\n  <div *ngIf="isLoading == true && !notEmpty(userdataTPK)">\n    <div style="margin-top:50px;padding:0px 10px 0px 10px;width: 100%;" class="user-info">\n      <div class="animate-skeleton-background load-2" style="margin-left:auto;margin-right:auto;"></div>\n      <div class="animate-skeleton-background load-1" style="margin-left:auto;margin-right:auto;"></div>\n    </div>\n\n    <ion-card class="setting-card">\n      <ion-item>\n        <div item-start class="icon-container">\n          <img src="assets/imgs/setting-icon/nipp.png" class="icons">\n        </div>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-1"></div>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="setting-card" style="border-left: 4px solid lightblue">\n      <ion-item>\n        <div item-start class="icon-container">\n          <img src="assets/imgs/setting-icon/email.png" class="icons">\n        </div>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-1"></div>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="setting-card" style="border-left: 4px solid lightgreen">\n      <ion-item>\n        <div item-start class="icon-container">\n          <img src="assets/imgs/setting-icon/phone.png" class="icons">\n        </div>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-1"></div>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="setting-card" style="border-left: 4px solid mediumpurple;margin-bottom: 50px;">\n      <ion-item>\n        <div item-start class="icon-container">\n          <img src="assets/imgs/setting-icon/pass3.png" class="icons">\n        </div>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-1"></div>\n      </ion-item>\n    </ion-card>\n  </div>\n\n\n  <div class="version">\n    <span ion-text text-wrap>Versi 1.4.3</span>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_5__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=14.js.map