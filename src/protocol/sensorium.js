var Board = require("../core/board");
var utils = require("../core/utils");
var SETTINGS = require("./settings");
var _ = require('underscore');
var Api = require('./api');

var board = new Board();
var api = new Api(board);

function Sensorium(conf) {
  this._config = _.extend(SETTINGS.DEFAULT_CONF, conf || {});
  board.init(this._config);

  var apiList = [
    "setDcMotor",
    "setEncoderMotorOnBoard",
    "setJoystick",
    "setVirtualJoystickForBalance",
    "setStepperMotor",
    "setLed",
    "setFourLeds",
    "turnOffFourLeds",
    "setLedPanelOnBoard",
    "turnOffLedPanelOnBoard",
    "setFirmwareMode",
    "setServoMotor",
    "setSevenSegment",
    "setLedMatrixChar",
    "setLedMatrixEmotion",
    "setLedMatrixTime",
    "setLedMatrixNumber",
    "setShutter",
    "reset",
    "setTone",
    "setEncoderMotor",
    "readVersion",
    "readUltrasonic",
    "readTemperature",
    "readLight",
    "readPotentionmeter",
    "readJoystick",
    "readGyro",
    "readSound",
    "readTemperatureOnBoard",
    "readPirmotion",
    "readLineFollower",
    "readLimitSwitch",
    "readCompass",
    "readHumiture",
    "readFlame",
    "readGas",
    "readTouch",
    "readFourKeys",
    "readEncoderMotorOnBoard",
    "readFirmwareMode",
    // "readDigGPIO",
    // "readAnalogGPIO",
    // "readGPIOContinue",
    // "readDoubleGPIO",
    // "readRuntime",
    // "readOnboardButton",
  ];

  for(var i in apiList) {
    this[apiList[i]] = api[apiList[i]];
  }
}

// clone method and attributes from board to Sensorium.
Sensorium.prototype = board;

if (typeof window !== "undefined") {
  window.Sensorium = Sensorium;
}

module.exports = Sensorium;