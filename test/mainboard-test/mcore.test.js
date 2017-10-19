/**
 * 对电子模块各个类实例的方法可用性测试，而不测试其功能正确
 * @Jeremy
 */

import Mcore from "../../src/mainboard/mcore";
import eModuleList from "../../src/electronic/index";
import chai from 'chai';
const expect = chai.expect;


describe('test the instance of Mcore', function() {
  //获取主控板实例-带参数
  it('should be an instance of Mcore', function() {
    let mcore = new Mcore();
    expect(mcore).to.be.an.instanceof(Mcore);
  });
});

describe('test the electronic module of Mcore', function() {
  console.warn = function() {};
  //初始化主控板的所有电子模块
  {
    let mcore = new Mcore();
    for (let name in mcore) {
      let eModuleFunc = mcore[name];
      //without arguments
      if (mcore.hasOwnProperty(name) && typeof eModuleFunc == 'function') {
        it(`${name} should be made instantiation without arguments`, function() {
          let electronic = eModuleFunc();
          expect(electronic).to.be.an.instanceof(eModuleList[name]);
        });
      }

      //with arguments (1,1)
      if (mcore.hasOwnProperty(name) && typeof eModuleFunc == 'function') {
        it(`${name} should be made instantiation with arguments (1,1)`, function() {
          let electronic = eModuleFunc(1, 1);
          expect(electronic).to.be.an.instanceof(eModuleList[name]);
        });
      }
    }
  }

  //重复调用（初始化）一个电子模块，比如：DcMotor
  it('should create only one instance of DcMotor by repeatedly calls', function() {
    let mcore = new Mcore();
    let dcMotor1 = mcore.DcMotor(1);
    let dcMotor2 = mcore.DcMotor(1);
    expect(dcMotor1).to.eql(dcMotor2);
  });

  //多次调用（初始化）一个电子模块，比如：DcMotor
  it('should create the same instance of DcMotor with excess arguments, eg. mcore.DcMotor(1, 2)', function() {
    let mcore = new Mcore();
    let dcMotor1 = mcore.DcMotor(1);
    let dcMotor2 = mcore.DcMotor(1, 2);
    expect(dcMotor1).to.eql(dcMotor2);
  });
});