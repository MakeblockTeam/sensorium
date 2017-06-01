var Transport = require('../communicate/transport');
var Api = require("../protocol/api");

class RgbLed {
  constructor(port, slot) {
    this.port = port;
    this.slot = slot;
    this.on = false;
    this.position = 0;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.api = new Api(Transport.get());
  }

  turnOn(r,g,b) {
    this.r = r || this.r;
    this.g = g || this.g;
    this.b = b || this.b;
    this.api.setLed(this.port, this.slot, this.position, this.r, this.g, this.b);
  }

  turnOff() {
    this.api.setLed(this.port, this.slot, this.position, 0, 0, 0);
  }

  blue() {
    this.api.setLed(this.port, this.slot, this.position, 0, 255, 0);
  }

  red() {

  }

  green() {

  }
}

module.exports = RgbLed;