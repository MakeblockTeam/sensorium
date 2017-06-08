const Electronic = require('./electronic');

class LedPanel extends Electronic {
  constructor() {
    super(0, 2);
    this.on = false;
    this.position = 0;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  turnOn(r, g, b) {
    this.r = typeof r === 'number' ? r : this.r;
    this.g = typeof g === 'number' ? g : this.g;
    this.b = typeof b === 'number' ? b : this.b;
    this._run(this.r, this.g, this.b);
    return this;
  }

  turnOff() {
    this._run(0, 0, 0);
    return this;
  }

  red() {
    this.r = 100;
    this.g = 0;
    this.b = 0;
    this._run();
    return this;
  }

  green() {
    this.r = 0;
    this.g = 100;
    this.b = 0;
    this._run();
    return this;
  }

  blue() {
    this.r = 0;
    this.g = 0;
    this.b = 100;
    this._run();
    return this;
  }

  _run(r, g, b) {
    r = typeof r === 'number' ? r : this.r;
    g = typeof g === 'number' ? g : this.g;
    b = typeof b === 'number' ? b : this.b;
    this.api.setLedPanelOnBoard(this.position, r, g, b);
  }
}

module.exports = LedPanel;