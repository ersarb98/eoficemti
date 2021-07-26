webpackJsonp([24],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchForwardPrpoPageModule", function() { return SearchForwardPrpoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_forward_prpo__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchForwardPrpoPageModule = /** @class */ (function () {
    function SearchForwardPrpoPageModule() {
    }
    SearchForwardPrpoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_forward_prpo__["a" /* SearchForwardPrpoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_forward_prpo__["a" /* SearchForwardPrpoPage */]),
            ],
        })
    ], SearchForwardPrpoPageModule);
    return SearchForwardPrpoPageModule;
}());

//# sourceMappingURL=search-forward-prpo.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchForwardPrpoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(103);
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
 * Generated class for the SearchForwardPrpoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchForwardPrpoPage = /** @class */ (function () {
    function SearchForwardPrpoPage(navCtrl, navParams, viewCtrl, soapService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.soapService = soapService;
        this.toastCtrl = toastCtrl;
        this.searchText = "";
        this.items = [];
        this.selectedItems = [];
        this.displayOk = false;
    }
    SearchForwardPrpoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchForwardPrpoPage');
    };
    SearchForwardPrpoPage.prototype.getForward = function () {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_findemployee', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                search: this.searchText.toUpperCase(),
                atas: 1,
                bawah: 5
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.items = responData['data'];
                _this.FilterItems();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        })
            .catch(function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    SearchForwardPrpoPage.prototype.FilterItems = function () {
        var _this = this;
        this.filterItems = this.items;
        if (this.searchText.trim() !== '') {
            this.filterItems = this.filterItems.filter(function (item) {
                return (item.NAMA.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1);
            });
        }
    };
    SearchForwardPrpoPage.prototype.CheckChange = function (item) {
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
    SearchForwardPrpoPage.prototype.CloseModel = function () {
        this.viewCtrl.dismiss(this.selectedItems);
    };
    SearchForwardPrpoPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SearchForwardPrpoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-forward-prpo',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-forward-prpo/search-forward-prpo.html"*/'<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>\n      <span ion-text color="light">\n        Forward To\n      </span>\n      \n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()" style="color: white !important;">\n        Cancel\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color="light">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-searchbar mode="ios" [(ngModel)]="searchText" (ionInput)="getForward()"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-fab right bottom (click)="CloseModel()">\n    <button ion-fab>\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-row *ngFor="let item of filterItems;let i = index" (click)="CheckChange(item)" style="border-bottom:1px solid #eee  "\n    align-items-center>\n    <ion-col col-2 text-center style="padding:5px;">\n      <ion-icon *ngIf="item.selected" name="ios-checkmark-circle" color="primary" style="font-size: 26px;"></ion-icon>\n      <ion-icon *ngIf="!item.selected" name="ios-radio-button-off" color="primary" style="font-size: 26px;color: rgb(199, 199, 199);"></ion-icon>\n    </ion-col>\n    <ion-col col-10>\n      <span ion-text text-wrap color="primary"><b>{{ item.NIPP}}</b></span> <br>\n      <span ion-text text-wrap><b>{{ item.NAMA}}</b></span> <br>\n      <span ion-text text-wrap>{{ item.NAMA_JABATAN}}</span>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-forward-prpo/search-forward-prpo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SearchForwardPrpoPage);
    return SearchForwardPrpoPage;
}());

//# sourceMappingURL=search-forward-prpo.js.map

/***/ })

});
//# sourceMappingURL=24.js.map