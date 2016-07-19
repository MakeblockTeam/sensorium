/**
 * @fileOverview excute in node enviroment.
 * node serial.js
 */

var Mcore = require("../src/protocol/mcore");

var mcore = new Mcore({
    "driver": "serial"
});


setTimeout(function() {
    mcore.setDcMotor(9, 0);
}, 4000);