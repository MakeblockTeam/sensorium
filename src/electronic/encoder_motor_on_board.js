import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import EncoderMotorBase from './base/EncoderMotorBase';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

const bufComposer = function(args){
  return Utils.composer(protocolAssembler.readEncoderMotorOnBoard, [args.slot, args.type]);
}

class EncoderMotorOnBoard extends EncoderMotorBase {
  constructor(slot) {
    super(slot);
    Object.assign(this.args, {
      type: null
    });
  }

  readSpeed(callback){
    this.args.type = 0x02;
    let buf = bufComposer(this.args);
    command.execRead(buf, callback);
    return this;
  }

  /**
   * get angle offset to the start position
   * @param  {Function} callback
   */
  readAngle(callback){
    this.args.type = 0x01;
    let buf = bufComposer(this.args);
    command.execRead(buf, callback);
    return this;
  }

  static supportStamp(){
    return '0110';
  }
}

export default EncoderMotorOnBoard;