webpackJsonp([49],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobaListPageModule", function() { return CobaListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coba_list__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CobaListPageModule = /** @class */ (function () {
    function CobaListPageModule() {
    }
    CobaListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coba_list__["a" /* CobaListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coba_list__["a" /* CobaListPage */]),
            ],
        })
    ], CobaListPageModule);
    return CobaListPageModule;
}());

//# sourceMappingURL=coba-list.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobaListPage; });
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
 * Generated class for the CobaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CobaListPage = /** @class */ (function () {
    function CobaListPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.myModel = true;
    }
    CobaListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CobaListPage');
    };
    CobaListPage.prototype.checkEvent = function (event) {
        var _this = this;
        if (event.checked == true) {
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm',
                message: 'Do you want to uncheck ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            // console.log('Cancel clicked');
                            _this.myModel = true;
                        }
                    },
                    {
                        text: 'YA',
                        handler: function () {
                            // console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    CobaListPage.prototype.setchecked = function () {
        // console.log('test');
    };
    CobaListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-coba-list',template:/*ion-inline-start:"D:\Project\pos-ppi\src\pages\coba-list\coba-list.html"*/'<!--\n\n  Generated template for the CobaListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>cobaList</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-card class="my-card">\n\n      <ion-item>\n\n        <div item-start >\n\n            <ion-checkbox [(ngModel)]="myModel" (ionChange)="checkEvent($event)" (click)="setchecked()" ></ion-checkbox>      \n\n            <span ion-text >test</span>\n\n        </div>\n\n        <ion-label>\n\n            <span ion-text text-wrap class="font-header">\n\n                <b>UM.330/16/10/3/SDM.PTP-19</b>\n\n              </span><br>\n\n      \n\n              <span ion-text text-wrap class="font-small">\n\n                DVP Sistem Informasi\n\n              </span><br>\n\n              <span color="gray" ion-text text-wrap class="font-mini">\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n              </span><br>\n\n              <span ion-text text-wrap class="font-mini" color="primary">\n\n                14-OCT-19 | KIRIM\n\n              </span>\n\n              \n\n        </ion-label>\n\n            \n\n        <span item-end ion-text text-wrap class="font-mini" color="primary">\n\n            test\n\n          </span>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card class="my-card">\n\n      <ion-item>\n\n        <span item-start>\n\n          <ion-icon name="mail" color="orange" class="msg-icon">\n\n          </ion-icon>\n\n        </span>\n\n        <span ion-text text-wrap class="font-header">\n\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n\n        </span><br>\n\n\n\n        <span ion-text text-wrap class="font-small">\n\n          DVP Sistem Informasi\n\n        </span><br>\n\n        <span color="gray" ion-text text-wrap class="font-mini">\n\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="primary">\n\n          14-OCT-19 | KIRIM\n\n        </span>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card class="my-card">\n\n      <ion-item>\n\n        <span item-start>\n\n          <ion-icon name="mail" color="orange" class="msg-icon">\n\n          </ion-icon>\n\n        </span>\n\n        <span ion-text text-wrap class="font-header">\n\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n\n        </span><br>\n\n\n\n        <span ion-text text-wrap class="font-small">\n\n          DVP Sistem Informasi\n\n        </span><br>\n\n        <span color="gray" ion-text text-wrap class="font-mini">\n\n          Lorem Ipsum is simply dummy text of the printing and typesetting.\n\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="primary">\n\n          14-OCT-19 | DISPOSISI\n\n        </span>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card class="my-card">\n\n      <ion-item>\n\n        <span item-start>\n\n          <ion-icon name="mail" color="orange" class="msg-icon">\n\n          </ion-icon>\n\n        </span>\n\n        <span ion-text text-wrap class="font-header">\n\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n\n        </span><br>\n\n\n\n        <span ion-text text-wrap class="font-small">\n\n          DVP Sistem Informasi\n\n        </span><br>\n\n        <span color="gray" ion-text text-wrap class="font-mini">\n\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="primary">\n\n          14-OCT-19 | KIRIM\n\n        </span>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card class="my-card">\n\n      <ion-item>\n\n        <span item-start>\n\n          <ion-icon name="mail" color="orange" class="msg-icon">\n\n          </ion-icon>\n\n        </span>\n\n        <span ion-text text-wrap class="font-header">\n\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n\n        </span><br>\n\n\n\n        <span ion-text text-wrap class="font-small">\n\n          DVP Sistem Informasi\n\n        </span><br>\n\n        <span color="gray" ion-text text-wrap class="font-mini">\n\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="primary">\n\n          14-OCT-19 | KIRIM\n\n        </span>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card class="my-card">\n\n      <ion-item>\n\n        <span item-start>\n\n          <ion-icon name="mail" color="orange" class="msg-icon">\n\n          </ion-icon>\n\n        </span>\n\n        <span ion-text text-wrap class="font-header">\n\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n\n        </span><br>\n\n\n\n        <span ion-text text-wrap class="font-small">\n\n          DVP Sistem Informasi\n\n        </span><br>\n\n        <span color="gray" ion-text text-wrap class="font-mini">\n\n          Lorem Ipsum is simply dummy text of the printing and typesetting.\n\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="primary">\n\n          14-OCT-19 | DISPOSISI\n\n        </span>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Project\pos-ppi\src\pages\coba-list\coba-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CobaListPage);
    return CobaListPage;
}());

//# sourceMappingURL=coba-list.js.map

/***/ })

});
//# sourceMappingURL=49.js.map