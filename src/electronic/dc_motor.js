import Utils from '../core/utils';
import BaseMotor from './BaseMotor';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';
/**
 * DcMotor sensor module
 * @extends BaseMotor
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
   * getter of protocol
   */
  get protocol () {
    return Utils.composer(protocolAssembler.setDcMotor, [this.args.port, this.args.speed]);
  }

  /**
   * run
   */
  run() {
    Control.write(this.protocol);
    return this;
  }

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default DcMotor;