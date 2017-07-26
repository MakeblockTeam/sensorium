/**
 * @fileOverview 指令的传输通道：蓝牙，串口，2.4G，wifi
 *
 * 主动式：当初始化 sensorium 时，已经进行了初始化，但不知道蓝牙环境是否具备、串口环境是否具备，
 *        此时直接绑定 onRecieved 事件的风险是：可能接收不到响应值
 * 被动式：当初始化 sensorium 时，确定蓝牙已连接，此时执行 sensorium.setTransport(send, onRecieved) 完成 onRecieved 绑定
          是没问题的——但是这样会丢失第一次的握手信息——握手信息不在此库的处理范围
 */
import CommandManager from './command-manager';

class Transport {
  constructor() {
    //是否已绑定接收器
    this.isBindReceiver_ = false;
  }

  init(transport) {
    let this_ = this;
    this.isBindReceiver_ = false;
    if (transport && typeof transport.send == 'function' && typeof transport.onReceived == 'function') {
      //函数重载
      this.send = function(buf) {
        if (!this_.isBindReceiver_) {console.log('********* Bind Receiver for just one time *********');
          //主动式绑定 Received 事件
          transport.onReceived(CommandManager.pipe.bind(CommandManager));
          this_.isBindReceiver_ = true;
          transport.send(buf);
        }
        this_.send = transport.send;
      }
    }
  }

  //占位函数，当没有被初始化时，执行发送会调用此函数
  send(buf) {

  }

  onReceived(pipe) {

  }

}

export default new Transport();