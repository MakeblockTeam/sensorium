/**
 * @fileOverview PromiveList is sensor data's transfer station.
 * 用于处理传感器数据分发
 */

const PromiseList = {
    requestList: new Array(255),
    index: 1,

    add: function(type, callback, valueWrapper) {
        this.index++;
        if (this.index > 254) {
            this.index = 1;
        }
        this.requestList[this.index] = {
            type: type,
            callback: callback,
            valueWrapper: valueWrapper,
            hasReceivedValue: false,
            resentCount: 0
        };
        return this.index;
    },

    // 将值写到对应请求的值对象中，并且启动回调
    receiveValue: function(index, value) {
        var that = this;
        if (this.requestList[index]) {
            this.requestList[index].callback(value);
            this.requestList[index].valueWrapper.setValue(value);
            this.requestList[index].hasReceivedValue = true;
        }
    },

    getType: function(index) {
        if(this.requestList[index]) {
            return this.requestList[index].type;
        } else {
            // console.warn("返回字节的索引值无法匹配");
            return 0;
        }
    }
};

export default PromiseList;