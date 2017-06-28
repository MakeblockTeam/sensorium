/**
 * 假设是可靠传输
 */
import Transport from './transport.help';
import Cammand from '../../../src/communicate/command';
import ReadControl from '../../../src/communicate/readControl';
import chai from 'chai';
const expect = chai.expect;

//重写
Cammand.exec = function(buf){
  Transport.send(buf);
}
//重置 ReadControl
const resetReadControlForTest = function(){
  ReadControl.readRecord = {};
  ReadControl.index = 0;
}
const throttler = function(num){
  let NUM = num;
  let index = 0;
  return function(callback){
    index++;
    if(index == NUM){
      callback();
    }
  }
}

//以超声波协议为测试数据
//模拟快速创建 254、255 条请求
//模拟匀速创建 254、255 条请求
//模拟随机速度创建 254、255 条请求
const UltrasonicProtocol = [0xff, 0x55, 0x04, 0x00, 0x01, 0x01, 0x06];
describe('test doParse', function() {
  //模拟发送 1 条请求
  it('should create 1 readRecord', function(done) {
    resetReadControlForTest();
    Cammand.execRead(UltrasonicProtocol, function(val){
      let count = Object.keys(ReadControl.readRecord).length;
      expect(count).to.eql(1);
      done();
    }); //ff 55 04 00 01 01 06
  });

  //模拟快速创建 25 条请求
  it('should create 25 readRecords', function(done) {
    resetReadControlForTest();
    let emitFunc = throttler(25);
    for(let i = 0; i < 25; i++){
      Cammand.execRead(UltrasonicProtocol, function(val){
        emitFunc(function(){
          // console.log(ReadControl.readRecord);
          done();
        });
      });
    }
  });

  //模拟快速创建 256 条请求
  it('should create 256 readRecords but send 255 in fact', function() {
    resetReadControlForTest();
    let emitFunc = throttler(256);
    for(let i = 0; i < 256; i++){
      Cammand.execRead(UltrasonicProtocol, function(val){
        emitFunc(function(){
          // console.log(Object.keys(ReadControl.readRecord).length);
          done();
        });
      });
    }
  });

  // //模拟匀速(10ms/条)创建 255 条请求
  it('should create 255 readRecords and successfully handled them', function() {
    resetReadControlForTest();
    let i = 0;
    let emitFunc = throttler(255);
    let timer = setInterval(function(){
      if(i++ < 255){
        Cammand.execRead(UltrasonicProtocol, function(val){
          emitFunc(function(){
            // console.log(Object.keys(ReadControl.readRecord).length);
            done();
          });
        });
      }else{
        clearInterval(timer);
      }
    }, 10);
  });

  //模拟匀速(10ms/条)创建 256 条请求
  it('should create 256 readRecords and some of them will be ignored', function() {
    
  });

  //模拟随机速度(10~100ms/条)创建 255 条请求
  it('should parse the incomplete data', function() {
    
  });

  //模拟随机速度(10~100ms/条)创建 256 条请求
  it('should parse the incomplete data', function() {
    
  });
});