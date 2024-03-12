"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PWM = require('pwm').PWM;
var Buzzer = /** @class */ (function () {
    function Buzzer(pinNumber) {
        if (pinNumber === void 0) { pinNumber = 26; }
        this.pinNumber = pinNumber;
        this.pwm = new PWM(this.pinNumber, 100, 0.5);
    }
    Buzzer.prototype.start = function () {
        this.pwm.start();
    };
    Buzzer.prototype.stop = function () {
        this.pwm.stop();
    };
    Buzzer.prototype.close = function () {
        this.pwm.close();
    };
    Buzzer.prototype.setFrequency = function (freq) {
        this.pwm.setFrequency(freq);
    };
    Buzzer.prototype.setDuty = function (duty) {
        this.pwm.setDuty(duty);
    };
    Buzzer.prototype.playTest = function () {
        var _this = this;
        this.start();
        var interval = setInterval(function () {
            [262, 294, 330, 350, 392, 440, 494].forEach(function (freq) {
                delay(100);
                _this.setFrequency(freq);
            });
        }, 700);
        setTimeout(function () {
            clearInterval(interval);
            _this.stop();
        }, 5000);
    };
    return Buzzer;
}());
exports.default = Buzzer;
