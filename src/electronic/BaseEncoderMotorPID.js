import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command-manager';

class BaseEncoderMotorPID extends Electronic {
  /**
   * BaseEncoderMotorPID
   * @constructor
   */
  constructor(mainboardName) {
    super();
    this._mainboard = mainboardName;
    this.args = {
      slot: 0x01
    }
    
  }

  /**
   * 设置零点
   */
  setZeroPoint(){
    let subCmd;
    if(this._mainboard == ''){
      subCmd = 0x04;
    }else if(this._mainboard == ''){
      subCmd = 0x03;
    }
    let buf = Utils.composer(protocolAssembler.setEncoderMotorPIDZeroPoint, [subCmd, this.args.slot]);
    CommandManager.write(buf);
    return this;
  }
}

export default BaseEncoderMotorPID;