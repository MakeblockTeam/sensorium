const RgbLed = require('./rgb_led');

class FourRgbLed extends RgbLed {
  constructor(port) {
    super(port);
  }

  _run() {
    let r = this.ledR,
      g = this.ledG,
      b = this.ledB;
    if (arguments.length !== 0) {
      [r, g, b] = arguments;
    }
    this.api.setLed(this.port, 2, this.ledPosition, r, g, b);
  }
}