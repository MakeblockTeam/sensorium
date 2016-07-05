var protocol = require("./protocol.js");
var command = require("../driver/command.js");

var boardType = (function(ext) {

    ext.auriga = {
        getVersion: function() {
            console.log("auriga");
        },

        setLedRgb: function(r,g,b, port) {
            var cmd = [0xff, 0x55, 07, 04, 01];
            command.send(cmd);
        },

        readUltrasonic: function() {

        }
    };

    return ext;
})({});


module.exports = boardType;