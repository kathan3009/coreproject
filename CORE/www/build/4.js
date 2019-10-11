webpackJsonp([4],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeditationPageModule", function() { return MeditationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meditation__ = __webpack_require__(614);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeditationPageModule = /** @class */ (function () {
    function MeditationPageModule() {
    }
    MeditationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meditation__["a" /* MeditationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meditation__["a" /* MeditationPage */]),
            ],
        })
    ], MeditationPageModule);
    return MeditationPageModule;
}());

//# sourceMappingURL=meditation.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeditationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
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
 * Generated class for the MeditationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeditationPage = /** @class */ (function () {
    function MeditationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.category = "gear";
    }
    MeditationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeditationPage');
        if (this.category == "gear") {
            this.cards = new Array(10);
        }
        else if (this.category == "clothing") {
            this.cards = new Array(2);
        }
        else {
        }
    };
    MeditationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meditation',template:/*ion-inline-start:"/Users/kathan/Desktop/CORE/src/pages/meditation/meditation.html"*/'<ion-header no-border>\n    <ion-navbar  color=\'navbarColor\'>\n      \n      <ion-buttons start>\n        <button ion-button menuToggle left>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      \n      <ion-title>News</ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding fullscreen>\n \n\n\n\n    <div class="header-image"></div>\n\n    <div class="main-content">\n\n        <ion-segment [(ngModel)]="category">\n            <ion-segment-button value="gear">\n                Gear\n            </ion-segment-button>\n            <ion-segment-button value="clothing">\n                Clothing\n            </ion-segment-button>\n            <ion-segment-button value="nutrition">\n                Nutrition\n            </ion-segment-button>\n        </ion-segment>\n\n        <ion-card *ngFor="let card of cards">\n\n          <ion-item>\n            <ion-avatar item-left>\n          <img src="../../assets/imgs/logo.png"/>\n            </ion-avatar>\n            <h2>Siddhya Al-Haq</h2>\n            <p>October 11, 2019</p>\n          </ion-item>\n\n          <img src="http://placehold.it/500x200" />\n\n          <ion-card-content>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n          </ion-card-content>\n\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div>12 Likes</div>\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>4 Comments</div>\n              </button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-note>\n                11h ago\n              </ion-note>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n\n    </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/kathan/Desktop/CORE/src/pages/meditation/meditation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MeditationPage);
    return MeditationPage;
}());

//# sourceMappingURL=meditation.js.map

/***/ })

});
//# sourceMappingURL=4.js.map