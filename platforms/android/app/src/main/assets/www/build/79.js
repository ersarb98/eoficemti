webpackJsonp([79],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenTeamHadirkoePageModule", function() { return AbsenTeamHadirkoePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__absen_team_hadirkoe__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbsenTeamHadirkoePageModule = /** @class */ (function () {
    function AbsenTeamHadirkoePageModule() {
    }
    AbsenTeamHadirkoePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__absen_team_hadirkoe__["a" /* AbsenTeamHadirkoePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__absen_team_hadirkoe__["a" /* AbsenTeamHadirkoePage */]),
            ],
        })
    ], AbsenTeamHadirkoePageModule);
    return AbsenTeamHadirkoePageModule;
}());

//# sourceMappingURL=absen-team-hadirkoe.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenTeamHadirkoePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(202);
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
 * Generated class for the AbsenTeamHadirkoePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbsenTeamHadirkoePage = /** @class */ (function () {
    function AbsenTeamHadirkoePage(navCtrl, navParams, soapService, storage, datepipe, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.storage = storage;
        this.datepipe = datepipe;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
        this.fakeUsers = new Array(5);
        this.absenList = [];
        this.notAbsenList = [];
        this.isPageAbsen = true;
        this.isPageNotAbsen = false;
        this.isAtasan = false;
        this.idUser = navParams.get('idUser');
        this.date = navParams.get('date');
        var split = this.date.split("-");
        this.dateConvert = new Date(split[2], split[1], split[0]);
        var weekday = new Array(7);
        weekday[0] = "Minggu";
        weekday[1] = "Senin";
        weekday[2] = "Selasa";
        weekday[3] = "Rabu";
        weekday[4] = "Kamis";
        weekday[5] = "Jumat";
        weekday[6] = "Sabtu";
        var month = new Array();
        month[0] = "Januari";
        month[1] = "Februari";
        month[2] = "Maret";
        month[3] = "April";
        month[4] = "Mei";
        month[5] = "Juni";
        month[6] = "Juli";
        month[7] = "Agustus";
        month[8] = "September";
        month[9] = "Oktober";
        month[10] = "November";
        month[11] = "Desember";
        console.log('get day : ' + this.dateConvert.getDay());
        console.log('get month : ' + this.dateConvert.getMonth());
        this.dayConvert = weekday[this.dateConvert.getDay()];
        this.monthConvert = month[this.dateConvert.getMonth()];
        this.dateConvert = split[0];
        this.yearConvert = split[2];
        console.log(this.dayConvert + ", " + this.dateConvert + " " + this.monthConvert + " " + this.yearConvert);
        console.log("dateconvert : " + this.dateConvert);
        this.getList(this.idUser, this.date);
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            console.log(_this.userdataTPK);
            if (_this.isEmptyObject(_this.userdataTPK['data']['LISTOFFICER'][0]) && _this.isEmptyObject(_this.userdataTPK['data']['DATA_BAWAHAN'][0]) && _this.isEmptyObject(_this.userdataTPK['data']['DATA_BAWAHAN_TNO'][0])) {
                _this.isAtasan = false;
            }
            else {
                _this.isAtasan = true;
            }
        });
    }
    AbsenTeamHadirkoePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbsenTeamHadirkoePage');
    };
    AbsenTeamHadirkoePage.prototype.getList = function (idUser, mydate) {
        var _this = this;
        this.isLoading = true;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["d" /* api_res */] + 'am8_team.php', {
            usernameEDI: __WEBPACK_IMPORTED_MODULE_2__config__["e" /* api_user */],
            passwordEDI: __WEBPACK_IMPORTED_MODULE_2__config__["c" /* api_pass */],
            id_user: idUser,
            tgl: mydate
        }).subscribe(function (data) {
            console.log(data);
            //var responData = JSON.parse(data); 
            if (data['rcmsg'] == 'SUCCESS') {
                _this.absenList = data['data']['ABSEN'];
                _this.notAbsenList = data['data']['NOT_ABSEN'];
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Gagal mendapatkan data, coba kembali.',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
        });
    };
    AbsenTeamHadirkoePage.prototype.openFilter = function () {
        this.navCtrl.push('SearchTeamAbsenPage');
    };
    AbsenTeamHadirkoePage.prototype.goToAbsenMobileDetail = function (absen) {
        this.navCtrl.push('AbsenMobileDetailPage', {
            id_user: absen['ID_USER'],
            nipp: absen['NIPP'],
            nama: absen['NAMA'],
            shift: "",
            date: absen['SHIFT_DATE'],
            fromPage: "AbsenListPage"
        });
    };
    AbsenTeamHadirkoePage.prototype.openAddressPage = function () {
        this.navCtrl.push('AddressBawahanPage', {});
    };
    AbsenTeamHadirkoePage.prototype.openSudahAbsen = function () {
        this.isPageAbsen = true;
        this.isPageNotAbsen = false;
    };
    AbsenTeamHadirkoePage.prototype.openBelumAbsen = function () {
        this.isPageAbsen = false;
        this.isPageNotAbsen = true;
    };
    AbsenTeamHadirkoePage.prototype.isEmptyObject = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    AbsenTeamHadirkoePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-absen-team-hadirkoe',
            providers: [__WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/absen-team-hadirkoe/absen-team-hadirkoe.html"*/'<!--\n  Generated template for the AbsenTeamHadirkoePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="light" class="fw500">Team</span>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="openAddressPage()" *ngIf=\'isAtasan == true\' >\n        <!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n        <img src="assets/flat-icon/address.png" style="    max-height: 27px;\n				margin-right: 5px;">\n      </button>\n      <button ion-button (click)="openFilter()">\n        <!-- <ion-icon style="font-size:2.4rem;" name="md-analytics" color="light"></ion-icon> -->\n        <img src="assets/imgs/menu-icon/absensi_white.png" style="    max-height: 27px;\n				margin-right: 5px;">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="isLoading == false" style="margin-top: 16px;margin-bottom: 10px;">\n    <table width="100%">\n      <tr>\n        <td width="100%" align="center">          \n          <table>\n            <tr>\n              <td valign="center" style="vertical-align: middle;">\n                <img style="width: 20px;\n                height: auto;          \n                margin-right: 5px;" src="assets/imgs/menu-icon/jumHari.png" />              \n              </td>\n              <td valign="center" style="vertical-align: middle;">\n                <span *ngIf="absenList.length != 0" ion-text text-wrap class="font2">{{ absenList[0][\'DATE\'] }}</span>\n                <span *ngIf="absenList.length == 0" ion-text text-wrap class="font2">{{ dayConvert }}, {{this.dateConvert}} {{monthConvert}} {{yearConvert}}</span>\n              </td>\n            </tr>\n          </table>          \n        </td>\n      </tr>    \n    </table>\n\n    <table width="100%">\n      <tr>\n        <td align="right">\n          <button ion-button outline class="my-button" color="secondary" (click)="openSudahAbsen()">\n            Sudah Absen            \n          </button>\n        </td> \n        <td align="left">\n          <button ion-button outline class="my-button" color="danger" (click)="openBelumAbsen()">\n            Belum Absen       \n          </button>\n        </td>        \n      </tr>   \n    </table>\n      \n    \n  </div>\n  <ion-list class="dining_List" *ngIf="absenList.length == 0  && isLoading == false && isPageAbsen == true">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data absen.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="notAbsenList.length == 0  && isLoading == false && isPageNotAbsen == true">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data belum absen.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="absenList.length != 0 && isLoading == false && isPageAbsen == true">\n    <ion-card *ngFor="let absen of absenList" class="my-card" (click)="goToAbsenMobileDetail(absen)">\n      <!-- <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] == null" src="{{absen[\'CHECK_IN_PHOTO\']}}" class="foto">\n      <img *ngIf="absen[\'CHECK_IN\'] == null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_OUT_PHOTO\']}}" class="foto">\n      <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_IN_PHOTO\']}}" class="foto"> -->\n      <ion-item>\n        <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] == null" src="{{absen[\'CHECK_IN_PHOTO\']}}"\n          class="foto-2" item-start>\n        <img *ngIf="absen[\'CHECK_IN\'] == null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_OUT_PHOTO\']}}"\n          class="foto-2" item-start>\n        <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_IN_PHOTO\']}}"\n          class="foto-2" item-start>\n        <span ion-text text-wrap class="font2"><b>{{ absen[\'NAMA\'] }}</b></span><br>\n        <span ion-text text-wrap style="font-size:1.2rem; color:gray;">\n          {{ absen[\'NM_JABATAN\'] }}\n        </span><br>\n        <table width="100%">\n          <tr>\n            <td width="50%">\n              <span ion-text text-wrap style="font-size:1.2rem; color:gray;">In :</span>\n              <!-- <div class="box" >\n                <img style="width: 25px;\n                  height: auto;          \n                  margin-right: 5px;" src="assets/flat-icon/checkin.png" /> \n                  <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] == null" class="font2"><b>-</b></span>  \n                  <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] != null" class="font2"><b>{{ absen[\'CHECK_IN\'] }}</b></span>  \n              </div> -->\n              <!-- <div class="box" >\n                <img style="width: 25px;\n                  height: auto;          \n                  margin-right: 5px;" src="assets/flat-icon/type_checkin.png" /> \n                  <span ion-text text-wrap *ngIf="absen[\'CHECK_IN_TYPE\'] == null" class="font2"><b>-</b></span>  \n                  <span ion-text text-wrap *ngIf="absen[\'CHECK_IN_TYPE\'] != null" class="font2"><b>{{ absen[\'CHECK_IN_TYPE\'] }}</b></span>  \n              </div> -->\n              <div>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN_TYPE\'] != null" class="font2"\n                  style="color:#00AF80;"><b>{{ absen[\'CHECK_IN_TYPE\'] }}</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] == null" class="font2">-</span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] != null"\n                  class="font2"><b>{{ absen[\'CHECK_IN\'] }}</b></span>\n              </div>\n            </td>\n            <td width="50%">\n              <span ion-text text-wrap style="font-size:1.2rem; color:gray;">Out :</span>\n              <!-- <div class="box">\n                <img style="width: 25px;\n                height: auto;          \n                margin-right: 5px;" src="assets/flat-icon/checkout.png" /> \n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] == null" class="font2"><b>-</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] != null" class="font2"><b>{{ absen[\'CHECK_OUT\'] }}</b></span>\n              </div> -->\n              <!-- <div class="box">\n                <img style="width: 25px;\n                height: auto;          \n                margin-right: 5px;" src="assets/flat-icon/type_checkout.png" /> \n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT_TYPE\'] == null" class="font2"><b>-</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT_TYPE\'] != null" class="font2"><b>{{ absen[\'CHECK_OUT_TYPE\'] }}</b></span>\n              </div> -->\n              <div>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT_TYPE\'] != null" class="font2"\n                  style="color:#FB5252;"><b>{{ absen[\'CHECK_OUT_TYPE\'] }}</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] == null" class="font2">-</span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] != null"\n                  class="font2"><b>{{ absen[\'CHECK_OUT\'] }}</b></span>\n              </div>\n            </td>\n          </tr>\n        </table>\n        <!-- <span ion-text text-wrap class="font">\n          {{ absen[\'Tanggal Mulai\'] }} <span ion-text text-wrap color="primary"><b>s/d</b></span>\n          {{ absen[\'Tanggal Selesai\'] }}\n        </span>\n        <span ion-text text-wrap style="font-size: 1.2rem;" color="primary" item-end><b>{{ absen[\'Status\'] }}</b></span> -->\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="notAbsenList.length != 0 && isLoading == false && isPageNotAbsen == true">\n    <ion-card *ngFor="let absen of notAbsenList" class="my-card">      \n      <ion-item>\n        <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] == null" src="{{absen[\'CHECK_IN_PHOTO\']}}"\n          class="foto-2" item-start>\n        <img *ngIf="absen[\'CHECK_IN\'] == null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_OUT_PHOTO\']}}"\n          class="foto-2" item-start>\n        <img *ngIf="absen[\'CHECK_IN\'] != null && absen[\'CHECK_OUT\'] != null" src="{{absen[\'CHECK_IN_PHOTO\']}}"\n          class="foto-2" item-start>\n        <span ion-text text-wrap class="font2"><b>{{ absen[\'NAMA\'] }}</b></span><br>\n        <span ion-text text-wrap style="font-size:1.2rem; color:gray;">\n          {{ absen[\'NM_JABATAN\'] }}\n        </span><br>\n        <table width="100%">\n          <tr>\n            <td width="50%">\n              <span ion-text text-wrap style="font-size:1.2rem; color:gray;">In :</span>               \n              <div>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN_TYPE\'] != null" class="font2"\n                  style="color:#00AF80;"><b>{{ absen[\'CHECK_IN_TYPE\'] }}</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] == null" class="font2">-</span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_IN\'] != null"\n                  class="font2"><b>{{ absen[\'CHECK_IN\'] }}</b></span>\n              </div>\n            </td>\n            <td width="50%">\n              <span ion-text text-wrap style="font-size:1.2rem; color:gray;">Out :</span>             \n              <div>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT_TYPE\'] != null" class="font2"\n                  style="color:#FB5252;"><b>{{ absen[\'CHECK_OUT_TYPE\'] }}</b></span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] == null" class="font2">-</span>\n                <span ion-text text-wrap *ngIf="absen[\'CHECK_OUT\'] != null"\n                  class="font2"><b>{{ absen[\'CHECK_OUT\'] }}</b></span>\n              </div>\n            </td>\n          </tr>\n        </table>        \n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'absenList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher> -->\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/absen-team-hadirkoe/absen-team-hadirkoe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AbsenTeamHadirkoePage);
    return AbsenTeamHadirkoePage;
}());

//# sourceMappingURL=absen-team-hadirkoe.js.map

/***/ })

});
//# sourceMappingURL=79.js.map