const { PWM } = require('pwm');

class Buzzer {
  private readonly pinNumber: number;
  private readonly pwm: typeof PWM;

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

export default Buzzer;
