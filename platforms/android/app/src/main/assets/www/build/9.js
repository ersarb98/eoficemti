webpackJsonp([9],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyListPageModule", function() { return SurveyListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_list__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveyListPageModule = /** @class */ (function () {
    function SurveyListPageModule() {
    }
    SurveyListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__survey_list__["a" /* SurveyListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__survey_list__["a" /* SurveyListPage */]),
            ],
        })
    ], SurveyListPageModule);
    return SurveyListPageModule;
}());

//# sourceMappingURL=survey-list.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
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
 * Generated class for the SurveyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyListPage = /** @class */ (function () {
    function SurveyListPage(navCtrl, navParams, popoverCtrl, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.surveyList = [];
        this.isLoading = true;
        this.fakeUsers = new Array(5);
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
            _this.getSurveyList('first', '');
        });
    }
    SurveyListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyListPage');
    };
    SurveyListPage.prototype.getSurveyList = function (type, functionName) {
        var _this = this;
        if (type == 'first' && functionName == '') {
            this.isLoading = true;
        }
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_survey_list', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                nipp: this.userdataTPK['data']['NIPP'],
                atas: this.batasAtas,
                bawah: this.batasBawah
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (type == 'refresh' && functionName != '') {
                    _this.surveyList = [];
                }
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.surveyList.push(responData['data'][i]);
                    }
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data survey, silahkan coba kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            if (type == 'first' && functionName == '') {
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan data survey, periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (type == 'first' && functionName == '') {
                _this.isLoading = false;
            }
            else if (type == 'infinite' && functionName != '') {
                functionName.complete();
            }
            else if (type == 'refresh' && functionName != '') {
                functionName.complete();
            }
            _this.isLoading = false;
        });
    };
    SurveyListPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.surveyList.length >= 10) {
            this.batasAtas = this.batasBawah + 1;
            this.batasBawah = this.batasBawah + 10;
            this.getSurveyList('infinite', infiniteScroll);
        }
        else {
            infiniteScroll.complete();
        }
    };
    SurveyListPage.prototype.doRefresh = function (refresher) {
        this.batasAtas = 1;
        this.batasBawah = 10;
        this.getSurveyList('refresh', refresher);
    };
    SurveyListPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create("MenuSurveyPage", {}, { cssClass: "my-popover" });
        popover.present({
            ev: myEvent
        });
    };
    SurveyListPage.prototype.goToDetail = function (data) {
        this.navCtrl.push("SurveyDetailPage", {
            "data": data
        });
    };
    SurveyListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-survey-list',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/survey-list/survey-list.html"*/'<!--\n  Generated template for the SurveyListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span style="color:#FFF">Survey</span></ion-title>\n\n    <!-- <ion-buttons end>\n      <button ion-button (click)="presentPopover($event)">\n        <ion-icon style="font-size:2.4rem;padding-right:16px;" name="more" color="light"></ion-icon>      \n      </button>\n    </ion-buttons> -->\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-list class="dining_List" *ngIf="surveyList.length == 0  && isLoading == false">\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <span style="font-size:1.3rem">Tidak ada data survey.</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list class="dining_List" *ngIf="surveyList.length != 0 && isLoading == false">\n    <ion-card *ngFor="let survey of surveyList" class="my-card" (click)="goToDetail(survey)">\n      <ion-item>\n        <span item-start>\n          <img src="assets/imgs/menu-icon/survey.png" class="icons">\n        </span>\n        <div>\n          <span ion-text text-wrap class="font3" color="danger" *ngIf="survey[\'JUDUL_SURVEY\'] == \'\' || survey[\'JUDUL_SURVEY\'] == null"><b> - </b></span>\n          <span ion-text text-wrap class="font3" color="danger"><b>{{ survey[\'JUDUL_SURVEY\'] }}</b></span><br />\n        </div>\n\n        <!-- <div>\n          <span ion-text text-wrap class="font3" *ngIf="survey[\'PEMBUAT\'] == \'\' || survey[\'PEMBUAT\'] == null"><b> - </b></span>\n          <span ion-text text-wrap class="font2">{{ survey[\'PEMBUAT\'] }}</span><br>\n        </div> -->\n        \n        <span ion-text text-wrap class="font" color="color4" >\n          {{ survey[\'TGL_MULAI\'] }} <span ion-text text-wrap color="color4"> s/d</span>\n          {{ survey[\'TGL_SELESAI\'] }}\n        </span>\n        <span ion-text text-wrap style="font-size: 1.2rem;" color="primary" item-end><b>{{ survey[\'STATUS\'] }}</b></span>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf=\'surveyList.length == 0 && isLoading == true\'>\n    <ion-card *ngFor=\'let fake of fakeUsers\'>\n      <ion-item>\n        <div class="animate-skeleton-background load-2"></div>\n        <div class="animate-skeleton-background load-3"></div>\n        <div class="animate-skeleton-background load-1"> </div>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n</ion-content>\n'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/survey-list/survey-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SurveyListPage);
    return SurveyListPage;
}());

//# sourceMappingURL=survey-list.js.map

/***/ })

});
//# sourceMappingURL=9.js.map