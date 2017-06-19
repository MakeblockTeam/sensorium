const command = require("../communicate/command");
const {
  defineNumber
} = require('../core/type');
const { composer } = require('../core/utils');
const Electronic = require('./electronic');
const { readUltrasonic } = require('../protocol/cmd');

class Ultrasonic extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    };
  }

  getData(callback) {
    let buf = composer(readUltrasonic, [this.args.port]);
    //执行
    command.getSensorValue('ultrasonic', buf, callback);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }

}

module.exports = Ultrasonic;