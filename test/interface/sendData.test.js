/**
 * @fileOverview  do sendData-test for sensorium 
 *[为sensorium库做发送数据的接口测试，测试用例由testlink上导出，运行命令：node transform.js后即可得到]
 */
// import Utils from '../../src/core/utils';
// import protocolAssembler from '../../src/protocol/cmd';
import CommandManager from '../../src/communicate/command-manager';
import Auriga from '../../src/mainboard/auriga';
import mCore from '../../src/mainboard/mcore';
import chai from 'chai';
// const expect = chai.expect;

let auriga = new Auriga();
let mcore = new mCore();
var assert = require('chai').assert;
var fs = require('fs');


var availableData = __dirname + "/availableSendData.json";
var temporaryData = JSON.parse(fs.readFileSync(availableData));//读取json文件
var drivenData = temporaryData.drivenData;//得到测试数据


//获取执行指令的发送数据
function captureWriteBuf(run) {
  let capturedBuf;
  let write_ = CommandManager.write;
  //override to captrue the buf
  CommandManager.write = function (buf) {
    capturedBuf = buf;
    return;
  }
  run();
  let currentCmd = capturedBuf.map(function (val) {
    let newVal = val.toString(16);
    return newVal.length == 1 ? '0' + newVal : newVal;
  });
  // console.log('capturedBuf-------->', capturedBuf);
  CommandManager.write = write_;
  return currentCmd.join(' ');
}


//获取读指令的返回数据
function captureReadBuf(run) {
  let capturedBuf;
  let read_ = CommandManager.read;
  //override to captrue the buf
  CommandManager.read = function (buf) {
    capturedBuf = buf;
    return;
  }
  run();
  let currentCmd = capturedBuf.map(function (val) {
    let newVal = val.toString(16);
    return newVal.length == 1 ? '0' + newVal : newVal;
  });
  // recovery the method
  CommandManager.read = read_;
  return currentCmd.join(' ');
}


describe('sendDataTest:', function () {
  drivenData.forEach(function (d) {
    it(d.caseDir + " ： " + d.caseName, function (done) {
      if (d.caseSummary[0] == "single-setCmd:") {
        //console.log(eval(d.caseSummary[j][0]),d.caseSummary[j][1]);//注意！添加这一句，等于是开启一条新线程
        // let currentArrayCmd = Utils.composer(protocolAssembler.setDcMotor, [sendOrder.args.port, sendOrder.args.speed]);
        // let currentCmd = Utils.intStrToHexStr(currentArrayCmd);
        let sendOrder = eval(d.caseSummary[1]); //相应的接口发送的实际指令
        let currentArrayCmd = captureWriteBuf(sendOrder.run.bind(sendOrder));
        console.log('实际发送指令 : ', currentArrayCmd)
        let presetOrder = d.caseSummary[2]; //对应的预设值
        console.log('预期发送指令 : ', presetOrder)
        assert.equal(currentArrayCmd, presetOrder);
        done();
      } else if (d.caseSummary[0] == "loop-setCmd:") {
        let args_arr = d.caseSummary[1].split(",");
        let presetOrders = d.caseSummary[3].split(",");
        for (let i = 0; i < args_arr.length; i++) {
          let arg = parseInt(args_arr[i]);
          var sendOrder = eval(d.caseSummary[2]); //相应的接口发送的实际指令
          let currentArrayCmd = captureWriteBuf(sendOrder.run.bind(sendOrder));
          console.log('实际发送指令 : ', currentArrayCmd)
          var presetOrder = presetOrders[i]; //对应的预设值 
          console.log('预期发送指令 : ', presetOrder)
          assert.equal(currentArrayCmd, presetOrder);
        }
        done();
      } else if (d.caseSummary[0] == "single-readCmd:") {
        let sendOrder = eval(d.caseSummary[1]); //相应的接口发送的实际指令
        let currentArrayCmd = captureReadBuf(sendOrder.getData.bind(sendOrder));
        console.log('实际发送指令 : ', currentArrayCmd)
        let presetOrder = d.caseSummary[2]; //对应的预设值
        console.log('预期发送指令 : ', presetOrder)
        assert.equal(currentArrayCmd, presetOrder);//断言发送指令是否正确
        done();
      } else if (d.caseSummary[0] == "loop-readCmd:") {
        let sendOrder = eval(d.caseSummary[1]); //相应的接口发送的实际指令
        let currentArrayCmd = captureReadBuf(sendOrder.getData.bind(sendOrder));
        console.log('实际发送指令 : ', currentArrayCmd)
        let presetOrder = d.caseSummary[2]; //对应的预设值
        console.log('预期发送指令 : ', presetOrder)
        assert.equal(currentArrayCmd, presetOrder);//断言发送指令是否正确
        done();
      }
    });
  });
});