/**
 * 对电子模块各个类实例的方法可用性测试，而不测试其功能正确
 * @Jeremy
 */
import Auriga from "../../src/protocol/auriga";
import eModuleList from "../../src/electronic/index";
import chai from 'chai';
const expect = chai.expect;


describe('test the instance of Auriga', function() {
  //获取主控板实例-带参数
  it('should be an instance of Auriga', function() {
    let auriga = new Auriga();
    expect(auriga).to.be.an.instanceof(Auriga);
  });
});

describe('test the electronic module of Auriga', function() {
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

  //重复调用（初始化）一个电子模块，比如：DcMotor
  it('should create only one instance of DcMotor by repeatedly calls', function() {
    let auriga = new Auriga();
    let dcMotor1 = auriga.DcMotor(1);
    let dcMotor2 = auriga.DcMotor(1);
    expect(dcMotor1).to.eql(dcMotor2);
  });

  //多次调用（初始化）一个电子模块，比如：DcMotor
  it('should create the same instance of DcMotor with excess arguments, eg. auriga.DcMotor(1, 2)', function() {
    let auriga = new Auriga();
    let dcMotor1 = auriga.DcMotor(1);
    let dcMotor2 = auriga.DcMotor(1, 2);
    expect(dcMotor1).to.eql(dcMotor2);
  });
});