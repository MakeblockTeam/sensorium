import { validateNumber, warnNotSupport } from '../core/validate';
import Electronic from './electronic';
import LedMatrixChar from './led_matrix_char';
import LedMatrixEmotion from './led_matrix_emotion';
import LedMatrixNumber from './led_matrix_number';
import LedMatrixTime from './led_matrix_time';

/**
 * LedMatrix sensor module, who can be play as 'charMode','emotionMode','numberMode','timeMode'
 * @extends Electronic
 *
 * @example
 * // char mode
 * mcore.LedMatrix(1).charMode().x(10).y(12).char('hello').run()
 *
 * // char mode
 * mcore.LedMatrix(1).charMode().content('hello', 10, 12).run()
 *
 * // emotion mode
 * mcore.LedMatrix(1).emotionMode().x(10).y(12).emotion('0010011101010101001010').run()
 *
 * // emotion mode
 * mcore.LedMatrix(1).timeMode().separator(':').hour(12).minute(12).run()
 *
 * // number mode
 * mcore.LedMatrix(1).numberMode().number('9999).hour(12).minute(12).run()
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

  static get supportStamp(){
    return '1110';
  }
}

export default LedMatrix;