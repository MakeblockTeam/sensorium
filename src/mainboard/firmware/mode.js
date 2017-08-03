import Utils from '../../core/utils';
import protocolAssembler from '../../protocol/cmd';
import CommandManager from '../../communicate/command-manager';
import { FIRM_MODES } from '../settings';

class Mode {
  constructor() {

  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */
  setMode(subCmd, mode){
    let buf = Utils.composer(protocolAssembler.setFirmwareMode, [subCmd, mode]);
    CommandManager.write(buf);
  }

  async getMode(subCmd){
    let buf = Utils.composer(protocolAssembler.readFirmwareMode, [subCmd]);
    return await CommandManager.read(buf);
  }

  /**
   * 获取固件模式列表
   * @return {Array} 模式列表
   */
  getModesList(){
    return FIRM_MODES;
  }
}

export default new Mode();