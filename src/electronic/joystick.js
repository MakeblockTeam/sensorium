import { validateNumber, validateString } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class Joystick extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      axis: 1
    };
  }
  //x y z 轴映射应当在此完成
  axis(axis){
    this.args.axis = validateNumber(axis, this.args.axis);
    return this;
  }

  async getData() {
    let buf = Utils.composer(protocolAssembler.readJoystick, [this.args.port, this.args.axis]);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Joystick;