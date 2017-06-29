/**
 * write request controler
 */
const TIME_INTERVAL = 50;

const WriteControl = {
  writeRecord: {},
  /**
   * this function is drived by 
   * @param {Function}   execFunc  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function(execFunc, buf) {
    let time = (new Date()).getTime();
    let bufStr = buf.join('_');
    if(this.writeRecord.buf != bufStr || time - this.writeRecord.time > TIME_INTERVAL){
      this.writeRecord.buf = bufStr;
      this.writeRecord.time = time;
      execFunc(buf);
    }
  }
};

export default WriteControl;