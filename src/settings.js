let
//超时时间
  OVERTIME = 1000,
  //自动超时
  AUTO_OVERTIME = 1200,
  FIRM_MODES = [0x00, 0x01, 0x02, 0x03, 0x04],
  SUPPORTLIST = ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino', 'MegaPiPro'],
  FIRMWARE_ID = {
    0x06: 'Mcore',
    0x09: 'Auriga',
    0x0a: 'Orion',
    0x0e: 'MegaPi',
    0x0f: 'MegaPiPro',
    0x0d: "Arduino Mega 2560",
    
  },
  //音符到赫兹
  TONE_TO_HZ = {
    "B0": 31,
    "C1": 33,
    "D1": 37,
    "E1": 41,
    "F1": 44,
    "G1": 49,
    "A1": 55,
    "B1": 62,
    "C2": 65,
    "D2": 73,
    "E2": 82,
    "F2": 87,
    "G2": 98,
    "A2": 110,
    "B2": 123,
    "C3": 131,
    "D3": 147,
    "E3": 165,
    "F3": 175,
    "G3": 196,
    "A3": 220,
    "B3": 247,
    "C4": 262,
    "D4": 294,
    "E4": 330,
    "F4": 349,
    "G4": 392,
    "A4": 440,
    "B4": 494,
    "C5": 523,
    "D5": 587,
    "E5": 659,
    "F5": 698,
    "G5": 784,
    "A5": 880,
    "B5": 988,
    "C6": 1047,
    "D6": 1175,
    "E6": 1319,
    "F6": 1397,
    "G6": 1568,
    "A6": 1760,
    "B6": 1976,
    "C7": 2093,
    "D7": 2349,
    "E7": 2637,
    "F7": 2794,
    "G7": 3136,
    "A7": 3520,
    "B7": 3951,
    "C8": 4186,
    "D8": 4699
  },
  VERSION = Symbol(),
  MOVE_DIRECTION = ['FORWARD', 'BACKWARD', 'TURNLEFT', 'TURNRIGHT'],
  INFRARED_BUTTON = {
    'A':    69,
    'B':    70,
    'C':    71,
    'D':    68,
    'E':    67,
    'F':    13,
    '0':    22,
    '1':    12,
    '2':    24,
    '3':    94,
    '4':    8,
    '5':    28,
    '6':    90,
    '7':    66,
    '8':    82,
    '9':    74,
    'up':   64,
    'down': 25,
    'left': 7,
    'right':9,
    'set':  21
  };

export {
  OVERTIME,
  AUTO_OVERTIME,
  FIRM_MODES,
  SUPPORTLIST,
  FIRMWARE_ID,
  TONE_TO_HZ,
  MOVE_DIRECTION,
  VERSION,
  INFRARED_BUTTON
};