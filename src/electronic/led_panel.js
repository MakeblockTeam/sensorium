var Transport = require('../communicate/transport');
var Api = require("../protocol/api");

class LedPanel {
  constructor() {
    this.port = 0;
    this.slot = 2;
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
    this.api.setLedPanelOnBoard(this.position, this.r, this.g, this.b);
  }

  turnOff() {
    this.api.setLedPanelOnBoard(this.position, 0, 0, 0);
  }

  blue() {
    this.api.setLedPanelOnBoard(this.position, 0, 0, 100);
  }

  red() {

  }

  green() {

  }
}

module.exports = LedPanel;