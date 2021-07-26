webpackJsonp([38],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P2bPopupPageModule", function() { return P2bPopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__p2b_popup__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var P2bPopupPageModule = /** @class */ (function () {
    function P2bPopupPageModule() {
    }
    P2bPopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__p2b_popup__["a" /* P2bPopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__p2b_popup__["a" /* P2bPopupPage */]),
            ],
        })
    ], P2bPopupPageModule);
    return P2bPopupPageModule;
}());

//# sourceMappingURL=p2b-popup.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P2bPopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
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
 * Generated class for the P2bPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var P2bPopupPage = /** @class */ (function () {
    function P2bPopupPage(navCtrl, navParams, _fb, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.totalSkor = 0.0;
        this.data = navParams.get('listdata');
        this.type = navParams.get('typedata');
        this.status = navParams.get('status');
        this.totalBobot = this.status == 'edit' ? parseInt(navParams.get('totalBobot')) - parseInt(this.data['Bobot']) : navParams.get('totalBobot');
        this.totalBobotView = navParams.get('totalBobot');
        this.p2bForm = this._fb.group({
            fcKet: [this.status == 'edit' ? this.data['Sasaran_Performansi'] : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcBobot: [this.status == 'edit' ? this.data['Bobot'] : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
        if (this.data['Skor'] != '') {
            this.totalSkor = parseFloat(this.data['Skor']);
        }
        this.p2bKoreksiForm = this._fb.group({
            fcKoreksiKet: [this.data['Sasaran_Performansi'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcKoreksiBobot: [this.data['Bobot'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcKoreksiBukti: [this.data['Bukti'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcNilai: [this.data['Nilai'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    }
    P2bPopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad P2bPopupPage');
    };
    P2bPopupPage.prototype.submit = function () {
        if (this.status == 'edit') {
            var bobotAll = parseInt(this.p2bForm.controls.fcBobot.value) + parseInt(this.totalBobot);
            if (bobotAll > 100) {
                var toast = this.toastCtrl.create({
                    message: 'jumlah bobot ' + bobotAll + ', tidak boleh lebih dari 100.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                this.data['Sasaran_Performansi'] = this.p2bForm.controls.fcKet.value;
                this.data['Bobot'] = this.p2bForm.controls.fcBobot.value;
                this.viewCtrl.dismiss({
                    data: this.data
                });
            }
        }
        else if (this.status == 'add') {
            var bobotAll = parseInt(this.p2bForm.controls.fcBobot.value) + parseInt(this.totalBobot);
            if (bobotAll > 100) {
                var toast = this.toastCtrl.create({
                    message: 'jumlah bobot ' + bobotAll + ', tidak boleh lebih dari 100.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                var value = {
                    'Bobot': this.p2bForm.controls.fcBobot.value,
                    'Bukti': '',
                    'Id': '',
                    'Nilai': '',
                    'Sasaran_Performansi': this.p2bForm.controls.fcKet.value,
                    'Skor': ''
                };
                this.viewCtrl.dismiss({
                    data: value
                });
            }
        }
        else if (this.status == 'koreksi') {
            this.data['Sasaran_Performansi'] = this.p2bKoreksiForm.controls.fcKoreksiKet.value;
            this.data['Bobot'] = this.p2bKoreksiForm.controls.fcKoreksiBobot.value;
            this.data['Nilai'] = this.p2bKoreksiForm.controls.fcNilai.value;
            this.data['Sasaran_Performansi'] = this.p2bKoreksiForm.controls.fcKoreksiKet.value;
            this.data['Skor'] = this.totalSkor;
            this.data['Bukti'] = this.p2bKoreksiForm.controls.fcKoreksiBukti.value;
            this.viewCtrl.dismiss({
                data: this.data
            });
        }
    };
    P2bPopupPage.prototype.onNilaiChange = function () {
        if (this.p2bKoreksiForm.controls.fcNilai.value != '') {
            this.totalSkor = parseFloat(this.p2bKoreksiForm.controls.fcNilai.value) * parseFloat(this.p2bKoreksiForm.controls.fcKoreksiBobot.value) / 100;
        }
        else {
            this.totalSkor = 0.0;
        }
    };
    P2bPopupPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    P2bPopupPage.prototype.changeBobot = function () {
        if (this.p2bForm.controls.fcBobot.value != '') {
            this.totalBobotView = parseInt(this.totalBobot) + parseInt(this.p2bForm.controls.fcBobot.value);
        }
        else {
            this.totalBobotView = this.totalBobot;
        }
    };
    P2bPopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-p2b-popup',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b-popup/p2b-popup.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><span style="color:#FFF">Input</span></ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cancel()">\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="appForm" *ngIf="status == \'edit\' || status == \'add\'">\n        <form [formGroup]="p2bForm" class="list-form">\n            <ion-item no-padding>\n                <span item-left>\n                    <img src="assets/imgs/logo/perihal.png" class="icons">\n                </span>\n                <ion-label stacked *ngIf="type == \'rencanaKerja\'" >Rencana Kerja</ion-label>\n                <ion-label stacked *ngIf="type == \'ide\'" >Ide / Inisiatif</ion-label>\n                <ion-input type="text" formControlName="fcKet" [readonly]="type == \'prosesKerja\' ? true : false"\n                    placeholder=""></ion-input>\n            </ion-item>\n\n            <ion-item no-padding>\n                <span item-left>\n                    <img src="assets/imgs/logo/scores.png" class="icons">\n                </span>\n                <ion-label stacked>Bobot</ion-label>\n                <ion-input type="number" formControlName="fcBobot" (ionChange)=\'changeBobot()\' placeholder=""></ion-input>\n            </ion-item>\n\n            <br>\n\n            <ion-card class="header-card">\n                <ion-card-content>\n                    <span ion-text text-wrap class="font-header">\n                        <b>Total Bobot : </b>{{ totalBobotView }}\n                    </span>\n                </ion-card-content>\n            </ion-card>\n\n            <p ion-text color="danger">{{errorMsg}}</p>\n\n            <!-- <button ion-button block color="color2" margin-top (click)="submit()"\n                [disabled]="!p2bForm.valid">Submit</button>\n            <button ion-button block color="color2" margin-top margin-bottom (click)="cancel()">Batal</button> -->\n\n            <div class="row">            \n                <div class="col">\n                    <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="cancel()"\n                        margin-top>\n                        <ion-icon name="md-close"></ion-icon>\n                        Batal\n                    </button>\n                </div>\n                <div class="col">\n                    <button ion-button icon-start full color="primary" style="border-radius: 5px;" margin-top\n                        (click)="submit()" [disabled]="!p2bForm.valid">\n                        <ion-icon name="md-checkmark"></ion-icon>\n                        Submit\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class="appForm" *ngIf="status == \'koreksi\'">\n        <form [formGroup]="p2bKoreksiForm" class="list-form">\n            <ion-list>\n                <ion-item no-padding>\n                    <span item-left>\n                        <img src="assets/imgs/logo/jenis_cuti.png" class="icons">\n                    </span>\n                    <ion-label stacked>Sasaran Performansi</ion-label>\n                    <ion-input type="text" formControlName="fcKoreksiKet" [readonly]="true" placeholder=""></ion-input>\n                </ion-item>\n\n                <ion-item no-padding>\n                    <span item-left>\n                        <img src="assets/imgs/logo/scores.png" class="icons">\n                    </span>\n                    <ion-label stacked>Bobot</ion-label>\n                    <ion-input type="number" formControlName="fcKoreksiBobot" [readonly]="true" placeholder="">\n                    </ion-input>\n                </ion-item>\n\n                <ion-item no-padding>\n                    <span item-left>\n                        <img src="assets/imgs/logo/test.png" class="icons">\n                    </span>\n                    <ion-label stacked>Bukti</ion-label>\n                    <ion-input type="text" formControlName="fcKoreksiBukti" placeholder=""></ion-input>\n                </ion-item>\n\n                <ion-item no-padding>\n                    <span item-left>\n                        <img src="assets/imgs/logo/alasan.png" class="icons">\n                    </span>\n                    <ion-label stacked>Nilai</ion-label>\n                    <ion-select formControlName="fcNilai" (ionChange)="onNilaiChange()" placeholder="">\n                        <ion-option value="0">0</ion-option>\n                        <ion-option value="1">1</ion-option>\n                        <ion-option value="2">2</ion-option>\n                        <ion-option value="3">3</ion-option>\n                        <ion-option value="4">4</ion-option>\n                        <ion-option value="5">5</ion-option>\n                        <ion-option value="6">6</ion-option>\n                        <ion-option value="7">7</ion-option>\n                        <ion-option value="8">8</ion-option>\n                    </ion-select>\n                    <!-- <ion-input type="number" min=\'0\' formControlName="fcNilai" (ionChange)="onNilaiChange()" placeholder="Nilai" ></ion-input> -->\n                </ion-item>\n                <!-- <span ion-text text-wrap><b>Skor : </b>{{ totalSkor }}</span> -->\n            </ion-list>\n\n            <ion-card class="header-card">\n                <ion-card-content>\n                    <span ion-text text-wrap class="font-header">\n                        <b>Skor : </b>{{ totalSkor }}\n                    </span>\n                </ion-card-content>\n            </ion-card>\n\n            <!-- <button ion-button block color="color2" margin-top (click)="submit()"\n                [disabled]="status == \'koreksi\' ? !p2bKoreksiForm.valid : !p2bKoreksiForm.valid">Submit</button>\n            <button ion-button block color="color2" margin-top margin-bottom (click)="cancel()">Batal</button> -->\n\n            <div class="row">\n                <div class="col">\n                    <button ion-button icon-start full color="danger" style="border-radius: 5px;" (click)="cancel()"\n                        margin-top>\n                        <ion-icon name="md-close"></ion-icon>\n                        Batal\n                    </button>\n                </div>\n                <div class="col">\n                    <button ion-button icon-start full color="primary" style="border-radius: 5px;" margin-top\n                        (click)="submit()"\n                        [disabled]="status == \'koreksi\' ? !p2bKoreksiForm.valid : !p2bKoreksiForm.valid">\n                        <ion-icon name="md-checkmark"></ion-icon>\n                        Submit\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/p2b-popup/p2b-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], P2bPopupPage);
    return P2bPopupPage;
}());

//# sourceMappingURL=p2b-popup.js.map

/***/ })

});
//# sourceMappingURL=38.js.map