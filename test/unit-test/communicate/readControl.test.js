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
    let CaseReadNumber = 1;
    resetReadControlForTest();
    Cammand.execRead(UltrasonicProtocol, function(val){
      let count = Object.keys(ReadControl.readRecord).length;
      expect(count).to.eql(CaseReadNumber);
      done();
    }); //ff 55 04 00 01 01 06
  });

  //模拟快速创建 25 条请求
  it(`should create 25 readRecords`, function(done) {
    let CaseReadNumber = 25;
    resetReadControlForTest();
    let emitFunc = throttler(CaseReadNumber);
    let count = 0;
    for(let i = 0; i < CaseReadNumber; i++){
      Cammand.execRead(UltrasonicProtocol, function(val){
        count++;
        emitFunc(function(){
          expect(count).to.eql(CaseReadNumber);
          done();
        });
      });
    }
  });

  //模拟快速创建 255 条请求
  //预期能执行 255 次请求回调
  it('快速创建 255 条请求, 预期执行 255 次请求回调', function(done) {
    resetReadControlForTest();
    let CaseReadNumber = 255;
    let emitFunc = throttler(CaseReadNumber);
    let count = 0;
    for(let i = 0; i < CaseReadNumber; i++){
      Cammand.execRead(UltrasonicProtocol, function(val){
        count++;
        emitFunc(function(){
          expect(count).to.eql(CaseReadNumber);
          done();
        });
      });
    }
  });

  // 模拟匀速(20ms/条)创建 255 条请求
  // 预期执行 255 次请求回调
  it('匀速(20ms/条)创建 255 条请求，预期执行不超过 255 次请求回调', function(done) {
    resetReadControlForTest();
    this.timeout(6000);
    let CaseReadNumber = 255;
    let isDone = false;
    let count = 0; //回调计数
    let i = 0;
    let timer = setInterval(function(){
      if(i++ < CaseReadNumber){
        Cammand.execRead(UltrasonicProtocol, function(val){
          if(++count == CaseReadNumber){
            clearInterval(timer);
            expect(count).to.eql(CaseReadNumber);
            done();
          };
        });
      }else{
        clearInterval(timer);
        expect(count).to.most(CaseReadNumber);
        done();
      }
    }, 20);
  });

  //模拟匀速(60ms/条)创建 100 条请求
  it('模拟匀速(60ms/条)创建 100 条请求，预期执行不超过 100 次请求回调', function() {
    this.timeout(6000);
    resetReadControlForTest();
    let CaseReadNumber = 100;
    let isDone = false;
    let count = 0; //回调计数
    let i = 0;
    let timer = setInterval(function(){
      if(i++ < CaseReadNumber){
        Cammand.execRead(UltrasonicProtocol, function(val){
          if(++count == CaseReadNumber){
            clearInterval(timer);
            expect(count).to.eql(CaseReadNumber);
            done();
          };
        });
      }else{
        clearInterval(timer);
        expect(count).to.most(CaseReadNumber);
        done();
      }
    }, 60);
  });

  //模拟随机速度(10~100ms/条)创建 255 条请求
  it('should parse the incomplete data', function() {
    
  });

  //模拟随机速度(10~100ms/条)创建 256 条请求
  it('should parse the incomplete data', function() {
    
  });
});