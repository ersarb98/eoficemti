webpackJsonp([69],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBawahanPageModule", function() { return AddressBawahanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_bawahan__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressBawahanPageModule = /** @class */ (function () {
    function AddressBawahanPageModule() {
    }
    AddressBawahanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address_bawahan__["a" /* AddressBawahanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address_bawahan__["a" /* AddressBawahanPage */]),
            ],
        })
    ], AddressBawahanPageModule);
    return AddressBawahanPageModule;
}());

//# sourceMappingURL=address-bawahan.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressBawahanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(202);
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
 * Generated class for the AddressBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressBawahanPage = /** @class */ (function () {
    function AddressBawahanPage(navCtrl, navParams, soapService, storage, datepipe, http, alertCtrl, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.storage = storage;
        this.datepipe = datepipe;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = false;
        this.fakeUsers = new Array(5);
        this.addressData = [];
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK);
            _this.getData('first', '');
        });
    }
    AddressBawahanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressBawahanPage');
    };
    AddressBawahanPage.prototype.getData = function (type, functionName) {
        var _this = this;
        this.isLoading = true;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */] + "am9_address.php", {
            "usernameEDI": "EDI-USERNAME",
            "passwordEDI": "RURJLVBBU1NXT1JE",
            "id_user": this.userdataTPK['data']['IDUSER'],
            "nipp": this.userdataTPK['data']['NIPP'],
            "id_jabatan": this.userdataTPK['data']['IDJABATAN'],
            "longitude": "",
            "latitude": "",
            "action": "get_address_bawahan",
            "status": ""
        }, {}).subscribe(function (data) {
            console.log(data);
            if (data['rcmsg'] == "SUCCESS") {
                _this.addressData = data['data'];
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan data, coba kembali.',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.navCtrl.pop();
            }
            console.log(_this.addressData);
            if (type == 'first' && functionName == '') {
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan data, coba kembali.',
                buttons: ['OK']
            });
            alert.present();
            _this.isLoading = false;
            _this.navCtrl.pop();
        });
    };
    AddressBawahanPage.prototype.doAction = function (address) {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Pilih Action ?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'APPROVE',
                    handler: function () {
                        _this.action('APPROVED', address);
                    }
                },
                {
                    text: 'REJECT',
                    handler: function () {
                        _this.action('REJECTED', address);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    AddressBawahanPage.prototype.action = function (status, address) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Memproses...",
            spinner: 'dots',
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loader.present();
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */] + "am9_address.php", {
            "usernameEDI": "EDI-USERNAME",
            "passwordEDI": "RURJLVBBU1NXT1JE",
            "id_user": '',
            "nipp": address['NIPP'],
            "id_jabatan": '',
            "longitude": address['LONGITUDE'],
            "latitude": address['LATITUDE'],
            "action": "update",
            "status": status
        }, {}).subscribe(function (data) {
            console.log(data);
            if (data['rcmsg'] == "SUCCESS") {
                var toast = _this.toastCtrl.create({
                    message: "berhasil " + status,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.addressData.splice(_this.addressData.indexOf(address), 1);
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal melakukan action, coba kembali.',
                    buttons: ['OK']
                });
                alert_2.present();
            }
            console.log(_this.addressData);
            loader.dismiss();
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal melakukan action, coba kembali.',
                buttons: ['OK']
            });
            alert.present();
            loader.dismiss();
        });
    };
    AddressBawahanPage.prototype.doRefresh = function (refresher) {
        this.addressData = [];
        this.getData('refresh', refresher);
    };
    AddressBawahanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-address-bawahan',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/address-bawahan/address-bawahan.html"*/'<!--\n  Generated template for the AddressBawahanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Request Approval</span>\n    </ion-title>   \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="dining_List" *ngIf="addressData.length == 0  && isLoading == false">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada Request Approval Domisili.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="addressData.length != 0 && isLoading == false">\n    <ion-card *ngFor="let address of addressData" class="my-card" (click)="doAction(address)">\n      <!-- <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] == null" src="{{absen[\'CHECK_IN_PHOTO\']}}" class="foto">\n      <img *ngIf="absen[\'CHECK_IN\'] == null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_OUT_PHOTO\']}}" class="foto">\n      <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_IN_PHOTO\']}}" class="foto"> -->\n      <ion-item>       \n        <span ion-text text-wrap class="font2"><b>{{ address[\'NAMA\'] }}</b></span><br>\n        <span ion-text text-wrap style="font-size:1.2rem;color:gray;">\n          {{ address[\'NM_JABATAN\'] }}\n        </span><br> \n        <!-- <table>\n          <tr>\n            <td width="10%" align="left" valign="top"> \n              <img class="pin-icon" src="assets/flat-icon/pin.png" /> \n            </td>\n            <td> \n              <span ion-text text-wrap style="font-size:1.2rem;">\n                {{ address[\'GEOLOCATION\'] }}\n              </span>\n          </td>\n          </tr>\n        </table>    -->\n        <span ion-text text-wrap style="font-size:1.2rem;color:gray;">\n          Lokasi Domisili :\n        </span><br> \n        <span ion-text text-wrap style="font-size:1.2rem;">\n          {{ address[\'GEOLOCATION\'] }}\n        </span>\n        <ion-badge item-end color="secondary">{{ address[\'STATUS\'] }}</ion-badge>\n        \n       \n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'addressData.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/address-bawahan/address-bawahan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AddressBawahanPage);
    return AddressBawahanPage;
}());

//# sourceMappingURL=address-bawahan.js.map

/***/ })

});
//# sourceMappingURL=69.js.map