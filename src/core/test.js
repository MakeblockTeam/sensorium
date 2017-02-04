/**
 * Test files.
 */

// var Auriga = require("../protocol/auriga");

// // demo
// var auriga = new Auriga({
//     driver: 'makeblockhd'
// });

// // auriga.setSevenSegment(3, 10);

// auriga.setFirmwareMode(1);

// auriga.getSensorValue("ultrasonic", {
//     port:6,
//     slot:1
// }, function(val) {
//     console.log(val);
// });

// mcore.getSensorValue("ultrasonic", {port:3}, function(val) {console.log(val);});



var Mcore = require("../protocol/mcore");
var mcore = new Mcore({
    "driver": "serial"
});

setTimeout(function() {
    // mcore.setDcMotor(9, 0);
    mcore.setLed(7, 0, 0, 255, 0, 0);
}, 4000)


