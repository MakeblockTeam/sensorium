/**
 * Test files.
 */

var Auriga = require("../protocol/auriga");

// demo
var auriga = new Auriga({
    driver: 'makeblockhd'
});

// auriga.setSevenSegment(3, 10);

auriga.setFirmwareMode(1);

auriga.getSensorValue("ultrasonic", {
    port:6,
    slot:1
}, function(val) {
    console.log(val);
});
