const command = require("../communicate/command");
const {
  defineNumber
} = require('../core/type');
const Electronic = require('./electronic');
const { setSevenSegment } = require('../protocol/cmd');

class Ultrasonic extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    };
  }

  getData(callback) {
    command.getSensorValue('ultrasonic', {
      "port": this.args.port
    }, callback);
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