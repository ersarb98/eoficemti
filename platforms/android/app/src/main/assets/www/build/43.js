webpackJsonp([43],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestitusiDetailPageModule", function() { return RestitusiDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restitusi_detail__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RestitusiDetailPageModule = /** @class */ (function () {
    function RestitusiDetailPageModule() {
    }
    RestitusiDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__restitusi_detail__["a" /* RestitusiDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restitusi_detail__["a" /* RestitusiDetailPage */]),
            ],
        })
    ], RestitusiDetailPageModule);
    return RestitusiDetailPageModule;
}());

//# sourceMappingURL=restitusi-detail.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestitusiDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
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
 * Generated class for the RestitusiDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestitusiDetailPage = /** @class */ (function () {
    function RestitusiDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataRestitusi = this.navParams.get('dataRestitusi');
        this.jumlahTotal = this.navParams.get('jumlahTotal');
        console.log(this.dataRestitusi);
        console.log(this.jumlahTotal);
    }
    RestitusiDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestitusiDetailPage');
    };
    RestitusiDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-restitusi-detail',template:/*ion-inline-start:"D:\Project\pos-ppi\src\pages\restitusi-detail\restitusi-detail.html"*/'<!--\n\n  Generated template for the RestitusiDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <span ion-text color="light" class="fw500">Detail Restitusi</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card class="header-card">\n\n    <ion-card-content>\n\n      <span ion-text text-wrap class="font-header">\n\n        <b>{{ dataRestitusi[\'PERIHAL\'] }}</b>\n\n      </span>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card class="my-card">\n\n    <ion-card-content>\n\n      <div class="row">\n\n        <div class="col">\n\n          <span ion-text text-wrap class="font-mini" color="color4">\n\n            Jenis Restitusi\n\n          </span><br>\n\n          <span ion-text text-wrap class="font-small">\n\n            {{ dataRestitusi[\'JENIS\'] }}\n\n          </span>\n\n        </div>\n\n        <div class="col">\n\n          <span ion-text text-wrap class="font-mini" color="color4">\n\n            Tanggal Pengajuan\n\n          </span><br>\n\n          <span ion-text text-wrap class="font-small">\n\n            {{ dataRestitusi[\'TGL_PENGAJUAN\'] }}\n\n          </span>\n\n        </div>\n\n      </div>\n\n      <div class="row">\n\n        <div class="col">\n\n          <span ion-text text-wrap class="font-mini" color="color4">\n\n            Jumlah Total\n\n          </span><br>\n\n          <span ion-text text-wrap class="font-small">\n\n            <b>Rp. {{ jumlahTotal }}</b>\n\n          </span>\n\n        </div>\n\n        <div class="col">\n\n          <span ion-text text-wrap class="font-mini" color="color4">\n\n            Status\n\n          </span><br>\n\n          <span ion-text text-wrap class="font-small" color="primary">\n\n            {{ dataRestitusi[\'KETERANGAN\'] }}\n\n          </span>\n\n        </div>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card class="my-card">\n\n    <ion-card-content>\n\n      <div class="header-text">\n\n        <span ion-text text-wrap>\n\n          <img src="assets/imgs/menu-icon/Restitusi.png" class="icons">\n\n        </span>\n\n        <span ion-text text-wrap class="font-small">\n\n          <b>Detail Restitusi</b>\n\n        </span>\n\n      </div>\n\n      <div class="garis"></div>\n\n      <br>\n\n\n\n      <table width="100%">\n\n        <tr *ngFor="let detail of dataRestitusi[\'DETAIL\'];let i = index">\n\n          <td valign="top" width="10%">{{ i+1 }}.</td>\n\n          <td valign="top" width="90%">\n\n            <table width="100%" >\n\n              <tr>\n\n                <td width="45%" >\n\n                  <span ion-text text-wrap class="font-small" color="danger">\n\n                    Tanggal Nota\n\n                  </span>\n\n                </td>\n\n                <td width="5%" >\n\n                  <span ion-text text-wrap class="font-small" color="danger">\n\n                     : \n\n                  </span>\n\n                </td>\n\n                <td width="50%" >\n\n                  <span ion-text text-wrap class="font-small" color="danger">\n\n                    {{ detail[\'TANGGAL_NOTA\'] }}\n\n                  </span>\n\n                </td>\n\n              </tr>\n\n\n\n              <tr>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                    Nama Pasien\n\n                  </span>\n\n                </td>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                    :\n\n                  </span>\n\n                </td>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                    {{ detail[\'NAMA_PASIEN\'] }}\n\n                  </span>\n\n                </td>\n\n              </tr>\n\n\n\n              <tr>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                    Status Keluarga\n\n                  </span> \n\n                </td>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                    :\n\n                  </span> \n\n                </td>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                   {{ detail[\'STATUS_KELUARGA\'] }}\n\n                  </span> \n\n                </td>\n\n              </tr>\n\n              <tr>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                    Rincian Biaya\n\n                  </span> \n\n                </td>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                    :\n\n                  </span> \n\n                </td>\n\n                <td>\n\n                  <span ion-text text-wrap class="font-small">\n\n                   \n\n                  </span> \n\n                </td>\n\n              </tr>\n\n            </table>                                          \n\n            \n\n            <div class="row">\n\n              <div class="col">\n\n                <span ion-text text-wrap class="font-mini" color="color4">\n\n                  Biaya Dokter\n\n                </span><br>\n\n                <span ion-text text-wrap class="font-small"\n\n                  *ngIf="detail[\'BIAYA_DOKTER\'] == null || detail[\'BIAYA_DOKTER\'] == \'\'">\n\n                  Rp. 0\n\n                </span>\n\n                <span ion-text text-wrap class="font-small">\n\n                  Rp. {{ detail[\'BIAYA_DOKTER\'] }}\n\n                </span>\n\n              </div>\n\n              <div class="col">\n\n                <span ion-text text-wrap class="font-mini" color="color4">\n\n                  Biaya Obat\n\n                </span><br>\n\n                <span ion-text text-wrap class="font-small"\n\n                  *ngIf="detail[\'BIAYA_OBAT\'] == null || detail[\'BIAYA_OBAT\'] == \'\'">\n\n                  Rp. 0\n\n                </span>\n\n                <span ion-text text-wrap class="font-small">\n\n                  Rp. {{ detail[\'BIAYA_OBAT\'] }}\n\n                </span>\n\n              </div>\n\n            </div>\n\n\n\n            <div class="row">\n\n              <div class="col">\n\n                <span ion-text text-wrap class="font-mini" color="color4">\n\n                  Biaya Tindakan\n\n                </span><br>\n\n                <span ion-text text-wrap class="font-small"\n\n                  *ngIf="detail[\'BIAYA_TINDAKAN\'] == null || detail[\'BIAYA_TINDAKAN\'] == \'\'">\n\n                  Rp. 0\n\n                </span>\n\n                <span ion-text text-wrap class="font-small">\n\n                  Rp. {{ detail[\'BIAYA_TINDAKAN\'] }}\n\n                </span>\n\n              </div>\n\n              <div class="col">\n\n                <span ion-text text-wrap class="font-mini" color="color4">\n\n                  Biaya Perawatan\n\n                </span><br>\n\n                <span ion-text text-wrap class="font-small"\n\n                  *ngIf="detail[\'BIAYA_PERAWATAN\'] == null || detail[\'BIAYA_PERAWATAN\'] == \'\'">\n\n                  Rp. 0\n\n                </span>\n\n                <span ion-text text-wrap class="font-small">\n\n                  Rp. {{ detail[\'BIAYA_PERAWATAN\'] }}\n\n                </span>\n\n              </div>\n\n            </div>\n\n\n\n            <div class="row">\n\n              <div class="col">\n\n                <span ion-text text-wrap class="font-mini" color="color4">\n\n                  Biaya Administrasi\n\n                </span><br>\n\n                <span ion-text text-wrap class="font-small"\n\n                  *ngIf="detail[\'BIAYA_ADMINISTRASI\'] == null || detail[\'BIAYA_ADMINISTRASI\'] == \'\'">\n\n                  Rp. 0\n\n                </span>\n\n                <span ion-text text-wrap class="font-small">\n\n                  Rp. {{ detail[\'BIAYA_ADMINISTRASI\'] }}\n\n                </span>\n\n              </div>\n\n              <div class="col">\n\n                <span ion-text text-wrap class="font-mini" color="color4">\n\n                  Biaya Lain-lain\n\n                </span><br>\n\n                <span ion-text text-wrap class="font-small"\n\n                  *ngIf="detail[\'BIAYA_LAIN_LAIN\'] == null || detail[\'BIAYA_LAIN_LAIN\'] == \'\'">\n\n                  Rp. 0\n\n                </span>\n\n                <span ion-text text-wrap class="font-small">\n\n                  Rp. {{ detail[\'BIAYA_LAIN_LAIN\'] }}\n\n                </span>\n\n              </div>\n\n            </div>\n\n            <br>\n\n          </td>\n\n        </tr>\n\n\n\n      </table>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Project\pos-ppi\src\pages\restitusi-detail\restitusi-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], RestitusiDetailPage);
    return RestitusiDetailPage;
}());

//# sourceMappingURL=restitusi-detail.js.map

/***/ })

});
//# sourceMappingURL=43.js.map