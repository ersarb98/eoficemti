webpackJsonp([21],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOutboxPageModule", function() { return SearchOutboxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_outbox__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchOutboxPageModule = /** @class */ (function () {
    function SearchOutboxPageModule() {
    }
    SearchOutboxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_outbox__["a" /* SearchOutboxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_outbox__["a" /* SearchOutboxPage */]),
            ],
        })
    ], SearchOutboxPageModule);
    return SearchOutboxPageModule;
}());

//# sourceMappingURL=search-outbox.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOutboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
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








/**
 * Generated class for the SearchOutboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchOutboxPage = /** @class */ (function () {
    function SearchOutboxPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, soapService, alertCtrl, datePipe, datePicker, platform, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.datePicker = datePicker;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.perihal = "";
        this.jenisSurat = "";
        this.noSurat = "";
        this.statusSurat = "";
        this.startDate = "";
        this.endDate = "";
        this.messages = [];
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.isLoading = false;
        this.fakeUsers = new Array(5);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    SearchOutboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchOutboxPage');
    };
    SearchOutboxPage.prototype.showDatePicker = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            maxDate: new Date().valueOf(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (type == 1) {
                _this.startDate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else if (type == 2) {
                _this.endDate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    SearchOutboxPage.prototype.doSearch = function () {
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.messages = [];
        if (this.startDate == '' && this.endDate != '') {
            this.startDate = this.endDate;
        }
        else if (this.endDate == '' && this.startDate != '') {
            this.endDate = this.startDate;
        }
        this.getmessages('first', '');
    };
    SearchOutboxPage.prototype.getmessages = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* api_base_url */], 'eoffice_outbox', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_6__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_6__config__["c" /* api_pass */],
                iduser: this.userdataTPK['data']['IDUSER'],
                idjabatan: this.userdataTPK['data']['IDJABATAN'],
                jn_surat: this.jenisSurat,
                no_surat: this.noSurat,
                status_surat: this.statusSurat,
                page: this.batasAtas,
                jmlpage: this.batasBawah,
                perihal: this.perihal,
                tanggalawal: this.startDate,
                tanggalakhir: this.endDate
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
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan pesan',
                    buttons: ['OK']
                });
                alert_1.present();
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
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan pesan',
                buttons: ['OK']
            });
            alert.present();
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
    SearchOutboxPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchOutboxPage.prototype.goToDetail = function (message) {
        this.navCtrl.push("OutboxDetailPage", {
            messageData: message,
            nipp: this.userdataTPK['data']['NIPP']
        });
    };
    SearchOutboxPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.messages.length >= 10) {
            this.batasAtas++;
            this.getmessages('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    SearchOutboxPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    SearchOutboxPage.prototype.clearField = function () {
        this.perihal = "";
        this.jenisSurat = "";
        this.noSurat = "";
        this.statusSurat = "";
        this.startDate = "";
        this.endDate = "";
    };
    SearchOutboxPage.prototype.checkFocus = function (data) {
        this.showDatePicker(data);
    };
    SearchOutboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-outbox',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-outbox/search-outbox.html"*/'<!--\n  Generated template for the SearchOutboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title><span style="color:#FFF">Search Surat Keluar</span></ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="my-padding">\n        <ion-item no-padding>\n            <span item-left>\n                <img src="assets/imgs/search-outbox/outbox.png" class="icons">\n            </span>\n            <ion-label stacked>Jenis Surat</ion-label>\n            <ion-select [(ngModel)]="jenisSurat" placeholder="">\n                <ion-option value="nota_dinas">Nota Dinas</ion-option>\n                <ion-option value="memo">Memo</ion-option>\n                <ion-option value="surat_dinas">Surat Dinas</ion-option>\n                <ion-option value="nd_undangan">Pengajuan Undangan</ion-option>\n                <ion-option value="surat_perintah">Surat Perintah</ion-option>\n                <ion-option value="pengumuman">Pengumuman</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item no-padding>\n            <span item-left>\n                <img src="assets/imgs/search-outbox/no_surat.png" class="icons">\n            </span>\n            <ion-label stacked>No. Surat</ion-label>\n            <ion-input type="text" [(ngModel)]="noSurat" placeholder=""></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <span item-left>\n                <img src="assets/imgs/search-outbox/perihal.png" class="icons">\n            </span>\n            <ion-label stacked>Perihal</ion-label>\n            <ion-input type="text" [(ngModel)]="perihal" placeholder=""></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <span item-left>\n                <img src="assets/imgs/search-outbox/status_baca.png" class="icons">\n            </span>\n            <ion-label stacked>Status Surat</ion-label>\n            <ion-select [(ngModel)]="statusSurat" placeholder="">\n                <ion-option value="KIRIM">Kirim</ion-option>\n                <ion-option value="PERIKSA">Periksa</ion-option>\n                <ion-option value="APPROVE">Approve</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item no-padding>\n            <span item-left>\n                <img src="assets/imgs/search-outbox/start_date.png" class="icons">\n            </span>\n            <ion-label stacked>Start Date</ion-label>\n            <ion-input type="text" [readonly]="true" [(ngModel)]="startDate" (ionFocus)="checkFocus(1)"\n                (click)="showDatePicker(1)" placeholder=""></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <span item-left>\n                <img src="assets/imgs/search-outbox/end_date.png" class="icons">\n            </span>\n            <ion-label stacked>End Date</ion-label>\n            <ion-input type="text" [readonly]="true" [(ngModel)]="endDate" (ionFocus)="checkFocus(2)"\n                (click)="showDatePicker(2)" placeholder=""></ion-input>\n        </ion-item>\n\n        <div class="row">\n            <div class="col">\n                <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="clearField()"\n                    margin-top>\n                    <ion-icon name="md-close"></ion-icon>\n                    Clear\n                </button>\n            </div>\n            <div class="col">\n                <button ion-button icon-start full color="primary" style="border-radius: 5px;" (click)="doSearch()"\n                    margin-top\n                    [disabled]="jenisSurat == \'\' && noSurat == \'\' && perihal == \'\'  && statusSurat == \'\' && startDate == \'\' && endDate == \'\' ? true : false">\n                    <ion-icon name="ios-search"></ion-icon>\n                    Cari\n                </button>\n            </div>\n        </div>\n    </div>\n\n\n    <ion-grid *ngIf="isEmptyObject(messages[0]) && isLoading == false" fixed>\n        <ion-row>\n            <ion-col col-12>\n                <ion-card class="primary-bg">\n                    <ion-card-content>\n                        <span style="font-size:1.3rem">Tidak Ada Pesan.</span>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-list *ngIf=\'!isEmptyObject(messages[0]) && isLoading == false\'>\n        <ion-card *ngFor=\'let message of messages\' (click)="goToDetail(message)" class="my-card">\n			<ion-item>\n				<span item-start>\n					<ion-icon name="mail" color="danger" class="msg-icon"></ion-icon>										\n				</span>\n				<!-- <span ion-text text-wrap class="font-header" color="danger" >\n					<b>{{message[\'Nomor Surat\']}}</b>\n				</span><br> -->\n				<span color="black" ion-text text-wrap class="font-mini">\n					{{message[\'Perihal\'].substring(0,80) }}\n					<span *ngIf="message[\'Perihal\'].length > 80"> ... </span>\n				</span><br>\n				<span ion-text text-wrap class="font-mini" color="primary" >\n					{{message[\'Tanggal Surat\']}}\n				</span><br>\n				<span>\n					<span color="primary" ion-text text-wrap class="font-mini">\n						<b>{{message[\'Status\'] }}</b>\n					</span>\n				</span>\n			</ion-item>\n		</ion-card>\n    </ion-list>\n\n    <ion-list *ngIf=\'isEmptyObject(messages[0]) && isLoading == true\'>\n        <ion-card *ngFor=\'let fake of fakeUsers\'>\n            <ion-item>\n                <h2 class="animate-skeleton-background"></h2>\n                <h3 class="animate-skeleton-background"></h3>\n                <p class="animate-skeleton-background"> </p>\n            </ion-item>\n        </ion-card>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-outbox/search-outbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SearchOutboxPage);
    return SearchOutboxPage;
}());

//# sourceMappingURL=search-outbox.js.map

/***/ })

});
//# sourceMappingURL=21.js.map