import Board from '../core/Board';
import electronics from '../electronic/index';
import Mode from './firmware/mode';

/**
 * Auriga Class for 'Auriga' mainboard.
 * @extends Board
 */
class Auriga extends Board{
  /**
   * Create a auriga mainboard
   * @param  {Object} conf configure
   */
  constructor(conf){
    super(conf);
    let this_ = this;
    //@member {String} {maiboard name}
    this.name = 'Auriga';
    //@member {Number} {current mode}
    this.currentMode = null;
    // @member {Object} modules is connecting to the mainboard
    // @override
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.SUPPORT.includes(this.name)){
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
    let subCmd = 0x11;
    Mode.setMode(subCmd, mode);
    return this;
  }
  /**
   * 获取固件模式
   */
  //TODO: 数据缓存
  async getFirmwareMode(){
    let subCmd = 0x71;
    return await Mode.getMode(subCmd);
  }

  /**
   * 获取固件电压
   */
  async getVoltage(){
    let subCmd = 0x70;
    return await Mode.getMode(subCmd);
  }
}

export default Auriga;