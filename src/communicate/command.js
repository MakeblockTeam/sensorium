/**
 * @fileOverview 调度类
 * 负责协议收发调度
 */

import Transport from './transport';
import Read from './read';
import Write from './write';
import Parse from '../core/parse';

class Command {
  constructor() {

  }

  /**
   * execute buffer
   * @param  {Array} buf [description]
   * @return {[type]}     [description]
   */
  exec(buf){
    Transport.send(buf); //借助通信管道发送
  }

  /**
   * an api to execute write
   * @param  {[type]}   buf      [description]
   * @return {[type]}            [description]
   */
  write(buf){
    Write.addRequest(this.exec.bind(this), buf);
  }

  /**
   * an api to execute read
   * @param  {[type]}   buf      [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  read(buf, callback){
    Read.addRequest(this.exec.bind(this), buf, callback);
    //TODO: 谨慎执行超时重发
  }

  /**
   * parse the buffer and callback
   * @param  {Array} buff buffer responsed from transportion
   * @return {Undefined}
   */
  pipe(buff){
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

  emitCallback(index, value){
    Read.callbackProxy.apply(Read, arguments);
  }
}

export default new Command();