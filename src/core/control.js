/**
 * @fileOverview Control 类，管理数据读写调度，对外提供以下接口：pipe、read、write
 * @author Jeremy
 */
import Read from './read';
import Write from './write';
import Parse from './parse';
import Transport from '../communicate/transport';

/**
 * @private
 */
class Control {
  /**
   * Create a control.
   */
  constructor() {

  }

  /**
   * execute write
   * @param  {Array}   buf   protocol buffer
   * @return {Undefined}     return undefined
   */
  write(buf) {
    Write.addRequest(Transport.send.bind(Transport), buf);
    
  }

  /**
   * it must use 'await' to wait the Promise after write command from outside call
   * @param {{Array}} buf   protocol buffer
   * @param {Arguments Array} args null or [delay[,args1[,args2...]]], for example, write and delay 2 senconds: writeAndAwait(buf,2*1000)
   * @return {Promise}       return a promise
   */
  writeAndAwait(buf,args) {
    return new Promise((resolve,reject)=>{
      Write.addCallbackRequest(Transport.send.bind(Transport), buf, function(val){
        let delay = args && args[0] || -1;
        if(delay>0){
          let t = setTimeout(()=>{
            clearTimeout(t);
            resolve(val);
          },delay)
        } else {
          resolve(val);
        }
      });
    });
  }

  /**
   * execute read
   * @param  {Array}   buf   protocol buffer
   * @return {Promise}       return a promise
   */
  read(buf) {
    return new Promise((resolve, reject) =>{
      Read.addRequest(Transport.send.bind(Transport), buf, function(val){
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
    let buffData = buff.data || buff;
    let buffers = Parse.doParse(buffData); //undefined or [[], [], [xxx]]
    console.log('received data!',buff);
    if(!buffers) {
      return;
      //可能因为接收了异常数据
      //do nothing
    }
    for(let buf of buffers) {
      if(buf.length == 0) {
        // do something with write command also
        Read.emitCallback(0, null);
      }else{
        let value = Parse.getResult(buf);
        // console.log('after parse ------>', buf[0], buf, value);
        Read.emitCallback(buf[0], value);
      }
    }
  }
}

export default new Control();