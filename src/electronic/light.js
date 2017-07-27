import BaseLight from './BaseLight';

class Light extends BaseLight {
  constructor(port) {
    super(port);
  }

  static supportStamp(){
    return '111111';
  }
}

export default Light;