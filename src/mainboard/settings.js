let Settings = {
    // 数据发送与接收相关
    // 回复数据的index位置
    READ_BYTES_INDEX: 2,
    FIRM_MODES: [0x00, 0x01, 0x02, 0x03, 0x04],
    SUPPORTLIST: ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino', 'MegaPiPro'],
    FIRMWARE_ID: { 0x06: 'Mcore', 0x09: 'Auriga', 0x0a: 'Orion', 0x0e: 'MegaPi', 0x0f: 'MegaPiPro' },
    // 音符到赫兹
    TONE_TO_HZ: {
      "A2": 110,"B2": 123,"C2": 65,
      "C3": 131,"D3": 147,"E3": 165,"F3": 175,"G3": 196,"A3": 220,
      "B3": 247,"C4": 262,"D4": 294,"E4": 330,"F4": 349,"G4": 392,
      "A4": 440,"B4": 494,"C5": 523,"D5": 555,"E5": 640,"F5": 698,
      "G5": 784,"A5": 880,"B5": 988,"C6": 1047,"D6": 1175,"E6": 1319,
      "F6": 1397,"G6": 1568,"A6": 1760,"B6": 1976,"C7": 2093,"D7": 2349,
      "E7": 2637,"F7": 2794,"G7": 3136,"A7": 3520,"B7": 3951,"C8": 4186,"D8":4699
    },
    MOVE_DIRECTION:['FORWARD', 'BACKWARD', 'TURNLEF', 'TURNRIGHT']
};

export default Settings;