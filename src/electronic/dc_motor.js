import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import MotorBase from './base/MotorBase';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class DcMotor extends MotorBase {

  /**
   * DC Motor
   * @constructor
   * @param {number} port
   */
  constructor(port) {
    super(port);
  }

  /**
   * dcMoter run
   * @return {Object} the instance
   */
  run() {
    //组装buf
    let buf = Utils.composer(protocolAssembler.setDcMotor, [this.args.port, this.args.speed]);
    //执行
    Command.execWrite(buf);
    return this;
  }

  /**
   * dcMoter run reversely
   * @return {Object} the instance
   */
  runReverse() {
    this.speed(-1 * this.args.speed);
    return this.run();
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }
}

export default DcMotor;