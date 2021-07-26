webpackJsonp([74],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPetugasDirektoratPageModule", function() { return AddPetugasDirektoratPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_petugas_direktorat__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPetugasDirektoratPageModule = /** @class */ (function () {
    function AddPetugasDirektoratPageModule() {
    }
    AddPetugasDirektoratPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_petugas_direktorat__["a" /* AddPetugasDirektoratPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_petugas_direktorat__["a" /* AddPetugasDirektoratPage */]),
            ],
        })
    ], AddPetugasDirektoratPageModule);
    return AddPetugasDirektoratPageModule;
}());

//# sourceMappingURL=add-petugas-direktorat.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPetugasDirektoratPage; });
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
 * Generated class for the AddPetugasDirektoratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPetugasDirektoratPage = /** @class */ (function () {
    function AddPetugasDirektoratPage(navCtrl, navParams, _fb, soapService, viewCtrl, storage, loadingCtrl, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.soapService = soapService;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.kategori = '';
        this.direktorat = '';
        this.kategoriList = [];
        this.direktoratList = [];
        this.isLoading = true;
        this.isLoading2 = true;
        this.nippList = [];
        this.nippSearchResultList = [];
        this.showResult = false;
        this.editData = '';
        this.kategoriName = '';
        this.direktoratName = '';
        this.editData = navParams.get('editData');
        //console.log(this.editData); 
        if (this.editDataAda(this.editData)) {
            this.kategoriName = this.editData['KATEGORI'];
            this.direktoratName = this.editData['DIREKTORAT'];
            this.nippList.push({ value: this.editData['NIPP'] });
        }
        else {
            this.nippList.push({ value: '' });
        }
        this.isLoading2 = true;
        storage.get('userdataIPCContact').then(function (val) {
            _this.userdataDataIPCContact = val;
            _this.getLevel(_this.userdataDataIPCContact['ID_LEVEL']);
            if (_this.userdataDataIPCContact['ID_LEVEL'] == '0') {
                _this.getDataDirektorat();
            }
            else if (_this.userdataDataIPCContact['ID_LEVEL'] == '1') {
                _this.direktorat = _this.userdataDataIPCContact['ID_DIR'];
                _this.getDataKategori();
            }
            else {
                //console.log('error here');
            }
        });
    }
    AddPetugasDirektoratPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPetugasDirektoratPage');
    };
    AddPetugasDirektoratPage.prototype.getLevel = function (val) {
        this.level = val;
        //console.log("level : " + this.level);
        this.isLoading2 = false;
    };
    AddPetugasDirektoratPage.prototype.getDataDirektorat = function () {
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
                //this.getDataKategori();
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
            _this.isLoading = false;
            loading.dismiss();
        })
            .catch(function (error) {
            //console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
            loading.dismiss();
        });
    };
    AddPetugasDirektoratPage.prototype.getDataKategori = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        loading.present();
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_data_kategori_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                id_dir: this.direktorat
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
    AddPetugasDirektoratPage.prototype.addNIPP = function () {
        //console.log('clicked');  
        this.nippList.push({ value: '' });
    };
    AddPetugasDirektoratPage.prototype.removeNIPP = function (i) {
        this.nippList.splice(this.index, 1);
    };
    AddPetugasDirektoratPage.prototype.setNIPP = function (nippSearchResult, i) {
        this.index = i;
        this.nippList[this.index]['value'] = nippSearchResult['NIPP'];
        this.showResult = false;
        //console.log(this.nippList[this.index]);
    };
    AddPetugasDirektoratPage.prototype.checkFocus = function (i) {
        this.nippInputFocused = i;
        //console.log(this.nippInputFocused);
    };
    AddPetugasDirektoratPage.prototype.getNIPP = function (index, nipp) {
        var _this = this;
        //console.log(this.nippList[index]['value']);
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_find_nipp_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                search: this.nippList[index]['value']
            }) }).then(function (result) {
            var responData = JSON.parse(String(result));
            // console.log(responData);
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
            //console.log(error);
            // let alert = this.alertCtrl.create({
            //   title: '',
            //   subTitle: 'Gagal mendapatkan pesan (2)',
            //   buttons: ['OK']
            // });
            // alert.present();    
        });
    };
    AddPetugasDirektoratPage.prototype.register = function () {
        //console.log('send data');
        //console.log(this.nippList); 
        var nippData = [];
        for (var i = 0; i < this.nippList.length; i++) {
            if (this.nippList[i]['value'] != '') {
                nippData.push(this.nippList[i]['value']);
            }
        }
        if (nippData.length > 0 && this.direktorat != '' && this.kategori != '') {
            this.sendData(nippData);
        }
        else {
            this.errorMessage = '*Semua field harus diisi';
        }
        //console.log(nippData);
    };
    AddPetugasDirektoratPage.prototype.sendData = function (nippData) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Mohon Tunggu...",
            cssClass: 'transparent',
        });
        loading.present();
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_regis_user_ipcc', { fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                nipp: nippData,
                id_dir: this.direktorat,
                id_level: '2',
                user_choice: '1',
                id_kategori: this.kategori
            }
            // .post(api_base_url,'eoffice_bypass_wso',{fStream:JSON.stringify(
            //   {
            //     // usernameEDI : api_user, 
            //     // passwordEDI : api_pass,        
            //     // id_dir: val['ID_DIR']
            //     sc_type: 'inregisuser',
            //     sc_code: sc_code,        
            //     data : {
            //       nipp: nippData,
            //     id_dir: this.direktorat,
            //     id_level: '2',
            //     user_choice: '1',
            //     id_kategori: this.kategori
            //     }   
            // }
            ) }).then(function (result) {
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
            loading.dismiss();
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
        });
    };
    AddPetugasDirektoratPage.prototype.update = function () {
        var _this = this;
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
                    id_level: '2'
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
    AddPetugasDirektoratPage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    AddPetugasDirektoratPage.prototype.editDataAda = function (val) {
        if (typeof val != "undefined") {
            //console.log("true");
            return true;
        }
        else {
            //console.log("false");
            return false;
        }
    };
    AddPetugasDirektoratPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddPetugasDirektoratPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-petugas-direktorat',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-petugas-direktorat/add-petugas-direktorat.html"*/'<!--\n  Generated template for the AddCutiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title><span style="color:#FFF">Tambah Petugas Direktorat</span></ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="cancel()">\n                <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngIf="editDataAda(editData) == false">\n        <span item-left>\n            <img src="assets/imgs/logo/direktorat-icon.png" class="icons">\n        </span>\n        <span *ngIf="level == \'0\' && isEmptyObject(direktoratList[0])">\n            Direktorat Belum Tersedia\n        </span>\n        <span *ngIf="level == \'1\'" class="bold" ion-text text-wrap color="iconColor">\n            {{ userdataDataIPCContact[\'DIREKTORAT\'] }}\n        </span>\n        <div *ngIf="level == \'0\'">\n            <ion-label stacked>Pilih Direktorat</ion-label>\n            <ion-select (ionChange)="getDataKategori()" [(ngModel)]="direktorat" placeholder="">\n                <ion-option *ngFor="let direktorat of direktoratList" value="{{direktorat[\'ID_DIR\']}}">\n                    {{ direktorat[\'DIREKTORAT\'] }}</ion-option>\n            </ion-select>\n        </div>\n    </ion-item>\n\n    <ion-item *ngIf="editDataAda(editData) == true">\n        <span item-left>\n            <img src="assets/imgs/logo/direktorat-icon.png" class="icons">\n        </span>\n        <span class="font2" ion-text text-wrap>\n            {{ direktoratName }}\n        </span>\n    </ion-item>\n\n    <ion-item *ngIf="editDataAda(editData) == false">\n        <span item-left>\n            <img src="assets/imgs/logo/category-icon.png" class="icons">\n        </span>\n        <span *ngIf="isEmptyObject(kategoriList[0])">\n            Kategori Belum Tersedia\n        </span>\n        <div *ngIf="!isEmptyObject(kategoriList[0])">\n            <ion-label stacked>Pilih Kategori</ion-label>\n            <ion-select placeholder="" [(ngModel)]="kategori">\n                <ion-option *ngFor="let kategori of kategoriList" value="{{ kategori[\'ID_KATEGORI\'] }}">\n                    {{ kategori[\'KATEGORI\'] }}</ion-option>\n            </ion-select>\n        </div>\n    </ion-item>\n\n    <ion-item *ngIf="editDataAda(editData) == true">\n        <span item-left>\n            <img src="assets/imgs/logo/category-icon.png" class="icons">\n        </span>\n        <span class="font2" ion-text text-wrap>\n            {{ kategoriName }}\n        </span>\n    </ion-item>\n\n    <div *ngFor="let nipp of nippList; let i = index" margin-top>\n        <ion-item>\n            <span item-left>\n                <img src="assets/imgs/logo/person.png" class="icons">\n            </span>\n            <ion-label stacked>NIPP/nama</ion-label>\n            <ion-input type="text" placeholder="" (keyup)="getNIPP(i, nipp)" (ionFocus)="checkFocus(i)"\n                [(ngModel)]="nipp.value"></ion-input>\n\n            <ion-icon style="z-index:999; font-size:2.3rem; padding:8px;"\n                *ngIf="editDataAda(editData) == false && i == 0" name="add" (click)="addNIPP()" color="primary"\n                item-right></ion-icon>\n            <ion-icon style="z-index:999; font-size:2.3rem; padding:8px;"\n                *ngIf="editDataAda(editData) == false && i > 0" name="md-remove" color="danger" (click)="removeNIPP(i)"\n                item-right>\n            </ion-icon>\n        </ion-item>\n        <div *ngIf="nippSearchResultList.length > 0 && showResult && nippInputFocused == i ">\n            <ion-item *ngFor="let nippSearchResult of nippSearchResultList" no-margin>\n                <p style="font-size:1.3rem !important;" (click)="setNIPP(nippSearchResult,i)">\n                    {{nippSearchResult[\'NAMA\'] }} - {{ nippSearchResult[\'NIPP\'] }}</p>\n            </ion-item>\n        </div>\n    </div>\n\n    <p ion-text color="danger" *ngIf="errorMessage != null">{{errorMessage}}</p>\n    <button style="border-radius: 5px;" *ngIf="editDataAda(editData) == false" ion-button block color="primary"\n        margin-top (click)="register()">Register</button>\n    <button style="border-radius: 5px;" *ngIf="editDataAda(editData) == true" ion-button block color="primary"\n        margin-top (click)="update()">Ubah</button>\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-petugas-direktorat/add-petugas-direktorat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AddPetugasDirektoratPage);
    return AddPetugasDirektoratPage;
}());

//# sourceMappingURL=add-petugas-direktorat.js.map

/***/ })

});
//# sourceMappingURL=74.js.map