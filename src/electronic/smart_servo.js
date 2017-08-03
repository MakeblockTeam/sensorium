import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

function write(baseArgs, extra){
  let baseCmd = [baseArgs.index, baseArgs.subCmd];
  if(!Array.isArray(extra)){
    baseCmd.push(typeof extra !== 'undefined'?[extra]:[]);
  }else{
    baseCmd.push(extra);
  }
  let buf = Utils.composer(protocolAssembler.setSmartServo, baseCmd);
  CommandManager.write(buf);
}

async function read(baseArgs){
  let buf = Utils.composer(protocolAssembler.readSmartServoParam, [baseArgs.index, baseArgs.subCmd]);
  return await CommandManager.read(buf);
}

class SmartServo extends Electronic {
  constructor(index) {
    super();
    this.args = {
      index: index,
      subCmd: null,
      speed: 0
    }
  }

  //锁定
  lock(){
    let extraCmd = 0x00;
    this.args.subCmd = 0x01;
    write(this.args, extraCmd);
    return this;
  }
  //解锁
  unclock(){
    let extraCmd = 0x01;
    this.args.subCmd = 0x01;
    write(this.args, extraCmd);
    return this;
  }

  /**
   * 设置舵机led颜色
   * @param {String|Array} hex_rgb #ff0064 or [255, 00, 100]
   */
  setLedColor(hex_rgb){
    let extraCmd;
    if(typeof rgb === 'string'){
      extraCmd = Utils.hexToRgb(hex_rgb);
    }else if(Array.isArray(hex_rgb)){
      extraCmd = hex_rgb;
    }else{
      extraCmd = [255, 0, 0];
    }
    this.args.subCmd = 0x02;
    write(this.args, extraCmd);
    return this;
  }

  //握手
  handshake(){
    this.args.subCmd = 0x03;
    write(this.args);
    return this;
  }

  speed(speed){
    this.args.speed = validateNumber(speed);
    return this;
  }
  //运动到绝对角度
  runToAbsoluteAngle(angle){
    let extraCmd = this.args.speed;
    this.args.subCmd = 0x04;
    write(this.args, extraCmd);
    return this;
  }
  //运动到相对角度
  runToRelativeAngle(angle){
    let extraCmd = this.args.speed;
    this.args.subCmd = 0x05;
    write(this.args, extraCmd);
    return this;
  }
  //作为直流电机运动
  runAsDcMotor(){
    let extraCmd = this.args.speed;
    this.args.subCmd = 0x06;
    write(this.args, extraCmd);
    return this;
  }

  //设置零点
  setZeroPoint(){
    this.args.subCmd = 0x07;
    write(this.args);
    return this;
  }

  //回到起点
  backToStart(){
    this.args.subCmd = 0x08;
    write(this.args);
    return this;
  }

  //读速度
  async readSpeed(){
    this.args.subCmd = 0x09;
    return await read(this.args);
  }
  //读温度
  async readTemperature(){
    this.args.subCmd = 0x0a;
    return await read(this.args);
  }

  //读电流
  async readCurrent(){
    this.args.subCmd = 0x0b;
    return await read(this.args);
  }

  //读电压
  async readVoltage(){
    this.args.subCmd = 0x0c;
    return await read(this.args);
  }

  //读角度
  async readAngle(){
    this.args.subCmd = 0x0d;
    return await read(this.args);
  }

  static supportStamp(){
    return '0100';
  }
}
export default SmartServo;

