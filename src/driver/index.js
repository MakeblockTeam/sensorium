/**
 * Test files.
 */

var Board = require("./board.js");

// demo
var board = new Board("auriga");
// board.setLedRgb();
// board.setLedRgb(r,g,b,port);
// board.setLedStripRgb(r,g,b,port,slot);
// board.setDcMotor(port, leftSpeed, rightSpeed);

// get sensor's value
board.getSensorValue({
    type: "ultrasonic",
    port: 1,
    slot: null,
    callback: function(val) {
        console.log("result: " + val);
    }
});

// board.setBlockStatus({
//     type: 'dcMotor',
//     port: 1,
//     speed: 255
// });

// board.setBlockStatus({
//     type: 'led',
//     port: 1,
//     slot: 2,
//     position: 0,
//     r: 255,
//     g: 255,
//     b: 255
// });

// board.setLedRgb();