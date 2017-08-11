import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * Joystick sensor module
 * @extends Electronic
 */
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
  /**
   * Get data of Joystick sensor
   * @return {Promise} 
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readJoystick, [this.args.port, this.args.axis]);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Joystick;