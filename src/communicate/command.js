/**
 * @fileOverview 调度类
 * 负责协议收发调度
 */
//es6 module
import Transport from './transport';
import RequestControl from './requestControl';
import Parse from '../core/parse';

// 开启超时重发
const OPEN_RESNET_MODE = false;
// 超时重发的次数
const RESENT_COUNT = 1;
// 读值指令超时的设定
const COMMAND_SEND_TIMEOUT = 1000;

class Command {
  constructor() {
    //上次写记录
    this.lastWrite = {
      time: 0,
      buf: null
    }
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
    let time = (new Date()).getTime();
    let bufStr = buf.join('_');
    if(this.lastWrite.buf != bufStr || time - this.lastWrite.time > 40){
      this.lastWrite.buf = bufStr;
      this.lastWrite.time = time;
      this.exec(buf);
    }
    //TODO: 谨慎执行超时重发
  }

  /**
   * an api to execute read
   * @param  {[type]}   buf      [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  execRead(buf, callback){
    RequestControl.addRequest(this.exec.bind(this), buf, callback);
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
      this.emitCallback(index, value);      
    }
  }

  emitCallback(index, value){
    RequestControl.callbackProxy(...arguments);
  }
}

export default new Command();