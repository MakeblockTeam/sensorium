import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import GyroBase from './base/GyroBase';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class GyroOnBoard extends GyroBase {
  constructor() {
    super(1);
  }

  static supportStamp(){
    return '0110';
  }
}

export default GyroOnBoard;