webpackJsonp([7],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserdataPageModule", function() { return UpdateUserdataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_userdata__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateUserdataPageModule = /** @class */ (function () {
    function UpdateUserdataPageModule() {
    }
    UpdateUserdataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_userdata__["a" /* UpdateUserdataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_userdata__["a" /* UpdateUserdataPage */]),
            ],
        })
    ], UpdateUserdataPageModule);
    return UpdateUserdataPageModule;
}());

//# sourceMappingURL=update-userdata.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserdataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(202);
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
 * Generated class for the UpdateUserdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateUserdataPage = /** @class */ (function () {
    function UpdateUserdataPage(navCtrl, navParams, formBuilder, toastCtrl, loadingCtrl, soapService, storage, transfer, camera, filepath, file, http, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.transfer = transfer;
        this.camera = camera;
        this.filepath = filepath;
        this.file = file;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.imageURI = "assets/imgs/logo/rotate.png";
        this.updateType = "";
        this.email = "";
        this.hp = "";
        this.passBaru = "";
        this.passLama = "";
        this.confPass = "";
        this.isLoading = true;
        this.userdataTPK = navParams.get('userdataTPK');
        this.updateType = navParams.get('updateType');
        console.log(this.userdataTPK);
        console.log(this.updateType);
        if (this.updateType == "email") {
            this.email = this.userdataTPK['data']['EMAIL'];
        }
        if (this.updateType == 'hp') {
            this.hp = this.userdataTPK['data']['HP'];
        }
        // this.formInput = formBuilder.group({
        //   email: [this.userdataTPK['data']['EMAIL'], Validators.required],
        //   phone: [this.userdataTPK['data']['HP'], Validators.required],
        //   passLama: ["", Validators.required],
        //   passBaru: ["", Validators.required],
        //   confPass: ["", Validators.required]      
        // });
    }
    UpdateUserdataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateUserdataPage');
    };
    UpdateUserdataPage.prototype.doUpdate = function () {
        var _this = this;
        if (this.updateType == 'ttd') {
            this.upload();
        }
        else if (this.updateType == 'foto') {
            this.uploadFoto();
        }
        else {
            console.log(this.hp);
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
                content: "Mengubah Data...",
                cssClass: 'transparent',
                dismissOnPageChange: true
            });
            loading_1.present();
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_update_user', {
                fStream: JSON.stringify({
                    usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                    passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                    id_user: this.userdataTPK['data']['IDUSER'],
                    password_lama: this.passLama,
                    password: this.passBaru,
                    conf_password: this.confPass,
                    email: this.email,
                    no_hp: this.hp
                })
            })
                .then(function (result) {
                var responData = JSON.parse(String(result));
                console.log(responData);
                if (responData['rcmsg'] == "SUCCESS") {
                    if (_this.updateType == 'pass') {
                        _this.storage.set('correctPass', _this.passBaru);
                    }
                    _this.newSession(loading_1);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: responData['rcmsg'],
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loading_1.dismiss();
                }
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({
                    message: 'Input gagal, silahkan periksa koneksi internet anda.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loading_1.dismiss();
            });
        }
    };
    UpdateUserdataPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    UpdateUserdataPage.prototype.newSession = function (loading) {
        var _this = this;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_get_user_data', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                username: this.userdataTPK['data']['NIPP'],
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data']['login_status'] == '404 Not Found') {
                    console.log(responData['data']['login_status']);
                }
                else if (responData['data'] == undefined) {
                    console.log(responData['data']);
                }
                else if (responData['data']['login_status'] == 'AP NOT ALLOWED') {
                    console.log(responData['data']['login_status']);
                }
                else {
                    _this.userdataTPK = responData;
                    _this.storage.set('userdata', responData).then(function () {
                    });
                }
            }
            else {
                console.log("error here");
            }
            var toast = _this.toastCtrl.create({
                message: 'Berhasil Mengubah Data.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
            _this.navCtrl.pop();
        })
            .catch(function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Gagal memperbarui session, silahkan login ulang.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    UpdateUserdataPage.prototype.getImage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: 'Pilih gambar dari ?',
            cssClass: "my-alert",
            buttons: [
                {
                    text: 'Galeri',
                    handler: function () {
                        console.log('galeri clicked');
                        _this.takeImage(0);
                    }
                },
                {
                    text: 'Kamera',
                    handler: function () {
                        console.log('kamera clicked');
                        _this.takeImage(1);
                    }
                }
            ]
        });
        alert.present();
    };
    UpdateUserdataPage.prototype.takeImage = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filepath.resolveNativePath(_this.imageURI)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
                var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdateUserdataPage.prototype.copyFileToLocalDir = function (namePath, currentName, filename) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(function (success) {
            _this.imageFileName = filename;
            console.log('filename : ' + _this.imageFileName);
        }, function (error) {
            console.log('Error while storing file.');
        });
    };
    UpdateUserdataPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    UpdateUserdataPage.prototype.upload = function () {
        var _this = this;
        console.log(this.imageFileName);
        var fileTransfer = this.transfer.create();
        var loader = this.loadingCtrl.create({
            content: "Uploading image...",
            dismissOnPageChange: true
        });
        loader.present();
        var options = {
            fileKey: "ttd",
            fileName: this.imageFileName,
            chunkedMode: false,
            // mimeType: "multipart/form-data",
            params: { 'id_user': this.userdataTPK['data']['IDUSER'], 'nipp': this.userdataTPK['data']['NIPP'] }
        };
        var filePath = 'http://103.19.80.243/cfs_dev/apiptpdev/f55_eoffice_upload_ttd.php';
        fileTransfer.upload(this.pathForImage(this.imageFileName), filePath, options)
            .then(function (data) {
            console.log(data);
            var responData = JSON.parse(String(data['response']));
            console.log(responData);
            // this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"       
            // this.presentToast("Image uploaded successfully");
            // loader.dismiss();
            // let toast = this.toastCtrl.create({
            //   message: 'Upload Tanda Tangan berhasil',
            //   duration: 3000,
            //   position: 'bottom'
            // });
            // toast.present();
            if (responData['rcmsg'] == "SUCCESS") {
                _this.newSession(loader);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: responData['rcmsg'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
            }
        }, function (err) {
            console.log("masuk sini");
            console.log(err);
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Upload Tanda Tangan gagal, silahkan coba kembali',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            // this.presentToast(err);
        });
    };
    UpdateUserdataPage.prototype.uploadFoto = function () {
        var _this = this;
        console.log(this.imageFileName);
        var fileTransfer = this.transfer.create();
        var loader = this.loadingCtrl.create({
            content: "Uploading image...",
            dismissOnPageChange: true
        });
        loader.present();
        var options = {
            fileKey: "IMG",
            fileName: this.imageFileName,
            chunkedMode: false,
            // mimeType: "multipart/form-data",
            params: { 'id_user': this.userdataTPK['data']['IDUSER'], 'nipp': this.userdataTPK['data']['NIPP'] }
        };
        var filePath = 'http://103.19.80.243/cfs_dev/apiptpdev/f64_eoffice_upload_foto_cv.php';
        fileTransfer.upload(this.pathForImage(this.imageFileName), filePath, options)
            .then(function (data) {
            console.log(data);
            var responData = JSON.parse(String(data['response']));
            console.log(responData);
            // this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"       
            // this.presentToast("Image uploaded successfully");
            // loader.dismiss();
            // let toast = this.toastCtrl.create({
            //   message: 'Upload Tanda Tangan berhasil',
            //   duration: 3000,
            //   position: 'bottom'
            // });
            // toast.present();
            if (responData['rcmsg'] == "SUCCESS") {
                _this.newSession(loader);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: responData['rcmsg'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
            }
        }, function (err) {
            console.log("masuk sini");
            console.log(err);
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Upload foto CV gagal, silahkan coba kembali',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            // this.presentToast(err);
        });
    };
    UpdateUserdataPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            console.log("image + path : " + this.file.dataDirectory + img);
            return this.file.dataDirectory + img;
        }
    };
    UpdateUserdataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-update-userdata',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/update-userdata/update-userdata.html"*/'<!--\n  Generated template for the UpdateUserdataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light">Ubah Data Diri</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item *ngIf="updateType == \'email\'">\n    <span item-left>\n      <img src="assets/imgs/setting-icon/email.png" class="icons">\n    </span>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf="updateType == \'hp\'">\n    <span item-left>\n      <img src="assets/imgs/setting-icon/phone.png" class="icons">\n    </span>\n    <ion-label stacked>No. Telpon</ion-label>\n    <ion-input type="number" [(ngModel)]="hp"></ion-input>\n  </ion-item>\n\n  <div *ngIf="updateType == \'pass\'">\n    <ion-item>\n      <span item-left>\n        <img src="assets/imgs/setting-icon/pass3.png" class="icons">\n      </span>\n      <ion-label stacked>Password Lama (harus diisi)</ion-label>\n      <ion-input type="password" [(ngModel)]="passLama"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>\n        <img src="assets/imgs/setting-icon/pass1.png" class="icons">\n      </span>\n      <ion-label stacked>Password Baru</ion-label>\n      <ion-input type="password" [(ngModel)]="passBaru"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>\n        <img src="assets/imgs/setting-icon/pass2.png" class="icons">\n      </span>\n      <ion-label stacked>Confirm Password</ion-label>\n      <ion-input type="password" [(ngModel)]="confPass"></ion-input>\n    </ion-item>\n  </div>\n\n  <div *ngIf="updateType == \'ttd\' || updateType == \'foto\' ">\n    <ion-card class="my-card" (click)="getImage()">\n      <ion-item>\n        <img  class="photo" src="{{ imageURI }}" />\n        <div style="text-align: -webkit-center;">\n            <span ion-text text-wrap style="text-align:center;color:gray;" *ngIf="updateType == \'ttd\'" >Upload Tanda Tangan</span>\n            <span ion-text text-wrap style="text-align:center;color:gray;" *ngIf="updateType == \'foto\'">Upload Foto CV (akan ditampilkan di E-CV)</span>\n        </div>\n        \n      </ion-item>\n    </ion-card>\n  </div>\n\n  <br>\n  <div class="row">\n    <div class="col">\n      <button ion-button full icon-start color="danger" style="border-radius: 5px;" (click)="back()">\n        <ion-icon name="close"></ion-icon>\n        Batal\n      </button>\n    </div>\n    <div class="col">\n      <button ion-button full icon-end style="border-radius: 5px;" (click)="doUpdate()">\n        Ubah\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/update-userdata/update-userdata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], UpdateUserdataPage);
    return UpdateUserdataPage;
}());

//# sourceMappingURL=update-userdata.js.map

/***/ })

});
//# sourceMappingURL=7.js.map