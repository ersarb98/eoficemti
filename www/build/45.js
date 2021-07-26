webpackJsonp([45],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIpcContactPageModule", function() { return MenuIpcContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_ipc_contact__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuIpcContactPageModule = /** @class */ (function () {
    function MenuIpcContactPageModule() {
    }
    MenuIpcContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_ipc_contact__["a" /* MenuIpcContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_ipc_contact__["a" /* MenuIpcContactPage */]),
            ],
        })
    ], MenuIpcContactPageModule);
    return MenuIpcContactPageModule;
}());

//# sourceMappingURL=menu-ipc-contact.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuIpcContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
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
 * Generated class for the MenuIpcContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuIpcContactPage = /** @class */ (function () {
    function MenuIpcContactPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.IPCContactUserData = navParams.get('IPCContactUserData');
        this.badges = navParams.get('badges');
    }
    MenuIpcContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuIpcContactPage');
        console.log(this.IPCContactUserData);
    };
    MenuIpcContactPage.prototype.goToPage = function (page) {
        var _this = this;
        this.viewCtrl.dismiss().then(function () {
            _this.app.getRootNav().push(page, {});
        });
    };
    MenuIpcContactPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    MenuIpcContactPage.prototype.parse = function (val) {
        var intValue = parseInt(val);
        if (intValue > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    MenuIpcContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu-ipc-contact',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/menu-ipc-contact/menu-ipc-contact.html"*/'<ion-list padding-left padding-right padding-bottom no-margin>\n  <ion-list-header class="header" no-padding no-margin>\n    <b>Menu</b>\n  </ion-list-header>\n  <button ion-item (click)="goToPage(\'AdminDirektoratListPage\')"\n    *ngIf="IPCContactUserData[\'ID_LEVEL\'] == \'0\'">Admin Direktorat</button>\n  <button ion-item (click)="goToPage(\'PetugasDirektoratListPage\')"\n    *ngIf="IPCContactUserData[\'ID_LEVEL\'] == \'1\' || IPCContactUserData[\'ID_LEVEL\'] == \'0\'">Petugas Direktorat</button>\n  <button ion-item (click)="goToPage(\'KategoriPengajuanListPage\')"\n    *ngIf="IPCContactUserData[\'ID_LEVEL\'] == \'1\'">Kategori Pengajuan</button>\n  <button ion-item (click)="goToPage(\'IpcContactQuestionListPage\')"\n    *ngIf="IPCContactUserData[\'ID_LEVEL\'] == \'2\'">Pertanyaan / permasalahan <ion-badge\n      style="position:absolute; right:20px;" *ngIf="parse(badges)" color="danger">{{ badges }}</ion-badge> </button>\n  <!-- <button ion-item (click)="goToPage(\'SearchIpcContactHistoryPage\')"\n    *ngIf="IPCContactUserData[\'ID_LEVEL\'] == \'0\' || IPCContactUserData[\'ID_LEVEL\'] == \'1\'">Download History</button> -->\n</ion-list>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/menu-ipc-contact/menu-ipc-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], MenuIpcContactPage);
    return MenuIpcContactPage;
}());

//# sourceMappingURL=menu-ipc-contact.js.map

/***/ })

});
//# sourceMappingURL=45.js.map