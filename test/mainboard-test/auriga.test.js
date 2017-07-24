/**
 * 对电子模块各个类实例的方法可用性测试，而不测试其功能正确
 * @Jeremy
 */
import Auriga from "../../src/mainboard/auriga";
import eModuleList from "../../src/electronic/index";
import chai from 'chai';
const expect = chai.expect;


describe('test: initialize of Auriga', function() {
  //获取主控板实例-带参数
  it('should be an instance of Auriga', function() {
    let auriga = new Auriga();
    expect(auriga).to.be.an.instanceof(Auriga);
  });
});


//测试用例：测试 auriga 所有电子模块在不同参数下初始化
//测试目的：为测试模块是否能完成参数校验、是否容忍参数缺失
//测试方案：包括带 0 个参数初始化、带若干个（2）个参数初始化
describe('test: initialize the electronic module of Auriga with different arguments', function() {
  console.warn = function() {};
  //初始化主控板的所有电子模块
  {
    let auriga = new Auriga();
    for (let name in auriga) {
      let eModuleFunc = auriga[name];
      //without arguments
      if (auriga.hasOwnProperty(name) && typeof eModuleFunc == 'function') {
        it(`${name} should be made instantiation without arguments`, function() {
          let electronic = eModuleFunc();
          expect(electronic).to.be.an.instanceof(eModuleList[name]);
        });
      }

      //with arguments (1,1)
      if (auriga.hasOwnProperty(name) && typeof eModuleFunc == 'function') {
        it(`${name} should be made instantiation with arguments (1,1)`, function() {
          let electronic = eModuleFunc(1, 1);
          expect(electronic).to.be.an.instanceof(eModuleList[name]);
        });
      }
    }
  }
});


//测试用例：测试电子模块被重复初始化
//测试目的：为测试模块实例是否来自同一来源（这样能提高性能、节省内存）
//测试方案：分类 + 抽样测试
describe('test: repeatly initialize the electronic module', function() {
  //重复调用（初始化）一个电子模块，比如：DcMotor
  it('should create only one instance of DcMotor by repeatly calls', function() {
    let auriga = new Auriga();
    let dcMotor1 = auriga.DcMotor(1);
    let dcMotor2 = auriga.DcMotor(1);
    let dcMotor3 = auriga.DcMotor(1, 2);
    expect(dcMotor1).to.eql(dcMotor2);
    expect(dcMotor1).to.eql(dcMotor3);
  });

  //重复调用（初始化）一个电子模块，比如：EncoderMotorOnBoard
  it('should create only one instance of EncoderMotorOnBoard by repeatly calls', function() {
    let auriga = new Auriga();
    let encoderMotor1 = auriga.EncoderMotorOnBoard(1);
    let encoderMotor2 = auriga.EncoderMotorOnBoard(1);
    let encoderMotor3 = auriga.EncoderMotorOnBoard(1, 2);
    expect(encoderMotor1).to.eql(encoderMotor2);
    expect(encoderMotor1).to.eql(encoderMotor3);
  });

  //重复调用（初始化）一个电子模块，比如：EncoderMotorPIDForDistance
  it('should create only one instance of EncoderMotorPIDForDistance by repeatly calls', function() {
    let auriga = new Auriga();
    let PIDForDistance1 = auriga.EncoderMotorPIDForDistance(1);
    let PIDForDistance2 = auriga.EncoderMotorPIDForDistance(1);
    let PIDForDistance3 = auriga.EncoderMotorPIDForDistance(1, 2);
    expect(PIDForDistance1).to.eql(PIDForDistance2);
    expect(PIDForDistance1).to.eql(PIDForDistance3);
  });
})