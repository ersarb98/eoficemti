webpackJsonp([41],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBawahanDisposisiPageModule", function() { return SelectBawahanDisposisiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_bawahan_disposisi__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectBawahanDisposisiPageModule = /** @class */ (function () {
    function SelectBawahanDisposisiPageModule() {
    }
    SelectBawahanDisposisiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_bawahan_disposisi__["a" /* SelectBawahanDisposisiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_bawahan_disposisi__["a" /* SelectBawahanDisposisiPage */]),
            ],
        })
    ], SelectBawahanDisposisiPageModule);
    return SelectBawahanDisposisiPageModule;
}());

//# sourceMappingURL=select-bawahan-disposisi.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBawahanDisposisiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
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
 * Generated class for the SelectBawahanDisposisiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectBawahanDisposisiPage = /** @class */ (function () {
    function SelectBawahanDisposisiPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.searchText = "";
        this.items = [];
        this.displayOk = false;
        this.items = [];
        this.items = navParams.get('kepadaList');
        console.log(this.items);
        this.FilterItems();
    }
    SelectBawahanDisposisiPage.prototype.FilterItems = function () {
        var _this = this;
        this.filterItems = this.items;
        if (this.searchText.trim() !== '') {
            this.filterItems = this.filterItems.filter(function (item) {
                return (item.NAMA.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 || item['NAMA JABATAN'].toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1);
            });
        }
    };
    SelectBawahanDisposisiPage.prototype.CheckChange = function (item) {
        for (var index = 0; index < this.filterItems.length; index++) {
            var element = this.filterItems[index];
            if (element.NIPP == item.NIPP) {
                this.filterItems[index].selected = true;
                this.selectedItems = element;
            }
            else {
                this.filterItems[index].selected = false;
            }
        }
    };
    SelectBawahanDisposisiPage.prototype.CloseModel = function () {
        this.viewCtrl.dismiss(this.selectedItems);
    };
    SelectBawahanDisposisiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectBawahanDisposisiPage');
    };
    SelectBawahanDisposisiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-bawahan-disposisi',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/select-bawahan-disposisi/select-bawahan-disposisi.html"*/'<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>\n      <span ion-text color="light">\n        Pilih Bawahan\n      </span>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="CloseModel()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n  <ion-toolbar color="light">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-searchbar mode="ios" style="background: white !important;" [(ngModel)]="searchText"\n          (ionInput)="FilterItems()" placeholder="search Nama/Jabatan" ></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content style="background-color: white !important;">\n  <ion-fab right bottom (click)="CloseModel()">\n    <button ion-fab>\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-row *ngFor="let item of filterItems;let i = index" (click)="CheckChange(item)"\n    style="border-bottom:1px solid #eee  " align-items-center>\n    <ion-col col-2 text-center style="padding:5px;">\n      <ion-icon *ngIf="item.selected" name="ios-checkmark-circle" color="primary" style="font-size: 26px;"></ion-icon>\n      <ion-icon *ngIf="!item.selected" name="ios-radio-button-off" color="primary"\n        style="font-size: 26px;color: rgb(199, 199, 199);"></ion-icon>\n    </ion-col>\n    <ion-col col-10 style="padding-top:10px; padding-bottom:10px;" >\n      <span ion-text text-wrap color="primary"> <b> {{item.NIPP}} </b> </span>\n      <br>\n      <span ion-text text-wrap style="font-size: 1.2rem;color:gray;">{{ item[\'NAMA JABATAN\'] }}</span> <br>\n      <span ion-text text-wrap style="font-size: 1.2rem;">{{ item.NAMA}}</span>\n\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/select-bawahan-disposisi/select-bawahan-disposisi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], SelectBawahanDisposisiPage);
    return SelectBawahanDisposisiPage;
}());

//# sourceMappingURL=select-bawahan-disposisi.js.map

/***/ })

});
//# sourceMappingURL=41.js.map