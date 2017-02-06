var assert = require('chai').assert;
var Board = require("../src/core/board");
var utils = require("../src/core/utils");
var Mcore = require("../src/protocol/mcore");

Board.prototype.send = function(command) {
    return utils.intStrToHexStr(command);
};

var mcore = new Mcore();

describe('【Mcore Write】', function() {
    describe('#setDcMotor(9,50)', function() {
        var targetCmd = "ff 55 06 00 02 0a 09 32 00";
        it(targetCmd + ' should be sent', function() {
            var cmd = mcore.setDcMotor(9, 50);
            assert.equal(targetCmd, cmd);
        });
    });

    describe('#setLed(7, 2, 0, 255, 0, 0)', function() {
        var targetCmd = "ff 55 09 00 02 08 07 02 00 ff 00 00";
        it(targetCmd + ' should be sent', function() {
            var cmd = mcore.setLed(0, 255, 0, 0);
            console.log(cmd);
            assert.equal(targetCmd, cmd);
        });
    });
});


describe('【Mcore Read】', function() {
    var index = 0;
    describe('#readVersion()', function() {
        var targetCmd = "ff 55 03 00 01 00";
        it(targetCmd + ' should be sent', function() {
            var cmd = mcore.readVersion(index);
            assert.equal(targetCmd, cmd);
        });
    });

    describe('#readUltrasonic(3)', function() {
        var targetCmd = "ff 55 04 00 01 01 01";
        it(targetCmd + ' should be sent', function() {
            var cmd = mcore.readUltrasonic(index, 3);
            assert.equal(targetCmd, cmd);
        });
    });
});