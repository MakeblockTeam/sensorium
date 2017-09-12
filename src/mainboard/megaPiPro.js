import Board from '../core/Board';
import electronics from '../electronic/index';
import Mode from './firmware/mode';
import {SUPPORTLIST} from '../settings';
//支持位置
const SUPPORT_INDEX = SUPPORTLIST.indexOf('MegaPiPro');

/**
 * MegaPiPro Class for 'MegaPiPro' mainboard.
 * @extends Board
 */
class MegaPiPro extends Board{
  /**
   * Create a megaPiPro mainboard
   * @param  {Object} conf configure
   */
  constructor(conf){
    super(conf);
    let this_ = this;
    //@member {String} {maiboard name}
    this.name = 'MegaPiPro';
    //固件当前模式
    this.currentMode = null;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.supportStamp().charAt(SUPPORT_INDEX) === '1'){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments, this_.name);
        };
      }
    }
  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */
  setFirmwareMode(mode){
    let subCmd = 0x12;
    Mode.setMode(subCmd, mode);
    return this;
  }
  /**
   * 获取固件模式
   * @param  {Function} callback 取值后回调函数
   */
  //TODO: 数据缓存
  async getFirmwareMode(){
    let subCmd = 0x72;
    return await Mode.getMode(subCmd);
  }
}

export default MegaPiPro;