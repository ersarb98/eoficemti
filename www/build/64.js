webpackJsonp([64],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutiDetailPageModule", function() { return CutiDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuti_detail__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CutiDetailPageModule = /** @class */ (function () {
    function CutiDetailPageModule() {
    }
    CutiDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cuti_detail__["a" /* CutiDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cuti_detail__["a" /* CutiDetailPage */]),
            ],
        })
    ], CutiDetailPageModule);
    return CutiDetailPageModule;
}());

//# sourceMappingURL=cuti-detail.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CutiDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(207);
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
 * Generated class for the CutiDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CutiDetailPage = /** @class */ (function () {
    function CutiDetailPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.inAppBrowser = inAppBrowser;
        this.isLoading = true;
    }
    CutiDetailPage.prototype.ionViewWillLoad = function () {
        this.messageData = this.navParams.get('data');
        this.nipp = this.navParams.get('nipp');
        this.getDetail();
    };
    CutiDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CutiDetailPage');
    };
    CutiDetailPage.prototype.getDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_viewmail', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.nipp,
                linkSurat: this.messageData['Location'],
                from_modul: 'cuti'
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.messageDetail = responData['data'];
                _this.linkSurat = _this.messageDetail['Link Surat Asli'];
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            // loading.dismiss();
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            // loading.dismiss();
            _this.isLoading = false;
        });
    };
    CutiDetailPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    CutiDetailPage.prototype.goToLogSurat = function () {
        this.navCtrl.push('LogSuratPage', {
            idSurat: this.messageDetail['ID Surat']
        });
    };
    CutiDetailPage.prototype.downloadInbox = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mengunduh surat...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'find_file_cuti', {
            fStream: JSON.stringify({
                "usernameEDI": __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                "passwordEDI": __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                "fileName": data,
                "id_surat": this.messageDetail['ID Surat'],
                "jenis_surat": this.messageDetail['Kode Jenis Surat'],
                "no_surat": ''
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            loading.dismiss();
            var options = {
                zoom: 'no'
            };
            var browser = _this.inAppBrowser.create(responData['data']['LINK'], '_system', options);
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal download surat, silahkan coba lagi',
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    CutiDetailPage.prototype.replaceNomorSurat = function (noSurat) {
        var result = '';
        console.log(noSurat);
        //result = noSurat.replace(/[-.\/]/g, "_"); 
        // result = result.replace(/-/g, '_');    
        //return result + '.pdf';
        return '';
    };
    CutiDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cuti-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/cuti-detail/cuti-detail.html"*/'<!--\n  Generated template for the CutiDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light">Detail Cuti/Izin</span>\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="goToLogSurat()">\n          <!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n          <img src="assets/imgs/menu-icon/history.png" style="    max-height: 27px;\n          margin-right: 5px;">\n        </button>\n        <button ion-button (click)="downloadInbox(replaceNomorSurat(messageData[\'No_Surat\']))">\n          <ion-icon style="font-size:2.4rem;" name="md-download" color="light"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="isLoading == false && !isEmptyObject(messageDetail)">\n    <ion-card class="header-card">\n      <ion-card-content>\n        <span ion-text text-wrap class="font-header" >\n          <b>{{ messageDetail[\'Judul Surat\'] }}</b>\n        </span>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Tanggal Pengajuan\n        </span><br>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'Tanggal Pengajuan\'] }}\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Jenis Pengajuan\n        </span><br>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'Jenis Pengajuan\'] }}\n        </span>\n        <br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          tanggal Cuti/Izin\n        </span><br>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'Tanggal Mulai Cuti\'] }}\n        </span> <span ion-text text-wrap class="font-small" color="primary"> s/d </span>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'Tanggal Selesai Cuti\'] }}\n        </span>        \n        <br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Alamat Selama Cuti/Izin\n        </span><br>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'Alamat Cuti\'] }}\n        </span>\n        <br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Alasan\n        </span><br>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'Alasan\'] }}\n        </span>\n        <br>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class="my-card">\n      <ion-item>\n        <div class="header-text">\n          <span ion-text text-wrap>\n            <img src="assets/imgs/setting-icon/nipp.png" class="icons">\n          </span>\n          <span ion-text text-wrap class="font-small">\n            <b>Biodata Pemohon</b>\n          </span>\n        </div>\n        <div class="garis"></div>\n        <span ion-text text-wrap class="font-mini" color="color4">\n          NIPP\n        </span><br>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'NIPP Pemohon\'] }}\n        </span><br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Nama\n        </span><br>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'Nama Pemohon\'] }}\n        </span>\n        <br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Menyetujui\n        </span><br>\n        <span ion-text text-wrap class="font-small" color="primary">\n          <b>{{ messageDetail[\'NIPP Menyetujui\'] }}</b>\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n          {{ messageDetail[\'Nama Menyetujui\'] }} |\n          {{ messageDetail[\'Jabatan Menyetujui\'] }}\n        </span>\n        <br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Mengetahui\n        </span><br>\n        <span *ngIf="messageDetail[\'NIPP Mengetahui\'] == \'\' || messageDetail[\'NIPP Mengetahui\'] == null" ion-text\n          text-wrap class="font-small" color="primary">\n          -\n        </span>\n        <span *ngIf="messageDetail[\'NIPP Mengetahui\'] != \'\' || messageDetail[\'NIPP Mengetahui\'] != null" ion-text\n          text-wrap class="font-small" color="primary">\n          <b>{{ messageDetail[\'NIPP Mengetahui\'] }}</b>\n        </span> <br>\n        <span *ngIf="messageDetail[\'Nama Mengetahui\'] != \'\' || messageDetail[\'Nama Mengetahui\'] != null" ion-text\n          text-wrap class="font-small">\n          {{ messageDetail[\'Nama Mengetahui\'] }} |\n          {{ messageDetail[\'Jabatan Mengetahui\'] }}\n        </span>\n      </ion-item>\n    </ion-card>\n  </div>\n\n  <div *ngIf="isLoading == true && isEmptyObject(messageDetail)">\n    <ion-item no-lines>\n      <div class="animate-skeleton-background load-2"></div>\n      <div class="animate-skeleton-background load-3"></div>\n      <div class="garis"></div>\n      <div class="animate-skeleton-background load-1"> </div>\n      <div class="animate-skeleton-background load-3"></div>\n      <div class="animate-skeleton-background load-1"> </div>\n      <div class="animate-skeleton-background load-3"></div>\n    </ion-item>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/cuti-detail/cuti-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], CutiDetailPage);
    return CutiDetailPage;
}());

//# sourceMappingURL=cuti-detail.js.map

/***/ })

});
//# sourceMappingURL=64.js.map