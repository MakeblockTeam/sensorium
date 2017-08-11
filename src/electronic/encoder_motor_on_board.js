import Utils from '../core/utils';
import BaseEncoderMotor from './BaseEncoderMotor';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

const bufComposer = function(args){
  return Utils.composer(protocolAssembler.readEncoderMotorOnBoard, [args.slot, args.type]);
}

/**
 * EncoderMotorOnBoard sensor module
 * @extends BaseEncoderMotor
 */
class EncoderMotorOnBoard extends BaseEncoderMotor {
  constructor(slot) {
    super(0, slot);
    Object.assign(this.args, {
      type: 2
    });
  }

  async getSpeed(){
    this.args.type = 0x02;
    let buf = bufComposer(this.args);
    return await CommandManager.read(buf);
  }

  /**
   * get angle offset to the start position
   * @param  {Function} callback
   */
  async getAngle(){
    this.args.type = 0x01;
    let buf = bufComposer(this.args);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '0110';
  }
}

export default EncoderMotorOnBoard;