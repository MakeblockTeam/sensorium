import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

let commandRead = async function(args){
  let buf = Utils.composer(protocolAssembler.readHumiture, [args.port, args.type]);
  return await CommandManager.read(buf);
}

class Humiture extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      type: 0
    };
  }

  async getHumidity(){
    this.args.type = 0;
    return await commandRead(this.args);
  }

  async getTemperature(){
    this.args.type = 1;
    return await commandRead(this.args);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Humiture;