/**
 * @fileOverview 命令执行器
 */
import Transport from './transport';

class Command {
  constructor() {
    //绑定上下文
    this.send = this.send.bind(this);
  }

  /**
   * send buffer through the transport
   * @param  {Array} buf [description]
   * @return {[type]}     [description]
   */
  send(buf) {
    Transport.send(buf);
  }
}

export default new Command();