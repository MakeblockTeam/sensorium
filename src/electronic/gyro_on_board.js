import BaseGyro from './BaseGyro';

class GyroOnBoard extends BaseGyro {
  constructor() {
    super(1);
  }

  //auriga megapi megaPiPro
  static supportStamp(){
    return '011001';
  }
}

export default GyroOnBoard;