webpackJsonp([71],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSppdPageModule", function() { return AddSppdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_sppd__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddSppdPageModule = /** @class */ (function () {
    function AddSppdPageModule() {
    }
    AddSppdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_sppd__["a" /* AddSppdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_sppd__["a" /* AddSppdPage */]),
            ],
        })
    ], AddSppdPageModule);
    return AddSppdPageModule;
}());

//# sourceMappingURL=add-sppd.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSppdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { dashCaseToCamelCase } from '@angular/compiler/src/util';






/**
 * Generated class for the AddSppdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddSppdPage = /** @class */ (function () {
    function AddSppdPage(navCtrl, navParams, viewCtrl, datePicker, platform, datePipe, toastCtrl, soapService, storage, loadingCtrl, oneSignal, alertCtrl, transfer, fileChooser, filepath, file, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.datePicker = datePicker;
        this.platform = platform;
        this.datePipe = datePipe;
        this.toastCtrl = toastCtrl;
        this.soapService = soapService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.fileChooser = fileChooser;
        this.filepath = filepath;
        this.file = file;
        this.camera = camera;
        this.tanggalMulai = '';
        this.tanggalSelesai = '';
        this.lokasi = '';
        this.perihal = '';
        this.lampiran = '';
        this.prioritas = '0';
        this.klasifikasi = '0';
        this.komentar = '';
        this.pemeriksaList = [];
        this.pemeriksaSearchResultList = [];
        this.showResult = false;
        this.pesertaJabatanList = [];
        this.pesertaJabatanSearchResultList = [];
        this.pesertaJabatanshowResult = false;
        this.pesertaPekerjaList = [];
        this.pesertaPekerjaSearchResultList = [];
        this.pesertaPekerjashowResult = false;
        this.pesertaEksternalList = [];
        this.searchResultPengirimList = [];
        this.showResultPengirim = false;
        this.win = window;
        this.imageURI = "";
        this.imageShow = "assets/imgs/logo/camera.png";
        oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_5__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_5__config__["h" /* sender_id */]);
        oneSignal.endInit();
        this.pemeriksaList.push({ value: '' });
        this.pesertaJabatanList.push({ value: '' });
        this.pesertaPekerjaList.push({ value: '' });
        this.pesertaEksternalList.push({ value: '' });
        this.tglPengajuan = new Date();
        this.tglPengajuan = this.datePipe.transform(this.tglPengajuan, 'dd/MM/yyyy');
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
    }
    AddSppdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSppdPage');
    };
    AddSppdPage.prototype.showDatePicker = function (type) {
        var _this = this;
        var myDate;
        if (type == 1) {
            myDate = new Date();
            this.datePicker.show({
                date: myDate,
                mode: 'date',
                minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
                androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
            }).then(function (date) {
                _this.firstDate = date;
                _this.tanggalMulai = _this.datePipe.transform(date, 'dd/MM/yyyy');
                _this.startTglSelesai = date;
            }, function (err) { return console.log('Error occurred while getting date: ', err); });
        }
        else if (type == 2) {
            if (this.tanggalMulai == '') {
                var toast = this.toastCtrl.create({
                    message: 'tanggal mulai harus diisi dahulu.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                myDate = new Date(this.startTglSelesai);
                this.datePicker.show({
                    date: myDate,
                    mode: 'date',
                    minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
                    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
                }).then(function (date) {
                    _this.secondDate = date;
                    _this.tanggalSelesai = _this.datePipe.transform(date, 'dd/MM/yyyy');
                }, function (err) { return console.log('Error occurred while getting date: ', err); });
            }
        }
    };
    AddSppdPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddSppdPage.prototype.addPemeriksa = function () {
        //console.log('clicked');
        this.pemeriksaList.push({ value: '' });
    };
    AddSppdPage.prototype.removePemeriksa = function (i) {
        this.pemeriksaList.splice(i, 1);
    };
    AddSppdPage.prototype.checkFocus = function (i) {
        this.pemeriksaInputFocused = i;
        //console.log(this.pemeriksaInputFocused);
    };
    AddSppdPage.prototype.getPemeriksa = function (i, value) {
        var _this = this;
        if (this.pemeriksaList[i]['value'] == '') {
            this.showResult = false;
        }
        else {
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_get_pemeriksa_sppd', {
                fStream: JSON.stringify({
                    "usernameEDI": __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                    "passwordEDI": __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                    "search": this.pemeriksaList[i]['value'],
                    "id_jabatan": this.userdataTPK['data']['IDJABATAN'],
                    "id_jab_pengirim": this.pengirim['ID_JABATAN'],
                    "atas": "1",
                    "bawah": "10"
                })
            }).then(function (result) {
                var responData = JSON.parse(String(result));
                if (responData['rcmsg'] == "SUCCESS") {
                    _this.pemeriksaSearchResultList = [];
                    _this.pemeriksaSearchResultList = responData['data'];
                    _this.showResult = true;
                    //console.log(this.pemeriksaSearchResultList);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.showResult = false;
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
                _this.showResult = false;
            });
        }
    };
    AddSppdPage.prototype.setPemeriksa = function (pemeriksaSearchResult, i) {
        this.index = i;
        this.pemeriksaList[this.index]['value'] = pemeriksaSearchResult['NAMA'] + " | " + pemeriksaSearchResult['NM_JABATAN'];
        this.pemeriksaList[this.index]['ID_USER'] = pemeriksaSearchResult['ID_USER'];
        this.pemeriksaList[this.index]['NIPP'] = pemeriksaSearchResult['NIPP'];
        this.pemeriksaList[this.index]['NAMA'] = pemeriksaSearchResult['NAMA'];
        this.pemeriksaList[this.index]['NM_JABATAN'] = pemeriksaSearchResult['NM_JABATAN'];
        this.pemeriksaList[this.index]['ID_JABATAN'] = pemeriksaSearchResult['ID_JABATAN'];
        this.pemeriksaList[this.index]['ID_CABANG'] = pemeriksaSearchResult['ID_CABANG'];
        this.pemeriksaList[this.index]['NAMA_CABANG'] = pemeriksaSearchResult['NAMA_CABANG'];
        this.showResult = false;
        //console.log(this.pemeriksaList);
    };
    AddSppdPage.prototype.addPesertaJabatan = function () {
        //console.log('clicked');
        this.pesertaJabatanList.push({ value: '' });
    };
    AddSppdPage.prototype.removePesertaJabatan = function (i) {
        this.pesertaJabatanList.splice(i, 1);
    };
    AddSppdPage.prototype.checkFocusPesertaJabatan = function (i) {
        this.pesertaJabatanInputFocused = i;
        //console.log(this.pesertaJabatanInputFocused);
    };
    AddSppdPage.prototype.getPesertaJabatan = function (i, value) {
        var _this = this;
        //console.log(this.pesertaJabatanList[i]['value']);
        if (this.pesertaJabatanList[i]['value'] == '') {
            this.pesertaJabatanshowResult = false;
        }
        else {
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_get_peserta_sppd', {
                fStream: JSON.stringify({
                    "usernameEDI": __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                    "passwordEDI": __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                    "search": this.pesertaJabatanList[i]['value'],
                    "atas": "1",
                    "bawah": "10",
                    "id_cabang": this.userdataTPK['data']['IDCABANG'],
                    "peserta_type": "jabatan"
                })
            }).then(function (result) {
                var responData = JSON.parse(String(result));
                //console.log(responData);
                if (responData['rcmsg'] == "SUCCESS") {
                    _this.pesertaJabatanSearchResultList = [];
                    _this.pesertaJabatanSearchResultList = responData['data'];
                    _this.pesertaJabatanshowResult = true;
                    //console.log(this.pesertaJabatanSearchResultList);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.pesertaJabatanshowResult = false;
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
                _this.pesertaJabatanshowResult = false;
            });
        }
    };
    AddSppdPage.prototype.setPesertaJabatan = function (pesertaJabatanSearchResult, i) {
        this.pesertaJabatanindex = i;
        this.pesertaJabatanList[this.pesertaJabatanindex]['value'] = pesertaJabatanSearchResult['NM_JABATAN'];
        this.pesertaJabatanList[this.pesertaJabatanindex]['ID_USER'] = pesertaJabatanSearchResult['ID_USER'];
        this.pesertaJabatanList[this.pesertaJabatanindex]['NIPP'] = pesertaJabatanSearchResult['NIPP'];
        this.pesertaJabatanList[this.pesertaJabatanindex]['NAMA'] = pesertaJabatanSearchResult['NAMA'];
        this.pesertaJabatanList[this.pesertaJabatanindex]['NM_JABATAN'] = pesertaJabatanSearchResult['NM_JABATAN'];
        this.pesertaJabatanList[this.pesertaJabatanindex]['ID_JABATAN'] = pesertaJabatanSearchResult['ID_JABATAN'];
        this.pesertaJabatanList[this.pesertaJabatanindex]['ID_CABANG'] = pesertaJabatanSearchResult['ID_CABANG'];
        this.pesertaJabatanList[this.pesertaJabatanindex]['KD_PARA'] = pesertaJabatanSearchResult['KD_PARA'];
        this.pesertaJabatanList[this.pesertaJabatanindex]['NAMA_CABANG'] = pesertaJabatanSearchResult['NAMA_CABANG'];
        this.pesertaJabatanshowResult = false;
        //console.log(this.pesertaJabatanList);
    };
    AddSppdPage.prototype.addPesertaPekerja = function () {
        //console.log('clicked');
        this.pesertaPekerjaList.push({ value: '' });
    };
    AddSppdPage.prototype.removePesertaPekerja = function (i) {
        this.pesertaPekerjaList.splice(i, 1);
    };
    AddSppdPage.prototype.checkFocusPesertaPekerja = function (i) {
        this.pesertaPekerjaInputFocused = i;
        //console.log(this.pesertaPekerjaInputFocused);
    };
    AddSppdPage.prototype.getPesertaPekerja = function (i, value) {
        var _this = this;
        //console.log(this.pesertaPekerjaList[i]['value']);
        if (this.pesertaPekerjaList[i]['value'] == '') {
            this.pesertaPekerjashowResult = false;
        }
        else {
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_get_peserta_sppd', {
                fStream: JSON.stringify({
                    "usernameEDI": __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                    "passwordEDI": __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                    "search": this.pesertaPekerjaList[i]['value'],
                    "atas": "1",
                    "bawah": "10",
                    "id_cabang": this.userdataTPK['data']['IDCABANG'],
                    "peserta_type": "pekerja"
                })
            }).then(function (result) {
                var responData = JSON.parse(String(result));
                //console.log(responData);
                if (responData['rcmsg'] == "SUCCESS") {
                    _this.pesertaPekerjaSearchResultList = [];
                    _this.pesertaPekerjaSearchResultList = responData['data'];
                    _this.pesertaPekerjashowResult = true;
                    //console.log(this.pesertaPekerjaSearchResultList);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.pesertaPekerjashowResult = false;
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
                _this.pesertaPekerjashowResult = false;
            });
        }
    };
    AddSppdPage.prototype.setPesertaPekerja = function (pesertaPekerjaSearchResult, i) {
        this.pesertaPekerjaindex = i;
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['value'] = pesertaPekerjaSearchResult['NM_JABATAN'] + " | " + pesertaPekerjaSearchResult['NM_JABATAN'];
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_USER'] = pesertaPekerjaSearchResult['ID_USER'];
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['NIPP'] = pesertaPekerjaSearchResult['NIPP'];
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['NAMA'] = pesertaPekerjaSearchResult['NAMA'];
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['NM_JABATAN'] = pesertaPekerjaSearchResult['NM_JABATAN'];
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_JABATAN'] = pesertaPekerjaSearchResult['ID_JABATAN'];
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_CABANG'] = pesertaPekerjaSearchResult['ID_CABANG'];
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['KD_PARA'] = pesertaPekerjaSearchResult['KD_PARA'];
        this.pesertaPekerjaList[this.pesertaPekerjaindex]['NAMA_CABANG'] = pesertaPekerjaSearchResult['NAMA_CABANG'];
        this.pesertaPekerjashowResult = false;
        //console.log(this.pesertaPekerjaList);
    };
    AddSppdPage.prototype.addPesertaEksternal = function () {
        //console.log('clicked');
        this.pesertaEksternalList.push({ value: '' });
    };
    AddSppdPage.prototype.removePesertaEksternal = function (i) {
        this.pesertaEksternalList.splice(i, 1);
    };
    AddSppdPage.prototype.getPengirim = function () {
        var _this = this;
        if (this.jabatanPengirim == '') {
            this.showResultPengirim = false;
        }
        else {
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_get_pengirim_sppd', {
                fStream: JSON.stringify({
                    "usernameEDI": __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                    "passwordEDI": __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                    "search": this.jabatanPengirim,
                    "id_jabatan": this.userdataTPK['data']['IDJABATAN'],
                    "atas": "1",
                    "bawah": "10"
                })
            }).then(function (result) {
                var responData = JSON.parse(String(result));
                //console.log(responData);
                if (responData['rcmsg'] == "SUCCESS") {
                    _this.searchResultPengirimList = [];
                    _this.searchResultPengirimList = responData['data'];
                    _this.showResultPengirim = true;
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
                _this.showResultPengirim = false;
            });
        }
    };
    AddSppdPage.prototype.setPengirim = function (data) {
        this.pengirim = data;
        this.jabatanPengirim = data['NM_JABATAN'];
        // console.log(this.jabatanPengirim);
        // console.log(this.pengirim);
        this.showResultPengirim = false;
    };
    AddSppdPage.prototype.submit = function () {
        var _this = this;
        var err = [];
        if (this.pengirim == null) {
            err.push("Pengirim");
        }
        if (this.tanggalMulai == '' || this.tanggalMulai == null) {
            err.push("Tanggal Mulai");
        }
        if (this.tanggalSelesai == '' || this.tanggalSelesai == null) {
            err.push("Tanggal Selesai");
        }
        if (this.lokasi == '' || this.lokasi == null) {
            err.push("Lokasi");
        }
        if (this.perihal == '' || this.perihal == null) {
            err.push("Perihal");
        }
        // if (this.lampiran == '' || this.lampiran == null) {
        //   err.push("Lampiran");
        // }
        if (this.prioritas == '' || this.prioritas == null) {
            err.push("Prioritas");
        }
        if (this.klasifikasi == '' || this.klasifikasi == null) {
            err.push("Klasifikasi");
        }
        if (this.komentar == '' || this.komentar == null) {
            err.push("Komentar");
        }
        if (this.pemeriksaList.length > 1) {
            for (var i = 0; i < this.pemeriksaList.length; i++) {
                if (this.pemeriksaList[i]['value'] == '') {
                    err.push('Pemeriksa');
                    break;
                }
            }
        }
        if ((this.pesertaJabatanList.length == 1 && this.pesertaJabatanList[0]['value'] == '') && (this.pesertaPekerjaList.length == 1 && this.pesertaPekerjaList[0]['value'] == '') && (this.pesertaEksternalList.length == 1 && this.pesertaEksternalList[0]['value'] == '')) {
            err.push('Peserta SPPD');
        }
        else {
            if (this.pesertaJabatanList.length > 1) {
                for (var i = 0; i < this.pesertaJabatanList.length; i++) {
                    if (this.pesertaJabatanList[i]['value'] == '') {
                        err.push('Peserta Jabatan');
                        break;
                    }
                }
            }
            if (this.pesertaJabatanList.length > 1) {
                for (var i = 0; i < this.pesertaPekerjaList.length; i++) {
                    if (this.pesertaPekerjaList[i]['value'] == '') {
                        err.push('Peserta Pekerja');
                        break;
                    }
                }
            }
            if (this.pesertaJabatanList.length > 1) {
                for (var i = 0; i < this.pesertaEksternalList.length; i++) {
                    if (this.pesertaEksternalList[i]['value'] == '') {
                        err.push('Peserta Jabatan');
                        break;
                    }
                }
            }
        }
        var showErr = '';
        for (var i = 0; i < err.length; i++) {
            if (i == err.length - 1) {
                showErr = showErr + err[i];
            }
            else {
                showErr = showErr + err[i] + ', ';
            }
        }
        if (err.length > 0) {
            var alertError = this.alertCtrl.create({
                title: 'Peringatan',
                subTitle: 'Field ' + showErr + ' tidak boleh kosong !',
                cssClass: 'alert',
                buttons: [
                    {
                        text: 'TUTUP',
                        role: 'cancel',
                        handler: function () {
                            //console.log('Cancel clicked');
                        }
                    }
                ]
            });
            alertError.present();
        }
        else {
            var eksternal = [];
            if (this.pesertaPekerjaList[0]['value'] != '') {
                for (var i = 0; i < this.pesertaEksternalList.length; i++) {
                    eksternal.push(this.pesertaEksternalList[i]['value']);
                }
            }
            var alert_1 = this.alertCtrl.create({
                subTitle: 'Anda yakin ingin mengajukan SPPD ?',
                cssClass: 'alert',
                buttons: [
                    {
                        text: 'TIDAK',
                        role: 'cancel',
                        handler: function () {
                            //console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'YA',
                        handler: function () {
                            var loading = _this.loadingCtrl.create({
                                spinner: 'dots',
                                content: "Mengirim pengajuan SPPD, mohon tunggu...",
                                cssClass: 'transparent',
                                dismissOnPageChange: true
                            });
                            loading.present();
                            _this.soapService
                                .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_add_sppd', {
                                fStream: JSON.stringify({
                                    "usernameEDI": __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                                    "passwordEDI": __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                                    "nipp_pembuat": _this.userdataTPK['data']['NIPP'],
                                    "nama_pembuat": _this.userdataTPK['data']['NAMA'],
                                    "id_pembuat": _this.userdataTPK['data']['IDUSER'],
                                    "tgl_surat": _this.tglPengajuan,
                                    "tgl_mulai": _this.tanggalMulai,
                                    "tgl_selesai": _this.tanggalSelesai,
                                    "lokasi": _this.lokasi,
                                    "perihal": _this.perihal,
                                    "lampiran": _this.lampiran,
                                    "prioritas": _this.prioritas,
                                    "klasifikasi": _this.klasifikasi,
                                    "komentar": _this.komentar,
                                    "pengirim": _this.pengirim,
                                    "pemeriksa": (_this.pemeriksaList[0]['value'] != '') ? _this.pemeriksaList : [],
                                    "peserta_jabatan": (_this.pesertaJabatanList[0]['value'] != '') ? _this.pesertaJabatanList : [],
                                    "peserta_pekerja": (_this.pesertaPekerjaList[0]['value'] != '') ? _this.pesertaPekerjaList : [],
                                    "peserta_eksternal": eksternal
                                })
                            })
                                .then(function (result) {
                                var responData = JSON.parse(String(result));
                                //console.log(responData);
                                if (responData['rcmsg'] == "SUCCESS") {
                                    if (_this.fileType != null) {
                                        if ((_this.imageURI != '') || (_this.fileName != null)) {
                                            _this.upload(responData['data']['ID_SURAT'], loading);
                                        }
                                        else {
                                            var toast = _this.toastCtrl.create({
                                                message: 'Pengajuan SPPD Berhasil.',
                                                duration: 3000,
                                                position: 'bottom'
                                            });
                                            _this.pushNotif();
                                            toast.present();
                                            loading.dismiss();
                                            _this.viewCtrl.dismiss({ isSuccess: true });
                                        }
                                    }
                                    else {
                                        var toast = _this.toastCtrl.create({
                                            message: 'Pengajuan SPPD Berhasil.',
                                            duration: 3000,
                                            position: 'bottom'
                                        });
                                        _this.pushNotif();
                                        toast.present();
                                        loading.dismiss();
                                        _this.viewCtrl.dismiss({ isSuccess: true });
                                    }
                                }
                                else {
                                    var toast = _this.toastCtrl.create({
                                        message: "Gagal mengajukan SPPD, silahkan coba kembali.",
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                    loading.dismiss();
                                }
                            })
                                .catch(function (error) {
                                var toast = _this.toastCtrl.create({
                                    message: 'Input gagal, silahkan periksa koneksi internet anda.',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                loading.dismiss();
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    AddSppdPage.prototype.openChooser = function () {
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
    AddSppdPage.prototype.takeImage = function (sourceType) {
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
    AddSppdPage.prototype.copyFileToLocalDir = function (namePath, currentName, filename) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(function (success) {
            _this.imageFileName = filename;
            // console.log(this.imageFileName);
        }, function (error) {
            // console.log('Error while storing file.');
        });
    };
    AddSppdPage.prototype.createFileName = function () {
        if (this.fileType == 'gambar') {
            var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        }
        else {
            // console.log('error disini');
        }
        // console.log(newFileName);
        return newFileName;
    };
    AddSppdPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return this.file.dataDirectory + img;
        }
    };
    AddSppdPage.prototype.upload = function (idSurat, loader) {
        var _this = this;
        // console.log(this.fileDocPath);
        if (this.fileType == 'file') {
            var fileTransfer = this.transfer.create();
            var options = {
                fileKey: "file",
                fileName: this.fileName,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { id_surat: idSurat }
            };
            fileTransfer.upload(this.fileDocPath, 'http://103.234.195.187/e-office-itpk/api_itpk/f116_eoffice_upload_attachment_sppd.php', options)
                .then(function (data) {
                // console.log(JSON.stringify(data));
                // console.log(" Uploaded Successfully");    
                if (data['responseCode'] == 200) {
                    var responData = JSON.parse(String(data['response']));
                    // console.log(responData);
                    if (responData['rcmsg'] == 'SUCCESS') {
                        var toast = _this.toastCtrl.create({
                            message: 'Pengajuan SPPD Berhasil.',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        loader.dismiss();
                        _this.viewCtrl.dismiss({ isSuccess: true });
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        loader.dismiss();
                        _this.viewCtrl.dismiss({ isSuccess: true });
                    }
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                    _this.viewCtrl.dismiss({ isSuccess: true });
                }
            }, function (err) {
                // console.log("masuk sini");
                // console.log(err);
                var toast = _this.toastCtrl.create({
                    message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                _this.viewCtrl.dismiss({ isSuccess: true });
                // this.presentToast(err);
            });
        }
        else if (this.fileType == 'gambar') {
            // console.log(this.imageFileName);
            // console.log("image file path : " + this.pathForImage(this.imageFileName));
            var fileTransfer = this.transfer.create();
            var options = {
                fileKey: "file",
                fileName: this.fileName,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { id_surat: idSurat }
            };
            fileTransfer.upload(this.pathForImage(this.imageFileName), 'http://103.234.195.187/e-office-itpk/api_itpk/f116_eoffice_upload_attachment_sppd.php', options)
                .then(function (data) {
                if (data['responseCode'] == 200) {
                    var responData = JSON.parse(String(data['response']));
                    // console.log(responData);
                    if (responData['rcmsg'] == 'SUCCESS') {
                        var toast = _this.toastCtrl.create({
                            message: 'Pengajuan SPPD Berhasil.',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        loader.dismiss();
                        _this.viewCtrl.dismiss({ isSuccess: true });
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        loader.dismiss();
                        _this.viewCtrl.dismiss({ isSuccess: true });
                    }
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    loader.dismiss();
                    _this.viewCtrl.dismiss({ isSuccess: true });
                }
            }, function (err) {
                // console.log("masuk sini");
                // console.log(err);
                var toast = _this.toastCtrl.create({
                    message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                _this.viewCtrl.dismiss({ isSuccess: true });
            });
        }
    };
    AddSppdPage.prototype.pushNotif = function () {
        var pemeriksaListFix = [];
        if (this.pemeriksaList.length > 1) {
            for (var i = 0; i < this.pemeriksaList.length; i++) {
                if (this.pemeriksaList[i]['value'] != '') {
                    pemeriksaListFix.push(this.pemeriksaList[i]);
                }
            }
        }
        // console.log(pemeriksaListFix);
        var id_user = '';
        if (pemeriksaListFix.length > 0) {
            id_user = pemeriksaListFix['ID_USER'];
        }
        else {
            id_user = this.pengirim['ID_USER'];
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* api_base_url */], 'eoffice_notif_imove', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_5__config__["c" /* api_pass */],
                id_user: [id_user],
                data: {
                    "res": "InboxPage"
                },
                heading: {
                    "en": "Pengajuan SPPD"
                },
                content: {
                    "en": "Pengajuan SPPD dari " + this.userdataTPK['data']['NAMA'] + " membutuhkan persetujuan. \nPerihal : " + this.perihal
                },
            })
        }).then(function (result) {
            var hasil = JSON.parse(String(result));
        }).catch(function (error) {
        });
    };
    AddSppdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-sppd',
            providers: [__WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-sppd/add-sppd.html"*/'<!--\n  Generated template for the AddSppdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light">Buat SPPD</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <span ion-text text-wrap class="font-small">\n          <b>Kepala Surat</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Tanggal\n      </span> <br>\n      <span ion-text text-wrap class="font-small">\n        {{ tglPengajuan }}\n      </span> <br>\n\n      <span ion-text text-wrap class="font-mini" color="color4">\n        Klasifikasi Masalah\n      </span> <br>\n      <span ion-text text-wrap class="font-small">\n        UM.340-Surat perintah jalan/ Pindah\n      </span> <br>\n\n      <div class="row">\n        <div col="col">\n          <ion-item>\n            <ion-label stacked>Tanggal Mulai</ion-label>\n            <ion-input type="text" [readonly]="true" (ionFocus)="showDatePicker(1)" (click)="showDatePicker(1)"\n              [(ngModel)]="tanggalMulai"></ion-input>\n          </ion-item>\n        </div>\n        <div col="col">\n          <div style="\n            text-align: center;\n            width: 100%;                    \n            height: 100%;          \n            margin-top: 45px;\n            font-size: 1.2rem;">\n            <span ion-text text-wrap color="color4">\n              s/d\n            </span>\n          </div>\n        </div>\n        <div col="col">\n          <ion-item>\n            <ion-label stacked>Tanggal Selesai</ion-label>\n            <ion-input type="text" [readonly]="true" (ionFocus)="showDatePicker(2)" (click)="showDatePicker(2)"\n              [(ngModel)]="tanggalSelesai"></ion-input>\n          </ion-item>\n        </div>\n\n        <ion-item>\n          <span item-left>\n            <img src="assets/imgs/menu-icon/alamat.png" class="icons">\n          </span>\n          <ion-label stacked>Lokasi</ion-label>\n          <ion-textarea rows="3" [(ngModel)]="lokasi"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <span item-left>\n            <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n          </span>\n          <ion-label stacked>Perihal</ion-label>\n          <ion-input type="text" [(ngModel)]="perihal"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <span item-left>\n            <img src="assets/imgs/logo/document-icon.png" class="icons">\n          </span>\n          <ion-label stacked>Lampiran</ion-label>\n          <ion-input type="text" [(ngModel)]="lampiran"></ion-input>\n        </ion-item>\n\n        <div class="row" style="width:100%;">\n          <div class="col">\n            <ion-item>\n              <ion-label stacked>Prioritas</ion-label>\n              <ion-select [(ngModel)]="prioritas" placeholder="">\n                <ion-option value="0">Normal</ion-option>\n                <ion-option value="1">Penting</ion-option>\n                <ion-option value="2">Mendesak</ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class="col">\n            <ion-item>\n              <ion-label stacked>Klasifikasi</ion-label>\n              <ion-select [(ngModel)]="klasifikasi" placeholder="">\n                <ion-option value="0">Biasa</ion-option>\n                <ion-option value="1">Rahasia</ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <span ion-text text-wrap class="font-small">\n          <b>Pengirim</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n      <ion-item>\n        <span item-left>\n          <img src="assets/imgs/logo/nipp.png" class="icons">\n        </span>\n        <ion-label stacked>Jabatan</ion-label>\n        <ion-input type="text" [(ngModel)]="jabatanPengirim" (keyup)="getPengirim()"></ion-input>\n      </ion-item>\n      <div *ngIf="searchResultPengirimList.length > 0 && showResultPengirim">\n        <ion-item *ngFor="let searchResultPengirim of searchResultPengirimList" no-margin>\n          <span ion-text text-wrap style="font-size:1.3rem !important;" (click)="setPengirim(searchResultPengirim)">\n            {{searchResultPengirim[\'NM_JABATAN\'] }} - {{ searchResultPengirim[\'NAMA\'] }}</span>\n        </ion-item>\n      </div>\n\n      <br>\n\n      <div *ngIf=\'pengirim != null\'>\n        <div class="row">\n          <div class="col">\n            <span ion-text text-wrap class="font-mini" color="color4">\n              NIPP\n            </span> <br>\n            <span ion-text text-wrap class="font-small">\n              {{pengirim[\'NIPP\']}}\n            </span>\n          </div>\n          <div class="col">\n            <span ion-text text-wrap class="font-mini" color="color4">\n              Nama\n            </span> <br>\n            <span ion-text text-wrap class="font-small">\n              {{pengirim[\'NAMA\']}}\n            </span> <br>\n          </div>\n        </div>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Divisi\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n          {{pengirim[\'BAWAHAN\']}}\n        </span> <br>\n\n        <span ion-text text-wrap class="font-mini" color="color4">\n          Direktorat\n        </span> <br>\n        <span ion-text text-wrap class="font-small">\n          {{pengirim[\'ATASAN\']}}\n        </span> <br>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <span ion-text text-wrap class="font-small">\n          <b>Penerima</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n      <span ion-text text-wrap class="font-small">\n        Direktur Keuangan & SDM\n      </span> <br>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <span ion-text text-wrap class="font-small">\n          <b>Pemeriksa</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n      <div *ngFor="let pemeriksa of pemeriksaList; let i = index" margin-top>\n        <ion-item>\n          <span item-left>\n            <img src="assets/imgs/logo/pemeriksa.png" class="icons">\n          </span>\n          <ion-label stacked>Pemeriksa ke - {{ i+1 }}</ion-label>\n          <ion-input type="text" placeholder="" (keyup)="getPemeriksa(i, \'\')" (ionFocus)="checkFocus(i)"\n            [(ngModel)]="pemeriksa.value"></ion-input>\n\n          <ion-icon style="z-index:999; font-size:2.3rem; padding:8px 0 8px 0;" *ngIf="i == 0" name="add"\n            (click)="addPemeriksa()" color="primary" item-right></ion-icon>\n          <ion-icon style="z-index:999; font-size:2.3rem; padding:8px 0 8px 0;" *ngIf="i > 0" name="md-remove"\n            color="danger" (click)="removePemeriksa(i)" item-right>\n          </ion-icon>\n        </ion-item>\n\n        <div *ngIf="pemeriksaSearchResultList.length > 0 && showResult && pemeriksaInputFocused == i ">\n          <ion-item *ngFor="let pemeriksaSearchResult of pemeriksaSearchResultList" no-margin\n            (click)="setPemeriksa(pemeriksaSearchResult,i)">\n            <span ion-text text-wrap style="font-size:1.3rem !important;">\n              {{pemeriksaSearchResult[\'NAMA\'] }} - {{ pemeriksaSearchResult[\'NM_JABATAN\'] }}</span>\n          </ion-item>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <span ion-text text-wrap class="font-small">\n          <b>Peserta SPPD</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n      <div *ngFor="let pesertaJabatan of pesertaJabatanList let i = index" margin-top>\n        <ion-item>\n          <span item-left>\n            <img src="assets/imgs/logo/peserta_jabatan.png" class="icons">\n          </span>\n          <ion-label stacked>Peserta Jabatan - {{ i+1 }}</ion-label>\n          <ion-input type="text" placeholder="" (keyup)="getPesertaJabatan(i, \'\')"\n            (ionFocus)="checkFocusPesertaJabatan(i)" [(ngModel)]="pesertaJabatan.value"></ion-input>\n\n          <ion-icon style="z-index:999; font-size:2.3rem; padding:8px 0 8px 0;" *ngIf="i == 0" name="add"\n            (click)="addPesertaJabatan()" color="primary" item-right></ion-icon>\n          <ion-icon style="z-index:999; font-size:2.3rem; padding:8px 0 8px 0;" *ngIf="i > 0" name="md-remove"\n            color="danger" (click)="removePesertaJabatan(i)" item-right>\n          </ion-icon>\n        </ion-item>\n\n        <div\n          *ngIf="pesertaJabatanSearchResultList.length > 0 && pesertaJabatanshowResult && pesertaJabatanInputFocused == i ">\n          <ion-item *ngFor="let pesertaJabatanSearchResult of pesertaJabatanSearchResultList" no-margin\n            (click)="setPesertaJabatan(pesertaJabatanSearchResult,i)">\n            <span ion-text text-wrap style="font-size:1.3rem !important;">\n              {{ pesertaJabatanSearchResult[\'NM_JABATAN\'] }}</span>\n          </ion-item>\n        </div>\n      </div>\n\n      <br>\n\n      <div *ngFor="let pesertaPekerja of pesertaPekerjaList let i = index" margin-top>\n        <ion-item>\n          <span item-left>\n            <img src="assets/imgs/logo/peserta_pekerja.png" class="icons">\n          </span>\n          <ion-label stacked>Peserta Pekerja - {{ i+1 }}</ion-label>\n          <ion-input type="text" placeholder="" (keyup)="getPesertaPekerja(i, \'\')"\n            (ionFocus)="checkFocusPesertaPekerja(i)" [(ngModel)]="pesertaPekerja.value"></ion-input>\n\n          <ion-icon style="z-index:999; font-size:2.3rem; padding:8px 0 8px 0;" *ngIf="i == 0" name="add"\n            (click)="addPesertaPekerja()" color="primary" item-right></ion-icon>\n          <ion-icon style="z-index:999; font-size:2.3rem; padding:8px 0 8px 0;" *ngIf="i > 0" name="md-remove"\n            color="danger" (click)="removePesertaPekerja(i)" item-right>\n          </ion-icon>\n        </ion-item>\n\n        <div\n          *ngIf="pesertaPekerjaSearchResultList.length > 0 && pesertaPekerjashowResult && pesertaPekerjaInputFocused == i ">\n          <ion-item *ngFor="let pesertaPekerjaSearchResult of pesertaPekerjaSearchResultList" no-margin\n            (click)="setPesertaPekerja(pesertaPekerjaSearchResult,i)">\n            <span ion-text text-wrap style="font-size:1.3rem !important;">\n              {{ pesertaPekerjaSearchResult[\'NAMA\'] }} | {{ pesertaPekerjaSearchResult[\'NM_JABATAN\'] }}</span>\n          </ion-item>\n        </div>\n      </div>\n\n      <br>\n\n      <div *ngFor="let pesertaEksternal of pesertaEksternalList let i = index" margin-top>\n        <ion-item>\n          <span item-left>\n            <img src="assets/imgs/logo/peserta_eksternal.png" class="icons">\n          </span>\n          <ion-label stacked>Peserta Eksternal - {{ i+1 }}</ion-label>\n          <ion-input type="text" placeholder="" [(ngModel)]="pesertaEksternal.value"></ion-input>\n\n          <ion-icon style="z-index:999; font-size:2.3rem; padding:8px 0 8px 0;" *ngIf="i == 0" name="add"\n            (click)="addPesertaEksternal()" color="primary" item-right></ion-icon>\n          <ion-icon style="z-index:999; font-size:2.3rem; padding:8px 0 8px 0;" *ngIf="i > 0" name="md-remove"\n            color="danger" (click)="removePesertaEksternal(i)" item-right>\n          </ion-icon>\n        </ion-item>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <span ion-text text-wrap class="font-small">\n          <b>Komentar</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n\n      <ion-item>\n        <span item-left>\n          <img src="assets/imgs/logo/perihal.png" class="icons">\n        </span>\n        <ion-label stacked>komentar</ion-label>\n        <ion-textarea rows="3" [(ngModel)]="komentar"></ion-textarea>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-card class="my-card">\n    <ion-card-content>\n      <div class="header-text">\n        <span ion-text text-wrap class="font-small">\n          <b>Upload File (Optional)</b>\n        </span>\n      </div>\n      <div class="garis"></div>\n\n      <ion-item>\n        <span item-left>\n          <img src="assets/imgs/logo/document-icon.png" class="icons">\n        </span>\n        <ion-label stacked>Upload File</ion-label>\n        <ion-select [(ngModel)]="fileType" cancelText="Cancel" okText="OK">\n          <div>\n            <ion-option value="file">File</ion-option>\n            <ion-option value="gambar">Foto</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n\n      <div *ngIf="fileType == \'gambar\'">\n        <div class="image-container">\n          <img (click)="takeImage(0)" class="photo" src="{{ imageShow }}" />\n          <span ion-text style="text-align:center;color:gray;">Upload Foto (png, jpg, jpeg)</span>\n        </div>\n      </div>\n      <ion-item *ngIf="fileType == \'file\'">\n        <ion-label stacked>Upload File (docx, doc, xlxs, xls,xlsx, pdf)</ion-label>\n        <ion-input type="text" [(ngModel)]="fileName" [readonly]="true" (ionFocus)="openChooser()"\n          (click)="openChooser()" placeholder="pilih file"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n\n  <div class="row">\n    <div class="col" style="padding:5px !important;">\n      <button ion-button full icon-start color="danger" style="border-radius: 5px;" (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n        Batal\n      </button>\n    </div>\n    <div class="col" style="padding:5px !important;">\n      <button ion-button full icon-end style="border-radius: 5px;" [disabled]=\'disable\' (click)="submit()">\n        Kirim\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-sppd/add-sppd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */]])
    ], AddSppdPage);
    return AddSppdPage;
}());

//# sourceMappingURL=add-sppd.js.map

/***/ })

});
//# sourceMappingURL=71.js.map