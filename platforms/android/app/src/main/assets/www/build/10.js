webpackJsonp([10],{

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailPageModule", function() { return SurveyDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_detail__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveyDetailPageModule = /** @class */ (function () {
    function SurveyDetailPageModule() {
    }
    SurveyDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__survey_detail__["a" /* SurveyDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__survey_detail__["a" /* SurveyDetailPage */]),
            ],
        })
    ], SurveyDetailPageModule);
    return SurveyDetailPageModule;
}());

//# sourceMappingURL=survey-detail.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soap_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_date_picker__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(21);
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
 * Generated class for the SurveyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyDetailPage = /** @class */ (function () {
    function SurveyDetailPage(navCtrl, navParams, soapService, loadingCtrl, storage, alertCtrl, modalCtrl, toastCtrl, datePicker, datePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.soapService = soapService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.datePicker = datePicker;
        this.datePipe = datePipe;
        this.questionList = [];
        this.isLoading = true;
        this.answerList = [];
        this.storage.get('userdataTPK').then(function (val) {
            _this.userdataTPK = val;
        });
        this.survey_header = navParams.get('data');
    }
    SurveyDetailPage.prototype.ionViewDidEnter = function () {
        this.getQuestionList();
    };
    SurveyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyDetailPage');
    };
    SurveyDetailPage.prototype.getQuestionList = function () {
        var _this = this;
        this.isLoading = true;
        this.soapService
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_survey_detail', {
            fStream: JSON.stringify({
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_survey: this.survey_header['ID_SURVEY']
            })
        }).then(function (result) {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData['rcmsg'] == "SUCCESS") {
                if (responData['data'].length > 0) {
                    for (var i = 0; i < responData['data'].length; i++) {
                        _this.questionList.push(responData['data'][i]);
                        _this.answerList.push({
                            ID_QUESTION: responData['data'][i]['ID_QUESTION'],
                            TYPE: responData['data'][i]['TYPE'],
                            ID_OPTION: (responData['data'][i]['TYPE'] == 'LINEAR SCALE') ? responData['data'][i]['DATA'][0]['ID_OPTION'] : '',
                            ANSWER: ''
                        });
                    }
                    console.log(_this.answerList);
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mendapatkan data question, silahkan coba kembali.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal mendapatkan data question, periksa koneksi internet anda.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.isLoading = false;
        });
    };
    SurveyDetailPage.prototype.showDatePicker = function (questionType, index) {
        var _this = this;
        var mymode = '';
        if (questionType == 'DATETIME') {
            mymode = 'datetime';
        }
        else if (questionType == 'TIME') {
            mymode = 'time';
        }
        else if (questionType == 'DATE') {
            mymode = 'date';
        }
        else {
            mymode = 'datetime';
        }
        var mydate;
        this.datePicker.show({
            date: new Date(),
            mode: mymode,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (questionType == 'DATETIME') {
                mydate = _this.datePipe.transform(date, 'dd-MM-yyyy H:mm');
            }
            else if (questionType == 'TIME') {
                mydate = _this.datePipe.transform(date, 'H:mm');
            }
            else if (questionType == 'DATE') {
                mydate = _this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else {
                mydate = _this.datePipe.transform(date, 'dd-MM-yyyy H:mm');
            }
            _this.answerList[index]['ANSWER'] = mydate;
            console.log(_this.answerList);
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    SurveyDetailPage.prototype.submit = function () {
        var _this = this;
        var error = [];
        console.log(this.answerList);
        console.log(this.questionList[1]['TYPE']);
        for (var i = 0; i < this.questionList.length; i++) {
            if (this.questionList[i]['TYPE'] == 'TEXT' || this.questionList[i]['TYPE'] == 'LINEAR SCALE' || this.questionList[i]['TYPE'] == 'DATETIME' || this.questionList[i]['TYPE'] == 'TIME' || this.questionList[i]['TYPE'] == 'DATE') {
                if (this.answerList[i]['ANSWER'] == '') {
                    error.push('error ke-' + i);
                }
            }
            if (this.questionList[i]['TYPE'] == 'MULTIPLE' || this.questionList[i]['TYPE'] == 'CHECKBOX') {
                if (this.answerList[i]['ID_OPTION'] == '') {
                    error.push('error ke-' + i);
                }
            }
        }
        if (error.length > 0) {
            var toast = this.toastCtrl.create({
                message: 'semua pertanyaan harus dijawab !',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            console.log(JSON.stringify(this.answerList));
            var finalJson = {
                usernameEDI: __WEBPACK_IMPORTED_MODULE_4__config__["e" /* api_user */],
                passwordEDI: __WEBPACK_IMPORTED_MODULE_4__config__["c" /* api_pass */],
                id_survey: this.survey_header['ID_SURVEY'],
                nipp: this.userdataTPK['data']['NIPP'],
                answer_list: this.answerList
            };
            console.log(JSON.stringify(finalJson));
            var loading_1 = this.loadingCtrl.create({
                spinner: 'dots',
                content: "Mengirim survey...",
                cssClass: 'transparent',
                dismissOnPageChange: true
            });
            loading_1.present();
            this.soapService
                .post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* api_base_url */], 'eoffice_survey_answer', {
                fStream: JSON.stringify(finalJson)
            }).then(function (result) {
                var responData = JSON.parse(String(result));
                if (responData['rcmsg'] == "SUCCESS") {
                    var toast = _this.toastCtrl.create({
                        message: 'Sukses mengirim respon survey.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.navCtrl.pop();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Gagal mengirim survey, silahkan coba kembali.',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
                loading_1.present();
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({
                    message: 'Gagal mengirim survey, periksa koneksi internet anda.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                loading_1.present();
            });
        }
    };
    SurveyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-survey-detail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */]],template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/survey-detail/survey-detail.html"*/'<!--\n  Generated template for the questionDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span style="color:#FFF">Jawab question</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <span item-left>\n      <img src="assets/imgs/logo/survey.png" class="icons">\n    </span>\n    <ion-label stacked>Judul Survey</ion-label>\n    <ion-textarea rows="2" [(ngModel)]="survey_header[\'JUDUL_SURVEY\']" [readonly]="true"></ion-textarea>\n  </ion-item>\n\n\n  <div *ngIf="questionList.length == 0  && isLoading == false" class="my-card">\n    <span style="font-size:1.3rem">Tidak ada data survey.</span>\n  </div>  \n\n  <div *ngIf=\'questionList.length == 0 && isLoading == true\'>\n    <div class="animate-skeleton-background load-2"></div>\n    <div class="animate-skeleton-background load-3"></div>\n    <div class="animate-skeleton-background load-1"> </div>\n    <div class="animate-skeleton-background load-3"></div>\n    <div class="animate-skeleton-background load-3"></div>\n    <div class="animate-skeleton-background load-2"></div>\n    <div class="animate-skeleton-background load-1"> </div>\n  </div>\n\n  \n\n  <div *ngFor="let question of questionList; let i = index" class="my-card">\n    <!-- <ion-item>      \n      <ion-label stacked>Pertanyaan</ion-label>\n      <span ion-text text-wrap>{{ question[\'QUESTION\'] }}</span>\n      <ion-input type="text" [(ngModel)]="question[\'QUESTION\']"></ion-input>\n    </ion-item>     -->\n    <div>\n      <span ion-text text-wrap class="font3" >{{ question[\'QUESTION\'] }}</span>\n    </div>\n\n    <div *ngIf="question[\'TYPE\'] == \'TEXT\'">\n      <ion-item>\n        <ion-label stacked>Jawaban</ion-label>\n        <ion-input type="text" [(ngModel)]="answerList[i][\'ANSWER\']"></ion-input>\n      </ion-item>\n    </div>\n\n    <div *ngIf="question[\'TYPE\'] == \'MULTIPLE\'">\n      <ion-item>\n        <ion-label stacked>Jawaban</ion-label>\n        <ion-select [(ngModel)]="answerList[i][\'ID_OPTION\']" >\n          <ion-option *ngFor="let data of question[\'DATA\']; let j = index" value="{{ data[\'ID_OPTION\'] }}">{{ data[\'OPTION_TEXT\'] }}</ion-option>          \n        </ion-select>\n      </ion-item>\n    </div>\n\n    <div *ngIf="question[\'TYPE\'] == \'CHECKBOX\'">\n      <ion-item>\n        <ion-label stacked>Jawaban</ion-label>\n        <ion-select [(ngModel)]="answerList[i][\'ID_OPTION\']" multiple="true" >\n          <ion-option *ngFor="let data of question[\'DATA\']; let j = index" value="{{ data[\'ID_OPTION\'] }}">{{ data[\'OPTION_TEXT\'] }}</ion-option>          \n        </ion-select>\n      </ion-item>\n    </div>\n\n    <div *ngIf="question[\'TYPE\'] == \'LINEAR SCALE\'">\n      <ion-item>\n        <ion-range min="{{ question[\'DATA\'][0][\'MIN\'] }}" max="{{ question[\'DATA\'][0][\'MAX\'] }}" [(ngModel)]="answerList[i][\'ANSWER\']" color="secondary" snaps="true" >\n          <ion-label range-left class="font" >{{ question[\'DATA\'][0][\'LABEL_MIN\'] }}</ion-label>\n          <ion-label range-right class="font" >{{ question[\'DATA\'][0][\'LABEL_MAX\']  }}</ion-label>\n        </ion-range>\n      </ion-item>\n    </div>\n\n    <div *ngIf="question[\'TYPE\'] == \'DATETIME\'">\n      <ion-item>\n        <ion-label stacked>Pilih Tanggal dan waktu</ion-label>\n        <ion-input type="text" [readonly]="true" [(ngModel)]="answerList[i][\'ANSWER\']" (ionFocus)="showDatePicker(question[\'TYPE\'],i)"\n            (click)="showDatePicker(i)" placeholder=""></ion-input>\n      </ion-item>\n    </div>\n\n    <div *ngIf="question[\'TYPE\'] == \'DATE\'">\n      <ion-item>\n        <ion-label stacked>Pilih Tanggal</ion-label>\n        <ion-input type="text" [readonly]="true" [(ngModel)]="answerList[i][\'ANSWER\']" (ionFocus)="showDatePicker(question[\'TYPE\'],i)"\n            (click)="showDatePicker(question[\'TYPE\'],i)" placeholder=""></ion-input>\n      </ion-item>\n    </div>\n\n    <div *ngIf="question[\'TYPE\'] == \'TIME\'">\n      <ion-item>\n        <ion-label stacked>Pilih waktu</ion-label>\n        <ion-input type="text" [readonly]="true" [(ngModel)]="answerList[i][\'ANSWER\']" (ionFocus)="showDatePicker(question[\'TYPE\'],i)"\n            (click)="showDatePicker(question[\'TYPE\'],i)" placeholder=""></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <button ion-button margin-top margin-bottom icon-start style="width: 100% !important;" color="secondary" (click)="submit()">\n    <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n    Submit\n  </button>  \n  \n\n\n</ion-content>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/survey-detail/survey-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__soap_service__["a" /* SoapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* DatePipe */]])
    ], SurveyDetailPage);
    return SurveyDetailPage;
}());

//# sourceMappingURL=survey-detail.js.map

/***/ })

});
//# sourceMappingURL=10.js.map