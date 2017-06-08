const { defineNumber } = require('../core/type');
const Transport = require('../communicate/transport');
const Api = require("../protocol/api");

class Electronic {
  /**
   * Electron类，电子模块基类
   * @param {number} port - 电子模块port口 
   * @param {number} slot - 电子模块slot口
   */
  constructor(port, slot) {
    port = defineNumber(port);
    slot = defineNumber(slot);
    if (typeof Electronic.instance !== 'object') {
      this.api = new Api(Transport.get());
      this.port = port;
      this.slot = slot;
    } else {
      // if instance has the same port and slot，then it is a singleton instance
      let isSamePort = (typeof Electronic.instance.port !== 'undefined' && Electronic.instance.port === port) || (typeof Electronic.instance.port === 'undefined' && typeof port === 'undefined');
      let isSameSlot = (typeof Electronic.instance.slot !== 'undefined' && Electronic.instance.slot === slot) || (typeof Electronic.instance.slot === 'undefined' && typeof slot === 'undefined');
      if(isSamePort && isSameSlot) {
        return Electronic.instance;
      }
    }

    Electronic.instance = this;
    return this;
  }
}

module.exports = Electronic;