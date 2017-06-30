const {
  defineNumber,
  defineString
} = require('../core/type');
const Electronic = require('./electronic');
const { setSevenSegment } = require('../protocol/cmd');

class ButtonOnBoard extends Electronic {
  constructor() {
    super();
    this.args = {
      status: null
    };
  }

  checkStatus(status) {
    this.args.status = defineString(status);
    this._run();
    return this;
  }

  _run() {
    let buf = composer(setSevenSegment, [this.args.port, this.args.action]);
    board.send(buf);
  }

  static supportStamp(){
    return '1000';
  }
}

module.exports = ButtonOnBoard;