webpackJsonp([3],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcContactListPageModule", function() { return IpcContactListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ipc_contact_list__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IpcContactListPageModule = /** @class */ (function () {
    function IpcContactListPageModule() {
    }
    IpcContactListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ipc_contact_list__["a" /* IpcContactListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ipc_contact_list__["a" /* IpcContactListPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], IpcContactListPageModule);
    return IpcContactListPageModule;
}());

//# sourceMappingURL=ipc-contact-list.module.js.map

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

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpcContactListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
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
 * Generated class for the IpcContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IpcContactListPage = /** @class */ (function () {
    function IpcContactListPage(navCtrl, navParams, popoverCtrl, viewCtrl, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.questionList = [];
        this.rate = [];
        this.isLoadingBadges = true;
        this.fakeUsers = new Array(5);
        this.modul = navParams.get('modul');
        // console.log(this.modul);
    }
    IpcContactListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.questionList = [];
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getBadges();
            _this.getDataUserIpcc(val);
            _this.getQuestionList('first', '', 'loading');
        });
    };
    IpcContactListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IpcContactListPage');
    };
    IpcContactListPage.prototype.getBadges = function () {
        var _this = this;
        this.isLoadingBadges = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_countbadges', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                iduser: this.userdataTPK['data']['IDUSER'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                nipp: this.userdataTPK['data']['NIPP']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.badgesList = responData['data'];
                // console.log(this.badgesList);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.isLoadingBadges = false;
        })
            .catch(function (error) {
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
                duration: 3000,
                position: 'bottom'
            });
            //toast.present();    
            _this.isLoadingBadges = false;
        });
    };
    IpcContactListPage.prototype.getDataUserIpcc = function (val) {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_bypass_wso', {
            fStream: JSON.stringify({
                sc_type: 'ipccuser',
                sc_code: __WEBPACK_IMPORTED_MODULE_4__config__["g" /* sc_code */],
                data: {
                    id_user: val['data']['IDUSER'],
                    nipp: val['data']['NIPP'],
                    modul: this.modul
                }
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.storage.set('userdataIPCContact', responData['data']);
                _this.IPCContactUserDataTPK = responData['data'];
                _this.setLevel(responData['data']['ID_LEVEL']);
                // console.log(this.IPCContactUserDataTPK);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        })
            .catch(function (error) {
            // console.log(error);
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal Mendapatkan Data User IPC Contact, Periksa Koneksi Internet Anda.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    IpcContactListPage.prototype.setLevel = function (val) {
        this.idLevel = val;
    };
    IpcContactListPage.prototype.getQuestionList = function (type, functionName, load) {
        var _this = this;
        // let myLoading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon Tunggu...",       
        //   cssClass: 'transparent', 
        //   dismissOnPageChange:true
        // });
        if (load == 'loading') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_masalah_personal_list_ipcc', {
            fStream: JSON.stringify({
                "usernameEDI": __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                "passwordEDI": __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                "nipp": this.userdataTPK['data']['NIPP'],
                "atas": this.batasAtas,
                "bawah": this.batasBawah,
                "modul": this.modul
            })
        }).then(function (result) {
            result = String(result).replace(/\n/g, " ");
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.questionList = [];
                    _this.rate = [];
                }
                if (responData['data'].length > 0 && !_this.isEmptyObject(responData['data'][0])) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.questionList.push(responData['data'][i]);
                        _this.rate.push(responData['data'][i]['RATE']);
                    }
                }
                // console.log(this.questionList);
                // console.log(this.rate);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            if (type == 'first' && functionName == '') {
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            //this.isLoading = false;  
            // if (load == 'loading') {
            //   myLoading.dismiss();
            // }
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
            //this.isLoading = false;
            if (type == 'first' && functionName == '') {
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            // if (load == 'loading') {
            //   myLoading.dismiss();
            // }
            _this.isLoading = false;
        });
    };
    IpcContactListPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.questionList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 20;
            this.getQuestionList('infinite', infiniteScroll, 'n0 loading');
        }
        else {
            infiniteScroll.complete();
        }
    };
    IpcContactListPage.prototype.doRefresh = function (refresher) {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.getQuestionList('refresh', refresher, 'loading');
    };
    IpcContactListPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create("MenuIpcContactPage", {
            "IPCContactUserData": this.IPCContactUserDataTPK,
            "badges": this.badgesList['JUMLAH_MASALAH_IPCC']
        }, { cssClass: 'my-popover' });
        popover.present({
            ev: myEvent
        });
    };
    IpcContactListPage.prototype.openModal = function (modalPage) {
        var _this = this;
        var modal = this.modalCtrl.create(modalPage, {
            modul: this.modul
        }, {});
        modal.present();
        modal.onDidDismiss(function (data) {
            // console.log(data);
            _this.questionList = [];
            _this.batasAtas = 1;
            _this.batasBawah = 20;
            _this.getQuestionList('first', '', 'no loading');
        });
    };
    IpcContactListPage.prototype.goToDetail = function (data) {
        this.navCtrl.push('IpcContactDetailPage', {
            data: data,
            modul: this.modul
        });
    };
    IpcContactListPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    IpcContactListPage.prototype.parse = function (val) {
        var intValue = parseInt(val);
        if (intValue > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    IpcContactListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ipc-contact-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/ipc-contact-list/ipc-contact-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title *ngIf="!isSearch">\n\n      <span *ngIf="modul == \'hr_contact\'" ion-text color="light" class="fw500">HR Contact</span>\n\n      <span *ngIf="modul == \'helpdesk\'" ion-text color="light" class="fw500">Helpdesk</span>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <div *ngIf="!isLoading && !isLoadingBadges">\n\n        <div *ngIf="modul == \'hr_contact\'" >\n\n          <button *ngIf="idLevel != \'3\' && IPCContactUserDataTPK[\'ID_DIR\'] == \'7\'" ion-button (click)="presentPopover($event)">\n\n            <ion-icon style="font-size:2.4rem;padding-right:16px;" name="more" color="light"></ion-icon>\n\n            <ion-badge *ngIf="!isEmptyObject(badgesList) && parse(badgesList[\'JUMLAH_MASALAH_HRCONTACT\'])" class="my-badges" color="danger">\n\n              {{ badgesList[\'JUMLAH_MASALAH_HRCONTACT\'] }}</ion-badge>\n\n          </button>\n\n        </div>\n\n\n\n        <div *ngIf="modul == \'helpdesk\'" >\n\n          <button *ngIf="idLevel != \'3\' && IPCContactUserDataTPK[\'ID_DIR\'] == \'8\'" ion-button (click)="presentPopover($event)">\n\n            <ion-icon style="font-size:2.4rem;padding-right:16px;" name="more" color="light"></ion-icon>\n\n            <ion-badge *ngIf="!isEmptyObject(badgesList) && parse(badgesList[\'JUMLAH_MASALAH_HELPDESK\'])" class="my-badges" color="danger">\n\n              {{ badgesList[\'JUMLAH_MASALAH_HELPDESK\'] }}</ion-badge>\n\n          </button>\n\n        </div>        \n\n      </div>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list class="dining_List" *ngIf="questionList.length == 0  && isLoading == false">\n\n    <ion-card class="primary-bg">\n\n      <ion-card-content>\n\n        <span style="font-size:1.3rem">Tidak ada data pertanyaan.</span>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-list class="dining_List" *ngIf="questionList.length != 0 && isLoading == false">\n\n    <ion-card *ngFor="let question of questionList;let i = index" class="my-card" (click)="goToDetail(question)">\n\n      <ion-item>\n\n        <span item-start>\n\n          <img *ngIf="modul == \'hr_contact\'" src="assets/imgs/menu-icon/hrcontact.png" class="icons">\n\n          <img *ngIf="modul == \'helpdesk\'" src="assets/imgs/menu-icon/helpdesk.png" class="icons">\n\n        </span>\n\n        <span ion-text text-wrap class="font" color="danger"><b>{{ question[\'NO_TIKET\'] }}</b></span><br />\n\n        <span ion-text text-wrap class="font2">{{ question[\'JUDUL\'] }}</span><br />\n\n        <span ion-text text-wrap class="font">Kategori : <span class="font"\n\n            style="color:#093">{{ question[\'KATEGORI_PENGAJUAN\'] }}</span></span> <br>\n\n        <div *ngIf="question[\'RATE\'] != \'0\'">\n\n          <rating [(ngModel)]="question[\'RATE\']" readOnly="true" max="5" emptyStarIconName="star-outline"\n\n            halfStarIconName="star-half" starIconName="star" nullable="true" (ngModelChange)="onModelChange()">\n\n          </rating>\n\n        </div>\n\n        <div item-end style="height: 100%;">\n\n          <ion-badge color="secondary">{{ question[\'STATUS\'] }}</ion-badge>\n\n        </div>\n\n\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf=\'questionList.length == 0 && isLoading == true\'>\n\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n\n      <ion-item>\n\n        <div class="animate-skeleton-background load-2"></div>\n\n        <div class="animate-skeleton-background load-3"></div>\n\n        <div class="animate-skeleton-background load-1"> </div>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="crescent">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-fab right bottom style="right:20px;bottom:20px;">\n\n    <button ion-fab color="primary" (click)="openModal(\'AddQuestionIpcContactPage\')">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/ipc-contact-list/ipc-contact-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], IpcContactListPage);
    return IpcContactListPage;
}());

//# sourceMappingURL=ipc-contact-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map