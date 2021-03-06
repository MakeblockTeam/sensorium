/**
 * @fileOverview transform rawData to availableData.
 *[从testlink上导出的XML中拿出有用信息并封装存入availableData.json]
 */
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser({
  valueProcessors: [revertquote],
  // tagNameProcessors: [revertquote1],
  // validator: [filterNode]

});


var writeData_s = {}; //将提取出来的与发送指令相关的用例名字和摘要添加上额外的“头和尾巴”之后存在这个对象writeData_s中，以便用这个对象写入文件
var writeData_g = {}; //将提取出来的与读指令相关的用例名字和摘要添加上额外的“头和尾巴”之后存在这个对象writeData_g中，以便用这个对象写入文件
var interfaceCaseNumber = 0; //记录提取的用例数
var sendDataCaseNumber = 0;
var getDataCaseNumber = 0;
var errorCaseNumber = 0;

function Transform() {

}

//解析数据时对每条XML做自定义处理
function revertquote(value, summary) {
  var outputName = value;
  if (summary === "summary") {
    outputName = value.replace(/&#39;/g, "'");
    outputName = outputName.replace(/\n/g, "");
    outputName = outputName.replace(/\t/g, "");
    outputName = outputName.replace(/\r/g, "");
    outputName = outputName.replace(/<p>/g, "");

  }
  return outputName;
}
//解析数据时对每条XML做自定义处理
function revertquote1(name) {
  // if (name === "summary" || name === "testcases" || name === "testsuite") {
  //   return name ;
  // } else {
  //   // this.remove();
  //   return 1;
  // }
    return name;
}

function filterNode(name) {
 
}

Transform.transformData = function () { //callback
  //将xml文件打开并读出
  fs.readFile(__dirname + '/rawData.xml', function (err, data) {
    //之后将要提取的数据（仅有名字和摘要字段）暂存在extractedXml_s,extractedXml_g
    var extractedXml_s = [];
    var extractedXml_g = [];
    console.log("data: ", data)

    //result是解析后的数据，是一个json对象。从json对象中读取需要的字段：用例名t_case和摘要（包括方法以及预期值）
    parser.parseString(data, function (err, result) { //解析并提取
      //自定义一个方法loopThrough：遍历result对象，将每层结构保存为相应的json格式，并将每一个用例名和摘要都保存在正确的位置；
      console.log("result: ", result)
      result_s = JSON.stringify(result);
      fs.writeFile(__dirname + '/datatest.json', result_s, function (err) {
        if (err) {
          console.log("写入失败");
          throw err;
        }
      });
      function loopThrough(result_s, caseDir) {
        if (result_s.testsuite) {
          //遍历每个用例集
          var caseDir_w = caseDir;
          for (var suite in result_s.testsuite) {
            caseDir_w = caseDir + "/" + result_s.testsuite[suite].$.name;
            loopThrough(result_s.testsuite[suite], caseDir_w);
          }
        }

        if (result_s.testcase) {
          console.log("遍历目录： " + caseDir + "/");

          //遍历每个用例集下的用例
          for (var t_case in result_s.testcase) {

            var _case_ = result_s.testcase[t_case];
            var summaryToStr = JSON.stringify(_case_.summary); //现将摘要转为字符
            if (summaryToStr == "[\"\"]") {
              //并非接口测试用例；
            } else {
              if (summaryToStr.indexOf("single-setCmd:") > 0) { //针对返回值的验证用例
                var extractedXml_sendData = {};
                extractedXml_sendData.caseDir = caseDir;
                extractedXml_sendData.caseName = _case_.$.name; //[]//提取用例名至extractedXml
                extractedXml_sendData.caseSummary = [];

                let summaryToSub = summaryToStr.substring(summaryToStr.indexOf("single-setCmd:"), summaryToStr.indexOf("</p>")); //将摘要中前后多余的<p>\r\n\t等字符除去 
                console.log(summaryToStr);
                extractedXml_sendData.caseSummary = summaryToSub.split("`"); //提取用例摘要

                if (extractedXml_getData === null) {
                  continue;
                } else {
                  extractedXml_s.push(extractedXml_sendData);
                }
                interfaceCaseNumber++;
                sendDataCaseNumber++;
              } else if (summaryToStr.indexOf("loop-setCmd:") > 0) {
                var extractedXml_sendData = {};
                extractedXml_sendData.caseDir = caseDir;
                extractedXml_sendData.caseName = _case_.$.name; //[]//提取用例名至extractedXml
                extractedXml_sendData.caseSummary = [];

                let summaryToSub = summaryToStr.substring(summaryToStr.indexOf("loop-setCmd:"), summaryToStr.indexOf("</p>")); //将摘要中前后多余的<p>\r\n\t等字符除去 
                console.log(summaryToStr);
                extractedXml_sendData.caseSummary = summaryToSub.split("`"); //提取用例摘要

                if (extractedXml_getData === null) {
                  continue;
                } else {
                  extractedXml_s.push(extractedXml_sendData);
                }
                interfaceCaseNumber++;
                sendDataCaseNumber++;
              } else if (summaryToStr.indexOf("single-readCmd:") > 0) { //针对返回的传感器值的验证用例
                var extractedXml_getData = {};
                extractedXml_getData.caseDir = caseDir;
                extractedXml_getData.caseName = _case_.$.name; //[]//提取用例名至extractedXml
                extractedXml_getData.caseSummary = [];

                let summaryToSub = summaryToStr.substring(summaryToStr.indexOf("single-readCmd:"), summaryToStr.indexOf("</p>")); //将摘要中前后多余的<p>\r\n\t等字符除去 
                console.log(summaryToStr);
                extractedXml_getData.caseSummary = summaryToSub.split("`"); //提取用例摘要
                if (extractedXml_getData == null) {
                  continue;
                } else {
                  extractedXml_s.push(extractedXml_getData);
                  extractedXml_g.push(extractedXml_getData);
                }
                interfaceCaseNumber++;
                sendDataCaseNumber++;
                getDataCaseNumber++;
              } else if (summaryToStr.indexOf("loop-readCmd:") > 0) {
                var extractedXml_getData = {};
                extractedXml_getData.caseDir = caseDir;
                extractedXml_getData.caseName = _case_.$.name; //[]//提取用例名至extractedXml
                extractedXml_getData.caseSummary = [];

                let summaryToSub = summaryToStr.substring(summaryToStr.indexOf("loop-readCmd:"), summaryToStr.indexOf("</p>")); //将摘要中前后多余的<p>\r\n\t等字符除去 
                console.log(summaryToStr);
                extractedXml_getData.caseSummary = summaryToSub.split("`"); //提取用例摘要
                if (extractedXml_getData == null) {
                  continue;
                } else {
                  extractedXml_s.push(extractedXml_getData);
                  extractedXml_g.push(extractedXml_getData);
                }
                interfaceCaseNumber++;
                sendDataCaseNumber++;
                getDataCaseNumber++;
              } else {
                console.log("====== ! 用例： " + _case_.$.name + " 的接口摘要描写有误 ！======");
                errorCaseNumber++;
                interfaceCaseNumber++;
              }
            }
          }
        }
      }

      //调用
      if (result.testsuite) { //如果对象是一个目录（存在目录）
        let rootDir = result.testsuite;
        let ceseDir = rootDir.$.name;
        loopThrough(rootDir, ceseDir);
      } else {           //如果对象是一个用例（不存在目录）
        if (result.testcases) {
          let rootDir = result.testcases;
          let ceseDir = "根目录";
          loopThrough(rootDir, ceseDir);
        }
      }
    });

    //为提取的内容添加“头和尾巴”转换为可用数据
    writeData_s = "{ " + "\"drivenData\" :" + JSON.stringify(extractedXml_s) + "}";
    writeData_g = "{ " + "\"drivenData\" :" + JSON.stringify(extractedXml_g) + "}";
    //将需要的完整的数据写入文件availableData.js
    fs.writeFile(__dirname + '/availableSendData.json', writeData_s, function (err) {
      if (err) {
        console.log("用例提取失败！！！");
        throw err;
      }
      console.log("\n\n【./rawData.xml中的原始用例共有： " + interfaceCaseNumber + "个】\n");
      console.log("    --->其中提取的与发送指令（包括设置和读）相关的有效用例总数 ： " + sendDataCaseNumber + " 个\n");
    });
    fs.writeFile(__dirname + '/availableGetData.json', writeData_g, function (err) {
      if (err) {
        console.log("用例提取失败！！！");
        throw err;
      }
      console.log("    --->其中提取的与传感器返回值验证相关的有效用例总数 ： " + getDataCaseNumber + " 个\n");
      console.log("    --->其中编写不规范导致提取失败的用例有：  " + errorCaseNumber + " 个\n");
    });
  });
}

Transform.transformData();

module.exports = Transform;