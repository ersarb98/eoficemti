webpackJsonp([82],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenBawahanPageModule", function() { return AbsenBawahanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__absen_bawahan__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbsenBawahanPageModule = /** @class */ (function () {
    function AbsenBawahanPageModule() {
    }
    AbsenBawahanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__absen_bawahan__["a" /* AbsenBawahanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__absen_bawahan__["a" /* AbsenBawahanPage */]),
            ],
        })
    ], AbsenBawahanPageModule);
    return AbsenBawahanPageModule;
}());

//# sourceMappingURL=absen-bawahan.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenBawahanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
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
 * Generated class for the AbsenBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbsenBawahanPage = /** @class */ (function () {
    function AbsenBawahanPage(navCtrl, navParams, loadingCtrl, alertCtrl, soapService, storage, datepipe, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.datepipe = datepipe;
        this.toastCtrl = toastCtrl;
        this.bulanList = [];
        this.bawahanList = [];
        this.tahunList = [];
        this.isLoading = false;
        this.fakeUsers = new Array(5);
        var date = new Date();
        var currentYear = date.getFullYear();
        // let lastYear = date.getFullYear() - 1;
        // let currentMonth = date.getMonth();    
        // this.bulan = (currentMonth+1).toString();
        // this.tahun = currentYear;    
        for (var i = 0; i < 10; i++) {
            this.tahunList.push(currentYear - i);
        }
        // this.bulan = (currentMonth+1) + "_" + currentYear;    
        // for (var i = currentMonth + 2; i < 13 + (currentMonth+1) ; i++) {
        //   if (i > 12) {
        //     // "Bulan " + (i-12) + " tahun " + currentYear  );
        //     this.bulanList.push({bulan : (i-12), tahun: currentYear}); 
        //   } else {
        //    //  "Bulan " + (i) + " tahun " + lastYear  );
        //     this.bulanList.push({bulan : (i), tahun: lastYear});
        //   }      
        // }     
    }
    AbsenBawahanPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        loading.present();
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK['data']['DATA_BAWAHAN']);
            if (_this.userdataTPK['data']['DATA_BAWAHAN'].length > 0) {
                for (var i = 0; i < _this.userdataTPK['data']['DATA_BAWAHAN'].length; i++) {
                    _this.bawahanList.push(_this.userdataTPK['data']['DATA_BAWAHAN'][i]);
                }
            }
            if (_this.userdataTPK['data']['DATA_BAWAHAN_TNO'].length > 0) {
                for (var i = 0; i < _this.userdataTPK['data']['DATA_BAWAHAN_TNO'].length; i++) {
                    _this.bawahanList.push(_this.userdataTPK['data']['DATA_BAWAHAN_TNO'][i]);
                }
            }
            loading.dismiss();
        });
    };
    AbsenBawahanPage.prototype.ionViewDidLoad = function () {
    };
    AbsenBawahanPage.prototype.getAbsen = function (bulan, tahun) {
        var _this = this;
        var bawahanSplit = this.dataBawahan.split('_');
        console.log(bawahanSplit[2]);
        this.isLoading = true;
        this.soapService.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_absen_list', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: bawahanSplit[2],
                bulan: bulan,
                tahun: tahun
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            if (responData['rcmsg'] == "SUCCESS") {
                _this.absenList = responData['data'];
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
    AbsenBawahanPage.prototype.searchBawahan = function () {
        this.getAbsen(this.bulan, this.tahun);
        // this.getAbsen(this.bulan.split('_')[0], this.bulan.split('_')[1]);
    };
    AbsenBawahanPage.prototype.convertMonths = function () {
        switch (this.bulan.split('_')[0]) {
            case '1':
                return "Januari";
            case '2':
                return "Februari";
            case '3':
                return "Maret";
            case '4':
                return "April";
            case '5':
                return "Mei";
            case '6':
                return "Juni";
            case '7':
                return "Juli";
            case '8':
                return "Agustus";
            case '9':
                return "September";
            case '10':
                return "Oktober";
            case '11':
                return "November";
            case '12':
                return "Desember";
            default:
                return "false";
        }
    };
    AbsenBawahanPage.prototype.subTanggal = function (val) {
        //val.split(" - "));
        //return val.split(" ", 1); 
    };
    AbsenBawahanPage.prototype.goToAbsenMobileDetail = function (absen) {
        console.log(this.dataBawahan);
        var bawahanSplit = this.dataBawahan.split('_');
        var tgl = absen['TANGGAL'].split(" - ");
        var date = tgl[0];
        if (tgl[0] < 10) {
            date = '0' + tgl[0];
        }
        this.navCtrl.push('AbsenMobileDetailPage', {
            id_user: bawahanSplit[0],
            nipp: bawahanSplit[2],
            nama: bawahanSplit[1],
            shift: "",
            date: date + "-" + this.bulan + "-" + this.tahun,
            fromPage: "AbsenBawahanPage"
        });
    };
    AbsenBawahanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-absen-bawahan',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/absen-bawahan/absen-bawahan.html"*/'<!--\n  Generated template for the CutiListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Absen Bawahan</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="divs">\n    <ion-list>\n      <ion-item no-lines style="padding-left:8px !important">\n        <ion-select [(ngModel)]="dataBawahan" placeholder="Pilih Bawahan">\n          <ion-option *ngFor="let bawahan of bawahanList"\n            value="{{bawahan[\'ID USER\']}}_{{bawahan[\'NAMA\']}}_{{bawahan[\'NIPP\']}}">{{ bawahan[\'NAMA\'] }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-lines style="padding-left:8px !important">\n        <ion-select [(ngModel)]="bulan" placeholder="Pilih Bulan">\n          <!-- <ion-option *ngFor="let m of bulanList" value="{{m[\'bulan\']}}_{{m[\'tahun\']}}">{{ convertMonths2(m[\'bulan\']) }} {{m[\'tahun\']}}</ion-option>                    </ion-select> -->\n          <ion-option value="1">Januari</ion-option>\n          <ion-option value="2">Februari</ion-option>\n          <ion-option value="3">Maret</ion-option>\n          <ion-option value="4">April</ion-option>\n          <ion-option value="5">Mei</ion-option>\n          <ion-option value="6">Juni</ion-option>\n          <ion-option value="7">Juli</ion-option>\n          <ion-option value="8">Agustus</ion-option>\n          <ion-option value="9">September</ion-option>\n          <ion-option value="10">Oktober</ion-option>\n          <ion-option value="11">November</ion-option>\n          <ion-option value="12">Desember</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines style="padding-left:8px !important">\n        <ion-select [(ngModel)]="tahun" placeholder="Pilih Tahun">\n          <ion-option *ngFor="let tahun of tahunList" value="{{tahun}}">{{tahun}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button block icon-start class="button" margin-top (click)="searchBawahan()"\n      [disabled]="(dataBawahan == null || bulan == null || tahun == null) ? true : false">\n      <ion-icon name="md-search"></ion-icon>\n      Cari\n    </button>\n    <!-- <ion-col col-12>\n      <div align="center" padding class="headers" *ngIf="absenList != null">\n        <span style="font-size:1.4rem;" ion-text text-center color="light">Bulan {{ convertMonths() }}</span>\n      </div>\n    </ion-col> -->\n  </div>\n\n  <ion-grid fixed no-padding *ngIf=\'isLoading == false\'>\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-list class="dining_List">\n          <ion-item tapplable *ngFor="let absen of absenList">\n            <span item-start>\n              <img src="assets/imgs/menu-icon/absensi.png" class="icons">\n            </span>\n\n            <div style="display: table;width:100%;">\n              <div style="display: table-cell;">\n                <span ion-text wrap-text style="font-size:1.3rem;"><b>Tanggal\n                    {{absen.TANGGAL}}</b></span>\n              </div>\n\n              <div style="display: table-cell;text-align: right;">\n                <span ion-text text-wrap class="font" color="danger"\n                  *ngIf="absen.KETERANGAN == \'Mangkir\'">{{ absen.KETERANGAN }}\n                </span>\n                <span ion-text text-wrap class="font" color="secondary"\n                  *ngIf="absen.KETERANGAN == \'Hadir\'">{{ absen.KETERANGAN }}\n                </span>\n                <span ion-text text-wrap class="font" color="primary"\n                  *ngIf="absen.KETERANGAN == \'Sabtu\' || absen.KETERANGAN == \'Minggu\' ">\n                  {{ absen.KETERANGAN }}</span>\n                  <span ion-text text-wrap class="font" color="secondary" *ngIf="absen.KET_HADIRKOE != \'\'">\n                    <br>\n                    {{ absen.KET_HADIRKOE }}\n                  </span>\n                  <br>\n                  <div style="width: 100%;" (click)="goToAbsenMobileDetail(absen)">\n                    <img src="assets/flat-icon/absen_mobile.png" class="icons-absen-mobile">\n                  </div>\n              </div>\n            </div>\n\n            <span ion-text wrap-text class="font" color="color4">Datang : </span>\n            <span *ngIf="absen.JAM_DATANG == \'\' || absen.JAM_DATANG == null">&nbsp; - </span>\n            <span ion-text wrap-text class="font"><b>{{absen.JAM_DATANG}}</b></span>\n            <span ion-text wrap-text class="font" color="color4"\n              *ngIf="absen.STATUS_DATANG!=\'\' || absen.STATUS_DATANG!=null">&nbsp; | &nbsp; Koreksi :\n            </span>\n            <span ion-text wrap-text class="font" color="primary"\n              *ngIf="absen.STATUS_DATANG!=\'\' || absen.STATUS_DATANG!=null">{{ absen.STATUS_DATANG }}</span>\n            <br>\n            <span ion-text wrap-text class="font" color="color4">Ket. Datang </span> <br>\n            <span *ngIf="absen.KETERANGAN_MASUK == \'\' || absen.KETERANGAN_MASUK == null">&nbsp; -\n              &nbsp;</span>\n            <span ion-text text-wrap>{{absen.KETERANGAN_MASUK}}</span> <br><br>\n\n\n            <span ion-text wrap-text class="font" color="color4">Pulang : </span>\n            <span *ngIf="absen.JAM_PULANG == \'\' || absen.JAM_PULANG == null">&nbsp; - </span>\n            <span ion-text wrap-text class="font"><b>{{absen.JAM_PULANG}}</b></span>\n            <span ion-text wrap-text class="font" color="color4"\n              *ngIf="absen.STATUS_PULANG!=\'\' || absen.STATUS_PULANG!=null">&nbsp; | &nbsp; Koreksi :\n            </span>\n            <span ion-text wrap-text class="font" color="primary"\n              *ngIf="absen.STATUS_PULANG!=\'\' || absen.STATUS_PULANG!=null">{{ absen.STATUS_PULANG }}</span>\n            <br>\n            <span ion-text wrap-text class="font" color="color4">Ket. Pulang </span> <br>\n            <span *ngIf="absen.KETERANGAN_PULANG == \'\' || absen.KETERANGAN_PULANG == null">&nbsp; -\n              &nbsp;</span>\n            <span ion-text text-wrap>{{absen.KETERANGAN_PULANG}}</span> <br>\n\n            <span ion-text text-wrap class="text-sm bold keterangan"\n              *ngIf="absen.KETERANGAN != \'Hadir\' && absen.KETERANGAN != \'Mangkir\' && absen.KETERANGAN != \'Sabtu\' && absen.KETERANGAN != \'Minggu\'">\n              <b>{{ absen.KETERANGAN }}</b>\n            </span>\n\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\'isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <h2 class="animate-skeleton-background"></h2>\n        <h3 class="animate-skeleton-background"></h3>\n        <p class="animate-skeleton-background"> </p>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/absen-bawahan/absen-bawahan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AbsenBawahanPage);
    return AbsenBawahanPage;
}());

//# sourceMappingURL=absen-bawahan.js.map

/***/ })

});
//# sourceMappingURL=82.js.map