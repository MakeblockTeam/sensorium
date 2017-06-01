var Transport = require('../communicate/transport');
var Api = require("../protocol/api");

class DcMotor {

  constructor(port, slot) {
    this.port = port;
    this.slot = slot;
    this.on = false;
    this.speed = 0;
    this.api = new Api(Transport.get());
    this.direction = 1;
  }

  start(speed) {
    this.speed = speed || this.speed;
    this._run();
  }

  stop() {
    this.speed = 0;
    this._run();
  }

  _run() {
    this.api.setDcMotor(this.port, this.speed);
  }
}

module.exports = DcMotor;