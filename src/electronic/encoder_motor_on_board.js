import Utils from '../core/utils';
import BaseEncoderMotor from './BaseEncoderMotor';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

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

  /**
   * Get Speed of the encoder motor runs
   * @return  {Promise} return promise
   */
  async getSpeed(){
    this.args.type = 0x02;
    let buf = bufComposer(this.args);
    return await Control.read(buf);
  }

  /**
   * get angle offset to the start position
   * @return  {Promise} return promise
   */
  async getAngle(){
    this.args.type = 0x01;
    let buf = bufComposer(this.args);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '0110';
  }
}

export default EncoderMotorOnBoard;