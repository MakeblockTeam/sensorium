// import { defineNumber } from '../core/type';
import RgbLedBase from './base/RgbLedBase';

class RgbLedOnBoard extends RgbLedBase {
  constructor(){
    super(0, 2);
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '0100';
  }
}

export default RgbLedOnBoard;