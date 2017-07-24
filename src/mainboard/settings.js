const Settings = {
    // 数据发送与接收相关
    // 回复数据的index位置
    READ_BYTES_INDEX: 2,
    FIRM_MODES: [0x00, 0x01, 0x02, 0x03, 0x04],
    SUPPORTLIST: ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino', 'MegaPiPro'],
    FIRMWARE_ID: {
      0x06: 'Mcore',
      0x09: 'Auriga',
      0x0a: 'Orion',
      0x0e: 'MegaPi',
      0x0f: 'MegaPi pro'
    }
};

export default Settings;