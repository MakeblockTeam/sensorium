var command = require("../communicate/command");

class Ultrasonic {
  constructor(port) {
    this.port = port;
    this.value = 0;
  }

  onData(callback) {
    command.getSensorValue('ultrasonic', {
      "port": this.port
    }, callback);
  }
}

module.exports = Ultrasonic;