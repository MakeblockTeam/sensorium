/**
 * Test files.
 */

var Auriga = require("../protocol/auriga");

// demo
var auriga = new Auriga({
    driver: 'makeblockhd'
});

auriga.getSensorValue("ultrasonic", {
    port:6,
    slot:1
}, function(val) {
    console.log(val);
});
