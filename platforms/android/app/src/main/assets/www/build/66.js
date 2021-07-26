webpackJsonp([66],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CariPegawaiPageModule", function() { return CariPegawaiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cari_pegawai__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CariPegawaiPageModule = /** @class */ (function () {
    function CariPegawaiPageModule() {
    }
    CariPegawaiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cari_pegawai__["a" /* CariPegawaiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cari_pegawai__["a" /* CariPegawaiPage */]),
            ],
        })
    ], CariPegawaiPageModule);
    return CariPegawaiPageModule;
}());

//# sourceMappingURL=cari-pegawai.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CariPegawaiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(103);
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
 * Generated class for the CariPegawaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CariPegawaiPage = /** @class */ (function () {
    function CariPegawaiPage(navCtrl, navParams, _fb, soapService, loadingCtrl, alertCtrl, modalCtrl, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.isLoading = false;
        this.searchDataList = [];
        this.jumlahPegawai = 0;
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.pegawaiForm = this._fb.group({
            fcSearch: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    }
    CariPegawaiPage.prototype.ionViewDidEnter = function () {
        // this.getJumlahPegawai();
    };
    CariPegawaiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CariPegawaiPage');
    };
    // getJumlahPegawai() {
    //   let loading = this.loadingCtrl.create({
    //     spinner: 'dots',
    //     content: "Mohon Tunggu...",       
    //     cssClass: 'transparent',
    //     dismissOnPageChange:true
    //   });
    //   loading.present();
    //   this.isLoading = true;
    //   this.soapService
    //   //.post(api_base_url,'eoffice_data_direktorat_ipcc',{fStream:JSON.stringify(
    //   .post(api_base_url,'eoffice_bypass_wso',{fStream:JSON.stringify(
    //     {
    //       // usernameEDI : api_user, 
    //       // passwordEDI : api_pass
    //       sc_type: 'countpeg',
    //       sc_code: sc_code,        
    //       data : {}         
    //     }
    //   )}).then(result => {
    //     var responData = JSON.parse(String(result));
    //     console.log(responData);
    //     if (responData['rcmsg'] == "SUCCESS") {        
    //       this.jumlahPegawai = responData['data'][0]['JUMLAH'];
    //     } else {        
    //       let toast = this.toastCtrl.create({
    //         message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
    //         duration: 3000,
    //         position: 'bottom'
    //       });
    //       toast.present();  
    //     }  
    //     loading.dismiss();
    //     this.isLoading = false;    
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     let toast = this.toastCtrl.create({
    //       message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();          
    //     loading.dismiss();
    //     this.isLoading = false;       
    //   });
    // }
    CariPegawaiPage.prototype.doSearch = function () {
        this.batasAtas = 1;
        this.batasBawah = 20;
        this.searchDataList = [];
        this.getSearchList('first', '');
    };
    CariPegawaiPage.prototype.getSearchList = function (type, functionName) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
            dismissOnPageChange: true
        });
        if (type == 'first' && functionName == '') {
            loading.present();
        }
        var searchInput = this.pegawaiForm.controls.fcSearch.value;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_findemployee', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                search: searchInput.toUpperCase(),
                atas: this.batasAtas,
                bawah: this.batasBawah
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.searchDataList = [];
                }
                if (responData['data'].length > 0 && !_this.isEmptyObject(responData['data'][0])) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.searchDataList.push(responData['data'][i]);
                    }
                }
                // console.log(this.searchDataList);        
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
                loading.dismiss();
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            //this.isLoading = false;  
        })
            .catch(function (error) {
            // console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'first' && functionName == '') {
                loading.dismiss();
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
        });
    };
    CariPegawaiPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.searchDataList.length >= 20) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 20;
            this.getSearchList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    // goToDetailPegawai(data) {
    //   let modal = this.modalCtrl.create("CariPegawaiDetailPage",{ dataPegawai: data }, {
    //     enableBackdropDismiss: true,
    //     showBackdrop:true       
    //   });
    //   modal.present();
    // } 
    CariPegawaiPage.prototype.convertImage = function (data) {
        return btoa(data);
    };
    CariPegawaiPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    CariPegawaiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cari-pegawai',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/cari-pegawai/cari-pegawai.html"*/'<!--\n\n  Generated template for the CariPegawaiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span ion-text color="light" class="fw500">Cari Pegawai</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="my-padding">\n\n        <form [formGroup]="pegawaiForm" class="list-form">\n\n            <ion-item no-padding>\n\n                <span item-left>\n\n                    <img src="assets/imgs/menu-icon/contact-icon.png" class="icons">\n\n                </span>\n\n                <ion-label stacked>Cari (Nama/NIPP/Jabatan) </ion-label>\n\n                <ion-input type="text" formControlName="fcSearch" placeholder=""></ion-input>\n\n            </ion-item>\n\n            <button ion-button icon-start block class="button" margin-top (click)="doSearch()" [disabled]="!pegawaiForm.valid">\n\n                <ion-icon name="ios-search"></ion-icon>\n\n                Cari\n\n            </button>\n\n        </form>\n\n    </div>\n\n\n\n    <ion-list *ngIf="isLoading == false && !isEmptyObject(searchDataList[0])">\n\n        <div align="center" class="headers">\n\n            <br>\n\n            <span class="font3" ion-text text-center color="gray">{{ searchDataList.length }} Hasil\n\n                Pencarian</span>\n\n        </div>\n\n\n\n        <ion-card *ngFor="let searchData of searchDataList" class="my-card">\n\n            <ion-item>\n\n                <span item-start>\n\n                    <img *ngIf="searchData[\'FOTO\'] == \'\'" src="assets/imgs/logo/peserta_pekerja.png" class="icons2">\n\n                    <img *ngIf="searchData[\'FOTO\'] != \'\'" src="{{ searchData[\'FOTO\'] }}" class="icons2">\n\n                </span>\n\n                <span class="font2">{{ searchData[\'NIPP\'] }}</span><br>\n\n                <span ion-text text-wrap class="font1"><b>{{ searchData[\'NAMA\'] }}</b></span>            \n\n                <br />\n\n                <span ion-text text-wrap class="font2">{{ searchData[\'NAMA_CABANG\'] }}</span>\n\n                <br />\n\n                <span ion-text text-wrap class="font3" color="gray">{{ searchData[\'NAMA_JABATAN\'] }}</span>\n\n                <br />\n\n                <span ion-text text-wrap class="font3" color="danger">\n\n                    {{ searchData[\'EMAIL\'] }}\n\n                </span>\n\n            </ion-item>\n\n        </ion-card>\n\n    </ion-list>\n\n\n\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/cari-pegawai/cari-pegawai.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], CariPegawaiPage);
    return CariPegawaiPage;
}());

//# sourceMappingURL=cari-pegawai.js.map

/***/ })

});
//# sourceMappingURL=66.js.map