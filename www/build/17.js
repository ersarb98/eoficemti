webpackJsonp([17],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTeamAbsenPageModule", function() { return SearchTeamAbsenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_team_absen__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchTeamAbsenPageModule = /** @class */ (function () {
    function SearchTeamAbsenPageModule() {
    }
    SearchTeamAbsenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_team_absen__["a" /* SearchTeamAbsenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_team_absen__["a" /* SearchTeamAbsenPage */]),
            ],
        })
    ], SearchTeamAbsenPageModule);
    return SearchTeamAbsenPageModule;
}());

//# sourceMappingURL=search-team-absen.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTeamAbsenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(21);
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
 * Generated class for the SearchTeamAbsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchTeamAbsenPage = /** @class */ (function () {
    function SearchTeamAbsenPage(navCtrl, navParams, storage, datepipe, datePicker) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.datepipe = datepipe;
        this.datePicker = datePicker;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK);
        });
    }
    SearchTeamAbsenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchTeamAbsenPage');
    };
    SearchTeamAbsenPage.prototype.doSearch = function () {
        var _this = this;
        this.navCtrl.push('AbsenTeamHadirkoePage', {
            "idUser": this.userdataTPK['data']['IDUSER'],
            "date": this.tanggal,
            "fromPage": "AbsenActivityPage"
        }).then(function () {
            _this.navCtrl.remove(1, 2);
        });
    };
    SearchTeamAbsenPage.prototype.showDatePicker = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            maxDate: new Date().valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            _this.tanggal = _this.datepipe.transform(date, 'dd-MM-yyyy');
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    SearchTeamAbsenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-team-absen',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-team-absen/search-team-absen.html"*/'<!--\n  Generated template for the UpdateUserdataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light">Pilih Tanggal</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <span item-left>\n      <img src="assets/imgs/menu-icon/start_date.png" class="icons">\n    </span>\n    <ion-label stacked>Tanggal</ion-label>\n    <ion-input type="text" [readonly]="true" (ionFocus)="showDatePicker(1)" (click)="showDatePicker(1)"\n      [(ngModel)]="tanggal"></ion-input>\n  </ion-item>\n\n  <br>\n  <div class="row">   \n    <div class="col">\n      <button ion-button full icon-end style="border-radius: 5px;" [disabled]="tanggal == null || tanggal ==\'\'" (click)="doSearch()">\n        Cari\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-team-absen/search-team-absen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */]])
    ], SearchTeamAbsenPage);
    return SearchTeamAbsenPage;
}());

//# sourceMappingURL=search-team-absen.js.map

/***/ })

});
//# sourceMappingURL=17.js.map