/**
 * @fileOverview Sensorium Class
 * @version 0.2.2
 * @author Jeremy
 */
import Transport from '../communicate/transport';
import CommandManager from '../communicate/command-manager';
import Version from '../electronic/version';
import { SUPPORTLIST, FIRMWARE_ID } from './settings';
import Mcore from './mcore';
import Orion from './orion';
import Auriga from './auriga';
import MegaPi from './megaPi';
import MegaPiPro from './megaPiPro';
import Arduino from './arduino';

//@private
const boards = {
    "auriga": Auriga,
    "mcore":  Mcore,
    "megapi": MegaPi,
    "orion":  Orion,
    "megapipro":  MegaPiPro,
    "arduino":  Arduino,
}

/**
 * Sensorium
 * @description  也是整个库的对外输出的唯一命名空间
 * @namespace
 */
class Sensorium {
  /**
   * Create a sensorium.
   */
  constructor(){
    for(let name of SUPPORTLIST){
      this['create' + name] = (opts) => this.create(name, opts);
    }
  }

  /**
   * Create a mainboard instance
   * @param {String} mainboardName 主控板名，忽略大小写
   * @param {Object} opts     (optional)
   */
  create(mainboardName, opts){
    let board = boards[mainboardName.toLowerCase()];
    if(typeof board == 'undefined'){
      throw new Error(`sorry, the board ${mainboardName} could not be supported!
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
   * @return {Promise} a promise instance
   */
  async readFirmwareInfo(){
    return await Version.getVersion().then((val) =>{
      let id, name;
      if(val){
        id = val.split('.')[0];
        name = FIRMWARE_ID[parseInt(id)];
      }
      return Promise.resolve({name, val});
    });
  }

  /**
   * write protocol buffer
   * now this interface is just for debug the protocol
   * @param  {Array} buf 
   * @return {Promise}
   */
  send (buf){
    CommandManager.write(buf);
  }

  /**
   * Get supported mainboard
   */
  getSupported(){
    return Object.keys(boards);
  }
}

//webpack umd
module.exports = Sensorium;



