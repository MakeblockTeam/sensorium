/**
 * 对电子模块各个类实例的方法可用性测试，而不测试其功能正确
 * @Jeremy
 */

import MegaPi from "../../src/protocol/megapi";
import eModuleList from "../../src/electronic/index";
import chai from 'chai';
const expect = chai.expect;


describe('test the instance of MegaPi', function() {
  //获取主控板实例-带参数
  it('should be an instance of MegaPi', function() {
    let megapi = new MegaPi();
    expect(megapi).to.be.an.instanceof(MegaPi);
  });
});

describe('test the electronic module of MegaPi', function() {
  console.warn = function() {};
  //初始化主控板的所有电子模块
  {
    let megapi = new MegaPi();
    for (let name in megapi) {
      let eModuleFunc = megapi[name];
      //without arguments
      if (megapi.hasOwnProperty(name) && typeof eModuleFunc == 'function') {
        it(`${name} should be made instantiation without arguments`, function() {
          let electronic = eModuleFunc();
          expect(electronic).to.be.an.instanceof(eModuleList[name]);
        });
      }

      //with arguments (1,1)
      if (megapi.hasOwnProperty(name) && typeof eModuleFunc == 'function') {
        it(`${name} should be made instantiation with arguments (1,1)`, function() {
          let electronic = eModuleFunc(1, 1);
          expect(electronic).to.be.an.instanceof(eModuleList[name]);
        });
      }
    }
  }

  //重复调用（初始化）一个电子模块，比如：DcMotor
  it('should create only one instance of DcMotor by repeatedly calls', function() {
    let megapi = new MegaPi();
    let dcMotor1 = megapi.DcMotor(1);
    let dcMotor2 = megapi.DcMotor(1);
    expect(dcMotor1).to.eql(dcMotor2);
  });

  //多次调用（初始化）一个电子模块，比如：DcMotor
  it('should create the same instance of DcMotor with excess arguments, eg. megapi.DcMotor(1, 2)', function() {
    let megapi = new MegaPi();
    let dcMotor1 = megapi.DcMotor(1);
    let dcMotor2 = megapi.DcMotor(1, 2);
    expect(dcMotor1).to.eql(dcMotor2);
  });
});