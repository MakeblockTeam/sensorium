/**
 * @fileOverview 负责实际的数据解析
 */

function Parse() {

    // 解析从硬件传递过来的数据
    this.doParse = function(data, callback) {
        this._data = data;
        console.log(data);

        // var bytes = data.split(" ");
        // for (var i = 0; i < bytes.length; i++) {
        //     this.buffer.push(bytes[i]);
        //     var length = this.buffer.length;
        //     // 过滤无效数据
        //     if (length > 1 && this.buffer[length - 2] == this.SETTING.READ_CHUNK_SUFFIX[0] && this.buffer[length - 1] == this.SETTING.READ_CHUNK_SUFFIX[1]) {
        //         if (this.buffer.length != 10) {
        //             this.buffer = [];
        //         } else {
        //             // 以下为有效数据, 获取返回字节流中的索引位
        //             var dataIndex = this.buffer[this.SETTING.READ_BYTES_INDEX];
        //             console.log('【dataIndex】：' + dataIndex);
        //             if(MBlockly.Control.PromiseList.getType(dataIndex) || MBlockly.Control.PromiseList.getType(dataIndex) == 0) {
        //                 var promiseType = MBlockly.Control.PromiseList.getType(dataIndex);
        //                 // 计算对应传感器的返回值
        //                 this.sensor_callback(promiseType);
        //             }
        //             this.buffer = [];
        //         }
        //     }
        // }
    }

}

module.exports = Parse;