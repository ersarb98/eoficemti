webpackJsonp([46],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAbsenPageModule", function() { return MenuAbsenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_absen__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuAbsenPageModule = /** @class */ (function () {
    function MenuAbsenPageModule() {
    }
    MenuAbsenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_absen__["a" /* MenuAbsenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_absen__["a" /* MenuAbsenPage */]),
            ],
        })
    ], MenuAbsenPageModule);
    return MenuAbsenPageModule;
}());

//# sourceMappingURL=menu-absen.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuAbsenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
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
 * Generated class for the MenuAbsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuAbsenPage = /** @class */ (function () {
    function MenuAbsenPage(navCtrl, navParams, viewCtrl, app, storage, soapService, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.storage = storage;
        this.soapService = soapService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.isLoadingBadges = true;
    }
    MenuAbsenPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getBadges();
        });
    };
    MenuAbsenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuAbsenPage');
    };
    MenuAbsenPage.prototype.goToPage = function (page) {
        var _this = this;
        this.navCtrl.push(page).then(function () { _this.viewCtrl.dismiss(); });
    };
    MenuAbsenPage.prototype.getBadges = function () {
        var _this = this;
        this.isLoadingBadges = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_countbadges', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                iduser: this.userdataTPK['data']['IDUSER'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                nipp: this.userdataTPK['data']['NIPP']
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.badgesList = responData['data'];
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan data Notifikasi (1)',
                    buttons: ['OK']
                });
                //alert.present();
            }
            _this.isLoadingBadges = false;
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan data Notifikasi (2)',
                buttons: ['OK']
            });
            //alert.present();    
            _this.isLoadingBadges = false;
        });
    };
    MenuAbsenPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    MenuAbsenPage.prototype.parse = function (val) {
        var intValue = parseInt(val);
        if (intValue > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    MenuAbsenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu-absen',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/menu-absen/menu-absen.html"*/'\n  <ion-list padding-left padding-right padding-bottom no-margin>\n    <ion-list-header class="header" no-padding no-margin >\n      <b>Menu</b>\n    </ion-list-header>      \n    <button ion-item no-padding no-margin no-lines style="font-size:1.5rem;" (click)="goToPage(\'AbsenBawahanPage\')">Absen Harian Bawahan</button>  \n    <button ion-item no-padding no-margin no-lines style="font-size:1.5rem;" (click)="goToPage(\'KoreksiAbsenBawahanPage\')">\n      Koreksi Absen Bawahan     \n      <ion-badge style="position:absolute; right:25px;" *ngIf="!isLoadingBadges  && !isEmptyObject(badgesList) && parse(badgesList[\'JUMLAH_ABSEN_BELUM_KOREKSI\'])" color="color6">{{ badgesList[\'JUMLAH_ABSEN_BELUM_KOREKSI\'] }}</ion-badge>            \n    </button>  \n  </ion-list>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/menu-absen/menu-absen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], MenuAbsenPage);
    return MenuAbsenPage;
}());

//# sourceMappingURL=menu-absen.js.map

/***/ })

});
//# sourceMappingURL=46.js.map