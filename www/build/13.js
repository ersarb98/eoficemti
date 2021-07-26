webpackJsonp([13],{

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMorePageModule", function() { return ShowMorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_more__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowMorePageModule = /** @class */ (function () {
    function ShowMorePageModule() {
    }
    ShowMorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_more__["a" /* ShowMorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_more__["a" /* ShowMorePage */]),
            ],
        })
    ], ShowMorePageModule);
    return ShowMorePageModule;
}());

//# sourceMappingURL=show-more.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowMorePage; });
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
 * Generated class for the ShowMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowMorePage = /** @class */ (function () {
    function ShowMorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.suratMenu = [];
        this.p2bMenu = [];
        this.budgtMonitoringMenu = [];
        this.selfServiceMenu = [];
        this.suratMenu = [
            { img: 'assets/imgs/menu-icon/inbox.png', title: 'Surat Masuk', component: 'InboxPage' },
            { img: 'assets/imgs/menu-icon/outbox.png', title: 'Surat Keluar', component: 'OutboxPage' },
            { img: 'assets/imgs/menu-icon/sppd.png', title: 'SPPD', component: 'AbsenListPage' }
        ];
        this.p2bMenu = [
            { img: 'assets/imgs/menu-icon/p2b.png', title: 'P2B', component: 'CutiListPage' }
        ];
        this.budgtMonitoringMenu = [
            { img: 'assets/imgs/menu-icon/approval-prpo.png', title: 'Approval PR/PO', component: 'CutiListPage' },
            { img: 'assets/imgs/menu-icon/uang-muka.png', title: 'Pengajuan Uang Muka', component: 'CutiListPage' }
        ];
        this.selfServiceMenu = [
            { img: 'assets/imgs/menu-icon/absensi_white.png', title: 'Absensi', component: 'InboxPage' },
            { img: 'assets/imgs/menu-icon/cuti_white.png', title: 'Izin/Cuti', component: 'OutboxPage' },
            { img: 'assets/imgs/menu-icon/payslip_white.png', title: 'Payslip', component: 'AbsenListPage' },
            { img: 'assets/imgs/menu-icon/survey_white.png', title: 'Survey', component: 'showMore' },
            { img: 'assets/imgs/menu-icon/helpdesk_white.png', title: 'Helpdesk', component: 'AbsenListPage' },
            { img: 'assets/imgs/menu-icon/hrcontact_white.png', title: 'HR Contact Center', component: 'AbsenListPage' },
            { img: 'assets/imgs/menu-icon/search_white.png', title: 'Cari Pegawai', component: 'AbsenListPage' }
        ];
    }
    ShowMorePage.prototype.ionViewDidEnter = function () {
    };
    ShowMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-show-more',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/show-more/show-more.html"*/'<!--\n  Generated template for the ShowMorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <!-- <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>Surat Menyurat</b>\n    </span>\n  </div>\n\n  <div class="menu-parent">\n    <div style="width: 25%" *ngFor="let item of suratMenu" tappable (click)="openPage(item.component)">\n      <div class="container-menu">\n        <img src="{{item.img}}" style="width: 45%; \n                    height: auto;          \n                    max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n      </div>\n    </div>\n  </div> -->\n\n  <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>Self Service</b>\n    </span>\n  </div>\n\n  <div class="menu-parent">\n    <div style="width: 25%" *ngFor="let item of selfServiceMenu.slice(0, 4);let i=index " tappable\n      (click)="openPage(item.component)">\n      <div class="container-menu1-{{i}}">\n        <img src="{{item.img}}" style="width: 40%; \n                height: auto;          \n                max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class="menu-parent">\n    <div style="width: 25%" *ngFor="let item of selfServiceMenu.slice(4, 8);let i=index " tappable\n      (click)="openPage(item.component)">\n      <div class="container-menu2-{{i}}">\n        <img src="{{item.img}}" style="width: 40%; \n                height: auto;          \n                max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>Budget Monitoring</b>\n    </span>\n  </div>\n\n  <div class="menu-parent">\n    <div style="width: 25%" *ngFor="let item of budgtMonitoringMenu; let i=index" tappable (click)="openPage(item.component)">\n      <div class="container-menu3-{{i}}">\n        <img src="{{item.img}}" style="width: 40%; \n                height: auto;          \n                max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/show-more/show-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ShowMorePage);
    return ShowMorePage;
}());

//# sourceMappingURL=show-more.js.map

/***/ })

});
//# sourceMappingURL=13.js.map