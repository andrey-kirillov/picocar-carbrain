"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PicoCYW43 = require('pico_cyw43').PicoCYW43;
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
exports.default = BuiltInLed;
