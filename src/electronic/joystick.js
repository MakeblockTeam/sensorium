import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Joystick extends Electronic {
  constructor(port, axis) {
    super();
    this.args = {
      port: defineNumber(port),
      axis: defineString(axis)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readJoystick, [this.args.port, this.args.axis]);
    command.execRead(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Joystick;