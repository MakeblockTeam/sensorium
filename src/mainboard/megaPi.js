import Board from '../core/board';
import electronics from '../electronic/index';
import Mode from '../electronic/mode';
import Control from '../core/control';
import Version from '../electronic/version';

const FIRMWAREMODE = Symbol('firmware');
/**
 * MegaPi Class for 'MegaPi' mainboard.
 * @extends Board
 */
class MegaPi extends Board{
  /**
   * Create a megaPi mainboard
   * @param  {Object} conf configure
   */
  constructor(conf){
    super(conf);
    let this_ = this;
    //@member {String} {maiboard name}
    this.name = 'MegaPi';
    //固件当前模式
    this.currentMode = null;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.SUPPORT.includes(this.name)){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments);
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
    this.currentMode = FIRMWAREMODE;
    let subCmd = 0x12;
    Mode.setMode(subCmd, mode);
    return this;
  }

  /**
   * get firmware mode
   */
  readFirmwareMode(){
    this.currentMode = FIRMWAREMODE;
    let subCmd = 0x72;
    Mode.setMode(subCmd);
    return this;
  }

  /**
   * protocol that sent directly by mainboard firmware
   * @return {Array}
   */
  get protocol (){
    if(this.currentMode == FIRMWAREMODE) {
      return Mode.protocol;
    }else if( this.currentMode == 'version') {
      return Version.protocol;
    }
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

export default MegaPi;