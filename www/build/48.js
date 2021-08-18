webpackJsonp([48],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposisiPageModule", function() { return DisposisiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposisi__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DisposisiPageModule = /** @class */ (function () {
    function DisposisiPageModule() {
    }
    DisposisiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__disposisi__["a" /* DisposisiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__disposisi__["a" /* DisposisiPage */]),
            ],
        })
    ], DisposisiPageModule);
    return DisposisiPageModule;
}());

//# sourceMappingURL=disposisi.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisposisiPage; });
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


// import { FormGroup, Validators, FormBuilder } from '@angular/forms';
/**
 * Generated class for the DisposisiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisposisiPage = /** @class */ (function () {
    function DisposisiPage(navCtrl, navParams, 
        // private _fb: FormBuilder,
        viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        // public disposisiForm: FormGroup;
        this.perintahList = [
            "Selesaikan",
            "ACC dan Aksi",
            "Evaluasi-Tanggapan",
            "Saran Pendapat",
            "Laporkan Hasilnya",
            "Tunda Dulu",
            "Bicarakan dengan Dirut",
            "Koordinasi dengan Dirut",
            "UDK dan Seperlunya",
            "Arsip"
        ];
        this.kepadaList = [];
        this.disposisiJabatanList = [];
        this.disposisiPekerjaList = [];
        this.searchResultList = [];
        this.showResult = false;
        this.fcKepada = '';
        this.kepadaId = '';
        this.fcPerintah = '';
        this.fcCacatan = '';
        // this.disposisiForm = this._fb.group({
        //   fcKepada: ['', Validators.compose([
        //     Validators.required
        //   ])],
        //   fcPerintah: ['', Validators.compose([
        //     Validators.required
        //   ])],
        //   fcCacatan: ['', Validators.compose([
        //     Validators.required
        //   ])]      
        // });
    }
    DisposisiPage.prototype.ionViewWillLoad = function () {
        this.kepadaList = this.navParams.get("kepadaList");
        // console.log(this.kepadaList);
        this.tipeDisposisi = this.navParams.get('tipeDisposisi');
        this.fcCacatan = this.navParams.get('lastCatatan');
    };
    DisposisiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisposisiPage');
    };
    DisposisiPage.prototype.getKepada = function () {
        var input = this.fcKepada.toUpperCase();
        if (this.fcKepada.length > 1) {
            this.searchResultList = this.kepadaList.filter(function (x) { return x.NAMA.includes(input) || x['NAMA JABATAN'].includes(input); });
            this.showResult = true;
        }
        else {
            this.searchResultList = [];
        }
    };
    DisposisiPage.prototype.setKepada = function (kepadaResult) {
        console.log(kepadaResult);
        if (this.tipeDisposisi == 'jabatan') {
            this.fcKepada = kepadaResult['NAMA JABATAN'] + " | " + kepadaResult['NAMA'];
            this.kepadaId = kepadaResult['ID USER'] + "_" + kepadaResult['ID JABATAN'] + "_" + kepadaResult['NIPP'] + "_" + kepadaResult['NAMA'] + "_" + kepadaResult['NAMA JABATAN'];
        }
        else if (this.tipeDisposisi == 'pekerja') {
            this.fcKepada = kepadaResult['NAMA'] + " | " + kepadaResult['NIPP'] + " | " + kepadaResult['NAMA JABATAN'];
            this.kepadaId = kepadaResult['ID USER'] + "_" + kepadaResult['ID JABATAN'] + "_" + kepadaResult['NIPP'] + "_" + kepadaResult['NAMA'] + "_" + kepadaResult['NAMA JABATAN'];
        }
        this.showResult = false;
    };
    DisposisiPage.prototype.sendData = function () {
        var id = this.kepadaId;
        var tindakan = this.fcPerintah;
        var catatan = this.fcCacatan;
        for (var index = 0; index < this.kepadaList.length; index++) {
            this.kepadaList[index].selected = false;
        }
        if (this.tipeDisposisi == 'jabatan') {
            this.disposisiJabatanList.push({ id_user: id.split('_')[0], id_jabatan: id.split('_')[1], tindakan: tindakan, catatan: catatan, nipp: id.split('_')[2], nama: id.split('_')[3], nama_jabatan: id.split('_')[4] });
            this.viewCtrl.dismiss({ disposisiJabatanList: this.disposisiJabatanList, disposisiPekerjaList: this.disposisiPekerjaList, lastCatatan: catatan });
        }
        else if (this.tipeDisposisi == 'pekerja') {
            this.disposisiPekerjaList.push({ id_user: id.split('_')[0], id_jabatan: id.split('_')[1], tindakan: tindakan, catatan: catatan, nipp: id.split('_')[2], nama: id.split('_')[3], nama_jabatan: id.split('_')[4] });
            this.viewCtrl.dismiss({ disposisiJabatanList: this.disposisiJabatanList, disposisiPekerjaList: this.disposisiPekerjaList, lastCatatan: catatan });
        }
    };
    DisposisiPage.prototype.cancel = function () {
        for (var index = 0; index < this.kepadaList.length; index++) {
            this.kepadaList[index].selected = false;
        }
        this.viewCtrl.dismiss();
    };
    DisposisiPage.prototype.openSelect = function () {
        var _this = this;
        var modal = this.modalCtrl.create('SelectBawahanDisposisiPage', { 'kepadaList': this.kepadaList });
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data != null) {
                _this.setKepada(data);
            }
        });
        modal.present();
    };
    DisposisiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-disposisi',template:/*ion-inline-start:"D:\Project\pos-ppi\src\pages\disposisi\disposisi.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title><span style="color:#FFF">Disposisi</span></ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="cancel()">\n\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/person.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Kepada</ion-label>\n\n        <ion-input type="text" placeholder="" (keyup)="getKepada()" [(ngModel)]="fcKepada" (ionFocus)="openSelect()" (click)="openSelect()"></ion-input>\n\n    </ion-item>\n\n\n\n    <!-- <div *ngIf="searchResultList.length > 0 && showResult">\n\n        <ion-item *ngFor="let SearchResult of searchResultList" no-margin>\n\n            <p ion-text text-wrap style="font-size:1.3rem !important;" *ngIf="tipeDisposisi == \'jabatan\'"\n\n                (click)="setKepada(SearchResult)">{{ SearchResult[\'NAMA JABATAN\'] }} |\n\n                {{ SearchResult[\'NAMA\'] }}</p>\n\n            <p ion-text text-wrap style="font-size:1.3rem !important;" ion-text text-wrap\n\n                *ngIf="tipeDisposisi == \'pekerja\'" (click)="setKepada(SearchResult)"> {{ SearchResult[\'NAMA\'] }}\n\n                | {{ SearchResult[\'NIPP\'] }} | {{ SearchResult[\'NAMA JABATAN\'] }}</p>\n\n        </ion-item>\n\n    </div> -->\n\n\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/jenis_cuti.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Perintah</ion-label>\n\n        <ion-select [(ngModel)]="fcPerintah" placeholder="">\n\n            <ion-option *ngFor="let perintah of perintahList" value="{{ perintah }}">{{ perintah }}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-padding>\n\n        <span item-left>\n\n            <img src="assets/imgs/logo/perihal.png" class="icons">\n\n        </span>\n\n        <ion-label stacked>Catatan</ion-label>\n\n        <ion-input type="text" [(ngModel)]="fcCacatan" placeholder="" clearInput></ion-input>\n\n    </ion-item>\n\n\n\n    <div class="row">\n\n        <div class="col">\n\n            <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="cancel()" margin-top>\n\n                <ion-icon name="md-close"></ion-icon>\n\n                Batal\n\n            </button>\n\n        </div>\n\n        <div class="col">\n\n            <button ion-button icon-start full color="primary" style="border-radius: 5px;" margin-top\n\n                (click)="sendData()" [disabled]="fcKepada == \'\' || fcPerintah == \'\' || fcCacatan == \'\' ? true : false">\n\n                <ion-icon name="md-checkmark"></ion-icon>\n\n                Simpan\n\n            </button>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Project\pos-ppi\src\pages\disposisi\disposisi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], DisposisiPage);
    return DisposisiPage;
}());

//# sourceMappingURL=disposisi.js.map

/***/ })

});
//# sourceMappingURL=48.js.map