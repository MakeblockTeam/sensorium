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
    if(!buffers) {
      return;
      //可能因为接收了异常数据
      //do nothing
    }
    for(let buf of buffers) {
      if(buf.length == 0) {
        // do nothing with write command
      }else{
        let value = Parse.getResult(buf);
        // console.log('after parse ------>', buf[0], buf, value);
        Read.emitCallback(buf[0], value);
      }
    }
  }
}

export default new Control();