/**
 * @fileOverview  do getData-test for sensorium 
 *[为sensorium库做接收数据的接口测试，测试用例由testlink上导出，运行命令：node transform.js后即可得到]
 */
import Utils from '../../src/core/utils';
import protocolAssembler from '../../src/protocol/cmd';
import CommandManager from '../../src/communicate/command-manager';
import Auriga from '../../src/mainboard/auriga';
import mCore from '../../src/mainboard/mcore';
import chai from 'chai';
const expect = chai.expect;


// let auriga = new Auriga();
// let mcore = new mCore();
var assert = require('chai').assert;
var fs = require('fs');


var availableData = __dirname + "/availableGetData.json";
var temporaryData = JSON.parse(fs.readFileSync(availableData));//读取json文件
var drivenData = temporaryData.drivenData;//得到测试数据


const Sensorium = require('../../browser/sensorium');
const serialConnect = require('../cli/serialConnect');
const sensorium = new Sensorium();
serialConnect(sensorium);
const mcore = sensorium.create('Mcore');
const auriga = sensorium.create('Auriga');
const megapi = sensorium.create('Megapi');
const orion = sensorium.create('Orion');


//获取读指令的返回数据
function captureReadBuf(run) {
  let capturedBuf;
  let read_ = CommandManager.read;
  //override to captrue the buf
  CommandManager.read = function(buf) {
    capturedBuf = buf;
    return;
  }
  run();
  let currentCmd = capturedBuf.map(function(val) {
    let newVal = val.toString(16);
    return newVal.length == 1 ? '0' + newVal : newVal;
  });
  // recovery the method
  CommandManager.read = read_;
  return currentCmd.join(' ');
}




describe('getDataTest:', function () {
  before(function (done) {
    setTimeout(function () {
      console.log("启动时间：4秒～～～OK！");
      done();
    }, 1000);
  });

  drivenData.forEach(function (d) {
    it(d.caseDir + " ： " + d.caseName, function (done) {
      if (d.caseSummary[0] == "getData:") {
        var getData = eval(d.caseSummary[1] + '.getData()'); //主板类型
        // var optionsModular = d.caseSummary[3]; //读取的模块类型
        // var optionsPort = d.caseSummary[4]; //port、slot口参数
        let sendOrder = eval(d.caseSummary[1]); //相应的接口发送的实际指令

        let currentArrayCmd = captureReadBuf(sendOrder.getData.bind(sendOrder));
        console.log('实际发送指令 : ', currentArrayCmd)
        let presetOrder = d.caseSummary[2]; //对应的预设值
        console.log('预期发送指令 : ', presetOrder)
        assert.equal(currentArrayCmd, presetOrder);//断言发送指令是否正确

        auriga.Temperature(6, 2).getData().then((result) => {
          console.log('getData：', result);
          assert.isNumber(result);
          assert.isAtLeast(result, -1024);
          assert.isAtMost(result, 1024);
          done();
        })
        // deviceType.getSensorValue(optionsModular, optionsPort, function (result) {
        //   console.log("        这条读指令的返回值为 ： " + result);
        //   eval(d.caseSummary[5]); //断言
        //   done();
        // });
      }
    });
  });
});