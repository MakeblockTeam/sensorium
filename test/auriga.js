var assert = require('chai').assert;
var Board = require("../src/core/board");
var utils = require("../src/core/utils");
var Auriga = require("../src/protocol/auriga");

Board.prototype.send = function(command) {
    return utils.intStrToHexStr(command);
};

var auriga = new Auriga();


describe('【Auriga Write】', function() {
    describe('#setDcMotor(9,50)', function() {
        var targetCmd = "ff 55 06 00 02 0a 09 32 00";
        it(targetCmd + ' should be sent', function() {
            var cmd = auriga.setDcMotor(9, 50);
            assert.equal(targetCmd, cmd);
        });
    });

    describe('#setVirtualJoystick(-255,-255)', function() {
        var targetCmd = "ff 55 07 00 02 05 01 ff 01 ff";
        it(targetCmd + ' should be sent', function() {
            var cmd = auriga.setVirtualJoystick(-255,-255);
            assert.equal(targetCmd, cmd);
        });
    });

    describe('#setVirtualJoystickForBalance(0,100,100)', function() {
        var targetCmd = "ff 55 08 00 02 34 00 64 00 64 00";
        it(targetCmd + ' should be sent', function() {
            var cmd = auriga.setVirtualJoystickForBalance(0,100,100);
            assert.equal(targetCmd, cmd);
        });
    });

    describe('#setEncodeMotor(0,100,100)', function() {
        var targetCmd = "ff 55 08 00 02 34 00 64 00 64 00";
        it(targetCmd + ' should be sent', function() {
            var cmd = auriga.setVirtualJoystickForBalance(0,100,100);
            assert.equal(targetCmd, cmd);
        });
    });
});


describe('【Auriga Read】', function() {
    var index = 0;
    describe('#readVersion(0)', function() {
        var targetCmd = "ff 55 03 00 01 00";
        it(targetCmd + ' should be sent', function() {
            var cmd = auriga.readVersion(index);
            assert.equal(targetCmd, cmd);
        });
    });

    describe('#readUltrasonic(10)', function() {
        var targetCmd = "ff 55 04 00 01 01 0a";
        it(targetCmd + ' should be sent', function() {
            var cmd = auriga.readUltrasonic(index, 10);
            assert.equal(targetCmd, cmd);
        });
    });

    describe('#readTemperature(1，2)', function(){
    	var targetCmd ="ff 55 05 00 01 02 01 02";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readTemperature(index,1,2);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readLight(7)', function(){
    	var targetCmd ="ff 55 04 00 01 03 07";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readLight(index,7);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readPotentionmeter(6)', function(){
    	var targetCmd ="ff 55 04 00 01 04 06";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readPotentionmeter(index,6);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readSound(6)', function(){
    	var targetCmd ="ff 55 04 00 01 04 06";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readPotentionmeter(index,6);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readTemperature(1,2)', function(){
    	var targetCmd ="ff 55 05 00 01 02 01 02";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readTemperature(index,1,2);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readTemperatureOnboard(13)', function(){
    	var targetCmd ="ff 55 05 00 01 02 0d";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readTemperatureOnboard(index,13);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readLineFollower(6)', function(){
    	var targetCmd ="ff 55 04 00 01 11 06";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readLineFollower(index,6);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readPirmotion(6)', function(){
    	var targetCmd ="ff 55 04 00 01 0f 06";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readPirmotion(index,6);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readHumiture(6,1)', function(){
    	var targetCmd ="ff 55 05 00 01 17 06 01";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readHumiture(index,6,1);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readCompass(6)', function(){
    	var targetCmd ="ff 55 04 00 01 1a 06";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readCompass(index,6);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readFlame(6)', function(){
    	var targetCmd ="ff 55 04 00 01 18 06";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readFlame(index,6);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readGas(6)', function(){
    	var targetCmd ="ff 55 04 00 01 19 06";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readGas(index,6);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readTouch(6)', function(){
    	var targetCmd ="ff 55 04 00 01 33 06";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readTouch(index,6);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readButton(3,1)', function(){
    	var targetCmd ="ff 55 05 00 01 16 03 01";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readButton(index,3,1);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readDigGPIO(9)', function(){
    	var targetCmd ="ff 55 04 00 01 1e 09";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readDigGPIO(index,9);
    		assert.equal(targetCmd,cmd);
    	});
    });

    describe('#readAnalogGPIO(2)', function(){
    	var targetCmd ="ff 55 04 00 01 1f 02";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readAnalogGPIO(index,2);
    		assert.equal(targetCmd,cmd);
    	});
    });    

    describe('#readGPIOContinue(13,204e)', function(){
    	var targetCmd ="ff 55 05 00 01 25 0d 20 4e";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readGPIOContinue(index,13,20000);
    		assert.equal(targetCmd,cmd);
    	});
    });  

    describe('#readDoubleGPIO(69,64)', function(){
    	var targetCmd ="ff 55 05 00 01 24 45 40";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readDoubleGPIO(index,69,64);
    		assert.equal(targetCmd,cmd);
    	});
    });  

    describe('#readRuntime()', function(){
    	var targetCmd ="ff 55 03 00 01 32";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readRuntime(index);
    		assert.equal(targetCmd,cmd);
    	});
    });   

    describe('#readButton(3,1)', function(){
    	var targetCmd ="ff 55 05 00 01 16 03 01";
    	it(targetCmd + ' should be sent',function() {
    		var cmd = auriga.readButton(index,3,1);
    		assert.equal(targetCmd,cmd);
    	});
    });
});