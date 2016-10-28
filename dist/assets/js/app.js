webpackJsonp([0],{

/***/ 129:
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/stylus-loader?resolve url!./client/js/app/app-container/app-container.component.styl ***!
  \**********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 60)();
// imports


// module
exports.push([module.i, "h1 {\n  color: #ffa500;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);

// exports


/***/ },

/***/ 130:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/stylus-loader?resolve url!./client/js/app/app-container/widget/place/place-filter/place-filter.component.styl ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./../../../../../../../~/css-loader/lib/css-base.js */ 60)();
// imports


// module
exports.push([module.i, ".filter__item_selected a {\n  color: #df6e37;\n  text-decoration: underline;\n  cursor: default;\n}\n", ""]);

// exports


/***/ },

/***/ 131:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./client/js/app/app-container/app-container.component.html ***!
  \******************************************************************/
/***/ function(module, exports) {

module.exports = "<widget></widget>\n";

/***/ },

/***/ 132:
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-filter/place-filter.component.html ***!
  \*******************************************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"ele-strip\">\n  <ul>\n    <li *ngFor=\"let filterTypeItem of filterTypes; trackBy: filterType?.id\"\n        (click)=\"changeTypeHandler($event, filterTypeItem.id)\"\n        [ngClass]=\"{'filter__item_selected': checkSelected(filterTypeItem.id)}\">\n      <a href=\"#\">{{filterTypeItem.name}}</a>\n    </li>\n  </ul>\n</div>\n";

/***/ },

/***/ 133:
/* unknown exports provided */
/* all exports used */
/*!***************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-item/place-item.component.html ***!
  \***************************************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"activity-row\" (click)=\"changePlaceHandler(placeItem.id)\" [class.activity-row_selected]=\"isSelected\">\n  <div class=\"activity-desc\">\n    <h5>{{placeItem.placeTitle}}</h5>\n    <h6>T: {{placeItem.temperature}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <ul>\n      <li style=\"display: inline-block; width: 50px; height: 50px;\">\n        <img style=\"height: 100%;\" [src]=\"placeItem.firstImage\" alt=\"\" />\n      </li>\n      <li style=\"display: inline-block; width: 50px; height: 50px;\">\n        <img style=\"height: 100%;\" [src]=\"placeItem.secondImage\" alt=\"\" />\n      </li>\n    </ul>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n";

/***/ },

/***/ 134:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place.component.html ***!
  \***********************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"element-bg-img\"><img [src]=\"headerImage\" alt=\"\" class=\"img-responsive\"> </div>\n<div class=\"element-left-bottom\">\n  <place-filter\n    [currentFilterId]=\"currentFilterId\"\n    (changeType)=changeTypeHandler($event.selected)\n  ></place-filter>\n  <div class=\"village\">\n    <h3>Righteous indignation & like</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <place-item\n          *ngFor=\"let placeItem of places | filterType: currentFilterId; let i = index; trackBy: placeItem?.id\"\n          (changePlace)=\"changePlaceHandler($event.selected)\"\n          [placeItem]=\"placeItem\"\n          [isSelected]=\"placeItem.id === selected\"\n        ></place-item>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },

/***/ 135:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** ./client/js/app/app-container/widget/stats/stats.component.html ***!
  \***********************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{currentPlace.statsTitle}}</h4>\n    <span class=\"w-line\"> </span>\n    <img style=\"width: 90px; height: 90px\" [src]=\"currentPlace.secondImage\" alt=\"\" class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\">\n        <h3>{{currentPlace.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li>\n        <h3>{{currentPlace.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },

/***/ 136:
/* unknown exports provided */
/* all exports used */
/*!***************************************************************************!*\
  !*** ./client/js/app/app-container/widget/weather/weather.component.html ***!
  \***************************************************************************/
/***/ function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{currentPlace.weatherTitle}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h5>{{currentPlace.temperature}}<sup class=\"degree\">°</sup></h5>\n  <h6>Water {{currentPlace.humidity}}<sup class=\"degree\">°</sup></h6>\n</div>\n";

/***/ },

/***/ 137:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./client/js/app/app-container/widget/widget.component.html ***!
  \******************************************************************/
/***/ function(module, exports) {

module.exports = "<h1>Hot Weather Widget</h1>\n\n<div *ngIf=\"loaded\" class=\"element\">\n  <div class=\"element-left\">\n    <place-component\n      (changePlace)=\"changePlace($event.selected)\"\n      [places]=\"places\"\n      [selected]=\"selectedId\"\n    ></place-component>\n  </div>\n  <div class=\"element-right\">\n    <weather-component [currentPlace]=\"currentPlace\"></weather-component>\n    <stats-component [currentPlace]=\"currentPlace\"></stats-component>\n  </div>\n</div>\n\n<p class=\"clear\"></p>\n\n<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by  <a href=\"http://w3layouts.com/\" target=\"_blank\">W3layouts </a></p>\n</div>\n";

/***/ },

/***/ 141:
/* unknown exports provided */
/*!*************************************!*\
  !*** ./~/rxjs/add/observable/of.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(/*! ../../Observable */ 12);
var of_1 = __webpack_require__(/*! ../../observable/of */ 145);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 142:
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/rxjs/observable/ArrayObservable.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(/*! ../Observable */ 12);
var ScalarObservable_1 = __webpack_require__(/*! ./ScalarObservable */ 144);
var EmptyObservable_1 = __webpack_require__(/*! ./EmptyObservable */ 143);
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ 151);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayObservable = (function (_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
        _super.call(this);
        this.array = array;
        this.scheduler = scheduler;
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.value = array[0];
        }
    }
    ArrayObservable.create = function (array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };
    /**
     * Creates an Observable that emits some values you specify as arguments,
     * immediately one after the other, and then emits a complete notification.
     *
     * <span class="informal">Emits the arguments you provide, then completes.
     * </span>
     *
     * <img src="./img/of.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the arguments given, and the complete notification thereafter. It can
     * be used for composing with other Observables, such as with {@link concat}.
     * By default, it uses a `null` Scheduler, which means the `next`
     * notifications are sent synchronously, although with a different Scheduler
     * it is possible to determine when those notifications will be delivered.
     *
     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
     * var numbers = Rx.Observable.of(10, 20, 30);
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var interval = Rx.Observable.interval(1000);
     * var result = numbers.concat(letters).concat(interval);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link throw}
     *
     * @param {...T} values Arguments that represent `next` values to be emitted.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable<T>} An Observable that emits each given input value.
     * @static true
     * @name of
     * @owner Observable
     */
    ArrayObservable.of = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable_1.EmptyObservable(scheduler);
        }
    };
    ArrayObservable.dispatch = function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayObservable;
}(Observable_1.Observable));
exports.ArrayObservable = ArrayObservable;
//# sourceMappingURL=ArrayObservable.js.map

/***/ },

/***/ 143:
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/rxjs/observable/EmptyObservable.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(/*! ../Observable */ 12);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1.Observable));
exports.EmptyObservable = EmptyObservable;
//# sourceMappingURL=EmptyObservable.js.map

/***/ },

/***/ 144:
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/rxjs/observable/ScalarObservable.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(/*! ../Observable */ 12);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ScalarObservable = (function (_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
        _super.call(this);
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
        if (scheduler) {
            this._isScalar = false;
        }
    }
    ScalarObservable.create = function (value, scheduler) {
        return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function (state) {
        var done = state.done, value = state.value, subscriber = state.subscriber;
        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function (subscriber) {
        var value = this.value;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value: value, subscriber: subscriber
            });
        }
        else {
            subscriber.next(value);
            if (!subscriber.closed) {
                subscriber.complete();
            }
        }
    };
    return ScalarObservable;
}(Observable_1.Observable));
exports.ScalarObservable = ScalarObservable;
//# sourceMappingURL=ScalarObservable.js.map

/***/ },

/***/ 145:
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/rxjs/observable/of.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ArrayObservable_1 = __webpack_require__(/*! ./ArrayObservable */ 142);
exports.of = ArrayObservable_1.ArrayObservable.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 151:
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/rxjs/util/isScheduler.js ***!
  \************************************/
/***/ function(module, exports) {

"use strict";
"use strict";
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ },

/***/ 154:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./client/js/app/app-container/app-container.component.styl ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/postcss-loader!./../../../../~/stylus-loader?resolve url!./app-container.component.styl */ 129);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 155:
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-filter/place-filter.component.styl ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !./../../../../../../../~/css-loader!./../../../../../../../~/postcss-loader!./../../../../../../../~/stylus-loader?resolve url!./place-filter.component.styl */ 130);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 156:
/* unknown exports provided */
/* all exports used */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./client/js/main */65);


/***/ },

/***/ 48:
/* exports provided: FixtureService */
/* exports used: FixtureService */
/*!**********************************************!*\
  !*** ./client/js/services/FixtureService.ts ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(/*! rxjs/Observable */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(/*! rxjs/add/observable/of */ 141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FixtureService; });
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var places = [{
        id: "0",
        firstImage: "assets/img/widget/1.jpg",
        secondImage: "assets/img/widget/2.jpg",
        types: ["all", "fishing"],
        temperature: 14,
        humidity: 20,
        followers: 2850,
        following: 675,
        weatherTitle: "weather title 1",
        statsTitle: "stats title 1",
        placeTitle: "place title 1"
    }, {
        id: "1",
        firstImage: "assets/img/widget/3.jpg",
        secondImage: "assets/img/widget/4.jpg",
        types: ["all", "hotel"],
        temperature: 15,
        humidity: 21,
        followers: 3850,
        following: 775,
        weatherTitle: "weather title 2",
        statsTitle: "stats title 2",
        placeTitle: "place title 2"
    }];
var FixtureService = (function () {
    function FixtureService() {
    }
    FixtureService.prototype.getData = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(places);
    };
    FixtureService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], FixtureService);
    return FixtureService;
}());


/***/ },

/***/ 60:
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 65:
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./client/js/main.ts ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(/*! ./app/app.module */ 77);
"use strict";


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ },

/***/ 69:
/* exports provided: AppContainerComponent */
/* exports used: AppContainerComponent */
/*!****************************************************************!*\
  !*** ./client/js/app/app-container/app-container.component.ts ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppContainerComponent = (function () {
    function AppContainerComponent() {
    }
    AppContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-container",
            template: __webpack_require__(/*! ./app-container.component.html */ 131),
            styles: [__webpack_require__(/*! ./app-container.component.styl */ 154)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppContainerComponent);
    return AppContainerComponent;
}());


/***/ },

/***/ 70:
/* exports provided: FilterTypePipe */
/* exports used: FilterTypePipe */
/*!**********************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/filter-type.pipe.ts ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterTypePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterTypePipe = (function () {
    function FilterTypePipe() {
    }
    FilterTypePipe.prototype.transform = function (places, currentFilterId) {
        return places
            .filter(function (placeItem) { return !!~placeItem.types.indexOf(currentFilterId); });
    };
    FilterTypePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "filterType"
        }), 
        __metadata('design:paramtypes', [])
    ], FilterTypePipe);
    return FilterTypePipe;
}());


/***/ },

/***/ 71:
/* exports provided: PlaceFilterComponent */
/* exports used: PlaceFilterComponent */
/*!*****************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-filter/place-filter.component.ts ***!
  \*****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlaceFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaceFilterComponent = (function () {
    function PlaceFilterComponent() {
        this.changeType = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.filterTypes = [{
                id: "all",
                name: "All"
            }, {
                id: "hotel",
                name: "Hotel"
            }, {
                id: "fishing",
                name: "Fishing"
            }, {
                id: "tour",
                name: "Tour"
            }];
    }
    PlaceFilterComponent.prototype.changeTypeHandler = function (e, filterTypeId) {
        e.preventDefault();
        this.changeType.emit({ selected: filterTypeId });
    };
    PlaceFilterComponent.prototype.checkSelected = function (filterId) {
        return filterId === this.currentFilterId;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PlaceFilterComponent.prototype, "currentFilterId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PlaceFilterComponent.prototype, "changeType", void 0);
    PlaceFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "place-filter",
            template: __webpack_require__(/*! ./place-filter.component.html */ 132),
            styles: [__webpack_require__(/*! ./place-filter.component.styl */ 155)]
        }), 
        __metadata('design:paramtypes', [])
    ], PlaceFilterComponent);
    return PlaceFilterComponent;
    var _a;
}());


/***/ },

/***/ 72:
/* exports provided: PlaceItemComponent */
/* exports used: PlaceItemComponent */
/*!*************************************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place-item/place-item.component.ts ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem__ = __webpack_require__(/*! ../../../../../shared/interfaces/WidgetPlaceItem */ 78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlaceItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceItemComponent = (function () {
    function PlaceItemComponent() {
        this.changePlace = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PlaceItemComponent.prototype.changePlaceHandler = function (placeItemId) {
        if (this.isSelected) {
            return;
        }
        this.changePlace.emit({ selected: placeItemId });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PlaceItemComponent.prototype, "changePlace", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem__["WidgetPlaceItem"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_WidgetPlaceItem__["WidgetPlaceItem"]) === 'function' && _b) || Object)
    ], PlaceItemComponent.prototype, "placeItem", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], PlaceItemComponent.prototype, "isSelected", void 0);
    PlaceItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "place-item",
            template: __webpack_require__(/*! ./place-item.component.html */ 133)
        }), 
        __metadata('design:paramtypes', [])
    ], PlaceItemComponent);
    return PlaceItemComponent;
    var _a, _b;
}());


/***/ },

/***/ 73:
/* exports provided: PlaceComponent */
/* exports used: PlaceComponent */
/*!*********************************************************************!*\
  !*** ./client/js/app/app-container/widget/place/place.component.ts ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaceComponent = (function () {
    function PlaceComponent() {
        this.currentFilterId = "all";
        this.changePlace = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(PlaceComponent.prototype, "headerImage", {
        get: function () {
            var _this = this;
            return this.places
                .filter(function (placeItem) { return placeItem.id === _this.selected; })[0].firstImage;
        },
        enumerable: true,
        configurable: true
    });
    PlaceComponent.prototype.changeTypeHandler = function (currentFilterId) {
        this.currentFilterId = currentFilterId;
    };
    PlaceComponent.prototype.changePlaceHandler = function (placeItemId) {
        this.changePlace.emit({ selected: placeItemId });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PlaceComponent.prototype, "places", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PlaceComponent.prototype, "changePlace", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PlaceComponent.prototype, "selected", void 0);
    PlaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "place-component",
            template: __webpack_require__(/*! ./place.component.html */ 134)
        }), 
        __metadata('design:paramtypes', [])
    ], PlaceComponent);
    return PlaceComponent;
    var _a;
}());


/***/ },

/***/ 74:
/* exports provided: StatsComponent */
/* exports used: StatsComponent */
/*!*********************************************************************!*\
  !*** ./client/js/app/app-container/widget/stats/stats.component.ts ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], StatsComponent.prototype, "currentPlace", void 0);
    StatsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "stats-component",
            template: __webpack_require__(/*! ./stats.component.html */ 135)
        }), 
        __metadata('design:paramtypes', [])
    ], StatsComponent);
    return StatsComponent;
}());


/***/ },

/***/ 75:
/* exports provided: WeatherComponent */
/* exports used: WeatherComponent */
/*!*************************************************************************!*\
  !*** ./client/js/app/app-container/widget/weather/weather.component.ts ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = (function () {
    function WeatherComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], WeatherComponent.prototype, "currentPlace", void 0);
    WeatherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "weather-component",
            template: __webpack_require__(/*! ./weather.component.html */ 136)
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherComponent);
    return WeatherComponent;
}());


/***/ },

/***/ 76:
/* exports provided: WidgetComponent */
/* exports used: WidgetComponent */
/*!****************************************************************!*\
  !*** ./client/js/app/app-container/widget/widget.component.ts ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FixtureService__ = __webpack_require__(/*! ../../../services/FixtureService */ 48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetComponent = (function () {
    function WidgetComponent(fixtureService) {
        this.fixtureService = fixtureService;
        this.loadData();
    }
    Object.defineProperty(WidgetComponent.prototype, "loaded", {
        get: function () {
            return !!this.places;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetComponent.prototype, "currentPlace", {
        get: function () {
            var _this = this;
            return this.places
                .filter(function (placeItem) { return placeItem.id === _this.selectedId; })[0];
        },
        enumerable: true,
        configurable: true
    });
    WidgetComponent.prototype.changePlace = function (placeItemId) {
        this.selectedId = placeItemId;
    };
    WidgetComponent.prototype.loadData = function () {
        var _this = this;
        this.fixtureService
            .getData()
            .subscribe(function (data) {
            _this.places = data;
            _this.selectedId = data[0].id;
        }, function (err) {
            console.error(err);
        });
    };
    WidgetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "widget",
            template: __webpack_require__(/*! ./widget.component.html */ 137)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_FixtureService__["a" /* FixtureService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_FixtureService__["a" /* FixtureService */]) === 'function' && _a) || Object])
    ], WidgetComponent);
    return WidgetComponent;
    var _a;
}());


/***/ },

/***/ 77:
/* exports provided: AppModule */
/* exports used: AppModule */
/*!*************************************!*\
  !*** ./client/js/app/app.module.ts ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(/*! @angular/platform-browser */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(/*! @angular/core */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_container_app_container_component__ = __webpack_require__(/*! ./app-container/app-container.component */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_container_widget_widget_component__ = __webpack_require__(/*! ./app-container/widget/widget.component */ 76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_container_widget_place_place_component__ = __webpack_require__(/*! ./app-container/widget/place/place.component */ 73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_container_widget_weather_weather_component__ = __webpack_require__(/*! ./app-container/widget/weather/weather.component */ 75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_container_widget_stats_stats_component__ = __webpack_require__(/*! ./app-container/widget/stats/stats.component */ 74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_container_widget_place_place_item_place_item_component__ = __webpack_require__(/*! ./app-container/widget/place/place-item/place-item.component */ 72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_container_widget_place_place_filter_place_filter_component__ = __webpack_require__(/*! ./app-container/widget/place/place-filter/place-filter.component */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_container_widget_place_filter_type_pipe__ = __webpack_require__(/*! ./app-container/widget/place/filter-type.pipe */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_FixtureService__ = __webpack_require__(/*! ../services/FixtureService */ 48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_container_app_container_component__["a" /* AppContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_container_widget_widget_component__["a" /* WidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_container_widget_place_place_component__["a" /* PlaceComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_container_widget_weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_container_widget_stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_container_widget_place_place_item_place_item_component__["a" /* PlaceItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_container_widget_place_place_filter_place_filter_component__["a" /* PlaceFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_container_widget_place_filter_type_pipe__["a" /* FilterTypePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_FixtureService__["a" /* FixtureService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_container_app_container_component__["a" /* AppContainerComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 78:
/* unknown exports provided */
/* exports used: WidgetPlaceItem */
/*!********************************************************!*\
  !*** ./client/js/shared/interfaces/WidgetPlaceItem.ts ***!
  \********************************************************/
/***/ function(module, exports) {



/***/ }

},[156]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvYXBwLWNvbnRhaW5lci5jb21wb25lbnQuc3R5bCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9wbGFjZS9wbGFjZS1maWx0ZXIvcGxhY2UtZmlsdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtaXRlbS9wbGFjZS1pdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9zdGF0cy9zdGF0cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dpZGdldC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9+L3J4anMvYWRkL29ic2VydmFibGUvb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvQXJyYXlPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL0VtcHR5T2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb2JzZXJ2YWJsZS9TY2FsYXJPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL29mLmpzIiwid2VicGFjazovLy8uL34vcnhqcy91dGlsL2lzU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci9hcHAtY29udGFpbmVyLmNvbXBvbmVudC5zdHlsPzIxZGEiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9wbGFjZS9wbGFjZS1maWx0ZXIvcGxhY2UtZmlsdGVyLmNvbXBvbmVudC5zdHlsPzRjY2EiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL3NlcnZpY2VzL0ZpeHR1cmVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvZmlsdGVyLXR5cGUucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtaXRlbS9wbGFjZS1pdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3N0YXRzL3N0YXRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSw2QkFBOEIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsa0JBQWtCLEdBQUc7O0FBRXhIOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxtREFBb0QsbUJBQW1CLCtCQUErQixvQkFBb0IsR0FBRzs7QUFFN0g7Ozs7Ozs7Ozs7Ozs7QUNQQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUEsd0dBQXdHLG1IQUFtSCwwREFBMEQsMkJBQTJCLHFCQUFxQixvQzs7Ozs7Ozs7Ozs7O0FDQXJVLHFMQUFxTCxzQkFBc0Isb0JBQW9CLHVCQUF1QixtR0FBbUcsYUFBYSxjQUFjLHVDQUF1QyxvR0FBb0csYUFBYSxjQUFjLHVDQUF1QywySDs7Ozs7Ozs7Ozs7O0FDQWprQix5akJBQXlqQixlQUFlLDZQOzs7Ozs7Ozs7Ozs7QUNBeGtCLHNGQUFzRix5QkFBeUIseUVBQXlFLHNMQUFzTCx3QkFBd0Isd0VBQXdFLHdCQUF3Qiw2RTs7Ozs7Ozs7Ozs7O0FDQXRlLHNEQUFzRCwyQkFBMkIsb0ZBQW9GLDBCQUEwQixrREFBa0QsdUJBQXVCLDhDOzs7Ozs7Ozs7Ozs7QUNBeFEsMnJCOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVLGdCQUFnQixnQkFBZ0I7QUFDekQ7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDJCQUEyQixpQ0FBaUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkM7Ozs7Ozs7Ozs7Ozs7QUN6SEE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0EsZUFBZSxVQUFVLGdCQUFnQixnQkFBZ0I7QUFDekQ7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UseUJBQXlCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDOzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBLDhCOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7O0FDSkE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFNkI7QUFDRTtBQUNiO0FBRy9CLElBQU0sTUFBTSxHQUFHLENBQUM7UUFDZCxFQUFFLEVBQUUsR0FBRztRQUNQLFVBQVUsRUFBRSx5QkFBeUI7UUFDckMsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1FBQ3pCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsSUFBSTtRQUNmLFNBQVMsRUFBRSxHQUFHO1FBQ2QsWUFBWSxFQUFFLGlCQUFpQjtRQUMvQixVQUFVLEVBQUUsZUFBZTtRQUMzQixVQUFVLEVBQUUsZUFBZTtLQUM1QixFQUFFO1FBQ0QsRUFBRSxFQUFFLEdBQUc7UUFDUCxVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUN2QixXQUFXLEVBQUUsRUFBRTtRQUNmLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLElBQUk7UUFDZixTQUFTLEVBQUUsR0FBRztRQUNkLFlBQVksRUFBRSxpQkFBaUI7UUFDL0IsVUFBVSxFQUFFLGVBQWU7UUFDM0IsVUFBVSxFQUFFLGVBQWU7S0FDNUIsQ0FBQyxDQUFDO0FBT0g7SUFBQTtJQUlBLENBQUM7SUFIQyxnQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLDJEQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFKSDtRQUFDLGdGQUFVLEVBQUU7O3NCQUFBO0lBS2IscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQSxZQUFZLENBQUM7QUFFNkQ7QUFDOUI7QUFFNUMsZ0hBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsa0VBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xYO0FBT3pDO0lBQUE7SUFBb0MsQ0FBQztJQUxyQztRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsbUJBQU8sQ0FBQyx5Q0FBZ0MsQ0FBQztZQUNuRCxNQUFNLEVBQUUsQ0FBRSxtQkFBTyxDQUFDLHlDQUFnQyxDQUFDLENBQUU7U0FDdEQsQ0FBQzs7NkJBQUE7SUFDa0MsNEJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BjO0FBTW5EO0lBQUE7SUFLQSxDQUFDO0lBSkMsa0NBQVMsR0FBVCxVQUFVLE1BQThCLEVBQUUsZUFBdUI7UUFDL0QsTUFBTSxDQUFDLE1BQU07YUFDVixNQUFNLENBQUMsVUFBQyxTQUEwQixJQUFLLFFBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQVBIO1FBQUMsMEVBQUksQ0FBQztZQUNKLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUM7O3NCQUFBO0lBTUYscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hxRTtBQVl0RTtJQUFBO1FBTUUsZUFBVSxHQUFrQyxJQUFJLDJEQUFZLEVBQUUsQ0FBQztRQUUvRCxnQkFBVyxHQUEyQixDQUFDO2dCQUNyQyxFQUFFLEVBQUUsS0FBSztnQkFDVCxJQUFJLEVBQUUsS0FBSzthQUNaLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsSUFBSSxFQUFFLE9BQU87YUFDZCxFQUFFO2dCQUNELEVBQUUsRUFBRSxTQUFTO2dCQUNiLElBQUksRUFBRSxTQUFTO2FBQ2hCLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUM7SUFXTCxDQUFDO0lBVEMsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQWEsRUFBRSxZQUFvQjtRQUNuRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFvQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxRQUFnQjtRQUM1QixNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQTNCRDtRQUFDLDJFQUFLLEVBQUU7O2lFQUFBO0lBR1I7UUFBQyw0RUFBTSxFQUFFOzs0REFBQTtJQVZYO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLHdDQUErQixDQUFDO1lBQ2xELE1BQU0sRUFBRSxDQUFFLG1CQUFPLENBQUMsd0NBQStCLENBQUMsQ0FBRTtTQUNyRCxDQUFDOzs0QkFBQTtJQWdDRiwyQkFBQzs7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NxRTtBQUNZO0FBVWxGO0lBQUE7UUFHRSxnQkFBVyxHQUFtQyxJQUFJLDJEQUFZLEVBQUUsQ0FBQztJQWdCbkUsQ0FBQztJQVJDLCtDQUFrQixHQUFsQixVQUFtQixXQUFtQjtRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFzQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQWZEO1FBQUMsNEVBQU0sRUFBRTs7MkRBQUE7SUFHVDtRQUFDLDJFQUFLLEVBQUU7O3lEQUFBO0lBR1I7UUFBQywyRUFBSyxFQUFFOzswREFBQTtJQVpWO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLHNDQUE2QixDQUFDO1NBQ2pELENBQUM7OzBCQUFBO0lBb0JGLHlCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJxRTtBQVd0RTtJQUFBO1FBS0Usb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFHeEIsZ0JBQVcsR0FBbUMsSUFBSSwyREFBWSxFQUFFLENBQUM7SUFpQm5FLENBQUM7SUFaQyxzQkFBSSx1Q0FBVzthQUFmO1lBQUEsaUJBR0M7WUFGQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07aUJBQ2YsTUFBTSxDQUFDLFVBQUMsU0FBMEIsSUFBSyxnQkFBUyxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsUUFBUSxFQUE5QixDQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzFGLENBQUM7OztPQUFBO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLGVBQXVCO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsV0FBbUI7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFzQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXRCRDtRQUFDLDJFQUFLLEVBQUU7O2tEQUFBO0lBS1I7UUFBQyw0RUFBTSxFQUFFOzt1REFBQTtJQUdUO1FBQUMsMkVBQUssRUFBRTs7b0RBQUE7SUFkVjtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLGlDQUF3QixDQUFDO1NBQzVDLENBQUM7O3NCQUFBO0lBMEJGLHFCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEMrQztBQU1oRDtJQUFBO0lBS0EsQ0FBQztJQUhDO1FBQUMsMkVBQUssRUFBRTs7d0RBQUE7SUFOVjtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLGlDQUF3QixDQUFDO1NBQzVDLENBQUM7O3NCQUFBO0lBTUYscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1grQztBQU1oRDtJQUFBO0lBS0EsQ0FBQztJQUhDO1FBQUMsMkVBQUssRUFBRTs7MERBQUE7SUFOVjtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLG1DQUEwQixDQUFDO1NBQzlDLENBQUM7O3dCQUFBO0lBTUYsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYd0M7QUFFd0I7QUFPakU7SUFLRSx5QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2hELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsc0JBQUksbUNBQU07YUFBVjtZQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFZO2FBQWhCO1lBQUEsaUJBR0M7WUFGQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07aUJBQ2YsTUFBTSxDQUFDLFVBQUMsU0FBMEIsSUFBSyxnQkFBUyxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsVUFBVSxFQUFoQyxDQUFnQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsQ0FBQzs7O09BQUE7SUFFRCxxQ0FBVyxHQUFYLFVBQVksV0FBbUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVPLGtDQUFRLEdBQWhCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsY0FBYzthQUNoQixPQUFPLEVBQUU7YUFDVCxTQUFTLENBQUMsVUFBQyxJQUF1QjtZQUNqQyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0IsQ0FBQyxFQUFFLGFBQUc7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5DSDtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxrQ0FBeUIsQ0FBQztTQUM3QyxDQUFDOzt1QkFBQTtJQWtDRixzQkFBQzs7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFNEM7QUFDakI7QUFFdUM7QUFDTjtBQUNJO0FBQ007QUFDTjtBQUNvQjtBQUNNO0FBQ3pCO0FBRW5CO0FBbUIzRDtJQUFBO0lBQXdCLENBQUM7SUFqQnpCO1FBQUMsOEVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixxR0FBcUI7Z0JBQ3JCLCtGQUFlO2dCQUNmLG1HQUFjO2dCQUNkLHlHQUFnQjtnQkFDaEIsbUdBQWM7Z0JBQ2QsdUhBQWtCO2dCQUNsQiw2SEFBb0I7Z0JBQ3BCLG9HQUFjO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asd0VBQWE7YUFDZDtZQUNELFNBQVMsRUFBRSxDQUFDLGlGQUFjLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMscUdBQXFCLENBQUM7U0FDbkMsQ0FBQzs7aUJBQUE7SUFDc0IsZ0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaDEge1xcbiAgY29sb3I6ICNmZmE1MDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Bvc3Rjc3MtbG9hZGVyIS4vfi9zdHlsdXMtbG9hZGVyP3Jlc29sdmUgdXJsIS4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50LnN0eWxcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5maWx0ZXJfX2l0ZW1fc2VsZWN0ZWQgYSB7XFxuICBjb2xvcjogI2RmNmUzNztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vcG9zdGNzcy1sb2FkZXIhLi9+L3N0eWx1cy1sb2FkZXI/cmVzb2x2ZSB1cmwhLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50LnN0eWxcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHdpZGdldD48L3dpZGdldD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci9hcHAtY29udGFpbmVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImVsZS1zdHJpcFxcXCI+XFxuICA8dWw+XFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCBmaWx0ZXJUeXBlSXRlbSBvZiBmaWx0ZXJUeXBlczsgdHJhY2tCeTogZmlsdGVyVHlwZT8uaWRcXFwiXFxuICAgICAgICAoY2xpY2spPVxcXCJjaGFuZ2VUeXBlSGFuZGxlcigkZXZlbnQsIGZpbHRlclR5cGVJdGVtLmlkKVxcXCJcXG4gICAgICAgIFtuZ0NsYXNzXT1cXFwieydmaWx0ZXJfX2l0ZW1fc2VsZWN0ZWQnOiBjaGVja1NlbGVjdGVkKGZpbHRlclR5cGVJdGVtLmlkKX1cXFwiPlxcbiAgICAgIDxhIGhyZWY9XFxcIiNcXFwiPnt7ZmlsdGVyVHlwZUl0ZW0ubmFtZX19PC9hPlxcbiAgICA8L2xpPlxcbiAgPC91bD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtZmlsdGVyL3BsYWNlLWZpbHRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhY3Rpdml0eS1yb3dcXFwiIChjbGljayk9XFxcImNoYW5nZVBsYWNlSGFuZGxlcihwbGFjZUl0ZW0uaWQpXFxcIiBbY2xhc3MuYWN0aXZpdHktcm93X3NlbGVjdGVkXT1cXFwiaXNTZWxlY3RlZFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhY3Rpdml0eS1kZXNjXFxcIj5cXG4gICAgPGg1Pnt7cGxhY2VJdGVtLnBsYWNlVGl0bGV9fTwvaDU+XFxuICAgIDxoNj5UOiB7e3BsYWNlSXRlbS50ZW1wZXJhdHVyZX19PC9oNj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiYWN0aXZpdHktaW1nXFxcIj5cXG4gICAgPHVsPlxcbiAgICAgIDxsaSBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O1xcXCI+XFxuICAgICAgICA8aW1nIHN0eWxlPVxcXCJoZWlnaHQ6IDEwMCU7XFxcIiBbc3JjXT1cXFwicGxhY2VJdGVtLmZpcnN0SW1hZ2VcXFwiIGFsdD1cXFwiXFxcIiAvPlxcbiAgICAgIDwvbGk+XFxuICAgICAgPGxpIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7XFxcIj5cXG4gICAgICAgIDxpbWcgc3R5bGU9XFxcImhlaWdodDogMTAwJTtcXFwiIFtzcmNdPVxcXCJwbGFjZUl0ZW0uc2Vjb25kSW1hZ2VcXFwiIGFsdD1cXFwiXFxcIiAvPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNsZWFyXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtaXRlbS9wbGFjZS1pdGVtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImVsZW1lbnQtYmctaW1nXFxcIj48aW1nIFtzcmNdPVxcXCJoZWFkZXJJbWFnZVxcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZVxcXCI+IDwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImVsZW1lbnQtbGVmdC1ib3R0b21cXFwiPlxcbiAgPHBsYWNlLWZpbHRlclxcbiAgICBbY3VycmVudEZpbHRlcklkXT1cXFwiY3VycmVudEZpbHRlcklkXFxcIlxcbiAgICAoY2hhbmdlVHlwZSk9Y2hhbmdlVHlwZUhhbmRsZXIoJGV2ZW50LnNlbGVjdGVkKVxcbiAgPjwvcGxhY2UtZmlsdGVyPlxcbiAgPGRpdiBjbGFzcz1cXFwidmlsbGFnZVxcXCI+XFxuICAgIDxoMz5SaWdodGVvdXMgaW5kaWduYXRpb24gJiBsaWtlPC9oMz5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImxpbmVcXFwiPiA8L3NwYW4+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFjdGl2aXR5X2JveFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsYmFyXFxcIiBpZD1cXFwic3R5bGUtMlxcXCI+XFxuICAgICAgICA8cGxhY2UtaXRlbVxcbiAgICAgICAgICAqbmdGb3I9XFxcImxldCBwbGFjZUl0ZW0gb2YgcGxhY2VzIHwgZmlsdGVyVHlwZTogY3VycmVudEZpbHRlcklkOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiBwbGFjZUl0ZW0/LmlkXFxcIlxcbiAgICAgICAgICAoY2hhbmdlUGxhY2UpPVxcXCJjaGFuZ2VQbGFjZUhhbmRsZXIoJGV2ZW50LnNlbGVjdGVkKVxcXCJcXG4gICAgICAgICAgW3BsYWNlSXRlbV09XFxcInBsYWNlSXRlbVxcXCJcXG4gICAgICAgICAgW2lzU2VsZWN0ZWRdPVxcXCJwbGFjZUl0ZW0uaWQgPT09IHNlbGVjdGVkXFxcIlxcbiAgICAgICAgPjwvcGxhY2UtaXRlbT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidGVkZHktYmVhclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0ZWRkeS10ZXh0XFxcIj5cXG4gICAgPGg0Pnt7Y3VycmVudFBsYWNlLnN0YXRzVGl0bGV9fTwvaDQ+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ3LWxpbmVcXFwiPiA8L3NwYW4+XFxuICAgIDxpbWcgc3R5bGU9XFxcIndpZHRoOiA5MHB4OyBoZWlnaHQ6IDkwcHhcXFwiIFtzcmNdPVxcXCJjdXJyZW50UGxhY2Uuc2Vjb25kSW1hZ2VcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwiaW1nLXJlc3BvbnNpdmVcXFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0ZWRkeS1mb2xsb3dcXFwiPlxcbiAgICA8dWw+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJmb2x3LWhcXFwiPlxcbiAgICAgICAgPGgzPnt7Y3VycmVudFBsYWNlLmZvbGxvd2Vyc319PC9oMz5cXG4gICAgICAgIDxwPkZvbGxvd2VyczwvcD5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaT5cXG4gICAgICAgIDxoMz57e2N1cnJlbnRQbGFjZS5mb2xsb3dpbmd9fTwvaDM+XFxuICAgICAgICA8cD5Gb2xsb3dpbmc8L3A+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9zdGF0cy9zdGF0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0ZW1wZXJhdHVyXFxcIj5cXG4gIDxoNT57e2N1cnJlbnRQbGFjZS53ZWF0aGVyVGl0bGV9fTwvaDU+XFxuICA8c3BhbiBjbGFzcz1cXFwidy1saW5lXFxcIj4gPC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcImNsb3VkXFxcIj4gPC9zcGFuPlxcbiAgPGg1Pnt7Y3VycmVudFBsYWNlLnRlbXBlcmF0dXJlfX08c3VwIGNsYXNzPVxcXCJkZWdyZWVcXFwiPsKwPC9zdXA+PC9oNT5cXG4gIDxoNj5XYXRlciB7e2N1cnJlbnRQbGFjZS5odW1pZGl0eX19PHN1cCBjbGFzcz1cXFwiZGVncmVlXFxcIj7CsDwvc3VwPjwvaDY+XFxuPC9kaXY+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+SG90IFdlYXRoZXIgV2lkZ2V0PC9oMT5cXG5cXG48ZGl2ICpuZ0lmPVxcXCJsb2FkZWRcXFwiIGNsYXNzPVxcXCJlbGVtZW50XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImVsZW1lbnQtbGVmdFxcXCI+XFxuICAgIDxwbGFjZS1jb21wb25lbnRcXG4gICAgICAoY2hhbmdlUGxhY2UpPVxcXCJjaGFuZ2VQbGFjZSgkZXZlbnQuc2VsZWN0ZWQpXFxcIlxcbiAgICAgIFtwbGFjZXNdPVxcXCJwbGFjZXNcXFwiXFxuICAgICAgW3NlbGVjdGVkXT1cXFwic2VsZWN0ZWRJZFxcXCJcXG4gICAgPjwvcGxhY2UtY29tcG9uZW50PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJlbGVtZW50LXJpZ2h0XFxcIj5cXG4gICAgPHdlYXRoZXItY29tcG9uZW50IFtjdXJyZW50UGxhY2VdPVxcXCJjdXJyZW50UGxhY2VcXFwiPjwvd2VhdGhlci1jb21wb25lbnQ+XFxuICAgIDxzdGF0cy1jb21wb25lbnQgW2N1cnJlbnRQbGFjZV09XFxcImN1cnJlbnRQbGFjZVxcXCI+PC9zdGF0cy1jb21wb25lbnQ+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48cCBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvcD5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb3B5LXJpZ2h0XFxcIj5cXG4gIDxwPsKpIDIwMTUgSG90IFdlYXRoZXIgV2lkZ2V0LiBBbGwgcmlnaHRzIHJlc2VydmVkIHwgRGVzaWduIGJ5ICA8YSBocmVmPVxcXCJodHRwOi8vdzNsYXlvdXRzLmNvbS9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5XM2xheW91dHMgPC9hPjwvcD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIG9mXzEgPSByZXF1aXJlKCcuLi8uLi9vYnNlcnZhYmxlL29mJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5vZiA9IG9mXzEub2Y7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vZi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9hZGQvb2JzZXJ2YWJsZS9vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xudmFyIFNjYWxhck9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4vU2NhbGFyT2JzZXJ2YWJsZScpO1xudmFyIEVtcHR5T2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi9FbXB0eU9ic2VydmFibGUnKTtcbnZhciBpc1NjaGVkdWxlcl8xID0gcmVxdWlyZSgnLi4vdXRpbC9pc1NjaGVkdWxlcicpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbnZhciBBcnJheU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcnJheU9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXJyYXlPYnNlcnZhYmxlKGFycmF5LCBzY2hlZHVsZXIpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIGlmICghc2NoZWR1bGVyICYmIGFycmF5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5faXNTY2FsYXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGFycmF5WzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFycmF5T2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoYXJyYXksIHNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5T2JzZXJ2YWJsZShhcnJheSwgc2NoZWR1bGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHNvbWUgdmFsdWVzIHlvdSBzcGVjaWZ5IGFzIGFyZ3VtZW50cyxcbiAgICAgKiBpbW1lZGlhdGVseSBvbmUgYWZ0ZXIgdGhlIG90aGVyLCBhbmQgdGhlbiBlbWl0cyBhIGNvbXBsZXRlIG5vdGlmaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5FbWl0cyB0aGUgYXJndW1lbnRzIHlvdSBwcm92aWRlLCB0aGVuIGNvbXBsZXRlcy5cbiAgICAgKiA8L3NwYW4+XG4gICAgICpcbiAgICAgKiA8aW1nIHNyYz1cIi4vaW1nL29mLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAqXG4gICAgICogVGhpcyBzdGF0aWMgb3BlcmF0b3IgaXMgdXNlZnVsIGZvciBjcmVhdGluZyBhIHNpbXBsZSBPYnNlcnZhYmxlIHRoYXQgb25seVxuICAgICAqIGVtaXRzIHRoZSBhcmd1bWVudHMgZ2l2ZW4sIGFuZCB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uIHRoZXJlYWZ0ZXIuIEl0IGNhblxuICAgICAqIGJlIHVzZWQgZm9yIGNvbXBvc2luZyB3aXRoIG90aGVyIE9ic2VydmFibGVzLCBzdWNoIGFzIHdpdGgge0BsaW5rIGNvbmNhdH0uXG4gICAgICogQnkgZGVmYXVsdCwgaXQgdXNlcyBhIGBudWxsYCBTY2hlZHVsZXIsIHdoaWNoIG1lYW5zIHRoZSBgbmV4dGBcbiAgICAgKiBub3RpZmljYXRpb25zIGFyZSBzZW50IHN5bmNocm9ub3VzbHksIGFsdGhvdWdoIHdpdGggYSBkaWZmZXJlbnQgU2NoZWR1bGVyXG4gICAgICogaXQgaXMgcG9zc2libGUgdG8gZGV0ZXJtaW5lIHdoZW4gdGhvc2Ugbm90aWZpY2F0aW9ucyB3aWxsIGJlIGRlbGl2ZXJlZC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgMTAsIDIwLCAzMCwgdGhlbiAnYScsICdiJywgJ2MnLCB0aGVuIHN0YXJ0IHRpY2tpbmcgZXZlcnkgc2Vjb25kLjwvY2FwdGlvbj5cbiAgICAgKiB2YXIgbnVtYmVycyA9IFJ4Lk9ic2VydmFibGUub2YoMTAsIDIwLCAzMCk7XG4gICAgICogdmFyIGxldHRlcnMgPSBSeC5PYnNlcnZhYmxlLm9mKCdhJywgJ2InLCAnYycpO1xuICAgICAqIHZhciBpbnRlcnZhbCA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCk7XG4gICAgICogdmFyIHJlc3VsdCA9IG51bWJlcnMuY29uY2F0KGxldHRlcnMpLmNvbmNhdChpbnRlcnZhbCk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIGNyZWF0ZX1cbiAgICAgKiBAc2VlIHtAbGluayBlbXB0eX1cbiAgICAgKiBAc2VlIHtAbGluayBuZXZlcn1cbiAgICAgKiBAc2VlIHtAbGluayB0aHJvd31cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4uVH0gdmFsdWVzIEFyZ3VtZW50cyB0aGF0IHJlcHJlc2VudCBgbmV4dGAgdmFsdWVzIHRvIGJlIGVtaXR0ZWQuXG4gICAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIEEge0BsaW5rIFNjaGVkdWxlcn0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gICAgICogdGhlIGVtaXNzaW9ucyBvZiB0aGUgYG5leHRgIG5vdGlmaWNhdGlvbnMuXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGVhY2ggZ2l2ZW4gaW5wdXQgdmFsdWUuXG4gICAgICogQHN0YXRpYyB0cnVlXG4gICAgICogQG5hbWUgb2ZcbiAgICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIEFycmF5T2JzZXJ2YWJsZS5vZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcnJheVtfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2NoZWR1bGVyID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChpc1NjaGVkdWxlcl8xLmlzU2NoZWR1bGVyKHNjaGVkdWxlcikpIHtcbiAgICAgICAgICAgIGFycmF5LnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NoZWR1bGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheU9ic2VydmFibGUoYXJyYXksIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGVuID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNjYWxhck9ic2VydmFibGVfMS5TY2FsYXJPYnNlcnZhYmxlKGFycmF5WzBdLCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbXB0eU9ic2VydmFibGVfMS5FbXB0eU9ic2VydmFibGUoc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXJyYXlPYnNlcnZhYmxlLmRpc3BhdGNoID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhcnJheSA9IHN0YXRlLmFycmF5LCBpbmRleCA9IHN0YXRlLmluZGV4LCBjb3VudCA9IHN0YXRlLmNvdW50LCBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlcjtcbiAgICAgICAgaWYgKGluZGV4ID49IGNvdW50KSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2luZGV4XSk7XG4gICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHN0YXRlKTtcbiAgICB9O1xuICAgIEFycmF5T2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gICAgICAgIHZhciBjb3VudCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKEFycmF5T2JzZXJ2YWJsZS5kaXNwYXRjaCwgMCwge1xuICAgICAgICAgICAgICAgIGFycmF5OiBhcnJheSwgaW5kZXg6IGluZGV4LCBjb3VudDogY291bnQsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudCAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBcnJheU9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkFycmF5T2JzZXJ2YWJsZSA9IEFycmF5T2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycmF5T2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vYnNlcnZhYmxlL0FycmF5T2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbnZhciBFbXB0eU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFbXB0eU9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRW1wdHlPYnNlcnZhYmxlKHNjaGVkdWxlcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG5vIGl0ZW1zIHRvIHRoZSBPYnNlcnZlciBhbmQgaW1tZWRpYXRlbHlcbiAgICAgKiBlbWl0cyBhIGNvbXBsZXRlIG5vdGlmaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5KdXN0IGVtaXRzICdjb21wbGV0ZScsIGFuZCBub3RoaW5nIGVsc2UuXG4gICAgICogPC9zcGFuPlxuICAgICAqXG4gICAgICogPGltZyBzcmM9XCIuL2ltZy9lbXB0eS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgKlxuICAgICAqIFRoaXMgc3RhdGljIG9wZXJhdG9yIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgYSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IG9ubHlcbiAgICAgKiBlbWl0cyB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29tcG9zaW5nIHdpdGggb3RoZXJcbiAgICAgKiBPYnNlcnZhYmxlcywgc3VjaCBhcyBpbiBhIHtAbGluayBtZXJnZU1hcH0uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IHRoZSBudW1iZXIgNywgdGhlbiBjb21wbGV0ZS48L2NhcHRpb24+XG4gICAgICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUuZW1wdHkoKS5zdGFydFdpdGgoNyk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPk1hcCBhbmQgZmxhdHRlbiBvbmx5IG9kZCBudW1iZXJzIHRvIHRoZSBzZXF1ZW5jZSAnYScsICdiJywgJ2MnPC9jYXB0aW9uPlxuICAgICAqIHZhciBpbnRlcnZhbCA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCk7XG4gICAgICogdmFyIHJlc3VsdCA9IGludGVydmFsLm1lcmdlTWFwKHggPT5cbiAgICAgKiAgIHggJSAyID09PSAxID8gUnguT2JzZXJ2YWJsZS5vZignYScsICdiJywgJ2MnKSA6IFJ4Lk9ic2VydmFibGUuZW1wdHkoKVxuICAgICAqICk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIGNyZWF0ZX1cbiAgICAgKiBAc2VlIHtAbGluayBuZXZlcn1cbiAgICAgKiBAc2VlIHtAbGluayBvZn1cbiAgICAgKiBAc2VlIHtAbGluayB0aHJvd31cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBBIHtAbGluayBTY2hlZHVsZXJ9IHRvIHVzZSBmb3Igc2NoZWR1bGluZ1xuICAgICAqIHRoZSBlbWlzc2lvbiBvZiB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uLlxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIFwiZW1wdHlcIiBPYnNlcnZhYmxlOiBlbWl0cyBvbmx5IHRoZSBjb21wbGV0ZVxuICAgICAqIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAc3RhdGljIHRydWVcbiAgICAgKiBAbmFtZSBlbXB0eVxuICAgICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgRW1wdHlPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbXB0eU9ic2VydmFibGUoc2NoZWR1bGVyKTtcbiAgICB9O1xuICAgIEVtcHR5T2JzZXJ2YWJsZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBhcmcuc3Vic2NyaWJlcjtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgRW1wdHlPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKEVtcHR5T2JzZXJ2YWJsZS5kaXNwYXRjaCwgMCwgeyBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRW1wdHlPYnNlcnZhYmxlO1xufShPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkpO1xuZXhwb3J0cy5FbXB0eU9ic2VydmFibGUgPSBFbXB0eU9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FbXB0eU9ic2VydmFibGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvb2JzZXJ2YWJsZS9FbXB0eU9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL09ic2VydmFibGUnKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG52YXIgU2NhbGFyT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNjYWxhck9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2NhbGFyT2JzZXJ2YWJsZSh2YWx1ZSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLl9pc1NjYWxhciA9IHRydWU7XG4gICAgICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NhbGFyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2NhbGFyT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAodmFsdWUsIHNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IFNjYWxhck9ic2VydmFibGUodmFsdWUsIHNjaGVkdWxlcik7XG4gICAgfTtcbiAgICBTY2FsYXJPYnNlcnZhYmxlLmRpc3BhdGNoID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBkb25lID0gc3RhdGUuZG9uZSwgdmFsdWUgPSBzdGF0ZS52YWx1ZSwgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXI7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoc3RhdGUpO1xuICAgIH07XG4gICAgU2NhbGFyT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShTY2FsYXJPYnNlcnZhYmxlLmRpc3BhdGNoLCAwLCB7XG4gICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsIHZhbHVlOiB2YWx1ZSwgc3Vic2NyaWJlcjogc3Vic2NyaWJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNjYWxhck9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLlNjYWxhck9ic2VydmFibGUgPSBTY2FsYXJPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NhbGFyT2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vYnNlcnZhYmxlL1NjYWxhck9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBBcnJheU9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4vQXJyYXlPYnNlcnZhYmxlJyk7XG5leHBvcnRzLm9mID0gQXJyYXlPYnNlcnZhYmxlXzEuQXJyYXlPYnNlcnZhYmxlLm9mO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2YuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvb2JzZXJ2YWJsZS9vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnNjaGVkdWxlID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc1NjaGVkdWxlciA9IGlzU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNTY2hlZHVsZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvdXRpbC9pc1NjaGVkdWxlci5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3Jlc29sdmUgdXJsIS4vYXBwLWNvbnRhaW5lci5jb21wb25lbnQuc3R5bFwiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvYXBwLWNvbnRhaW5lci5jb21wb25lbnQuc3R5bFxuLy8gbW9kdWxlIGlkID0gMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3Jlc29sdmUgdXJsIS4vcGxhY2UtZmlsdGVyLmNvbXBvbmVudC5zdHlsXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtZmlsdGVyL3BsYWNlLWZpbHRlci5jb21wb25lbnQuc3R5bFxuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCI7XG5pbXBvcnQgeyBXaWRnZXRQbGFjZUl0ZW0gfSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvV2lkZ2V0UGxhY2VJdGVtXCI7XG5cbmNvbnN0IHBsYWNlcyA9IFt7XG4gIGlkOiBcIjBcIixcbiAgZmlyc3RJbWFnZTogXCJhc3NldHMvaW1nL3dpZGdldC8xLmpwZ1wiLFxuICBzZWNvbmRJbWFnZTogXCJhc3NldHMvaW1nL3dpZGdldC8yLmpwZ1wiLFxuICB0eXBlczogW1wiYWxsXCIsIFwiZmlzaGluZ1wiXSxcbiAgdGVtcGVyYXR1cmU6IDE0LFxuICBodW1pZGl0eTogMjAsXG4gIGZvbGxvd2VyczogMjg1MCxcbiAgZm9sbG93aW5nOiA2NzUsXG4gIHdlYXRoZXJUaXRsZTogXCJ3ZWF0aGVyIHRpdGxlIDFcIixcbiAgc3RhdHNUaXRsZTogXCJzdGF0cyB0aXRsZSAxXCIsXG4gIHBsYWNlVGl0bGU6IFwicGxhY2UgdGl0bGUgMVwiXG59LCB7XG4gIGlkOiBcIjFcIixcbiAgZmlyc3RJbWFnZTogXCJhc3NldHMvaW1nL3dpZGdldC8zLmpwZ1wiLFxuICBzZWNvbmRJbWFnZTogXCJhc3NldHMvaW1nL3dpZGdldC80LmpwZ1wiLFxuICB0eXBlczogW1wiYWxsXCIsIFwiaG90ZWxcIl0sXG4gIHRlbXBlcmF0dXJlOiAxNSxcbiAgaHVtaWRpdHk6IDIxLFxuICBmb2xsb3dlcnM6IDM4NTAsXG4gIGZvbGxvd2luZzogNzc1LFxuICB3ZWF0aGVyVGl0bGU6IFwid2VhdGhlciB0aXRsZSAyXCIsXG4gIHN0YXRzVGl0bGU6IFwic3RhdHMgdGl0bGUgMlwiLFxuICBwbGFjZVRpdGxlOiBcInBsYWNlIHRpdGxlIDJcIlxufV07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpeHR1cmVTZXJ2aWNlIHtcbiAgZ2V0RGF0YTogKCkgPT4gT2JzZXJ2YWJsZTxXaWRnZXRQbGFjZUl0ZW1bXT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXh0dXJlU2VydmljZSBpbXBsZW1lbnRzIElGaXh0dXJlU2VydmljZSB7XG4gIGdldERhdGEoKTogT2JzZXJ2YWJsZTxXaWRnZXRQbGFjZUl0ZW1bXT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHBsYWNlcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9zZXJ2aWNlcy9GaXh0dXJlU2VydmljZS50cyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL21haW4udHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWNvbnRhaW5lclwiLFxuICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vYXBwLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbFwiKSxcbiAgc3R5bGVzOiBbIHJlcXVpcmUoXCIuL2FwcC1jb250YWluZXIuY29tcG9uZW50LnN0eWxcIikgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb250YWluZXJDb21wb25lbnQge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci9hcHAtY29udGFpbmVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV2lkZ2V0UGxhY2VJdGVtIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL1dpZGdldFBsYWNlSXRlbVwiO1xuXG5AUGlwZSh7XG4gIG5hbWU6IFwiZmlsdGVyVHlwZVwiXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShwbGFjZXM6IEFycmF5PFdpZGdldFBsYWNlSXRlbT4sIGN1cnJlbnRGaWx0ZXJJZDogc3RyaW5nKTogQXJyYXk8V2lkZ2V0UGxhY2VJdGVtPiB7XG4gICAgcmV0dXJuIHBsYWNlc1xuICAgICAgLmZpbHRlcigocGxhY2VJdGVtOiBXaWRnZXRQbGFjZUl0ZW0pID0+ICEhfnBsYWNlSXRlbS50eXBlcy5pbmRleE9mKGN1cnJlbnRGaWx0ZXJJZCkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL2ZpbHRlci10eXBlLnBpcGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGaWx0ZXJQbGFjZUl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvRmlsdGVyUGxhY2VJdGVtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlVHlwZUV2ZW50IHtcbiAgc2VsZWN0ZWQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYWNlLWZpbHRlclwiLFxuICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcGxhY2UtZmlsdGVyLmNvbXBvbmVudC5odG1sXCIpLFxuICBzdHlsZXM6IFsgcmVxdWlyZShcIi4vcGxhY2UtZmlsdGVyLmNvbXBvbmVudC5zdHlsXCIpIF1cbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VGaWx0ZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIGN1cnJlbnRGaWx0ZXJJZDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VUeXBlOiBFdmVudEVtaXR0ZXI8Q2hhbmdlVHlwZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBmaWx0ZXJUeXBlczogQXJyYXk8RmlsdGVyUGxhY2VJdGVtPiA9IFt7XG4gICAgaWQ6IFwiYWxsXCIsXG4gICAgbmFtZTogXCJBbGxcIlxuICB9LCB7XG4gICAgaWQ6IFwiaG90ZWxcIixcbiAgICBuYW1lOiBcIkhvdGVsXCJcbiAgfSwge1xuICAgIGlkOiBcImZpc2hpbmdcIixcbiAgICBuYW1lOiBcIkZpc2hpbmdcIlxuICB9LCB7XG4gICAgaWQ6IFwidG91clwiLFxuICAgIG5hbWU6IFwiVG91clwiXG4gIH1dO1xuXG4gIGNoYW5nZVR5cGVIYW5kbGVyKGU6IE1vdXNlRXZlbnQsIGZpbHRlclR5cGVJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2hhbmdlVHlwZS5lbWl0KHtzZWxlY3RlZDogZmlsdGVyVHlwZUlkfSBhcyBDaGFuZ2VUeXBlRXZlbnQpO1xuICB9XG5cbiAgY2hlY2tTZWxlY3RlZChmaWx0ZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZpbHRlcklkID09PSB0aGlzLmN1cnJlbnRGaWx0ZXJJZDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWZpbHRlci9wbGFjZS1maWx0ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV2lkZ2V0UGxhY2VJdGVtIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL1dpZGdldFBsYWNlSXRlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVBsYWNlRXZlbnQge1xuICBzZWxlY3RlZDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGxhY2UtaXRlbVwiLFxuICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcGxhY2UtaXRlbS5jb21wb25lbnQuaHRtbFwiKVxufSlcbmV4cG9ydCBjbGFzcyBQbGFjZUl0ZW1Db21wb25lbnQge1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VQbGFjZTogRXZlbnRFbWl0dGVyPENoYW5nZVBsYWNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHByaXZhdGUgcGxhY2VJdGVtOiBXaWRnZXRQbGFjZUl0ZW07XG5cbiAgQElucHV0KClcbiAgcHJpdmF0ZSBpc1NlbGVjdGVkOiBib29sZWFuO1xuXG4gIGNoYW5nZVBsYWNlSGFuZGxlcihwbGFjZUl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlUGxhY2UuZW1pdCh7IHNlbGVjdGVkOiBwbGFjZUl0ZW1JZCB9IGFzIENoYW5nZVBsYWNlRXZlbnQpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtaXRlbS9wbGFjZS1pdGVtLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFdpZGdldFBsYWNlSXRlbSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9XaWRnZXRQbGFjZUl0ZW1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQbGFjZUV2ZW50IHtcbiAgc2VsZWN0ZWQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBsYWNlLWNvbXBvbmVudFwiLFxuICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcGxhY2UuY29tcG9uZW50Lmh0bWxcIilcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHBsYWNlczogQXJyYXk8V2lkZ2V0UGxhY2VJdGVtPjtcblxuICBjdXJyZW50RmlsdGVySWQgPSBcImFsbFwiO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VQbGFjZTogRXZlbnRFbWl0dGVyPENoYW5nZVBsYWNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkOiBzdHJpbmc7XG5cbiAgZ2V0IGhlYWRlckltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGxhY2VzXG4gICAgICAuZmlsdGVyKChwbGFjZUl0ZW06IFdpZGdldFBsYWNlSXRlbSkgPT4gcGxhY2VJdGVtLmlkID09PSB0aGlzLnNlbGVjdGVkKVswXS5maXJzdEltYWdlO1xuICB9XG5cbiAgY2hhbmdlVHlwZUhhbmRsZXIoY3VycmVudEZpbHRlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJJZCA9IGN1cnJlbnRGaWx0ZXJJZDtcbiAgfVxuXG4gIGNoYW5nZVBsYWNlSGFuZGxlcihwbGFjZUl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQbGFjZS5lbWl0KHsgc2VsZWN0ZWQ6IHBsYWNlSXRlbUlkIH0gYXMgQ2hhbmdlUGxhY2VFdmVudCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzdGF0cy1jb21wb25lbnRcIixcbiAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3N0YXRzLmNvbXBvbmVudC5odG1sXCIpXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRzQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBwcml2YXRlIGN1cnJlbnRQbGFjZTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FwcC9hcHAtY29udGFpbmVyL3dpZGdldC9zdGF0cy9zdGF0cy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIndlYXRoZXItY29tcG9uZW50XCIsXG4gIHRlbXBsYXRlOiByZXF1aXJlKFwiLi93ZWF0aGVyLmNvbXBvbmVudC5odG1sXCIpXG59KVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXJyZW50UGxhY2U7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLWNvbnRhaW5lci93aWRnZXQvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBXaWRnZXRQbGFjZUl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvV2lkZ2V0UGxhY2VJdGVtXCI7XG5pbXBvcnQgeyBGaXh0dXJlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9GaXh0dXJlU2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ3aWRnZXRcIixcbiAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3dpZGdldC5jb21wb25lbnQuaHRtbFwiKVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRDb21wb25lbnQge1xuXG4gIHBsYWNlczogV2lkZ2V0UGxhY2VJdGVtW107XG4gIHNlbGVjdGVkSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpeHR1cmVTZXJ2aWNlOiBGaXh0dXJlU2VydmljZSkge1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIGdldCBsb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5wbGFjZXM7XG4gIH1cblxuICBnZXQgY3VycmVudFBsYWNlKCk6IFdpZGdldFBsYWNlSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMucGxhY2VzXG4gICAgICAuZmlsdGVyKChwbGFjZUl0ZW06IFdpZGdldFBsYWNlSXRlbSkgPT4gcGxhY2VJdGVtLmlkID09PSB0aGlzLnNlbGVjdGVkSWQpWzBdO1xuICB9XG5cbiAgY2hhbmdlUGxhY2UocGxhY2VJdGVtSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJZCA9IHBsYWNlSXRlbUlkO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcbiAgICB0aGlzLmZpeHR1cmVTZXJ2aWNlXG4gICAgICAuZ2V0RGF0YSgpXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiBXaWRnZXRQbGFjZUl0ZW1bXSkgPT4ge1xuICAgICAgICB0aGlzLnBsYWNlcyA9IGRhdGE7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9IGRhdGFbMF0uaWQ7XG4gICAgICB9LCBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvYXBwL2FwcC1jb250YWluZXIvd2lkZ2V0L3dpZGdldC5jb21wb25lbnQudHMiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEFwcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2FwcC1jb250YWluZXIvYXBwLWNvbnRhaW5lci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdpZGdldENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC1jb250YWluZXIvd2lkZ2V0L3dpZGdldC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBsYWNlQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXZWF0aGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLWNvbnRhaW5lci93aWRnZXQvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3RhdHNDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAtY29udGFpbmVyL3dpZGdldC9zdGF0cy9zdGF0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBsYWNlSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2FwcC1jb250YWluZXIvd2lkZ2V0L3BsYWNlL3BsYWNlLWl0ZW0vcGxhY2UtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBsYWNlRmlsdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvcGxhY2UtZmlsdGVyL3BsYWNlLWZpbHRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpbHRlclR5cGVQaXBlIH0gZnJvbSBcIi4vYXBwLWNvbnRhaW5lci93aWRnZXQvcGxhY2UvZmlsdGVyLXR5cGUucGlwZVwiO1xuXG5pbXBvcnQgeyBGaXh0dXJlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9GaXh0dXJlU2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb250YWluZXJDb21wb25lbnQsXG4gICAgV2lkZ2V0Q29tcG9uZW50LFxuICAgIFBsYWNlQ29tcG9uZW50LFxuICAgIFdlYXRoZXJDb21wb25lbnQsXG4gICAgU3RhdHNDb21wb25lbnQsXG4gICAgUGxhY2VJdGVtQ29tcG9uZW50LFxuICAgIFBsYWNlRmlsdGVyQ29tcG9uZW50LFxuICAgIEZpbHRlclR5cGVQaXBlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW0ZpeHR1cmVTZXJ2aWNlXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hcHAvYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=