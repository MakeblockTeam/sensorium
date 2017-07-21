/**
 * 发送数据的队列调度，对外提供以下接口：
 * write
 * read
 * pipe
 */
// import Transport from './transport';
import Read from './read';
import Write from './write';
import Parse from '../core/parse';
import Command from './command';

class CommandManager {
  constructor() {

  }

  /**
   * an api to execute write
   * @param  {Array}   buf      [description]
   * @return {[type]}            [description]
   */
  write(buf) {
    Write.addRequest(Command.send, buf);
  }

  /**
   * an api to execute read
   * @param  {Array}   buf      [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  read(buf, callback) {
    Read.addRequest(Command.send, buf, callback);
  }

  /**
   * parse the buffer and callback
   * @param  {Array} buff buffer responsed from transportion
   * @return {Undefined}
   */
  pipe(buff) {
    let buffer = Parse.doParse(buff);
    if(!buffer) { //解析后无正确解析
      //do nothing
    }else if(buffer.length == 0){ //write 结果
      //do nothing
    }else{ //read 结果
      // console.log('after parse ------>', buffer[0], buff);
      let index = buffer[0];
      let value = Parse.getResult(buffer);
      this.emitCallback(index, value);
    }
  }

  emitCallback(index, value) {
    Read.callbackProxy.apply(Read, arguments);
  }
}

export default new CommandManager();