webpackJsonp([65],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobaListPageModule", function() { return CobaListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coba_list__ = __webpack_require__(398);
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobaListPage; });
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
            selector: 'page-coba-list',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/coba-list/coba-list.html"*/'<!--\n  Generated template for the CobaListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cobaList</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card class="my-card">\n      <ion-item>\n        <div item-start >\n            <ion-checkbox [(ngModel)]="myModel" (ionChange)="checkEvent($event)" (click)="setchecked()" ></ion-checkbox>      \n            <span ion-text >test</span>\n        </div>\n        <ion-label>\n            <span ion-text text-wrap class="font-header">\n                <b>UM.330/16/10/3/SDM.PTP-19</b>\n              </span><br>\n      \n              <span ion-text text-wrap class="font-small">\n                DVP Sistem Informasi\n              </span><br>\n              <span color="gray" ion-text text-wrap class="font-mini">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n              </span><br>\n              <span ion-text text-wrap class="font-mini" color="primary">\n                14-OCT-19 | KIRIM\n              </span>\n              \n        </ion-label>\n            \n        <span item-end ion-text text-wrap class="font-mini" color="primary">\n            test\n          </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <span item-start>\n          <ion-icon name="mail" color="orange" class="msg-icon">\n          </ion-icon>\n        </span>\n        <span ion-text text-wrap class="font-header">\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n        </span><br>\n\n        <span ion-text text-wrap class="font-small">\n          DVP Sistem Informasi\n        </span><br>\n        <span color="gray" ion-text text-wrap class="font-mini">\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </span><br>\n        <span ion-text text-wrap class="font-mini" color="primary">\n          14-OCT-19 | KIRIM\n        </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <span item-start>\n          <ion-icon name="mail" color="orange" class="msg-icon">\n          </ion-icon>\n        </span>\n        <span ion-text text-wrap class="font-header">\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n        </span><br>\n\n        <span ion-text text-wrap class="font-small">\n          DVP Sistem Informasi\n        </span><br>\n        <span color="gray" ion-text text-wrap class="font-mini">\n          Lorem Ipsum is simply dummy text of the printing and typesetting.\n        </span><br>\n        <span ion-text text-wrap class="font-mini" color="primary">\n          14-OCT-19 | DISPOSISI\n        </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <span item-start>\n          <ion-icon name="mail" color="orange" class="msg-icon">\n          </ion-icon>\n        </span>\n        <span ion-text text-wrap class="font-header">\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n        </span><br>\n\n        <span ion-text text-wrap class="font-small">\n          DVP Sistem Informasi\n        </span><br>\n        <span color="gray" ion-text text-wrap class="font-mini">\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </span><br>\n        <span ion-text text-wrap class="font-mini" color="primary">\n          14-OCT-19 | KIRIM\n        </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <span item-start>\n          <ion-icon name="mail" color="orange" class="msg-icon">\n          </ion-icon>\n        </span>\n        <span ion-text text-wrap class="font-header">\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n        </span><br>\n\n        <span ion-text text-wrap class="font-small">\n          DVP Sistem Informasi\n        </span><br>\n        <span color="gray" ion-text text-wrap class="font-mini">\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </span><br>\n        <span ion-text text-wrap class="font-mini" color="primary">\n          14-OCT-19 | KIRIM\n        </span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <span item-start>\n          <ion-icon name="mail" color="orange" class="msg-icon">\n          </ion-icon>\n        </span>\n        <span ion-text text-wrap class="font-header">\n          <b>UM.330/16/10/3/SDM.PTP-19</b>\n        </span><br>\n\n        <span ion-text text-wrap class="font-small">\n          DVP Sistem Informasi\n        </span><br>\n        <span color="gray" ion-text text-wrap class="font-mini">\n          Lorem Ipsum is simply dummy text of the printing and typesetting.\n        </span><br>\n        <span ion-text text-wrap class="font-mini" color="primary">\n          14-OCT-19 | DISPOSISI\n        </span>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/coba-list/coba-list.html"*/,
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
//# sourceMappingURL=65.js.map