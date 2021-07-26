webpackJsonp([44],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuP2bPageModule", function() { return MenuP2bPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_p2b__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuP2bPageModule = /** @class */ (function () {
    function MenuP2bPageModule() {
    }
    MenuP2bPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_p2b__["a" /* MenuP2bPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_p2b__["a" /* MenuP2bPage */]),
            ],
        })
    ], MenuP2bPageModule);
    return MenuP2bPageModule;
}());

//# sourceMappingURL=menu-p2b.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuP2bPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
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
 * Generated class for the MenuP2bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuP2bPage = /** @class */ (function () {
    function MenuP2bPage(navCtrl, navParams, viewCtrl, app, storage, soapService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.storage = storage;
        this.soapService = soapService;
        this.alertCtrl = alertCtrl;
        this.p2buser = navParams.get('p2buser');
        this.badges = navParams.get('badges');
    }
    MenuP2bPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('userdata').then(function (val) {
            _this.userdata = val;
        });
    };
    MenuP2bPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuP2bPage');
    };
    MenuP2bPage.prototype.goToPage = function (page) {
        var _this = this;
        this.viewCtrl.dismiss().then(function () {
            _this.app.getRootNav().push(page, {
                p2buser: _this.p2buser,
            });
        });
    };
    MenuP2bPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    MenuP2bPage.prototype.parse = function (val) {
        var intValue = parseInt(val);
        if (intValue > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    MenuP2bPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu-p2b',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/menu-p2b/menu-p2b.html"*/'\n  <ion-list padding-left padding-right padding-bottom no-margin>\n    <ion-list-header class="header" no-padding no-margin >\n      <b>Menu</b>\n    </ion-list-header>       \n    <button ion-item no-padding no-margin no-lines (click)="goToPage(\'EvalBawahanListPage\')">List Evaluasi Bawahan</button>  \n    <button ion-item no-padding no-margin no-lines (click)="goToPage(\'RencanaKerjaBawahanListPage\')">\n      Penilaian P2B      \n      <ion-badge style="position:absolute; right:25px;" *ngIf="parse(badges)" color="danger">{{ badges }}</ion-badge>      \n    </button>  \n      \n  </ion-list>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/menu-p2b/menu-p2b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenuP2bPage);
    return MenuP2bPage;
}());

//# sourceMappingURL=menu-p2b.js.map

/***/ })

});
//# sourceMappingURL=44.js.map