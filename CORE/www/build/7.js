webpackJsonp([7],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsPageModule", function() { return LessonsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lessons__ = __webpack_require__(608);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LessonsPageModule = /** @class */ (function () {
    function LessonsPageModule() {
    }
    LessonsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lessons__["a" /* LessonsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lessons__["a" /* LessonsPage */]),
            ],
        })
    ], LessonsPageModule);
    return LessonsPageModule;
}());

//# sourceMappingURL=lessons.module.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsPage; });
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
 * Generated class for the LessonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LessonsPage = /** @class */ (function () {
    function LessonsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LessonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LessonsPage');
    };
    LessonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lessons',template:/*ion-inline-start:"/Users/kathan/Desktop/CORE/src/pages/lessons/lessons.html"*/'<ion-header no-border> \n    <ion-navbar  color=\'navbarColor\'>\n      \n      <ion-buttons start>\n        <button ion-button menuToggle left>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      \n      <ion-title>Shop</ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding scrollY="true">\n\n\n   <div class="lesson">\n     \n        \n  <div align="center" class="card">  \n    \n    \n       \n        <ion-card class="merch" >\n          <ion-card-content>\n            <h1>JUST LAUNCHED</h1>\n      \n          </ion-card-content>\n      <ion-card-title >T-SHIRTS</ion-card-title>\n    \n  \n    \n  </ion-card>\n</div>\n<div align="center" class="card" >  \n    \n    \n       \n    <ion-card >\n  <ion-card-title>Card Title</ion-card-title>\n  \n<ion-card-content>\n    Keep close to Nature\'s heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\n</ion-card-content>\n</ion-card>\n</div>\n<div align="center" class="card" >  \n    \n    \n       \n    <ion-card >\n   \n \n  \n     \n  <ion-card-title>Card Title</ion-card-title>\n\n\n<ion-card-content>\n  Keep close to Nature\'s heart... and break clear away, once in awhile,\n  and climb a mountain or spend a week in the woods. Wash your spirit clean.\n</ion-card-content>\n</ion-card>\n</div>\n<div align="center" class="card">  \n    \n    \n       \n    <ion-card >    \n  <ion-card-title>Card Title</ion-card-title>\n  \n<ion-card-content>\n  Keep close to Nature\'s heart... and break clear away, once in awhile,\n  and climb a mountain or spend a week in the woods. Wash your spirit clean.\n</ion-card-content>\n</ion-card>\n</div>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/kathan/Desktop/CORE/src/pages/lessons/lessons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LessonsPage);
    return LessonsPage;
}());

//# sourceMappingURL=lessons.js.map

/***/ })

});
//# sourceMappingURL=7.js.map