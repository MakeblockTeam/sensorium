import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class TemperatureOnBoard extends Electronic {
  constructor() {
    super();
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readTemperatureOnBoard);
    command.execRead(buf, callback);
    return this;
  }

  static supportStamp(){
    return '0100';
  }
}

export default TemperatureOnBoard;