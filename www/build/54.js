webpackJsonp([54],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertNoteAttendancePageModule", function() { return InsertNoteAttendancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insert_note_attendance__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InsertNoteAttendancePageModule = /** @class */ (function () {
    function InsertNoteAttendancePageModule() {
    }
    InsertNoteAttendancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__insert_note_attendance__["a" /* InsertNoteAttendancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__insert_note_attendance__["a" /* InsertNoteAttendancePage */]),
            ],
        })
    ], InsertNoteAttendancePageModule);
    return InsertNoteAttendancePageModule;
}());

//# sourceMappingURL=insert-note-attendance.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertNoteAttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InsertNoteAttendancePage = /** @class */ (function () {
    function InsertNoteAttendancePage(navCtrl, navParams, toastCtrl, soapService, loadingCtrl, storage, sanitizer, http, alertCtrl, datepipe, modalCtrl, datePicker) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.datepipe = datepipe;
        this.modalCtrl = modalCtrl;
        this.datePicker = datePicker;
        this.isLoading = false;
        this.inputActivityList = [];
        this.originalActivityList = [];
        this.updateStatusAlert = [];
        // this.transactionId = navParams.get('transactionId');
        // this.checkType = navParams.get('checkType');
        // this.attendanceType = navParams.get('attendanceType');
        // this.long = navParams.get('long');
        // this.lat = navParams.get('lat');
        // this.photo = navParams.get('photo');
        // this.date = navParams.get('date');
        // this.checkTime = navParams.get('checkTime');
        this.fromPage = navParams.get('fromPage');
        this.shiftDate = navParams.get("shiftDate");
        // this.activity = navParams.get('activity');
        console.log(this.fromPage);
        // if (20 > this.numberExtractor('Dalam Proses - 20%')) {
        //   console.log('iya lebih besar');
        // }
        console.log(this.photo);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.idUser = _this.userdataTPK['data']['IDUSER'];
            _this.isLoading = true;
            _this.getDetail();
            console.log(_this.userdataTPK);
        });
        console.log(this.checkType);
        console.log(this.attendanceType);
        console.log(this.transactionId);
        console.log(this.navCtrl.length());
    }
    InsertNoteAttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InsertNoteAttendancePage');
    };
    InsertNoteAttendancePage.prototype.doInsert = function () {
        var _this = this;
        if (this.activity.length > 1000) {
            var alert_1 = this.alertCtrl.create({
                title: '',
                subTitle: 'Jumlah karakter activity maksimal 1000 karakter.',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Mohon tunggu...",
                spinner: 'dots',
                cssClass: 'transparent',
                dismissOnPageChange: true
            });
            loader_1.present();
            // this.soapService.post(api_base_url, 'am1_insert_absen', {
            //   fStream: JSON.stringify(
            //     {
            //       "usernameEDI": api_user,
            //       "passwordEDI": api_pass,
            //       "nipp": this.userdataTPK['data']['NIPP'],
            //       "photo": '',
            //       "lat": '',
            //       "long": '',
            //       "attendance_type": '',
            //       "geo": '',
            //       "check_type": (this.checkType == 'CHECK_IN') ? 'IN' : 'OUT',
            //       'activity': this.activity,
            //       'act_type': '2'
            //     }
            //   )
            // }).then(result => {
            //   var responData = JSON.parse(String(result));
            //   console.log(responData);
            //   if (responData['rcmsg'] == "SUCCESS") {
            //     let toast = this.toastCtrl.create({
            //       message: "Berhasil menambahkan activity.",
            //       duration: 4000,
            //       position: 'bottom'
            //     });
            //     loader.dismiss();
            //     toast.present();
            //     this.navCtrl.setRoot('Home3Page');
            //   } else {
            //     let toast = this.toastCtrl.create({
            //       message: "gagal menambahkan activity, coba kembali.",
            //       duration: 3000,
            //       position: 'bottom'
            //     });
            //     toast.present();
            //     loader.dismiss();
            //     this.navCtrl.setRoot('Home3Page');
            //   }
            // }).catch(error => {
            //   console.log(error);
            //   let toast = this.toastCtrl.create({
            //     message: "gagal menambahkan activity, coba kembali.",
            //     duration: 3000,
            //     position: 'bottom'
            //   });
            //   toast.present();
            //   loader.dismiss();
            //   this.navCtrl.setRoot('Home3Page');
            // });
            var date = new Date();
            var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
            var rand = Math.floor((Math.random() * 100000000) + 1);
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
                'Accept': "*/*",
                //'Access-Control-Allow-Origin':'http://localhost:8100',
                // 'x-ibm-client-id': client_id,
                // 'x-ibm-client-secret': client_secret,
                'username': __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
                'password': __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
                'externalId': rand.toString(),
                'timestamp': formattedDate,
                'Content-Type': 'application/json'
            });
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_res */] + 'absen', {
                "nipp": this.userdataTPK['data']['NIPP'],
                "photo": '',
                "lat": '',
                "long": '',
                "attendance_type": '',
                "geo": '',
                "check_type": (this.checkType == 'CHECK_IN') ? 'IN' : 'OUT',
                'activity': this.activity,
                'act_type': '2'
            }, {
                headers: headers
            }).subscribe(function (data) {
                console.log(data);
                if (data['status'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: "Berhasil menambahkan activity.",
                        duration: 4000,
                        position: 'bottom'
                    });
                    loader_1.dismiss();
                    toast.present();
                    _this.navCtrl.setRoot('Home3Page');
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "gagal menambahkan activity, coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader_1.dismiss();
                }
            }, function (err) {
                console.log(err);
                var toast = _this.toastCtrl.create({
                    message: "gagal menambahkan activity, coba kembali.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader_1.dismiss();
            });
        }
    };
    InsertNoteAttendancePage.prototype.openMap = function () {
        this.navCtrl.push("MapPage", {
            "type": "",
            "long": this.long,
            "lat": this.lat,
            "fromPage": "InsertNoteAttendancePage"
        }).then(function () {
        });
    };
    InsertNoteAttendancePage.prototype.getDetail = function () {
        var _this = this;
        console.log({
            'usernameEDI': __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
            'passwordEDI': __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
            'id_user': this.idUser,
            'tgl': formattedDate
        });
        var date = new Date();
        var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
        var rand = Math.floor((Math.random() * 100000000) + 1);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': "*/*",
            //'Access-Control-Allow-Origin':'http://localhost:8100',
            // 'x-ibm-client-id': client_id,
            // 'x-ibm-client-secret': client_secret,
            'username': __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
            'password': __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
            'externalId': rand.toString(),
            'timestamp': formattedDate,
            'Content-Type': 'application/json'
        });
        var currentDate = new Date();
        var formattedDate = this.datepipe.transform(currentDate, 'dd-MM-yyyy');
        if (this.shiftDate) {
            this.dateShift = this.shiftDate;
        }
        else {
            this.dateShift = formattedDate;
        }
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_res */] + 'am6_detail_absen.php', {
            'usernameEDI': __WEBPACK_IMPORTED_MODULE_3__config__["e" /* api_user */],
            'passwordEDI': __WEBPACK_IMPORTED_MODULE_3__config__["c" /* api_pass */],
            'id_user': this.idUser,
            // 'tgl': formattedDate
            'tgl': this.dateShift
        }).subscribe(function (result) {
            var data = result['data'];
            console.log(data);
            if (result['rcmsg'] == 'SUCCESS') {
                if (data['CHECK_IN'] != null || data['CHECK_OUT'] != null) {
                    _this.activityList = data;
                    _this.arahanAtasan = _this.activityList['CHECK_IN_ACTIVITY_SPV'];
                }
                console.log(_this.activityList);
                if (data['CHECK_IN'] == null && data['CHECK_OUT'] == null) {
                    console.log('masuk sini');
                    var alert_2 = _this.alertCtrl.create({
                        title: '',
                        subTitle: 'Belum ada data absensi, silahkan melakukan Check In/Check Out terlebih dahulu.',
                        buttons: ['OK']
                    });
                    alert_2.present();
                    _this.navCtrl.pop();
                }
                else if (data['CHECK_IN'] != null && data['CHECK_OUT'] == null) {
                    _this.transactionId = '';
                    _this.checkType = 'CHECK_IN';
                    _this.attendanceType = _this.activityList['CHECK_IN_TYPE'];
                    _this.long = _this.activityList['CHECK_IN_LONGITUDE'];
                    _this.lat = _this.activityList['CHECK_IN_LATITUDE'];
                    _this.photo = _this.activityList['CHECK_IN_PHOTO'];
                    _this.checkTime = _this.activityList['CHECK_IN'];
                    _this.date = _this.activityList['DATE'];
                    _this.activity = _this.activityList['CHECK_IN_ACTIVITY'];
                }
                else if (data['CHECK_IN'] == null && data['CHECK_OUT'] != null) {
                    _this.transactionId = '';
                    _this.checkType = 'CHECK_OUT';
                    _this.attendanceType = _this.activityList['CHECK_OUT_TYPE'];
                    _this.long = _this.activityList['CHECK_OUT_LONGITUDE'];
                    _this.lat = _this.activityList['CHECK_OUT_LATITUDE'];
                    _this.photo = _this.activityList['CHECK_OUT_PHOTO'];
                    _this.checkTime = _this.activityList['CHECK_OUT'];
                    _this.date = _this.activityList['DATE'];
                    _this.activity = _this.activityList['CHECK_OUT_ACTIVITY'];
                }
                else if (data['CHECK_IN'] != null && data['CHECK_OUT'] != null) {
                    _this.transactionId = '';
                    _this.checkType = 'CHECK_OUT';
                    _this.attendanceType = _this.activityList['CHECK_OUT_TYPE'];
                    _this.long = _this.activityList['CHECK_OUT_LONGITUDE'];
                    _this.lat = _this.activityList['CHECK_OUT_LATITUDE'];
                    _this.photo = _this.activityList['CHECK_OUT_PHOTO'];
                    _this.checkTime = _this.activityList['CHECK_OUT'];
                    _this.date = _this.activityList['DATE'];
                    _this.activity = _this.activityList['CHECK_OUT_ACTIVITY'];
                }
                _this.photo = _this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + _this.photo);
                // this.isLoading = false;
                if (_this.fromPage == 'CheckInPage' && _this.checkType == 'CHECK_OUT') {
                    if (_this.activityList['CHECK_IN_ACTIVITY_SPV'] != '' && _this.activityList['CHECK_IN_ACTIVITY_SPV'] != null) {
                        _this.activity = _this.activityList['CHECK_IN_ACTIVITY'] + "\n" + _this.activityList['CHECK_IN_ACTIVITY_SPV'];
                    }
                    else {
                        _this.activity = _this.activityList['CHECK_IN_ACTIVITY'];
                    }
                }
                _this.getDetailActivity();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Terjadi kesalahan, Silahkan Coba Kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.isLoading = false;
            }
            // if (this.fromPage == 'CheckInPage' && this.checkType == 'CHECK_IN') {       
            //   this.getDetailActivity();
            // } else {
            //   this.getDetailActivity();
            // }
        }, function (err) {
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
        });
    };
    InsertNoteAttendancePage.prototype.openModalRating = function (type) {
        var _this = this;
        var modal = this.modalCtrl.create("RateAbsensiPage", {
            // kepadaList : this.userdataTPK['data']['LISTOFFICER'],
            "data": this.activityList,
            "type": type,
            "shiftDate": new Date(),
            'fromPage': 'InsertNoteAttendancePage',
            "rateFor": 'atasan'
        }, {
            enableBackdropDismiss: true,
            showBackdrop: true,
            cssClass: 'my-modal2'
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data != null) {
                if (data['isSubmit']) {
                    _this.getDetail();
                }
            }
        });
    };
    InsertNoteAttendancePage.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    InsertNoteAttendancePage.prototype.pushNotif = function () {
        // let nippList = [];
        // let pesan = this.userdataTPK['data']['NAMA'] +  ' melakukan check in WFH / WFC, mohon berikan arahan (opsional)';
        // let res = 'OutboxPage';
        // nippList.push(this.userdataTPK['data']['NAMA']);
        // this.soapService
        //   .post(api_base_url, 'eoffice_notif_imove_nipp', {
        //     fStream: JSON.stringify(
        //       {
        //         usernameEDI: api_user,
        //         passwordEDI: api_pass,
        //         nipp: nippList,
        //         data: {
        //           "res": res,
        //           "nipp": this.nipp,
        //           "messageData": this.messageData
        //         },
        //         heading : {
        //           "en": "Absensi"
        //         },
        //         content: {
        //           "en": pesan
        //         },
        //         id_kategori: ""
        //       }
        //     )
        //   }).then(result => {
        //     let hasil = JSON.stringify(result);
        //     this.navCtrl.pop();
        //   }).catch(error => {
        //     this.navCtrl.pop();
        //   });
    };
    InsertNoteAttendancePage.prototype.getDetailActivity = function () {
        var _this = this;
        console.log("check type nya : " + this.checkType);
        var selectType = '';
        if (this.checkType == 'CHECK_OUT') {
            selectType = 'checkout';
        }
        else {
            selectType = 'activity';
        }
        var formattedDate = this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_res */] + "am7_activity.php", {
            "usernameEDI": "EDI-USERNAME",
            "passwordEDI": "RURJLVBBU1NXT1JE",
            "id_user": this.idUser,
            "nipp": this.userdataTPK['data']['NIPP'],
            "arr_param": [],
            "action": "SELECT",
            "tgl": formattedDate,
            'select_type': selectType
        }, {}).subscribe(function (data) {
            console.log(data);
            if (data['rcmsg'] == "SUCCESS") {
                for (var i = 0; i < data['data'].length; i++) {
                    _this.inputActivityList.push({
                        'att_activity_id': data['data'][i]['ATT_ACTIVITY_ID'],
                        'activity': data['data'][i]['ACTIVITY'],
                        'status': data['data'][i]['STATUS'],
                        'tgl_awal': data['data'][i]['TGL_AWAL'],
                        'tgl_akhir': data['data'][i]['TGL_AKHIR'],
                    });
                    _this.originalActivityList.push({
                        'att_activity_id': data['data'][i]['ATT_ACTIVITY_ID'],
                        'activity': data['data'][i]['ACTIVITY'],
                        'status': data['data'][i]['STATUS'],
                        'tgl_awal': data['data'][i]['TGL_AWAL'],
                        'tgl_akhir': data['data'][i]['TGL_AKHIR'],
                    });
                }
                if (data['data'].length == 0) {
                    console.log('masuk sini');
                    _this.inputActivityList.push({
                        'att_activity_id': '',
                        'activity': '',
                        'status': '',
                        'tgl_awal': '',
                        'tgl_akhir': '',
                    });
                    _this.originalActivityList.push({
                        'att_activity_id': '',
                        'activity': '',
                        'status': '',
                        'tgl_awal': '',
                        'tgl_akhir': '',
                    });
                }
                console.log(_this.inputActivityList);
                _this.isLoading = false;
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan data activity, coba kembali.',
                    buttons: ['OK']
                });
                alert_3.present();
                _this.isLoading = false;
                _this.navCtrl.pop();
            }
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan data activity, coba kembali.',
                buttons: ['OK']
            });
            alert.present();
            _this.isLoading = false;
            _this.navCtrl.pop();
        });
    };
    InsertNoteAttendancePage.prototype.addNewActivity = function () {
        var _this = this;
        this.inputActivityList.push({
            'att_activity_id': '',
            'activity': '',
            'status': '',
            'tgl_awal': '',
            'tgl_akhir': '',
        });
        setTimeout(function () {
            _this.content.scrollToBottom(1000);
        });
    };
    InsertNoteAttendancePage.prototype.delActivity = function (index) {
        this.inputActivityList.splice(index, 1);
    };
    InsertNoteAttendancePage.prototype.showDatePicker = function (type, index) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (type == 1) {
                _this.inputActivityList[index]['tgl_awal'] = _this.datepipe.transform(date, 'dd-MM-yyyy');
            }
            else if (type == 2) {
                _this.inputActivityList[index]['tgl_akhir'] = _this.datepipe.transform(date, 'dd-MM-yyyy');
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    InsertNoteAttendancePage.prototype.checkFocus = function (data, index) {
        this.showDatePicker(data, index);
    };
    InsertNoteAttendancePage.prototype.submitActivity = function (actionType) {
        var _this = this;
        console.log(actionType);
        var arrayParamInsert = [];
        var arrayParamUpdate = [];
        for (var i = 0; i < this.inputActivityList.length; i++) {
            if (this.inputActivityList[i]['att_activity_id'] == '') {
                var tgl_awal = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
                var tgl_akhir = '';
                if (this.inputActivityList[i]['status'] == 'Selesai - 100%' || this.inputActivityList[i]['status'] == 'Batal') {
                    tgl_akhir = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
                }
                else {
                    // tgl_akhir = this.inputActivityList[i]['tgl_akhir'];
                    tgl_akhir = null;
                }
                arrayParamInsert.push({
                    'att_activity_id': '',
                    'activity': this.inputActivityList[i]['activity'],
                    'status': this.inputActivityList[i]['status'],
                    'tgl_awal': tgl_awal,
                    'tgl_akhir': tgl_akhir,
                });
            }
            if (this.inputActivityList[i]['att_activity_id'] != '') {
                var tgl_akhir = '';
                if (this.inputActivityList[i]['status'] == 'Selesai - 100%' || this.inputActivityList[i]['status'] == 'Batal') {
                    tgl_akhir = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
                }
                else {
                    // tgl_akhir = this.inputActivityList[i]['tgl_akhir'];
                    tgl_akhir = null;
                }
                arrayParamUpdate.push({
                    'att_activity_id': this.inputActivityList[i]['att_activity_id'],
                    'activity': this.inputActivityList[i]['activity'],
                    'status': this.inputActivityList[i]['status'],
                    'tgl_awal': this.inputActivityList[i]['tgl_awal'],
                    'tgl_akhir': tgl_akhir,
                });
            }
            // if (actionType == 'INSERT') {      
            //   if (this.inputActivityList[i]['att_activity_id'] == '') {
            //     var tgl_awal  = this.datepipe.transform(new Date(),'dd-MM-yyyy');
            //     arrayParamInsert.push(
            //       {
            //         'att_activity_id':'',
            //         'activity': this.inputActivityList[i]['activity'],
            //         'status':'',
            //         'tgl_awal': tgl_awal,
            //         'tgl_akhir':'',  
            //       }
            //     )
            //   }
            // } else if (actionType == 'UPDATE') {
            //   var tgl_akhir = '';
            //   if (this.inputActivityList[i]['status'] == 'Selesai - 100%' || this.inputActivityList[i]['status'] == 'Batal' ) {
            //     tgl_akhir = this.datepipe.transform(new Date(),'dd-MM-yyyy');
            //   } else {
            //     // tgl_akhir = this.inputActivityList[i]['tgl_akhir'];
            //     tgl_akhir = null;
            //   }
            //   arrayParamUpdate.push(
            //     {
            //       'att_activity_id':this.inputActivityList[i]['att_activity_id'],
            //       'activity': this.inputActivityList[i]['activity'],
            //       'status':this.inputActivityList[i]['status'],
            //       'tgl_awal': this.inputActivityList[i]['tgl_awal'],
            //       'tgl_akhir':tgl_akhir,  
            //     }
            //   )
            // }    
        }
        console.log("array insert : " + JSON.stringify(arrayParamInsert));
        console.log("array update : " + JSON.stringify(arrayParamUpdate));
        var loader = this.loadingCtrl.create({
            content: "Mohon tunggu...",
            spinner: 'dots',
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loader.present();
        if (arrayParamInsert.length > 0 && arrayParamUpdate.length > 0) {
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_res */] + "am7_activity.php", {
                "usernameEDI": "EDI-USERNAME",
                "passwordEDI": "RURJLVBBU1NXT1JE",
                "id_user": this.idUser,
                "nipp": this.userdataTPK['data']['NIPP'],
                "arr_param": arrayParamInsert,
                "action": 'INSERT',
                "tgl": "",
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data['rcmsg'] == "SUCCESS") {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_res */] + "am7_activity.php", {
                        "usernameEDI": "EDI-USERNAME",
                        "passwordEDI": "RURJLVBBU1NXT1JE",
                        "id_user": _this.idUser,
                        "nipp": _this.userdataTPK['data']['NIPP'],
                        "arr_param": arrayParamUpdate,
                        "action": 'UPDATE',
                        "tgl": "",
                    }, {}).subscribe(function (data) {
                        console.log(data);
                        if (data['rcmsg'] == "SUCCESS") {
                            var toast = _this.toastCtrl.create({
                                message: "Berhasil menambah/mengubah activity.",
                                duration: 4000,
                                position: 'bottom'
                            });
                            loader.dismiss();
                            toast.present();
                            _this.navCtrl.setRoot('Home3Page');
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "berhasil menambah, namun gagal mengubah activity.",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loader.dismiss();
                        }
                    }, function (err) {
                        console.log(err);
                        var toast = _this.toastCtrl.create({
                            message: "berhasil menambah, namun gagal mengubah activity.",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        loader.dismiss();
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "gagal menambahkan activity, coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                }
            }, function (err) {
                console.log(err);
                var toast = _this.toastCtrl.create({
                    message: "gagal menambahkan activity, coba kembali.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
            });
        }
        else if (arrayParamInsert.length > 0 && arrayParamUpdate.length == 0) {
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_res */] + "am7_activity.php", {
                "usernameEDI": "EDI-USERNAME",
                "passwordEDI": "RURJLVBBU1NXT1JE",
                "id_user": this.idUser,
                "nipp": this.userdataTPK['data']['NIPP'],
                "arr_param": arrayParamInsert,
                "action": 'INSERT',
                "tgl": "",
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data['rcmsg'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: "Berhasil menambahkan activity.",
                        duration: 4000,
                        position: 'bottom'
                    });
                    loader.dismiss();
                    toast.present();
                    _this.navCtrl.setRoot('Home3Page');
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "gagal menambahkan activity, coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                }
            }, function (err) {
                console.log(err);
                var toast = _this.toastCtrl.create({
                    message: "gagal menambahkan activity, coba kembali.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
            });
        }
        else if (arrayParamInsert.length == 0 && arrayParamUpdate.length > 0) {
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* api_res */] + "am7_activity.php", {
                "usernameEDI": "EDI-USERNAME",
                "passwordEDI": "RURJLVBBU1NXT1JE",
                "id_user": this.idUser,
                "nipp": this.userdataTPK['data']['NIPP'],
                "arr_param": arrayParamUpdate,
                "action": 'UPDATE',
                "tgl": "",
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data['rcmsg'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: "Berhasil mengubah activity.",
                        duration: 4000,
                        position: 'bottom'
                    });
                    loader.dismiss();
                    toast.present();
                    _this.navCtrl.setRoot('Home3Page');
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "gagal mengubah activity, coba kembali.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                }
            }, function (err) {
                console.log(err);
                var toast = _this.toastCtrl.create({
                    message: "gagal mengubah activity, coba kembali.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: "gagal menambahkan activity, coba kembali.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loader.dismiss();
        }
    };
    InsertNoteAttendancePage.prototype.disableSubmitButton = function () {
        var error = [];
        for (var i = 0; i < this.inputActivityList.length; i++) {
            if (this.checkType == 'CHECK_OUT') {
                if (this.inputActivityList[i]['activity'] == '' || this.inputActivityList[i]['status'] == '' || this.inputActivityList[i]['status'] == null) {
                    error.push('error');
                }
                else {
                    if (this.inputActivityList[i]['att_activity_id'] != '') {
                        if (this.inputActivityList[i]['status'] != '' || this.inputActivityList[i]['status'] != null) {
                            if (this.inputActivityList[i]['status'] != 'Batal' && this.numberExtractor(this.originalActivityList[i]['status']) > this.numberExtractor(this.inputActivityList[i]['status'])) {
                                error.push('error');
                            }
                        }
                    }
                    // error.push('false');                        
                }
            }
            else if (this.checkType == 'CHECK_IN') {
                if (this.inputActivityList[i]['activity'] == '') {
                    error.push('error');
                }
                else {
                    // error.push('false');
                }
            }
        }
        if (error.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    InsertNoteAttendancePage.prototype.checkReadOnly = function (input) {
        if (input['att_activity_id'] != '' || input['att_activity_id'] != null) {
            return true;
        }
        else {
            return false;
        }
    };
    InsertNoteAttendancePage.prototype.numberExtractor = function (text) {
        if (text != null && text != 'Batal') {
            var thenum = text.match(/\d+/);
            return parseInt(thenum[0]);
        }
        else {
            return 0;
        }
    };
    InsertNoteAttendancePage.prototype.onChangeStatus = function (event, i) {
        // console.log('yg di input : ' + this.numberExtractor(this.inputActivityList[i]['status']));
        // console.log('yg sebelumnya : ' + this.numberExtractor(this.originalActivityList[i]['status']));
        // console.log('yg ori > dari yang di input : ');
        // if (this.inputActivityList[i]['status'] != '' || this.inputActivityList[i]['status'] != null) {
        //   if (this.inputActivityList[i]['status'] != 'Batal' && this.numberExtractor(this.originalActivityList[i]['status']) > this.numberExtractor(this.inputActivityList[i]['status'])) {
        //     // this.updateStatusAlert[i] = '1';       
        //     console.log('IYO'); 
        //   } else {
        //     // this.updateStatusAlert[i] = '0';           
        //     console.log('OGAK'); 
        //   }
        // }    
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], InsertNoteAttendancePage.prototype, "content", void 0);
    InsertNoteAttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-insert-note-attendance',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/insert-note-attendance/insert-note-attendance.html"*/'<!--\n  Generated template for the InsertNoteAttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" *ngIf="fromPage != \'AbsenActivityPage\'">Activity</span>\n      <span ion-text color="light" *ngIf="fromPage == \'AbsenActivityPage\'">{{ date }}</span>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding style="background-color:#FFF">\n  <div padding *ngIf="fromPage == \'CheckInPage\'">\n\n    <div *ngIf="activityList != null && isLoading == false">\n      <br>\n      <table>\n        <tr>\n          <td width="48px" align="left">\n            <img src="assets/flat-icon/fingerprint.png" class="icons">\n          </td>\n          <td>\n            <span text-wrap ion-text style="color:#959595">Jenis Absen</span><br />\n            <span text-wrap ion-text>{{ attendanceType }}</span> <br /><br>\n          </td>\n        </tr>\n      </table>\n      <br>\n\n      <!-- <ion-item *ngIf="activityList[\'CHECK_IN_ACTIVITY_SPV\'] != \'\'" no-lines>\n        <span item-left>\n          <img src="assets/flat-icon/checkin.png" class="icons" *ngIf="checkType == \'Check In\'">\n          <img src="assets/flat-icon/checkout.png" class="icons" *ngIf="checkType == \'Check Out\'">\n        </span>\n        <span text-wrap ion-text style="color:#959595; font-size: 1.2rem;">Arahan Tambahan</span><br />\n        <span text-wrap ion-text\n          style="white-space: pre-line !important;">{{ activityList[\'CHECK_IN_ACTIVITY_SPV\'] }}</span>\n        <br>\n      </ion-item> -->\n\n\n      <!-- <ion-item>\n        <span item-left>\n\n          <img src="assets/flat-icon/checkin.png" class="icons" *ngIf="checkType == \'IN\'">\n          <img src="assets/flat-icon/checkout.png" class="icons" *ngIf="checkType == \'OUT\'">\n        </span>\n        <ion-label stacked>Activity</ion-label>\n        <ion-textarea [(ngModel)]="activity" #myInput id="myInput" rows="5">\n        </ion-textarea>\n      </ion-item> -->\n\n      <!-- <ion-grid no-margin>\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button icon-end class="my-button" style=" border-radius: 12px;" color="secondary" [disabled]="activity == null || activity == \'\'"\n              (click)="doInsert()">\n              Submit\n              <ion-icon name="md-checkmark"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n      <div *ngFor="let inputActivity of inputActivityList; let i = index" class="my-card">\n        <div class="delete-class" *ngIf="i > 0 && inputActivity[\'att_activity_id\'] == \'\'">\n          <button ion-button icon-only color="danger" clear style="border-radius: 8px !important;"\n            (click)="delActivity(i)">\n            <ion-icon name="md-close"></ion-icon>\n            <!-- Delete -->\n          </button>\n        </div>\n\n        <ion-item>\n          <span item-left>\n            <img src="assets/flat-icon/alasan.png" class="icons">\n          </span>\n          <ion-label stacked>Activity</ion-label>\n          <!-- <ion-input type="text" [(ngModel)]="inputActivity[\'activity\']"></ion-input> -->\n          <ion-textarea [(ngModel)]="inputActivity[\'activity\']" rows="2">\n          </ion-textarea>\n          <!-- <ion-input type="text" [(ngModel)]="inputActivity[\'activity\']" *ngIf="inputActivity[\'att_activity_id\'] == \'\'"></ion-input>\n          <ion-input type="text" [readonly]="true" [(ngModel)]="inputActivity[\'activity\']" *ngIf="inputActivity[\'att_activity_id\'] != \'\'"></ion-input> -->\n        </ion-item>\n        <br>\n\n        <ion-item style="width:80%;" lines *ngIf="checkType == \'CHECK_OUT\'">\n          <span item-left>\n            <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n          </span>\n          <ion-label stacked>Status</ion-label>\n          <ion-select [(ngModel)]="inputActivity[\'status\']" placeholder="" (ionChange)="onChangeStatus($event, i)">\n            <!-- <div *ngIf="inputActivity[\'status\'] == null" > -->\n            <ion-option value="Batal">Batal</ion-option>\n            <ion-option value="Dalam Proses - 0%">Dalam Proses - 0%</ion-option>\n            <ion-option value="Dalam Proses - 10%">Dalam Proses - 10%</ion-option>\n            <ion-option value="Dalam Proses - 20%">Dalam Proses - 20%</ion-option>\n            <ion-option value="Dalam Proses - 30%">Dalam Proses - 30%</ion-option>\n            <ion-option value="Dalam Proses - 40%">Dalam Proses - 40%</ion-option>\n            <ion-option value="Dalam Proses - 50%">Dalam Proses - 50%</ion-option>\n            <ion-option value="Dalam Proses - 60%">Dalam Proses - 60%</ion-option>\n            <ion-option value="Dalam Proses - 70%">Dalam Proses - 70%</ion-option>\n            <ion-option value="Dalam Proses - 80%">Dalam Proses - 80%</ion-option>\n            <ion-option value="Dalam Proses - 90%">Dalam Proses - 90%</ion-option>\n            <ion-option value="Selesai - 100%">Selesai - 100%</ion-option>\n            <!-- </div> -->\n            <!-- <div *ngIf="inputActivity[\'status\'] != null">\n              <ion-option value="Batal">Batal</ion-option>                     \n              <ion-option value="Dalam Proses - 0%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 0%\')">Dalam Proses - 0%</ion-option>\n              <ion-option value="Dalam Proses - 10%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 10%\')">Dalam Proses - 10%</ion-option>\n              <ion-option value="Dalam Proses - 20%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 20%\')">Dalam Proses - 20%</ion-option>\n              <ion-option value="Dalam Proses - 30%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 30%\')">Dalam Proses - 30%</ion-option>\n              <ion-option value="Dalam Proses - 40%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 40%\')">Dalam Proses - 40%</ion-option>\n              <ion-option value="Dalam Proses - 50%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 50%\')">Dalam Proses - 50%</ion-option>\n              <ion-option value="Dalam Proses - 60%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 60%\')">Dalam Proses - 60%</ion-option>\n              <ion-option value="Dalam Proses - 70%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 70%\')">Dalam Proses - 70%</ion-option>\n              <ion-option value="Dalam Proses - 80%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 80%\')">Dalam Proses - 80%</ion-option>\n              <ion-option value="Dalam Proses - 90%" *ngIf="inputActivity[\'status\'] <= this.numberExtractor(\'Dalam Proses - 90%\')">Dalam Proses - 90%</ion-option>\n              <ion-option value="Selesai - 100%">Selesai - 100%</ion-option>        \n            </div> -->\n\n          </ion-select>\n        </ion-item>\n\n        <div style="margin-left: 10px;" *ngIf="checkType == \'CHECK_OUT\' && inputActivity[\'att_activity_id\'] != \'\'">\n          <div\n            *ngIf="inputActivity[\'status\'] != null && originalActivityList[i][\'status\'] != null && inputActivity[\'status\'] != \'\' && originalActivityList[i][\'status\'] != \'\'">\n            <span text-wrap ion-text style="color:red; font-size: 1.2rem;"\n              *ngIf="inputActivity[\'status\'] != \'Batal\' && (numberExtractor(originalActivityList[i][\'status\']) > numberExtractor(inputActivityList[i][\'status\']))">*Presentase\n              status tidak boleh kurang dari sebelumnya ( {{ numberExtractor(originalActivityList[i][\'status\']) }}%\n              ).</span>\n            <br>\n          </div>\n          <!-- <span text-wrap ion-text style="color:red; font-size: 1.2rem;" >{{ originalActivityList[i][\'status\'] }}</span> -->\n        </div>\n        <!-- <ion-item *ngIf="checkType == \'CHECK_OUT\'">\n          <span item-left>\n            <img src="assets/flat-icon/end_date.png" class="icons">\n          </span>\n          <ion-label color="color4" stacked>Tanggal Awal</ion-label>\n          <ion-input type="text" [readonly]="true" [(ngModel)]="inputActivity[\'tgl_awal\']" (ionFocus)="checkFocus(1, i)" (click)="showDatePicker(1, i)"></ion-input>          \n        </ion-item> -->\n\n        <!-- <ion-item *ngIf="checkType == \'CHECK_OUT\'">\n          <span item-left>\n            <img src="assets/flat-icon/start_date.png" class="icons">\n          </span>\n          <ion-label color="color4" stacked>Tanggal Akhir</ion-label>\n          <ion-input type="text" [readonly]="true" [(ngModel)]="inputActivity[\'tgl_akhir\']" (ionFocus)="checkFocus(2, i)" (click)="showDatePicker(2, i)"></ion-input>\n        </ion-item> -->\n      </div>\n\n      <!-- <table width="100%" *ngIf="checkType != \'CHECK_OUT\'"> -->\n      <table width="100%">\n        <tr>\n          <td width="50%" align="center" (click)="addNewActivity()">\n            <button ion-button icon-start style="width: 95% !important;border-radius: 10px;">\n              <ion-icon name="ios-add"></ion-icon>\n              Tambah\n            </button>\n          </td>\n          <td width="50%" align="center">\n            <button ion-button icon-start style="width: 95% !important;border-radius: 10px;" color="secondary"\n              (click)="submitActivity(\'INSERT\')" [disabled]="disableSubmitButton()">\n              <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n              Submit\n            </button>\n          </td>\n        </tr>\n      </table>\n\n      <!-- <table width="100%" *ngIf="checkType == \'CHECK_OUT\'">\n        <tr>\n          <td width="100%" align="center">\n            <button ion-button icon-start style="width: 100% !important;border-radius: 10px;" color="secondary" (click)="submitActivity(\'UPDATE\')"\n              [disabled]="disableSubmitButton()">\n              <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n              Submit\n            </button>\n          </td>\n        </tr>\n      </table> -->\n      <br>\n\n    </div>\n\n    <!-- <div *ngIf="activityList == null && isLoading == true"> -->\n    <div *ngIf="inputActivityList.length == 0 && isLoading == true">\n      <div class="data-container">\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n      </div>\n\n      <!-- <br>\n      <div class="animate-skeleton-background load-1"></div>\n      <div class="animate-skeleton-background load-2"></div>\n\n      <ion-item>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-3"></div>\n      </ion-item> -->\n\n    </div>\n\n  </div>\n\n\n  <div *ngIf="fromPage == \'AbsenActivityPage\'">\n\n    <!-- <div *ngIf="activityList != null && isLoading == false"> -->\n    <div *ngIf="inputActivityList.length > 0 && isLoading == false">\n      <!-- <div class="image-container"> -->\n      <!-- <img class="photo" src="{{ photo }}" /> -->\n      <!-- <img class="photo" [src]="photo" />\n      </div> -->\n      <div padding class="data-container">\n        <!-- <div class="header-container">\n          <br>\n          <span ion-text text-wrap class="font" color="danger" *ngIf="checkType == \'CHECK_OUT\'"><b>Check\n              Out</b><br></span>\n          <span ion-text text-wrap class="font" color="secondary" *ngIf="checkType == \'CHECK_IN\'"><b>Check\n              In</b><br></span>\n          <span ion-text text-wrap class="font2"><b>{{ checkTime }}</b></span><br>\n          <span ion-text text-wrap class="font1" style="color:gray;">{{ attendanceType }}</span><br><br>\n\n          <button ion-button icon-start outline class="my-button2" color="googleColor" (click)="openMap()">\n            <ion-icon name="ios-pin-outline"></ion-icon>\n            Location\n          </button> -->\n        <!--           \n          <button ion-button icon-start outline class="my-button2" color="color2" *ngIf="checkType == \'CHECK_OUT\' && (activityList[\'CHECK_IN_RATE\'] == \'\' || activityList[\'CHECK_IN_RATE\'] == \'0\')" (click)="openModalRating(\'rate\')">\n            <ion-icon name="md-star-outline"></ion-icon>\n            Rate\n          </button> -->\n        <!-- <br>          \n          <div *ngIf="checkType == \'CHECK_OUT\' && (activityList[\'CHECK_IN_RATE\'] != \'\' && activityList[\'CHECK_IN_RATE\'] != \'0\')" >\n            <span *ngFor="let item of createRange(5);let i = index" style="font-size:1.8rem;" >\n              <ion-icon name="star" color="color2" *ngIf="i+1 <= activityList[\'CHECK_IN_RATE\']" ></ion-icon> \n              <ion-icon name="star" color="color4" *ngIf="i+1 > activityList[\'CHECK_IN_RATE\']" ></ion-icon>                         \n            </span>                                      \n          </div>          \n        </div>\n        <br> -->\n\n        <!-- <div >\n          <span text-wrap ion-text style="color:#959595">Arahan Tambahan</span><br />\n         \n        </div> -->\n\n        <!-- <ion-item *ngIf="activityList[\'CHECK_IN_ACTIVITY_SPV\'] != \'\'" no-lines>\n          <span item-left>\n            <img src="assets/flat-icon/checkin.png" class="icons" *ngIf="checkType == \'Check In\'">\n            <img src="assets/flat-icon/checkout.png" class="icons" *ngIf="checkType == \'Check Out\'">\n          </span>\n          <span text-wrap ion-text style="color:#959595; font-size: 1.2rem;">Arahan Tambahan</span><br />\n          <span text-wrap ion-text> \n            {{ activityList[\'CHECK_IN_ACTIVITY_SPV\'] }}\n          </span>\n        </ion-item>\n\n        <br> -->\n\n        <!-- <ion-item *ngIf="activityList[\'CHECK_IN_ACTIVITY_SPV\'] != \'\'">\n          <span item-left>\n            <img src="assets/flat-icon/checkin.png" class="icons" *ngIf="checkType == \'Check In\'">\n            <img src="assets/flat-icon/checkout.png" class="icons" *ngIf="checkType == \'Check Out\'">\n          </span>\n          <ion-label stacked>Arahan Tambahan</ion-label>\n          <ion-textarea [readonly]="true" rows="3" [(ngModel)]="arahanAtasan">\n          </ion-textarea>\n          <br>\n        </ion-item> -->\n\n\n\n\n        <!-- <ion-item>\n          <span item-left>\n            <img src="assets/flat-icon/checkin.png" class="icons" *ngIf="checkType == \'Check In\'">\n            <img src="assets/flat-icon/checkout.png" class="icons" *ngIf="checkType == \'Check Out\'">\n          </span>\n          <ion-label stacked>Activity</ion-label>\n          <ion-textarea [(ngModel)]="activity" #myInput id="myInput" rows="4">\n          </ion-textarea>\n        </ion-item> -->\n\n        <!-- <ion-grid no-margin>\n          <ion-row>\n            <ion-col col-12>\n              <button ion-button icon-end class="my-button" style=" border-radius: 12px;" color="secondary" [disabled]="activity == null || activity == \'\'"\n                (click)="doInsert()">\n                Submit\n                <ion-icon name="md-checkmark"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n\n        <div *ngFor="let inputActivity of inputActivityList; let i = index" class="my-card">\n          <div class="delete-class" *ngIf="i > 0 && inputActivity[\'att_activity_id\'] == \'\'">\n            <button ion-button icon-only color="danger" clear style="border-radius: 8px !important;"\n              (click)="delActivity(i)">\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          </div>\n\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <ion-label stacked>Activity</ion-label>\n            <!-- <ion-input type="text" [(ngModel)]="inputActivity[\'activity\']"></ion-input> -->\n            <ion-textarea [(ngModel)]="inputActivity[\'activity\']" rows="2">\n            </ion-textarea>\n\n            <!-- <ion-input type="text" [(ngModel)]="inputActivity[\'activity\']" *ngIf="inputActivity[\'att_activity_id\'] == \'\'"></ion-input>\n            <ion-input type="text" [readonly]="true" [(ngModel)]="inputActivity[\'activity\']" *ngIf="inputActivity[\'att_activity_id\'] != \'\'"></ion-input> -->\n          </ion-item>\n          <br>\n\n          <ion-item style="width:80%;" lines *ngIf="checkType == \'CHECK_OUT\'">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <ion-label stacked>Status</ion-label>\n            <ion-select [(ngModel)]="inputActivity[\'status\']" placeholder="" (ionChange)="onChangeStatus($event, i)">\n              <ion-option value="Batal">Batal</ion-option>\n              <ion-option value="Dalam Proses - 0%">Dalam Proses - 0%</ion-option>\n              <ion-option value="Dalam Proses - 10%">Dalam Proses - 10%</ion-option>\n              <ion-option value="Dalam Proses - 20%">Dalam Proses - 20%</ion-option>\n              <ion-option value="Dalam Proses - 30%">Dalam Proses - 30%</ion-option>\n              <ion-option value="Dalam Proses - 40%">Dalam Proses - 40%</ion-option>\n              <ion-option value="Dalam Proses - 50%">Dalam Proses - 50%</ion-option>\n              <ion-option value="Dalam Proses - 60%">Dalam Proses - 60%</ion-option>\n              <ion-option value="Dalam Proses - 70%">Dalam Proses - 70%</ion-option>\n              <ion-option value="Dalam Proses - 80%">Dalam Proses - 80%</ion-option>\n              <ion-option value="Dalam Proses - 90%">Dalam Proses - 90%</ion-option>\n              <ion-option value="Selesai - 100%">Selesai - 100%</ion-option>\n            </ion-select>\n            <br>\n\n          </ion-item>\n\n          <div style="margin-left: 10px;" *ngIf="checkType == \'CHECK_OUT\' && inputActivity[\'att_activity_id\'] != \'\'">\n            <div\n              *ngIf="inputActivity[\'status\'] != null && originalActivityList[i][\'status\'] != null && inputActivity[\'status\'] != \'\' && originalActivityList[i][\'status\'] != \'\'">\n              <span text-wrap ion-text style="color:red; font-size: 1.2rem;"\n                *ngIf="inputActivity[\'status\'] != \'Batal\' && (numberExtractor(originalActivityList[i][\'status\']) > numberExtractor(inputActivityList[i][\'status\']))">*Presentase\n                status tidak boleh kurang dari sebelumnya ( {{ numberExtractor(originalActivityList[i][\'status\']) }}%\n                ).</span>\n              <br>\n            </div>\n            <!-- <span text-wrap ion-text style="color:red; font-size: 1.2rem;" >{{ originalActivityList[i][\'status\'] }}</span> -->\n          </div>\n\n\n\n          <!-- <ion-item *ngIf="checkType == \'CHECK_OUT\'">\n            <span item-left>\n              <img src="assets/flat-icon/end_date.png" class="icons">\n            </span>\n            <ion-label color="color4" stacked>Tanggal Awal</ion-label>\n            <ion-input type="text" [readonly]="true" [(ngModel)]="inputActivity[\'tgl_awal\']" (ionFocus)="checkFocus(1, i)" (click)="showDatePicker(1, i)"></ion-input>          \n          </ion-item> -->\n\n          <!-- <ion-item *ngIf="checkType == \'CHECK_OUT\'">\n            <span item-left>\n              <img src="assets/flat-icon/start_date.png" class="icons">\n            </span>\n            <ion-label color="color4" stacked>Tanggal Akhir</ion-label>\n            <ion-input type="text" [readonly]="true" [(ngModel)]="inputActivity[\'tgl_akhir\']" (ionFocus)="checkFocus(2, i)" (click)="showDatePicker(2, i)"></ion-input>\n          </ion-item> -->\n        </div>\n\n\n        <!-- <table width="100%" *ngIf="checkType != \'CHECK_OUT\'"> -->\n        <table width="100%">\n          <tr>\n            <td width="50%" align="center" (click)="addNewActivity()">\n              <button ion-button icon-start style="width: 95% !important;border-radius: 10px;">\n                <ion-icon name="ios-add"></ion-icon>\n                Tambah\n              </button>\n            </td>\n            <td width="50%" align="center">\n              <button ion-button icon-start style="width: 95% !important;border-radius: 10px;" color="secondary"\n                (click)="submitActivity(\'INSERT\')" [disabled]="disableSubmitButton()">\n                <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n                Submit\n              </button>\n            </td>\n          </tr>\n        </table>\n\n        <!-- <table width="100%" *ngIf="checkType == \'CHECK_OUT\'">\n          <tr>\n            <td width="100%" align="center">\n              <button ion-button icon-start style="width: 100% !important;border-radius: 10px;" color="secondary"\n                (click)="submitActivity(\'UPDATE\')" [disabled]="disableSubmitButton()">\n                <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n                Submit\n              </button>\n            </td>\n          </tr>\n        </table> -->\n        <br>\n      </div>\n    </div>\n\n    <!-- <div *ngIf="activityList == null && isLoading == true"> -->\n    <div padding *ngIf="inputActivityList.length == 0 && isLoading == true">\n      <div class="data-container">\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n\n        <div class="my-card">\n          <ion-item>\n            <span item-left>\n              <img src="assets/flat-icon/alasan.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n\n          <ion-item style="width:80%;">\n            <span item-left>\n              <img src="assets/flat-icon/jenis_cuti.png" class="icons">\n            </span>\n            <div style="padding-top: 10px;" class="animate-skeleton-background load-3"></div>\n          </ion-item>\n        </div>\n      </div>\n\n      <!-- <div class="image-container">\n        <img src="assets/flat-icon/photo_dummy_2.png" class="animate-skeleton-background photo">\n      </div> -->\n      <!-- <div padding class="data-container">\n        <div class="header-container">\n          <br>\n          <div class="animate-skeleton-background load-1"></div><br>\n          <div class="animate-skeleton-background load-1"></div>\n          <div class="animate-skeleton-background load-2"></div>\n          <div class="animate-skeleton-background load-1"></div><br>\n          <div class="animate-skeleton-background load-2"></div>\n          <br>\n        </div>\n        <br>\n\n        <ion-item>\n          <div class="animate-skeleton-background load-3"></div>\n          <div class="animate-skeleton-background load-3"></div>\n          <div class="animate-skeleton-background load-3"></div>\n        </ion-item>\n\n      </div> -->\n    </div>\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/insert-note-attendance/insert-note-attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__["a" /* DatePicker */]])
    ], InsertNoteAttendancePage);
    return InsertNoteAttendancePage;
}());

//# sourceMappingURL=insert-note-attendance.js.map

/***/ })

});
//# sourceMappingURL=54.js.map