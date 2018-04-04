import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST,
  INFRARED_BUTTON
} from '../settings';

/**
 * 所有主控板（包括MegaPiPro）都有 2 种类型：外接的红外传感器，外接的被动式红外探测器
 * mcore 一共有 4 种红外相关的传感器，即除了上述 2 种，还有板载的红外传感器，且板载的分别是“发射端”、“接收端” 2 种

 * mcore 红外线接收端（读） id 0x0e
 * mcore 红外线发射端（写）id 0x0d
 * 其他主控板，红外传感器统一为接收端 (读) - id 0x10
 * 其他主控板，被动式红外传感器统一为接收端 (读) - id 0x0f
 */

/**
 * InfraredOnBoard sensor module
 * @describe this interface is only for mcore and mcore has two kind of InfraredOnBoard sensor
 * @extends Electronic
 */
class InfraredOnBoard extends Electronic {
  constructor() {
    super();
    this.args = {
      port: 0x00,
      key: 0x45 // A
    }
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.readInfraredOnboard, [this.args.port, this.args.key]);
  }

  checkKeyPressed(key) {
    let keyCode = INFRARED_BUTTON[key];
    if(typeof keyCode !== 'undefined') {
      this.args.key = keyCode;
    }
    return this;
  }

  /**
   * Get data of Infrared sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '10000');
  }
}

export default InfraredOnBoard;