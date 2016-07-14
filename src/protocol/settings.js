var settings = {
    // 数据发送与接收相关
    COMMAND_HEAD: [0xff, 0x55],
    COMMAND_END: [0x0d, 0x0a],
    // 回复数据的index位置
    READ_BYTES_INDEX: 2,
    // 发送数据中表示“读”的值
    READ_MODE: 1,
    // 发送数据中表示“写”的值
    WRITE_MODE: 2,
    // 数据发送默认的驱动driver: makeblockhd, cordova
    DEFAULT_CONF : {
        driver: 'cordova'
    }
};

module.exports = settings;

