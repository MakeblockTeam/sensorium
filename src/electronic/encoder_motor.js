import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import BaseEncoderMotor from './BaseEncoderMotor';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * EncoderMotor sensor module
 * @extends BaseEncoderMotor
 */
class EncoderMotor extends BaseEncoderMotor {
  constructor(port, slot) {
    super(port, slot);
  }

  static supportStamp(){
    return '0101';
  }
}

export default EncoderMotor;