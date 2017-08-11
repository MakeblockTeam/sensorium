/**
 * @fileOverview Command 类，所有读写操作将由 send 方法处理
 * @author Jeremy
 */
import Transport from './transport';

/**
 * Provide a send interface.
 * @private
 */
class Command {
  /**
   * Create a command.
   */
  constructor() {
    //绑定上下文
    this.send = this.send.bind(this);
  }

  /**
   * send protocol buffer through the transport
   * @param  {Array} buf protocol buffer
   * @return {Undefined}
   */
  send(buf) {
    Transport.send(buf);
  }
}

export default new Command();