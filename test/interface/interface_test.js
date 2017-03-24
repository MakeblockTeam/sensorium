var assert = require('chai').assert;
// var Transform = require('./transform');

var availableData = require('./availableData.js');

var Auriga = require("../../src/protocol/auriga");
var auriga = new Auriga({
  "driver": "serial"
});
var Orion = require("../../src/protocol/orion");
var orion = new Orion({
  "driver": "serial"
});
var mCore = require("../../src/protocol/mcore");
var mcore = new mCore({
  "driver": "serial"
});
var MegaPi = require("../../src/protocol/megapi");
var megapi = new MegaPi({
  "driver": "serial"
});

function doTest(d) {
  if(d.caseName){ 
    //执行第一个用例之前将对象j赋值为0
    before(function(done){
      j = 0;      
      setTimeout(function() {
        done()
      }, 1000);

    });

    //每条用例执行之后，将对象j增加1
    afterEach(function() {
      //在本区块的每个测试用例之后执行
      j++;
    });

    //遍历每一条用例
    for(var j=0; j < d.caseName.length;j++){
      //以“receive：”开头的是针对读指令的返回值做断言
      if(d.caseSummary[j][0] == "receive:") {
        it(d.caseName[j], function(done) {
          var deviceType = eval(d.caseSummary[j][1]);//主板类型
          var optionsModular = d.caseSummary[j][2];//读取的模块类型
          var optionsPort = d.caseSummary[j][3];//port、slot口参数
          deviceType.getSensorValue(optionsModular, optionsPort,function(result) {
            eval(d.caseSummary[j][4]);//断言
            done();
          });
        });
      }else{//其他则是对发送指令进行断言
        it(d.caseName[j], function() {
          //console.log(eval(d.caseSummary[j][0]),d.caseSummary[j][1]);//注意！添加这一句，等于是开启一条新线程
          var sendOrder = eval(d.caseSummary[j][0]);//相应的接口发送的实际指令
          var presetOrder = d.caseSummary[j][1];//对应的预设值
          assert.equal(sendOrder, presetOrder); 
        }); 
      }

    }
  // }
  }else{
    for(var i in d){
      describe(i + ': ', function() {
        doTest(d[i]);
      });
    }
  }
}

//执行测试
doTest(availableData);







