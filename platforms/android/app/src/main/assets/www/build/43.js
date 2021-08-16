webpackJsonp([43],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestitusiDetailPageModule", function() { return RestitusiDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restitusi_detail__ = __webpack_require__(384);
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

/***/ 384:
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
            selector: 'page-restitusi-detail',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/restitusi-detail/restitusi-detail.html"*/'<!--\n  Generated template for the RestitusiDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Detail Restitusi</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="header-card">\n    <ion-card-content>\n      <span ion-text text-wrap class="font-header">\n        <b>{{ dataRestitusi[\'PERIHAL\'] }}</b>\n      </span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="row">\n        <div class="col">\n          <span ion-text text-wrap class="font-mini" color="color4">\n            Jenis Restitusi\n          </span><br>\n          <span ion-text text-wrap class="font-small">\n            {{ dataRestitusi[\'JENIS\'] }}\n          </span>\n        </div>\n        <div class="col">\n          <span ion-text text-wrap class="font-mini" color="color4">\n            Tanggal Pengajuan\n          </span><br>\n          <span ion-text text-wrap class="font-small">\n            {{ dataRestitusi[\'TGL_PENGAJUAN\'] }}\n          </span>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col">\n          <span ion-text text-wrap class="font-mini" color="color4">\n            Jumlah Total\n          </span><br>\n          <span ion-text text-wrap class="font-small">\n            <b>Rp. {{ jumlahTotal }}</b>\n          </span>\n        </div>\n        <div class="col">\n          <span ion-text text-wrap class="font-mini" color="color4">\n            Status\n          </span><br>\n          <span ion-text text-wrap class="font-small" color="primary">\n            {{ dataRestitusi[\'KETERANGAN\'] }}\n          </span>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <span ion-text text-wrap>\n          <img src="assets/imgs/menu-icon/Restitusi.png" class="icons">\n        </span>\n        <span ion-text text-wrap class="font-small">\n          <b>Detail Restitusi</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n      <br>\n\n      <table width="100%">\n        <tr *ngFor="let detail of dataRestitusi[\'DETAIL\'];let i = index">\n          <td valign="top" width="10%">{{ i+1 }}.</td>\n          <td valign="top" width="90%">\n            <table width="100%" >\n              <tr>\n                <td width="45%" >\n                  <span ion-text text-wrap class="font-small" color="danger">\n                    Tanggal Nota\n                  </span>\n                </td>\n                <td width="5%" >\n                  <span ion-text text-wrap class="font-small" color="danger">\n                     : \n                  </span>\n                </td>\n                <td width="50%" >\n                  <span ion-text text-wrap class="font-small" color="danger">\n                    {{ detail[\'TANGGAL_NOTA\'] }}\n                  </span>\n                </td>\n              </tr>\n\n              <tr>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                    Nama Pasien\n                  </span>\n                </td>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                    :\n                  </span>\n                </td>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                    {{ detail[\'NAMA_PASIEN\'] }}\n                  </span>\n                </td>\n              </tr>\n\n              <tr>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                    Status Keluarga\n                  </span> \n                </td>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                    :\n                  </span> \n                </td>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                   {{ detail[\'STATUS_KELUARGA\'] }}\n                  </span> \n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                    Rincian Biaya\n                  </span> \n                </td>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                    :\n                  </span> \n                </td>\n                <td>\n                  <span ion-text text-wrap class="font-small">\n                   \n                  </span> \n                </td>\n              </tr>\n            </table>                                          \n            \n            <div class="row">\n              <div class="col">\n                <span ion-text text-wrap class="font-mini" color="color4">\n                  Biaya Dokter\n                </span><br>\n                <span ion-text text-wrap class="font-small"\n                  *ngIf="detail[\'BIAYA_DOKTER\'] == null || detail[\'BIAYA_DOKTER\'] == \'\'">\n                  Rp. 0\n                </span>\n                <span ion-text text-wrap class="font-small">\n                  Rp. {{ detail[\'BIAYA_DOKTER\'] }}\n                </span>\n              </div>\n              <div class="col">\n                <span ion-text text-wrap class="font-mini" color="color4">\n                  Biaya Obat\n                </span><br>\n                <span ion-text text-wrap class="font-small"\n                  *ngIf="detail[\'BIAYA_OBAT\'] == null || detail[\'BIAYA_OBAT\'] == \'\'">\n                  Rp. 0\n                </span>\n                <span ion-text text-wrap class="font-small">\n                  Rp. {{ detail[\'BIAYA_OBAT\'] }}\n                </span>\n              </div>\n            </div>\n\n            <div class="row">\n              <div class="col">\n                <span ion-text text-wrap class="font-mini" color="color4">\n                  Biaya Tindakan\n                </span><br>\n                <span ion-text text-wrap class="font-small"\n                  *ngIf="detail[\'BIAYA_TINDAKAN\'] == null || detail[\'BIAYA_TINDAKAN\'] == \'\'">\n                  Rp. 0\n                </span>\n                <span ion-text text-wrap class="font-small">\n                  Rp. {{ detail[\'BIAYA_TINDAKAN\'] }}\n                </span>\n              </div>\n              <div class="col">\n                <span ion-text text-wrap class="font-mini" color="color4">\n                  Biaya Perawatan\n                </span><br>\n                <span ion-text text-wrap class="font-small"\n                  *ngIf="detail[\'BIAYA_PERAWATAN\'] == null || detail[\'BIAYA_PERAWATAN\'] == \'\'">\n                  Rp. 0\n                </span>\n                <span ion-text text-wrap class="font-small">\n                  Rp. {{ detail[\'BIAYA_PERAWATAN\'] }}\n                </span>\n              </div>\n            </div>\n\n            <div class="row">\n              <div class="col">\n                <span ion-text text-wrap class="font-mini" color="color4">\n                  Biaya Administrasi\n                </span><br>\n                <span ion-text text-wrap class="font-small"\n                  *ngIf="detail[\'BIAYA_ADMINISTRASI\'] == null || detail[\'BIAYA_ADMINISTRASI\'] == \'\'">\n                  Rp. 0\n                </span>\n                <span ion-text text-wrap class="font-small">\n                  Rp. {{ detail[\'BIAYA_ADMINISTRASI\'] }}\n                </span>\n              </div>\n              <div class="col">\n                <span ion-text text-wrap class="font-mini" color="color4">\n                  Biaya Lain-lain\n                </span><br>\n                <span ion-text text-wrap class="font-small"\n                  *ngIf="detail[\'BIAYA_LAIN_LAIN\'] == null || detail[\'BIAYA_LAIN_LAIN\'] == \'\'">\n                  Rp. 0\n                </span>\n                <span ion-text text-wrap class="font-small">\n                  Rp. {{ detail[\'BIAYA_LAIN_LAIN\'] }}\n                </span>\n              </div>\n            </div>\n            <br>\n          </td>\n        </tr>\n\n      </table>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/restitusi-detail/restitusi-detail.html"*/,
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