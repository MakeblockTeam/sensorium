var Board = require("../core/board");
var utils = require("../core/utils");
var SETTINGS = require("./settings");
var _ = require('underscore');

var board = new Board();

function Mcore(conf) {
    this._config = _.extend(SETTINGS.DEFAULT_CONF, conf || {});
    board.init(this._config);

    /**
     * Set dc motor speed.
     * @param {number} port  port number, vailable is: 1,2,3,4
     * @param {number} speed speed, the range is -255 ~ 255
     * @example
     *     ff 55 06 00 02 0a 01 ff 00
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
        board.send(a);
    };

   


     /**
      * Set RgbFourLed electronic module color.
      * @param {number} port     port number, vailable is: 0(on board), 6,7,8,9,10
      * @param {number} slot     slot number, vailable is: 1,2
      * @param {number} position led position, 0 signify all leds.
      * @param {number} r        red, the range is 0 ~ 255
      * @param {number} g        green, the range is 0 ~ 255
      * @param {number} b        blue, the range is 0 ~ 255
      * @example
      *     ff 55 09 00 02 08 06 02 00 ff 00 00
      */
    this.setLed = function(port, slot, position, r, g, b) {
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x09,0,
            SETTINGS.WRITE_MODE,
            0x08,
            port,
            slot,
            position,red,green,blue
        ];
        board.send(a);
    };


    /**
     * Set Servo speed.
     * @param {[type]} port   port number, vailable is 6,7,8,9,10
     * @param {[type]} slot   slot number, vailable is 1,2
     * @param {[type]} degree servo degree, the range is 0 ~ 180
     */
    this.setServoMotor = function(port, slot, degree) {
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x06,0,
            SETTINGS.WRITE_MODE,
            0x0b,
            port,
            slot,
            degree
        ];
        board.send(a);
    };

    /**
     * Set Seven-segment digital tube number.
     * @param {number} port   port number, vailable is 6,7,8,9,10
     * @param {float} number  the number to be displayed
     * @exmpa
     *     ff 55 08 00 02 09 06 00 00 c8 42
     */
    this.setSevenSegment = function(port, number) {
        var byte4Array = utils.float32ToBytes(number);
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x08,0,
            SETTINGS.WRITE_MODE,
            0x09,
            port,
            parseInt(byte4Array[0], 16),
            parseInt(byte4Array[1], 16),
            parseInt(byte4Array[2], 16),
            parseInt(byte4Array[3], 16)
        ];
        board.send(a);
    };

    /**
     * Set led matrix chart.
     * @param {number} port   port number, vailable is 6,7,8,9,10
     * @param {number} xAxis  x position
     * @param {number} yAxis  y position
     * @param {number} length chart length
     * @param {string} chart  chart
     * @exmaple
     *     ff 55 0a 00 02 29 06 01 00 07 02 48 69
     */
    this.setLedMatrixChart = function(port, xAxis, yAxis, length, chart) {

    };


    /**
     * Set led matrix emotion.
     * @param {number} port   port number, vailable is 6,7,8,9,10
     * @param {number} xAxis      x position
     * @param {number} yAxis      y position
     * @param {?} motionData emotion data to be displayed
     * @example
     *     ff 55 17 00 02 29 06 02 00 00 00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00
     */
    this.setLedMatrixEmotion = function(port, xAxis, yAxis, motionData) {

    };

    /**
     * Set led matrix time.
     * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
     * @param {number} hour      hour number
     * @param {number} minute    minute number
     * @example
     *     ff 55 08 00 02 29 06 03 01 0a 14
     */
    this.setLedMatrixTime = function(separator, hour, minute) {

    };

    /**
     * Set led matrix number.
     * @param {number} port   port number, vailable is 6,7,8,9,10
     * @param {float} number the number to be displayed
     * @exmaple
        ff 55 09 00 02 29 06 04 00 00 00 00
     */
    this.setLedMatrixNumber = function(port, number) {
        var byte4Array = utils.float32ToBytes(number);
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x09,0,
            SETTINGS.WRITE_MODE,
            0x29,
            port,
            0x04,
            parseInt(byte4Array[0], 16),
            parseInt(byte4Array[1], 16),
            parseInt(byte4Array[2], 16),
            parseInt(byte4Array[3], 16)
        ];
        board.send(a);
    };
    /**
     * set Shutter action.
     * @param {[type]} port    number   vailable is 09
     * @param {[type]} actionType number vailable is: Shutter down(00)  
        Shutter up(01)
        Begin to focus(02)  
        stop focus(03)
        @example
          ff 55 05 00 02 14 06 02
     */
    this.setShutter = function(port,actionType){
          var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,0,
            SETTINGS.WRITE_MODE,
            0x14,
            port,
            actionType
        ];
        board.send(a);
    };
    /**
     * set arduino Digital level.
     * @param {[type]} port  number   vailable is 09
     * @param {[type]} level number vailable is:low level(00)  high level(01)
     * @example
     *   ff 55 05 00 02 1e 09 01
     */
    this.setDigital = function(port,level ){
          var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,0,
            SETTINGS.WRITE_MODE,
            0x1e,
            port,
            level
        ];
        board.send(a);
    };

    /**
     * set arduino pwm output
     * @param {[type]} port [description]
     * @param {[type]} pwm  number vailable is:0 ~ 255
     * @example
     *   ff 55 05 00 02 20 05 32
     */
    this.setPwm = function(port,pwm){
          var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,0,
            SETTINGS.WRITE_MODE,
            0x20,
            port,
            pwm
        ];
        board.send(a);
    };
    
    /**
     * set buzzer play.
     * @param {[type]} port     vailable:  GPIO9
     * @param {[type]} tone     vailable: C2(65) ~ D8(4699)
     * @param {[type]} rhythmTime vailable:1/8(125)  ~  1/2(2000)
     * @example
     *  ff 55 08 00 02 22 09 41 00 f4 01
     */
    this.setTone = function(port,tone,rhythmTime){
        var byteTone= utils.int2BytesArray(tone);
        var byteRhythm= utils.int2BytesArray(rhythmTime);
          var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x08,0,
            SETTINGS.WRITE_MODE,
            0x22,
            port,
            byteTone[0],
            byteTone[1],
            byteRhythm[0],
            byteRhythm[1]
        ];
        board.send(a);
    };
    

    /**
     * set Servo.
     * @param {[type]} port  vailable:GPIO9
     * @param {[type]} angle vailable:0 ~ 180
     * @example
     * ff 55 05 00 02 21 09 5a
     */
    this.setServoPin = function(port,angle){
          var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,0,
            SETTINGS.WRITE_MODE,
            0x21,
            port,
            angle
        ];
        board.send(a);
    };
    /**
     * reset firmware run time.
     */
    this.setTimer = function(){
          var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x03,0,
            SETTINGS.WRITE_MODE,
            0x50
        ];
    };
    /*********************************************/
    /**
     * read firmware vresion.
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     * @example
     * ff 55 03 00 01 00
     */
    this.readVersion = function(index){
          var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x03,index,
            SETTINGS.READ_MODE,
            0x00
        ];
        board.send(a);
    };
    /**
     * mainly used for distance measurement, the measurement range is 0 to 500 cm, 
     * the execution of the command will have more than 100 milliseconds latency.
     * So the frequency of the host to send this instruction shoulds not be too high.
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 01 01
     */
    this.readUltrasonic = function(index, port) {
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x01,
            port
        ];
        board.send(a);
    };

    
    /**
     * read temperature, Each port can connect two road temperature sensor.
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @param  {[type]} slot  vailable: slot1(1), slot2(2)
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 01 02 01 02
     */
    this.readTemperature = function (index,port,slot){
          var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x02,
            port,
            slot
        ];
        board.send(a);
    };
   
    /**
     * The light sensor module or onboard (lamp) light sensors numerical reading.
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 3, 4, onbord(06)
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 03 06
     */
    this.readLight = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x03,
            port
        ];
        board.send(a);
    };
    
    /**
     * read Potentionmeter
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 04 03
     */
    this.readPotentionmeter = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x04,
            port
        ];
        board.send(a);
    };
    
    /**
     * there are two axis, so the command has a parameter is used to 
     * set need to get the value of the axial direction.
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 3,4
     * @param  {[type]} axis  vailable: X-axis(01)  Y-axis(02)
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 01 05 03 01
     */
    this.readVirtualJoystick = function(index,port,axis){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x05,
            port,
            axis
        ];
        board.send(a);
    };
    
    /**
     * Mbot no onboard gyro, so attitude sensor can only use an external, 
     * but don't need to choose the Port in the set parameters.
     * Attitude sensor using the I2C interface, so the sensor can be connected at any port of the 1, 2, 3, 4.
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @param  {[type]} axis  vailable: X-axis(01)  Y-axis(02)  Z-axis(03)
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 01 06 00 01
     */
    this.readGyro = function(index,port,axis){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x06,
            port,
            axis
        ];
        board.send(a);
    };
    
    /**
     * read volume testing MIC module parameters
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 03
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 07 03
     */
    this.readSound = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x07,
            port
        ];
        board.send(a);
    };
    
    /**
     * read ir for send
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: onboard(00)
     * @param  {[type]} key   ASCII value,   example: `A`:45
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 01 0c 00 45
     */
    this.readIrSend = function(index,port,key){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x0c,
            port,
            key
        ];
        board.send(a);
    };
    
    /**
     * read ir for receive
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4，onbord(00)
     * @param  {[type]} key   ASCII value,   example: `A`:45
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 01 0e 00 45
     */
    this.readIrReceive = function(index,port,key){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x0e,
            port,
            key
        ];
        board.send(a);
    };
    
    /**
     * read pyroelectric infrared sensor
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 0f 02
     */
    this.readPirmotion = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x0f,
            port
        ];
        board.send(a);
    };
    
    /**
     * read LineFollower sensor
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @return {[type]} number,
     *  00   0
        01   1
        10   2
        11   3
        when 0 said has a black line
      * @example
      * ff 55 04 00 01 11 02
     */
    this.readLineFollower = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x11,
            port
        ];
        board.send(a);
    };
    
    /**
     * read limitSwitch
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @param  {[type]} slot  vailable: SLOT1(01)   SLOT2(02)
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 01 15 01 01
     */
    this.readLimitSwitch = function(index,port,slot){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x15,
            port,
            slot
        ];
        board.send(a);
    };
    
    /**
     * read compass.
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 1a 01
     */
    this.readCompass = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x1a,
            port
        ];
        board.send(a);
    };
    
    /**
     * read humiture
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 01 17 01 00
     */
    this.readHumiture = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x17,
            port
        ];
        board.send(a);
    };
    
    /**
     * read flame
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 18 03
     */
    this.readFlame = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x18,
            port
        ];
        board.send(a);
    };
  
    /**
     * Used to get the harmful gas density
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 19 03
     */
    this.readGas = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x19,
            port
        ];
        board.send(a);
    };
    
    /**
     * read the value of the digital tube feet
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: GPIO  9
     * @param  {[type]} level vailable: 00(low)、01(high)
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 02 1e 09 01
     */
    this.readDigital = function(index,port,level){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x1e,
            port,
            level
        ];
        board.send(a);
    };
    
    /**
     * read the value of the analog tube feet
     * @param  {[type]} index [description]
     * @param  {[type]} port  GPIO A0
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 1f 00
     */
    this.readAnalog = function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x1f,
            port
        ];
        board.send(a);
    };
    
    /**
     * read the firmware running time, the unit is the second (s)
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     * @example
     * ff 55 03 00 01 32
     */
    this.readTimer= function(index){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x03,index,
            SETTINGS.READ_MODE,
            0x32
        ];
        board.send(a);
    };
    
    /**
     * read touch sensor
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 04 00 01 33 06
     */
    this.readTouch= function(index,port){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x04,index,
            SETTINGS.READ_MODE,
            0x33,
            port
        ];
        board.send(a);
    };
    
    /**
     * To determine whether onboard button is pressed.
     * @param  {[type]} index     [description]
     * @param  {[type]} port      vailable: 07
     * @param  {[type]} keyStatus vailable: 01(release)
00(press)

     * @return {[type]}           [description]
     * @example
     * ff 55 05 00 01 23 07 00
     */
    this.readButtonInner= function(index,port,keyStatus){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x23,
            port,
            keyStatus
        ];
        board.send(a);
    };
    
    /**
     * To determine whether the corresponding button is pressed.
     * @param  {[type]} index [description]
     * @param  {[type]} port  vailable: 1,2,3,4
     * @param  {[type]} key   vailable:1,2,3,4
     * @return {[type]}       [description]
     * @example
     * ff 55 05 00 01 16 03 01
     */
    this.readButton= function(index,port,key){
        var a = [
            SETTINGS.COMMAND_HEAD[0],
            SETTINGS.COMMAND_HEAD[1],
            0x05,index,
            SETTINGS.READ_MODE,
            0x16,
            port,
            key
        ];
        board.send(a);
    };

}


// clone method and attributes from board to Auriga.
Auriga.prototype = board;

if (typeof window !== "undefined") {
    window.Auriga = Auriga;
}

module.exports = Auriga;