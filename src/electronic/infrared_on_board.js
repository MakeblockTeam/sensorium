import {
  composer,
  fiterWithBinaryStr,
  stringToAsciiCode
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST,
  INFRARED_BUTTON
} from '../settings';

const MODE = ['read', 'write', 'read2'];
/**
 * 所有主控板（包括MegaPiPro）都有 2 种类型：外接的红外传感器，外接的被动式红外探测器
 * mcore 一共有 4 种红外相关的传感器，即除了上述 2 种，还有板载的红外传感器，且板载的分别是“发射端”、“接收端” 2 种

 * mcore 红外线接收端（读） id 0x0e
 * mcore 红外线发射端（写）id 0x0d
 * 其他主控板，红外传感器统一为接收端 (读) - id 0x10
 * 其他主控板，被动式红外传感器统一为接收端 (读) - id 0x0f
 */

/**
 * InfraredOnBoard sensor module
 * @describe this interface is only for mcore and mcore has two kind of InfraredOnBoard sensor
 * @extends Electronic
 */
class InfraredOnBoard extends Electronic {
  constructor() {
    super();
    this.args = {
      port: 0x00,
      key: 0x45, // A
      emitMsg: []
    };
    this.mode_ = MODE[0];
  }

  /**
   * getter of protocol
   */
  get protocol() {
    if(this.mode_ === MODE[0]) {
      return composer(protocolAssembler.readInfraredOnboard, [this.args.port, this.args.key]);
    }else if(this.mode_ === MODE[1]) {
      return composer(protocolAssembler.emitInfraredOnboard, [this.args.emitMsg]);
    }else {
      return composer(protocolAssembler.receiveEmitInfraredOnboard, []);
    }
  }

  /**
   * [checkKeyPressed description]
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  checkKeyPressed(key) {
    this.mode_ = MODE[0];
    let keyCode = INFRARED_BUTTON[key]; // to validate
    if(typeof keyCode === 'undefined') {
      console.warn('key code is not match');
    }
    this.args.key = keyCode;
    return this;
  }

  /**
   * set the message of the Infrared emitting to another mcore
   * @param {String} msg the message
   */
  setEmitMessage(msg) {
    let assicMsg = [];
    if(typeof msg !== 'undefined' || msg !== null){
        assicMsg = stringToAsciiCode(String(msg));
    }
    this.mode_ = MODE[1];
    this.args.emitMsg = assicMsg;
    return this;
  }

  /**
   * set the message of the Infrared emitting to another mcore
   * @param {String} msg the message receiveEmitInfraredOnboard
   */
  getEmitMessage() {
    this.mode_ = MODE[2];
    return this;
  }

  /**
   * run to emit message
   * @return {[type]} [description]
   */
  run() {
    Control.write(this.protocol);
    return this;
  }
  runAndAwait() {
    return Control.writeAndAwait(this.protocol,arguments);
  }

  /**
   * Get data of Infrared sensor received from telecontroller
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  /**
   * a getter interface, which returns the mainboards the InfraredOnBoard module supported
   */
  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '10000');
  }
}

export default InfraredOnBoard;