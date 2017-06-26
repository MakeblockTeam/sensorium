import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import EncoderMotorBase from './base/EncoderMotorBase';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

const bufComposer = function(args){
  return Utils.composer(protocolAssembler.readEncoderMotorOnBoard, [args.slot, args.type]);
}

class EncoderMotorOnBoard extends EncoderMotorBase {
  /**
   * EncoderMotorOnBoard
   * @constructor
   * @param {number} port
   */
  constructor(slot) {
    super(slot);
    Object.assign(this.args, {
      type: null
    });
  }

  /**
   * get speed to the start position
   * @param  {Function} callback 
   */
  readSpeed(callback){
    this.args.type = 0x02;
    //组装buf
    let buf = bufComposer(this.args);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  /**
   * get angle offset to the start position
   * @param  {Function} callback 
   */
  readAngle(callback){
    this.args.type = 0x01;
    //组装buf
    let buf = bufComposer(this.args);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  //主控支持戳：描述各主控的支持情况
  //auriga megapi 支持
  static supportStamp(){
    return '0110';
  }
}

export default EncoderMotorOnBoard;