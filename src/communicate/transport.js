/**
 * @fileOverview Transport 类，协议指令的传输通道，由 Transport.send 将协议发送给蓝牙，串口，2.4G，wifi等
 * @private
 */
class Transport {
  /**
   * Create a command.
   */
  constructor() {
    this.send = () => {};
  }

  /**
   * setter interface
   * @private
   * @param  {Function} fn this fn will be set as the sender
   * @return {Undefined}
   */
  set sender(fn) {
    if(typeof fn === 'function') {
      this.send = fn;
    }
  }
}

export default new Transport();