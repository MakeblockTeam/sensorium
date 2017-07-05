import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import Electronic from '../electronic';
import protocolAssembler from '../../protocol/cmd';
import command from '../../communicate/command';

class Firmware extends Electronic {
  constructor(subCmd, mode) {
    super();
    this.args = {
      subCmd: subCmd,
      mode: mode
    }
  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */
  setMode(){
    let buf = Utils.composer(protocolAssembler.setFirmwareMode, [this.args.subCmd, this.args.mode]);
    command.execWrite(buf);
  }

  getMode(callback){
    let buf = Utils.composer(protocolAssembler.readFirmwareMode, [this.args.subCmd]);
    command.execRead(buf, callback);
  }
}

export default Firmware;