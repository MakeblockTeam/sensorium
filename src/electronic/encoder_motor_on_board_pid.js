import { validateNumber, warnNotSupport } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import PIDForDistance from './encoder_motor_on_board_pid_for_distance';
import PIDForSpeed from './encoder_motor_on_board_pid_for_speed';
import PIDForPwm from './encoder_motor_on_board_pid_for_pwm';
import PIDForDoubleMotor from './encoder_motor_on_board_pid_for_doubleMotor';

import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';
import { SUPPORTLIST } from '../mainboard/settings';

let auriga = SUPPORTLIST[1].toLowerCase();
let megapipro = SUPPORTLIST[5].toLowerCase();

class EncoderMotorOnBoardPID extends Electronic {
  constructor() {
    super();
    let host = warnNotSupport(arguments[arguments.length-1]) || megapipro;
    //宿主
    this.hostname = host.toLowerCase();
    //位置模式
    this.distanceMode = function(){
      return new PIDForDistance();
    }
    //速度模式
    this.speedMode = function(){
      return new PIDForSpeed();
    }
    //auriga 会多出两个 API
    if(this.hostname === auriga){
      //pwm 模式
      this.pwmMode = function(){
        return new PIDForPwm();
      }
      //双电机模式
      this.doubleMotorMode = function(){
        return new PIDForDoubleMotor();
      }
    }
  }

  /**
   * 设置零点
   * 调用方式: new EncoderMotorOnBoardPID().setZeroPoint()
   */
  setZeroPoint(){
    let subCmd;
    if(this.hostname == auriga){
      subCmd = 0x04;
    }else if(this.hostname == megapipro){
      subCmd = 0x03;
    }
    let buf = Utils.composer(protocolAssembler.setEncoderMotorPIDZeroPoint, [subCmd]);
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '010001';
  }
}

export default EncoderMotorOnBoardPID;