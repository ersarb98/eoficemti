webpackJsonp([41],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboxDetailPageModule", function() { return OutboxDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outbox_detail__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OutboxDetailPageModule = /** @class */ (function () {
    function OutboxDetailPageModule() {
    }
    OutboxDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__outbox_detail__["a" /* OutboxDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__outbox_detail__["a" /* OutboxDetailPage */]),
            ],
        })
    ], OutboxDetailPageModule);
    return OutboxDetailPageModule;
}());

//# sourceMappingURL=outbox-detail.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxDetailPage; });
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
 * Generated class for the OutboxDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OutboxDetailPage = /** @class */ (function () {
    function OutboxDetailPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, inAppBrowser, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.inAppBrowser = inAppBrowser;
        this.toastCtrl = toastCtrl;
        this.isLoading = true;
        this.showAllPenerima = false;
        this.penerima = [];
        this.attachmentList = [];
        this.showDetailPesan = false;
        this.showAllPenerimaJabatan = false;
        this.showAllTembusanJabatan = false;
        this.showAllPenerimaPekerja = false;
        this.showAllTembusanPekerja = false;
        this.showAllPenerimaNonPekerja = false;
        this.showAllTembusanNonPekerja = false;
    }
    OutboxDetailPage.prototype.show = function () {
        this.showDetailPesan = !this.showDetailPesan;
    };
    OutboxDetailPage.prototype.ionViewWillLoad = function () {
        this.messageData = this.navParams.get('messageData');
        this.nipp = this.navParams.get('nipp');
        this.getDetail();
    };
    OutboxDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OutboxDetailPage');
    };
    OutboxDetailPage.prototype.getDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_viewmail', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.nipp,
                linkSurat: this.messageData['Location'],
                from_modul: 'outbox'
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.messageDetail = responData['data'];
                if (_this.messageDetail['Jenis Surat'] == 'Surat Perintah') {
                    _this.dasarSuratPerintah = _this.messageDetail['Isi Surat'].split('xxdasaxx_').pop().split('_xxperintxx_')[0] + '<br>';
                    _this.dasarSuratPerintah = _this.dasarSuratPerintah.replace(/_/gi, "<br><br>");
                    _this.isiPerintah = _this.messageDetail['Isi Surat'].split('_xxperintxx_')[1];
                    _this.isiPerintah = _this.isiPerintah.replace(/_/gi, "<br><br>");
                }
                _this.attachmentList = _this.messageDetail['Attachment'];
                _this.getPenerima();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
        });
    };
    // showMore() {
    //   this.showAllPenerima = !this.showAllPenerima;
    // }
    OutboxDetailPage.prototype.showMore = function (type) {
        //this.showAllPenerima = !this.showAllPenerima;
        if (type == 1) {
            this.showAllPenerimaJabatan = !this.showAllPenerimaJabatan;
        }
        else if (type == 2) {
            this.showAllTembusanJabatan = !this.showAllTembusanJabatan;
        }
        else if (type == 3) {
            this.showAllPenerimaPekerja = !this.showAllPenerimaPekerja;
        }
        else if (type == 4) {
            this.showAllTembusanPekerja = !this.showAllTembusanPekerja;
        }
        else if (type == 5) {
            this.showAllPenerimaNonPekerja = !this.showAllPenerimaNonPekerja;
        }
        else if (type == 6) {
            this.showAllTembusanNonPekerja = !this.showAllTembusanNonPekerja;
        }
        else {
        }
    };
    OutboxDetailPage.prototype.getPenerima = function () {
        if (this.messageDetail['Penerima Pekerja'] != null) {
            for (var i = 0; i < this.messageDetail['Penerima Pekerja'].length; i++) {
                this.penerima.push(this.messageDetail['Penerima Pekerja'][i]);
            }
        }
        if (this.messageDetail['Penerima Jabatan'] != null) {
            for (var i = 0; i < this.messageDetail['Penerima Jabatan'].length; i++) {
                this.penerima.push(this.messageDetail['Penerima Jabatan'][i]);
            }
        }
        if (this.messageDetail['Penerima Non Pekerja'] != null) {
            for (var i = 0; i < this.messageDetail['Penerima Non Pekerja'].length; i++) {
                this.penerima.push(this.messageDetail['Penerima Non Pekerja'][i]);
            }
        }
        if (this.messageDetail['Tembusan Pekerja'] != null) {
            for (var i = 0; i < this.messageDetail['Tembusan Pekerja'].length; i++) {
                this.penerima.push(this.messageDetail['Tembusan Pekerja'][i]);
            }
        }
        if (this.messageDetail['Tembusan Jabatan'] != null) {
            for (var i = 0; i < this.messageDetail['Penerima Jabatan'].length; i++) {
                this.penerima.push(this.messageDetail['Penerima Jabatan'][i]);
            }
        }
        if (this.messageDetail['Tembusan Non Pekerja'] != null) {
            for (var i = 0; i < this.messageDetail['Tembusan Non Pekerja'].length; i++) {
                this.penerima.push(this.messageDetail['Tembusan Non Pekerja'][i]);
            }
        }
    };
    OutboxDetailPage.prototype.subStrAttachment = function (data) {
        var str = data;
        var n = str.lastIndexOf('/');
        return str.substring(n + 1);
    };
    OutboxDetailPage.prototype.goToLogSurat = function () {
        this.navCtrl.push('LogSuratPage', {
            idSurat: this.messageDetail['ID Surat']
        });
    };
    OutboxDetailPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    OutboxDetailPage.prototype.downloadInbox = function (data) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "mohon tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'find_file', {
            fStream: JSON.stringify(
            // {
            //   usernameEDI: api_user,
            //   passwordEDI: api_pass,
            //   fileName: data
            // }
            {
                "usernameEDI": __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                "passwordEDI": __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                "fileName": data,
                "id_surat": this.messageDetail['ID Surat'],
                "jenis_surat": this.messageDetail['Kode Jenis Surat'],
                "no_surat": this.messageData['No_Surat']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            _this.loading.dismiss();
            var options = {
                zoom: 'no'
            };
            var browser = _this.inAppBrowser.create(responData['data']['LINK'], '_system', options);
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.loading.dismiss();
        });
    };
    OutboxDetailPage.prototype.downloadAttach = function (data) {
        var options = {
            zoom: 'no'
        };
        var browser = this.inAppBrowser.create(data, '_system', options);
    };
    OutboxDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-outbox-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/outbox-detail/outbox-detail.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title></ion-title>\n		<ion-buttons end>\n			<button ion-button (click)="goToLogSurat()">\n				<!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n				<img src="assets/imgs/logo/history.png" style="    max-height: 27px;\n				margin-right: 5px;">\n			</button>\n			<button ion-button (click)="downloadInbox(messageData[\'DOWNLOAD_SURAT\'])">\n				<ion-icon style="font-size:2.4rem;" name="md-download" color="light"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div *ngIf="isLoading == true && isEmptyObject(messageDetail)">\n		<ion-item no-lines>\n			<div class="animate-skeleton-background load-2"></div>\n			<div class="animate-skeleton-background load-3"></div>\n			<div class="garis"></div>\n			<div class="animate-skeleton-background load-1"> </div>\n			<div class="animate-skeleton-background load-3"></div>\n			<div class="animate-skeleton-background load-1"> </div>\n			<div class="animate-skeleton-background load-3"></div>\n		</ion-item>\n	</div>\n	<div *ngIf="isLoading == false && !isEmptyObject(messageDetail)">\n			<ion-card class="header-menu">\n					<ion-item no-padding margin-left>\n						<span ion-text text-wrap style="font-size:1.5rem;">\n							<b>{{ messageDetail[\'Perihal\'] }}</b>\n						</span> <br>\n						<span ion-text text-wrap style="font-size:1.2rem; color:gray;">\n							{{ messageDetail[\'No Surat\'] }}\n						</span>\n						<span item-end (click)="show()">\n							<button ion-button icon-only clear >\n								<ion-icon name="ios-arrow-down-outline" *ngIf="!showDetailPesan"></ion-icon>\n								<ion-icon name="ios-arrow-up-outline" *ngIf="showDetailPesan"></ion-icon>\n							</button>\n						</span>\n					</ion-item>\n				</ion-card>\n		\n				<ion-card class="my-card" style="margin-top:10px !important;" *ngIf="showDetailPesan">\n					<ion-item>\n						<span ion-text text-wrap class="font" color="color4">Tanggal :\n						</span><br />\n						<span ion-text text-wrap color=\'dark\' class="font2">\n							{{ messageDetail[\'Tanggal Surat\'] }}\n						</span> <br>\n		\n						<span ion-text text-wrap class="font" color="color4">Pengirim :\n						</span><br />\n						<span ion-text text-wrap color=\'dark\' class="font2">\n							{{ messageDetail[\'Pengirim\'][\'Nama Jabatan\'] }}\n						</span> <br>\n\n						<div *ngIf="messageDetail[\'Kode Jenis Surat\'] == \'surat_perintah\' || messageDetail[\'Kode Jenis Surat\'] == \'undangan\' || messageDetail[\'Kode Jenis Surat\'] == \'surat_dinas\' || messageDetail[\'Kode Jenis Surat\'] == \'nd_undangan\' || messageDetail[\'Kode Jenis Surat\'] == \'nd_sppd\'" >\n							<span ion-text text-wrap class="font" color="color4">Tanggal Mulai :\n							</span><br />\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								{{ messageDetail[\'Agenda\'][\'Tanggal Mulai\'] }}\n							</span> \n							<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Tanggal Mulai\'] == null"  color=\'dark\' class="font2">\n								-\n							</span>\n							<br>\n	\n							<span ion-text text-wrap class="font" color="color4">Tanggal Akhir :\n							</span><br />\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								{{ messageDetail[\'Agenda\'][\'Tanggal Akhir\'] }}\n							</span> \n							<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Tanggal Akhir\'] == null"  color=\'dark\' class="font2">\n								-\n							</span>\n							<br>\n	\n							<span ion-text text-wrap class="font" color="color4">Lokasi :\n							</span><br />\n							<span ion-text text-wrap color=\'dark\' class="font2">\n								{{ messageDetail[\'Agenda\'][\'Lokasi\'] }}\n							</span> \n							<span ion-text text-wrap *ngIf="messageDetail[\'Agenda\'][\'Lokasi\'] == null"  color=\'dark\' class="font2">\n								-\n							</span>\n							<br>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Penerima Jabatan\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Penerima Jabatan :\n							</span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Penerima Jabatan\'].length > 1" (click)="showMore(1)" style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllPenerimaJabatan">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Penerima Jabatan\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllPenerimaJabatan">\n								<span *ngFor="let p of messageDetail[\'Penerima Jabatan\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n						<div *ngIf="messageDetail[\'Tembusan Jabatan\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Tembusan Jabatan :\n							</span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Tembusan Jabatan\'].length > 1" (click)="showMore(2)" style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllTembusanJabatan">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Tembusan Jabatan\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllTembusanJabatan">\n								<span *ngFor="let p of messageDetail[\'Tembusan Jabatan\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Penerima Pekerja\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Penerima Pekerja :\n							</span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Penerima Pekerja\'].length > 1" (click)="showMore(3)" style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllPenerimaPekerja">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Penerima Pekerja\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllPenerimaPekerja">\n								<span *ngFor="let p of messageDetail[\'Penerima Pekerja\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Tembusan Pekerja\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Tembusan Pekerja :\n							</span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Tembusan Pekerja\'].length > 1" (click)="showMore(4)" style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllTembusanPekerja">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Tembusan Pekerja\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllTembusanPekerja">\n								<span *ngFor="let p of messageDetail[\'Tembusan Pekerja\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Penerima Non Pekerja\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Penerima Non Pekerja\n								: </span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Penerima Non Pekerja\'].length > 1" (click)="showMore(5)"\n								style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllPenerimaNonPekerja">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Penerima Non Pekerja\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllPenerimaNonPekerja">\n								<span *ngFor="let p of messageDetail[\'Penerima Non Pekerja\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<div *ngIf="messageDetail[\'Tembusan Non Pekerja\'].length > 0">\n							<span ion-text text-wrap class="font" color="color4">Tembusan Non Pekerja\n								: </span>\n							<span ion-text text-wrap class="font" color="primary"\n								*ngIf="messageDetail[\'Tembusan Non Pekerja\'].length > 1" (click)="showMore(6)"\n								style="float:right;">\n								View more\n							</span> <br>\n							<div *ngIf="!showAllTembusanNonPekerja">\n								<span ion-text text-wrap color=\'dark\' class="font2">\n									1. {{ messageDetail[\'Tembusan Non Pekerja\'][0] }}\n								</span>\n							</div>\n							<div *ngIf="showAllTembusanNonPekerja">\n								<span *ngFor="let p of messageDetail[\'Tembusan Non Pekerja\']; let i = index" ion-text text-wrap\n									color=\'dark\' class="font2">\n									{{ i + 1 }}. {{ p }} <br />\n								</span>\n							</div>\n						</div>\n		\n						<span ion-text text-wrap class="font" style="color:#959595">Attachment :\n						</span><br />\n						<div *ngIf="attachmentList.length > 0">\n							<span ion-text text-wrap color=\'dark\' *ngFor="let attachment of attachmentList"\n								(click)="downloadAttach(attachment)" class="font2" color="primary">\n								{{ subStrAttachment(attachment) }}\n								<br>\n							</span>\n						</div>\n						<div *ngIf="attachmentList.length == 0">\n							<span ion-text text-wrap color=\'dark\' class="font2" color="primary">\n								-\n							</span>\n						</div>\n					</ion-item>\n		\n				</ion-card>\n		\n				<br>\n\n		<ion-grid no-padding fixed>		\n\n			<ion-row>\n				<ion-col col-12>\n					<ion-list>\n						<ion-item no-lines *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left padding-right\n							text-wrap>\n							<span ion-text text-wrap class="font2" style="color:black;"><b>Dasar</b></span>\n						</ion-item>\n\n						<ion-item *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left padding-right\n							text-wrap >\n							<div [innerHtml]="dasarSuratPerintah"></div>\n						</ion-item>\n\n						<ion-item no-lines *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left padding-right\n							text-wrap>\n							<span ion-text text-wrap class="font2" style="color:black;"><b>Perintah</b></span>\n						</ion-item>\n\n						<ion-item *ngIf="messageDetail[\'Jenis Surat\'] == \'Surat Perintah\'" padding-left padding-right\n							text-wrap >\n							<div [innerHtml]="isiPerintah"></div>\n						</ion-item>\n\n						<ion-item *ngIf="messageDetail[\'Jenis Surat\'] != \'Surat Perintah\'" padding-left padding-right\n							margin-bottom text-wrap>\n							<div [innerHtml]="messageDetail[\'Isi Surat\']"></div>\n						</ion-item>\n					</ion-list>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/outbox-detail/outbox-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], OutboxDetailPage);
    return OutboxDetailPage;
}());

//# sourceMappingURL=outbox-detail.js.map

/***/ })

});
//# sourceMappingURL=41.js.map