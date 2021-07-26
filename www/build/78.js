webpackJsonp([78],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminDirektoratPageModule", function() { return AddAdminDirektoratPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_admin_direktorat__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddAdminDirektoratPageModule = /** @class */ (function () {
    function AddAdminDirektoratPageModule() {
    }
    AddAdminDirektoratPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_admin_direktorat__["a" /* AddAdminDirektoratPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_admin_direktorat__["a" /* AddAdminDirektoratPage */]),
            ],
        })
    ], AddAdminDirektoratPageModule);
    return AddAdminDirektoratPageModule;
}());

//# sourceMappingURL=add-admin-direktorat.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdminDirektoratPage; });
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
 * Generated class for the AddAdminDirektoratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAdminDirektoratPage = /** @class */ (function () {
    function AddAdminDirektoratPage(navCtrl, navParams, _fb, viewCtrl, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.viewCtrl = viewCtrl;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        //public addAdminDirektoratForm: FormGroup;
        this.nippList = [];
        this.nippSearchResultList = [];
        this.showResult = false;
        this.direktoratList = [];
        this.isLoading = false;
        this.errorMessage = '';
        this.direktorat = '';
        this.currentDir = '';
        this.namaDirektorat = '';
        this.codeDirektorat = '';
        this.editData = '';
        this.editData = navParams.get('editData');
        //console.log(this.editData); 
        if (this.editDataAda(this.editData)) {
            this.currentDir = this.editData['DIREKTORAT'];
            this.nippList.push({ value: this.editData['NIPP'] });
        }
        else {
            this.nippList.push({ value: '' });
        }
        this.getDataDirektorat();
        // this.addAdminDirektoratForm = this._fb.group({
        //   fcDirektorat: ['', Validators.compose([
        //     Validators.required
        //   ])],
        //   fcAdmin: ['', Validators.compose([
        //     Validators.required
        //   ])],           
        // });
    }
    AddAdminDirektoratPage.prototype.result = function () {
        //console.log('this.anArray',this.nippList);   
    };
    AddAdminDirektoratPage.prototype.addNIPP = function () {
        //console.log('clicked');  
        this.nippList.push({ value: '' });
    };
    AddAdminDirektoratPage.prototype.removeNIPP = function (i) {
        this.nippList.splice(this.index, 1);
    };
    AddAdminDirektoratPage.prototype.setNIPP = function (nippSearchResult, i) {
        this.index = i;
        this.nippList[this.index]['value'] = nippSearchResult['NIPP'];
        this.showResult = false;
        //console.log(this.nippList[this.index]);
    };
    AddAdminDirektoratPage.prototype.checkFocus = function (i) {
        this.nippInputFocused = i;
        //console.log(this.nippInputFocused);
    };
    AddAdminDirektoratPage.prototype.getNIPP = function (index, nipp) {
        var _this = this;
        //console.log(this.nippList[index]['value']);
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_find_nipp_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                search: this.nippList[index]['value']
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            //console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.nippSearchResultList = [];
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.nippSearchResultList.push(responData['data'][i]);
                    }
                }
                _this.showResult = true;
                //console.log(this.nippSearchResultList);
            }
            else {
                _this.nippSearchResultList = [];
                // let alert = this.alertCtrl.create({
                //   title: '',
                //   subTitle: 'Gagal mendapatkan pesan (1)',
                //   buttons: ['OK']
                // });
                // alert.present();
            }
        })
            .catch(function (error) {
            console.log(error);
            // let alert = this.alertCtrl.create({
            //   title: '',
            //   subTitle: 'Gagal mendapatkan pesan (2)',
            //   buttons: ['OK']
            // });
            // alert.present();    
        });
    };
    AddAdminDirektoratPage.prototype.getDataDirektorat = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        loading.present();
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_data_direktorat_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */]
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
                //console.log(this.direktoratList);       
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            loading.dismiss();
            _this.isLoading = false;
        })
            .catch(function (error) {
            //console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
            _this.isLoading = false;
        });
    };
    AddAdminDirektoratPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAdminDirektoratPage');
    };
    AddAdminDirektoratPage.prototype.register = function () {
        //console.log('send data');
        //console.log(this.nippList); 
        var nippData = [];
        for (var i = 0; i < this.nippList.length; i++) {
            if (this.nippList[i]['value'] != '') {
                nippData.push(this.nippList[i]['value']);
            }
        }
        if (this.direktorat == 'create') {
            if (nippData.length > 0 && this.direktorat != '' && this.codeDirektorat != '' && this.namaDirektorat != '') {
                this.AddDirektorat(nippData);
                //this.sendData(nippData, dir);
            }
            else {
                this.errorMessage = '*Semua field harus diisi';
            }
        }
        else {
            if (nippData.length > 0 && this.direktorat != '') {
                this.sendData(nippData, this.direktorat);
            }
            else {
                this.errorMessage = '*Semua field harus diisi';
            }
        }
        //console.log(nippData);
    };
    AddAdminDirektoratPage.prototype.sendData = function (nippData, dir) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        if (this.direktorat != 'create') {
            loading.present();
            this.isLoading = true;
        }
        else {
            this.loading.dismiss();
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_regis_user_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                nipp: nippData,
                id_dir: dir,
                id_level: '1',
                user_choice: '0',
                id_kategori: ''
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            //console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                var toast = _this.toastCtrl.create({
                    message: 'Register berhasil',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.navCtrl.pop();
            }
            else {
                _this.nippSearchResultList = [];
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            if (_this.direktorat != 'create') {
                loading.dismiss();
            }
            else {
                _this.loading.dismiss();
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
            if (_this.direktorat != 'create') {
                loading.dismiss();
            }
            else {
                _this.loading.dismiss();
            }
        });
    };
    AddAdminDirektoratPage.prototype.update = function () {
        var _this = this;
        // console.log( {            
        //   usernameEDI : api_user, 
        //   passwordEDI : api_pass,
        //   nippnew : this.nippList[0]['value'],
        //   nippold : this.editData['NIPP'],
        //   id_level : '1'      
        // });
        if (this.nippList[0]['value'] == '') {
            this.errorMessage = '*Semua field harus diisi';
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
                content: "Mohon Tunggu...",
                cssClass: 'transparent',
            });
            loading_1.present();
            this.isLoading = true;
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_upd_user_ipcc', { fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                    nippnew: this.nippList[0]['value'],
                    nippold: this.editData['NIPP'],
                    id_level: '1'
                }) }).then(function (result) {
                var responData = JSON.parse(String(result));
                //console.log(responData);
                if (responData['rcmsg'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: 'Update Berhasil',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.navCtrl.pop();
                }
                else {
                    _this.nippSearchResultList = [];
                    var toast = _this.toastCtrl.create({
                        message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
                loading_1.dismiss();
            })
                .catch(function (error) {
                //console.log(error);
                var toast = _this.toastCtrl.create({
                    message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loading_1.dismiss();
            });
        }
    };
    AddAdminDirektoratPage.prototype.AddDirektorat = function (nippData) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_add_dir_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                nama_dir: this.namaDirektorat,
                kode_dir: this.codeDirektorat
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            //console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                _this.sendData(nippData, responData['data']['ID_DIR']);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
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
        });
    };
    AddAdminDirektoratPage.prototype.editDataAda = function (val) {
        if (typeof val != "undefined") {
            // console.log("true"); 
            return true;
        }
        else {
            //console.log("false");
            return false;
        }
    };
    AddAdminDirektoratPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddAdminDirektoratPage.prototype.loadingPresent = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        this.loading.present();
    };
    AddAdminDirektoratPage.prototype.loadingDismiss = function () {
        if (this.loading.present()) {
            this.loading.dismiss();
        }
    };
    AddAdminDirektoratPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-admin-direktorat',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-admin-direktorat/add-admin-direktorat.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><span style="color:#FFF">Tambah Admin Direktorat</span></ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cancel()">\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n    <ion-item *ngIf="editDataAda(editData) == false">\n        <span item-left>\n            <img src="assets/imgs/logo/direktorat-icon.png" class="icons">\n        </span>\n        <ion-label stacked>pilih direktorat</ion-label>\n        <ion-select placeholder="" [(ngModel)]="direktorat">\n            <ion-option value="create">Tambah Direktorat Baru</ion-option>\n            <ion-option *ngFor="let direktorat of direktoratList" value="{{ direktorat[\'ID_DIR\'] }}">\n                {{ direktorat[\'DIREKTORAT\'] }}</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="editDataAda(editData) == false && direktorat == \'create\'">\n        <span item-left>\n            <img src="assets/imgs/logo/document-icon.png" class="icons">\n        </span>\n        <ion-label stacked>Nama Direktorat</ion-label>\n        <ion-input type="text" [(ngModel)]="namaDirektorat" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="editDataAda(editData) == false && direktorat == \'create\'">\n        <span item-left>\n            <img src="assets/imgs/logo/document-icon.png" class="icons">\n        </span>\n        <ion-label stacked>Kode Direktorat</ion-label>\n        <ion-input type="text" [(ngModel)]="codeDirektorat" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="editDataAda(editData) == true">\n        <span item-left>\n            <img src="assets/imgs/logo/direktorat-icon.png" class="icons">\n        </span>\n        <span class="font2" ion-text text-wrap>\n            {{ currentDir }}\n        </span>\n    </ion-item>\n    <div *ngFor="let nipp of nippList; let i = index" margin-top>\n        <ion-item>\n            <span item-left>\n                <img src="assets/imgs/logo/person.png" class="icons">\n            </span>\n            <ion-label stacked>NIPP/nama</ion-label>\n            <ion-input type="text" placeholder="" (keyup)="getNIPP(i, nipp)" (ionFocus)="checkFocus(i)"\n                [(ngModel)]="nipp.value"></ion-input>\n\n            <ion-icon style="z-index:999; font-size:2.3rem; padding:8px;"\n                *ngIf="editDataAda(editData) == false && i == 0" name="add" (click)="addNIPP()" color="primary" item-right></ion-icon>\n            <ion-icon style="z-index:999; font-size:2.3rem; padding:8px;"\n                *ngIf="editDataAda(editData) == false && i > 0" name="md-remove" color="danger" (click)="removeNIPP(i)" item-right>\n            </ion-icon>\n\n        </ion-item>\n        <div *ngIf="nippSearchResultList.length > 0 && showResult && nippInputFocused == i ">\n            <ion-item *ngFor="let nippSearchResult of nippSearchResultList" no-margin>\n                <p style="font-size:1.3rem !important;" (click)="setNIPP(nippSearchResult,i)">\n                    {{nippSearchResult[\'NAMA\'] }} - {{ nippSearchResult[\'NIPP\'] }}</p>\n            </ion-item>\n        </div>\n    </div>\n    <p ion-text color="danger" *ngIf="errorMessage != null">{{errorMessage}}</p>\n\n    <button style="border-radius: 5px;" *ngIf="editDataAda(editData) == false" ion-button block color="primary" margin-top\n        (click)="register()">Register</button>\n    <button style="border-radius: 5px;" *ngIf="editDataAda(editData) == true" ion-button block color="primary" margin-top\n        (click)="update()">Ubah</button>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-admin-direktorat/add-admin-direktorat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AddAdminDirektoratPage);
    return AddAdminDirektoratPage;
}());

//# sourceMappingURL=add-admin-direktorat.js.map

/***/ })

});
//# sourceMappingURL=78.js.map