import Transport from '../communicate/transport';
import Command from '../communicate/command';
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
      throw new Error(`sorry, the board ${boardName} could not be supported!`);
    }
    return new board(opts);
  }

  /**
   * set transport such as bluetooth、serialport
   * @param {Tranport} transport object that contains send and onReceived functions
   */
  //TO COMFIRM：是否重复 setTransport 导致事件监听绑定多次?
  setTransport(transport){
    if(transport && typeof transport.send == 'function' && typeof transport.onReceived == 'function' ){
      Transport.send = transport.send;
      transport.onReceived(Command.pipe.bind(Command));
    }else{
      // console.warn('')
    }
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



