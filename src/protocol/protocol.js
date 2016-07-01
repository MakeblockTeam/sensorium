/**
 * @fileOverview 定义协议基本格式
 * 定义发送指令和接收指令的格式。
 */

var protocol = {
    // 数据发送与接收相关
    COMMAND_HEAD: [0xff, 0x55],
    COMMAND_END: [0X0d, 0X0a],
    // 回复数据的index位置
    READ_BYTES_INDEX: 2,
    // 发送数据中表示“读”的值
    READMODE: 1,
    // 发送数据中表示“写”的值
    WRITEMODE: 2
};



/**
 * 一条完整的发送指令包含
 * head  |  length  |  index  |  mode  |  type  |  指令集合
 * ff 55    指令长度     索引    01表示读  设备类型
 *                             02表示写
 */

/**
 * 一条完整的回复指令包含
 * head  |  index  |  dataType  |  length  |  data  |  end
 * ff 55     索引      数据类型                         0d 0a
 */



module.exports = protocol;