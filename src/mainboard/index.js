import Transport from '../communicate/transport';
import Version from './firmware/version';
import Settings from '../mainboard/settings';
import Mcore from './mcore';
import Orion from './orion';
import Auriga from './auriga';
import MegaPi from './megaPi';

const boards = {
    "auriga": Auriga,
    "mcore":  Mcore,
    "megapi": MegaPi,
    "orion":  Orion
}

/**
 * 构造函数返回值，改变了构造函数实例
 * Sensorium 原型方法只能统一用静态方法代替
 */
class Sensorium {
  /**
   * @constructor
   */
  constructor(){

  }

  /**
   * @param {String} boardName 主控板名，忽略大小写
   * @param {Object} opts     (optional)
   */
  create(mainboardName, opts){
    let board = boards[mainboardName.toLowerCase()];
    if(typeof board == 'undefined'){
      throw new Error(`sorry, the board ${boardName} could not be supported!
        You need pass in one of ${this.getSupported().join(',')} as the first argument}`);
    }
    return new board(opts);
  }

  /**
   * set transport such as bluetooth、serialport、wifi
   * @param {Tranport} transport object that contains send and onReceived methods
   * @param {Function} transport.send send method
   * @param {Function} transport.onReceived onReceived method
   */
  setTransport(transport){
    Transport.init(transport);
  }

  /**
   * read firmware verion and parse the device info
   * @param  {Function} callback the function then to be execute
   */
  readFirmwareInfo(callback){
    Version.getVersion(function(val){
      let id, firmwareName;
      if(val){
        id = val.split('.')[0];
        firmwareName = Settings.FIRMWARE_ID[parseInt(id)];
      }
      typeof callback == 'function' && callback(firmwareName, val);
    });
  }

  getSupported(){
    return Object.keys(boards);
  }
}

//webpack umd
module.exports = Sensorium;



