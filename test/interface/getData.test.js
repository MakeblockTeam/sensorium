/**
 * @fileOverview  do getData-test for sensorium 
 *[为sensorium库做接收数据的接口测试，测试用例由testlink上导出，运行命令：node transform.js后即可得到]
 */
// import chai from 'chai';
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


describe('getDataTest:', function () {
  before(function (done) {
    setTimeout(function () {
      console.log("启动时间：4秒～～～OK！");
      done();
    }, 4000);
  });

  drivenData.forEach(function (d) {
    it(d.caseDir + " ： " + d.caseName, function (done) {
      if (d.caseSummary[0] == "single-readCmd:") {
        let sendOrder = eval(d.caseSummary[1]); //相应的接口发送的实际指令
        let range = d.caseSummary[3].split('~');
        sendOrder.getData().then((result) => {
          console.log('sensorValue：', result);
          assert.isNumber(result);
          assert.isAtLeast(result, Number(range[0]));
          assert.isAtMost(result, Number(range[1]));
          done();
        }).catch((e) => {
          console.log(e);
        })
      }
      if (d.caseSummary[0] == "loop-readCmd:") {
        let loop = new Array(15);
        let sendOrder = eval(d.caseSummary[1]); //相应的接口发送的实际指令
        let range = d.caseSummary[3].split('~');
        let loopFunction = function () {
          return new Promise((resolve, reject) => {
            sendOrder.getData().then((result) => {
              // console.log('sensorValue：', result);
              assert.isNumber(result);
              assert.isAtLeast(result, Number(range[0]));
              assert.isAtMost(result, Number(range[1]));
              resolve(result);
            }).catch((e) => {
              console.log('error: ', e)
              reject(e)
            })
          })
        };

        let start = async function () {
          for (let i = 0; i < 15; i++) {//重复读取一个传感器的返回值20次
            await loopFunction();
          }
          done();
        };
        start();
      }
    });
  });
});