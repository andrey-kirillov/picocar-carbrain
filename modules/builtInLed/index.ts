const { PicoCYW43 } = require('pico_cyw43');
const pico_cyw43 = new PicoCYW43();

class BuiltInLed {
  private readonly ledNumber: number;
  private readonly ledOn: VoidFunction;
  private readonly ledOff: VoidFunction;
  private readonly isLedOn: () => boolean;

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

export default BuiltInLed;
