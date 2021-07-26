webpackJsonp([73],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionIpcContactPageModule", function() { return AddQuestionIpcContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_question_ipc_contact__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddQuestionIpcContactPageModule = /** @class */ (function () {
    function AddQuestionIpcContactPageModule() {
    }
    AddQuestionIpcContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_question_ipc_contact__["a" /* AddQuestionIpcContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_question_ipc_contact__["a" /* AddQuestionIpcContactPage */]),
            ],
        })
    ], AddQuestionIpcContactPageModule);
    return AddQuestionIpcContactPageModule;
}());

//# sourceMappingURL=add-question-ipc-contact.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionIpcContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(52);
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
 * Generated class for the AddQuestionIpcContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddQuestionIpcContactPage = /** @class */ (function () {
    function AddQuestionIpcContactPage(navCtrl, navParams, _fb, popoverCtrl, viewCtrl, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl, oneSignal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.oneSignal = oneSignal;
        this.direktoratList = [];
        this.kategoriList = [];
        this.modul = navParams.get('modul');
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_5__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_5__config__["h" /* sender_id */]);
        oneSignal.endInit();
        this.addQuestionForm = this._fb.group({
            fcDirektorat: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])],
            fcKategori: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcJudul: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            fcDeskripsi: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    }
    AddQuestionIpcContactPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
        this.storage.get('userdataIPCContact').then(function (val) {
            _this.userdataIPCContact = val;
            _this.getDataDirektorat();
        });
    };
    AddQuestionIpcContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddQuestionIpcContactPage');
    };
    AddQuestionIpcContactPage.prototype.getDataDirektorat = function () {
        var _this = this;
        this.loadingPresent();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_data_direktorat_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                modul: this.modul
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.direktoratList = [];
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.direktoratList.push(responData['data'][i]);
                    }
                }
                _this.getDataKategori();
                //console.log(this.direktoratList);       
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.loadingDismiss();
            }
        })
            .catch(function (error) {
            //console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.loadingDismiss();
        });
    };
    AddQuestionIpcContactPage.prototype.getDataKategori = function () {
        var _this = this;
        // let loading = this.loadingCtrl.create({
        //   spinner: 'dots',
        //   content: "Mohon Tunggu...",       
        //   cssClass: 'transparent',
        //   //dismissOnPageChange:true
        // });
        // loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_data_kategori_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                // id_dir: this.addQuestionForm.controls.fcDirektorat.value
                id_dir: this.direktoratList[0]['ID_DIR']
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            //console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.kategoriList = [];
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.kategoriList.push(responData['data'][i]);
                    }
                }
                //console.log(this.kategoriList);       
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
            _this.loadingDismiss();
        })
            .catch(function (error) {
            //console.log(error);
            var alert = _this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal mendapatkan data kategori (2)',
                buttons: ['OK']
            });
            alert.present();
            // loading.dismiss();
            _this.loadingDismiss();
        });
    };
    AddQuestionIpcContactPage.prototype.sendData = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_pengajuan_ipcc', { fStream: JSON.stringify({
                // sc_type: 'izincuti',
                // sc_code: sc_code,        
                // data : {
                //   person_id : '5409', 
                //   atas : this.batasAtas,
                //   bawah : this.batasBawah
                // }        
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                from_nipp: this.userdataTPK['data']['NIPP'],
                // to_nipp			: this.addQuestionForm.controls.fcDirektorat.value,
                to_nipp: this.direktoratList[0]['ID_DIR'],
                id_kategori: this.addQuestionForm.controls.fcKategori.value,
                judul: this.addQuestionForm.controls.fcJudul.value,
                isi: this.addQuestionForm.controls.fcDeskripsi.value,
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            //console.log(responData);
            var title = '';
            if (_this.modul == 'hr_contact') {
                title = 'HR Contact';
            }
            else if (_this.modul == 'helpdesk') {
                title = 'Helpdesk';
            }
            if (responData['rcmsg'] == "SUCCESS") {
                var toast = _this.toastCtrl.create({
                    message: 'Pengajuan berhasil',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present().then(function () {
                    _this.soapService
                        .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_notif_imove_nipp', { fStream: JSON.stringify({
                            usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                            passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                            nipp: [],
                            data: {
                                "res": "IpcContactQuestionListPage"
                            },
                            content: {
                                "en": "Permasalahan Baru Dari " + _this.userdataTPK['data']['NAMA']
                            },
                            heading: {
                                "en": title
                            },
                            id_kategori: _this.addQuestionForm.controls.fcKategori.value
                        }) }).then(function (result) {
                        var hasil = JSON.parse(String(result));
                        //console.log("push notif : " + JSON.stringify(hasil));            
                        _this.navCtrl.pop();
                    }).catch(function (error) {
                        //console.log(error);            
                        _this.navCtrl.pop();
                    });
                    _this.navCtrl.pop();
                });
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.loading.dismiss();
        })
            .catch(function (error) {
            //console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
        this.loading.dismiss();
    };
    AddQuestionIpcContactPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddQuestionIpcContactPage.prototype.loadingPresent = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
    };
    AddQuestionIpcContactPage.prototype.loadingDismiss = function () {
        if (this.loading.present()) {
            this.loading.dismiss();
        }
    };
    AddQuestionIpcContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-question-ipc-contact',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-question-ipc-contact/add-question-ipc-contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><span style="color:#FFF">Pengajuan</span></ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cancel()">\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="headers">\n        <table width="100%">\n            <tr>\n                <td width="10%" align="center">\n                    <img src="assets/imgs/logo/alert-icon.png" class="icons">\n                </td>\n                <td width="90%">\n                    <div style="margin-left: 5px;" >\n                        <span *ngIf="modul == \'hr_contact\'" ion-text text-wrap style="font-size: 1.3rem; ">Menu HR Contact hanya untuk pertanyaan non teknis</span>\n                        <span *ngIf="modul == \'helpdesk\'" ion-text text-wrap style="font-size: 1.3rem; ">Menu Helpdesk hanya untuk pertanyaan teknis</span>\n                    </div>                \n                </td>\n            </tr>\n        </table>\n    </div>\n\n    <form [formGroup]="addQuestionForm" class="list-form">\n        <ion-item>\n            <span item-left>\n                <img src="assets/imgs/logo/direktorat-icon.png" class="icons">\n            </span>\n            <span *ngIf="direktoratList.length > 0" ion-text text-wrap style="font-size: 1.4rem; ">{{ direktoratList[0][\'DIREKTORAT\'] }}</span>\n            <!-- <ion-label stacked>pilih direktorat</ion-label>\n            <ion-select (ionChange)="getDataKategori()" formControlName="fcDirektorat" placeholder="">\n                <ion-option *ngFor="let direktorat of direktoratList" value="{{direktorat[\'ID_DIR\']}}">\n                    {{ direktorat[\'DIREKTORAT\'] }}</ion-option>\n            </ion-select> -->\n        </ion-item>\n\n        <ion-item>\n            <span item-left>\n                <img src="assets/imgs/logo/category-icon.png" class="icons">\n            </span>\n            <ion-label stacked>pilih kategori</ion-label>\n            <ion-select formControlName="fcKategori" placeholder="">\n                <ion-option *ngFor="let kategori of kategoriList" value="{{kategori[\'ID_KATEGORI\']}}">\n                    {{ kategori[\'KATEGORI\'] }}</ion-option>\n\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <span item-left>\n                <img src="assets/imgs/logo/document-icon.png" class="icons">\n            </span>\n            <ion-label stacked>Judul Permasalahan</ion-label>\n            <ion-input type="text" formControlName="fcJudul" placeholder=""></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Deskripsi</ion-label>\n            <ion-textarea type="text" formControlName="fcDeskripsi" placeholder=""></ion-textarea>\n        </ion-item>\n\n        <button ion-button icon-end block style="border-radius: 5px;" color="primary" margin-top (click)="sendData()"\n            [disabled]="!addQuestionForm.valid">\n            Ajukan\n            <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-question-ipc-contact/add-question-ipc-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */]])
    ], AddQuestionIpcContactPage);
    return AddQuestionIpcContactPage;
}());

//# sourceMappingURL=add-question-ipc-contact.js.map

/***/ })

});
//# sourceMappingURL=73.js.map