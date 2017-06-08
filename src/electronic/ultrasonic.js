const command = require("../communicate/command");
const Electronic = require('./electronic');

class Ultrasonic extends Electronic {
  constructor(port) {
    super(port);
    this.value = 0;
  }

  onData(callback) {
    command.getSensorValue('ultrasonic', {
      "port": this.port
    }, callback);
  }
}

module.exports = Ultrasonic;