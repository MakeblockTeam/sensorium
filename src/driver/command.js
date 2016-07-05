/**
 * @fileOverview 只负责发送指令的逻辑
 *
 */

var protocol = require('../protocol/protocol.js');
var utils = require('./utils.js');


function Command() {

}

Command.prototype.send = function(params) {
    this.doSend(params);
};

Command.prototype.doSend = function(params) {
    // console.log(params);
    var params = utils.intStrToHexStr(params);
    console.log(params);
};



module.exports = new Command();