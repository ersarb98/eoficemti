webpackJsonp([47],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { api_base_url } from '../../config';
// import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, platform, formBuilder, loadingCtrl, alertCtrl, storage, toastCtrl, soapService, oneSignal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.soapService = soapService;
        this.oneSignal = oneSignal;
        this.isValid = true;
        this.formLogin = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            swipe: [false, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (!this.formLogin.valid) {
            this.isValid = false;
            this.errorMessage = ' *Username dan Password harus diisi';
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
                content: "Mohon Tunggu...",
                cssClass: 'transparent',
                dismissOnPageChange: true
            });
            loading_1.present();
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_login', {
                fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                    username: this.formLogin.controls.username.value,
                    password: this.formLogin.controls.password.value
                })
            })
                .then(function (result) {
                _this.responData = JSON.parse(String(result));
                console.log(_this.responData);
                if (_this.responData['rcmsg'] == "SUCCESS") {
                    if (_this.responData['data']['login_status'] == '404 Not Found') {
                        _this.isValid = false;
                        _this.errorMessage = ' *Username atau Password Salah';
                        loading_1.dismiss();
                    }
                    else if (_this.responData['data'] == undefined) {
                        _this.isValid = false;
                        _this.errorMessage = ' *Username atau Password Salah';
                        loading_1.dismiss();
                    }
                    else if (_this.responData['data']['login_status'] == 'AP NOT ALLOWED') {
                        _this.isValid = false;
                        _this.errorMessage = ' *Login Hanya Untuk Pusat dan Cabang';
                        loading_1.dismiss();
                    }
                    else {
                        _this.isValid = true;
                        _this.storage.set('userdataTPK', _this.responData);
                        if (_this.platform.is('cordova')) {
                            _this.registerOneSignal(loading_1);
                            loading_1.dismiss();
                            _this.navCtrl.setRoot('Home3Page');
                        }
                        else {
                            loading_1.dismiss();
                            _this.navCtrl.setRoot('Home3Page');
                        }
                    }
                }
                else if (_this.responData['rcmsg'] == "User not found") {
                    _this.isValid = false;
                    _this.errorMessage = ' *Username Anda Tidak Terdaftar di IVO';
                    loading_1.dismiss();
                }
                else {
                    _this.isValid = false;
                    _this.errorMessage = ' *Username atau Password Salah';
                    loading_1.dismiss();
                }
            })
                .catch(function (error) {
                _this.isValid = false;
                _this.errorMessage = ' *Login Gagal, Periksa Koneksi Internet Anda';
                loading_1.dismiss();
            });
        }
    };
    LoginPage.prototype.registerOneSignal = function (loading) {
        var _this = this;
        this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_3__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_3__config__["h" /* sender_id */]);
        var notificationOpenedCallback = function (jsonData) {
        };
        this.oneSignal.getIds().then(function (id) {
            _this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_regis_notif_user', {
                fStream: JSON.stringify({
                    id_user: _this.responData['data']['IDUSER'],
                    nipp: _this.responData['data']['NIPP'],
                    player_ids: id.userId,
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */]
                })
            }).then(function (result) {
                _this.responData = JSON.parse(String(result));
                loading.dismiss();
                _this.navCtrl.setRoot('Home3Page');
            }).catch(function (error) {
                _this.errorMessage = ' *Login Gagal, Silahkan Coba Kembali.';
                loading.dismiss();
            });
        });
        this.oneSignal.endInit();
    };
    LoginPage.prototype.disableButton = function () {
        if (this.formLogin.valid == false) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/login/login.html"*/'<ion-content padding class="login-bg" scrollX="false" scrollY="false">\n  <div class="grand-parent-contaniner">\n    <div class="parent-container">\n      <div class="bg-color">\n        <img id="logo" src="assets/imgs/ipc-tpk-logo.png" />\n        <br>        \n        <div text-center style="margin-bottom:15px;">\n          <span ion-text color="dark" style="font-size: 2.1rem;font-weight: bold;">E-Office IPCTPK</span>\n          <br>\n          <span ion-text color="color4" style="font-size: 1.4rem;">Masukkan NIPP dan password anda</span>\n        </div>\n        <div id="login-form">\n          <form [formGroup]="formLogin" class="item-login" (ngSubmit)="doLogin()">\n            <div class="input-item">\n              <ion-item no-lines>\n                <!-- <ion-label class="login-label" color="dark" stacked>Username</ion-label> -->\n                <ion-icon name="person" item-left no-margin class="my-icons" color="danger"></ion-icon>\n                <ion-input type="text" formControlName="username" placeholder="Username"></ion-input>\n              </ion-item>\n              <ion-item no-lines>\n                <!-- <ion-label class="login-label" color="dark" stacked>Password</ion-label> -->\n                <ion-icon name="lock" item-left no-margin class="my-icons" color="danger"></ion-icon>\n                <ion-input type="password" formControlName="password" placeholder="Password"></ion-input>\n              </ion-item>\n            </div>            \n            <!-- <div text-center>\n              <span ion-text text-wrap style="font-size: 1.3rem;" color="dark">swipe to right to confirm your are not robot</span> <br><br>\n              <input type="range" type="range" min="1" max="10" value="1" class="my-slider" />\n            </div> -->\n            <div class="swipe-cont" >\n              <ion-item no-lines>\n                <ion-label ion-text text-wrap style="font-size: 1.3rem;">Swipe to right to confirm you are not robot\n                </ion-label>\n                <ion-toggle formControlName="swipe"></ion-toggle>swipe\n              </ion-item>\n            </div>\n\n            <br>\n\n            <span ion-text text-wrap color="color6">{{errorMessage}}</span>\n\n            <button margin-top class="login-button" ion-button icon-start block color="danger" tappable type="submit"  [disabled]="disableButton()" >\n              <ion-icon name="log-in"></ion-icon>\n              Login\n            </button>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=47.js.map