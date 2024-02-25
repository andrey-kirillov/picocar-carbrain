/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const { PicoCYW43 } = __webpack_require__(2);
const pico_cyw43 = new PicoCYW43();

class BuiltInLed {
  constructor(ledNumber = 0) {
    this.ledNumber = ledNumber;
    this.ledOn = () => pico_cyw43.putGpio(this.ledNumber, true);
    this.ledOff = () => pico_cyw43.putGpio(this.ledNumber, false);
    this.isLedOn = () => pico_cyw43.getGpio(this.ledNumber);
  }

  on() {
    this.ledOn();
  }

  off() {
    this.ledOff();
  }

  toggle() {
    this.isLedOn() ? this.ledOff() : this.ledOn();
  }

  toggleWithInterval(delay = 1000) {
    setInterval(() => {
     this.toggle()
    }, delay);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuiltInLed);


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("pico_cyw43");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const { PWM } = __webpack_require__(4);

class Buzzer {
  constructor(pinNumber = 26) {
    this.pinNumber = pinNumber;
    this.pwm = new PWM(this.pinNumber, 100, 0.5);
  }

  start() {
    this.pwm.start();
  }

  stop() {
    this.pwm.stop();
  }

  close() {
    this.pwm.close();
  }

  setFrequency(freq) {
    this.pwm.setFrequency(freq);
  }

  setDuty(duty) {
    this.pwm.setDuty(duty);
  }

  playTest() {
    this.start();
    const interval = setInterval(() => {
      [262, 294, 330, 350, 392, 440, 494].forEach((freq) => {
        delay(100);
        this.setFrequency(freq);
      });
    }, 700);

    setTimeout(() => {
      clearInterval(interval);
      this.stop();
    }, 5000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buzzer);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("pwm");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_builtInLed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_buzzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



// LED
const led = new _modules_builtInLed__WEBPACK_IMPORTED_MODULE_0__["default"]();
led.toggleWithInterval();

// Buzzer
const buzzer = new _modules_buzzer__WEBPACK_IMPORTED_MODULE_1__["default"]();
buzzer.playTest();

})();

/******/ })()
;