import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class TemperatureOnBoard extends Electronic {
  constructor() {
    super(0x0d);
  }

  async getData() {
    let buf = Utils.composer(protocolAssembler.readTemperatureOnBoard);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '0100';
  }
}

export default TemperatureOnBoard;