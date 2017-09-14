import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

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
   * 获取协议
   */
  protocol() {
    return Utils.composer(protocolAssembler.readJoystick, [this.args.port, this.args.axis]);
  }

  /**
   * Get data of Joystick sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol());
  }

  static supportStamp(){
    return '1111';
  }
}

export default Joystick;