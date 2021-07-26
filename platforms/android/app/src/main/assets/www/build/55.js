webpackJsonp([55],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox__ = __webpack_require__(407);
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
                __WEBPACK_IMPORTED_MODULE_2__inbox__["a" /* InboxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inbox__["a" /* InboxPage */]),
            ],
        })
    ], InboxPageModule);
    return InboxPageModule;
}());

//# sourceMappingURL=inbox.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
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
var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, ngZone, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.messages = [];
        this.isLoading = true;
        this.halaman = 1;
        this.isSearch = false;
        this.fakeUsers = new Array(5);
        this.loadingFilter = true;
    }
    InboxPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            _this.halaman = 1;
            _this.userdataTPK = val;
            _this.getMessages('first', '');
        });
    };
    InboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InboxPage');
    };
    InboxPage.prototype.getMessages = function (type, functionName) {
        var _this = this;
        // if (type == 'first' && functionName == '') {
        this.isLoading = true;
        // }
        // console.log(JSON.stringify({
        //   usernameEDI: api_user,
        //   passwordEDI: api_pass,
        //   iduser: this.userdataTPK.data.IDUSER,
        //   idjabatan: this.userdataTPK.data.IDJABATAN,
        //   page: this.halaman,
        //   jmlpage: '20',
        //   perihal: "",
        //   tanggalawal: "",
        //   tanggalakhir: "",
        //   sorting: "3",  
        //   filter:"0"  
        // }));
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_inbox', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                iduser: this.userdataTPK.data.IDUSER,
                idjabatan: this.userdataTPK.data.IDJABATAN,
                page: this.halaman,
                jmlpage: '20',
                perihal: "",
                tanggalawal: "",
                tanggalakhir: "",
                sorting: "1",
                filter: "0"
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.messages = [];
                }
                else if (type == 'first' && functionName == '') {
                    _this.messages = [];
                }
                if (responData['data']['List_Inbox'].length > 0 && !_this.isEmptyObject(responData['data']['List_Inbox'][0])) {
                    for (var i = 0; i < responData['data']['List_Inbox'].length; i++) {
                        _this.messages.push(responData['data']['List_Inbox'][i]);
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
            if (type == 'first' && functionName == '') {
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
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
            if (type == 'first' && functionName == '') {
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
    InboxPage.prototype.goToDetail = function (message) {
        this.navCtrl.push("InboxDetailPage", {
            messageData: message,
            nipp: this.userdataTPK['data']['NIPP'],
            userdataTPK: this.userdataTPK
        });
    };
    InboxPage.prototype.doInfinite = function (infiniteScroll) {
        this.halaman++;
        this.getMessages('infinite', infiniteScroll);
    };
    InboxPage.prototype.doRefresh = function (refresher) {
        this.halaman = 1;
        this.getMessages('refresh', refresher);
    };
    InboxPage.prototype.submitSearch = function () {
        this.navCtrl.push('InboxSearchPage', {
            inputSearch: this.inputSearch,
            userdataTPK: this.userdataTPK,
            type: 'inbox'
        });
    };
    InboxPage.prototype.showModal = function (page) {
        var modal = this.modalCtrl.create(page, {
            openFrom: 'inboxPage'
        }, {
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modal.present();
    };
    InboxPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    InboxPage.prototype.doArsip = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mengarsip Surat...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_arsip_add', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_surat: data['id_surat'],
                keterangan: data['Status'],
                id_user: this.userdataTPK.data.IDUSER,
                id_jab: this.userdataTPK.data.IDJABATAN,
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            var toast = _this.toastCtrl.create({
                message: 'Surat Berhasil Diarsipkan.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.getMessages('first', '');
            loading.dismiss();
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
        });
    };
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inbox',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/inbox/inbox.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title *ngIf="!isSearch">\n\n			<span ion-text color="light" class="fw500">Surat Masuk</span>\n\n		</ion-title>\n\n\n\n		<!-- <ion-buttons end >\n\n            <button ion-button (click)="showSearch()">\n\n			  <ion-icon *ngIf="!isSearch"  style="font-size:2.4rem;" name="search" color="light"></ion-icon>\n\n			  <ion-icon *ngIf="isSearch"  style="font-size:2.4rem;" name="close" color="light"></ion-icon>\n\n			</button>  \n\n			    \n\n		</ion-buttons> -->\n\n\n\n		<ion-buttons end>\n\n			<button ion-button (click)="showModal(\'SearchInboxPage\')">\n\n				<ion-icon style="font-size:2.4rem;" name="md-search" color="light"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n\n\n		<!-- <form action="." (ngSubmit)="submitSearch()">\n\n			<ion-searchbar *ngIf="isSearch" style="font-size:2.4rem;"\n\n				[(ngModel)]="inputSearch"			\n\n				[ngModelOptions]="{standalone: true}"		\n\n				(ionCancel)="showSearch()">\n\n			</ion-searchbar>\n\n		</form>		 -->\n\n	</ion-navbar>\n\n\n\n	<!-- <ion-scroll scrollX="true" style="width:100vw; height:50px;">\n\n		<ion-row nowrap style="padding:10px 10px 0 10px !important;">\n\n			<div class="my-filter-danger" tapable >Semua</div>\n\n			<div class="my-filter-primary" tapable >5 Surat Belum Dibaca</div>\n\n			<div class="my-filter-primary" tapable >7 Surat Belum Didisposisi</div>\n\n		</ion-row>\n\n	</ion-scroll> -->\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-grid *ngIf="isEmptyObject(messages[0])  && isLoading == false" fixed>\n\n		<ion-row>\n\n			<ion-col col-12>\n\n				<ion-card class="primary-bg">\n\n					<ion-card-content>\n\n						<span style="font-size:1.3rem">Tidak Ada Pesan.</span>\n\n					</ion-card-content>\n\n				</ion-card>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n\n\n	<ion-list *ngIf=\'!isEmptyObject(messages[0])\'>\n\n		<ion-card *ngFor=\'let message of messages\' class="my-card">\n\n			<!-- <ion-item-sliding> -->\n\n				<ion-item (click)="goToDetail(message)" [ngClass]="{\'item-belum-baca\' : !message[\'IsBaca\']}">\n\n					<span [ngClass]="{\'fw700\': !message[\'IsBaca\']}" style="text-align: center;" item-start>\n\n						<ion-icon name="mail" color="danger" class="msg-icon" *ngIf="message[\'IsBaca\'] == \'0\'">\n\n						</ion-icon>\n\n						<ion-icon name="mail-open" class="msg-icon" color="danger" *ngIf="message[\'IsBaca\'] == \'1\'">\n\n						</ion-icon> <br>\n\n						<!-- <span ion-text text-wrap *ngIf="!message[\'Disposisi\']" color="color3" >D</span>\n\n						<span ion-text text-wrap *ngIf="message[\'Disposisi\']" color="ptpBlue" >D</span> -->\n\n					</span>				\n\n					<span ion-text text-wrap *ngIf="message.No_Surat != null" style="font-size:1.2rem; color:gray;"> \n\n						{{ message.No_Surat }}  \n\n					</span>\n\n					<span *ngIf="message.No_Surat == null"> - </span>				\n\n					<br>\n\n					<span ion-text text-wrap class="font-small">\n\n						<b>{{message.Dari}}</b>\n\n					</span><br>\n\n					<span color="black" ion-text text-wrap class="font-mini">\n\n						{{message[\'Perihal\'].substring(0,80) }}\n\n						<span *ngIf="message[\'Perihal\'].length > 80"> ... </span>\n\n					</span><br>\n\n					<span ion-text text-wrap class="font-mini" color="primary">\n\n						{{message.Tanggal_Surat}}\n\n					</span>				\n\n					<div item-end style="text-align: center;">\n\n						<span color="primary" ion-text text-wrap class="font-mini">\n\n							<b>{{message.Status}}</b>\n\n						</span><br>\n\n						<ion-icon name="md-checkbox" color="secondary" *ngIf="message.Disposisi" ></ion-icon>\n\n					</div>\n\n				</ion-item>\n\n				<!-- <ion-item-options side="end" (click)="doArsip(message)">\n\n					<button ion-button color="primary" style="text-transform: none !important;">\n\n						<ion-icon name="md-filing"></ion-icon>\n\n						Arsipkan\n\n					</button>\n\n				</ion-item-options> -->\n\n			<!-- </ion-item-sliding> -->\n\n		</ion-card>\n\n	</ion-list>\n\n\n\n	<ion-list *ngIf=\'isEmptyObject(messages[0]) && isLoading == true\'>\n\n		<ion-card *ngFor=\'let fake of fakeUsers\'>\n\n			<ion-item>\n\n				<div class="animate-skeleton-background load-2"></div>\n\n				<div class="animate-skeleton-background load-3"></div>\n\n				<div class="animate-skeleton-background load-1 "> </div>\n\n			</ion-item>\n\n		</ion-card>\n\n	</ion-list>\n\n\n\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n	</ion-infinite-scroll>\n\n\n\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n\n		<ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n\n			refreshingText="Refreshing...">\n\n		</ion-refresher-content>\n\n	</ion-refresher>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/inbox/inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], InboxPage);
    return InboxPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ })

});
//# sourceMappingURL=55.js.map