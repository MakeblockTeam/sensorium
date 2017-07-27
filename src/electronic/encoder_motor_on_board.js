import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import BaseEncoderMotor from './BaseEncoderMotor';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

const bufComposer = function(args){
  return Utils.composer(protocolAssembler.readEncoderMotorOnBoard, [args.slot, args.type]);
}

class EncoderMotorOnBoard extends BaseEncoderMotor {
  constructor(slot) {
    super(0, slot);
    Object.assign(this.args, {
      type: 2
    });
  }

  getSpeed(callback){
    this.args.type = 0x02;
    let buf = bufComposer(this.args);
    CommandManager.read(buf, callback);
    return this;
  }

  /**
   * get angle offset to the start position
   * @param  {Function} callback
   */
  getAngle(callback){
    this.args.type = 0x01;
    let buf = bufComposer(this.args);
    CommandManager.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '0110';
  }
}

export default EncoderMotorOnBoard;