var protocol = require('../protocol/protocol.js');
var util = require('./util.js');


function Command() {

}

Comamnd.prototype.send = function(params) {
    this.doSend(params);
};

Comamnd.prototype.doSend = function(str) {
    var c = [].extend(protocol.COMMAND_HEAD);
};



module.exports = Command;