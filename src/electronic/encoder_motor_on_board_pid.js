import {
  warnNotSupport
} from '../core/validate';
import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import PIDForDistance from './encoder_motor_on_board_pid_for_distance';
import PIDForSpeed from './encoder_motor_on_board_pid_for_speed';
import PIDForPwm from './encoder_motor_on_board_pid_for_pwm';
import PIDForDoubleMotor from './encoder_motor_on_board_pid_for_doubleMotor';

import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST
} from '../settings';

const auriga = SUPPORTLIST[1].toLowerCase();
const megapipro = SUPPORTLIST[5].toLowerCase();

/**
 * EncoderMotorOnBoardPID 的速度模式经常被直接作为板载编码电机的设置速度来使用
 * 插头可选 slot1 slot2
 */
class EncoderMotorOnBoardPID extends Electronic {
  constructor(slot) {
    super();
    let host = warnNotSupport(arguments[arguments.length - 1]) || megapipro;
    //宿主
    this.hostname = host.toLowerCase();
    //位置模式
    this.distanceMode = function() {
        return new PIDForDistance(slot);
      }
      //速度模式
    this.speedMode = function() {
        return new PIDForSpeed(slot);
      }
      //auriga 会多出两个 API
    if (this.hostname === auriga) {
      //pwm 模式
      this.pwmMode = function() {
          return new PIDForPwm(slot);
        }
        //双电机模式
      this.doubleMotorMode = function() {
        return new PIDForDoubleMotor(slot);
      }
    }
  }

  /**
   * getter of protocol
   */
  get protocol() {
    let subCmd = [];
    if (this.hostname == auriga) {
      subCmd = [0x04];
    } else if (this.hostname == megapipro) {
      subCmd = [0x03];
    }
    return composer(protocolAssembler.setEncoderMotorPIDZeroPoint, subCmd);
  }

  /**
   * 设置零点
   * @example
   * let pid = new EncoderMotorOnBoardPID()
   * pid.setZeroPoint()
   */
  setZeroPoint() {
    Control.write(this.protocol);
    return this;
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '010001');
  }
}

export default EncoderMotorOnBoardPID;