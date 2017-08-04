import { validateNumber, warnNotSupport } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import LedMatrixChar from './led_matrix_char';
import LedMatrixEmotion from './led_matrix_emotion';
import LedMatrixNumber from './led_matrix_number';
import LedMatrixTime from './led_matrix_time';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * LedMatrix sensor module, who can be play as 'charMode','emotionMode','numberMode','timeMode'
 * @extends Electronic
 */
class LedMatrix extends Electronic {
  constructor(port) {
    super();
    let host = warnNotSupport(arguments[arguments.length-1]) || '';
    port = validateNumber(port);
    //宿主
    this.hostname = host.toLowerCase();
    //字符模式
    this.charMode = function(){
      return new LedMatrixChar(port);
    }

    //表情模式
    this.emotionMode = function(){
      return new LedMatrixEmotion(port);
    }

    //数字模式
    this.numberMode = function(){
      return new LedMatrixNumber(port);
    }

    //时间模式
    this.timeMode = function(){
      return new LedMatrixTime(port);
    }
  }

  static supportStamp(){
    return '1110';
  }
}

export default LedMatrix;