// import BuiltInLed from './modules/builtInLed';
// import Buzzer from './modules/buzzer';
// const { Servo } = require('servo');
import DcMotor from "./modules/dcMotor";
import setWifiEventHandler, { TEventHandler } from './modules/wifi';


/** DC Motor **/
const dcMotor = new DcMotor(19, 18, 35, 0.2);
DcMotor.setGlobalSpeed(0.3);

/** Wifi **/
const wifiEventHandler: TEventHandler = (cmd) => {
    console.log(`wifiEventHandler ${cmd}`);
    switch (cmd) {
        case 'dc:forward':
            console.log(`case ${cmd}`);
            dcMotor.startForward();
            break;
        case 'dc:backward':
            console.log(`case ${cmd}`);
            dcMotor.startBackward();
            break;
        case 'dc:stop':
            console.log(`case ${cmd}`);
            dcMotor.stop();
            break;
        default:
            console.log('Unknown wifi/http command')

    }
}
setWifiEventHandler(wifiEventHandler);

/** Servo **/
// const servo = new Servo();
// attach to GP15
// servo.attach(7);
// Turn from 0 to 180 by 10 degrees
// for (let i = 0; i <= 180; i = i+10) {
//     console.log(i);
//     servo.write(i);
//     delay(500);
// }
// servo.write(0);
// delay(500);
// servo.write(90);
// delay(500);
// servo.write(180);
// delay(500);
// servo.write(90);
// delay(500);
// servo.write(0);

/** LED **/
// const led = new BuiltInLed();
// led.toggleWithInterval();

/** Buzzer **/
// const buzzer = new Buzzer();
// buzzer.playTest();
