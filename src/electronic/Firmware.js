import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import {
  warnNotSupport
} from '../core/validate';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST
} from '../settings';
const auriga = SUPPORTLIST[1].toLowerCase();

/**
 * @private
 */
class Firmware extends Electronic {
  constructor() {
    super();
    let host = warnNotSupport(arguments[arguments.length - 1]) || auriga;
    //宿主
    this.hostname = host.toLowerCase();
    this.args = {
      subCmd: 0x11,
      mode: 0
    }
    this.isRead_ = false;
  }

  /**
   * set firmware mode
   * @param {Number} mode
   * 0: ble
   * 1: 自动避障
   * 2: 平衡车
   * 3: 红外
   * 4: 巡线
   */
  setMode(mode) {
    this.isRead_ = false;
    this.args.mode = mode;
    if(this.hostname === auriga) {
      this.args.subCmd = 0x11;
    }else { // megapi, megapipro
      this.args.subCmd = 0x12;
    }
    Control.write(this.protocol);
    return this;
  }

  /**
   * run
   */
  run() {
    Control.write(this.protocol);
    return this;
  }

  /**
   * 当前模式
   */
  currentMode() {
    this.isRead_ = true;
    if(this.hostname === auriga) {
      this.args.subCmd = 0x71;
    }else {
      this.args.subCmd = 0x72;
    }
    return this;
  }

  /**
   * Get data of current mode
   * @return {Promise}
   */
  async getData() {
    this.isRead_ = true;
    return await Control.read(this.protocol);
  }

  /**
   * getter of protocol
   */
  get protocol () {
    if (this.isRead_) {
      return composer(protocolAssembler.readFirmwareMode, [this.args.subCmd]);
    } else {
      return composer(protocolAssembler.setFirmwareMode, [this.args.subCmd, this.args.mode]);
    }
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '0101');
  }
}

export default Firmware;