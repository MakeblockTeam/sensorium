import Utils from '../core/utils';
import BaseMotor from './BaseMotor';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

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
   * 获取协议
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

  static get supportStamp(){
    return '1111';
  }
}

export default DcMotor;