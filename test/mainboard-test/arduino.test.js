/**
 * 对电子模块各个类实例的方法可用性测试，而不测试其功能正确
 * @Jeremy
 */

import Arduino from "../../src/mainboard/arduino";
import eModuleList from "../../src/electronic/index";
import chai from 'chai';
const expect = chai.expect;


describe('test the instance of Arduino', function() {
  //获取主控板实例-带参数
  it('should be an instance of Arduino', function() {
    let arduino = new Arduino();
    expect(arduino).to.be.an.instanceof(Arduino);
  });
});

describe('test the electronic module of Arduino', function() {
  console.warn = function() {};
  //初始化主控板的所有电子模块
  {
    let arduino = new Arduino();
    for (let name in arduino) {
      let eModuleFunc = arduino[name];
      //without arguments
      if (arduino.hasOwnProperty(name) && typeof eModuleFunc == 'function') {
        it(`${name} should be made instantiation without arguments`, function() {
          let electronic = eModuleFunc();
          expect(electronic).to.be.an.instanceof(eModuleList[name]);

        });
      }

      //with arguments (1,1)
      if (arduino.hasOwnProperty(name) && typeof eModuleFunc == 'function') {
        it(`${name} should be made instantiation with arguments (1,1)`, function() {
          let electronic = eModuleFunc(1, 1);
          expect(electronic).to.be.an.instanceof(eModuleList[name]);
        });
      }
    }
  }
});