import Utils from '../core/utils';
import BaseEncoderMotor from './BaseEncoderMotor';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

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
   * 获取协议
   */
  protocol() {
    return Utils.composer(protocolAssembler.readEncoderMotorOnBoard, [this.args.slot, this.args.type]);
  }

  /**
   * Get Speed of the encoder motor runs
   * @return  {Promise} return promise
   */
  readSpeed(){
    this.args.type = 0x02;
    return this;
  }

  /**
   * get angle offset to the start position
   * @return  {Promise} return promise
   */
  readAngle(){
    this.args.type = 0x01;
    return this;
  }

  async getData () {
    return await Control.read(this.protocol());
  }

  static supportStamp(){
    return '0110';
  }
}

export default EncoderMotorOnBoard;