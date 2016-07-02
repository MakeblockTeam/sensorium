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

Command.prototype.doSend = function(str) {
    var c = [].extend(protocol.COMMAND_HEAD);
};



module.exports = Command;