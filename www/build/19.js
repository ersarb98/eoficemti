webpackJsonp([19],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRestitusiPageModule", function() { return SearchRestitusiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_restitusi__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchRestitusiPageModule = /** @class */ (function () {
    function SearchRestitusiPageModule() {
    }
    SearchRestitusiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_restitusi__["a" /* SearchRestitusiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_restitusi__["a" /* SearchRestitusiPage */]),
            ],
        })
    ], SearchRestitusiPageModule);
    return SearchRestitusiPageModule;
}());

//# sourceMappingURL=search-restitusi.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRestitusiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(103);
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
 * Generated class for the SearchRestitusiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchRestitusiPage = /** @class */ (function () {
    function SearchRestitusiPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, soapService, alertCtrl, datePipe, datePicker, platform, currencyPipe, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.datePicker = datePicker;
        this.platform = platform;
        this.currencyPipe = currencyPipe;
        this.toastCtrl = toastCtrl;
        this.restitusiList = [];
        this.batasAtas = 1;
        this.batasBawah = 50;
        this.isLoading = true;
        this.storage.get('userdata').then(function (val) {
            _this.userdata = val;
        });
    }
    SearchRestitusiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchRestitusiPage');
    };
    SearchRestitusiPage.prototype.showDatePicker = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            //minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),    
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (type == 1) {
                _this.startDate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else if (type == 2) {
                _this.endDate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    SearchRestitusiPage.prototype.doSearch = function () {
        // console.log(this.perihal);
        // console.log(this.tglMulai);
        // console.log(this.tglMulai);
        // console.log(this.penanggungJawab);
        console.log('do search');
        this.getSppdList();
    };
    SearchRestitusiPage.prototype.getSppdList = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.isLoading = true;
        console.log(this.userdata['data']['NIPP']);
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* api_base_url */], 'eoffice_bypass_wso', { fStream: JSON.stringify({
                sc_type: 'searchrestitusi',
                sc_code: __WEBPACK_IMPORTED_MODULE_6__config__["g" /* sc_code */],
                data: {
                    person_id: this.userdata['data']['PERSON_ID'],
                    no_restitusi: this.nomorRestitusi,
                    status_restitusi: this.statusRestitusi,
                    tgl_pengajuan: this.startDate,
                    tgl_pengajuan_akhir: this.endDate,
                    atas: this.batasAtas,
                    bawah: this.batasBawah
                }
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.restitusiList = [];
                if (responData['data'].length > 0 && !_this.isEmptyObject(responData['data'][0])) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.restitusiList.push(responData['data'][i]);
                    }
                }
                console.log(_this.restitusiList);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            loading.dismiss();
            _this.isLoading = false;
        })
            .catch(function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
            _this.isLoading = false;
        });
    };
    SearchRestitusiPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchRestitusiPage.prototype.convertCurrency = function (money) {
        if (money != '') {
            var hasil = this.currencyPipe.transform(money, 'IDR');
            return hasil.substr(3);
        }
        else {
            return '0';
        }
    };
    SearchRestitusiPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    SearchRestitusiPage.prototype.clearField = function () {
        this.nomorRestitusi = '';
        this.statusRestitusi = '';
        this.startDate = '';
        this.endDate = '';
    };
    SearchRestitusiPage.prototype.checkFocus = function (data) {
        this.showDatePicker(data);
    };
    SearchRestitusiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-restitusi',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-restitusi/search-restitusi.html"*/'<!--\n\n  Generated template for the SearchRestitusiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title><span style="color:#FFF">Search Restitusi</span></ion-title>\n\n    <ion-buttons end>\n\n          <button ion-button icon-only (click)="closeModal()">\n\n            <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color:#F6F6F6">\n\n	<div class="appForm" class="divs">\n\n        <ion-list dining>                                                                  \n\n            <ion-item>\n\n                <span item-left>\n\n                    <img src="assets/img/home/restitusi.png" class="icons">\n\n                </span>       \n\n                <ion-input type="text" [(ngModel)]="nomorRestitusi" placeholder="Nomor Restitusi"></ion-input> \n\n            </ion-item> \n\n\n\n            <ion-item>\n\n                <span item-left>\n\n                    <img src="assets/img/home/document-icon.png" class="icons">\n\n                </span>       \n\n                <!-- <ion-input type="text" placeholder="Status Restitusi"></ion-input>  -->\n\n                <ion-select [(ngModel)]="statusRestitusi" placeholder="Status Restitusi">                    \n\n                    <ion-option value="Approve" >Approved</ion-option>\n\n                    <ion-option value="Reject" >Rejected</ion-option>\n\n                    <ion-option value="new" >New</ion-option>\n\n                    <ion-option value="Draft" >Draft</ion-option>\n\n                    <ion-option value="Submit" >Submit</ion-option>                    \n\n                </ion-select>\n\n            </ion-item> \n\n                        \n\n            <ion-item>\n\n                <span item-left>\n\n                    <img src="assets/img/home/time-icon.png" class="icons">\n\n                </span>                                 \n\n                <ion-input type="text" [readonly]="true" [(ngModel)]="startDate" (ionFocus)="checkFocus(1)" (click)="showDatePicker(1)" placeholder="Start Date"></ion-input>\n\n            </ion-item> \n\n\n\n            <ion-item>\n\n                <span item-left>\n\n                    <img src="assets/img/home/time-icon.png" class="icons">\n\n                </span>                                 \n\n                <ion-input type="text" [readonly]="true" [(ngModel)]="endDate" (ionFocus)="checkFocus(2)" (click)="showDatePicker(2)" placeholder="End Date"></ion-input>\n\n            </ion-item> \n\n            \n\n                               \n\n        </ion-list> \n\n        <ion-grid no-margin >\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <button ion-button block class="button" (click)="doSearch()" margin-top [disabled]="nomorRestitusi == \'\' && statusRestitusi == \'\' && tanggalPengajuan == \'\' ? true : false" >Cari</button>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <button ion-button block class="button" (click)="clearField()" margin-top>clear</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>                                    \n\n    </div>\n\n\n\n    <ion-list *ngIf="!isLoading"  class="dining_List"   > 	\n\n        <ion-item *ngIf="isEmptyObject(restitusiList[0])" tapplable>           \n\n            <div style="padding:7px"> \n\n                <span style="font-size:1.3rem;font-weight:500;text-align:center;" class="bold">Tidak ada data restitusi</span><br />                \n\n            </div>             \n\n        </ion-item>           \n\n        <div *ngIf="!isEmptyObject(restitusiList[0])">\n\n            <ion-item *ngFor="let restitusi of restitusiList" (click)="goToDetail(restitusi)" tapplable>\n\n                <span item-start>\n\n                    <img src="assets/img/home/restitusi.png" class="icons">\n\n                </span>\n\n                <div style="padding:7px"> \n\n                    <span style="font-size:1.3rem;font-weight:500" class="bold">{{ restitusi[\'NO_RESTITUSI\'] }}</span><br />\n\n                    <span style="font-size:1.3rem">{{ restitusi[\'TGL_PENGAJUAN\'] }}</span><br /> \n\n                    <div style="font-size:1.5rem;padding-top:6px"><span style="color:#F60">Rp. {{ convertCurrency(restitusi[\'JUMLAH\'])  }}</span></div>\n\n                </div> \n\n                <ion-badge *ngIf="restitusi[\'STATUS_RESTITUSI\'] != \'Reject\'" color="secondary" item-end>{{ restitusi[\'STATUS_RESTITUSI\'] }}</ion-badge>\n\n            <ion-badge *ngIf="restitusi[\'STATUS_RESTITUSI\'] == \'Reject\'" color="danger" item-end>{{ restitusi[\'STATUS_RESTITUSI\'] }}</ion-badge>\n\n            </ion-item>  \n\n        </div>            \n\n    </ion-list> \n\n     \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-restitusi/search-restitusi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SearchRestitusiPage);
    return SearchRestitusiPage;
}());

//# sourceMappingURL=search-restitusi.js.map

/***/ })

});
//# sourceMappingURL=19.js.map