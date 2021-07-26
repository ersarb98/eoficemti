webpackJsonp([40],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outbox__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InboxPageModule = /** @class */ (function () {
    function InboxPageModule() {
    }
    InboxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__outbox__["a" /* OutboxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__outbox__["a" /* OutboxPage */]),
            ],
        })
    ], InboxPageModule);
    return InboxPageModule;
}());

//# sourceMappingURL=outbox.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
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
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OutboxPage = /** @class */ (function () {
    function OutboxPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.messages = [];
        this.isLoading = true;
        this.halaman = 1;
        this.isSearch = false;
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.fakeUsers = new Array(5);
    }
    OutboxPage.prototype.ionViewWillEnter = function () {
        if (this.isSearch) {
            this.showSearch();
        }
    };
    OutboxPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getMessages(val, _this.halaman);
        });
    };
    OutboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InboxPage');
    };
    OutboxPage.prototype.getMessages = function (val, hal) {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_outbox', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                iduser: val.data.IDUSER,
                idjabatan: val.data.IDJABATAN,
                page: hal,
                jmlpage: "10",
                perihal: "",
                tanggalawal: "",
                tanggalakhir: ""
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['List Outbox'].length > 0) {
                    for (var i = 0; i < responData['data']['List Outbox'].length; i++) {
                        _this.messages.push(responData['data']['List Outbox'][i]);
                    }
                }
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan pesan',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan pesan',
                buttons: ['OK']
            });
            alert.present();
            _this.isLoading = false;
        });
    };
    OutboxPage.prototype.goToDetail = function (message) {
        this.navCtrl.push("OutboxDetailPage", {
            messageData: message,
            nipp: this.userdataTPK['data']['NIPP']
        });
    };
    OutboxPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.halaman++;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_outbox', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                iduser: this.userdataTPK.data.IDUSER,
                idjabatan: this.userdataTPK.data.IDJABATAN,
                page: this.halaman,
                jmlpage: "10",
                perihal: "",
                tanggalawal: "",
                tanggalakhir: "",
                sorting: "0"
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['List Outbox'].length > 0) {
                    for (var i = 0; i < responData['data']['List Outbox'].length; i++) {
                        _this.messages.push(responData['data']['List Outbox'][i]);
                    }
                }
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan pesan',
                    buttons: ['OK']
                });
                alert_2.present();
            }
            infiniteScroll.complete();
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan pesan',
                buttons: ['OK']
            });
            alert.present();
            infiniteScroll.complete();
        });
    };
    OutboxPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.halaman = 1;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_outbox', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                iduser: this.userdataTPK.data.IDUSER,
                idjabatan: this.userdataTPK.data.IDJABATAN,
                page: this.halaman,
                jmlpage: "10",
                perihal: "",
                tanggalawal: "",
                tanggalakhir: "",
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['List Outbox'].length > 0 && !_this.isEmptyObject(responData['data']['List Outbox'][0])) {
                    _this.messages = [];
                    for (var i = 0; i < responData['data']['List Outbox'].length; i++) {
                        _this.messages.push(responData['data']['List Outbox'][i]);
                    }
                }
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan pesan',
                    buttons: ['OK']
                });
                alert_3.present();
            }
            refresher.complete();
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan pesan',
                buttons: ['OK']
            });
            alert.present();
            refresher.complete();
        });
    };
    OutboxPage.prototype.showSearch = function () {
        this.isSearch = !this.isSearch;
    };
    OutboxPage.prototype.submitSearch = function () {
        this.navCtrl.push('InboxSearchPage', {
            inputSearch: this.inputSearch,
            userdataTPK: this.userdataTPK,
            type: 'outbox'
        });
    };
    OutboxPage.prototype.showModal = function (page) {
        var modal = this.modalCtrl.create(page, {}, {
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modal.present();
    };
    OutboxPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    OutboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-outbox',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/outbox/outbox.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>\n\n			<span ion-text color="light" class="fw500">Surat Keluar</span>\n\n		</ion-title>\n\n\n\n		<ion-buttons end>\n\n			<button ion-button (click)="showModal(\'SearchOutboxPage\')">\n\n				<ion-icon style="font-size:2.4rem;" name="md-search" color="light"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n\n\n		<form action="." (ngSubmit)="submitSearch()">\n\n			<ion-searchbar *ngIf="isSearch" style="font-size:2.4rem;" [(ngModel)]="inputSearch"\n\n				[ngModelOptions]="{standalone: true}" (ionCancel)="showSearch()">\n\n			</ion-searchbar>\n\n		</form>\n\n\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-grid *ngIf="isEmptyObject(messages[0]) && isLoading == false" fixed>\n\n		<ion-row>\n\n			<ion-col col-12>\n\n				<ion-card class="primary-bg">\n\n					<ion-card-content>\n\n						<span style="font-size:1.3rem">Tidak Ada Pesan.</span>\n\n					</ion-card-content>\n\n				</ion-card>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n\n\n	<ion-list *ngIf=\'!isEmptyObject(messages[0])\'>\n\n		<ion-card *ngFor=\'let message of messages\' (click)="goToDetail(message)" class="my-card">\n\n			<ion-item>\n\n				<span item-start>\n\n					<ion-icon name="mail" color="danger" class="msg-icon"></ion-icon>										\n\n				</span>\n\n				<!-- <span ion-text text-wrap class="font-header" color="danger" >\n\n					<b>{{message[\'Nomor Surat\']}}</b>\n\n				</span><br> -->\n\n				<span color="black" ion-text text-wrap class="font-mini">\n\n					{{message[\'Perihal\'].substring(0,80) }}\n\n					<span *ngIf="message[\'Perihal\'].length > 80"> ... </span>\n\n				</span><br>\n\n				<span ion-text text-wrap class="font-mini" color="primary" >\n\n					{{message[\'Tanggal Surat\']}}\n\n				</span><br>\n\n				<span>\n\n					<span color="primary" ion-text text-wrap class="font-mini">\n\n						<b>{{message[\'Status\'] }}</b>\n\n					</span>\n\n				</span>\n\n			</ion-item>\n\n		</ion-card>\n\n	</ion-list>\n\n\n\n	<ion-list *ngIf=\'isEmptyObject(messages[0]) && isLoading == true\'>\n\n		<ion-card *ngFor=\'let fake of fakeUsers\'>\n\n			<ion-item>\n\n				<div class="animate-skeleton-background load-2"></div>\n\n				<div class="animate-skeleton-background load-3"></div>\n\n				<div class="animate-skeleton-background load-1"> </div>\n\n			</ion-item>\n\n		</ion-card>\n\n	</ion-list>\n\n\n\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n	</ion-infinite-scroll>\n\n\n\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n\n		<ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n\n			refreshingText="Refreshing...">\n\n		</ion-refresher-content>\n\n	</ion-refresher>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/outbox/outbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], OutboxPage);
    return OutboxPage;
}());

//# sourceMappingURL=outbox.js.map

/***/ })

});
//# sourceMappingURL=40.js.map