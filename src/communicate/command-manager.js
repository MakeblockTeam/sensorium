/**
 * @fileOverview Sensorium 类，发送数据的队列调度，对外提供以下接口.
 * write
 * read
 * pipe
 * @author Jeremy
 */
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
  async read(buf) {
    return await new Promise(function(resolve, reject){
      Read.addRequest(Command.send, buf, function(val){
        resolve(val);
      });
    });
  }

  /**
   * parse the buffer and callback
   * @param  {Array} buff buffer responsed from transportion
   * @return {Number}
   */
  pipe(buff) {
    let buffer = Parse.doParse(buff);
    if(!buffer) { //解析后无正确结果
      //可能因为接收了异常数据
      //do nothing
    }else if(buffer.length == 0){ //write 结果
      //do nothing
    }else{ //read 结果
      // console.log('after parse ------>', buffer[0], buff);
      let index = buffer[0];
      let value = Parse.getResult(buffer);
       Read.emitCallback(index, value);
       return value;
    }
  }
}

export default new CommandManager();