webpackJsonp([49],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.suratMenu = [];
        this.p2bMenu = [];
        this.budgtMonitoringMenu = [];
        this.selfServiceMenu = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.suratMenu = [
            { img: 'assets/imgs/menu-icon/inbox-white.png', title: 'Surat Masuk', component: 'InboxPage' },
            { img: 'assets/imgs/menu-icon/outbox-white.png', title: 'Surat Keluar', component: 'OutboxPage' },
            { img: 'assets/imgs/menu-icon/sppd-white.png', title: 'SPPD', component: 'AbsenListPage' }
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
            { img: 'assets/imgs/menu-icon/survey_white.png', title: 'Survey', component: 'AbsenListPage' },
            { img: 'assets/imgs/menu-icon/helpdesk_white.png', title: 'Helpdesk', component: 'AbsenListPage' },
            { img: 'assets/imgs/menu-icon/hrcontact_white.png', title: 'HR Contact Center', component: 'AbsenListPage' },
            { img: 'assets/imgs/menu-icon/search_white.png', title: 'Cari Pegawai', component: 'AbsenListPage' }
        ];
    };
    HomePage.prototype.openPage = function (item) {
        this.navCtrl.push(item);
    };
    HomePage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    HomePage.prototype.goToHome2 = function () {
        this.navCtrl.push('Home2Page');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n  <ion-navbar color="color1">\n    <ion-title>\n      <img src="assets/imgs/ipc-tpk-logo.png" style="width:80px; padding-top: 4px;" />      \n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon style="font-size:2.5rem;" name="md-settings" color="light"></ion-icon>\n      </button>\n      <button ion-button (click)="logout()">\n        <ion-icon style="font-size:2.5rem;" name="md-log-out" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-bottom>\n  <!-- <div class="my-header">\n    <div class="my-title" padding>\n      <span ion-text color="light">Mobile IVO TPK</span>\n    </div>\n  </div>\n\n  <div class="img-container" (click)="goToHome2()">\n    <img src="../../assets/imgs/user-img.jpg" class="my-img" />\n  </div>\n\n  <div class="user-info">\n    <span ion-text class="user-info-name">John Van Deer Mor</span><br>\n    <span ion-text text-wrap class="user-info-jab">DVP Operasi dan Hubungan Internasional</span>\n  </div>\n\n  <div class="button-container">\n    <button ion-button round class="setting-button" (click)="goToSetting()">Setting</button>\n    <button ion-button round outline color="danger">Logout</button>\n  </div> -->\n\n  <div class="profile-container" (click)="goToHome2()">\n    <img src="../../assets/imgs/user-img.jpg" class="my-img" />\n\n    <div class="user-info">\n      <span ion-text class="user-info-name">John Van Deer Mor</span><br>\n      <span ion-text text-wrap class="user-info-jab">DVP Operasi dan Hubungan Internasional</span>\n    </div>\n  </div>\n\n  <ion-row>\n    <ion-col class="col-left">\n      <div>\n        <span ion-text text-wrap class="user-info-name" color="orange">25</span> <br>\n        <span ion-text text-wrap style="font-size:1.3rem; color: gray;">Belum dibaca</span>\n      </div>\n    </ion-col>\n    <ion-col class="col-right">\n      <div>\n        <span ion-text text-wrap class="user-info-name" color="orange">7</span> <br>\n        <span ion-text text-wrap style="font-size:1.3rem; color: gray;">Approval</span>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>Agenda anda saat ini</b>\n    </span>\n  </div>\n\n\n\n  <ion-slides pager="true" paginationType="bullets">\n    <ion-slide>\n      <ion-card class="my-card">\n        <ion-item>\n          <span ion-text text-wrap class="font-mini">\n            19 agustus 2019 08.00 - 09.00\n          </span> <br>\n          <span ion-text text-wrap class="font-mini">\n            Wisma SMR Lantai 10\n          </span>\n          <div style="\n                    width:100%;\n                    border-bottom: 1px solid white;\n                    padding: 5px;\n                    margin-bottom:5px;">\n          </div>\n          <span ion-text text-wrap class="font-small">\n            <b>Meeting Kick Off E-Office IPC TPK</b>\n          </span>\n        </ion-item>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card class="my-card">\n        <ion-item>\n          <span ion-text text-wrap class="font-mini">\n            19 agustus 2019 08.00 - 09.00\n          </span> <br>\n          <span ion-text text-wrap class="font-mini">\n            Wisma SMR Lantai 10\n          </span>\n          <div style="\n                    width:100%;\n                    border-bottom: 1px solid lightgray;\n                    padding: 5px;\n                    margin-bottom:5px;">\n          </div>\n          <span ion-text text-wrap class="font-small">\n            <b>Meeting Kick Off E-Office IPC TPK</b>\n          </span>\n        </ion-item>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>Surat Menyurat</b>\n    </span>\n  </div>\n\n  <div class="menu-parent">\n    <div style="width: 33.3%" *ngFor="let item of suratMenu" tappable (click)="openPage(item.component)">\n      <div class="container-menu-4">\n        <img src="{{item.img}}" style="width: 35%; \n                height: auto;          \n                max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important"><b>{{item.title}}</b></span>\n      </div>\n    </div>\n  </div>\n\n  <ion-card class="my-card-2">\n    <ion-item>\n      <div style="display: flex;align-items: center;">\n        <img src="assets/imgs/menu-icon/p2b-white.png" style="width: 10%;height: auto;          \n            max-width: 35vw;margin-right: 10px;">\n        <span ion-text text-wrap class="font-small">\n          <b>P2B</b>\n        </span>\n      </div>\n      <br>\n      <span ion-text text-wrap class="font-mini">\n        Karyawan dapat menambah, mengubah, submit serta melakukan approval P2B.\n      </span>\n\n      <button ion-button item-end round outline color="white" style="font-size:1.4rem;">BUKA</button>\n\n    </ion-item>\n  </ion-card>\n\n\n  <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>Self Service</b>\n    </span>\n  </div>\n\n  <div class="menu-parent">\n    <div style="width: 25%" *ngFor="let item of selfServiceMenu.slice(0, 4);let i=index " tappable\n      (click)="openPage(item.component)">\n      <div class="container-menu-selfservice1-{{ i }}">\n        <img src="{{item.img}}" style="width: 40%; \n                height: auto;          \n                max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class="menu-parent">\n    <div style="width: 25%" *ngFor="let item of selfServiceMenu.slice(4, 8);let i=index " tappable\n      (click)="openPage(item.component)">\n      <div class="container-menu-selfservice2-{{ i }}">\n        <img src="{{item.img}}" style="width: 40%; \n                height: auto;          \n                max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.4rem;">\n      <b>P2B</b>\n    </span>\n  </div>\n\n\n  <div class="menu-parent">\n    <div style="width: 25%" *ngFor="let item of p2bMenu" tappable (click)="openPage(item.component)">\n      <div class="container-menu">\n        <img src="{{item.img}}" style="width: 50%; \n                  height: auto;          \n                  max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n      </div>\n    </div>\n  </div> -->\n\n  <div class="agenda-title-container">\n    <span ion-text text-wrap style="font-size:1.5rem;">\n      <b>Budget Monitoring</b>\n    </span>\n  </div>\n\n  <div class="menu-parent">\n    <div style="width: 25%" *ngFor="let item of budgtMonitoringMenu" tappable (click)="openPage(item.component)">\n      <div class="container-menu">\n        <img src="{{item.img}}" style="width: 40%; \n                height: auto;          \n                max-width: 35vw;">\n      </div>\n      <div align="center">\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=49.js.map