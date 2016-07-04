/**
 * @fileOverview 负责对外暴露接口
 */

var command = require("./command.js");
var protocol = require("./protocol.js");

var action = {
    getVersion : function() {
        var cmd = "ff 55 03 00 01 00";
        command.send(cmd);
    },

    getSensorValue : function(params) {
        var params = {
            sensor_name: "ultrasonic",
            device: 1
            port: 1,
            slot: null,
        };
        var index = getIndex();
        var cmd = [
            protocol.COMMAND_HEAD[0],
            protocol.COMMAND_HEAD[1],
            04,
            index,
            protocol.READ_MODE: 1,
            protocol.READ_MODE: 2,
            params.port
        ];
        command.send(cmd);
    },

    setLed: function() {

    },
};



module.exports = Action();