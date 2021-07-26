webpackJsonp([30],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrpoDetailPageModule", function() { return PrpoDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prpo_detail__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrpoDetailPageModule = /** @class */ (function () {
    function PrpoDetailPageModule() {
    }
    PrpoDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prpo_detail__["a" /* PrpoDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prpo_detail__["a" /* PrpoDetailPage */]),
            ],
        })
    ], PrpoDetailPageModule);
    return PrpoDetailPageModule;
}());

//# sourceMappingURL=prpo-detail.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrpoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(207);
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
 * Generated class for the PrpoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrpoDetailPage = /** @class */ (function () {
    function PrpoDetailPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl, currencyPipe, inAppBrowser) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.currencyPipe = currencyPipe;
        this.inAppBrowser = inAppBrowser;
        this.isLoadingLine = true;
        this.isLoadingAppr = true;
        this.isLoadingHdr = true;
        this.lineData = [];
        this.apprData = [];
        this.hdrData = [];
        this.scTypeLines = '';
        this.scTypeAppr = '';
        this.scTypeHdr = '';
        this.forwardTo = '';
        this.note = '';
        this.searchDataList = [];
        this.showResult = false;
        this.prpoData = navParams.get('prpoData');
        this.storage.get('userdataTPK').then(function (val) {
            console.log(val);
            _this.userdataTPK = val;
        });
        if (this.prpoData['DOCUMENT_TYPE'] == 'REQUISITION') {
            this.scTypeLines = 'pr_lines_tpk';
            this.scTypeAppr = 'pr_appr_tpk';
            this.scTypeHdr = '';
            this.isLoadingHdr = false;
        }
        else if (this.prpoData['DOCUMENT_TYPE'] == 'PO') {
            this.scTypeLines = 'po_lines_tpk';
            this.scTypeAppr = 'po_appr_tpk';
            this.scTypeHdr = 'po_hdr_tpk';
            this.getHeader();
        }
        else {
            console.log('error here');
        }
        this.getLine();
        this.getAppr();
    }
    PrpoDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrpoDetailPage');
    };
    PrpoDetailPage.prototype.getLine = function () {
        var _this = this;
        this.isLoadingLine = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_bypass_wso', {
            fStream: JSON.stringify({
                sc_type: this.scTypeLines,
                sc_code: "",
                data: {
                    document_id: this.prpoData['DOCUMENT_ID']
                }
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (_this.isEmptyObject(responData['data'][0]) == false) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.lineData.push(responData['data'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data line, silahkan coba kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.isLoadingLine = false;
        })
            .catch(function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan data line, periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoadingLine = false;
        });
    };
    PrpoDetailPage.prototype.getAppr = function () {
        var _this = this;
        this.isLoadingAppr = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_bypass_wso', {
            fStream: JSON.stringify({
                sc_type: this.scTypeAppr,
                sc_code: "",
                data: {
                    document_id: this.prpoData['DOCUMENT_ID']
                }
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (_this.isEmptyObject(responData['data'][0]) == false) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.apprData.push(responData['data'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data Appr, silahkan coba kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.isLoadingAppr = false;
        })
            .catch(function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan data Appr, periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoadingAppr = false;
        });
    };
    PrpoDetailPage.prototype.getHeader = function () {
        var _this = this;
        this.isLoadingHdr = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_bypass_wso', {
            fStream: JSON.stringify({
                sc_type: this.scTypeHdr,
                sc_code: "",
                data: {
                    document_id: this.prpoData['DOCUMENT_ID']
                }
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (_this.isEmptyObject(responData['data'][0]) == false) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.hdrData.push(responData['data'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data Header, silahkan coba kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.isLoadingHdr = false;
        })
            .catch(function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan data Header, periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoadingHdr = false;
        });
    };
    PrpoDetailPage.prototype.doAction = function (action) {
        var _this = this;
        var msg = '';
        if (action == 'APPROVE') {
            msg = 'Apakah anda yakin ingin Approve ?';
        }
        else if (action == 'APPROVE_AND_FORWARD') {
            msg = 'Apakah anda yakin ingin Approve and Forward ?';
        }
        else if (action == 'FORWARD') {
            msg = 'Apakah anda yakin ingin Forward ?';
        }
        else if (action == 'REJECT') {
            msg = 'Apakah anda yakin ingin Reject ?';
        }
        else {
            msg = 'Apakah anda yakin ?';
        }
        var alert = this.alertCtrl.create({
            subTitle: msg,
            cssClass: 'alert',
            buttons: [
                {
                    text: 'TIDAK',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'YA',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'dots',
                            content: "Mohon Tunggu...",
                            cssClass: 'transparent',
                            dismissOnPageChange: true
                        });
                        loading.present();
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_bypass_wso', {
                            fStream: JSON.stringify({
                                sc_type: "act_worklist_prpo_tpk",
                                sc_code: "",
                                data: {
                                    notification_id: _this.prpoData['NOTIFICATION_ID'],
                                    performer: _this.userdataTPK['data']['NIPP'],
                                    action: action,
                                    forward_to: _this.forwardTo,
                                    note: _this.note
                                }
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            console.log(responData);
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: action + ' Berhasil',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present().then(function () {
                                    //this.pushNotif();
                                    _this.navCtrl.pop();
                                });
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: 'Gagal mengirim action, silahkan coba kembali.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            loading.dismiss();
                        })
                            .catch(function (error) {
                            console.log(error);
                            var toast = _this.toastCtrl.create({
                                message: 'Gagal mengirim action, periksa koneksi internet anda.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        if (action == 'APPROVE_AND_FORWARD' || action == 'FORWARD') {
            if (this.forwardTo != '' || this.forwardTo != '') {
                alert.present();
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Field Forward To harus diisi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        }
        else {
            alert.present();
        }
    };
    PrpoDetailPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    PrpoDetailPage.prototype.getForward = function () {
        var _this = this;
        if (this.forwardTo.length > 2) {
            console.log(this.forwardTo);
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_findemployee', {
                fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                    search: this.forwardTo.toUpperCase(),
                    atas: 1,
                    bawah: 5
                })
            }).then(function (result) {
                var responData = JSON.parse(String(result));
                console.log(responData);
                if (responData['rcmsg'] == "SUCCESS") {
                    _this.searchDataList = responData['data'];
                    _this.showResult = true;
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.showResult = false;
                    _this.forwardTo = '';
                }
            })
                .catch(function (error) {
                console.log(error);
                var toast = _this.toastCtrl.create({
                    message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.showResult = false;
                _this.forwardTo = '';
            });
        }
        else {
            this.showResult = false;
        }
    };
    PrpoDetailPage.prototype.setForward = function (data) {
        this.forwardTo = data['NIPP'];
        this.searchDataList = [];
        this.showResult = false;
    };
    PrpoDetailPage.prototype.OpenSelect = function () {
        var _this = this;
        console.log('trigered');
        var modal = this.modalCtrl.create('SearchForwardPrpoPage', { titleText: "Please Select" });
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data != null) {
                _this.forwardTo = data['NIPP'];
            }
        });
        modal.present();
    };
    PrpoDetailPage.prototype.convertCurrency = function (money, money2) {
        if (money != '') {
            money = parseInt(money);
            var hasil = this.currencyPipe.transform(money, 'IDR');
            var hasilSpit = hasil.split('.');
            console.log(hasilSpit[0]);
            return hasilSpit[0].substr(3);
        }
        else {
            return '0';
        }
    };
    PrpoDetailPage.prototype.decode = function (data) {
        return atob(data);
    };
    PrpoDetailPage.prototype.goToURL = function (data) {
        var options = {
            zoom: 'no'
        };
        var browser = this.inAppBrowser.create(data, '_system', options);
    };
    PrpoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-prpo-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/prpo-detail/prpo-detail.html"*/'<!--\n  Generated template for the PrpoDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light">{{ prpoData[\'DOCUMENT_TYPE\'] }}</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="header-card">\n    <ion-card-content>\n      <span ion-text text-wrap class="font-header">\n        <b>{{ prpoData[\'SUBJECT\'] }}</b>\n      </span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <span ion-text text-wrap class="font-mini" color="color4">\n        ID\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ prpoData[\'NOTIFICATION_ID\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        From\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ prpoData[\'FROM_USER\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        To\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ prpoData[\'TO_USER\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Sent\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ prpoData[\'BEGIN_DATE\'] }}\n      </span><br>\n\n      <div *ngIf="prpoData[\'DOCUMENT_TYPE\'] == \'REQUISITION\'">\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Description\n        </span><br>\n        <span ion-text text-wrap class="font-small" *ngIf="lineData.length == 0"  > - </span>\n        <span ion-text text-wrap class="font-small" *ngIf="lineData.length > 0">{{ lineData[0][\'REQUISITION_DESCRIPTION\'] }}</span><br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Request Total\n        </span><br>\n        <span ion-text text-wrap class="font-small" *ngIf="lineData.length == 0"  > - </span>\n        <span ion-text text-wrap class="font-small" *ngIf="lineData.length > 0">IDR. {{ convertCurrency(lineData[0][\'REQUISITION_TOTAL\']) }}</span><br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Non-Recoverable Tax\n        </span><br>        \n        <span ion-text text-wrap class="font-small" *ngIf="lineData.length == 0"  > - </span>\n        <span ion-text text-wrap class="font-small" *ngIf="lineData.length > 0">IDR. {{ convertCurrency(lineData[0][\'NONRECOVERABLE_TAX\']) }}</span><br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          URL\n        </span><br>       \n        <div *ngIf="lineData.length > 0" >\n          <span ion-text text-wrap class="font-small" *ngIf="lineData[0][\'URL\'] == null"   > - </span>\n          <span ion-text text-wrap class="font-small" *ngIf="lineData[0][\'URL\'] != null" (click)="goToURL(decode(lineData[0][\'URL\']))" color="primary" >intranet.indonesiaport.co.id</span><br>\n        </div> \n        <div *ngIf="lineData.length == 0">\n          -\n        </div>\n\n        \n      </div>\n\n      <div *ngIf="prpoData[\'DOCUMENT_TYPE\'] == \'PO\'">\n\n        <div *ngIf="isLoadingHdr == true">\n          <div class="animate-skeleton-background load-2"></div>\n          <div class="animate-skeleton-background load-3"></div>\n          <div class="animate-skeleton-background load-1"> </div>\n        </div>\n\n        <div *ngIf="isLoadingHdr == false && hdrData.length > 0">\n\n          <div *ngFor="let hdr of hdrData">\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Amount\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="hdr[\'TOTAL_AMOUNT_DSP\'] == \'\' || hdr[\'TOTAL_AMOUNT_DSP\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              IDR. {{ convertCurrency(hdr[\'TOTAL_AMOUNT_DSP\']) }}\n            </span><br>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Tax\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="hdr[\'TAX_AMOUNT_DSP\'] == \'\' || hdr[\'TAX_AMOUNT_DSP\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              IDR. {{ convertCurrency(hdr[\'TAX_AMOUNT_DSP\']) }}\n            </span><br>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Supplier\n            </span><br>\n            <span ion-text text-wrap class="font-small" *ngIf="hdr[\'SUPPLIER\'] == \'\' || hdr[\'SUPPLIER\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ hdr[\'SUPPLIER\'] }}\n            </span><br>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Supplier Site\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="hdr[\'SUPPLIER_SITE\'] == \'\' || hdr[\'SUPPLIER_SITE\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ hdr[\'SUPPLIER_SITE\'] }}\n            </span><br>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Description\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="hdr[\'PO_DESCRIPTION\'] == \'\' || hdr[\'PO_DESCRIPTION\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ hdr[\'PO_DESCRIPTION\'] }}\n            </span><br>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Forwarded From\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="hdr[\'FORWARD_FROM_DISPLAY_NAME\'] == \'\' || hdr[\'FORWARD_FROM_DISPLAY_NAME\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ hdr[\'FORWARD_FROM_DISPLAY_NAME\'] }}\n            </span><br>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Preparer\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="hdr[\'PREPARER_DISPLAY_NAME\'] == \'\' || hdr[\'PREPARER_DISPLAY_NAME\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ hdr[\'PREPARER_DISPLAY_NAME\'] }}\n            </span><br>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Operating Unit\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="hdr[\'OPERATING_UNIT_NAME\'] == \'\' || hdr[\'OPERATING_UNIT_NAME\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ hdr[\'OPERATING_UNIT_NAME\'] }}\n            </span><br>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Note\n            </span><br>\n            <span ion-text text-wrap class="font-small" *ngIf="hdr[\'NOTE\'] == \'\' || hdr[\'NOTE\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ hdr[\'NOTE\'] }}\n            </span><br>\n          </div>\n\n        </div>\n\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <!-- <span ion-text text-wrap>\n          <img src="assets/imgs/menu-icon/Restitusi.png" class="icons">\n        </span> -->\n        <span ion-text text-wrap class="font-small">\n          <b>Requisition Line</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n\n      <div *ngIf="isLoadingLine == true"> \n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </div>\n\n      <div *ngFor="let line of lineData">\n        <span ion-text text-wrap class="font-small" color="danger">\n          <b>Line {{ line[\'LINE_NUM\'] }}</b>\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Description\n        </span><br>\n        <span ion-text text-wrap class="font-small"\n          *ngIf="line[\'ITEM_DESCRIPTION\'] == \'\' || line[\'ITEM_DESCRIPTION\'] == null">\n          -\n        </span>\n        <span ion-text text-wrap class="font-small">\n          {{ line[\'ITEM_DESCRIPTION\'] }}\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Supplier\n        </span><br>\n        <span ion-text text-wrap class="font-small"\n          *ngIf="line[\'SUGGESTED_SUPPLIER\'] == \'\' || line[\'SUGGESTED_SUPPLIER\'] == null">\n          -\n        </span>\n        <span ion-text text-wrap class="font-small">\n          {{ line[\'SUGGESTED_SUPPLIER\'] }}\n        </span><br>\n\n        <div class="row">\n          <div col="col" no-padding>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Unit\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="line[\'UNITS_OF_MEASURE\'] == \'\' || line[\'UNITS_OF_MEASURE\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ line[\'UNITS_OF_MEASURE\'] }}\n            </span>\n          </div>\n          <div col="col" no-padding>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Quantity\n            </span><br>\n            <span ion-text text-wrap class="font-small" *ngIf="line[\'QUANTITY\'] == \'\' || line[\'QUANTITY\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ line[\'QUANTITY\'] }}\n            </span>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="col" no-padding>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Cost Center\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="line[\'COST_CENTER\'] == \'\' || line[\'COST_CENTER\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              {{ line[\'COST_CENTER\'] }}\n            </span>\n          </div>\n          <div class="col" no-padding>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Amount\n            </span><br>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="line[\'LINE_AMOUNT\'] == \'\' || line[\'LINE_AMOUNT\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              IDR. {{ convertCurrency(line[\'LINE_AMOUNT\']) }}\n            </span>\n          </div>\n        </div>\n        <br>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <!-- <span ion-text text-wrap>\n          <img src="assets/imgs/menu-icon/Restitusi.png" class="icons">\n        </span> -->\n        <span ion-text text-wrap class="font-small">\n          <b>Approval Sequence</b>\n        </span>\n      </div>\n      <div class="garis" style="margin-top: 10px;"></div>\n\n      <div *ngIf="isLoadingAppr == true">\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </div>\n\n      <table>\n        <tr *ngFor="let appr of apprData;let i = index">\n          <td *ngIf="i+1 > 1 && i+1 != apprData.length">\n            <div class="dot-cont">\n              <div class="vertical"></div>\n              <div class="dot"></div>\n              <div class="vertical"></div>\n            </div>\n          </td>\n\n          <td *ngIf="i+1 == 1">\n            <div class="dot-cont" style="padding-top: 50px;">\n              <div class="dot"></div>\n              <div class="vertical"></div>\n            </div>\n          </td>\n\n          <td *ngIf="i+1 == apprData.length">\n            <div class="dot-cont" style="padding-bottom: 50px;">\n              <div class="vertical"></div>\n              <div class="dot"></div>\n            </div>\n          </td>\n\n          <td>\n            <span ion-text text-wrap class="font-small"\n              *ngIf="appr[\'APPROVER_NAME\'] == \'\' || appr[\'APPROVER_NAME\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-small">\n              <b>{{ appr[\'APPROVER_NAME\'] }}</b>\n            </span> <br>\n\n            <span ion-text text-wrap class="font-mini">\n              Action :\n            </span>\n            <span ion-text text-wrap class="font-mini" *ngIf="appr[\'ACTION\'] == \'\' || appr[\'ACTION\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-mini" color="primary">\n              {{ appr[\'ACTION\'] }}\n            </span> <br>\n\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Action Date :\n            </span>\n            <span ion-text text-wrap class="font-mini" color="color4"\n              *ngIf="appr[\'ACTION_DATE\'] == \'\' || appr[\'ACTION_DATE\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-mini" color="color4">\n              {{ appr[\'ACTION_DATE\'] }}\n            </span> <br>\n\n            <span ion-text text-wrap class="font-mini">\n              Note :\n            </span>\n            <span ion-text text-wrap class="font-mini" *ngIf="appr[\'NOTES\'] == \'\' || appr[\'NOTES\'] == null">\n              -\n            </span>\n            <span ion-text text-wrap class="font-mini">\n              {{ appr[\'NOTES\'] }}\n            </span> <br>\n\n          </td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <ion-item  > \n        <span item-left>\n            <img src="assets/imgs/logo/peserta_pekerja.png" class="icons-input">\n        </span>\n        <ion-label stacked>Forward To</ion-label>\n        <ion-input style="border-bottom: 1px solid #dedede;" type="text" (keyup)="getForward()" (ionFocus)="OpenSelect()"\n        (click)="OpenSelect()" [(ngModel)]="forwardTo"></ion-input>\n    </ion-item> \n\n    <div *ngIf="forwardTo != \'\' && showResult && searchDataList.length > 0" >\n      <ion-item style="border-bottom: 1px solid #dedede;" *ngFor="let searchData of searchDataList" no-margin (click)="setForward(searchData)">      \n        <p ion-text text-wrap style="font-size:1.3rem !important;" ion-text text-wrap > {{ searchData[\'NAMA\'] }}</p>\n        <p ion-text text-wrap style="font-size:1.3rem !important;" ion-text text-wrap > {{ searchData[\'NIPP\'] }}</p>\n        <p ion-text text-wrap style="font-size:1.3rem !important;" ion-text text-wrap > {{ searchData[\'NAMA_JABATAN\'] }}</p>\n    </ion-item>\n    </div>\n\n    <ion-item >\n      <span item-left>\n          <img src="assets/imgs/logo/perihal2.png" class="icons-input">\n      </span>\n      <ion-label stacked>Note</ion-label>\n      <ion-input style="border-bottom: 1px solid #dedede;" type="text" [(ngModel)]="note"></ion-input>\n  </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <div padding-left padding-right padding-bottom>\n    <button ion-button icon-start full color="primary" style="border-radius: 5px;" (click)="doAction(\'APPROVE\')">\n      <ion-icon name="md-checkmark"></ion-icon>\n      Approve\n    </button>\n\n    <button ion-button icon-start full color="secondary" style="border-radius: 5px;"\n      (click)="doAction(\'APPROVE_AND_FORWARD\')">\n      <ion-icon name="md-checkmark-circle"></ion-icon>\n      Approve and Forward\n    </button>\n\n    <button ion-button icon-start full color="secondary" style="border-radius: 5px;" (click)="doAction(\'FORWARD\')">\n      <ion-icon name="ios-redo"></ion-icon>\n      Forward\n    </button>\n\n    <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="doAction(\'REJECT\')">\n      <ion-icon name="md-close"></ion-icon>\n      Reject\n    </button>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/prpo-detail/prpo-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PrpoDetailPage);
    return PrpoDetailPage;
}());

//# sourceMappingURL=prpo-detail.js.map

/***/ })

});
//# sourceMappingURL=30.js.map