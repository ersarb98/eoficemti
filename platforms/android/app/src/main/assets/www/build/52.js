webpackJsonp([52],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcContactListSecondPageModule", function() { return IpcContactListSecondPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ipc_contact_list_second__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IpcContactListSecondPageModule = /** @class */ (function () {
    function IpcContactListSecondPageModule() {
    }
    IpcContactListSecondPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ipc_contact_list_second__["a" /* IpcContactListSecondPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ipc_contact_list_second__["a" /* IpcContactListSecondPage */]),
            ],
        })
    ], IpcContactListSecondPageModule);
    return IpcContactListSecondPageModule;
}());

//# sourceMappingURL=ipc-contact-list-second.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpcContactListSecondPage; });
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
 * Generated class for the IpcContactListSecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IpcContactListSecondPage = /** @class */ (function () {
    function IpcContactListSecondPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    IpcContactListSecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IpcContactListSecondPage');
    };
    IpcContactListSecondPage.prototype.openModal = function (modalPage) {
        var modal = this.modalCtrl.create(modalPage, {}, {});
        modal.present();
        modal.onDidDismiss(function (data) {
            // console.log(data);               
        });
    };
    IpcContactListSecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ipc-contact-list-second',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/ipc-contact-list-second/ipc-contact-list-second.html"*/'<!--\n  Generated template for the EvalBawahanListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!isSearch" >\n      <span ion-text color="light" class="fw500">IPC Contact</span>\n    </ion-title>      \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="lightest-bg" style="background-color:#F6F6F6">\n  <ion-list class="dining_List" > \n      <ion-item tapplable>            \n          <div style="padding:7px">\n              <span class="font">\n                  Tidak ada data pertanyaan\n              </span><br />\n          </div>            \n      </ion-item>                              \n  </ion-list>            \n        \n  <ion-fab right bottom style="right:20px;bottom:20px;"> \n    <button ion-fab color="orange" (click)="openModal(\'AddQuestionIpcContactSecondPage\')" ><ion-icon name="add"></ion-icon></button>\n   \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/ipc-contact-list-second/ipc-contact-list-second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], IpcContactListSecondPage);
    return IpcContactListSecondPage;
}());

//# sourceMappingURL=ipc-contact-list-second.js.map

/***/ })

});
//# sourceMappingURL=52.js.map