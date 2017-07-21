import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Joystick extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port),
      axis: 1
    };
  }

  axis(axis){
    this.args.axis = defineNumber(axis, this.args.axis);
    return this;
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readJoystick, [this.args.port, this.args.axis]);
    command.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Joystick;