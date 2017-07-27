import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

let commandRead = function(args, callback){
  let buf = Utils.composer(protocolAssembler.readHumiture, [args.port, args.type]);
  CommandManager.read(buf, callback);
}

class Humiture extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      type: 0
    };
  }

  getHumidity(callback){
    this.args.type = 0;
    commandRead(this.args, callback);
    return this;
  }

  getTemperature(callback){
    this.args.type = 1;
    commandRead(this.args, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Humiture;