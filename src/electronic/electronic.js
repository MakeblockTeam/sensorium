const { defineNumber } = require('../core/type');
const Transport = require('../communicate/transport');
const Api = require("../protocol/api");

// 通过一个全局变量保存实例
let POOL = {};

class Electronic {
  /**
   * Electron类，电子模块基类
   * @param {number} port - 电子模块port口 
   * @param {number} slot - 电子模块slot口
   */
  constructor(port, slot) {
    // port = defineNumber(port);
    // slot = defineNumber(slot);
    // let id = this.constructor.name + '_' + port + '_' + slot;
    // let api = new Api(Transport.get());
    // if(id in POOL) {
    //   return POOL[id];
    // } else {
    //   this.port = port;
    //   this.slot = slot;
    //   this.api = api;
    //   POOL[id] = this;
    //   return this;
    // }
  }
}

module.exports = Electronic;