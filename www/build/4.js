webpackJsonp([4],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcContactDetailPageModule", function() { return IpcContactDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ipc_contact_detail__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IpcContactDetailPageModule = /** @class */ (function () {
    function IpcContactDetailPageModule() {
    }
    IpcContactDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ipc_contact_detail__["a" /* IpcContactDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ipc_contact_detail__["a" /* IpcContactDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], IpcContactDetailPageModule);
    return IpcContactDetailPageModule;
}());

//# sourceMappingURL=ipc-contact-detail.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(379);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(377);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(377);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpcContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
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







/**
 * Generated class for the IpcContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IpcContactDetailPage = /** @class */ (function () {
    function IpcContactDetailPage(navCtrl, navParams, storage, loadingCtrl, alertCtrl, soapService, currencyPipe, modalCtrl, oneSignal, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.currencyPipe = currencyPipe;
        this.modalCtrl = modalCtrl;
        this.oneSignal = oneSignal;
        this.toastCtrl = toastCtrl;
        this.komentar = '';
        this.isLoading = true;
        this.modul = navParams.get('modul');
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_3__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_3__config__["h" /* sender_id */]);
        oneSignal.endInit();
        storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
        this.data = navParams.get('data');
        // console.log(this.data);
        this.getDetail();
    }
    IpcContactDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IpcContactDetailPage');
    };
    IpcContactDetailPage.prototype.getDetail = function () {
        var _this = this;
        this.loadingPresent();
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_data_detail_ipcc', {
            fStream: JSON.stringify({
                // sc_type: 'restitusidtl',
                // sc_code: sc_code,        
                // data : {
                //   restitusi_id : this.restitusi['RESTITUSI_ID']
                // }  
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                id_pengajuan: this.data['ID_PENGAJUAN']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.ipcContactDetail = [];
                _this.ipcContactDetail = responData['data'];
                // console.log(this.ipcContactDetail);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.loadingDismiss();
            _this.isLoading = false;
        })
            .catch(function (error) {
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.loadingDismiss();
            _this.isLoading = false;
        });
    };
    IpcContactDetailPage.prototype.sendAnswer = function () {
        var _this = this;
        // console.log(this.userdataTPK['data']['NIPP']);
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_pengajuan_replay_ipcc', {
            fStream: JSON.stringify({
                // sc_type: 'restitusidtl',
                // sc_code: sc_code,        
                // data : {
                //   restitusi_id : this.restitusi['RESTITUSI_ID']
                // }  
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                replay_nipp: this.userdataTPK['data']['NIPP'],
                id_pengajuan: this.data['ID_PENGAJUAN'],
                isi: this.komentar
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.getDetail();
                if (_this.ipcContactDetail[0]['FROM_NIPP'] == _this.userdataTPK['data']['NIPP']) {
                    _this.sendNotif(_this.ipcContactDetail[0]['KATEGORI'], 'toadmin');
                }
                else if (_this.ipcContactDetail[0]['FROM_NIPP'] != _this.userdataTPK['data']['NIPP']) {
                    _this.sendNotif(_this.ipcContactDetail[0]['FROM_NIPP'], 'touser');
                }
                _this.komentar = '';
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
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    IpcContactDetailPage.prototype.sendNotif = function (data, type) {
        var _this = this;
        var title = '';
        if (this.modul == 'hr_contact') {
            title = 'HR Contact';
        }
        else if (this.modul == 'helpdesk') {
            title = 'Helpdesk';
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                nipp: type == 'touser' ? [data] : [],
                data: {
                    "res": "IpcContactDetailPage",
                    "data": this.data
                },
                content: {
                    "en": "Permasalahan mendapatkan balasan dari " + this.userdataTPK['data']['NAMA']
                },
                heading: {
                    "en": title
                },
                id_kategori: type == 'toadmin' ? data : ""
            })
        }).then(function (result) {
            var hasil = JSON.parse(String(result));
            // console.log("push notif : " + hasil);
            //this.navCtrl.pop();
        }).catch(function (error) {
            // console.log(error);
            _this.navCtrl.pop();
        });
    };
    IpcContactDetailPage.prototype.openModalRating = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create("IpcContactRatingPage", {
            // kepadaList : this.userdata['data']['LISTOFFICER'],
            "data": data
        }, {
            enableBackdropDismiss: true,
            showBackdrop: true,
            cssClass: 'my-modal2'
        });
        if (this.ipcContactDetail[0]['FROM_NIPP'] != this.userdataTPK['data']['NIPP']) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
                content: "mohon tunggu...",
                cssClass: 'transparent',
            });
            loading_1.present();
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_rating_ipcc', { fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                    rate: 0,
                    id_pengajuan: this.data['ID_PENGAJUAN']
                }) }).then(function (result) {
                var responData = JSON.parse(String(result));
                // console.log(responData);
                if (responData['rcmsg'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: 'Close Case Berhasil !',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present().then(function () {
                        _this.navCtrl.pop();
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
                loading_1.dismiss();
            })
                .catch(function (error) {
                // console.log(error);
                var toast = _this.toastCtrl.create({
                    message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loading_1.dismiss();
            });
        }
        else {
            modal.present();
            modal.onDidDismiss(function (data) {
                // console.log(data);
                if (data != null) {
                    _this.navCtrl.pop();
                    _this.soapService
                        .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', {
                        fStream: JSON.stringify({
                            usernameEDI: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                            passwordEDI: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                            nipp: [],
                            data: {
                                "res": "IpcContactDetailPage",
                                "data": _this.data
                            },
                            content: {
                                "en": "Permasalahan Telah Ditutup Oleh " + _this.ipcContactDetail[0]['FROM_NAMA']
                            },
                            heading: {
                                "en": "Rating"
                            },
                            id_kategori: _this.ipcContactDetail[0]['KATEGORI']
                        })
                    }).then(function (result) {
                        var hasil = JSON.parse(String(result));
                        // console.log("push notif : " + hasil);
                        //this.navCtrl.pop();
                    }).catch(function (error) {
                        // console.log(error);
                        _this.navCtrl.pop();
                    });
                }
            });
        }
    };
    IpcContactDetailPage.prototype.loadingPresent = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
    };
    IpcContactDetailPage.prototype.loadingDismiss = function () {
        if (this.loading.present()) {
            this.loading.dismiss();
        }
    };
    IpcContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ipc-contact-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/ipc-contact-detail/ipc-contact-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><span ion-text color="light">Detail Permasalahan</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf="!isLoading">\n        <div class="header-cont">\n            <!-- <span ion-text text-wrap class="font">Judul : </span> <br> -->\n            <span text-wrap ion-text class="font2"><b>\n                    {{ ipcContactDetail[0][\'JUDUL\'] }}</b>\n            </span>\n            <br>\n\n            <div *ngIf="ipcContactDetail[0][\'FROM_NIPP\'] != userdataTPK[\'data\'][\'NIPP\']">\n                <span ion-text text-wrap class="font">Dari :</span>\n                <span text-wrap ion-text class="font2" color="primary">\n                    {{ ipcContactDetail[0][\'FROM_NAMA\'] }}\n                </span>\n            </div>\n\n            <span ion-text text-wrap class="font">Kategori : </span>\n            <span text-wrap ion-text class="font2" color="danger">\n                {{ ipcContactDetail[0][\'KATEGORI_NAME\'] }}\n            </span>\n            <br>\n\n            <span ion-text text-wrap class="font" color="gray">Deskripsi Pertanyaan/Permasalahan : </span><br>\n            <span text-wrap ion-text class="font2">\n                {{ ipcContactDetail[0][\'ISI\'] }}\n            </span>\n        </div>\n\n        <div *ngIf="data[\'STATUS\'] == \'Aktif\'" style="padding: 0 8px 8px 8px;">\n            <!-- <button *ngIf="ipcContactDetail[0][\'FROM_NIPP\'] == userdataTPK[\'data\'][\'NIPP\']" ion-button icon-end block -->\n            <button ion-button icon-end block\n                style="border-radius: 10px;" color="secondary" margin-top\n                (click)="openModalRating(ipcContactDetail[0])">\n                Close Case\n                <ion-icon name="md-done-all"></ion-icon>\n            </button>\n        </div>\n    </div>\n\n    <hr class="hr" />\n\n    <div *ngIf="!isLoading">\n        <div *ngFor="let userAnswer of ipcContactDetail[0][\'DETAIL_IPCC\']">\n            <div style="margin-top:7px;" class="date-container font"\n                [ngClass]="{\'float-right\' : userAnswer[\'REPLAY_NIPP\'] == userdataTPK[\'data\'][\'NIPP\'] }">\n                <span ion-text text-wrap style="font-weight: 600;">{{ userAnswer[\'NAMA\'] }}</span>\n            </div>\n            <div class="text-container">\n                <ion-card\n                    [ngClass]="{\'reply1\' : userAnswer[\'REPLAY_NIPP\'] != userdataTPK[\'data\'][\'NIPP\'], \'reply2\' : userAnswer[\'REPLAY_NIPP\'] == userdataTPK[\'data\'][\'NIPP\'] }">\n                    <ion-card-content>\n                        <span ion-text text-wrap>{{ userAnswer[\'ISI_REPLAY\'] }}</span>\n                    </ion-card-content>\n                </ion-card>\n            </div>\n            <div class="date-container font"\n                [ngClass]="{\'float-right\' : userAnswer[\'REPLAY_NIPP\'] == userdataTPK[\'data\'][\'NIPP\'] }">\n                <span ion-text text-wrap color="gray">{{ userAnswer[\'TGL\'] }}</span>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-footer *ngIf="data[\'STATUS\'] == \'Aktif\'">\n    <ion-grid no-padding no-margin>\n        <ion-row no-padding>\n            <ion-col col-10>\n                <ion-list>\n                    <ion-item no-lines>\n                        <ion-input type="text" placeholder="Tulis Komentar" class="comment" [(ngModel)]="komentar">\n                        </ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n            <ion-col col-2>\n                <img (click)="sendAnswer()" src="assets/imgs/logo/send-icon.png" class="icons">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/ipc-contact-detail/ipc-contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], IpcContactDetailPage);
    return IpcContactDetailPage;
}());

//# sourceMappingURL=ipc-contact-detail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map