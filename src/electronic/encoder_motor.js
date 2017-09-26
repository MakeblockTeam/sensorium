import BaseEncoderMotor from './BaseEncoderMotor';
import {
  fiterWithBinaryStr
} from '../core/utils';
import {
  SUPPORTLIST
} from '../settings';

/**
 * EncoderMotor sensor module
 * @extends BaseEncoderMotor
 */
class EncoderMotor extends BaseEncoderMotor {
  constructor(port, slot) {
    super(port, slot);
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '0101');
  }
}

export default EncoderMotor;