/**
 * @fileOverview transform rawData to availableData.
 *[从testlink上导出的XML中拿出有用信息并封装存入availableData.json]
 */
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser({
  valueProcessors: [revertquote]
});


var writeData = {}; //将提取出来的用例名字和摘要添加上额外的“头和尾巴”之后存在这个对象writeData中，以便用这个对象写入文件
var interfaceCaseNumber = 0; //记录提取的用例数

function Transform() {

}

//解析数据时对每条XML做自定义处理
function revertquote(name) {
  var outputName = name.replace(/&#39;/g, "'");
  return outputName;
}

Transform.transformData = function() { //callback
  //将xml文件打开并读出
  fs.readFile(__dirname + '/rawData.xml', function(err, data) {
    //之后将要提取的数据（仅有名字和摘要字段）暂存在extractedXml
    var extractedXml = [];
    //result是解析后的数据，是一个json对象。从json对象中读取需要的字段：用例名t_case和摘要（包括方法以及预期值）
    parser.parseString(data, function(err, result) { //解析并提取
      //自定义一个方法loopThrough：遍历result对象，将每层结构保存为相应的json格式，并将每一个用例名和摘要都保存在正确的位置；
      function loopThrough(result_s, caseDir) { //
        if (result_s.testsuite) {
          //遍历每个用例集
          var ceseDir_w = ceseDir;
          for (var suite in result_s.testsuite) {
            // extractedXml_s[result_s.testsuite[suite].$.name] = {};
            caseDir_w = caseDir + "/" + result_s.testsuite[suite].$.name;
            // console.log(strDir_w);
            loopThrough(result_s.testsuite[suite], caseDir_w); //extractedXml_s[result_s.testsuite[suite].$.name]
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

              var extractedXml_ss = {};
              extractedXml_ss.caseDir = caseDir;
              extractedXml_ss.caseName = _case_.$.name; //[]//提取用例名至extractedXml
              extractedXml_ss.caseSummary = [];

              if (summaryToStr.indexOf("receive:") > 0 || summaryToStr.indexOf("send:") > 0) { //针对返回值的验证用例
                var summaryToSub = summaryToStr.substring(9, summaryToStr.length - 8); //将摘要中前后多余的<p>\r\n\t等字符除去 
                // console.log(summaryToStr);
                extractedXml_ss.caseSummary = summaryToSub.split("`"); //提取用例摘要
              }else {
                console.log("====== ! 用例： " + _case_.$.name + " 的接口摘要描写有误 ！======");
              }

              extractedXml.push(extractedXml_ss);
              interfaceCaseNumber++;

            }
          }
        }
      }

      //调用
      if (result.testsuite) { //如果对象不为空
        var rootDir = result.testsuite;
        // extractedXml[rootDir.$.name] = {};
        var ceseDir = rootDir.$.name;
        loopThrough(rootDir, ceseDir);
      }
    });

    //为提取的内容添加“头和尾巴”转换为可用数据
    writeData = "{ " + "\"drivenData\" :" + JSON.stringify(extractedXml) + "}";
    // drivenResult = writeData;
    // callback(drivenResult);
    //将需要的完整的数据写入文件availableData.js
    fs.writeFile(__dirname + '/availableData.json', writeData, function(err) {
      if (err) {
        console.log("用例提取失败！！！");
        throw err;
      }
      console.log("用例提取完成！！！");
      console.log("提取的用例总数 ： " + interfaceCaseNumber + " 个");
    });
  });
}

Transform.transformData(); //function(res) {console.log(res);}

module.exports = Transform;