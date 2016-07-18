/**
 * @fileOverview 负责实际的数据解析
 */

var SETTINGS = require("../protocol/settings");
var PromiseList = require("./promise");
var logger = require('../log/log4js').logger;

function Parse() {
    this.buffer = [];

    // 解析从硬件传递过来的数据
    this.doParse = function(bufData, driver) {
        logger.debug(bufData);

        var bytes = bufData;
        for (var i = 0; i < bytes.length; i++) {
            this.buffer.push(bytes[i]);
            var length = this.buffer.length;
            // 过滤无效数据
            if (length > 1 && this.buffer[length - 2] == SETTINGS.COMMAND_END[0] && this.buffer[length - 1] == SETTINGS.COMMAND_END[1]) {
                if (this.buffer.length != 10) {
                    this.buffer = [];
                } else {
                    /* 以下为有效数据 */

                    // 获取返回字节流中的索引位
                    var dataIndex = this.buffer[SETTINGS.READ_BYTES_INDEX];
                    var result = this.getResult(this.buffer);
                    logger.debug(result);

                    // 接收到数据后，启用回调
                    if (driver._on_data) {
                        driver._on_data(dataIndex, result);
                    } else {
                        logger.warn("driver data callback not found!");
                    }
                    this.buffer = [];
                }
            }
        }
    };

    /**
     * Get result from buffer data.
     * @param  {Array} bufArray buffer data
     * @return {Float}         value of sensor's callback
     * 回复数据数值解析, 从左到右第四位数据：
     *     1: 单字符(1 byte)
     *     2： float(4 byte)
     *     3： short(2 byte)，16个长度
     *     4： 字符串
     *     5： double(4 byte)
     *     6: long(4 byte)
     */
    this.getResult = function(bufArray) {
        var value = null;
        var len = bufArray.length;
        var dataType = bufArray[3];

        if(bufArray[len - 1] == SETTINGS.COMMAND_END[1] && (bufArray[len - 2] == SETTINGS.COMMAND_END[0])) {

            if(dataType == 3) {
                // 2byte
                var a = bufArray.slice(len - 4, len - 2).join(" ");
                value = this.calculate(a);
            } else if(dataType == 1) {
                // 1byte
                var a = bufArray.slice(len - 3, len - 2).join(" ");
                value = this.calculate(a);
            } else if( dataType == 4) {
                // chart
                var endIndex = 5 + parseInt(bufArray[4]);
                value = bufArray.toString('utf8', 5, endIndex);

            } else {
                // 4byte
                var a = bufArray.slice(len - 6, len - 2).join(" ");
                value = this.calculate(a);
            }
        }
        return value;
    };

    /**
     * Calcute result form buffer segment.
     * @param  {[type]} bufferPart [description]
     * @return {float}            [description]
     */
    this.calculate = function(bufSegment) {
        var result = this.intArray2float(bufSegment);
        return result;
    };

     /**
     * Transfer short type data to float number.
     * @param  {array} intArray decimal array
     * @return {float} the calculate result
     */
    this.intArray2float = function(intArray) {
        // FIXME: n个byte转成int值
        var bytesToInt = function(intArray) {
            var val = 0;
            for(var i = intArray.length - 1; i >= 0; i--) {
                val += (intArray[intArray.length - i - 1] << (i * 8) );
            }
            return val;
        };
        // FIXME: int字节转浮点型
        var intBitsToFloat = function(num) {
            /* s 为符号（sign）；e 为指数（exponent）；m 为有效位数（mantissa）*/
            s = (num >> 31) == 0 ? 1 : -1,
                e = (num >> 23) & 0xff,
                m = (e == 0) ?
                (num & 0x7fffff) << 1 :
                (num & 0x7fffff) | 0x800000;
            return s * m * Math.pow(2, e - 150);
        };
        var intValue = bytesToInt(intArray);
        var result = parseFloat(intBitsToFloat(intValue).toFixed(2));
        return result;
    };
}

module.exports = Parse;