/**
 * @fileOverview Write 对象，所有'写'请求的处理器
 * @author Jeremy
 */
const TIME_INTERVAL = 50;
/**
 * @private
 */
const Write = {
  writeRecord: {},
  /**
   * This function is called by CommandManager
   * @param {Function}   send  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function(send, buf) {
    let time = (new Date()).getTime();
    let bufStr = buf.join('_');
    if(this.writeRecord.buf != bufStr || time - this.writeRecord.time > TIME_INTERVAL){
      this.writeRecord.buf = bufStr;
      this.writeRecord.time = time;
      send(buf);
    }
  }
};

export default Write;