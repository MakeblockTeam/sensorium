import Board from '../core/Board';
import electronics from '../electronic/index';
import Firmware from '../electronic/base/FirmwareBase';
import Settings from './settings';
//支持位置
const SUPPORT_INDEX = Settings.SUPPORTLIST.indexOf('MegaPi');

//实现一个板子就注册一个板子名称
class MegaPi extends Board{
  constructor(conf){
    //继承 Board
    super(conf);
    let this_ = this;
    //固件模式
    this.firmModes = Settings.FIRM_MODES;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.supportStamp().charAt(SUPPORT_INDEX) === '1'){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    }
  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */
  setFirmMode(mode){
    let subCmd = 0x12;
    let firm = new Firmware(subCmd, mode);
    firm.setMode();
    return this;
  }
  /**
   * 获取固件模式
   * @param  {Function} callback 取值后回调函数
   */
  getFirmMode(callback){
    let subCmd = 0x72;
    let firm = new Firmware(subCmd);
    firm.getMode(callback);
    return this;
  }
}

export default MegaPi;