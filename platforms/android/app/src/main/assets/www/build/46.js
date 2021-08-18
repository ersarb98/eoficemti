webpackJsonp([46],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(364);
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

/***/ 364:
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
            selector: 'page-home',template:/*ion-inline-start:"D:\Project\pos-ppi\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header no-border>\n\n  <ion-navbar color="color1">\n\n    <ion-title>\n\n      <img src="assets/imgs/ipc-tpk-logo.png" style="width:80px; padding-top: 4px;" />      \n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="logout()">\n\n        <ion-icon style="font-size:2.5rem;" name="md-settings" color="light"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="logout()">\n\n        <ion-icon style="font-size:2.5rem;" name="md-log-out" color="light"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-bottom>\n\n  <!-- <div class="my-header">\n\n    <div class="my-title" padding>\n\n      <span ion-text color="light">Mobile IVO TPK</span>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="img-container" (click)="goToHome2()">\n\n    <img src="../../assets/imgs/user-img.jpg" class="my-img" />\n\n  </div>\n\n\n\n  <div class="user-info">\n\n    <span ion-text class="user-info-name">John Van Deer Mor</span><br>\n\n    <span ion-text text-wrap class="user-info-jab">DVP Operasi dan Hubungan Internasional</span>\n\n  </div>\n\n\n\n  <div class="button-container">\n\n    <button ion-button round class="setting-button" (click)="goToSetting()">Setting</button>\n\n    <button ion-button round outline color="danger">Logout</button>\n\n  </div> -->\n\n\n\n  <div class="profile-container" (click)="goToHome2()">\n\n    <img src="../../assets/imgs/user-img.jpg" class="my-img" />\n\n\n\n    <div class="user-info">\n\n      <span ion-text class="user-info-name">John Van Deer Mor</span><br>\n\n      <span ion-text text-wrap class="user-info-jab">DVP Operasi dan Hubungan Internasional</span>\n\n    </div>\n\n  </div>\n\n\n\n  <ion-row>\n\n    <ion-col class="col-left">\n\n      <div>\n\n        <span ion-text text-wrap class="user-info-name" color="orange">25</span> <br>\n\n        <span ion-text text-wrap style="font-size:1.3rem; color: gray;">Belum dibaca</span>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col class="col-right">\n\n      <div>\n\n        <span ion-text text-wrap class="user-info-name" color="orange">7</span> <br>\n\n        <span ion-text text-wrap style="font-size:1.3rem; color: gray;">Approval</span>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div class="agenda-title-container">\n\n    <span ion-text text-wrap style="font-size:1.5rem;">\n\n      <b>Agenda anda saat ini</b>\n\n    </span>\n\n  </div>\n\n\n\n\n\n\n\n  <ion-slides pager="true" paginationType="bullets">\n\n    <ion-slide>\n\n      <ion-card class="my-card">\n\n        <ion-item>\n\n          <span ion-text text-wrap class="font-mini">\n\n            19 agustus 2019 08.00 - 09.00\n\n          </span> <br>\n\n          <span ion-text text-wrap class="font-mini">\n\n            Wisma SMR Lantai 10\n\n          </span>\n\n          <div style="\n\n                    width:100%;\n\n                    border-bottom: 1px solid white;\n\n                    padding: 5px;\n\n                    margin-bottom:5px;">\n\n          </div>\n\n          <span ion-text text-wrap class="font-small">\n\n            <b>Meeting Kick Off E-Office IPC TPK</b>\n\n          </span>\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-card class="my-card">\n\n        <ion-item>\n\n          <span ion-text text-wrap class="font-mini">\n\n            19 agustus 2019 08.00 - 09.00\n\n          </span> <br>\n\n          <span ion-text text-wrap class="font-mini">\n\n            Wisma SMR Lantai 10\n\n          </span>\n\n          <div style="\n\n                    width:100%;\n\n                    border-bottom: 1px solid lightgray;\n\n                    padding: 5px;\n\n                    margin-bottom:5px;">\n\n          </div>\n\n          <span ion-text text-wrap class="font-small">\n\n            <b>Meeting Kick Off E-Office IPC TPK</b>\n\n          </span>\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <div class="agenda-title-container">\n\n    <span ion-text text-wrap style="font-size:1.5rem;">\n\n      <b>Surat Menyurat</b>\n\n    </span>\n\n  </div>\n\n\n\n  <div class="menu-parent">\n\n    <div style="width: 33.3%" *ngFor="let item of suratMenu" tappable (click)="openPage(item.component)">\n\n      <div class="container-menu-4">\n\n        <img src="{{item.img}}" style="width: 35%; \n\n                height: auto;          \n\n                max-width: 35vw;">\n\n      </div>\n\n      <div align="center">\n\n        <span style="font-size:1.3rem !important"><b>{{item.title}}</b></span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <ion-card class="my-card-2">\n\n    <ion-item>\n\n      <div style="display: flex;align-items: center;">\n\n        <img src="assets/imgs/menu-icon/p2b-white.png" style="width: 10%;height: auto;          \n\n            max-width: 35vw;margin-right: 10px;">\n\n        <span ion-text text-wrap class="font-small">\n\n          <b>P2B</b>\n\n        </span>\n\n      </div>\n\n      <br>\n\n      <span ion-text text-wrap class="font-mini">\n\n        Karyawan dapat menambah, mengubah, submit serta melakukan approval P2B.\n\n      </span>\n\n\n\n      <button ion-button item-end round outline color="white" style="font-size:1.4rem;">BUKA</button>\n\n\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n\n\n  <div class="agenda-title-container">\n\n    <span ion-text text-wrap style="font-size:1.5rem;">\n\n      <b>Self Service</b>\n\n    </span>\n\n  </div>\n\n\n\n  <div class="menu-parent">\n\n    <div style="width: 25%" *ngFor="let item of selfServiceMenu.slice(0, 4);let i=index " tappable\n\n      (click)="openPage(item.component)">\n\n      <div class="container-menu-selfservice1-{{ i }}">\n\n        <img src="{{item.img}}" style="width: 40%; \n\n                height: auto;          \n\n                max-width: 35vw;">\n\n      </div>\n\n      <div align="center">\n\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="menu-parent">\n\n    <div style="width: 25%" *ngFor="let item of selfServiceMenu.slice(4, 8);let i=index " tappable\n\n      (click)="openPage(item.component)">\n\n      <div class="container-menu-selfservice2-{{ i }}">\n\n        <img src="{{item.img}}" style="width: 40%; \n\n                height: auto;          \n\n                max-width: 35vw;">\n\n      </div>\n\n      <div align="center">\n\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <!-- <div class="agenda-title-container">\n\n    <span ion-text text-wrap style="font-size:1.4rem;">\n\n      <b>P2B</b>\n\n    </span>\n\n  </div>\n\n\n\n\n\n  <div class="menu-parent">\n\n    <div style="width: 25%" *ngFor="let item of p2bMenu" tappable (click)="openPage(item.component)">\n\n      <div class="container-menu">\n\n        <img src="{{item.img}}" style="width: 50%; \n\n                  height: auto;          \n\n                  max-width: 35vw;">\n\n      </div>\n\n      <div align="center">\n\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n\n      </div>\n\n    </div>\n\n  </div> -->\n\n\n\n  <div class="agenda-title-container">\n\n    <span ion-text text-wrap style="font-size:1.5rem;">\n\n      <b>Budget Monitoring</b>\n\n    </span>\n\n  </div>\n\n\n\n  <div class="menu-parent">\n\n    <div style="width: 25%" *ngFor="let item of budgtMonitoringMenu" tappable (click)="openPage(item.component)">\n\n      <div class="container-menu">\n\n        <img src="{{item.img}}" style="width: 40%; \n\n                height: auto;          \n\n                max-width: 35vw;">\n\n      </div>\n\n      <div align="center">\n\n        <span style="font-size:1.3rem !important">{{item.title}}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Project\pos-ppi\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=46.js.map