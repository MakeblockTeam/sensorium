import Board from '../core/Board';
import electronics from '../electronic/index';
import Mode from './firmware/mode';
import Control from '../communicate/control';

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
      if(eModule.SUPPORT.includes(this.name)){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments, this_.name);
        };
      }
    }
  }

  /**
   * set firmware mode
   * @param {Number} mode 0、1、2、3、4
   * @example
   *   megapi.setFirmwareMode(1).run()
   */
  setFirmwareMode(mode){
    let subCmd = 0x12;
    Mode.setMode(subCmd, mode);
    return this;
  }

  /**
   * get firmware mode
   */
  readFirmwareMode(){
    let subCmd = 0x72;
    Mode.setMode(subCmd);
    return this;
  }

  /**
   * run
   */
  run() {
    Control.write(Mode.protocol);
    return this;
  }

  /**
   * Get data of FirmwareMode
   * @return {Promise}
   */
  async getData() {
    return await Control.read(Mode.protocol);
  }
}

export default MegaPiPro;