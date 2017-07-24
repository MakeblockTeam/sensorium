import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import PIDForDistance from './encoder_motor_on_board_pid_for_distance';
import PIDForSpeed from './encoder_motor_on_board_pid_for_speed';
import PIDForPwm from './encoder_motor_on_board_pid_for_pwm';
import PIDForDoubleMotor from './encoder_motor_on_board_pid_for_doubleMotor';

import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';
import Settings from '../mainboard/settings';

let auriga = Settings.SUPPORTLIST[1].toLowerCase();
let megapipro = Settings.SUPPORTLIST[5].toLowerCase();

class EncoderMotorOnBoardPID extends Electronic {
  constructor() {
    super();
    let host = arguments[arguments.length-1];
    if(Settings.SUPPORTLIST.indexOf(host) === -1){
      console.warn(`the last argument "${host}" expected to be one of ${Settings.SUPPORTLIST.join(',')}`);
      host = megapipro;
    }
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