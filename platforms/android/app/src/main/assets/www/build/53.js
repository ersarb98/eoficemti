webpackJsonp([53],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcContactHistoryPageModule", function() { return IpcContactHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ipc_contact_history__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IpcContactHistoryPageModule = /** @class */ (function () {
    function IpcContactHistoryPageModule() {
    }
    IpcContactHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ipc_contact_history__["a" /* IpcContactHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ipc_contact_history__["a" /* IpcContactHistoryPage */]),
            ],
        })
    ], IpcContactHistoryPageModule);
    return IpcContactHistoryPageModule;
}());

//# sourceMappingURL=ipc-contact-history.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpcContactHistoryPage; });
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
 * Generated class for the IpcContactHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IpcContactHistoryPage = /** @class */ (function () {
    function IpcContactHistoryPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    IpcContactHistoryPage.prototype.showModal = function (page) {
        var modal = this.modalCtrl.create(page, {}, {
            enableBackdropDismiss: true,
            showBackdrop: true,
            cssClass: 'my-modal2'
        });
        modal.present();
    };
    IpcContactHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IpcContactHistoryPage');
    };
    IpcContactHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ipc-contact-history',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/ipc-contact-history/ipc-contact-history.html"*/'<!--\n  Generated template for the EvalBawahanListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="!isSearch" >\n        <span ion-text color="light" class="fw500">HR Contact Histori</span>\n      </ion-title>\n\n      <ion-buttons end >\n          <button ion-button (click)="showModal(\'SearchIpcContactHistoryPage\')">\n            <ion-icon style="font-size:2.4rem;" name="md-search" color="danger"></ion-icon>\n          </button>      \n      </ion-buttons>\n    \n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content class="lightest-bg">\n  \n      <!-- <ion-row *ngIf="rencanaKerjaList.length == 0"> \n          <ion-col col-12 no-padding> \n            <ion-list class="dining_List"  >              \n                  <ion-item tapplable>                                 \n                    <p ion-text color="color2" class="text-sm bold">Tidak ada Data P2B</p>                     \n                  </ion-item>                    \n            </ion-list>            \n          </ion-col>            \n      </ion-row> -->\n  \n      <!-- <ion-row *ngIf="rencanaKerjaList.length != 0">\n        <ion-col col-12 no-padding> \n          <ion-list class="dining_List" *ngIf="rencanaKerjaList.length != 0" >              \n              <ion-item tapplable *ngFor="let rencanaKerja of rencanaKerjaList" (click)="goToDetail(rencanaKerja)">            \n                <h4 ion-text text-wrap color="dark" class="fw500">{{ rencanaKerja[\'Nama\'] }}</h4>\n                <h4 ion-text text-wrap color="dark" class="fw500">{{ convertMonths(rencanaKerja[\'Bulan\']) }}, {{ year }}</h4>\n                <p ion-text color="color2" class="text-sm bold">{{  rencanaKerja[\'Tanggal Entry\'] }} </p>                        \n                <ion-badge color="secondary" item-end>{{ rencanaKerja[\'Status\'] }}</ion-badge>            \n              </ion-item>                \n          </ion-list>            \n        </ion-col>\n      </ion-row> -->\n\n      <ion-list class="dining_List" >              \n          <ion-item tapplable>\n            <span item-start>\n                  <img src="assets/img/home/contact-icon.png" class="icons">\n            </span>            \n            <div style="padding:8px">\n                <span ion-text text-wrap class="font bold">SDM/1/2018</span><br />\n                <span ion-text text-wrap class="font2">Pertanyaan Terkait SDM</span><br />\n                <span ion-text text-wrap class="font">Kategori : <span class="font" style="color:#093">Payroll</span></span>                  \n            </div>\n            <ion-badge color="secondary" item-end>Download</ion-badge>  \n          </ion-item>\n          \n          <ion-item tapplable>\n            <span item-start>\n                  <img src="assets/img/home/contact-icon.png" class="icons">\n            </span>            \n            <div style="padding:8px">\n                <span ion-text text-wrap class="font bold">SDM/2/2018</span><br />\n                <span ion-text text-wrap class="font2">Pencairan bonus tahunan</span><br />\n                <span ion-text text-wrap class="font">Kategori : <span class="font" style="color:#093">Payroll</span></span>                  \n            </div>\n            <ion-badge color="secondary" item-end>Download</ion-badge>  \n          </ion-item>\n          \n          <ion-item tapplable>\n            <span item-start>\n                  <img src="assets/img/home/contact-icon.png" class="icons">\n            </span>            \n            <div style="padding:8px">\n                <span ion-text text-wrap class="font bold">SDM/3/2018</span><br />\n                <span ion-text text-wrap class="font2">Libur tambahan setelah lebaran</span><br />\n                <span ion-text text-wrap class="font">Kategori : <span class="font" style="color:#093">Payroll</span></span>                  \n            </div>\n            <ion-badge color="secondary" item-end>Download</ion-badge>  \n          </ion-item>     \n  \n                       \n      </ion-list>    \n      \n  </ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/ipc-contact-history/ipc-contact-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], IpcContactHistoryPage);
    return IpcContactHistoryPage;
}());

//# sourceMappingURL=ipc-contact-history.js.map

/***/ })

});
//# sourceMappingURL=53.js.map