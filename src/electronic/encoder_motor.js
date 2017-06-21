import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import EncoderMotorBase from './base/EncoderMotorBase';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class EncoderMotor extends EncoderMotorBase {

  /**
   * DC Motor
   * @constructor
   * @param {number} port
   */
  constructor(port, slot) {
    super(port, slot);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '0101';
  }
}

export default EncoderMotor;