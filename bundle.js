/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var PicoCYW43 = (__webpack_require__(2).PicoCYW43);
var pico_cyw43 = new PicoCYW43();
var BuiltInLed = /** @class */ (function () {
    function BuiltInLed(ledNumber) {
        if (ledNumber === void 0) { ledNumber = 0; }
        var _this = this;
        this.ledNumber = ledNumber;
        this.ledOn = function () { return pico_cyw43.putGpio(_this.ledNumber, true); };
        this.ledOff = function () { return pico_cyw43.putGpio(_this.ledNumber, false); };
        this.isLedOn = function () { return pico_cyw43.getGpio(_this.ledNumber); };
    }
    BuiltInLed.prototype.on = function () {
        this.ledOn();
    };
    BuiltInLed.prototype.off = function () {
        this.ledOff();
    };
    BuiltInLed.prototype.toggle = function () {
        this.isLedOn() ? this.ledOff() : this.ledOn();
    };
    BuiltInLed.prototype.toggleWithInterval = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 1000; }
        setInterval(function () {
            _this.toggle();
        }, delay);
    };
    return BuiltInLed;
}());
exports["default"] = BuiltInLed;


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("pico_cyw43");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
var builtInLed_1 = __webpack_require__(1);
// LED
var led = new builtInLed_1.default();
led.toggleWithInterval();
// Buzzer
// const buzzer = new Buzzer();
// buzzer.playTest();

})();

/******/ })()
;