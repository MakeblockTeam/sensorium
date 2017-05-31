class RgbLed {
  constructor(port, slot) {
    this.port = port;
    this.slot = slot;
    this.on = false;
    this.position = 0;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  turnOn(r,g,b) {
    this.r = r || this.r;
    this.g = g || this.g;
    this.b = b || this.b;
    board.setLed(this.port, this.slot, this.position, this.r, this.g, this.b);
  }

  turnOff() {
    board.setLed(this.port, this.slot, this.position, 0, 0, 0);
  }

  blue() {
    board.setLed(this.port, this.slot, this.position, 0, 255, 0);
  }

  red() {

  }

  green() {

  }
}

export default RgbLed;