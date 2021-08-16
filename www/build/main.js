webpackJsonp([50],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/absen-bawahan/absen-bawahan.module": [
		291,
		37
	],
	"../pages/absen-list/absen-list.module": [
		292,
		36
	],
	"../pages/absen-mobile-detail/absen-mobile-detail.module": [
		293,
		35
	],
	"../pages/absen-team-hadirkoe/absen-team-hadirkoe.module": [
		296,
		34
	],
	"../pages/add-cuti/add-cuti.module": [
		294,
		33
	],
	"../pages/add-kategori-pengajuan/add-kategori-pengajuan.module": [
		295,
		32
	],
	"../pages/add-nota-restitusi/add-nota-restitusi.module": [
		297,
		31
	],
	"../pages/add-restitusi/add-restitusi.module": [
		298,
		30
	],
	"../pages/add-sppd/add-sppd.module": [
		299,
		29
	],
	"../pages/address-bawahan/address-bawahan.module": [
		300,
		28
	],
	"../pages/approve-koreksi-absen/approve-koreksi-absen.module": [
		301,
		27
	],
	"../pages/cari-pegawai/cari-pegawai.module": [
		302,
		26
	],
	"../pages/check-in/check-in.module": [
		304,
		1
	],
	"../pages/coba-list/coba-list.module": [
		303,
		49
	],
	"../pages/cuti-detail/cuti-detail.module": [
		305,
		25
	],
	"../pages/cuti-list/cuti-list.module": [
		307,
		24
	],
	"../pages/disposisi/disposisi.module": [
		306,
		48
	],
	"../pages/fingerprint-modal/fingerprint-modal.module": [
		308,
		23
	],
	"../pages/home/home.module": [
		309,
		47
	],
	"../pages/home2/home2.module": [
		310,
		46
	],
	"../pages/home3/home3.module": [
		312,
		22
	],
	"../pages/inbox-detail/inbox-detail.module": [
		311,
		21
	],
	"../pages/inbox/inbox.module": [
		313,
		20
	],
	"../pages/insert-note-attendance/insert-note-attendance.module": [
		315,
		19
	],
	"../pages/kategori-pengajuan-list/kategori-pengajuan-list.module": [
		314,
		18
	],
	"../pages/koreksi-absen-bawahan/koreksi-absen-bawahan.module": [
		316,
		17
	],
	"../pages/koreksi-absen-personal/koreksi-absen-personal.module": [
		317,
		16
	],
	"../pages/log-surat/log-surat.module": [
		318,
		15
	],
	"../pages/login/login.module": [
		319,
		14
	],
	"../pages/map/map.module": [
		320,
		38
	],
	"../pages/menu-absen/menu-absen.module": [
		321,
		13
	],
	"../pages/outbox-detail/outbox-detail.module": [
		322,
		12
	],
	"../pages/outbox/outbox.module": [
		323,
		11
	],
	"../pages/pertanggungjawaban-sppd/pertanggungjawaban-sppd.module": [
		324,
		45
	],
	"../pages/photo-viewer/photo-viewer.module": [
		325,
		44
	],
	"../pages/rate-absensi/rate-absensi.module": [
		326,
		0
	],
	"../pages/restitusi-detail/restitusi-detail.module": [
		327,
		43
	],
	"../pages/restitusi-list/restitusi-list.module": [
		328,
		10
	],
	"../pages/search-cuti/search-cuti.module": [
		329,
		9
	],
	"../pages/search-inbox/search-inbox.module": [
		330,
		8
	],
	"../pages/search-outbox/search-outbox.module": [
		331,
		7
	],
	"../pages/search-restitusi/search-restitusi.module": [
		332,
		6
	],
	"../pages/search-sppd/search-sppd.module": [
		335,
		5
	],
	"../pages/search-team-absen/search-team-absen.module": [
		334,
		42
	],
	"../pages/select-bawahan-disposisi/select-bawahan-disposisi.module": [
		333,
		41
	],
	"../pages/setting/setting.module": [
		336,
		4
	],
	"../pages/show-more/show-more.module": [
		337,
		40
	],
	"../pages/sppd-detail/sppd-detail.module": [
		339,
		39
	],
	"../pages/sppd-list/sppd-list.module": [
		338,
		3
	],
	"../pages/update-userdata/update-userdata.module": [
		340,
		2
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sender_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return oneSignalAppId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return api_res; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return url_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_base_url; });
/* unused harmony export api_p2b_url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return api_user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_pass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sc_code; });
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_device__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_base64__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_android_permissions__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_diagnostic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_open_native_settings__ = __webpack_require__(213);
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
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/absen-bawahan/absen-bawahan.module#AbsenBawahanPageModule', name: 'AbsenBawahanPage', segment: 'absen-bawahan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/absen-list/absen-list.module#AbsenListPageModule', name: 'AbsenListPage', segment: 'absen-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/absen-mobile-detail/absen-mobile-detail.module#AbsenMobileDetailPageModule', name: 'AbsenMobileDetailPage', segment: 'absen-mobile-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-cuti/add-cuti.module#AddCutiPageModule', name: 'AddCutiPage', segment: 'add-cuti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-kategori-pengajuan/add-kategori-pengajuan.module#AddKategoriPengajuanPageModule', name: 'AddKategoriPengajuanPage', segment: 'add-kategori-pengajuan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/absen-team-hadirkoe/absen-team-hadirkoe.module#AbsenTeamHadirkoePageModule', name: 'AbsenTeamHadirkoePage', segment: 'absen-team-hadirkoe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-nota-restitusi/add-nota-restitusi.module#AddNotaRestitusiPageModule', name: 'AddNotaRestitusiPage', segment: 'add-nota-restitusi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-restitusi/add-restitusi.module#AddRestitusiPageModule', name: 'AddRestitusiPage', segment: 'add-restitusi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-sppd/add-sppd.module#AddSppdPageModule', name: 'AddSppdPage', segment: 'add-sppd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address-bawahan/address-bawahan.module#AddressBawahanPageModule', name: 'AddressBawahanPage', segment: 'address-bawahan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approve-koreksi-absen/approve-koreksi-absen.module#ApproveKoreksiAbsenPageModule', name: 'ApproveKoreksiAbsenPage', segment: 'approve-koreksi-absen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cari-pegawai/cari-pegawai.module#CariPegawaiPageModule', name: 'CariPegawaiPage', segment: 'cari-pegawai', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coba-list/coba-list.module#CobaListPageModule', name: 'CobaListPage', segment: 'coba-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check-in/check-in.module#CheckInPageModule', name: 'CheckInPage', segment: 'check-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuti-detail/cuti-detail.module#CutiDetailPageModule', name: 'CutiDetailPage', segment: 'cuti-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disposisi/disposisi.module#DisposisiPageModule', name: 'DisposisiPage', segment: 'disposisi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuti-list/cuti-list.module#CutiListPageModule', name: 'CutiListPage', segment: 'cuti-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fingerprint-modal/fingerprint-modal.module#FingerprintModalPageModule', name: 'FingerprintModalPage', segment: 'fingerprint-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home2/home2.module#Home2PageModule', name: 'Home2Page', segment: 'home2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox-detail/inbox-detail.module#InboxDetailPageModule', name: 'InboxDetailPage', segment: 'inbox-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home3/home3.module#Home3PageModule', name: 'Home3Page', segment: 'home3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kategori-pengajuan-list/kategori-pengajuan-list.module#KategoriPengajuanListPageModule', name: 'KategoriPengajuanListPage', segment: 'kategori-pengajuan-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insert-note-attendance/insert-note-attendance.module#InsertNoteAttendancePageModule', name: 'InsertNoteAttendancePage', segment: 'insert-note-attendance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/koreksi-absen-bawahan/koreksi-absen-bawahan.module#KoreksiAbsenBawahanPageModule', name: 'KoreksiAbsenBawahanPage', segment: 'koreksi-absen-bawahan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/koreksi-absen-personal/koreksi-absen-personal.module#KoreksiAbsenPersonalPageModule', name: 'KoreksiAbsenPersonalPage', segment: 'koreksi-absen-personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log-surat/log-surat.module#LogSuratPageModule', name: 'LogSuratPage', segment: 'log-surat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-absen/menu-absen.module#MenuAbsenPageModule', name: 'MenuAbsenPage', segment: 'menu-absen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/outbox-detail/outbox-detail.module#OutboxDetailPageModule', name: 'OutboxDetailPage', segment: 'outbox-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/outbox/outbox.module#InboxPageModule', name: 'OutboxPage', segment: 'outbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pertanggungjawaban-sppd/pertanggungjawaban-sppd.module#PertanggungjawabanSppdPageModule', name: 'PertanggungjawabanSppdPage', segment: 'pertanggungjawaban-sppd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photo-viewer/photo-viewer.module#PhotoViewerPageModule', name: 'PhotoViewerPage', segment: 'photo-viewer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rate-absensi/rate-absensi.module#RateAbsensiPageModule', name: 'RateAbsensiPage', segment: 'rate-absensi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restitusi-detail/restitusi-detail.module#RestitusiDetailPageModule', name: 'RestitusiDetailPage', segment: 'restitusi-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restitusi-list/restitusi-list.module#RestitusiListPageModule', name: 'RestitusiListPage', segment: 'restitusi-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-cuti/search-cuti.module#SearchCutiPageModule', name: 'SearchCutiPage', segment: 'search-cuti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-inbox/search-inbox.module#SearchInboxPageModule', name: 'SearchInboxPage', segment: 'search-inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-outbox/search-outbox.module#SearchOutboxPageModule', name: 'SearchOutboxPage', segment: 'search-outbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-restitusi/search-restitusi.module#SearchRestitusiPageModule', name: 'SearchRestitusiPage', segment: 'search-restitusi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-bawahan-disposisi/select-bawahan-disposisi.module#SelectBawahanDisposisiPageModule', name: 'SelectBawahanDisposisiPage', segment: 'select-bawahan-disposisi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-team-absen/search-team-absen.module#SearchTeamAbsenPageModule', name: 'SearchTeamAbsenPage', segment: 'search-team-absen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-sppd/search-sppd.module#SearchSppdPageModule', name: 'SearchSppdPage', segment: 'search-sppd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-more/show-more.module#ShowMorePageModule', name: 'ShowMorePage', segment: 'show-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sppd-list/sppd-list.module#SppdListPageModule', name: 'SppdListPage', segment: 'sppd-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sppd-detail/sppd-detail.module#SppdDetailPageModule', name: 'SppdDetailPage', segment: 'sppd-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-userdata/update-userdata.module#UpdateUserdataPageModule', name: 'UpdateUserdataPage', segment: 'update-userdata', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* CurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(199);
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
                        _this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_6__config__["e" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_6__config__["g" /* sender_id */]);
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

},[214]);
//# sourceMappingURL=main.js.map