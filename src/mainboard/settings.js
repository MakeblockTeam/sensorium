const Settings = {
    // 数据发送与接收相关
    // 回复数据的index位置
    READ_BYTES_INDEX: 2,
    // 数据发送默认的驱动driver: makeblockhd, cordova
    DEFAULT_CONF : {

    },
    FIRM_MODES: {
    	bluetooth: 0x00,
    	autoAvoider: 0x01,
    	balancer: 0x02,
    	infrared: 0x03,
    	lineFollower: 0x04
    }
    SUPPORTLIST: ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino']
};

export default Settings;