/**
 * @fileOverview Sensorium Class
 * @author Jeremy
 */
import Transport from './communicate/transport';
import Control from './core/control';
import Version from './electronic/version';
import { SUPPORTLIST, FIRMWARE_ID } from './settings';
import BoardsObj from './mainboard/index';

/**
 * Sensorium
 * @description  Sensorium is the only namespace of this repository
 * @namespace
 */
class Sensorium {
  /**
   * Create a sensorium.
   * @example
   * let sensorium = new Sensorium();
   * // creat the mcore mainboard instance
   * let mcore = sensorium.createMcore();
   * // create the auriga mainboard instance
   * let auriga = sensorium.createAuriga();
   */
  constructor(){
    for(let name of SUPPORTLIST){
      this['create' + name] = (opts) => this.create(name, opts);
    }
  }

  /**
   * Create a mainboard instance
   * @param {String} mainboardName  both upperCase and lowerCase are allowed: 'mcore', 'mCore'
   * @param {Object} opts     (optional)
   * @example
   * // create a mcore with a given mainboardName
   * let mcore1 = sensorium.create('mcore');
   * let mcore2 = sensorium.create('mCore');
   * console.log(mcore1 === mcore2) // true
   */
  create(mainboardName, opts){
    let board = BoardsObj[mainboardName.toLowerCase()];
    if(typeof board == 'undefined'){
      throw new Error(`sorry, the board ${mainboardName} could not be supported!
        You need pass in one of ${this.getSupported().join(',')} as the first argument}`);
    }
    return new board(opts);
  }

  /**
   * Set the sender from bluetooth、serialport、wifi
   * @param {Function} sender the send method
   * @example
   * // supposed the `socket.io.js` have been used as the communication method
   * let sender = (buf) => {
   *   socket.emit('send', { buf });
   * }
   * sensorium.setSender(sender);
   */
  setSender(sender){
    Transport.sender = sender;
  }

  /**
   * Receive data from bluetooth、serialport、wifi
   * @param  {Buffer|Array} buff
   * @example
   * // supposed the `socket.io.js` have been used as the communication method
   * socket.on('received', function (data) {
   *   // the format of the data should be adjusted to fit the interface
   *   sensorium.doReceived(JSON.parse(data));
   * });
   */
  doReceived (buff) {
    Control.pipe(buff);
  }

  /**
   * Read firmware info，which contains the version and the name.
   * Usually we use this interface to get the hardware information,
   * and decide to switch current device or update current hardware to the latest one.
   * @return {Promise} a promise
   * @example
   * sensorium.readFirmwareInfo()
   *             .then(val => console.log(val));
   */
  async readFirmwareInfo(){
    return await Version.getData().then((val) =>{
      let id, name;
      if(val){
        id = val.split('.')[0];
        name = FIRMWARE_ID[parseInt(id)];
      }
      return {name, val};
    });
  }

  /**
   * Write protocol buffer.
   * This interface is just for debug the protocol
   * @param  {Array} buf
   * @example
   * sensorium.send([0xff, 0x55, 0x01...]);
   */
  send (buf){
    Control.write(buf);
  }

  /**
   * Read protocol buffer
   * This interface is just for debug the protocol
   * @param  {Array} buf
   * @example
   * sensorium.send([0xff, 0x55, 0x01...]);
   */
  async read (buf){
    return await Control.read(buf);
  }

  /**
   * Get supported mainboard
   * @return {Array}  the support list
   * @example
   * let sopport = sensorium.SUPPORT;
   * conosole.log(sopport); // ['auriga', 'mcore', 'megapi', 'orion', 'megapipro', 'arduino']
   */
  get SUPPORT() {
    return Object.keys(BoardsObj);
  }
}

//webpack umd
module.exports = Sensorium;