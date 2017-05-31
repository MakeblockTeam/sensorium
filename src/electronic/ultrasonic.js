import command from "../communicate";

class Ultrasonic {
  constructor(port) {
    this.port = port;
    this.value = 0;
  }

  on("request", callback) {
    let that = this;
    getSensorValue('ultrasonic', {
      "port": that.port
    }, callback);
  }
}


let ultrasonic = new Ultrasonic();

export default ultrasonic;