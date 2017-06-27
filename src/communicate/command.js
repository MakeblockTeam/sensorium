/**
 * @fileOverview 调度类
 * 负责协议收发调度
 */
//es6 module
import Transport from './transport';
import ReadControl from './readControl';
import WriteControl from './writeControl';
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
    // console.log(buf);
    Transport.send(buf); //借助通信管道发送
  }

  /**
   * an api to execute write
   * @param  {[type]}   buf      [description]
   * @return {[type]}            [description]
   */
  execWrite(buf){
    WriteControl.addRequest(this.exec.bind(this), buf);
  }

  /**
   * an api to execute read
   * @param  {[type]}   buf      [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  execRead(buf, callback){
    ReadControl.addRequest(this.exec.bind(this), buf, callback);
    //TODO: 谨慎执行超时重发
  }

  /**
   * parse the buffer and callback
   * @param  {Array} buff buffer responsed from transportion
   * @return {Undefined}
   */
  pipe(buff){
    let buffer = Parse.doParse(buff);
    if(!buffer) { //一次失败的解析
      //do nothing
    }else if(buffer.length == 0){ //write 结果
      //do nothing
    }else{ //read 结果
      let index = buffer[0];
      let value = Parse.getResult(buffer);
      console.log('pipe the buff: ', this);
      this.emitCallback(index, value);      
    }
  }

  emitCallback(index, value){
    ReadControl.callbackProxy(...arguments);
  }
}

export default new Command();