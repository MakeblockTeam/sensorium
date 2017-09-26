import {composer} from '../../core/utils';
import protocolAssembler from '../../protocol/cmd';
import Control from '../../communicate/control';
import {
  FIRM_MODES
} from '../../settings';

class Mode {
  constructor() {
    this.args = {
      subCmd: 0x11,
      mode: 0
    }
    this.isReadType = true;
  }

  /**
   * set firmware mode params
   * @param {Number} subCmd
   * @param {Number} mode 0、1、2、3、4
   */
  setMode(subCmd, mode) {
    if (typeof mode === 'number') {
      this.isReadType = false;
      this.args.mode = mode;
    }
    this.isReadType = true;
    this.args.subCmd = subCmd;
  }

  get protocol() {
    if (this.isReadType) {
      return composer(protocolAssembler.readFirmwareMode, [subCmd]);
    } else {
      return composer(protocolAssembler.setFirmwareMode, [subCmd, mode]);
    }
  }

  /**
   * get firmware modes list
   * @return {Array}
   */
  get FIRMWARE_MODESLIST() {
    return FIRM_MODES;
  }
}

export default new Mode();