webpackJsonp([0],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateAbsensiPageModule", function() { return RateAbsensiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_absensi__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RateAbsensiPageModule = /** @class */ (function () {
    function RateAbsensiPageModule() {
    }
    RateAbsensiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rate_absensi__["a" /* RateAbsensiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rate_absensi__["a" /* RateAbsensiPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], RateAbsensiPageModule);
    return RateAbsensiPageModule;
}());

//# sourceMappingURL=rate-absensi.module.js.map

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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateAbsensiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__soap_service__ = __webpack_require__(200);
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
 * Generated class for the RateAbsensiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RateAbsensiPage = /** @class */ (function () {
    function RateAbsensiPage(navCtrl, navParams, viewCtrl, http, storage, soapService, loadingCtrl, toastCtrl, datepipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.storage = storage;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.datepipe = datepipe;
        this.rate = '';
        this.activity = '';
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK);
        });
        this.type = navParams.get('type');
        this.data = navParams.get('data');
        this.shiftDate = navParams.get('shiftDate');
        // this.shiftDate = datepipe.transform(this.shiftDate,'dd/MM/yyyy');
        this.rateFor = navParams.get('rateFor');
        this.fromPage = navParams.get('fromPage');
        console.log(this.data);
        if (this.data['CHECK_IN_ACTIVITY_SPV'] != '') {
            this.activity = this.data['CHECK_IN_ACTIVITY_SPV'];
        }
        console.log(this.data);
    }
    RateAbsensiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RateAbsensiPage');
    };
    RateAbsensiPage.prototype.onModelChange = function () {
        console.log(this.rate);
    };
    RateAbsensiPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    RateAbsensiPage.prototype.isDisable = function () {
        if (this.type == 'rate' && this.fromPage == 'AbsenMobileDetailPage') {
            if (this.rateFor == 'bawahan') {
                if (this.rate == '' || this.rate == null || this.activity == '' || this.activity == null) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (this.rateFor == 'atasan') {
                if (this.rate == '' || this.rate == null) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else if (this.type == 'rate' && this.fromPage == 'InsertNoteAttendancePage') {
            if (this.rate == '' || this.rate == null) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
            if (this.activity == '' || this.activity == null) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    RateAbsensiPage.prototype.doInsert = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Mohon tunggu...",
            spinner: 'dots',
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loader.present();
        var rate = '0';
        var rate_spv = '0';
        var activity_spv = '';
        var check_type = '';
        var pesan = '';
        // if (this.fromPage == 'AbsenMobileDetailPage') {
        //   if (this.type == 'rate') {
        //     rate_spv = this.rate;
        //     rate = (this.data['CHECK_IN_RATE'] == '') ? '0' : this.data['CHECK_IN_RATE'];
        //     this.activity = this.data['CHECK_IN_ACTIVITY_SPV'];
        //   } else if (this.type == 'task') {
        //     rate_spv = this.rate;
        //     rate = (this.data['CHECK_IN_RATE'] == '') ? '0' : this.data['CHECK_IN_RATE'];        
        //   }    
        // } else if (this.fromPage == 'InsertNoteAttendancePage') {
        //   rate = this.rate;
        //   rate_spv = (this.data['CHECK_IN_RATE_SPV'] == '') ? '0' : this.data['CHECK_IN_RATE_SPV'];
        // }
        if (this.type == 'rate' && this.fromPage == 'AbsenMobileDetailPage') {
            if (this.rateFor == 'bawahan') {
                rate_spv = this.rate;
                activity_spv = this.activity;
                check_type = 'OUT';
                pesan = 'Evaluasi';
            }
            else if (this.rateFor == 'atasan') {
                rate = this.rate;
                activity_spv = this.data['CHECK_IN_ACTIVITY_SPV'];
                check_type = 'IN';
                pesan = 'Evaluasi';
            }
        }
        else if (this.type == 'rate' && this.fromPage == 'InsertNoteAttendancePage') {
            rate = this.rate;
            activity_spv = this.data['CHECK_IN_ACTIVITY_SPV'];
            check_type = 'IN';
            pesan = 'Evaluasi';
        }
        else if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
            check_type = 'IN';
            activity_spv = this.activity;
            pesan = 'Arahan';
        }
        else {
            return true;
        }
        var date = new Date();
        var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
        var rand = Math.floor((Math.random() * 100000000) + 1);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': "*/*",
            //'Access-Control-Allow-Origin':'http://localhost:8100',
            // 'x-ibm-client-id': client_id,
            // 'x-ibm-client-secret': client_secret,
            'username': __WEBPACK_IMPORTED_MODULE_2__config__["e" /* api_user */],
            'password': __WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_pass */],
            'externalId': rand.toString(),
            'timestamp': formattedDate,
            'Content-Type': 'application/json'
        });
        // this.http.post(api_base_url_apim_absensi + 'absen', {        
        //   "nipp": this.data['NIPP'],
        //   "photo": '',
        //   "lat": '',
        //   "long": '',
        //   "attendance_type": '',
        //   "geo": '',
        //   "check_type": check_type,
        //   'activity': '',
        //   'activity_spv': activity_spv,
        //   'rate': rate.toString(),
        //   'rate_spv': rate_spv.toString(),
        //   'act_type': '3'      
        // }, {
        //   // headers
        // }).subscribe(data => {
        //   console.log(data);
        //   if (data['status'] == "SUCCESS") {
        //     let toast = this.toastCtrl.create({
        //       message: "Berhasil menambahkan " + pesan + " .",
        //       duration: 4000,
        //       position: 'bottom'
        //     });
        //     loader.dismiss();
        //     toast.present();
        //     this.viewCtrl.dismiss({
        //       isSubmit: true
        //     });
        //   } else {
        //     let toast = this.toastCtrl.create({
        //       message: "gagal menambahkan " + pesan + ", coba kembali.",
        //       duration: 3000,
        //       position: 'bottom'
        //     });
        //     toast.present();
        //     loader.dismiss();
        //     this.navCtrl.setRoot('HomePage');
        //   }
        // }, err => {
        //   console.log(err);
        //   let toast = this.toastCtrl.create({
        //     message: "gagal menambahkan "  +  pesan + ", coba kembali.",
        //     duration: 3000,
        //     position: 'bottom'
        //   });
        //   toast.present();
        //   loader.dismiss();
        //   this.navCtrl.setRoot('HomePage');
        // });
        if (this.type == 'task' && this.fromPage == 'AbsenMobileDetailPage') {
            var tgl_awal = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
            this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */] + "am7_activity.php", {
                "usernameEDI": "EDI-USERNAME",
                "passwordEDI": "RURJLVBBU1NXT1JE",
                "id_user": this.data['ID_USER'],
                "nipp": this.data['NIPP'],
                "arr_param": [
                    {
                        'att_activity_id': '',
                        'activity': '(Arahan Atasan) ' + activity_spv,
                        'status': '',
                        'tgl_awal': tgl_awal,
                        'tgl_akhir': '',
                    }
                ],
                "action": 'INSERT',
                "tgl": "",
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data['rcmsg'] == "SUCCESS") {
                    // this.pushNotif();
                    var toast = _this.toastCtrl.create({
                        message: "Berhasil menambahkan " + pesan + " .",
                        duration: 4000,
                        position: 'bottom'
                    });
                    loader.dismiss();
                    toast.present();
                    _this.viewCtrl.dismiss({
                        isSubmit: true
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "gagal menambahkan " + pesan + ", coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                    // this.navCtrl.setRoot('HomePage');
                    _this.viewCtrl.dismiss({
                        isSubmit: false
                    });
                }
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: "gagal menambahkan " + pesan + ", coba kembali.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                // this.navCtrl.setRoot('HomePage');
                _this.viewCtrl.dismiss({
                    isSubmit: false
                });
            });
        }
        else {
            this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */] + "am1_insert_absen_res.php", {
                "usernameEDI": "EDI-USERNAME",
                "passwordEDI": "RURJLVBBU1NXT1JE",
                "nipp": this.data['NIPP'],
                "photo": '',
                "lat": '',
                "long": '',
                "attendance_type": '',
                "geo": '',
                "check_type": check_type,
                'activity': '',
                'activity_spv': activity_spv,
                'rate': rate.toString(),
                'rate_spv': rate_spv.toString(),
                'act_type': '3',
                'shift_date': this.shiftDate
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data['rcmsg'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: "Berhasil menambahkan " + pesan + " .",
                        duration: 4000,
                        position: 'bottom'
                    });
                    loader.dismiss();
                    toast.present();
                    _this.viewCtrl.dismiss({
                        isSubmit: true
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "gagal menambahkan " + pesan + ", coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                    // this.navCtrl.setRoot('HomePage');
                    _this.viewCtrl.dismiss({
                        isSubmit: false
                    });
                }
            }, function (err) {
                console.log(err);
                var toast = _this.toastCtrl.create({
                    message: "gagal menambahkan " + pesan + ", coba kembali.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                // this.navCtrl.setRoot('HomePage');
                _this.viewCtrl.dismiss({
                    isSubmit: false
                });
            });
        }
    };
    RateAbsensiPage.prototype.pushNotif = function () {
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */], 'eoffice_notif_imove_nipp', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_2__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_pass */],
                nipp: [this.data['NIPP']],
                data: {
                    "res": "HomePage"
                },
                content: {
                    "en": "Anda mendapat arahan/tugas tambahan dari Atasan."
                },
                heading: {
                    "en": "Arahan/Tugas Tambahan dari Atasan"
                },
                id_kategori: ''
            }) }).then(function (result) {
            var hasil = JSON.parse(String(result));
            console.log("push notif : " + hasil);
        }).catch(function (error) {
            console.log(error);
        });
    };
    RateAbsensiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rate-absensi',
            providers: [__WEBPACK_IMPORTED_MODULE_6__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/rate-absensi/rate-absensi.html"*/'<!--\n  Generated template for the IpcContactRatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content style="background-color:white">\n  <div class="my-header">\n    <span style="font-size:1.4rem"\n      *ngIf="type == \'rate\' && fromPage == \'AbsenMobileDetailPage\' && rateFor == \'bawahan\'">Nilai Kinerja Bawahan</span>\n    <span style="font-size:1.4rem"\n      *ngIf="type == \'rate\' && fromPage == \'AbsenMobileDetailPage\' && rateFor == \'atasan\'">Evaluasi Arahan/Dukungan\n      Atasan</span>\n    <span style="font-size:1.4rem" *ngIf="type == \'rate\' && fromPage == \'InsertNoteAttendancePage\'">Evaluasi\n      Arahan/Dukungan Atasan</span>\n    <span style="font-size:1.4rem"\n      *ngIf="type == \'task\' && fromPage == \'AbsenMobileDetailPage\'">Arahan Tambahan</span>\n    <br>\n    <div style="background-color:#FFF;margin-top:5px">\n      <hr class="hr" />\n    </div>\n  </div>\n\n  <div *ngIf="type == \'rate\' && fromPage == \'AbsenMobileDetailPage\'">\n    <rating [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n      starIconName="star" nullable="true" (ngModelChange)="onModelChange()">\n    </rating>\n\n    <span *ngIf="rate == \'1\'" style="color: red;font-size:1.6rem;font-weight: 500;"><i>Kurang</i></span>\n    <span *ngIf="rate == \'2\'" style="color: red;font-size:1.6rem;font-weight: 500;"><i>Cukup</i></span>\n    <span *ngIf="rate == \'3\'" style="color: orange;font-size:1.6rem;font-weight: 500;"><i>Baik</i></span>\n    <span *ngIf="rate == \'4\'" style="color: green;font-size:1.6rem;font-weight: 500;"><i>Memuaskan</i></span>\n    <span *ngIf="rate == \'5\'" style="color: green;font-size:1.6rem;font-weight: 500;"><i>Sangat Memuaskan</i></span>\n\n    <ion-item padding *ngIf="rateFor == \'bawahan\'">\n      <ion-label stacked>Komentar</ion-label>\n      <ion-textarea [(ngModel)]="activity" #myInput id="myInput" rows="4">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n  <div *ngIf="type == \'rate\' && fromPage == \'InsertNoteAttendancePage\'">\n    <rating *ngIf="type == \'rate\'" [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline"\n      halfStarIconName="star-half" starIconName="star" nullable="true" (ngModelChange)="onModelChange()">\n    </rating>\n\n    <span *ngIf="rate == \'1\'" style="color: red;font-size:1.6rem;font-weight: 500;"><i>Kurang</i></span>\n    <span *ngIf="rate == \'2\'" style="color: red;font-size:1.6rem;font-weight: 500;"><i>Cukup</i></span>\n    <span *ngIf="rate == \'3\'" style="color: orange;font-size:1.6rem;font-weight: 500;"><i>Baik</i></span>\n    <span *ngIf="rate == \'4\'" style="color: green;font-size:1.6rem;font-weight: 500;"><i>Memuaskan</i></span>\n    <span *ngIf="rate == \'5\'" style="color: green;font-size:1.6rem;font-weight: 500;"><i>Sangat Memuaskan</i></span>\n  </div>\n\n  <div *ngIf="type == \'task\' && fromPage == \'AbsenMobileDetailPage\'">\n    <ion-item padding *ngIf="type == \'task\'">\n      <ion-label stacked>Arahan</ion-label>\n      <ion-textarea [(ngModel)]="activity" #myInput id="myInput" rows="4">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n\n  <br>\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button style="border-radius:8px;" ion-button block (click)="doInsert()" [disabled]="isDisable()"\n          color="secondary">Submit</button>\n      </ion-col>\n      <ion-col col-6>\n        <button style="border-radius:8px;" ion-button block color="danger" (click)="cancel()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/rate-absensi/rate-absensi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */]])
    ], RateAbsensiPage);
    return RateAbsensiPage;
}());

//# sourceMappingURL=rate-absensi.js.map

/***/ })

});
//# sourceMappingURL=0.js.map