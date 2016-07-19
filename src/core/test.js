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



function Mcore(conf) {
    this._config = _.extend(SETTINGS.DEFAULT_CONF, conf || {});
    board.init(this._config);

    /**
     * Set dc motor speed.
     * @param {number} port  port number, vailable is: 1,2,3,4
     * @param {number} speed speed, the range is -255 ~ 255
     * @example
     *     ff 55 06 00 02 0a 09 32 00
     */
    this.setDcMotor = function(port, speed) {
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x06, 0,
            SETTINGS.WRITE_MODE,
            0x0a,
            port,
            speed & 0xff,
            (speed >> 8) & 0xff
        ];
        var c = board.send(a);
        return c;
    };
}