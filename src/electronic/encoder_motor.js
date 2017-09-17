import BaseEncoderMotor from './BaseEncoderMotor';
/**
 * EncoderMotor sensor module
 * @extends BaseEncoderMotor
 */
class EncoderMotor extends BaseEncoderMotor {
  constructor(port, slot) {
    super(port, slot);
  }

  static get supportStamp(){
    return '0101';
  }
}

export default EncoderMotor;