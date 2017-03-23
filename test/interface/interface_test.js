var assert = require('chai').assert;
var Transform = require('./transform');
var transform = new Transform();//______

var availableData = require('./availableData');

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


function interfaceTest(d){
  if(d.caseName){
    //执行第一个用例之前将对象j赋值为0
    before(function(){
      j = 0;
    });

    //每条用例执行之后，将对象j增加1
    afterEach(function() {
      //在本区块的每个测试用例之后执行
      j++;
    });

    //遍历每一条用例
    for(var j=0; j < d.caseName.length;j++){
      if(d.caseSummary[j][0] == "receive:") {
        it(d.caseName[j] + ": ", function(done) {
          eval(d.caseSummary[j][1]);
        });
      }else{
        it(d.caseName[j] + ": ", function() {
          console.log("（" + eval(d.caseSummary[j][0]) + "） 接口返回值 == 预期值（" + d.caseSummary[j][1] + "）");
          assert.equal(eval(d.caseSummary[j][0]), d.caseSummary[j][1]);     
      }); 
      }
          
    }
  }else{
    for(var i in d){
      describe(i + ': ', function() {
        before(function(done) {
          setTimeout(function() {
            done()
          }, 1000);
        });
        interfaceTest(d[i]);
      });
    }
  }
}

interfaceTest(availableData);