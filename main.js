"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builtInLed_1 = require("./modules/builtInLed");
// LED
var led = new builtInLed_1.default();
led.toggleWithInterval();
// Buzzer
// const buzzer = new Buzzer();
// buzzer.playTest();
