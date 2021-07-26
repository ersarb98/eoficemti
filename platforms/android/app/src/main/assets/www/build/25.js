webpackJsonp([25],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCutiPageModule", function() { return SearchCutiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_cuti__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchCutiPageModule = /** @class */ (function () {
    function SearchCutiPageModule() {
    }
    SearchCutiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_cuti__["a" /* SearchCutiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_cuti__["a" /* SearchCutiPage */]),
            ],
        })
    ], SearchCutiPageModule);
    return SearchCutiPageModule;
}());

//# sourceMappingURL=search-cuti.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCutiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(103);
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







/**
 * Generated class for the SearchCutiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more in fo on
 * Ionic pages and navigation.
 */
var SearchCutiPage = /** @class */ (function () {
    function SearchCutiPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, soapService, datePicker, alertCtrl, datePipe, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.toastCtrl = toastCtrl;
        this.cutiType = "";
        this.approvalStatus = "";
        this.startDate = "";
        this.endDate = "";
        this.cutiList = [];
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.isLoading = false;
        this.fakeUsers = new Array(5);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    SearchCutiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchCutiPage');
    };
    SearchCutiPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchCutiPage.prototype.showDatePicker = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
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
    SearchCutiPage.prototype.getCutiList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_cuti_list', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                id_user: this.userdataTPK['data']['IDUSER'],
                search_jenis: this.cutiType,
                search_tgl_pengajuan: "",
                search_tgl_mulai: this.startDate,
                search_tgl_selesai: this.endDate,
                search_alasan: "",
                search_status: this.approvalStatus,
                atas: this.batasAtas,
                bawah: this.batasBawah
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.cutiList = [];
                }
                if (responData['data']['Cuti Personal'].length > 0) {
                    for (var i = 0; i < responData['data']['Cuti Personal'].length; i++) {
                        _this.cutiList.push(responData['data']['Cuti Personal'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data cuti, silahkan coba kembali.',
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
                message: 'Gagal mendapatkan data cuti, periksa koneksi internet anda.',
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
    SearchCutiPage.prototype.doSearch = function () {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.cutiList = [];
        this.getCutiList('first', '');
    };
    SearchCutiPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.cutiList.length >= 20) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 20;
            this.getCutiList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    SearchCutiPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    SearchCutiPage.prototype.clearField = function () {
        this.approvalStatus = "";
        this.cutiType = "";
        this.startDate = "";
        this.endDate = "";
    };
    SearchCutiPage.prototype.checkFocus = function (data) {
        this.showDatePicker(data);
    };
    SearchCutiPage.prototype.goToDetail = function (data) {
        this.navCtrl.push("CutiDetailPage", {
            "data": data,
            "nipp": this.userdataTPK['data']['NIPP'],
            "userdataTPK": this.userdataTPK
        });
    };
    SearchCutiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-cuti',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-cuti/search-cuti.html"*/'<!--\n\n  Generated template for the SearchCutiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title><span style="color:#FFF">Search Cuti</span></ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()">\n\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/jenis_cuti.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Jenis Cuti</ion-label>\n\n        <ion-select [(ngModel)]="cutiType" placeholder="">\n\n            <ion-option value="Izin">Izin</ion-option>\n\n            <ion-option value="Izin Dispensasi">Izin Dispensasi</ion-option>\n\n            <ion-option value="Izin Perjam">Izin Perjam</ion-option>\n\n            <ion-option value="Cuti Bersalin">Cuti Bersalin/Gugur Kandungan</ion-option>\n\n            <ion-option value="Cuti Tahunan">Cuti Tahunan</ion-option>\n\n            <ion-option value="Cuti Besar">Cuti Besar</ion-option>\n\n            <ion-option value="Cuti Penting">Cuti Karena Alasan Penting</ion-option>\n\n            <ion-option value="Cuti Diluar">Cuti Diluar Tanggungan Perusahaan</ion-option>\n\n            <ion-option value="Cuti Sakit">Cuti Sakit</ion-option>\n\n            <ion-option value="Izin Haid">Masa Haid</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/alasan.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Approval Status</ion-label>\n\n        <ion-select [(ngModel)]="approvalStatus" placeholder="">\n\n            <ion-option value="KIRIM">Kirim</ion-option>\n\n            <ion-option value="PERIKSA">Periksa</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/start_date.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Start Date</ion-label>\n\n        <ion-input type="text" [readonly]="true" [(ngModel)]="startDate" (ionFocus)="checkFocus(1)"\n\n            (click)="showDatePicker(1)" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/end_date.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>End Date</ion-label>\n\n        <ion-input type="text" [readonly]="true" [(ngModel)]="endDate" (ionFocus)="checkFocus(2)"\n\n            (click)="showDatePicker(2)" placeholder=""></ion-input>\n\n    </ion-item>\n\n\n\n    <div class="row">\n\n        <div class="col">\n\n            <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="clearField()"\n\n                margin-top>\n\n                <ion-icon name="md-close"></ion-icon>\n\n                clear\n\n            </button>\n\n        </div>\n\n        <div class="col">\n\n            <button ion-button icon-start full color="primary" style="border-radius: 5px;" margin-top\n\n                (click)="doSearch()"\n\n                [disabled]="cutiType == \'\' && approvalStatus == \'\' && startDate == \'\' && endDate == \'\' ? true : false">\n\n                <ion-icon name="md-checkmark"></ion-icon>\n\n                Cari\n\n            </button>\n\n        </div>\n\n    </div>\n\n\n\n    <ion-list class="dining_List" *ngIf="cutiList.length == 0  && isLoading == false">\n\n        <ion-card class="primary-bg">\n\n            <ion-card-content>\n\n                <span style="font-size:1.3rem">Tidak ada data izin/cuti.</span>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>     \n\n\n\n    <ion-list class="dining_List" *ngIf="cutiList.length != 0 && isLoading == false">\n\n        <ion-card *ngFor="let cuti of cutiList" class="my-card" (click)="goToDetail(cuti)">\n\n            <ion-item>\n\n              <span item-start>\n\n                <img src="assets/imgs/menu-icon/cuti.png" class="icons">\n\n              </span>\n\n              <span ion-text text-wrap class="font3" color="danger"><b>{{ cuti[\'Jumlah\'] }} hari</b></span><br />\n\n              <span ion-text text-wrap class="font2"><b>{{ cuti[\'Jenis\'] }}</b></span><br>\n\n              <span ion-text text-wrap class="font">\n\n                {{ cuti[\'Tanggal Mulai\'] }} <span ion-text text-wrap color="primary"><b>s/d</b></span> {{ cuti[\'Tanggal Selesai\'] }}\n\n              </span>\n\n              <span ion-text text-wrap style="font-size: 1.2rem;" color="primary"  item-end><b>{{ cuti[\'Status\'] }}</b></span>\n\n            </ion-item>\n\n          </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf=\'cutiList.length == 0 && isLoading == true\'>\n\n        <ion-card *ngFor=\'let fake of fakeUsers\'>\n\n            <ion-item>\n\n              <div class="animate-skeleton-background load-2"></div>\n\n              <div class="animate-skeleton-background load-3"></div>\n\n              <div class="animate-skeleton-background load-1"> </div>\n\n            </ion-item>\n\n          </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content>\n\n\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/search-cuti/search-cuti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SearchCutiPage);
    return SearchCutiPage;
}());

//# sourceMappingURL=search-cuti.js.map

/***/ })

});
//# sourceMappingURL=25.js.map