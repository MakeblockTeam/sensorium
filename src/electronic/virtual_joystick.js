import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class VirtualJoystick extends Electronic {

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
      speed: 0
    };
  }

  /**
   * set speed
   * @param  {Number} speed
   * @return {Object} the instance
   */
  speed(speed){
    this.args.speed = defineNumber(speed, 0);
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

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '0110';
  }
}

export default VirtualJoystick;