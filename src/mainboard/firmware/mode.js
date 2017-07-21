import Utils from '../../core/utils';
import protocolAssembler from '../../protocol/cmd';
import command from '../../communicate/command';
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
    command.write(buf);
  }

  getMode(subCmd, callback){
    let buf = Utils.composer(protocolAssembler.readFirmwareMode, [subCmd]);
    command.read(buf, callback);
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