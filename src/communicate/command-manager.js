/**
 * @fileOverview CommandManager 类，管理数据读写调度，对外提供以下接口：pipe、read、write
 * @author Jeremy
 */
import Read from './read';
import Write from './write';
import Parse from '../core/parse';
import Command from './command';
/**
 * @private
 */
class CommandManager {
  /**
   * Create a commandManager.
   */
  constructor() {

  }

  /**
   * execute write
   * @param  {Array}   buf   protocol buffer
   * @return {Undefined}     return undefined
   */
  write(buf) {
    Write.addRequest(Command.send, buf);
  }

  /**
   * execute read
   * @param  {Array}   buf   protocol buffer
   * @return {Promise}       return a promise
   */
  async read(buf) {
    return await new Promise(function(resolve, reject){
      Read.addRequest(Command.send, buf, function(val){
        resolve(val);
      });
    });
  }

  /**
   * parse the buffer
   * @param  {Array}  buff    a buffer responsed from transporter
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