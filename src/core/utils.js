/**
 * @fileOverview 工具类函数
 */

var Utils = {
    /**
     * Convert array of int to ArrayBuffer.
     * @param  {[int]} data array of int
     * @return {ArrayBuffer}      result array buffer
     * @private
     */
    arrayBufferFromArray : function(data){
      var buffer = new ArrayBuffer(data.length);
      var result = new Int8Array(buffer);
      for (var i=0; i < data.length; i++){
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
    arrayFromArrayBuffer : function(buffer){
        var dataView = new Uint8Array(buffer);
        var result = [];
        for(var i=0;i<dataView.length;i++){
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

    // 将十进制字符串数组转为16进制
    intStrToHexStr: function(data) {
        var temp = [];
        for(var i = 0; i < data.length; i++) {
            if(data[i] != null) {
                var item =  parseInt(data[i]).toString(16);
                if(item.length == 1) {
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
        for(var i in a) {
            var num = parseInt(a[i], 16);
            arr.push(num);
        }
        arr.reverse();
        console.log(arr);
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
        if(value == 0) {
            return [0,0,0,0];
        }
        var bytesInt = 0;
        switch (value) {
            case Number.POSITIVE_INFINITY: bytesInt = 0x7F800000; break;
            case Number.NEGATIVE_INFINITY: bytesInt = 0xFF800000; break;
            case +0.0: bytesInt = 0x40000000; break;
            case -0.0: bytesInt = 0xC0000000; break;
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
        var bytesArray = this.int2BytesArray(bytesInt);
        return bytesArray;
    },

    /**
     * 整形转换成字节数组
     * @param  {number} value 整形
     * @return {array}  array数组
     */
    int2BytesArray: function(value) {
        var bytesArray = [];
        var b1 = (value & 0xff).toString(16);
        var b2 = ((value >> 8) & 0xff).toString(16);
        var b3 = ((value >> 16) & 0xff).toString(16);
        var b4 = ((value >> 24) & 0xff).toString(16);
        bytesArray.push(b1);
        bytesArray.push(b2);
        bytesArray.push(b3);
        bytesArray.push(b4);
        return bytesArray;
    },

    /**
     * 将单词的第一个字母转成大写
     * @param  {string} str string.
     * @return {string}     target string.
     */
    upperCaseFirstLetter: function(str) {
        var reg = /\b(\w)|\s(\w)/g;
        str = str.toLowerCase();
        return str.replace(reg, function(m){
            return m.toUpperCase();
        })
    }

}


module.exports = Utils;
