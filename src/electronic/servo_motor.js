import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class ServoMotor extends Electronic {

  /**
   * ServoMotor
   * @constructor
   * @param {number} port
   */
  constructor(port, slot) {
    super();
    this.args = {
      port: defineNumber(port),
      slot: defineNumber(slot),
      angle: 0
    };
  }

  /**
   * set angle of degree
   * @param  {Number} degree
   * @return {Object} the instance
   */
  angle(degree){
    this.args.angle = defineNumber(degree, 0);
    return this;
  }

  /**
   * go to the start
   * @return {[type]} [description]
   */
  toStart(){
    this.angle(180);
    return this.go();
  }

  /**
   * go to the end
   * @return {[type]} [description]
   */
  toEnd(){
    this.angle(0);
    return this.go();
  }

  go(){
    let buf = Utils.composer(protocolAssembler.setServoMotor, [this.args.port, this.args.slot, this.args.angle]);
    //执行
    Command.execWrite(buf);
    return this;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }
}

export default ServoMotor;