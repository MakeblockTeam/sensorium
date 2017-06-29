/**
 * @fileOverview 解析器负责数据解析
 * 对外输出解析方法
 */
// import PromiseList from "../core/promise";
import Utils from "../core/utils";

// 获取到的最大指令长度
const REC_BUF_MAX_LENGTH = 40;
const BUF_START_FLAG = [0xff, 0x55];
const BUF_END_FLAG = [0x0d, 0x0a];

function checkStart(flag1, flag2){
  return flag1 === BUF_START_FLAG[0] && flag2 === BUF_START_FLAG[1]
}
function checkEnd(flag1, flag2){
  return flag1 === BUF_END_FLAG[0] && flag2 === BUF_END_FLAG[1];
}

// 目前所有的执行命令，如果是正常接收，都是统一回复  ff 55 0d 0a
function Parse() {
  this.cacheBuffer = [];

  // 解析从硬件传递过来的数据
  // data : 当前处理的数据
  // this.cacheBuffer: 历史缓存数据
  // 记录数据和历史数据分开记录

  /**
   * parse buffer
   * @param  {Array} buffData buffer that from the response
   * @return {Array}          the parsed result
   */
  this.doParse = function(buffData) {
    let recvLength = 0;
    //是否允许接受
    let isAllowRecv = false;
    let tempBuf = [];

    let data = Utils.arrayFromArrayBuffer(buffData);
    data = this.cacheBuffer.concat(data);
    // parse buffer data
    for (let i = 0; i < data.length; i++) {
      let data1 = parseInt(data[i-1]),
          data2 = parseInt(data[i]);
      // start data
      if (checkStart(data1, data2)) {
        recvLength = 0;
        isAllowRecv = true;
        tempBuf = [];
      } 
      // end data
      else if (checkEnd(data1, data2)) {
        isAllowRecv = false;
        // console.log('doParse 3: ', tempBuf);
        let resultBuf = tempBuf.slice(0, recvLength - 1);
        // 解析正确的数据后，清空 buffer
        this.cacheBuffer = [];
        // 此轮解析结束
        return resultBuf;
      } 
      // the data we really want
      else {
        if(isAllowRecv) {
          if (recvLength >= REC_BUF_MAX_LENGTH) {
            console.warn("receive buffer overflow!");
          }
          tempBuf[recvLength++] = data2;
        }
      }
    }
  };

  /**
   * Get result from buffer data.
   * @param  {Array} buf array data.
   * @return {Float}         value of sensor's callback
   * 回复数据数值解析, 从左到右第四位数据：
   *     1: 单字符(1 byte)
   *     2： float(4 byte)
   *     3： short(2 byte)，16个长度
   *     4： 字符串
   *     5： double(4 byte)
   *     6: long(4 byte)
   *  @example
   *  ff 55 02 02 7c 1a 81 41 0d 0a
   */
  this.getResult = function(buf, type) {
    // 获取返回的数据类型
    let dataType = buf[1];
    let result = null;
    switch (dataType) {
      case "1":
      case 1:
        // 1byte
        result = buf[2];
        break;
      case "3":
      case 3:
        // 2byte
        result = this.calculateResponseValue([parseInt(buf[3]), parseInt(buf[2])]);
        break;
      case "4":
      case 4:
        // 字符串
        var bytes = buf.splice(3, buf[2]);
        result = Utils.bytesToString(bytes);
        break;
      case "2":
      case "5":
      case "6":
      case 2:
      case 5:
      case 6:
        // long型或者float型的4byte处理
        result = this.calculateResponseValue([parseInt(buf[5]), parseInt(buf[4]), parseInt(buf[3]), parseInt(buf[2])]);
        break;
      default:
        break;
    }

    // TOFIX: should not be placed here.
    //  if (type == this.PromiseType.ENCODER_MOTER.index) {
    //   result = Math.abs(result);
    // }

    return result;
  };

  /**
   * calculate value from data received: bytes -> int -> float
   * @param  {Array} intArray decimal array
   * @return {Number}  result.
   */
  this.calculateResponseValue = function(intArray) {
    var result = null;

    // FIXME: int字节转浮点型
    var intBitsToFloat = function(num) {
      /* s 为符号（sign）；e 为指数（exponent）；m 为有效位数（mantissa）*/
      var s = (num >> 31) == 0 ? 1 : -1,
        e = (num >> 23) & 0xff,
        m = (e == 0) ?
        (num & 0x7fffff) << 1 :
        (num & 0x7fffff) | 0x800000;
      return s * m * Math.pow(2, e - 150);
    };
    var intValue = Utils.bytesToInt(intArray);
    // TOFIX
    if (intValue < 100000 && intValue > 0) {
      result = intValue;
    } else {
      result = parseFloat(intBitsToFloat(intValue).toFixed(2));
    }
    return result;
  };
}

export default new Parse();