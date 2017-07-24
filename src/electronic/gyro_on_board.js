import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import BaseGyro from './BaseGyro';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class GyroOnBoard extends BaseGyro {
  constructor() {
    super(1);
  }

  static supportStamp(){
    return '0110';
  }
}

export default GyroOnBoard;