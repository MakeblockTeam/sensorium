/**
 * @fileOverview Transport 类，协议指令的传输通道
 * 由 Transport.send 将协议发送给蓝牙，串口，2.4G，wifi等
 *
 * @desc
 * 主动式：当初始化 sensorium 时，已经进行了初始化，但不知道蓝牙环境是否具备、串口环境是否具备，
 *        此时直接绑定 onRecieved 事件的风险是：可能接收不到响应值
 * 被动式：当初始化 sensorium 时，确定蓝牙已连接，此时执行 sensorium.setTransport(send, onRecieved) 完成 onRecieved 绑定
          是没问题的——但是这样会丢失第一次的握手信息——握手信息不在此库的处理范围
 */
import CommandManager from './command-manager';

class Transport {
  /**
   * Create a command.
   */
  constructor() {
    // 执行发送会调用此函数
    this.send = () => {};
  }

  /**
   *
   * @param  {Function} fn the sender
   * @return {Undefined}
   */
  set sender(fn) {
    if(typeof fn === 'function') {
      //函数重载
      this.send = fn;
    }
  }
}

export default new Transport();