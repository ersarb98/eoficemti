webpackJsonp([47],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PertanggungjawabanSppdPageModule", function() { return PertanggungjawabanSppdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pertanggungjawaban_sppd__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PertanggungjawabanSppdPageModule = /** @class */ (function () {
    function PertanggungjawabanSppdPageModule() {
    }
    PertanggungjawabanSppdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pertanggungjawaban_sppd__["a" /* PertanggungjawabanSppdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pertanggungjawaban_sppd__["a" /* PertanggungjawabanSppdPage */]),
            ],
        })
    ], PertanggungjawabanSppdPageModule);
    return PertanggungjawabanSppdPageModule;
}());

//# sourceMappingURL=pertanggungjawaban-sppd.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PertanggungjawabanSppdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(205);
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
 * Generated class for the PertanggungjawabanSppdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PertanggungjawabanSppdPage = /** @class */ (function () {
    function PertanggungjawabanSppdPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, transfer, fileChooser, filepath, file, storage, alertCtrl, camera, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.fileChooser = fileChooser;
        this.filepath = filepath;
        this.file = file;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.platform = platform;
        this.win = window;
        this.imageURI = "";
        this.imageShow = "assets/imgs/logo/camera.png";
        this.messageData = navParams.get('messageData');
        // console.log(this.messageData);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            // console.log(this.userdataTPK);
        });
    }
    PertanggungjawabanSppdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PertanggungjawabanSppdPage');
    };
    PertanggungjawabanSppdPage.prototype.openChooser = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            // console.log(uri);
            _this.fileDocPath = uri;
            _this.fileName = uri.substr(uri.lastIndexOf('/') + 1);
            _this.fileName = _this.fileName.substr(10);
            _this.fileName = _this.fileName.replace(/%20/g, " ");
            // console.log(this.fileName);
        })
            .catch(function (e) {
            // console.log(e)
        });
    };
    PertanggungjawabanSppdPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PertanggungjawabanSppdPage.prototype.getImage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: '',
            // subTitle: 'Pilih gambar dari ?',
            cssClass: "my-alert",
            buttons: [
                {
                    text: 'Galeri',
                    handler: function () {
                        // console.log('galeri clicked');
                        _this.takeImage(0);
                    }
                },
                {
                    text: 'Kamera',
                    handler: function () {
                        // console.log('kamera clicked');
                        _this.takeImage(1);
                    }
                }
            ]
        });
        alert.present();
    };
    PertanggungjawabanSppdPage.prototype.takeImage = function (sourceType) {
        var _this = this;
        var mType = this.camera.MediaType.PICTURE;
        // console.log(mType);
        var options = {
            quality: 100,
            mediaType: mType,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            var URI;
            _this.imageShow = _this.win.Ionic.WebView.convertFileSrc(imageData);
            _this.imageURI = imageData;
            URI = _this.imageURI;
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filepath.resolveNativePath(URI)
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
            // console.log(URI);
        }, function (err) {
            // console.log(err);
        });
    };
    PertanggungjawabanSppdPage.prototype.copyFileToLocalDir = function (namePath, currentName, filename) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(function (success) {
            _this.imageFileName = filename;
            // console.log(this.imageFileName);
        }, function (error) {
            // console.log('Error while storing file.');
        });
    };
    PertanggungjawabanSppdPage.prototype.createFileName = function () {
        if (this.fileType == 'gambar') {
            var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        }
        else {
            // console.log('error disini');
        }
        // console.log(newFileName);
        return newFileName;
    };
    PertanggungjawabanSppdPage.prototype.upload = function () {
        // console.log(this.fileDocPath);
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: 'Anda yakin ingin upload file ini ?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'TIDAK',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'YA',
                    handler: function () {
                        if (_this.fileType == 'file') {
                            var fileTransfer = _this.transfer.create();
                            var loader_1 = _this.loadingCtrl.create({
                                content: "Uploading file...",
                                spinner: 'dots',
                                cssClass: 'transparent',
                                dismissOnPageChange: true
                            });
                            loader_1.present();
                            var options = {
                                fileKey: "file",
                                fileName: _this.fileName,
                                chunkedMode: false,
                                mimeType: "multipart/form-data",
                                params: { id_surat: _this.messageData['ID_SURAT'], nipp: _this.userdataTPK['data']['NIPP'], nama_lengkap: _this.userdataTPK['data']['NAMA'] }
                            };
                            fileTransfer.upload(_this.fileDocPath, 'http://103.234.195.187/api_itpk/f111_eoffice_upload_pertanggungjawaban_sppd.php', options)
                                .then(function (data) {
                                // console.log(JSON.stringify(data));
                                // console.log(" Uploaded Successfully");    
                                if (data['responseCode'] == 200) {
                                    var responData = JSON.parse(String(data['response']));
                                    // console.log(responData);
                                    if (responData['rcmsg'] == 'SUCCESS') {
                                        loader_1.dismiss();
                                        var toast = _this.toastCtrl.create({
                                            message: 'Pertanggungjawaban SPPD Berhasil',
                                            duration: 3000,
                                            position: 'bottom'
                                        });
                                        toast.present();
                                        _this.viewCtrl.dismiss({ isSuccess: true });
                                    }
                                    else {
                                        loader_1.dismiss();
                                        var toast = _this.toastCtrl.create({
                                            message: responData['rcmsg'],
                                            duration: 3000,
                                            position: 'bottom'
                                        });
                                        toast.present();
                                    }
                                }
                                else {
                                    loader_1.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: "Gagal Upload, silahkan coba kembali.",
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                }
                            }, function (err) {
                                // console.log("masuk sini");
                                // console.log(err);
                                loader_1.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: 'Upload file gagal, silahkan coba kembali',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                // this.presentToast(err);
                            });
                        }
                        else if (_this.fileType == 'gambar') {
                            // console.log(this.imageFileName);
                            // console.log("image file path : " + this.pathForImage(this.imageFileName));
                            var fileTransfer = _this.transfer.create();
                            var loader_2 = _this.loadingCtrl.create({
                                content: "Uploading file...",
                                spinner: 'dots',
                                cssClass: 'transparent',
                                dismissOnPageChange: true
                            });
                            loader_2.present();
                            var options = {
                                fileKey: "file",
                                fileName: _this.fileName,
                                chunkedMode: false,
                                mimeType: "multipart/form-data",
                                params: { id_surat: _this.messageData['ID_SURAT'], nipp: _this.userdataTPK['data']['NIPP'], nama_lengkap: _this.userdataTPK['data']['NAMA'] }
                            };
                            fileTransfer.upload(_this.pathForImage(_this.imageFileName), 'http://103.234.195.187/api_itpk/f111_eoffice_upload_pertanggungjawaban_sppd.php', options)
                                .then(function (data) {
                                if (data['responseCode'] == 200) {
                                    var responData = JSON.parse(String(data['response']));
                                    // console.log(responData);
                                    if (responData['rcmsg'] == 'SUCCESS') {
                                        loader_2.dismiss();
                                        var toast = _this.toastCtrl.create({
                                            message: 'Pertanggungjawaban SPPD Berhasil',
                                            duration: 3000,
                                            position: 'bottom'
                                        });
                                        toast.present();
                                        _this.viewCtrl.dismiss({ isSuccess: true });
                                    }
                                    else {
                                        loader_2.dismiss();
                                        var toast = _this.toastCtrl.create({
                                            message: responData['rcmsg'],
                                            duration: 3000,
                                            position: 'bottom'
                                        });
                                        toast.present();
                                    }
                                }
                                else {
                                    loader_2.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: "Gagal Upload, silahkan coba kembali.",
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                }
                            }, function (err) {
                                // console.log("masuk sini");
                                // console.log(err);
                                loader_2.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: 'Upload file gagal, silahkan coba kembali',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    PertanggungjawabanSppdPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return this.file.dataDirectory + img;
        }
    };
    PertanggungjawabanSppdPage.prototype.isDisable = function () {
        if (this.fileType == 'file') {
            if (this.fileName == '' || this.fileName == null) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (this.fileType == 'gambar') {
            if (this.imageFileName == '' || this.imageFileName == null) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    PertanggungjawabanSppdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pertanggungjawaban-sppd',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/pertanggungjawaban-sppd/pertanggungjawaban-sppd.html"*/'<!--\n  Generated template for the PertanggungjawabanSppdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span style="color:#FFF">Pertanggungjawaban SPPD</span></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="my-card">\n    <ion-item>\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Nomor Pengajuan SPPD\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ messageData[\'No_Surat\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Perihal\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ messageData[\'PERIHAL\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Penanggung Jawab\n      </span><br>\n      <span ion-text text-wrap class="font-small" *ngIf="userdataTPK != null">\n        {{ this.userdataTPK[\'data\'][\'NAMA\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Tanggal Pengajuan SPPD\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ messageData[\'TGL_SURAT\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Tanggal Awal Pelaksanaan\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ messageData[\'TGL_MULAI\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Tanggal Akhir Pelaksanaan\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ messageData[\'TGL_AKHIR\'] }}\n      </span><br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Kota Tujuan\n      </span><br>\n      <span ion-text text-wrap class="font-small">\n        {{ messageData[\'TEMPAT_SPPD\'] }}\n      </span><br>\n    </ion-item>\n  </ion-card>\n\n  <br>\n\n  <ion-card class="my-card">\n    <ion-item>\n      <span item-left>\n        <img src="assets/imgs/logo/document-icon.png" class="icons">\n      </span>\n      <ion-label stacked>Upload File</ion-label>\n      <ion-select [(ngModel)]="fileType" cancelText="Cancel" okText="OK">\n        <div>\n          <ion-option value="file">File</ion-option>\n          <ion-option value="gambar">Foto</ion-option>          \n        </div>\n      </ion-select>\n    </ion-item>\n\n    <div *ngIf="fileType == \'gambar\'">      \n      <div class="image-container">\n        <img (click)="takeImage(0)" class="photo" src="{{ imageShow }}" />\n        <span ion-text style="text-align:center;color:gray;">Upload Foto (png, jpg, jpeg)</span>\n      </div>\n    </div> \n    <ion-item *ngIf="fileType == \'file\'">\n      <ion-label stacked>Upload File (docx, doc, xlxs, xls,xlsx, pdf)</ion-label>      \n      <ion-input type="text" [(ngModel)]="fileName" [readonly]="true" (ionFocus)="openChooser()" (click)="openChooser()" placeholder="pilih file"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label stacked>Upload File (png, jpg, jpeg, docx, doc, pdf)</ion-label>\n      <ion-input type="text" [(ngModel)]="fileName" [readonly]="true" (ionFocus)="openChooser()" (click)="openChooser()"\n        placeholder="klik disini untuk pilih file"></ion-input>\n    </ion-item>     -->\n\n    <div class="row">\n      <div class="col">\n        <button ion-button full icon-end style="border-radius: 5px;" [disabled]="isDisable()" (click)="upload()">\n          Upload\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </ion-card>\n\n  <br>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/pertanggungjawaban-sppd/pertanggungjawaban-sppd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], PertanggungjawabanSppdPage);
    return PertanggungjawabanSppdPage;
}());

//# sourceMappingURL=pertanggungjawaban-sppd.js.map

/***/ })

});
//# sourceMappingURL=47.js.map