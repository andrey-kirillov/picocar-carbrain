// import BuiltInLed from './modules/builtInLed';
// import Buzzer from './modules/buzzer';
const {Servo} = require('servo');

/** Servo **/
const servo = new Servo();
// attach to GP15
servo.attach(7);
// Turn from 0 to 180 by 10 degrees
// for (let i = 0; i <= 180; i = i+10) {
//     console.log(i);
//     servo.write(i);
//     delay(500);
// }
servo.write(0);
delay(2500);
servo.write(90);
delay(2500);
servo.write(180);
delay(2500);
servo.write(90);
delay(2500);
servo.write(0);

/** LED **/
// const led = new BuiltInLed();
// led.toggleWithInterval();

/** Buzzer **/
// const buzzer = new Buzzer();
// buzzer.playTest();
