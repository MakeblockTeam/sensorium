/**
 * @fileOverview  do getData-test for sensorium 
 *[为sensorium库做接收数据的接口测试，测试用例由testlink上导出，运行命令：node transform.js后即可得到]
 */
var assert = require('chai').assert;
var fs = require('fs');


var availableData = __dirname + "/availableGetData.json";
var temporaryData = JSON.parse(fs.readFileSync(availableData));//读取json文件
var drivenData = temporaryData.drivenData;//得到测试数据


// const Sensorium = require('../../browser/sensorium');
const Sensorium = require('../../src/index.js');
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
        let getSensorValue = d.caseSummary[2]; //相应的获取传感器值接口
        let range = d.caseSummary[4].split('~');
        sendOrder[getSensorValue]().then((result) => {
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
        let sendOrder = eval(d.caseSummary[1]); //相应的接口发送的实际指令
        let getSensorValue = d.caseSummary[2]; //相应的获取传感器值接口
        let range = d.caseSummary[4].split('~');
        let loopFunction = function () {
          return new Promise((resolve, reject) => {
            sendOrder[getSensorValue]().then((result) => {
              console.log('sensorValue：', result);
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

        //使用await+async的方法实现重复获取（同步）传感器的值
        let start = async function () {
          for (let i = 0; i < 255; i++) {//重复读取一个传感器的返回值255次
            await loopFunction();
          }
          done();
        };
        start();

         //使用promise+map+reduce的方法实现重复获取（同步）传感器的值
        //  let loop = [];
        // for (let i = 0; i < 255; i++) {
        //   console.log('push')
        //   loop.push(loopFunction);
        // }
        // let promises = loop.map((arg, index) => {
        //   return new Promise((resolve, reject) => {
        //     resolve(arg);
        //   });
        // });
        // promises.reduce(function (preChain, arg, index, array) {
        //   console.log('preChain-------------------', index);
        //   return preChain.then((run) => {
        //     return run().then((res) => {
        //       console.log(res)
        //       if (2 * index - 1 === array.length) {
        //         done();
        //       } else {
        //         return array[2 * index - 1].then((run) => {
        //           return run().then(() => {
        //             console.log(res);
        //             return array[2 * (index)];
        //           })
        //         })
        //       }
        //     })
        //   });
        // })


      }
    });
  });
});