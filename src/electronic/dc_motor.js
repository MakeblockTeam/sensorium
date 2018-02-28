import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import BaseMotor from './BaseMotor';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST
} from '../settings';
/**
 * DcMotor sensor module
 * @extends BaseMotor
 *
 * @example
 * mcore.DcMotor()
 *      .speed(100)
 *      .reverse()  // run with speed -100
 *      .run();
 */
class DcMotor extends BaseMotor {

  constructor(port) {
      super(port);
  }
  /**
   * run reversely
   */
  reverse() {
    this.speed(-1 * this.args.speed);
    return this.run();
  }

  /**
   * a getter interface, which returns the protocol
   */
  get protocol() {
    return composer(protocolAssembler.setDcMotor, [this.args.port, this.args.speed]);
  }

  /**
   * run with previously parameters setting
   * @example
   * mcore.DcMotor().speed(255).run();
   */
  run() {
    Control.write(this.protocol);
    return this;
  }

  /**
   * a getter interface, which returns the mainboards the DcMotor module supported
   */
  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default DcMotor;