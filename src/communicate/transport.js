/**
 * @fileOverview 存储指令的传输通道：蓝牙，串口，2.4G等，一个单例。
 */

class Transport {

  constructor() {
    this.transport = null;
  }

  set(transport) {
    this.transport = transport;
  }

  get() {
    return this.transport;
  }

  static getInstance() {
    if (!Transport.instance) {
      Transport.instance = new Transport();
    }
    return Transport.instance;
  }
}

var transport = Transport.getInstance();

module.exports = transport;
