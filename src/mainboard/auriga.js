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
   * set firmware mode
   * @param {Number} mode 0、1、2、3、4
   */
  setFirmwareMode(mode){
    let subCmd = 0x11;
    Mode.setMode(subCmd, mode);
    return this;
  }
  /**
   * get firmware mode
   */
  readFirmwareMode(){
    let subCmd = 0x71;
    Mode.setMode(subCmd);
    return this;
  }

  /**
   * get voltage
   */
  readVoltage(){
    let subCmd = 0x70;
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
   * Get data of Voltage or FirmwareMode
   * @return {Promise}
   */
  async getData() {
    return await Control.read(Mode.protocol);
  }
}

export default Auriga;