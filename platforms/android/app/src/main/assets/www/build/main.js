webpackJsonp([83],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sender_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return oneSignalAppId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return api_res; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return url_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_base_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_p2b_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return api_user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return api_pass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sc_code; });
/* unused harmony export sc_type */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = /** @class */ (function () {
    function Config() {
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], Config);
    return Config;
}());

//prod
var sender_id = '184093554881';
var oneSignalAppId = '2db6f70c-84c2-4a3a-973c-0de125847390';
//dev
// export const sender_id = '346331100253';
// export const oneSignalAppId = '3dc3181a-a59f-4f2e-91ce-6119ce479feb';
//dev
// export const api_base_url = 'http://103.29.187.218/api_itpk_dev/index.php?wsdl';
// export const api_res = 'http://103.29.187.218/api_itpk_dev/';
// export const url_image = "http://103.29.187.218/api_itpk_dev/foto_absen";
// export const api_base_url = 'http://192.168.5.22/e-office-itpk/api_itpk/index.php?wsdl';
// export const api_p2b_url = 'http://103.19.80.243/cfs_dev/api/index.php?wsdl';
//prod
// export const api_base_url = 'http://103.234.195.187/api_itpk/index.php?wsdl';
var api_res = 'http://103.29.187.218/api_itpk/';
var url_image = "http://103.29.187.218/api_itpk/foto_absen";
var api_base_url = 'http://103.29.187.218/api_itpk/index.php?wsdl';
var api_p2b_url = 'http://103.19.80.188/api/index.php?wsdl';
var api_user = "EDI-USERNAME";
var api_pass = "RURJLVBBU1NXT1JE";
var sc_code = "no value";
var sc_type = "no value";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/absen-bawahan/absen-bawahan.module": [
		294,
		82
	],
	"../pages/absen-list/absen-list.module": [
		295,
		81
	],
	"../pages/absen-mobile-detail/absen-mobile-detail.module": [
		296,
		80
	],
	"../pages/absen-team-hadirkoe/absen-team-hadirkoe.module": [
		297,
		79
	],
	"../pages/add-admin-direktorat/add-admin-direktorat.module": [
		298,
		78
	],
	"../pages/add-cuti/add-cuti.module": [
		299,
		77
	],
	"../pages/add-kategori-pengajuan/add-kategori-pengajuan.module": [
		300,
		76
	],
	"../pages/add-nota-restitusi/add-nota-restitusi.module": [
		301,
		75
	],
	"../pages/add-petugas-direktorat/add-petugas-direktorat.module": [
		302,
		74
	],
	"../pages/add-question-ipc-contact/add-question-ipc-contact.module": [
		303,
		73
	],
	"../pages/add-restitusi/add-restitusi.module": [
		304,
		72
	],
	"../pages/add-sppd/add-sppd.module": [
		305,
		71
	],
	"../pages/add-survey/add-survey.module": [
		306,
		70
	],
	"../pages/address-bawahan/address-bawahan.module": [
		307,
		69
	],
	"../pages/admin-direktorat-list/admin-direktorat-list.module": [
		309,
		68
	],
	"../pages/approve-koreksi-absen/approve-koreksi-absen.module": [
		308,
		67
	],
	"../pages/cari-pegawai/cari-pegawai.module": [
		310,
		66
	],
	"../pages/check-in/check-in.module": [
		311,
		5
	],
	"../pages/coba-list/coba-list.module": [
		312,
		65
	],
	"../pages/cuti-detail/cuti-detail.module": [
		313,
		64
	],
	"../pages/cuti-list/cuti-list.module": [
		316,
		63
	],
	"../pages/disposisi/disposisi.module": [
		314,
		62
	],
	"../pages/eval-bawahan-list/eval-bawahan-list.module": [
		315,
		61
	],
	"../pages/fingerprint-modal/fingerprint-modal.module": [
		317,
		60
	],
	"../pages/home/home.module": [
		319,
		59
	],
	"../pages/home2/home2.module": [
		318,
		58
	],
	"../pages/home3/home3.module": [
		320,
		57
	],
	"../pages/inbox-detail/inbox-detail.module": [
		322,
		56
	],
	"../pages/inbox/inbox.module": [
		321,
		55
	],
	"../pages/insert-note-attendance/insert-note-attendance.module": [
		323,
		54
	],
	"../pages/ipc-contact-detail/ipc-contact-detail.module": [
		325,
		4
	],
	"../pages/ipc-contact-history/ipc-contact-history.module": [
		324,
		53
	],
	"../pages/ipc-contact-list-second/ipc-contact-list-second.module": [
		326,
		52
	],
	"../pages/ipc-contact-list/ipc-contact-list.module": [
		327,
		3
	],
	"../pages/ipc-contact-question-list/ipc-contact-question-list.module": [
		328,
		2
	],
	"../pages/ipc-contact-rating/ipc-contact-rating.module": [
		329,
		1
	],
	"../pages/kategori-pengajuan-list/kategori-pengajuan-list.module": [
		330,
		51
	],
	"../pages/koreksi-absen-bawahan/koreksi-absen-bawahan.module": [
		331,
		50
	],
	"../pages/koreksi-absen-personal/koreksi-absen-personal.module": [
		332,
		49
	],
	"../pages/log-surat/log-surat.module": [
		333,
		48
	],
	"../pages/login/login.module": [
		334,
		47
	],
	"../pages/map/map.module": [
		336,
		6
	],
	"../pages/menu-absen/menu-absen.module": [
		335,
		46
	],
	"../pages/menu-ipc-contact/menu-ipc-contact.module": [
		337,
		45
	],
	"../pages/menu-p2b/menu-p2b.module": [
		338,
		44
	],
	"../pages/menu-survey/menu-survey.module": [
		340,
		43
	],
	"../pages/my-survey-list/my-survey-list.module": [
		339,
		42
	],
	"../pages/outbox-detail/outbox-detail.module": [
		341,
		41
	],
	"../pages/outbox/outbox.module": [
		342,
		40
	],
	"../pages/p2b-catatan/p2b-catatan.module": [
		343,
		39
	],
	"../pages/p2b-popup/p2b-popup.module": [
		344,
		38
	],
	"../pages/p2b-remark/p2b-remark.module": [
		345,
		37
	],
	"../pages/p2b/p2b.module": [
		349,
		36
	],
	"../pages/payslip-detail/payslip-detail.module": [
		347,
		35
	],
	"../pages/payslip-list/payslip-list.module": [
		346,
		34
	],
	"../pages/pertanggungjawaban-sppd/pertanggungjawaban-sppd.module": [
		348,
		33
	],
	"../pages/petugas-direktorat-list/petugas-direktorat-list.module": [
		350,
		32
	],
	"../pages/photo-viewer/photo-viewer.module": [
		351,
		31
	],
	"../pages/prpo-detail/prpo-detail.module": [
		353,
		30
	],
	"../pages/prpo-list/prpo-list.module": [
		352,
		29
	],
	"../pages/rate-absensi/rate-absensi.module": [
		354,
		0
	],
	"../pages/rencana-kerja-bawahan-list/rencana-kerja-bawahan-list.module": [
		355,
		28
	],
	"../pages/restitusi-detail/restitusi-detail.module": [
		357,
		27
	],
	"../pages/restitusi-list/restitusi-list.module": [
		356,
		26
	],
	"../pages/search-cuti/search-cuti.module": [
		358,
		25
	],
	"../pages/search-forward-prpo/search-forward-prpo.module": [
		359,
		24
	],
	"../pages/search-inbox/search-inbox.module": [
		360,
		23
	],
	"../pages/search-ipc-contact/search-ipc-contact.module": [
		361,
		22
	],
	"../pages/search-outbox/search-outbox.module": [
		362,
		21
	],
	"../pages/search-payslip/search-payslip.module": [
		363,
		20
	],
	"../pages/search-restitusi/search-restitusi.module": [
		364,
		19
	],
	"../pages/search-sppd/search-sppd.module": [
		366,
		18
	],
	"../pages/search-team-absen/search-team-absen.module": [
		365,
		17
	],
	"../pages/search-uang-muka/search-uang-muka.module": [
		367,
		16
	],
	"../pages/select-bawahan-disposisi/select-bawahan-disposisi.module": [
		368,
		15
	],
	"../pages/setting/setting.module": [
		373,
		14
	],
	"../pages/show-more/show-more.module": [
		369,
		13
	],
	"../pages/sppd-detail/sppd-detail.module": [
		370,
		12
	],
	"../pages/sppd-list/sppd-list.module": [
		375,
		11
	],
	"../pages/survey-detail/survey-detail.module": [
		371,
		10
	],
	"../pages/survey-list/survey-list.module": [
		372,
		9
	],
	"../pages/uang-muka-list/uang-muka-list.module": [
		376,
		8
	],
	"../pages/update-userdata/update-userdata.module": [
		374,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__soapclient_js__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__soapclient_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__soapclient_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SoapService = /** @class */ (function () {
    function SoapService() {
    }
    SoapService.prototype.post = function (url, action, params) {
        var _this = this;
        this.soapParams = new __WEBPACK_IMPORTED_MODULE_1__soapclient_js___default.a.SOAPClientParameters;
        this.soapClient = __WEBPACK_IMPORTED_MODULE_1__soapclient_js___default.a.SOAPClient;
        return new Promise(function (resolve, reject) {
            //Create SOAPClientParameters
            for (var param in params) {
                _this.soapParams.add(param, params[param]);
            }
            //Create Callback
            var soapCallback = function (e, status) {
                if (e == null || e.constructor.toString().indexOf("function Error()") != -1) {
                    reject("Unable to contat the server: " + status);
                }
                else {
                    resolve(e);
                }
            };
            _this.soapClient.invoke(url, action, _this.soapParams, true, soapCallback);
        });
    };
    SoapService.prototype.setCredentials = function (username, password) {
        this.soapClient.username = username;
        this.soapClient.password = password;
    };
    SoapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SoapService);
    return SoapService;
}());

//# sourceMappingURL=soap.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P2bDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
/**
 * Generated class for the P2bDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var P2bDetailPage = /** @class */ (function () {
    function P2bDetailPage(
        // private _fb: FormBuilder,
        navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, actionSheetCtrl, toastCtrl, oneSignal, datepipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.oneSignal = oneSignal;
        this.datepipe = datepipe;
        this.rencanaKerjaList = [];
        this.prosesKerjaList = [];
        this.ideList = [];
        this.p2bdetail = [];
        this.type = '';
        this.totalSkor = 0.0;
        this.currentDate = this.datepipe.transform(new Date(), 'M/d/yyyy');
        console.log(this.currentDate);
        this.currentDate = Date.parse(this.currentDate);
        this.currentMonth = this.datepipe.transform(new Date(), 'M');
        //this.currentMonth = '10';
        this.currentYear = this.datepipe.transform(new Date(), 'yyyy');
        //this.currentYear = '2021';
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_4__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_4__config__["h" /* sender_id */]);
        oneSignal.endInit();
        this.userdataTPK = this.navParams.get('userdataTPK');
        this.p2bdata = this.navParams.get('p2bdata');
        this.p2buser = this.navParams.get('p2buser');
        console.log(this.p2buser);
        this.type = this.navParams.get('type');
        this.p2bMonth = parseInt(this.convertMonths(this.p2bdata['Bulan']));
        //this.p2bMonth = '10';
        var startEvaluasiDateYear = 0;
        if (this.p2bMonth == '12' && this.currentMonth == '1') {
            startEvaluasiDateYear = (parseInt(this.currentYear) - 1);
        }
        else {
            startEvaluasiDateYear = this.currentYear;
        }
        this.startEvaluasiDate = this.p2bMonth + '/' + this.p2buser['TGL_PENILAIAN_AWAL'] + '/' + startEvaluasiDateYear;
        this.startPenilaianAkhirDate = this.p2bMonth + '/' + this.p2buser['TGL_NILAIAKHIR_AWAL'] + '/' + startEvaluasiDateYear;
        this.startKeberatanDate = this.p2bMonth + '/' + this.p2buser['TGL_KEBERATAN_AWAL'] + '/' + startEvaluasiDateYear;
        var startPengajuanMonth = 0;
        if (this.p2bMonth == '1') {
            startPengajuanMonth = 12;
        }
        else {
            startPengajuanMonth = this.p2bMonth - 1;
        }
        var startPengajuanYear = 0;
        if (this.p2bMonth == '1' && this.currentMonth == '1') {
            startPengajuanYear = (parseInt(this.currentYear) - 1);
        }
        else if (this.p2bMonth == '12' && this.currentMonth == '1') {
            startPengajuanYear = (parseInt(this.currentYear) - 1);
        }
        else {
            startPengajuanYear = this.currentYear;
        }
        this.startPengajuanDate = startPengajuanMonth + '/' + this.p2buser['TGL_PENGAJUAN_AWAL'] + '/' + startPengajuanYear;
        this.startKoreksiDate = this.p2bMonth + '/' + this.p2buser['TGL_KOREKSI_AWAL'] + '/' + startPengajuanYear;
        this.endKoreksiDate = this.p2bMonth + '/' + this.p2buser['TGL_KOREKSI_AKHIR'] + '/' + startPengajuanYear;
        var mountNext = (this.p2bMonth == '12') ? 1 : parseInt(this.p2bMonth) + 1;
        var yearEndDate = (this.p2bMonth == '12' && this.currentMonth == '12') ? (parseInt(this.currentYear) + 1) : this.currentYear;
        var tgl_akhir_eval = (this.p2buser['FL_AKHIR'] == true) ? this.p2buser['TGL_PALINGAKHIR_AKHIR'] : this.p2buser['TGL_PENILAIAN_AKHIR'];
        var tgl_akhir_keberatan = (this.p2buser['FL_AKHIR'] == true) ? this.p2buser['TGL_PALINGAKHIR_AKHIR'] : this.p2buser['TGL_KEBERATAN_AKHIR'];
        var tgl_akhir_pengajuan = (this.p2buser['FL_AKHIR'] == true) ? this.p2buser['TGL_PALINGAKHIR_AKHIR'] : this.p2buser['TGL_PENGAJUAN_AKHIR'];
        var tgl_akhir_penilai = (this.p2buser['FL_AKHIR'] == true) ? this.p2buser['TGL_PALINGAKHIR_AKHIR'] : this.p2buser['TGL_NILAIAKHIR_AKHIR'];
        this.EndEvaluasiDate = mountNext + '/' + tgl_akhir_eval + '/' + yearEndDate;
        this.endPenilaianAkhirDate = mountNext + '/' + tgl_akhir_penilai + '/' + yearEndDate;
        this.EndKeberatanDate = mountNext + '/' + tgl_akhir_keberatan + '/' + yearEndDate;
        var endPengajuanYear = 0;
        if (this.p2bMonth == '1' && this.currentMonth == '12') {
            endPengajuanYear = (parseInt(this.currentYear) + 1);
        }
        else if (this.p2bMonth == '12' && this.currentMonth == '1') {
            endPengajuanYear = (parseInt(this.currentYear) - 1);
            ;
        }
        else {
            endPengajuanYear = this.currentYear;
        }
        this.endPengajuanDate = this.p2bMonth + '/' + tgl_akhir_pengajuan + '/' + endPengajuanYear;
        console.log(this.currentDate);
        console.log("tgl mulai pengajuan : " + this.startPengajuanDate);
        console.log("tgl akhir pengajuan : " + this.endPengajuanDate);
        console.log("tgl mulai evaluasi : " + this.startEvaluasiDate);
        console.log("tgl akhir evaluasi : " + this.EndEvaluasiDate);
        console.log("tgl mulai penilaian akhir : " + this.startPenilaianAkhirDate);
        console.log("tgl akhir penilaian akhir : " + this.endPenilaianAkhirDate);
        console.log("tgl mulai koreksi : " + this.startKoreksiDate);
        console.log("tgl akhir koreksi : " + this.endKoreksiDate);
        console.log("tgl mulai keberatan : " + this.startKeberatanDate);
        console.log("tgl akhir keberatan : " + this.EndKeberatanDate);
        // console.log(this.currentDate >= this.startEvaluasiDate && this.currentDate <= this.EndEvaluasiDate);
        this.startEvaluasiDate = Date.parse(this.startEvaluasiDate);
        this.startPenilaianAkhirDate = Date.parse(this.startPenilaianAkhirDate);
        this.startKeberatanDate = Date.parse(this.startKeberatanDate);
        this.startPengajuanDate = Date.parse(this.startPengajuanDate);
        this.startKoreksiDate = Date.parse(this.startKoreksiDate);
        this.endKoreksiDate = Date.parse(this.endKoreksiDate);
        this.EndEvaluasiDate = Date.parse(this.EndEvaluasiDate);
        this.endPenilaianAkhirDate = Date.parse(this.endPenilaianAkhirDate);
        this.EndKeberatanDate = Date.parse(this.EndKeberatanDate);
        this.endPengajuanDate = Date.parse(this.endPengajuanDate);
        this.getData();
    }
    ;
    P2bDetailPage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '',
            cssClass: 'transparent',
        });
        loading.present();
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_eval_detail', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.userdataTPK['data']['NIPP'],
                jab_atasan: this.p2buser['P2B_ID_JAB_ATASAN'],
                id_evaluasi: this.p2bdata['Id Evaluasi'],
                month: "",
                year: ""
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);     
            if (responData['rcmsg'] == "SUCCESS") {
                _this.p2bdetail = [];
                _this.p2bdetail = responData['data'];
                _this.rencanaKerjaList = _this.p2bdetail['Rencana Hasil Kerja'];
                _this.prosesKerjaList = _this.p2bdetail['Proses Kerja'];
                _this.ideList = _this.p2bdetail['Ide / Inisiatif'];
                _this.sumTotalSkor();
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
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
            _this.isLoading = false;
        });
    };
    P2bDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad P2bDetailPage');
    };
    P2bDetailPage.prototype.openModal = function (data, typeData, index) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose Action',
            buttons: [
                {
                    text: 'Edit / Ubah',
                    role: 'edit',
                    handler: function () {
                        var modal = _this.modalCtrl.create("P2bPopupPage", {
                            listdata: data,
                            typedata: typeData,
                            status: 'edit',
                            totalBobot: _this.Sumfunction(_this.rencanaKerjaList, 'Bobot') + _this.Sumfunction(_this.prosesKerjaList, 'Bobot') + _this.Sumfunction(_this.ideList, 'Bobot')
                        }, {
                            enableBackdropDismiss: true,
                            showBackdrop: true,
                            cssClass: 'my-modal2'
                        });
                        modal.present();
                        modal.onDidDismiss(function (val) {
                            if (typeData == 'rencanaKerja') {
                            }
                            else if (typeData == 'prosesKerja') {
                            }
                            else if (typeData == 'ide') {
                            }
                        });
                    }
                }, typeData != 'prosesKerja' ?
                    {
                        text: 'Hapus',
                        role: 'hapus',
                        handler: function () {
                            if (typeData == 'rencanaKerja') {
                                if (index !== -1) {
                                    _this.rencanaKerjaList.splice(index, 1);
                                }
                            }
                            else if (typeData == 'prosesKerja') {
                            }
                            else if (typeData == 'ide') {
                                if (index !== -1) {
                                    _this.ideList.splice(index, 1);
                                }
                            }
                        }
                    } : {},
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        if (this.type == 'koreksi') {
            var modal = this.modalCtrl.create("P2bPopupPage", {
                listdata: data,
                typedata: typeData,
                status: 'koreksi',
                totalBobot: this.Sumfunction(this.rencanaKerjaList, 'Bobot') + this.Sumfunction(this.prosesKerjaList, 'Bobot') + this.Sumfunction(this.ideList, 'Bobot')
            }, {
                enableBackdropDismiss: true,
                showBackdrop: true,
                cssClass: 'my-modal3'
            });
            modal.present();
            modal.onDidDismiss(function (val) {
                if (val != null) {
                    if (typeData == 'rencanaKerja') {
                    }
                    else if (typeData == 'prosesKerja') {
                    }
                    else if (typeData == 'ide') {
                    }
                    _this.sumTotalSkor();
                }
            });
        }
        else {
            actionSheet.present();
        }
    };
    P2bDetailPage.prototype.sumTotalSkor = function () {
        this.totalSkor = 0.0;
        if (this.rencanaKerjaList.length > 0) {
            for (var i = 0; i < this.rencanaKerjaList.length; i++) {
                // console.log(this.rencanaKerjaList[i]['Skor']);
                if (this.rencanaKerjaList[i]['Skor'] != '') {
                    if (this.totalSkor == 0.0) {
                        this.totalSkor = parseFloat(this.rencanaKerjaList[i]['Skor']);
                    }
                    else {
                        this.totalSkor = this.totalSkor + parseFloat(this.rencanaKerjaList[i]['Skor']);
                    }
                }
            }
        }
        if (this.prosesKerjaList.length > 0) {
            for (var i = 0; i < this.prosesKerjaList.length; i++) {
                if (this.prosesKerjaList[i]['Skor'] != '') {
                    if (this.totalSkor == 0.0) {
                        this.totalSkor = parseFloat(this.prosesKerjaList[i]['Skor']);
                    }
                    else {
                        this.totalSkor = this.totalSkor + parseFloat(this.prosesKerjaList[i]['Skor']);
                    }
                }
            }
        }
        if (this.ideList.length > 0) {
            for (var i = 0; i < this.ideList.length; i++) {
                if (this.ideList[i]['Skor'] != '') {
                    if (this.totalSkor == 0.0) {
                        this.totalSkor = parseFloat(this.ideList[i]['Skor']);
                    }
                    else {
                        this.totalSkor = this.totalSkor + parseFloat(this.ideList[i]['Skor']);
                    }
                }
            }
        }
        this.totalSkorDisplay = this.totalSkor.toFixed(2);
        // console.log(this.totalSkorDisplay);
    };
    P2bDetailPage.prototype.add = function (type) {
        var _this = this;
        var modal = this.modalCtrl.create("P2bPopupPage", {
            listdata: '',
            typedata: type,
            status: 'add',
            totalBobot: this.Sumfunction(this.rencanaKerjaList, 'Bobot') + this.Sumfunction(this.prosesKerjaList, 'Bobot') + this.Sumfunction(this.ideList, 'Bobot')
        }, {
            enableBackdropDismiss: true,
            showBackdrop: true,
            cssClass: 'my-modal2'
        });
        modal.present();
        modal.onDidDismiss(function (val) {
            if (val != null) {
                if (type == 'rencanaKerja') {
                    _this.rencanaKerjaList.push({
                        'Bobot': val['data']['Bobot'],
                        'Bukti': '',
                        'Id': '',
                        'Nilai': '',
                        'Sasaran_Performansi': val['data']['Sasaran_Performansi'],
                        'Skor': ''
                    });
                }
                else if (type == 'prosesKerja') {
                    _this.prosesKerjaList.push({
                        'Bobot': val['data']['Bobot'],
                        'Bukti': '',
                        'Id': '',
                        'Nilai': '',
                        'Sasaran_Performansi': val['data']['Sasaran_Performansi'],
                        'Skor': ''
                    });
                }
                else if (type == 'ide') {
                    _this.ideList.push({
                        'Bobot': val['data']['Bobot'],
                        'Bukti': '',
                        'Id': '',
                        'Nilai': '',
                        'Sasaran_Performansi': val['data']['Sasaran_Performansi'],
                        'Skor': ''
                    });
                }
            }
        });
    };
    P2bDetailPage.prototype.submit = function (statusPengajuan, statusPenilaian) {
        var totalBobot = this.Sumfunction(this.rencanaKerjaList, 'Bobot') + this.Sumfunction(this.prosesKerjaList, 'Bobot') + this.Sumfunction(this.ideList, 'Bobot');
        if (totalBobot == 100) {
            if (this.p2bdata['Status'] == '' && this.type == null) {
                if (this.rencanaKerjaList.length == 0) {
                    var toast = this.toastCtrl.create({
                        message: 'Rencana Kerja tidak boleh kosong.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
                else {
                    this.sendAdd(statusPengajuan);
                }
            }
            else if (this.p2bdata['Status'] == 'SAVED' && this.type == null || (this.currentDate >= this.startKoreksiDate && this.currentDate <= this.endKoreksiDate) && this.type == null) {
                if (this.rencanaKerjaList.length == 0) {
                    var toast = this.toastCtrl.create({
                        message: 'Rencana Kerja tidak boleh kosong.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
                else {
                    this.sendEdit(statusPengajuan);
                }
            }
            else if (this.p2bdata['Status'] == 'POSTED' && this.type == 'koreksi' || this.p2bdata['Status'] == 'KEBERATAN' && this.type == 'koreksi') {
                var error = [];
                if (this.rencanaKerjaList.length > 0) {
                    for (var i = 0; i < this.rencanaKerjaList.length; i++) {
                        if (this.rencanaKerjaList[i]['Bukti'] == '' || this.rencanaKerjaList[i]['Nilai'] == '') {
                            error.push('error' + i);
                        }
                    }
                }
                if (this.ideList.length > 0) {
                    for (var i = 0; i < this.ideList.length; i++) {
                        if (this.ideList[i]['Bukti'] == '' || this.ideList[i]['Nilai'] == '') {
                            error.push('error' + i);
                        }
                    }
                }
                if (this.prosesKerjaList.length > 0) {
                    for (var i = 0; i < this.prosesKerjaList.length; i++) {
                        if (this.prosesKerjaList[i]['Bukti'] == '' || this.prosesKerjaList[i]['Nilai'] == '') {
                            error.push('error' + i);
                        }
                    }
                }
                if (error.length == 0) {
                    this.sendEval(statusPenilaian);
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: 'Penilaian belum lengkap',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }
            else if (this.p2bdata['Status'] == 'EVALUATED SAVED' && this.type == 'koreksi') {
                var error = [];
                if (this.rencanaKerjaList.length > 0) {
                    for (var i = 0; i < this.rencanaKerjaList.length; i++) {
                        if (this.rencanaKerjaList[i]['Bukti'] == '' || this.rencanaKerjaList[i]['Nilai'] == '') {
                            error.push('error' + i);
                        }
                    }
                }
                if (this.ideList.length > 0) {
                    for (var i = 0; i < this.ideList.length; i++) {
                        if (this.ideList[i]['Bukti'] == '' || this.ideList[i]['Nilai'] == '') {
                            error.push('error' + i);
                        }
                    }
                }
                if (this.prosesKerjaList.length > 0) {
                    for (var i = 0; i < this.prosesKerjaList.length; i++) {
                        if (this.prosesKerjaList[i]['Bukti'] == '' || this.prosesKerjaList[i]['Nilai'] == '') {
                            error.push('error' + i);
                        }
                    }
                }
                if (error.length == 0) {
                    this.sendEval(statusPenilaian);
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: 'Penilaian belum lengkap',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Total bobot harus 100',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    P2bDetailPage.prototype.keberatan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Anda yakin ingin melakukan keberatan ?',
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
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_keberatan_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp_user: _this.userdataTPK['data']['NIPP'],
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                id_penilai: _this.p2buser['P2B_ID_ATASAN_2'],
                                id_jabatan_penilai: _this.p2buser['P2B_ID_JAB_ATASAN_2'],
                                year: _this.p2bdata['Tahun'],
                                month: _this.convertMonths(_this.p2bdata['Bulan']),
                                catatan: _this.catatan
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: 'Pengajuan Keberatan Berhasil.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present().then(function () {
                                    _this.pushNotif('keberatan');
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
                            loading.dismiss();
                            _this.isLoading = false;
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        var catatanAlert = this.alertCtrl.create({
            title: 'Catatan',
            inputs: [
                {
                    name: 'catatan',
                    placeholder: 'catatan (optional)'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Keberatan',
                    handler: function (data) {
                        _this.catatan = data.catatan;
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_keberatan_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp_user: _this.userdataTPK['data']['NIPP'],
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                id_penilai: _this.p2buser['P2B_ID_ATASAN_2'],
                                id_jabatan_penilai: _this.p2buser['P2B_ID_JAB_ATASAN_2'],
                                year: _this.p2bdata['Tahun'],
                                month: _this.convertMonths(_this.p2bdata['Bulan']),
                                catatan: _this.catatan
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: 'Pengajuan Keberatan Berhasil.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present().then(function () {
                                    _this.pushNotif('keberatan');
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
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        catatanAlert.present();
    };
    P2bDetailPage.prototype.approvePenilaian = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Anda yakin ingin melakukan approve ?',
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
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_approve_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp_user: _this.userdataTPK['data']['NIPP'],
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                id_penilai: _this.p2buser['P2B_ID_ATASAN_2'],
                                id_jabatan_penilai: _this.p2buser['P2B_ID_JAB_ATASAN_2'],
                                year: _this.p2bdata['Tahun'],
                                month: _this.convertMonths(_this.p2bdata['Bulan'])
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: 'Approve Berhasil.',
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
                            loading.dismiss();
                            _this.isLoading = false;
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    P2bDetailPage.prototype.kembalikan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Anda yakin ingin kembalikan pengajuan ?',
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
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_kembali_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp_user: _this.userdataTPK['data']['NIPP'],
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                year: _this.p2bdata['Tahun'],
                                mon: _this.convertMonths(_this.p2bdata['Bulan'])
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: 'Kembalikan P2B Berhasil.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present().then(function () {
                                    _this.pushNotif('kembalikan');
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
                            loading.dismiss();
                            _this.isLoading = false;
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        var catatanAlert = this.alertCtrl.create({
            title: 'Catatan',
            inputs: [
                {
                    name: 'catatan',
                    placeholder: 'catatan (optional)'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Kembalikan',
                    handler: function (data) {
                        _this.catatan = data.catatan;
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_kembali_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp_user: _this.userdataTPK['data']['NIPP'],
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                year: _this.p2bdata['Tahun'],
                                mon: _this.convertMonths(_this.p2bdata['Bulan']),
                                catatan: _this.catatan
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: 'Kembalikan P2B Berhasil.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present().then(function () {
                                    _this.pushNotif('kembalikan');
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
                            loading.dismiss();
                            _this.isLoading = false;
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        catatanAlert.present();
    };
    P2bDetailPage.prototype.sendAdd = function (myStatus) {
        var _this = this;
        var msg = '';
        var alertMsg = '';
        if (myStatus == 'SAVED') {
            msg = 'P2B berhasil disimpan.';
            alertMsg = 'Anda yakin ingin menyimpan P2B ?';
        }
        else if (myStatus == 'POSTED') {
            msg = 'P2B berhasil dikirim.';
            alertMsg = 'Anda yakin ingin mengirim P2B ?';
        }
        var alert = this.alertCtrl.create({
            subTitle: alertMsg,
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
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                            dismissOnPageChange: true
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_make_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp: _this.userdataTPK['data']['NIPP'],
                                jab_atasan: _this.p2buser['P2B_ID_JAB_ATASAN'],
                                year: _this.p2bdata['Tahun'],
                                month: _this.convertMonths(_this.p2bdata['Bulan']),
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                data_rencana: _this.rencanaKerjaList,
                                data_ide: _this.ideList,
                                bobot_sikap_kerja: _this.prosesKerjaList[0]['Bobot'],
                                bobot_disiplin_kerja: _this.prosesKerjaList[1]['Bobot'],
                                status: myStatus
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: msg,
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                if (myStatus == 'POSTED') {
                                    _this.pushNotif('penilaian');
                                }
                                toast.present().then(function () {
                                    _this.navCtrl.pop();
                                });
                                loading.dismiss();
                                _this.isLoading = false;
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                loading.dismiss();
                                _this.isLoading = false;
                            }
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    P2bDetailPage.prototype.sendEval = function (myStatus) {
        var _this = this;
        var msg = '';
        var alertMsg = '';
        if (myStatus == 'EVALUATED' || myStatus == 'FINISHED') {
            msg = 'Penilaian Berhasil.';
            alertMsg = 'Anda yakin ingin mengirim penilaian ?';
        }
        else if (myStatus == 'EVALUATED SAVED') {
            msg = 'Penilaian Berhasil Disimpan.';
            alertMsg = 'Anda yakin ingin menyimpan penilaian ?';
        }
        else {
            msg = 'Penilaian berhasil.';
            alertMsg = 'Anda yakin ingin melakukan penilaian ?';
        }
        var alert = this.alertCtrl.create({
            subTitle: alertMsg,
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
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_do_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                nipp: _this.userdataTPK['data']['NIPP'],
                                nipp_bawahan: _this.p2bdata['NIPP'],
                                year: '',
                                month: '',
                                catatan: '',
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                data_rencana: _this.rencanaKerjaList,
                                data_ide: _this.ideList,
                                data_sikap: _this.prosesKerjaList[0],
                                data_disiplin: _this.prosesKerjaList[1],
                                status: myStatus
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: msg,
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                if (myStatus == 'EVALUATED') {
                                    _this.pushNotif('dinilai');
                                }
                                else if (myStatus == 'FINISHED') {
                                    _this.pushNotif('finished');
                                }
                                _this.navCtrl.pop();
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
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    P2bDetailPage.prototype.sendEdit = function (myStatus) {
        var _this = this;
        var msg = '';
        var alertMsg = '';
        if (myStatus == 'SAVED') {
            msg = 'Ubah Berhasil.';
            alertMsg = 'Anda yakin ingin mengubah P2B ?';
        }
        else if (myStatus == 'POSTED') {
            msg = 'P2B berhasil dikirim.';
            alertMsg = 'Anda yakin ingin mengirim P2B ?';
        }
        var alert = this.alertCtrl.create({
            subTitle: alertMsg,
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
                        var loading = _this.loadingCtrl.create({
                            content: '',
                            cssClass: 'transparent',
                            dismissOnPageChange: true
                        });
                        loading.present();
                        _this.isLoading = true;
                        _this.soapService
                            .post(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* api_p2b_url */], 'eoffice_p2b_edit_eval', {
                            fStream: JSON.stringify({
                                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                                id_user: _this.p2buser['P2B_ID'],
                                year: '',
                                month: '',
                                id_eval: _this.p2bdata['Id Evaluasi'],
                                data_rencana: _this.rencanaKerjaList,
                                data_ide: _this.ideList,
                                bobot_sikap_kerja: _this.prosesKerjaList[0]['Bobot'],
                                bobot_disiplin_kerja: _this.prosesKerjaList[1]['Bobot'],
                                status: myStatus
                            })
                        }).then(function (result) {
                            var responData = JSON.parse(String(result));
                            if (responData['rcmsg'] == "SUCCESS") {
                                var toast = _this.toastCtrl.create({
                                    message: msg,
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                if (myStatus == 'POSTED') {
                                    _this.pushNotif('penilaian');
                                }
                                toast.present().then(function () {
                                    _this.navCtrl.pop();
                                });
                                loading.dismiss();
                                _this.isLoading = false;
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                loading.dismiss();
                                _this.isLoading = false;
                            }
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            loading.dismiss();
                            _this.isLoading = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    P2bDetailPage.prototype.pushNotif = function (type) {
        var _this = this;
        var userList = [];
        var res;
        var en;
        if (type == 'dinilai') {
            res = 'P2bPage';
            en = 'Pengajuan P2B anda telah dinilai oleh atasan';
            userList.push(this.p2bdata['NIPP']);
        }
        else if (type == 'kembalikan') {
            res = 'P2bPage';
            en = 'Pengajuan P2B anda dikembalikan oleh atasan \nketerangan : ' + this.catatan;
            userList.push(this.p2bdata['NIPP']);
        }
        else if (type == 'keberatan') {
            res = 'P2bPage';
            en = 'Pengajuan Keberatan P2B dari \n' + this.userdataTPK['data']['NAMA'] + 'ketarangan : ' + this.catatan;
            userList.push(this.p2buser['P2B_NIPP_ATASAN_2']);
        }
        else if (type == 'penilaian') {
            res = 'RencanaKerjaBawahanListPage';
            en = 'Pengajuan P2B dari ' + this.userdataTPK['data']['NAMA'] + ' membutuhkan tindak lanjut';
            userList.push(this.p2buser['P2B_NIPP_ATASAN_1']);
        }
        else if (type == 'finished') {
            res = 'P2bPage';
            en = 'Pengajuan keberatan P2B anda telah dinilai oleh ' + this.userdataTPK['data']['NAMA'];
            userList.push(this.p2bdata['NIPP']);
        }
        else {
        }
        this.oneSignal.getIds().then(function (id) {
            _this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', {
                fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                    nipp: userList,
                    data: {
                        "res": res,
                        "p2buser": _this.p2buser
                    },
                    content: {
                        "en": en
                    },
                    heading: {
                        "en": "P2B"
                    },
                })
            }).then(function (result) {
                var hasil = JSON.parse(String(result));
            }).catch(function (error) {
            });
        });
    };
    P2bDetailPage.prototype.Sumfunction = function (items, prop) {
        return items.reduce(function (a, b) {
            return a + parseInt(b[prop]);
        }, 0);
    };
    P2bDetailPage.prototype.convertMonths = function (month) {
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
    P2bDetailPage.prototype.goToRemark = function () {
        this.navCtrl.push('P2bRemarkPage', {
            idEval: this.p2bdata['Id Evaluasi']
        });
    };
    P2bDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-p2b-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b-detail/p2b-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <span ion-text color="light" class="fw500">Rencana Kerja</span>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="goToRemark()">\n                <!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n                <img src="assets/imgs/menu-icon/history.png" style="    max-height: 27px;\n                    margin-right: 5px;">\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf="p2bdata[\'Status\'] == \'\'">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                                <ion-icon item-right name="add" color="light" class="load-more"\n                                    (click)="add(\'rencanaKerja\')"></ion-icon>\n                            </button>\n                            <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index"\n                                (click)="openModal(rencanaKerja,\'rencanaKerja\',i)">\n                                <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="rencanaKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                            </button>\n                            <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index"\n                                (click)="openModal(prosesKerja,\'prosesKerja\',i)">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ prosesKerja[\'Bobot\'] }} </b> </ion-note>\n                            </ion-item>\n                            <!-- <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index">\n                                    <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                    <ion-note item-right color="dark"> <b> {{ prosesKerja[\'Bobot\'] }} </b> </ion-note>\n                                </ion-item> -->\n                            <ion-item *ngIf="prosesKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                                <ion-icon item-right name="add" color="light" class="load-more" (click)="add(\'ide\')">\n                                </ion-icon>\n                            </button>\n                            <ion-item *ngFor="let ide of ideList; let i = index" (click)="openModal(ide,\'ide\',i)">\n                                <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ ide[\'Bobot\'] }} </b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="ideList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Bobot</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ Sumfunction(rencanaKerjaList,\'Bobot\') + Sumfunction(prosesKerjaList,\'Bobot\') + Sumfunction(ideList,\'Bobot\')}}\n                                </p>\n                            </button>\n                        </ion-item>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Skor</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500"> {{ p2bdetail[\'Total Skor\'] }} </p>\n                                <p ion-text color="light" class="fw500" *ngIf="p2bdetail[\'Total Skor\'] == null"> - </p>\n                            </button>\n                        </ion-item>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div *ngIf="p2bdata[\'Status\'] == \'SAVED\' && type == null">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                                <ion-icon *ngIf="(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)"\n                                    item-right name="add" color="light" class="load-more" (click)="add(\'rencanaKerja\')">\n                                </ion-icon>\n                            </button>\n                            <div *ngIf="(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)">\n                                <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index"\n                                    (click)="openModal(rencanaKerja,\'rencanaKerja\',i)">\n                                    <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                    <ion-note item-right color="dark"> <b> {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                                </ion-item>\n                            </div>\n                            <div *ngIf="!(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)">\n                                <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index">\n                                    <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                    <ion-note item-right color="dark"> <b> {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                                </ion-item>\n                            </div>\n\n                            <ion-item *ngIf="rencanaKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                            </button>\n                            <!-- <div *ngIf="(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)">\n                                    <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index"\n                                        (click)="openModal(prosesKerja,\'prosesKerja\',i)">\n                                        <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                        <ion-note item-right color="dark"> <b> {{ prosesKerja[\'Bobot\'] }} </b> </ion-note>\n                                    </ion-item>\n                                </div>\n                                <div *ngIf="!(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)">\n                                    <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index">\n                                        <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                        <ion-note item-right color="dark"> <b> {{ prosesKerja[\'Bobot\'] }} </b> </ion-note>\n                                    </ion-item>\n                                </div> -->\n\n                            <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ prosesKerja[\'Bobot\'] }} </b> </ion-note>\n                            </ion-item>\n\n                            <ion-item *ngIf="prosesKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                                <ion-icon *ngIf="(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)"\n                                    item-right name="add" color="light" class="load-more" (click)="add(\'ide\')">\n                                </ion-icon>\n                            </button>\n                            <div *ngIf="(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)">\n                                <ion-item *ngFor="let ide of ideList; let i = index" (click)="openModal(ide,\'ide\',i)">\n                                    <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                    <ion-note item-right color="dark"> <b> {{ ide[\'Bobot\'] }} </b> </ion-note>\n                                </ion-item>\n                            </div>\n                            <div *ngIf="!(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)">\n                                <ion-item *ngFor="let ide of ideList; let i = index">\n                                    <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                    <ion-note item-right color="dark"> <b> {{ ide[\'Bobot\'] }} </b> </ion-note>\n                                </ion-item>\n                            </div>\n\n                            <ion-item *ngIf="ideList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Bobot</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ Sumfunction(rencanaKerjaList,\'Bobot\') + Sumfunction(prosesKerjaList,\'Bobot\') + Sumfunction(ideList,\'Bobot\')}}\n                                </p>\n                            </button>\n                        </ion-item>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Skor</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500"> {{ p2bdetail[\'Total Skor\'] }} </p>\n                                <p ion-text color="light" class="fw500" *ngIf="p2bdetail[\'Total Skor\'] == null"> - </p>\n                            </button>\n                        </ion-item>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div *ngIf="p2bdata[\'Status\'] == \'POSTED\' && type == null">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                            </button>\n                            <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="rencanaKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                            </button>\n                            <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ prosesKerja[\'Bobot\'] }} </b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="prosesKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                            </button>\n                            <ion-item *ngFor="let ide of ideList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ ide[\'Bobot\'] }} </b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="ideList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Bobot</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ Sumfunction(rencanaKerjaList,\'Bobot\') + Sumfunction(prosesKerjaList,\'Bobot\') + Sumfunction(ideList,\'Bobot\')}}\n                                </p>\n                            </button>\n                        </ion-item>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Skor</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500"> {{ p2bdetail[\'Total Skor\'] }} </p>\n                                <p ion-text color="light" class="fw500" *ngIf="p2bdetail[\'Total Skor\'] == null"> - </p>\n                            </button>\n                        </ion-item>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div *ngIf="p2bdata[\'Status\'] == \'SAVED\' && type == \'koreksi\'">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                            </button>\n                            <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="rencanaKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                            </button>\n                            <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ prosesKerja[\'Bobot\'] }} </b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="prosesKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                            </button>\n                            <ion-item *ngFor="let ide of ideList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark"> <b> {{ ide[\'Bobot\'] }} </b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="ideList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Bobot</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ Sumfunction(rencanaKerjaList,\'Bobot\') + Sumfunction(prosesKerjaList,\'Bobot\') + Sumfunction(ideList,\'Bobot\')}}\n                                </p>\n                            </button>\n                        </ion-item>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Skor</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500"> {{ p2bdetail[\'Total Skor\'] }} </p>\n                                <p ion-text color="light" class="fw500" *ngIf="p2bdetail[\'Total Skor\'] == null"> - </p>\n                            </button>\n                        </ion-item>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div *ngIf="p2bdata[\'Status\'] == \'FINISHED\'">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let rencanaKerja of p2bdetail[\'Rencana Hasil Kerja\']">\n                                <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                <p ion-text text-wrap color="primary"> Bukti : </p>\n                                <p ion-text text-wrap color="primary">{{ rencanaKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark"><b>{{ rencanaKerja[\'Bobot\'] }} /\n                                        {{ rencanaKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="p2bdetail[\'Rencana Hasil Kerja\'].length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let prosesKerja of p2bdetail[\'Proses Kerja\']">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <p ion-text text-wrap color="primary"> Bukti : </p>\n                                <p ion-text text-wrap color="primary">{{ prosesKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark"> <b>{{ prosesKerja[\'Bobot\'] }} /\n                                        {{ prosesKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="p2bdetail[\'Proses Kerja\'].length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let ide of p2bdetail[\'Ide / Inisiatif\']">\n                                <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                <p ion-text text-wrap color="primary"> Bukti : </p>\n                                <p ion-text text-wrap color="primary">{{ ide[\'Bukti\'] }}</p>\n\n                                <ion-note item-right color="dark"> <b>{{ ide[\'Bobot\'] }} / {{ ide[\'Nilai\'] }}</b>\n                                </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="p2bdetail[\'Ide / Inisiatif\'].length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Skor</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500"> {{ p2bdetail[\'Total Skor\'] }} </p>\n                                <p ion-text color="light" class="fw500" *ngIf="p2bdetail[\'Total Skor\'] == null"> - </p>\n                            </button>\n                        </ion-item>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n\n    <div *ngIf="p2bdata[\'Status\'] == \'POSTED\' && type == \'koreksi\'">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index"\n                                (click)="openModal(rencanaKerja,\'rencanaKerja\',i)">\n                                <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="rencanaKerja[\'Skor\'] == \'\'"> <b>\n                                        {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="rencanaKerja[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="rencanaKerja[\'Skor\'] != \'\'">\n                                    {{ rencanaKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="rencanaKerja[\'Skor\'] != \'\'">\n                                    <b>{{ rencanaKerja[\'Bobot\'] }} / {{ rencanaKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="rencanaKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index"\n                                (click)="openModal(prosesKerja,\'prosesKerja\',i)">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="prosesKerja[\'Skor\'] == \'\'"> <b>\n                                        {{ prosesKerja[\'Bobot\'] }} </b></ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="prosesKerja[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="prosesKerja[\'Skor\'] != \'\'">\n                                    {{ prosesKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="prosesKerja[\'Skor\'] != \'\'">\n                                    <b>{{ prosesKerja[\'Bobot\'] }} / {{ prosesKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="prosesKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let ide of ideList; let i = index" (click)="openModal(ide,\'ide\',i)">\n                                <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="ide[\'Skor\'] == \'\'"> <b> {{ ide[\'Bobot\'] }} </b>\n                                </ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="ide[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="ide[\'Skor\'] != \'\'">{{ ide[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="ide[\'Skor\'] != \'\'"> <b>{{ ide[\'Bobot\'] }} /\n                                        {{ ide[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="ideList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Bobot</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ Sumfunction(rencanaKerjaList,\'Bobot\') + Sumfunction(prosesKerjaList,\'Bobot\') + Sumfunction(ideList,\'Bobot\')}}\n                                </p>\n                            </button>\n                        </ion-item>\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Skor</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ totalSkorDisplay }}\n                                </p>\n                            </button>\n                        </ion-item>\n\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div\n        *ngIf="p2bdata[\'Status\'] == \'EVALUATED SAVED\' && type == \'koreksi\' || p2bdata[\'Status\'] == \'KEBERATAN\' && type == \'koreksi\'">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index"\n                                (click)="openModal(rencanaKerja,\'rencanaKerja\',i)">\n                                <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="rencanaKerja[\'Skor\'] == \'\'"> <b>\n                                        {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="rencanaKerja[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="rencanaKerja[\'Skor\'] != \'\'">\n                                    {{ rencanaKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="rencanaKerja[\'Skor\'] != \'\'">\n                                    <b>{{ rencanaKerja[\'Bobot\'] }} / {{ rencanaKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="rencanaKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index"\n                                (click)="openModal(prosesKerja,\'prosesKerja\',i)">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="prosesKerja[\'Skor\'] == \'\'"> <b>\n                                        {{ prosesKerja[\'Bobot\'] }} </b></ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="prosesKerja[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="prosesKerja[\'Skor\'] != \'\'">\n                                    {{ prosesKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="prosesKerja[\'Skor\'] != \'\'">\n                                    <b>{{ prosesKerja[\'Bobot\'] }} / {{ prosesKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="prosesKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500"></p>\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let ide of ideList; let i = index" (click)="openModal(ide,\'ide\',i)">\n                                <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="ide[\'Skor\'] == \'\'"> <b> {{ ide[\'Bobot\'] }} </b>\n                                </ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="ide[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="ide[\'Skor\'] != \'\'">{{ ide[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="ide[\'Skor\'] != \'\'"> <b>{{ ide[\'Bobot\'] }} /\n                                        {{ ide[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="ideList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Bobot</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ Sumfunction(rencanaKerjaList,\'Bobot\') + Sumfunction(prosesKerjaList,\'Bobot\') + Sumfunction(ideList,\'Bobot\')}}\n                                </p>\n                            </button>\n                        </ion-item>\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Skor</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ totalSkorDisplay }}\n                                </p>\n                            </button>\n                        </ion-item>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div *ngIf="p2bdata[\'Status\'] == \'EVALUATED SAVED\' && type == null">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="rencanaKerja[\'Skor\'] == \'\'"> <b>\n                                        {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="rencanaKerja[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="rencanaKerja[\'Skor\'] != \'\'">\n                                    {{ rencanaKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="rencanaKerja[\'Skor\'] != \'\'">\n                                    <b>{{ rencanaKerja[\'Bobot\'] }} / {{ rencanaKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="rencanaKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="prosesKerja[\'Skor\'] == \'\'"> <b>\n                                        {{ prosesKerja[\'Bobot\'] }} </b></ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="prosesKerja[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="prosesKerja[\'Skor\'] != \'\'">\n                                    {{ prosesKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="prosesKerja[\'Skor\'] != \'\'">\n                                    <b>{{ prosesKerja[\'Bobot\'] }} / {{ prosesKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="prosesKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let ide of ideList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="ide[\'Skor\'] == \'\'"> <b> {{ ide[\'Bobot\'] }} </b>\n                                </ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="ide[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="ide[\'Skor\'] != \'\'">{{ ide[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="ide[\'Skor\'] != \'\'"> <b>{{ ide[\'Bobot\'] }} /\n                                        {{ ide[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="ideList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Bobot</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ Sumfunction(rencanaKerjaList,\'Bobot\') + Sumfunction(prosesKerjaList,\'Bobot\') + Sumfunction(ideList,\'Bobot\')}}\n                                </p>\n                            </button>\n                        </ion-item>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div *ngIf="p2bdata[\'Status\'] == \'EVALUATED\' && type == null || p2bdata[\'Status\'] == \'KEBERATAN\' && type == null">\n        <ion-grid fixed no-padding *ngIf="!isLoading">\n            <ion-row no-padding>\n                <ion-col no-padding>\n                    <ion-card no-padding>\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">I. Rencana Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let rencanaKerja of rencanaKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ rencanaKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="rencanaKerja[\'Skor\'] == \'\'"> <b>\n                                        {{ rencanaKerja[\'Bobot\'] }} </b></ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="rencanaKerja[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="rencanaKerja[\'Skor\'] != \'\'">\n                                    {{ rencanaKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="rencanaKerja[\'Skor\'] != \'\'">\n                                    <b>{{ rencanaKerja[\'Bobot\'] }} / {{ rencanaKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="rencanaKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <div style="display: inline-flex">\n                                    <p ion-text color="light" class="fw500">II. Proses Kerja</p>\n                                    <p ion-text color="light" style="right: 0; position:absolute;" class="fw500">Bobot /\n                                        Nilai</p>\n                                </div>\n                            </button>\n                            <ion-item *ngFor="let prosesKerja of prosesKerjaList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ prosesKerja[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="prosesKerja[\'Skor\'] == \'\'"> <b>\n                                        {{ prosesKerja[\'Bobot\'] }} </b></ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="prosesKerja[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="prosesKerja[\'Skor\'] != \'\'">\n                                    {{ prosesKerja[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="prosesKerja[\'Skor\'] != \'\'">\n                                    <b>{{ prosesKerja[\'Bobot\'] }} / {{ prosesKerja[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="prosesKerjaList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-list class="my-list">\n                            <button ion-item color="danger">\n                                <p ion-text color="light" class="fw500">III. Ide / Inisiatif</p>\n                            </button>\n                            <ion-item *ngFor="let ide of ideList; let i = index">\n                                <p ion-text text-wrap color="dark">{{ ide[\'Sasaran_Performansi\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="ide[\'Skor\'] == \'\'"> <b> {{ ide[\'Bobot\'] }} </b>\n                                </ion-note>\n                                <p ion-text text-wrap color="primary" *ngIf="ide[\'Skor\'] != \'\'"> Bukti : </p>\n                                <p ion-text text-wrap color="primary" *ngIf="ide[\'Skor\'] != \'\'">{{ ide[\'Bukti\'] }}</p>\n                                <ion-note item-right color="dark" *ngIf="ide[\'Skor\'] != \'\'"> <b>{{ ide[\'Bobot\'] }} /\n                                        {{ ide[\'Nilai\'] }}</b> </ion-note>\n                            </ion-item>\n                            <ion-item *ngIf="ideList.length == 0">\n                                <p text-wrap> - </p>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Bobot</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500">\n                                    {{ Sumfunction(rencanaKerjaList,\'Bobot\') + Sumfunction(prosesKerjaList,\'Bobot\') + Sumfunction(ideList,\'Bobot\')}}\n                                </p>\n                            </button>\n                        </ion-item>\n\n                        <ion-item color="danger" class="total">\n                            <button ion-button clear item-left>\n                                <p ion-text color="light" class="fw500">Total Skor</p>\n                            </button>\n                            <button ion-button clear item-right>\n                                <p ion-text color="light" class="fw500"> {{ p2bdetail[\'Total Skor\'] }} </p>\n                                <p ion-text color="light" class="fw500" *ngIf="p2bdetail[\'Total Skor\'] == null"> - </p>\n                            </button>\n                        </ion-item>\n\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-content>\n\n\n<ion-footer\n    *ngIf="(p2bdata[\'Status\'] == \'\' && (currentDate >= startPengajuanDate && currentDate <= endPengajuanDate))  || p2bdata[\'Status\'] == \'SAVED\' && type == null && (currentDate >= startPengajuanDate && currentDate <= endPengajuanDate) || p2bdata[\'Status\'] != \'KEBERATAN\' && (currentDate >= startKoreksiDate && currentDate <= endKoreksiDate) && type == null">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="submit(\'SAVED\',\'\')"\n                    color="primary">\n                    <ion-icon name="md-bookmark"></ion-icon>\n                    Simpan\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="submit(\'POSTED\',\'\')"\n                    color="primary">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                    Post\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n\n<ion-footer\n    *ngIf="(p2bdata[\'Status\'] == \'EVALUATED SAVED\' && type == \'koreksi\') && (currentDate >= startEvaluasiDate && currentDate <= EndEvaluasiDate)">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="submit(\'\',\'EVALUATED SAVED\')"\n                    color="primary">\n                    <ion-icon name="md-bookmark"></ion-icon>\n                    Simpan\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="submit(\'\',\'EVALUATED\')"\n                    color="primary">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                    Kirim\n                </button>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n\n<ion-footer\n    *ngIf="(p2bdata[\'Status\'] == \'KEBERATAN\' && type == \'koreksi\') && (currentDate >= startPenilaianAkhirDate && currentDate <= endPenilaianAkhirDate)">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="submit(\'\',\'FINISHED\')"\n                    color="primary">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                    Kirim\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n\n<ion-footer *ngIf="(p2bdata[\'Status\'] == \'POSTED\' && type == \'koreksi\')">\n    <ion-grid>\n        <ion-row *ngIf="(currentDate >= startEvaluasiDate && currentDate <= EndEvaluasiDate)">\n            <ion-col col-6>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="submit(\'\',\'EVALUATED SAVED\')"\n                    color="primary">\n                    <ion-icon name="md-bookmark"></ion-icon>\n                    Simpan\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="submit(\'\',\'EVALUATED\')"\n                    color="primary">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                    Kirim\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="(currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)">\n            <ion-col col-12>\n                <button style="border-radius:5px;" icon-start ion-button block color="primary" (click)="kembalikan()">\n                    <ion-icon name="md-refresh"></ion-icon>\n                    Kembalikan\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n\n<!-- <ion-footer\n        *ngIf="(p2bdata[\'Status\'] == \'POSTED\' && type == \'koreksi\') && (currentDate >= startPengajuanDate && currentDate <= endPengajuanDate)">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-12>\n                    <button style="border-radius:5px;" icon-start ion-button block color="primary" (click)="kembalikan()">\n                        <ion-icon name="md-refresh"></ion-icon>\n                        Kembalikan\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-footer> -->\n\n<ion-footer\n    *ngIf="(p2bdata[\'Status\'] == \'EVALUATED\' && type == null) && (currentDate >= startKeberatanDate && currentDate <= EndKeberatanDate) ">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="keberatan()" color="danger">\n                    <ion-icon name="md-close"></ion-icon>\n                    Keberatan\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button style="border-radius:5px;" icon-start ion-button block (click)="approvePenilaian()"\n                    color="primary">\n                    <ion-icon name="md-checkmark"></ion-icon>\n                    Approve\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b-detail/p2b-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* DatePipe */]])
    ], P2bDetailPage);
    return P2bDetailPage;
}());

//# sourceMappingURL=p2b-detail.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_p2b_detail_p2b_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_chooser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_device__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_base64__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_android_permissions__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_diagnostic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_open_native_settings__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var config = {
    backButtonText: '',
    backButtonIcon: 'ios-arrow-back',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_p2b_detail_p2b_detail__["a" /* P2bDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/absen-bawahan/absen-bawahan.module#AbsenBawahanPageModule', name: 'AbsenBawahanPage', segment: 'absen-bawahan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/absen-list/absen-list.module#AbsenListPageModule', name: 'AbsenListPage', segment: 'absen-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/absen-mobile-detail/absen-mobile-detail.module#AbsenMobileDetailPageModule', name: 'AbsenMobileDetailPage', segment: 'absen-mobile-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/absen-team-hadirkoe/absen-team-hadirkoe.module#AbsenTeamHadirkoePageModule', name: 'AbsenTeamHadirkoePage', segment: 'absen-team-hadirkoe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-admin-direktorat/add-admin-direktorat.module#AddAdminDirektoratPageModule', name: 'AddAdminDirektoratPage', segment: 'add-admin-direktorat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-cuti/add-cuti.module#AddCutiPageModule', name: 'AddCutiPage', segment: 'add-cuti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-kategori-pengajuan/add-kategori-pengajuan.module#AddKategoriPengajuanPageModule', name: 'AddKategoriPengajuanPage', segment: 'add-kategori-pengajuan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-nota-restitusi/add-nota-restitusi.module#AddNotaRestitusiPageModule', name: 'AddNotaRestitusiPage', segment: 'add-nota-restitusi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-petugas-direktorat/add-petugas-direktorat.module#AddPetugasDirektoratPageModule', name: 'AddPetugasDirektoratPage', segment: 'add-petugas-direktorat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-question-ipc-contact/add-question-ipc-contact.module#AddQuestionIpcContactPageModule', name: 'AddQuestionIpcContactPage', segment: 'add-question-ipc-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-restitusi/add-restitusi.module#AddRestitusiPageModule', name: 'AddRestitusiPage', segment: 'add-restitusi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-sppd/add-sppd.module#AddSppdPageModule', name: 'AddSppdPage', segment: 'add-sppd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-survey/add-survey.module#AddSurveyPageModule', name: 'AddSurveyPage', segment: 'add-survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address-bawahan/address-bawahan.module#AddressBawahanPageModule', name: 'AddressBawahanPage', segment: 'address-bawahan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approve-koreksi-absen/approve-koreksi-absen.module#ApproveKoreksiAbsenPageModule', name: 'ApproveKoreksiAbsenPage', segment: 'approve-koreksi-absen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-direktorat-list/admin-direktorat-list.module#AdminDirektoratListPageModule', name: 'AdminDirektoratListPage', segment: 'admin-direktorat-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cari-pegawai/cari-pegawai.module#CariPegawaiPageModule', name: 'CariPegawaiPage', segment: 'cari-pegawai', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check-in/check-in.module#CheckInPageModule', name: 'CheckInPage', segment: 'check-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coba-list/coba-list.module#CobaListPageModule', name: 'CobaListPage', segment: 'coba-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuti-detail/cuti-detail.module#CutiDetailPageModule', name: 'CutiDetailPage', segment: 'cuti-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disposisi/disposisi.module#DisposisiPageModule', name: 'DisposisiPage', segment: 'disposisi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eval-bawahan-list/eval-bawahan-list.module#EvalBawahanListPageModule', name: 'EvalBawahanListPage', segment: 'eval-bawahan-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuti-list/cuti-list.module#CutiListPageModule', name: 'CutiListPage', segment: 'cuti-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fingerprint-modal/fingerprint-modal.module#FingerprintModalPageModule', name: 'FingerprintModalPage', segment: 'fingerprint-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home2/home2.module#Home2PageModule', name: 'Home2Page', segment: 'home2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home3/home3.module#Home3PageModule', name: 'Home3Page', segment: 'home3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox-detail/inbox-detail.module#InboxDetailPageModule', name: 'InboxDetailPage', segment: 'inbox-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insert-note-attendance/insert-note-attendance.module#InsertNoteAttendancePageModule', name: 'InsertNoteAttendancePage', segment: 'insert-note-attendance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ipc-contact-history/ipc-contact-history.module#IpcContactHistoryPageModule', name: 'IpcContactHistoryPage', segment: 'ipc-contact-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ipc-contact-detail/ipc-contact-detail.module#IpcContactDetailPageModule', name: 'IpcContactDetailPage', segment: 'ipc-contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ipc-contact-list-second/ipc-contact-list-second.module#IpcContactListSecondPageModule', name: 'IpcContactListSecondPage', segment: 'ipc-contact-list-second', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ipc-contact-list/ipc-contact-list.module#IpcContactListPageModule', name: 'IpcContactListPage', segment: 'ipc-contact-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ipc-contact-question-list/ipc-contact-question-list.module#IpcContactQuestionListPageModule', name: 'IpcContactQuestionListPage', segment: 'ipc-contact-question-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ipc-contact-rating/ipc-contact-rating.module#IpcContactRatingPageModule', name: 'IpcContactRatingPage', segment: 'ipc-contact-rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kategori-pengajuan-list/kategori-pengajuan-list.module#KategoriPengajuanListPageModule', name: 'KategoriPengajuanListPage', segment: 'kategori-pengajuan-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/koreksi-absen-bawahan/koreksi-absen-bawahan.module#KoreksiAbsenBawahanPageModule', name: 'KoreksiAbsenBawahanPage', segment: 'koreksi-absen-bawahan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/koreksi-absen-personal/koreksi-absen-personal.module#KoreksiAbsenPersonalPageModule', name: 'KoreksiAbsenPersonalPage', segment: 'koreksi-absen-personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log-surat/log-surat.module#LogSuratPageModule', name: 'LogSuratPage', segment: 'log-surat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-absen/menu-absen.module#MenuAbsenPageModule', name: 'MenuAbsenPage', segment: 'menu-absen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-ipc-contact/menu-ipc-contact.module#MenuIpcContactPageModule', name: 'MenuIpcContactPage', segment: 'menu-ipc-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-p2b/menu-p2b.module#MenuP2bPageModule', name: 'MenuP2bPage', segment: 'menu-p2b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-survey-list/my-survey-list.module#MySurveyListPageModule', name: 'MySurveyListPage', segment: 'my-survey-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-survey/menu-survey.module#MenuSurveyPageModule', name: 'MenuSurveyPage', segment: 'menu-survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/outbox-detail/outbox-detail.module#OutboxDetailPageModule', name: 'OutboxDetailPage', segment: 'outbox-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/outbox/outbox.module#InboxPageModule', name: 'OutboxPage', segment: 'outbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p2b-catatan/p2b-catatan.module#P2bCatatanPageModule', name: 'P2bCatatanPage', segment: 'p2b-catatan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p2b-popup/p2b-popup.module#P2bPopupPageModule', name: 'P2bPopupPage', segment: 'p2b-popup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p2b-remark/p2b-remark.module#P2bRemarkPageModule', name: 'P2bRemarkPage', segment: 'p2b-remark', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payslip-list/payslip-list.module#PayslipListPageModule', name: 'PayslipListPage', segment: 'payslip-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payslip-detail/payslip-detail.module#PayslipDetailPageModule', name: 'PayslipDetailPage', segment: 'payslip-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pertanggungjawaban-sppd/pertanggungjawaban-sppd.module#PertanggungjawabanSppdPageModule', name: 'PertanggungjawabanSppdPage', segment: 'pertanggungjawaban-sppd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p2b/p2b.module#P2bPageModule', name: 'P2bPage', segment: 'p2b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/petugas-direktorat-list/petugas-direktorat-list.module#PetugasDirektoratListPageModule', name: 'PetugasDirektoratListPage', segment: 'petugas-direktorat-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photo-viewer/photo-viewer.module#PhotoViewerPageModule', name: 'PhotoViewerPage', segment: 'photo-viewer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prpo-list/prpo-list.module#PrpoListPageModule', name: 'PrpoListPage', segment: 'prpo-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prpo-detail/prpo-detail.module#PrpoDetailPageModule', name: 'PrpoDetailPage', segment: 'prpo-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rate-absensi/rate-absensi.module#RateAbsensiPageModule', name: 'RateAbsensiPage', segment: 'rate-absensi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rencana-kerja-bawahan-list/rencana-kerja-bawahan-list.module#RencanaKerjaBawahanListPageModule', name: 'RencanaKerjaBawahanListPage', segment: 'rencana-kerja-bawahan-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restitusi-list/restitusi-list.module#RestitusiListPageModule', name: 'RestitusiListPage', segment: 'restitusi-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restitusi-detail/restitusi-detail.module#RestitusiDetailPageModule', name: 'RestitusiDetailPage', segment: 'restitusi-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-cuti/search-cuti.module#SearchCutiPageModule', name: 'SearchCutiPage', segment: 'search-cuti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-forward-prpo/search-forward-prpo.module#SearchForwardPrpoPageModule', name: 'SearchForwardPrpoPage', segment: 'search-forward-prpo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-inbox/search-inbox.module#SearchInboxPageModule', name: 'SearchInboxPage', segment: 'search-inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-ipc-contact/search-ipc-contact.module#SearchIpcContactPageModule', name: 'SearchIpcContactPage', segment: 'search-ipc-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-outbox/search-outbox.module#SearchOutboxPageModule', name: 'SearchOutboxPage', segment: 'search-outbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-payslip/search-payslip.module#SearchPayslipPageModule', name: 'SearchPayslipPage', segment: 'search-payslip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-restitusi/search-restitusi.module#SearchRestitusiPageModule', name: 'SearchRestitusiPage', segment: 'search-restitusi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-team-absen/search-team-absen.module#SearchTeamAbsenPageModule', name: 'SearchTeamAbsenPage', segment: 'search-team-absen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-sppd/search-sppd.module#SearchSppdPageModule', name: 'SearchSppdPage', segment: 'search-sppd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-uang-muka/search-uang-muka.module#SearchUangMukaPageModule', name: 'SearchUangMukaPage', segment: 'search-uang-muka', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-bawahan-disposisi/select-bawahan-disposisi.module#SelectBawahanDisposisiPageModule', name: 'SelectBawahanDisposisiPage', segment: 'select-bawahan-disposisi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-more/show-more.module#ShowMorePageModule', name: 'ShowMorePage', segment: 'show-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sppd-detail/sppd-detail.module#SppdDetailPageModule', name: 'SppdDetailPage', segment: 'sppd-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey-detail/survey-detail.module#SurveyDetailPageModule', name: 'SurveyDetailPage', segment: 'survey-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey-list/survey-list.module#SurveyListPageModule', name: 'SurveyListPage', segment: 'survey-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-userdata/update-userdata.module#UpdateUserdataPageModule', name: 'UpdateUserdataPage', segment: 'update-userdata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sppd-list/sppd-list.module#SppdListPageModule', name: 'SppdListPage', segment: 'sppd-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uang-muka-list/uang-muka-list.module#UangMukaListPageModule', name: 'UangMukaListPage', segment: 'uang-muka-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_p2b_detail_p2b_detail__["a" /* P2bDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* CurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

/*****************************************************************************\
 Javascript "SOAP Client" library
 
 @version: 2.4 - 2007.12.21
 @author: Matteo Casati - http://www.guru4.net/
 
\*****************************************************************************/
 


function SOAPClientParameters()
{
	var _pl = new Array();
	this.add = function(name, value) 
	{
		_pl[name] = value; 
		return this; 
	}
	this.toXml = function()
	{
		var xml = "";
		for(var p in _pl)
		{
			switch(typeof(_pl[p])) 
			{
                case "string":
                case "number":
                case "boolean":
                case "object":
                    xml += "<" + p + ">" + SOAPClientParameters._serialize(_pl[p]) + "</" + p + ">";
                    break;
                default:
                    break;
            }
		}
		return xml;	
	}
}
SOAPClientParameters._serialize = function(o)
{
    var s = "";
    switch(typeof(o))
    {
        case "string":
            s += o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); break;
        case "number":
        case "boolean":
            s += o.toString(); break;
        case "object":
            // Date
            if(o.constructor.toString().indexOf("function Date()") > -1)
            {
        
                var year = o.getFullYear().toString();
                var month = (o.getMonth() + 1).toString(); month = (month.length == 1) ? "0" + month : month;
                var date = o.getDate().toString(); date = (date.length == 1) ? "0" + date : date;
                var hours = o.getHours().toString(); hours = (hours.length == 1) ? "0" + hours : hours;
                var minutes = o.getMinutes().toString(); minutes = (minutes.length == 1) ? "0" + minutes : minutes;
                var seconds = o.getSeconds().toString(); seconds = (seconds.length == 1) ? "0" + seconds : seconds;
                var milliseconds = o.getMilliseconds().toString();
                var tzminutes = Math.abs(o.getTimezoneOffset());
                var tzhours = 0;
                while(tzminutes >= 60)
                {
                    tzhours++;
                    tzminutes -= 60;
                }
                tzminutes = (tzminutes.toString().length == 1) ? "0" + tzminutes.toString() : tzminutes.toString();
                tzhours = (tzhours.toString().length == 1) ? "0" + tzhours.toString() : tzhours.toString();
                var timezone = ((o.getTimezoneOffset() < 0) ? "+" : "-") + tzhours + ":" + tzminutes;
                s += year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds + "." + milliseconds + timezone;
            }
            // Array
            else if(o.constructor.toString().indexOf("function Array()") > -1)
            {
                for(var p in o)
                {
                    if(!isNaN(p))   // linear array
                    {
                        (/function\s+(\w*)\s*\(/ig).exec(o[p].constructor.toString());
                        var type = RegExp.$1;
                        switch(type)
                        {
                            case "":
                                type = typeof(o[p]);
                            case "String":
                                type = "string"; break;
                            case "Number":
                                type = "int"; break;
                            case "Boolean":
                                type = "bool"; break;
                            case "Date":
                                type = "DateTime"; break;
                        }
                        s += "<" + type + ">" + SOAPClientParameters._serialize(o[p]) + "</" + type + ">"
                    }
                    else    // associative array
                        s += "<" + p + ">" + SOAPClientParameters._serialize(o[p]) + "</" + p + ">"
                }
            }
            // Object or custom function
            else
                for(var p in o){
					xmlAtrr = ''
					for (var p2 in o[p]){ 
							if(p2 == "@"){ // Calculus: Keyword for XML attributes within the objects
								for (var p3 in o[p][p2]){
									xmlAtrr+= ' ' + p3 + "=" + '"'+o[p][p2][p3]+'"';
								}
							}
						}
					if (p == '@'){

					}else{
						 s += "<" + p + xmlAtrr + ">" + SOAPClientParameters._serialize(o[p]) + "</" + p + ">";
					}
				}
            break;
        default:
            break; // throw new Error(500, "SOAPClientParameters: type '" + typeof(o) + "' is not supported");
    }
    return s;
}

function SOAPClient() {}

SOAPClient.username = null;
SOAPClient.password = null;

SOAPClient.invoke = function(url, method, parameters, async, callback)
{
	if(async)
		SOAPClient._loadWsdl(url, method, parameters, async, callback);
	else
		return SOAPClient._loadWsdl(url, method, parameters, async, callback);
}

// private: wsdl cache
SOAPClient_cacheWsdl = new Array();

// private: invoke async
SOAPClient._loadWsdl = function(url, method, parameters, async, callback)
{
	// load from cache?
	var wsdl = SOAPClient_cacheWsdl[url];
	if(wsdl + "" != "" && wsdl + "" != "undefined")
		return SOAPClient._sendSoapRequest(url, method, parameters, async, callback, wsdl);
	// get wsdl
	var xmlHttp = SOAPClient._getXmlHttp();
	//  xmlHttp.open("GET", url + "?wsdl", async);
	xmlHttp.open("GET", url, async);
	if(async) 
	{
		xmlHttp.onreadystatechange = function() 
		{
            
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    SOAPClient._onLoadWsdl(url, method, parameters, async, callback, xmlHttp);
                } else {
                    callback(null, xmlHttp.statusText);
                }
            }  
		}
	}
     xmlHttp.send(null);
     
	if (!async)
		return SOAPClient._onLoadWsdl(url, method, parameters, async, callback, xmlHttp);
}
SOAPClient._onLoadWsdl = function(url, method, parameters, async, callback, req)
{
	var wsdl = req.responseXML;
	SOAPClient_cacheWsdl[url] = wsdl;	// save a copy in cache
	return SOAPClient._sendSoapRequest(url, method, parameters, async, callback, wsdl);
}
SOAPClient._sendSoapRequest = function(url, method, parameters, async, callback, wsdl)
{
	// get namespace
	var ns = (wsdl.documentElement.attributes["targetNamespace"] + "" == "undefined") ? wsdl.documentElement.attributes.getNamedItem("targetNamespace").nodeValue : wsdl.documentElement.attributes["targetNamespace"].value;
	// build SOAP request
	var sr = 
				"<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
				"<soap:Envelope " +
				"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
				"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
				"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
				"<soap:Body>" +
				"<" + method + " xmlns=\"" + ns + "\">" +
				parameters.toXml() +
				"</" + method + "></soap:Body></soap:Envelope>";
	// send request
	var xmlHttp = SOAPClient._getXmlHttp();
	if (SOAPClient.userName && SOAPClient.password){
		xmlHttp.open("POST", url, async, SOAPClient.userName, SOAPClient.password);
		// Some WS implementations (i.e. BEA WebLogic Server 10.0 JAX-WS) don't support Challenge/Response HTTP BASIC, so we send authorization headers in the first request
		xmlHttp.setRequestHeader("Authorization", "Basic " + SOAPClient._toBase64(SOAPClient.userName + ":" + SOAPClient.password));
	}
	else
		xmlHttp.open("POST", url, async);
       xmlHttp.timeout = 15000;
	var soapaction = ((ns.lastIndexOf("/") != ns.length - 1) ? ns + "/" : ns) + encodeURIComponent(method);
	xmlHttp.setRequestHeader("SOAPAction", soapaction); 
	xmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
	// xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "https://<ORIGINSERVER>");
	// xmlHttp.setRequestHeader("Access-Control-Allow-Credentials", "true");
	// xmlHttp.setRequestHeader("Access-Control-Allow-Methods", "GET");
	if(async) 
	{
        xmlHttp.ontimeout = function(e){
            callback(null, e.type);
        };
		xmlHttp.onreadystatechange = function() 
		{
             if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                     SOAPClient._onSendSoapRequest(method, async, callback, wsdl, xmlHttp);
                } else {                   
                    callback(null, xmlHttp.statusText);
                }
            }  
		} 
	}   	
    xmlHttp.send(sr);
	if (!async)
		return SOAPClient._onSendSoapRequest(method, async, callback, wsdl, xmlHttp);
}

SOAPClient._onSendSoapRequest = function(method, async, callback, wsdl, req) 
{
	var o = null;
	var nd = SOAPClient._getElementsByTagName(req.responseXML, method + "Result");    
	if(nd.length == 0)
		nd = SOAPClient._getElementsByTagName(req.responseXML, "return");	// PHP web Service?
	if(nd.length == 0)
	{
		if(req.responseXML.getElementsByTagName("faultcode").length > 0)
		{
		    if(async || callback)
		        o = new Error(500, req.responseXML.getElementsByTagName("faultstring")[0].childNodes[0].nodeValue);
			else
			    throw new Error(500, req.responseXML.getElementsByTagName("faultstring")[0].childNodes[0].nodeValue);			
		}
	}
	else
		o = SOAPClient._soapresult2object(nd[0], wsdl);        
	if(callback)
		callback(o, req.responseXML);
	if(!async)
		return o;
}
SOAPClient._soapresult2object = function(node, wsdl)
{
    var wsdlTypes = SOAPClient._getTypesFromWsdl(wsdl);
    return SOAPClient._node2object(node, wsdlTypes);
}
SOAPClient._node2object = function(node, wsdlTypes)
{
	// null node
	if(node == null)
		return null;
	// text node
	if(node.nodeType == 3 || node.nodeType == 4)
		return SOAPClient._extractValue(node, wsdlTypes);
	// leaf node
	if (node.childNodes.length == 1 && (node.childNodes[0].nodeType == 3 || node.childNodes[0].nodeType == 4))
		return SOAPClient._node2object(node.childNodes[0], wsdlTypes);
	var isarray = SOAPClient._getTypeFromWsdl(node.nodeName, wsdlTypes).toLowerCase().indexOf("arrayof") != -1;
	// object node
	if(!isarray)
	{
		var obj = null;
		if(node.hasChildNodes())
			obj = new Object();
		for(var i = 0; i < node.childNodes.length; i++)
		{
			var p = SOAPClient._node2object(node.childNodes[i], wsdlTypes);
			obj[node.childNodes[i].nodeName] = p;
		}
		return obj;
	}
	// list node
	else
	{
		// create node ref
		var l = new Array();
		for(var i = 0; i < node.childNodes.length; i++)
			l[l.length] = SOAPClient._node2object(node.childNodes[i], wsdlTypes);
		return l;
	}
	return null;
}
SOAPClient._extractValue = function(node, wsdlTypes)
{
	var value = node.nodeValue;
	switch(SOAPClient._getTypeFromWsdl(node.parentNode.nodeName, wsdlTypes).toLowerCase())
	{
		default:
		case "s:string":			
			return (value != null) ? value + "" : "";
		case "s:boolean":
			return value + "" == "true";
		case "s:int":
		case "s:long":
			return (value != null) ? parseInt(value + "", 10) : 0;
		case "s:double":
			return (value != null) ? parseFloat(value + "") : 0;
		case "s:datetime":
			if(value == null)
				return null;
			else
			{
				value = value + "";
				value = value.substring(0, (value.lastIndexOf(".") == -1 ? value.length : value.lastIndexOf(".")));
				value = value.replace(/T/gi," ");
				value = value.replace(/-/gi,"/");
				var d = new Date();
				d.setTime(Date.parse(value));										
				return d;				
			}
	}
}
SOAPClient._getTypesFromWsdl = function(wsdl)
{
	var wsdlTypes = new Array();
	// IE
	var ell = wsdl.getElementsByTagName("s:element");	
	var useNamedItem = true;
	// MOZ
	if(ell.length == 0)
	{
		ell = wsdl.getElementsByTagName("element");	     
		useNamedItem = false;
	}
	for(var i = 0; i < ell.length; i++)
	{
		if(useNamedItem)
		{
			if(ell[i].attributes.getNamedItem("name") != null && ell[i].attributes.getNamedItem("type") != null) 
				wsdlTypes[ell[i].attributes.getNamedItem("name").nodeValue] = ell[i].attributes.getNamedItem("type").nodeValue;
		}	
		else
		{
			if(ell[i].attributes["name"] != null && ell[i].attributes["type"] != null)
				wsdlTypes[ell[i].attributes["name"].value] = ell[i].attributes["type"].value;
		}
	}
	return wsdlTypes;
}
SOAPClient._getTypeFromWsdl = function(elementname, wsdlTypes)
{
    var type = wsdlTypes[elementname] + "";
    return (type == "undefined") ? "" : type;
}
// private: utils
SOAPClient._getElementsByTagName = function(document, tagName)
{
	try
	{
		// trying to get node omitting any namespaces (latest versions of MSXML.XMLDocument)
		return document.selectNodes(".//*[local-name()=\""+ tagName +"\"]");
	}
	catch (ex) {}
	// old XML parser support
	return document.getElementsByTagName(tagName);
}
// private: xmlhttp factory
SOAPClient._getXmlHttp = function() 
{
	try
	{
		if(window.XMLHttpRequest) 
		{
			var req = new XMLHttpRequest();
			// some versions of Moz do not support the readyState property and the onreadystate event so we patch it!
			if(req.readyState == null) 
			{
				req.readyState = 1;
				req.addEventListener("load", 
									function() 
									{
										req.readyState = 4;
										if(typeof req.onreadystatechange == "function")
											req.onreadystatechange();
									},
									false);
			}
			return req;
		}
		if(window.ActiveXObject) 
			return new ActiveXObject(SOAPClient._getXmlHttpProgID());
	}
	catch (ex) {}
	throw new Error("Your browser does not support XmlHttp objects");
}
SOAPClient._getXmlHttpProgID = function()
{
	if(SOAPClient._getXmlHttpProgID.progid)
		return SOAPClient._getXmlHttpProgID.progid;
	var progids = ["Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
	var o;
	for(var i = 0; i < progids.length; i++)
	{
		try
		{
			o = new ActiveXObject(progids[i]);
			return SOAPClient._getXmlHttpProgID.progid = progids[i];
		}
		catch (ex) {};
	}
	throw new Error("Could not find an installed XML parser");
}

SOAPClient._toBase64 = function(input)
{
	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;

	do {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);

		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;

		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
			enc4 = 64;
		}

		output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) +
		keyStr.charAt(enc3) + keyStr.charAt(enc4);
	} while (i < input.length);

	return output;
}

module.exports = {
	SOAPClientParameters:SOAPClientParameters,
	SOAPClient:SOAPClient
};


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, oneSignal) {
        var _this = this;
        this.storage = storage;
        this.oneSignal = oneSignal;
        platform.ready().then(function () {
            if (platform.is('android')) {
                statusBar.styleLightContent();
            }
            else {
                statusBar.styleDefault();
            }
            splashScreen.hide();
            storage.get('userdataTPK').then(function (val) {
                if (val != null) {
                    _this.rootPage = 'Home3Page';
                    if (platform.is('cordova')) {
                        _this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_6__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_6__config__["h" /* sender_id */]);
                        _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                        _this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data); });
                        _this.oneSignal.handleNotificationOpened().subscribe(function (data) {
                            _this.onPushOpened(data);
                        });
                        _this.oneSignal.endInit();
                    }
                }
                else {
                    _this.rootPage = 'LoginPage';
                }
            });
        });
    }
    MyApp.prototype.onPushReceived = function (data) {
        //alert('Push recevied:' + JSON.stringify(data));
    };
    MyApp.prototype.onPushOpened = function (data) {
        //alert('Push recevied:' + JSON.stringify(data.notification.payload.additionalData));      
        if (this.rootPage != '') {
            var state = data.notification.payload.additionalData.res;
            if (state == 'IpcContactDetailPage') {
                var val = data.notification.payload.additionalData.data;
                this.nav.push(state, {
                    "data": val
                });
            }
            else if (state == 'InboxDetailPage') {
                var val = data.notification.payload.additionalData.nipp;
                // let userdata = data.notification.payload.additionalData.userdata;
                var messageData = data.notification.payload.additionalData.messageData;
                this.nav.push(state, {
                    "nipp": val,
                    //"userdata": userdata,
                    "messageData": messageData
                });
            }
            else if (state == 'RencanaKerjaBawahanListPage') {
                var messageData = data.notification.payload.additionalData.p2buser;
                this.nav.push(state, {
                    "p2buser": messageData
                });
            }
            else {
                this.nav.push(state);
            }
        }
        else {
            var state = data.notification.payload.additionalData.res;
            if (state == 'IpcContactDetailPage') {
                var val = data.notification.payload.additionalData.data;
                this.nav.push(state, {
                    "data": val
                });
            }
            else if (state == 'InboxDetailPage') {
                var val = data.notification.payload.additionalData.nipp;
                // let userdata = data.notification.payload.additionalData.userdata;
                var messageData = data.notification.payload.additionalData.messageData;
                this.nav.push(state, {
                    "nipp": val,
                    //"userdata": userdata,
                    "messageData": messageData
                });
            }
            else if (state == 'RencanaKerjaBawahanListPage') {
                var p2buser = data.notification.payload.additionalData.p2buser;
                this.nav.push(state, {
                    "p2buser": p2buser
                });
            }
            else {
                this.nav.push(state);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map