webpackJsonp([36],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P2bPageModule", function() { return P2bPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__p2b__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var P2bPageModule = /** @class */ (function () {
    function P2bPageModule() {
    }
    P2bPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__p2b__["a" /* P2bPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__p2b__["a" /* P2bPage */]),
            ],
        })
    ], P2bPageModule);
    return P2bPageModule;
}());

//# sourceMappingURL=p2b.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P2bPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__p2b_detail_p2b_detail__ = __webpack_require__(208);
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
 * Generated class for the P2bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var P2bPage = /** @class */ (function () {
    function P2bPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, popoverCtrl, datepipe, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.datepipe = datepipe;
        this.toastCtrl = toastCtrl;
        this.fakeUsers = new Array(5);
        this.p2bList = [];
        this.isLoadingBadges = true;
        this.isLoading = true;
    }
    P2bPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.year = this.datepipe.transform(new Date(), 'yyyy');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getBadges();
            // if ( this.isEmptyObject(this.userdataTPK['data']['LISTOFFICER'][0]) && this.isEmptyObject(this.userdataTPK['data']['DATA_BAWAHAN'][0]) && this.isEmptyObject(this.userdataTPK['data']['DATA_BAWAHAN_TNO'][0]) ) {
            //   this.isAtasan = false;
            // } else {
            //   this.isAtasan = true;
            // }   
            // this.getP2bUser();   
            _this.newSession('first', '');
        });
    };
    P2bPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad P2bPage');
    };
    P2bPage.prototype.newSession = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon Tunggu...",
        //   cssClass: 'transparent',
        //   dismissOnPageChange: true
        // });
        // this.loading.present();    
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_get_user_data', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                username: this.userdataTPK['data']['NIPP'],
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['login_status'] == '404 Not Found') {
                }
                else if (responData['data'] == undefined) {
                }
                else if (responData['data']['login_status'] == 'AP NOT ALLOWED') {
                }
                else {
                    _this.userdataTPK = responData;
                    if (_this.isEmptyObject(_this.userdataTPK['data']['LISTOFFICER'][0]) && _this.isEmptyObject(_this.userdataTPK['data']['DATA_BAWAHAN'][0]) && _this.isEmptyObject(_this.userdataTPK['data']['DATA_BAWAHAN_TNO'][0])) {
                        _this.isAtasan = false;
                    }
                    else {
                        _this.isAtasan = true;
                    }
                    _this.storage.set('userdataTPK', responData).then(function () {
                        _this.userdataTPK = responData;
                        _this.getP2bUser(type, functionName);
                    });
                }
            }
            else {
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan data P2B, periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            // console.log(error);
            if (type == 'first' && functionName == '') {
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            _this.isLoading = false;
        });
    };
    P2bPage.prototype.getList = function (type, functionName) {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_eval', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                p2b_id: this.p2buser['P2B_ID'],
                year: this.year
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.p2bList = [];
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.p2bList.push(responData['data'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            // this.loading.dismiss();
            if (type == 'first' && functionName == '') {
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal Mendapatkan Data P2B, Periksa Koneksi Internet Anda.',
                buttons: ['OK']
            });
            // this.loading.dismiss();
            _this.isLoading = false;
            // console.log(error);
        });
    };
    P2bPage.prototype.getP2bUser = function (type, functionName) {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_user', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.userdataTPK.data.NIPP
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.p2buser = responData['data'];
                _this.setDateRule();
                _this.getList(type, functionName);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: responData['rcmsg'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.loading.dismiss();
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            // console.log(error);
            if (type == 'first' && functionName == '') {
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            _this.isLoading = false;
        });
    };
    P2bPage.prototype.setDateRule = function () {
        this.month = this.datepipe.transform(new Date(), 'M');
        this.tgl = this.datepipe.transform(new Date(), 'dd');
        var currentYear = this.datepipe.transform(new Date(), 'yyyy');
        var tgl_awal = (this.p2buser['FL_AKHIR'] == true) ? this.p2buser['TGL_PALINGAKHIR_AKHIR'] : this.p2buser['TGL_PENGAJUAN_AWAL'];
        var tgl_akhir = (this.p2buser['FL_AKHIR'] == true) ? this.p2buser['TGL_PALINGAKHIR_AKHIR'] : this.p2buser['TGL_PENGAJUAN_AKHIR'];
        if (parseInt(this.tgl) >= 1 && parseInt(this.tgl) <= parseInt(tgl_akhir)) {
            if (this.month == 1) {
                this.month = '12';
                currentYear = (parseInt(currentYear) - 1).toString();
            }
            else {
                this.month = (parseInt(this.month) - 1).toString();
            }
        }
        var startDate = tgl_awal + '/' + this.month + '/' + currentYear;
        this.monthNext = (this.month == '12') ? 1 : parseInt(this.month) + 1;
        var yearEndDate = (this.month == '12') ? (parseInt(currentYear) + 1).toString() : currentYear;
        var endDate = tgl_akhir + '/' + this.monthNext + '/' + yearEndDate;
        var currentDate = this.datepipe.transform(new Date(), 'dd/M/yyyy');
        var sd = startDate.split("/");
        var ed = endDate.split("/");
        var cd = currentDate.split("/");
        this.fromDate = new Date(parseInt(sd[2]), parseInt(sd[1]) - 1, parseInt(sd[0])); // -1 because months are from 0 to 11
        this.toDate = new Date(parseInt(ed[2]), parseInt(ed[1]) - 1, parseInt(ed[0]));
        this.checkDate = new Date(parseInt(cd[2]), parseInt(cd[1]) - 1, parseInt(cd[0]));
    };
    P2bPage.prototype.goToDetail = function (data) {
        if (((this.checkDate >= this.fromDate && this.checkDate <= this.toDate) && data['Status'] != 'CLOSED') || data['Status'] == 'SAVED' || data['Status'] == 'EVALUATED SAVED' || data['Status'] == 'FINISHED' || data['Status'] == 'POSTED' || data['Status'] == 'EVALUATED') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__p2b_detail_p2b_detail__["a" /* P2bDetailPage */], {
                userdataTPK: this.userdataTPK,
                p2bdata: data,
                p2buser: this.p2buser
            });
        }
        else {
        }
    };
    P2bPage.prototype.getBadges = function () {
        var _this = this;
        // console.log(  {
        //   usernameEDI: api_user,
        //   passwordEDI: api_pass,
        //   iduser: this.userdataTPK['data']['IDUSER'],
        //   idjabatan: this.userdataTPK['data']['IDJABATAN'],
        //   nipp: this.userdataTPK['data']['NIPP']
        // });
        this.isLoadingBadges = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_countbadges', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                iduser: this.userdataTPK['data']['IDUSER'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                nipp: this.userdataTPK['data']['NIPP']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.badgesList = responData['data'];
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal Mendapatkan Notifikasi.',
                    duration: 3000,
                    position: 'bottom'
                });
            }
            _this.isLoadingBadges = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
                duration: 3000,
                position: 'bottom'
            });
            _this.isLoadingBadges = false;
            // console.log(error);
        });
    };
    P2bPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create("MenuP2bPage", {
            p2buser: this.p2buser,
            badges: this.badgesList != null ? this.badgesList['JUMLAH_RENCANA_P2B_BAWAHAN'] : ''
        }, { cssClass: "my-popover" });
        popover.present({
            ev: myEvent
        });
    };
    P2bPage.prototype.convertMonths = function (month) {
        switch (month) {
            case 'JANUARI':
                return "1";
            case 'FEBRUARI':
                return "2";
            case 'MARET':
                return "3";
            case 'APRIL':
                return "4";
            case 'MEI':
                return "5";
            case 'JUNI':
                return "6";
            case 'JULI':
                return "7";
            case 'AGUSTUS':
                return "8";
            case 'SEPTEMBER':
                return "9";
            case 'OKTOBER':
                return "10";
            case 'NOVEMBER':
                return "11";
            case 'DESEMBER':
                return "12";
            default:
                return "false";
        }
    };
    P2bPage.prototype.convertInt = function (val) {
        return parseInt(val);
    };
    P2bPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    P2bPage.prototype.parse = function (val) {
        var intValue = parseInt(val);
        if (intValue > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    P2bPage.prototype.checkTgl = function () {
        if (this.checkDate >= this.fromDate && this.checkDate <= this.toDate) {
            return true;
        }
        else if (this.checkDate <= this.checkDate) {
        }
        else {
            return false;
        }
    };
    P2bPage.prototype.checkClosed = function (data) {
        if (((this.checkDate >= this.fromDate && this.checkDate <= this.toDate) && data['Status'] != 'CLOSED') || data['Status'] == 'SAVED' || data['Status'] == 'EVALUATED SAVED' || data['Status'] == 'FINISHED' || data['Status'] == 'POSTED' || data['Status'] == 'EVALUATED') {
            return true;
        }
        else {
            return false;
        }
    };
    P2bPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-p2b',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b/p2b.html"*/'<!--\n\n  Generated template for the CutiListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <span ion-text color="light" class="fw500">P2B</span>\n\n    </ion-title>\n\n\n\n    <ion-buttons end *ngIf="isAtasan">\n\n      <button ion-button (click)="presentPopover($event)">\n\n        <ion-icon style="font-size:2.4rem;padding-right:16px;" name="more" color="light"></ion-icon>\n\n        <ion-badge class="my-badges"\n\n          *ngIf="!isLoadingBadges  && !isEmptyObject(badgesList) && parse(badgesList[\'JUMLAH_RENCANA_P2B_BAWAHAN\'])"\n\n          color="danger">{{ badgesList[\'JUMLAH_RENCANA_P2B_BAWAHAN\'] }}</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-grid *ngIf="p2bList.length == 0 && isLoading == false" fixed>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-card class="primary-bg">\n\n          <ion-card-content>\n\n            <span style="font-size:1.3rem">Tidak ada Data P2B</span>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-list class="dining_List" *ngIf="p2bList.length != 0">\n\n    <ion-card *ngFor="let p2b of p2bList; let i = index" (click)="goToDetail(p2b)" class="my-card">\n\n      <ion-item tapplable>\n\n        <span ion-text text-wrap class="font bold">{{ p2b[\'Bulan\'] }}</span> <br>\n\n        <span ion-text text-wrap class="font3" *ngIf="p2b[\'Tanggal Entry\'] == \'\'"> - </span>\n\n        <span ion-text text-wrap class="font3">{{ p2b[\'Tanggal Entry\'] }}</span>\n\n        <div>\n\n          <span ion-text text-wrap class="font2" color="danger">Skor : </span>\n\n          <span ion-text text-wrap class="font2" color="danger">{{ p2b[\'Skor\'] }}</span>\n\n          <span ion-text text-wrap class="font2" color="danger" *ngIf="p2b[\'Skor\'] == \'\'"> - </span>\n\n        </div>\n\n        <!-- <ion-icon name="add" *ngIf="p2b[\'Status\'] == \'\' && convertInt(convertMonths(p2b[\'Bulan\'])) == convertInt(month)" color="primary" item-end></ion-icon>     \n\n                      <p ion-text *ngIf="p2b[\'Status\'] == \'\' && convertInt(convertMonths(p2b[\'Bulan\'])) == convertInt(month)" color="dark" class="text-sm bold" item-end>Create</p> -->\n\n        <ion-icon name="add" *ngIf="(checkDate >= fromDate && checkDate <= toDate)  && p2b[\'Status\'] == \'\'"\n\n          color="primary" item-end></ion-icon>\n\n        <span ion-text text-wrap class="font"\n\n          *ngIf="(checkDate >= fromDate && checkDate <= toDate) && p2b[\'Status\'] == \'\'" color="primary"\n\n          item-end>Create</span>\n\n        <!-- <ion-icon name="add" *ngIf="checkTgl()" color="primary" item-end></ion-icon>     \n\n                      <p ion-text *ngIf="checkTgl()" color="dark" class="text-sm bold" item-end>Create</p> -->\n\n\n\n        <!-- <ion-badge *ngIf="p2b[\'Status\'] == \'\' && convertInt(convertMonths(p2b[\'Bulan\'])) <= convertInt(month) && (checkDate >= fromDate && checkDate <= toDate)" color="danger" item-end>Closed</ion-badge>    -->\n\n        <!-- <ion-badge *ngIf="checkTgl()" color="danger" item-end>Closed</ion-badge>    -->\n\n        <span ion-text text-wrap class="font3 bold" *ngIf="p2b[\'Status\'] == \'EVALUATED SAVED\'" color="secondary"\n\n          item-end>Evaluated Saved</span>\n\n        <span ion-text text-wrap class="font3 bold" *ngIf="p2b[\'Status\'] == \'EVALUATED\'" color="secondary"\n\n          item-end>Evaluated</span>\n\n        <!-- <span ion-text text-wrap *ngIf="p2b[\'Status\'] == \'CLOSED\'" color="danger" item-end>Closed</span> -->\n\n        <!-- <span ion-text text-wrap *ngIf="(p2b[\'Status\'] == \'CLOSED\' || p2b[\'Status\'] == \'\') && (checkDate < fromDate || checkDate > toDate) && convertInt(convertMonths(p2b[\'Bulan\'])) <= convertInt(month)" color="danger" item-end>Closed</span> -->\n\n        <span ion-text text-wrap class="font3 bold"\n\n          *ngIf="i != 0 && checkClosed(p2b) == false && p2b[\'Status\'] != \'KEBERATAN\'" color="danger" item-end>\n\n          Closed</span>\n\n        <span ion-text text-wrap class="font3 bold" *ngIf="p2b[\'Status\'] == \'FINISHED\'" color="secondary"\n\n          item-end>Finished</span>\n\n        <span ion-text text-wrap class="font3 bold" *ngIf="p2b[\'Status\'] == \'POSTED\'" color="primary"\n\n          item-end>Posted</span>\n\n        <span ion-text text-wrap class="font3 bold" *ngIf="p2b[\'Status\'] == \'SAVED\'" color="primary"\n\n          item-end>Saved</span>\n\n        <span ion-text text-wrap class="font3 bold" *ngIf="p2b[\'Status\'] == \'KEBERATAN\'" color="orange"\n\n          item-end>Keberatan</span>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf=\'p2bList.length == 0 && isLoading == true\'>\n\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n\n      <ion-item>\n\n        <div class="animate-skeleton-background load-2"></div>\n\n        <div class="animate-skeleton-background load-3"></div>\n\n        <div class="animate-skeleton-background load-1"> </div>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b/p2b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], P2bPage);
    return P2bPage;
}());

//# sourceMappingURL=p2b.js.map

/***/ })

});
//# sourceMappingURL=36.js.map