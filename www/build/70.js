webpackJsonp([70],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSurveyPageModule", function() { return AddSurveyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_survey__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddSurveyPageModule = /** @class */ (function () {
    function AddSurveyPageModule() {
    }
    AddSurveyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_survey__["a" /* AddSurveyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_survey__["a" /* AddSurveyPage */]),
            ],
        })
    ], AddSurveyPageModule);
    return AddSurveyPageModule;
}());

//# sourceMappingURL=add-survey.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
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
 * Generated class for the AddSurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddSurveyPage = /** @class */ (function () {
    function AddSurveyPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.judulSurvey = '';
        this.type = '';
        this.number = 1;
        this.surveyList = [{
                number: this.number,
                question: '',
                type: '',
                data: null
            }];
    }
    AddSurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSurveyPage');
    };
    AddSurveyPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddSurveyPage.prototype.addQuestion = function () {
        var _this = this;
        this.number = this.number + 1;
        this.surveyList.push({
            number: this.number,
            question: '',
            type: '',
            data: null
        });
        setTimeout(function () {
            _this.content.scrollToBottom(1000);
        });
    };
    AddSurveyPage.prototype.delQuestion = function (index) {
        this.surveyList.splice(index, 1);
    };
    AddSurveyPage.prototype.nomorChange = function (number) {
        //console.log(number);
    };
    AddSurveyPage.prototype.onTypeChange = function (type, index) {
        this.surveyList[index]['data'] = null;
        if (type == 'text') {
        }
        else if (type == 'multiple' || type == 'checkbox') {
            this.surveyList[index]['data'] = [
                { pilihan: '' }
            ];
        }
        else if (type == 'linearScale') {
            this.surveyList[index]['data'] = [
                {
                    min: '1',
                    max: '10',
                    labelMin: '',
                    labelMax: ''
                }
            ];
        }
    };
    AddSurveyPage.prototype.addMultiple = function (index) {
        this.surveyList[index]['data'].push({ pilihan: '' });
    };
    AddSurveyPage.prototype.delMutiple = function (indexParent, indexChild) {
        this.surveyList[indexParent]['data'].splice(indexChild, 1);
    };
    AddSurveyPage.prototype.addCheckbox = function (index) {
        this.surveyList[index]['data'].push({ pilihan: '' });
    };
    AddSurveyPage.prototype.delCheckbox = function (indexParent, indexChild) {
        this.surveyList[indexParent]['data'].splice(indexChild, 1);
    };
    AddSurveyPage.prototype.convertInt = function (value) {
        return parseInt(value);
    };
    AddSurveyPage.prototype.submit = function () {
        var surveyData = [];
        surveyData.push({
            survey_title: this.judulSurvey,
            surveyList: this.surveyList
        });
        // console.log(JSON.stringify(surveyData));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], AddSurveyPage.prototype, "content", void 0);
    AddSurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-survey',template:/*ion-inline-start:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-survey/add-survey.html"*/'<!--\n  Generated template for the AddSurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span style="color:#FFF">Buat Survey Baru</span></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="ios-close-outline" style="color:#FFF"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <span item-left>\n      <img src="assets/imgs/logo/survey.png" class="icons">\n    </span>\n    <ion-label stacked>Judul Survey</ion-label>\n    <ion-textarea rows="2" [(ngModel)]="judulSurvey"></ion-textarea>\n  </ion-item>\n  <br>\n  <div *ngFor="let survey of surveyList; let i = index" class="my-card">\n    <ion-item style="width:50%;" lines>\n      <span item-left>\n        <img src="assets/imgs/menu-icon/number.png" class="icons">\n      </span>\n      <ion-label stacked>Nomor</ion-label>\n      <ion-select [(ngModel)]="survey[\'number\']" placeholder="" (ionChange)="nomorChange(survey[\'number\'])">\n        <ion-option *ngFor="let survey of surveyList; let i = index" value="{{ i+1 }}">{{ i+1 }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div class="delete-class" *ngIf="i > 0">\n      <button ion-button icon-only color="danger" clear style="border-radius: 8px !important;" (click)="delQuestion(i)">\n        <ion-icon name="md-close"></ion-icon>\n        <!-- Delete -->\n      </button>\n    </div>\n\n    <ion-item>\n      <span item-left>\n        <img src="assets/imgs/menu-icon/alasan.png" class="icons">\n      </span>\n      <ion-label stacked>Pertanyaan</ion-label>\n      <ion-input type="text" [(ngModel)]="survey[\'question\']"></ion-input>\n    </ion-item>\n\n    <ion-item style="width:80%;" lines>\n      <span item-left>\n        <img src="assets/imgs/menu-icon/jenis_cuti.png" class="icons">\n      </span>\n      <ion-label stacked>Tipe</ion-label>\n      <ion-select [(ngModel)]="survey[\'type\']" placeholder="" (ionChange)="onTypeChange(survey[\'type\'], i)">\n        <ion-option value="text">Text</ion-option>\n        <ion-option value="multiple">Multiple Choice</ion-option>\n        <ion-option value="checkbox">Checkbox</ion-option>\n        <ion-option value="linearScale">Linear Scale</ion-option>\n        <ion-option value="dateTime">Date TIme</ion-option>\n        <ion-option value="date">Date</ion-option>\n        <ion-option value="time">Time</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div *ngIf="survey[\'type\'] == \'text\'" class="answer-div">\n      <ion-item>\n        <ion-label color="color4">Jawaban text</ion-label>\n        <ion-input type="text" [readonly]="true"></ion-input>\n      </ion-item>\n    </div>\n\n    <div *ngIf="survey[\'type\'] == \'multiple\'" class="answer-div">\n      <ion-item *ngFor="let data of survey[\'data\']; let j = index">\n        <span item-left>\n          <img src="assets/imgs/logo/radio-button.png" class="sub-icons">\n        </span>\n        <ion-label color="color4" style="margin-right: 0 !important;">Pilihan {{ j+1 }} : </ion-label>\n        <ion-input type="text" [(ngModel)]="data[\'pilihan\']" ></ion-input>\n        <span item-end>\n          <button ion-button icon-only clear *ngIf="j == 0" (click)="addMultiple(i)">\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n\n          <button ion-button icon-only clear color="danger" *ngIf="j > 0" (click)="delMutiple(i, j)">\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        </span>\n      </ion-item>\n    </div>\n\n    <div *ngIf="survey[\'type\'] == \'checkbox\'" class="answer-div">\n      <ion-item *ngFor="let data of survey[\'data\']; let j = index">\n        <span item-left>\n          <img src="assets/imgs/logo/checkbox.png" class="sub-icons">\n        </span>\n        <ion-label color="color4" style="margin-right: 0 !important;">Pilihan {{ j+1 }} : </ion-label>\n        <ion-input type="text" [(ngModel)]="data[\'pilihan\']"></ion-input>\n        <span item-end>\n          <button ion-button icon-only clear *ngIf="j == 0" (click)="addCheckbox(i)">\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n\n          <button ion-button icon-only clear color="danger" *ngIf="j > 0" (click)="delCheckbox(i, j)">\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        </span>\n      </ion-item>\n    </div>\n\n    <div *ngIf="survey[\'type\'] == \'linearScale\'" class="answer-div">\n      <div *ngFor="let data of survey[\'data\']; let j = index" >\n        <table width="100%">\n          <tr>\n            <td width="37%">\n              <ion-item>\n                <ion-label stacked color="color4">min</ion-label>\n                <ion-input type="number" min="0" max="{{  convertInt(data[\'min\'])-1 }}"  [(ngModel)]="data[\'min\']"></ion-input>\n              </ion-item>\n            </td>\n            <td valign="center" align="center" width="26%" style="padding-top:28px !important" >\n              <span ion-text text-wrap color="color4" > to </span>\n            </td>\n            <td width="37%">\n              <ion-item>\n                <ion-label stacked color="color4">max</ion-label>\n                <ion-input type="number" min="{{ convertInt(data[\'min\'])+1 }}" max="100"  [(ngModel)]="data[\'max\']"></ion-input>\n              </ion-item>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <ion-item>\n                <ion-label stacked color="color4">Label min</ion-label>\n                <ion-input type="text" [(ngModel)]="data[\'labelMin\']"></ion-input>\n              </ion-item>\n            </td>\n            <td></td>\n            <td>\n              <ion-item>\n                <ion-label stacked color="color4">Label max</ion-label>\n                <ion-input type="text" [(ngModel)]="data[\'labelMax\']"></ion-input>\n              </ion-item>\n            </td>\n          </tr>\n        </table>\n      </div>    \n    </div>\n\n    <div *ngIf="survey[\'type\'] == \'dateTime\'" class="answer-div">\n      <ion-item>\n        <span item-left>\n          <img src="assets/imgs/menu-icon/end_date.png" class="icons">\n        </span>\n        <ion-label color="color4">Datetime</ion-label>\n        <ion-input type="text" [readonly]="true"></ion-input>\n      </ion-item>\n    </div>\n\n    <div *ngIf="survey[\'type\'] == \'date\'" class="answer-div">\n      <ion-item>\n        <span item-left>\n          <img src="assets/imgs/menu-icon/start_date.png" class="icons">\n        </span>\n        <ion-label color="color4">Date</ion-label>\n        <ion-input type="text" [readonly]="true"></ion-input>\n      </ion-item>\n    </div>\n\n    <div *ngIf="survey[\'type\'] == \'time\'" class="answer-div">\n      <ion-item>\n        <span item-left>\n          <img src="assets/imgs/logo/clock.png" class="icons">\n        </span>\n        <ion-label color="color4">Time</ion-label>\n        <ion-input type="text" [readonly]="true"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer style="padding:5px;">\n  <table width="100%">\n    <tr>\n      <td width="50%" align="center" (click)="addQuestion()">\n        <button ion-button icon-start style="width: 95% !important;">\n          <ion-icon name="ios-add"></ion-icon>\n          Tambah\n        </button>\n      </td>\n      <td width="50%" align="center">\n        <button ion-button icon-start style="width: 95% !important;" color="secondary" (click)="submit()">\n          <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n          Submit\n        </button>\n      </td>\n    </tr>\n  </table>\n</ion-footer>'/*ion-inline-end:"/Users/itadmin/Downloads/ERDA/POS_PPI/src/pages/add-survey/add-survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], AddSurveyPage);
    return AddSurveyPage;
}());

//# sourceMappingURL=add-survey.js.map

/***/ })

});
//# sourceMappingURL=70.js.map