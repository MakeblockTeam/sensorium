/**
 * @fileOverview Write 对象，所有'写'请求的处理器
 * @author Jeremy
 */
import Read from './read';
import { AUTO_OVERTIME } from '../settings';
const TIME_INTERVAL = 50;
/**
 * @private
 */
const Write = {
  writeRecord: {},
  /**
   * This function is called by Control
   * @param {Function}   send  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function (send, buf) {
    let time = (new Date()).getTime();
    let bufStr = buf.join('_');
    if (this.writeRecord.buf != bufStr || time - this.writeRecord.time > TIME_INTERVAL) {
      this.writeRecord.buf = bufStr;
      this.writeRecord.time = time;
      send(buf);
    }
  },
  addCallbackRequest: function (send, buf, callback) {
    let time = (new Date()).getTime();
    let bufStr = buf.join('_');
    if (this.writeRecord.buf != bufStr || time - this.writeRecord.time > TIME_INTERVAL) {
      this.writeRecord.buf = bufStr;
      this.writeRecord.time = time;
      let index = 0;
      //记录
      Read.addRecord(index, callback);
      //因为蜂鸣器有很长的延时的特性，所以蜂鸣器看门狗延时长一点
      if (buf[5] === 34) {
        console.log("蜂鸣器，看门狗延时10000", buf)
        this.watchdog(index, 10000, buf);
      } else {
        //看门狗处理超时请求
        console.log("普通狗，", buf)
        this.watchdog(index, null, buf);
      }
    }

    send(buf);
  },
  watchdog: function (index, delay, buf) {
    Read.readRecord[index].timer = setTimeout(() => {
      console.log("看门狗超时：", index, delay, buf)
      Read.emitCallback(index, null);
    }, delay || AUTO_OVERTIME);
  }

};

export default Write;