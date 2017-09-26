import {
  fiterWithBinaryStr
} from '../core/utils';
import BaseEncoderMotor from './BaseEncoderMotor';
import Control from '../communicate/control';
import {
  SUPPORTLIST
} from '../settings';

/**
 * EncoderMotorOnBoard sensor module
 * @extends BaseEncoderMotor
 */
class EncoderMotorOnBoard extends BaseEncoderMotor {
  constructor(slot) {
    super(0, slot);
    Object.assign(this.args, {
      type: 0x02
    });
  }

  /**
   * Get Speed of the encoder motor runs
   * @return  {Promise} return promise
   */
  readSpeed() {
    this.isReadType = true;
    this.args.type = 0x02;
    return this;
  }

  /**
   * get angle offset to the start position
   * @return  {Promise} return promise
   */
  readAngle() {
    this.isReadType = true;
    this.args.type = 0x01;
    return this;
  }

  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '0110');
  }
}

export default EncoderMotorOnBoard;