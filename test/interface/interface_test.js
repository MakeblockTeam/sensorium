/**
 * @fileOverview  do interface-test for sensorium 
 *[为sensorium库做接口测试，测试用例由testlink上导出，运行命令：node transform.js后即可得到]
 */
import Utils from '../../src/core/utils';
import protocolAssembler from '../../src/protocol/cmd';
import Auriga from '../../src/mainboard/auriga';
import mCore from '../../src/mainboard/mcore';
import chai from 'chai';
const expect = chai.expect;

let auriga = new Auriga();
let mcore = new mCore();
var assert = require('chai').assert;
var fs=require('fs');

// var Auriga = require("../../src/protocol/auriga");
// var auriga = new Auriga({
//   "driver": "serial"
// });
// var Orion = require("../../src/protocol/orion");
// var orion = new Orion({
//   "driver": "serial"
// });
// var mCore = require("../../src/protocol/mcore");
// var mcore = new mCore({
//   "driver": "serial"
// });
// var MegaPi = require("../../src/protocol/megapi");
// var megapi = new MegaPi({
//   "driver": "serial"
// });





var availableData=__dirname + "/availableData.json";
var temporaryData=JSON.parse(fs.readFileSync( availableData));//读取json文件
var drivenData = temporaryData.drivenData;//得到测试数据

describe('interface:', function() {
  before(function(done) {
    setTimeout(function() {
      console.log("启动时间：4秒～～～OK！");
      done();
    }, 4000);
  });

  drivenData.forEach(function(d) {
    it(d.caseDir + " ： " + d.caseName, function(done) {
      if (d.caseSummary[0] == "receive:") {
        var deviceType = eval(d.caseSummary[1]); //主板类型
        var optionsModular = d.caseSummary[2]; //读取的模块类型
        var optionsPort = d.caseSummary[3]; //port、slot口参数
        deviceType.getSensorValue(optionsModular, optionsPort, function(result) {
          // console.log("        这条读指令的返回值为 ： " + result);
          eval(d.caseSummary[4]); //断言
          done();
        });
      } else if (d.caseSummary[0] == "send:") {
        //console.log(eval(d.caseSummary[j][0]),d.caseSummary[j][1]);//注意！添加这一句，等于是开启一条新线程
        var sendOrder = eval(d.caseSummary[1]); //相应的接口发送的实际指令
        let currentArrayCmd = Utils.composer(protocolAssembler.setDcMotor, [sendOrder.args.port, sendOrder.args.speed]);
        let currentCmd = Utils.intStrToHexStr(currentArrayCmd);
        var presetOrder = d.caseSummary[2]; //对应的预设值
        assert.equal(currentCmd, presetOrder);
        done();
      }
    });
  });
});