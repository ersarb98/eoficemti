webpackJsonp([5],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInPageModule", function() { return CheckInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_in__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckInPageModule = /** @class */ (function () {
    function CheckInPageModule() {
    }
    CheckInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_in__["a" /* CheckInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_in__["a" /* CheckInPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], CheckInPageModule);
    return CheckInPageModule;
}());

//# sourceMappingURL=check-in.module.js.map

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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(30);
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
 * Generated class for the CheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckInPage = /** @class */ (function () {
    function CheckInPage(navCtrl, navParams, storage, camera, platform, transfer, filepath, file, loadingCtrl, toastCtrl, alertCtrl, soapService, datePipe, http, sanitizer, datepipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.camera = camera;
        this.platform = platform;
        this.transfer = transfer;
        this.filepath = filepath;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.datePipe = datePipe;
        this.http = http;
        this.sanitizer = sanitizer;
        this.datepipe = datepipe;
        this.win = window;
        this.imageURI = "";
        // imageShow: any = "assets/flat-icon/camera.png";
        this.imageShow = "assets/flat-icon/camera.png";
        this.attendanceType = null;
        this.isLoading = false;
        this.rate = '5';
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK);
        });
        this.lat = navParams.get("lat");
        this.long = navParams.get("long");
        this.type = navParams.get("type");
        this.filename = navParams.get("filename");
        this.fileBase64 = navParams.get("fileBase64");
        this.address = navParams.get('address');
        this.addressData = navParams.get('addressData');
        this.dataValidasi = navParams.get('dataValidasi');
        this.imageShow = __WEBPACK_IMPORTED_MODULE_7__config__["i" /* url_image */] + '/' + this.filename;
        //this.imageShow = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + this.fileBase64);
        console.log(this.dataValidasi);
        // this.imageShow = url_image + '/' + '20200625_094623_1770451718.jpg';
        if (this.type == 'checkin') {
            this.check_type = "CHECK_IN";
        }
        else {
            this.check_type = "CHECK_OUT";
        }
    }
    CheckInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckInPage');
    };
    CheckInPage.prototype.vadidasiAlamat = function () {
        var _this = this;
        if (this.addressData['STATUS'] == 'APPROVED') {
            if (this.attendanceType == 'WFH') {
                var countJarak = this.getDistanceFromLatLonInKm(this.addressData['LATITUDE'], this.addressData['LONGITUDE'], this.lat, this.long);
                if (countJarak <= parseInt(this.addressData['RADIUS_WFH'])) {
                    if (this.attendanceType == null || this.attendanceType == undefined) {
                        this.attendanceType = '';
                    }
                    var alert_1 = this.alertCtrl.create({
                        subTitle: 'Anda yakin ingin ' + this.check_type + ' ' + this.attendanceType + ' ?',
                        cssClass: 'alert',
                        buttons: [
                            {
                                text: 'TIDAK',
                                role: 'cancel',
                                handler: function () {
                                }
                            },
                            {
                                text: 'YA',
                                handler: function () {
                                    _this.doInsert();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: "Anda sedang tidak berada di radius lokasi domisili anda !",
                        duration: 4000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }
            else if (this.attendanceType == 'WFO') {
                var lat_kantor = '';
                var long_kantor = '';
                if (this.userdataTPK['data']['IDCABANG'] == '31') {
                    lat_kantor = this.addressData['LAT_TPK_PUSAT'];
                    long_kantor = this.addressData['LONG_TPK_PUSAT'];
                }
                else if (this.userdataTPK['data']['IDCABANG'] == '32') {
                    lat_kantor = this.addressData['LAT_TPK_JAMBI'];
                    long_kantor = this.addressData['LONG_TPK_JAMBI'];
                }
                else if (this.userdataTPK['data']['IDCABANG'] == '33') {
                    lat_kantor = this.addressData['LAT_TPK_PONTIANAK'];
                    long_kantor = this.addressData['LONG_TPK_PONTIANAK'];
                }
                var countJarak = this.getDistanceFromLatLonInKm(lat_kantor, long_kantor, this.lat, this.long);
                if (countJarak <= parseInt(this.addressData['RADIUS_WFO'])) {
                    if (this.attendanceType == null || this.attendanceType == undefined) {
                        this.attendanceType = '';
                    }
                    var alert_2 = this.alertCtrl.create({
                        subTitle: 'Anda yakin ingin ' + this.check_type + ' ' + this.attendanceType + ' ?',
                        cssClass: 'alert',
                        buttons: [
                            {
                                text: 'TIDAK',
                                role: 'cancel',
                                handler: function () {
                                }
                            },
                            {
                                text: 'YA',
                                handler: function () {
                                    _this.doInsert();
                                }
                            }
                        ]
                    });
                    alert_2.present();
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: "Anda sedang tidak berada di radius lokasi Kantor anda !",
                        duration: 4000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }
            else {
                if (this.attendanceType == null || this.attendanceType == undefined) {
                    this.attendanceType = '';
                }
                var alert_3 = this.alertCtrl.create({
                    subTitle: 'Anda yakin ingin ' + this.check_type + ' ' + this.attendanceType + ' ?',
                    cssClass: 'alert',
                    buttons: [
                        {
                            text: 'TIDAK',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: 'YA',
                            handler: function () {
                                _this.doInsert();
                            }
                        }
                    ]
                });
                alert_3.present();
            }
        }
        else {
            if (this.attendanceType == 'WFO') {
                var lat_kantor = '';
                var long_kantor = '';
                if (this.userdataTPK['data']['IDCABANG'] == '31') {
                    lat_kantor = this.addressData['LAT_TPK_PUSAT'];
                    long_kantor = this.addressData['LONG_TPK_PUSAT'];
                }
                else if (this.userdataTPK['data']['IDCABANG'] == '32') {
                    lat_kantor = this.addressData['LAT_TPK_JAMBI'];
                    long_kantor = this.addressData['LONG_TPK_JAMBI'];
                }
                else if (this.userdataTPK['data']['IDCABANG'] == '33') {
                    lat_kantor = this.addressData['LAT_TPK_PONTIANAK'];
                    long_kantor = this.addressData['LONG_TPK_PONTIANAK'];
                }
                var countJarak = this.getDistanceFromLatLonInKm(lat_kantor, long_kantor, this.lat, this.long);
                if (countJarak < this.addressData['RADIUS_WFO']) {
                    var alert_4 = this.alertCtrl.create({
                        subTitle: 'Anda yakin ingin ' + this.check_type + ' ' + this.attendanceType + ' ?',
                        cssClass: 'alert',
                        buttons: [
                            {
                                text: 'TIDAK',
                                role: 'cancel',
                                handler: function () {
                                }
                            },
                            {
                                text: 'YA',
                                handler: function () {
                                    _this.doInsert();
                                }
                            }
                        ]
                    });
                    alert_4.present();
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: "Anda sedang tidak berada di radius lokasi Kantor anda !",
                        duration: 4000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }
            else {
                if (this.attendanceType == null || this.attendanceType == undefined) {
                    this.attendanceType = '';
                }
                var alert_5 = this.alertCtrl.create({
                    subTitle: 'Anda yakin ingin ' + this.check_type + ' ' + this.attendanceType + ' ?',
                    cssClass: 'alert',
                    buttons: [
                        {
                            text: 'TIDAK',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: 'YA',
                            handler: function () {
                                _this.doInsert();
                            }
                        }
                    ]
                });
                alert_5.present();
            }
        }
    };
    CheckInPage.prototype.doInsert = function () {
        var _this = this;
        if (this.attendanceType == null || this.attendanceType == undefined || this.attendanceType == '') {
            var toast = this.toastCtrl.create({
                message: "Jenis absen, keterangan, dan foto harus diisi.",
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Memproses absen...",
                spinner: 'dots',
                cssClass: 'transparent',
                dismissOnPageChange: true
            });
            loader_1.present();
            var date = new Date();
            var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
            var rand = Math.floor((Math.random() * 100000000) + 1);
            var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpHeaders */]({
                'Accept': "*/*",
                // 'Access-Control-Allow-Origin': 'http://localhost:8100',
                // 'x-ibm-client-id': client_id,
                // 'x-ibm-client-secret': client_secret,
                'username': __WEBPACK_IMPORTED_MODULE_7__config__["e" /* api_user */],
                'password': __WEBPACK_IMPORTED_MODULE_7__config__["c" /* api_pass */],
                'externalId': rand.toString(),
                'timestamp': formattedDate,
                'Content-Type': 'application/json'
            });
            if (this.type == 'checkout') {
                if (this.rate == '0' || this.rate == '' || this.rate == null) {
                    var toast = this.toastCtrl.create({
                        message: "Evaluasi Atasan harus diisi.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader_1.dismiss();
                }
                else {
                    var shiftDate = this.datepipe.transform(new Date(), 'dd/MM/yyyy');
                    this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["d" /* api_res */] + "am1_insert_absen_res.php", {
                        "usernameEDI": __WEBPACK_IMPORTED_MODULE_7__config__["e" /* api_user */],
                        "passwordEDI": __WEBPACK_IMPORTED_MODULE_7__config__["c" /* api_pass */],
                        "nipp": this.userdataTPK['data']['NIPP'],
                        "photo": '',
                        "lat": '',
                        "long": '',
                        "attendance_type": '',
                        "geo": '',
                        "check_type": 'IN',
                        'activity': '',
                        'activity_spv': '',
                        'rate': this.rate.toString(),
                        'rate_spv': '0',
                        'act_type': '3',
                        'shift_date': shiftDate
                    }, {}).subscribe(function (data) {
                        console.log(data);
                        if (data['rcmsg'] == "SUCCESS") {
                            _this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["d" /* api_res */] + 'am1_insert_absen_res.php', {
                                "usernameEDI": __WEBPACK_IMPORTED_MODULE_7__config__["e" /* api_user */],
                                "passwordEDI": __WEBPACK_IMPORTED_MODULE_7__config__["c" /* api_pass */],
                                "nipp": _this.userdataTPK['data']['NIPP'],
                                "photo": _this.filename,
                                "lat": _this.lat.toString(),
                                "long": _this.long.toString(),
                                "attendance_type": _this.attendanceType,
                                "geo": _this.address,
                                "check_type": (_this.check_type == 'CHECK_IN') ? 'IN' : 'OUT',
                                'activity': '',
                                'act_type': '1'
                            }, {
                                headers: headers
                            }).subscribe(function (data) {
                                console.log(data);
                                if (data['rcmsg'] == "SUCCESS") {
                                    // this.uploadPhoto(responData['data']['id_absen'], loader);
                                    var toast = _this.toastCtrl.create({
                                        message: _this.check_type + " berhasil.",
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                    //this.pushnotif();
                                    _this.navCtrl.push('InsertNoteAttendancePage', {
                                        "fromPage": "CheckInPage"
                                    }).then(function () {
                                        _this.navCtrl.remove(1, 2);
                                    });
                                }
                                else {
                                    var toast = _this.toastCtrl.create({
                                        message: _this.check_type + " gagal, coba kembali.",
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                    loader_1.dismiss();
                                }
                            }, function (err) {
                                console.log(err);
                                var alert = _this.alertCtrl.create({
                                    title: '',
                                    subTitle: _this.check_type + " gagal, periksa koneksi internet anda.",
                                    buttons: ['OK']
                                });
                                alert.present();
                                loader_1.dismiss();
                            });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: _this.check_type + " gagal, coba kembali.",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loader_1.dismiss();
                        }
                    }, function (err) {
                        console.log(err);
                        var alert = _this.alertCtrl.create({
                            title: '',
                            subTitle: _this.check_type + " gagal, periksa koneksi internet anda.",
                            buttons: ['OK']
                        });
                        alert.present();
                        loader_1.dismiss();
                    });
                }
            }
            else {
                this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["d" /* api_res */] + 'am1_insert_absen_res.php', {
                    "usernameEDI": __WEBPACK_IMPORTED_MODULE_7__config__["e" /* api_user */],
                    "passwordEDI": __WEBPACK_IMPORTED_MODULE_7__config__["c" /* api_pass */],
                    "nipp": this.userdataTPK['data']['NIPP'],
                    "photo": this.filename,
                    "lat": this.lat.toString(),
                    "long": this.long.toString(),
                    "attendance_type": this.attendanceType,
                    "geo": this.address,
                    "check_type": (this.check_type == 'CHECK_IN') ? 'IN' : 'OUT',
                    'activity': '',
                    'act_type': '1'
                }, {
                    headers: headers
                }).subscribe(function (data) {
                    console.log(data);
                    if (data['rcmsg'] == "SUCCESS") {
                        // this.uploadPhoto(responData['data']['id_absen'], loader);
                        var toast = _this.toastCtrl.create({
                            message: _this.check_type + " berhasil.",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        //this.pushnotif();
                        var checkType = '';
                        var attType = '';
                        // if (this.check_type == 'CHECK_IN') {
                        //   checkType = 'Check In';
                        // } else {
                        //   checkType = 'Check Out';
                        // }
                        // if (this.attendanceType == 'WFH') {
                        //   attType = 'WFH (Work From Home)';
                        // } else if (this.attendanceType == 'WFC') {
                        //   attType = 'WFC (Work From Client)';
                        // }
                        var currDate = new Date();
                        var formatedDate = _this.datePipe.transform(currDate, 'HH:MM:SS');
                        var day = currDate.getDay();
                        var month = currDate.getMonth();
                        var year = currDate.getFullYear();
                        var date = currDate.getDate();
                        var formatedDay = '';
                        var formatedMonth = '';
                        _this.navCtrl.push('InsertNoteAttendancePage', {
                            // "transactionId": '',
                            // "checkType": this.check_type,
                            // "attendanceType": attType,
                            // "long": this.long,
                            // "lat": this.lat,
                            // "photo": url_image + '/' + this.filename,
                            // "checkTime": formatedDate,
                            // 'date': formatedDay + ", " + date + " " + formatedMonth + " " + year,
                            // "activity": "",
                            "fromPage": "CheckInPage"
                        }).then(function () {
                            _this.navCtrl.remove(1, 2);
                        });
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: _this.check_type + " gagal, coba kembali.",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        loader_1.dismiss();
                    }
                }, function (err) {
                    console.log(err);
                    var alert = _this.alertCtrl.create({
                        title: '',
                        subTitle: _this.check_type + " gagal, periksa koneksi internet anda.",
                        buttons: ['OK']
                    });
                    alert.present();
                    loader_1.dismiss();
                });
            }
        }
    };
    CheckInPage.prototype.takeImage = function (sourceType) {
        var _this = this;
        var options = {
            quality: 25,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageShow = _this.win.Ionic.WebView.convertFileSrc(imageData);
            _this.imageURI = imageData;
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filepath.resolveNativePath(_this.imageURI)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
                var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            console.log(err);
        });
    };
    CheckInPage.prototype.copyFileToLocalDir = function (namePath, currentName, filename) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(function (success) {
            _this.imageFileName = filename;
            console.log('filename : ' + _this.imageFileName);
        }, function (error) {
            console.log('Error while storing file.');
        });
    };
    CheckInPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    CheckInPage.prototype.uploadPhoto = function (id_absen, loader) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: "file",
            fileName: this.imageFileName,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: {
                "id_absen": id_absen,
                "check_type": this.check_type
            }
        };
        fileTransfer.upload(this.pathForImage(this.imageFileName), "url_upload", options)
            .then(function (data) {
            if (data['responseCode'] == 200) {
                var responData = JSON.parse(String(data['response']));
                console.log(responData);
                if (responData['rcmsg'] == 'SUCCESS') {
                    loader.dismiss();
                    var alert_6 = _this.alertCtrl.create({
                        subTitle: _this.check_type + " berhasil.",
                        cssClass: 'alert',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    _this.navCtrl.setRoot('HomePage');
                                }
                            }
                        ]
                    });
                    alert_6.present();
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "gagal melakukan absen, coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }
            else {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Gagal melakukan absen, periksa koneksi internet anda.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        }, function (err) {
            // console.log("masuk sini");
            // console.log(err);
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Upload file gagal, silahkan coba kembali',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    CheckInPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return this.file.dataDirectory + img;
        }
    };
    CheckInPage.prototype.cancel = function () {
        this.navCtrl.setRoot('Home3Page');
    };
    CheckInPage.prototype.pushnotif = function () {
        var tgl = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
        this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["d" /* api_res */] + "hadirkoe_notif/notif_atasan.php", {
            "usernameEDI": "EDI-USERNAME",
            "passwordEDI": "RURJLVBBU1NXT1JE",
            "nipp": this.userdataTPK['data']['NIPP'],
            "nama": this.userdataTPK['data']['NAMA'],
            "tgl": tgl,
            "check_type": this.type
        }, {}).subscribe(function (data) {
            console.log(data);
            if (data['rcmsg'] == "SUCCESS") {
                console.log('berhasil push notif');
            }
            else {
                console.log('gagal push notif');
            }
        }, function (err) {
            console.log('gagal push notif : ' + err);
        });
    };
    CheckInPage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d * 1000;
    };
    CheckInPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    CheckInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-check-in',
            providers: [__WEBPACK_IMPORTED_MODULE_8__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/check-in/check-in.html"*/'<!--\n  Generated template for the CheckInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" *ngIf="type == \'checkin\'">Check In</span>\n      <span ion-text color="light" *ngIf="type == \'checkout\'">Check Out</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding style="background-color:#FFF">\n\n  <div class="image-container">\n    <!-- <img class="photo" src="{{ imageShow }}" /> -->\n    <img class="photo" [src]="imageShow" />\n  </div>\n\n  <div class="data-container" padding *ngIf="userdataTPK != null">\n    <br>\n    <table>\n      <tr>\n        <td width="48px" align="left">\n          <img src="assets/flat-icon/nama.png" class="icons">\n        </td>\n        <td>\n          <span text-wrap ion-text style="color:#959595">Nama / NIPP</span><br />\n          <span text-wrap ion-text>\n            {{userdataTPK[\'data\'][\'NAMA\']}} / {{userdataTPK[\'data\'][\'NIPP\']}}\n          </span> <br /><br>\n        </td>\n      </tr>\n      <tr>\n         <td>\n          <img src="assets/flat-icon/jabatan.png" class="icons">\n        </td>\n        <td>\n          <span text-wrap ion-text style="color:#959595">Jabatan</span><br />\n          <span text-wrap ion-text>\n            {{userdataTPK[\'data\'][\'NAMAJABATAN\']}}\n          </span> <br /><br>\n        </td>\n      </tr>\n      <!-- <tr>\n        <td width="48px" align="left">\n          <img src="assets/flat-icon/nipp.png" class="icons">\n        </td>\n        <td>\n          <span text-wrap ion-text style="color:#959595">NIPP</span><br />\n          <span text-wrap ion-text>\n            {{userdataTPK[\'data\'][\'NIPP\']}}\n          </span> <br /><br>\n        </td>\n      </tr> -->\n      <!-- <tr *ngIf="type == \'checkout\'">\n        <td>\n          <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n        </td>\n        <td>\n          <span text-wrap ion-text style="color:#959595">Evaluasi Atasan </span>\n          <span *ngIf="rate == \'1\'" style="color: red;font-weight: 500;">Kurang</span>\n          <span *ngIf="rate == \'2\'" style="color: red;font-weight: 500;">Cukup</span>\n          <span *ngIf="rate == \'3\'" style="color: orange;font-weight: 500;">Baik</span>\n          <span *ngIf="rate == \'4\'" style="color: green;font-weight: 500;">Memuaskan</span>\n          <span *ngIf="rate == \'5\'" style="color: green;font-weight: 500;">Sangat Memuaskan</span>\n          <br />\n          <rating [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline"\n            halfStarIconName="star-half" starIconName="star" nullable="true">\n          </rating>\n        </td>\n      </tr> -->\n      <tr>\n        <td>\n          <img src="assets/flat-icon/fingerprint.png" class="icons">\n        </td>\n        <td>\n          <span ion-text="" style="color:#959595" text-wrap="" class="text text-md">Jenis Absen</span>\n\n          <div style="margin-top:10px;" *ngIf="dataValidasi[\'WFH\'] == true" >\n            <label class="radio-button">\n              <input type="radio" [(ngModel)]="attendanceType" id="WFH" name="absence_type" value="WFH" checked>\n              <!-- <label for="WFH">WFH (Work From Home)</label> -->\n              <span class="label-visible">\n                <span class="fake-radiobutton"></span>\n                WFH (Work From Home)\n              </span>\n            </label>\n          </div>\n          <div style="margin-top:15px;" *ngIf="dataValidasi[\'WFC\'] == true">\n            <label class="radio-button">\n              <input type="radio" [(ngModel)]="attendanceType" id="WFC" name="absence_type" value="WFC">\n              <!-- <label for="WFC">WFC (Work From Client)</label> -->\n              <span class="label-visible">\n                <span class="fake-radiobutton"></span>\n                WFC (Work From Client)\n              </span>\n            </label>\n          </div>\n          <div style="margin-top:15px;" *ngIf="dataValidasi[\'WFO\'] == true">\n            <label class="radio-button">\n              <input type="radio" [(ngModel)]="attendanceType" id="WFO" name="absence_type" value="WFO">            \n              <span class="label-visible">\n                <span class="fake-radiobutton"></span>\n                WFO (Work From Office)\n              </span>\n            </label>\n          </div>\n          <br>\n        </td>\n      </tr>\n    </table>\n\n    <ion-grid no-margin>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button class="my-button" *ngIf="type == \'checkout\'" style=" border-radius: 12px;"\n            color="secondary" (click)="vadidasiAlamat()">\n            Check Out\n            <!-- <ion-icon name="md-finger-print"></ion-icon> -->\n          </button>\n          <button ion-button icon-end class="my-button" *ngIf="type == \'checkin\'" style=" border-radius: 12px;"\n            color="secondary" (click)="vadidasiAlamat()">\n            Check In\n            <!-- <ion-icon name="md-finger-print"></ion-icon> -->\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button icon-end outline class="my-button" style=" border-radius: 12px;" color="danger"\n            (click)="cancel()">\n            cancel\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- <ion-list dining>     -->\n  <!-- <ion-item>\n        <span item-left>\n          \n        </span>\n        <ion-label stacked>Nama</ion-label>\n        <ion-input type="text" [readonly]="true" value="{{userdataTPK[\'data\'][\'NAMA\']}}"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <span item-left>\n          \n        </span>\n        <ion-label stacked>Jabatan</ion-label>\n        <ion-input type="text" [readonly]="true" value="{{userdataTPK[\'data\'][\'POSISI\']}}"></ion-input>\n      </ion-item> -->\n\n  <!-- <ion-item>\n        <span item-left>\n          <img src="assets/flat-icon/fingerprint.png" class="icons">\n        </span>\n        <ion-label stacked>Jenis Absen</ion-label>\n        <ion-select [(ngModel)]="absence_type" cancelText="Cancel" okText="OK" placeholder="pilih jenis absen">\n          <ion-option value="WFH">WFH (Work From Home)</ion-option>\n          <ion-option value="WFO">WFO (Work From Office)</ion-option>\n          <ion-option value="WFC">WFC (Work From Client)</ion-option>\n          <ion-option value="Absence">Absence</ion-option>\n        </ion-select>\n      </ion-item> -->\n\n  <!-- <ion-item>\n        <span item-left>\n          <img src="assets/img/home/document-icon.png" class="icons">\n        </span>\n        <ion-label stacked>Keterangan</ion-label>\n        <ion-textarea [(ngModel)]="note" #myInput id="myInput" rows="3">\n        </ion-textarea>\n      </ion-item> -->\n  <!-- </ion-list> -->\n  <!-- <ion-row>\n    <br>\n    <ion-col col-12 class="image-container" (click)="takeImage(1)">\n      <img class="photo" src="{{ imageShow }}" />\n      <span ion-text style="text-align:center;color:gray;">Upload Foto</span>\n    </ion-col>\n  </ion-row>  -->\n\n  <!-- <ion-card *ngIf="userdataTPK != null" class="my-ion-card">\n    <ion-card-content>\n     \n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar class="footer-toolbar" >\n    <button ion-button icon-end class="my-button" style=" border-radius: 12px;" color="secondary" (click)="goToPage()">\n      Check In\n      <ion-icon name="md-finger-print"></ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/check-in/check-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["e" /* DatePipe */]])
    ], CheckInPage);
    return CheckInPage;
}());

//# sourceMappingURL=check-in.js.map

/***/ })

});
//# sourceMappingURL=5.js.map