import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class LedMatrixEmotion extends BaseLedMatrix {
  constructor(port) {
    super(port);

    Object.assign(this.args, {
      x: null,
      y: null,
      emotion: null
    });
  }

  x(xAxis){
    this.args.x = xAxis;
    return this;
  }

  y(yAxis){
    this.args.y = yAxis;
    return this;
  }

  emotion(emotion) {
    this.args.emotion = emotion;
    return this;
  }

  run(){
    let buf = Utils.composer(protocolAssembler.setLedMatrixEmotion, [this.args.port, this.args.x, this.args.y, this.args.emotion]);
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixEmotion;