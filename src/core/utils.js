/**
 * @fileOverview 工具类函数
 */
export default {
  /**
   * limit value
   * @param  {Number} value
   * @param  {Array} range  (optional) limit value range, such as [-255, 255], [0, 3000], default is [-255, 255]
   * @return {Number} newSpeed the result value in limit.
   */
  limitValue: function(value, range) {
    var newValue = value;
    range = range || [-255, 255];
    if (value < range[0]) {
      newValue = range[0];
    }

    if (value > range[1]) {
      newValue = range[1];
    }
    return newValue;
  },

  /**
   * Convert array of int to ArrayBuffer.
   * @param  {[int]} data array of int
   * @return {ArrayBuffer}      result array buffer
   * @private
   */
  arrayBufferFromArray: function(data) {
    var buffer = new ArrayBuffer(data.length);
    var result = new Int8Array(buffer);
    for (var i = 0; i < data.length; i++) {
      result[i] = data[i];
    }
    return buffer;
  },

  /**
   * Convert ArrayBuffer from array of int
   * @param  {ArrayBuffer} buffer the source arraybuffer
   * @return {[int]}        int array as the result;
   * @private
   */
  arrayFromArrayBuffer: function(buffer) {
    var dataView = new Uint8Array(buffer);
    var result = [];
    for (var i = 0; i < dataView.length; i++) {
      result.push(dataView[i]);
    }
    return result;
  },

  /**
   * [buffer2string converts array buffer to string format]
   * @param  {ArrayBuffer} buf [the input array buffer]
   * @return {String}     [the output string]
   */
  buffer2string: function(buf) {
    var buffer = new Uint8Array(buf);
    return Array.prototype.join.call(buffer, " ");
  },

  /**
   * [string2buffer converts string to array buffer format]
   * @param  {String} str [the input string]
   * @return {Uint8Array}     [the output uint8 array buffer]
   */
  string2buffer: function(str) {
    var buffer = new Uint8Array(str.split(" "));
    return buffer;
  },

  /**
   * 将十进制字符串数组转为16进制
   * @param  {Array}  data        to be transformed data, such as: ["01", "55", "12"]
   * @param  {Boolean} isUpperCase whether need output upperCase string.
   * @return {String} 16 进制字符串
   */
  intStrToHexStr: function(data, isUpperCase) {
    var temp = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i] != null) {
        var item = parseInt(data[i]).toString(16);
        if (isUpperCase) {
          item = parseInt(data[i]).toString(16).toUpperCase();
        }
        if (item.length == 1) {
          item = "0" + item;
        }
        temp.push(item);
      }
    }
    return temp.join(" ");
  },

  // 十六进制字符串转成十进制
  hexStr2IntArray: function(str) {
    var a = str.split(" ");
    var arr = [];
    for (var i in a) {
      var num = parseInt(a[i], 16);
      arr.push(num);
    }
    arr.reverse();
    return arr;
  },

  /**
   * Float to bytes.
   * 现将float转成整形，再将整形转成字节表示
   * @param  {float} float number
   * @return {bytes}
   */
  float32ToBytes: function(value) {
    // TOFIX: hack
    if (value == 0) {
      return [0, 0, 0, 0];
    }
    var bytesInt = 0;
    switch (value) {
      case Number.POSITIVE_INFINITY:
        bytesInt = 0x7F800000;
        break;
      case Number.NEGATIVE_INFINITY:
        bytesInt = 0xFF800000;
        break;
      case +0.0:
        bytesInt = 0x40000000;
        break;
      case -0.0:
        bytesInt = 0xC0000000;
        break;
      default:
        // if (Number.isNaN(value)) { bytesInt = 0x7FC00000; break; }
        if (value <= -0.0) {
          bytesInt = 0x80000000;
          value = -value;
        }

        var exponent = Math.floor(Math.log(value) / Math.log(2));
        var significand = ((value / Math.pow(2, exponent)) * 0x00800000) | 0;

        exponent += 127;
        if (exponent >= 0xFF) {
          exponent = 0xFF;
          significand = 0;
        } else if (exponent < 0) exponent = 0;

        bytesInt = bytesInt | (exponent << 23);
        bytesInt = bytesInt | (significand & ~(-1 << 23));
        break;
    }
    var bytesArray = this.bigIntToBytes(bytesInt);
    return bytesArray;
  },

  /**
   * 整形转换成字节数组
   * @param  {number} value 整形
   * @return {array}  array数组
   */
  bigIntToBytes: function(value) {
    var bytesArray = [];
    var b1 = (value & 0xff);
    var b2 = ((value >> 8) & 0xff);
    var b3 = ((value >> 16) & 0xff);
    var b4 = ((value >> 24) & 0xff);
    bytesArray.push(b1);
    bytesArray.push(b2);
    bytesArray.push(b3);
    bytesArray.push(b4);
    return bytesArray;
  },

  /**
   * 32位整数转成字节，js最多只支持32位有符号整数，不支持64位，因此最多只能转成4byte
   * @param  {Number} float number
   * @return {Array} bytes array
   */
  longToBytes: function(value) {
    var bytes = [];
    var i = 4;
    do {
      bytes[--i] = value & (255);
      value = value >> 8;
    } while (i)
    return bytes;
  },

  /**
   * 将单词的第一个字母转成大写
   * @param  {string} str string.
   * @return {string}     target string.
   */
  upperCaseFirstLetter: function(str) {
    var reg = /\b(\w)|\s(\w)/g;
    // str = str.toLowerCase();
    return str.replace(reg, function(m) {
      return m.toUpperCase();
    })
  },

  /**
   * n个byte转成int值
   * @param  {Array} bytes 传入的bytes数组
   * @return {Number}          返回的int数值
   */
  bytesToInt: function(bytes) {
    var val = 0;
    for (var i = bytes.length - 1; i >= 0; i--) {
      val += (bytes[bytes.length - i - 1] << (i * 8));
    }
    return val;
  },

  /**
   * transform int to ascii
   * @param  {Array} bytes int array
   * @return {String} str string
   */
  bytesToString: function(bytes) {
    var str = "";
    for (var i = 0; i < bytes.length; i++) {
      str += String.fromCharCode(bytes[i]);
    }
    return str;
  },

  hexToRgb(hex) {
    let validHexColorReg = /^#(?:[0-9a-f]{3}){1,2}$/i;
    if (!validHexColorReg.test(hex)) {
      throw Error(`${hex} is not a valid hex color`);
    }
    let r = parseInt(hex.substr(1, 2), 16),
      g = parseInt(hex.substr(3, 2), 16),
      b = parseInt(hex.substr(5, 2), 16);
    return [r, g, b];
  },
  /**
   * 函数式编程
   * @param  {!Function} func 方法
   * @param  {Array} args 方法的参数数组
   * @return {*}      返回结果由方法决定
   */
  composer(func, args) {
    if (!args) {
      args = [];
    }
    return func(...args);
  },

  /**
   * Continuous byte string to binary byte
   * 单元测试可参看以下:
   * 标准笑脸输入: "000000000000000000010000001000000100000000100000000100100000001
   *           00000001000010010001000000100000000100000000100000000000000000000"
   * 最终发送协议: [255, 85, 23, 0, 2, 41, 1, 2, 0, 0, 0, 0, 16, 32, 64, 32, 18, 2, 2, 18, 32, 64, 32, 16, 0, 0]
   * @param  {String} byteStrs
   * @return {Array}
   */
  emotionByteString2binaryByte(byteStrs) {
    let byteResult = [];
    let len = byteStrs.length + 1;
    for (let i = 1; i < len; i++) {
      if (i % 8 === 0) {
        let byteStr = byteStrs.slice(i - 8, i);
        byteResult.push(parseInt(byteStr, 2));
      }
    }
    return byteResult;
  },

  getAllMethods(obj) {
    let props = []
    do {
      const l = Object.getOwnPropertyNames(obj)
        .concat(Object.getOwnPropertySymbols(obj).map(s => s.toString()))
        .sort()
        .filter((p, i, arr) =>
          typeof obj[p] === 'function' && //only the methods
          p !== 'constructor' && //not the constructor
          (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
          props.indexOf(p) === -1 //not overridden in a child
        )
      props = props.concat(l)
    }
    while (
      (obj = Object.getPrototypeOf(obj)) && //walk-up the prototype chain
      Object.getPrototypeOf(obj) //not the the Object prototype methods (hasOwnProperty, etc...)
    )
    return props;
  },

  /**
   * filter array with a binaried string
   * @param  {Array}  arr  an array like [1, 2, 3]
   * @param  {String} bstr a binaried string like '10101011'
   * @return {Array}      filtered array
   */
  fiterWithBinaryStr(arr, bstr) {
    let filter = function(val, index) {
      if(bstr[index] === '1') {
        return val;
      }
    }
    return arr.filter(filter);
  }
}