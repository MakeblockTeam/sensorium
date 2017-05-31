import Transport from '../communicate/transport';
import Api from "../protocol/api";

class DcMotor {

  constructor(port, slot) {
    this.port = port;
    this.slot = slot;
    this.on = false;
    this.speed = 0;
    this.direction = 1;
    this.transport = Transport.get();
    this.api = new Api(this.transport);
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

export default DcMotor;