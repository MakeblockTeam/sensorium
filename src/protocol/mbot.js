var protocol = require("./protocol.js");

var boardType = (function(ext) {

    ext.mbot = {
        getVersion: function() {
            console.log("mbot");
        },

        setLedRgb: function(r,g,b, port) {

        },

        readUltrasonic: function() {

        }
    };

    return ext;
})({});


module.exports = boardType;