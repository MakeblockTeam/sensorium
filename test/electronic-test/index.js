const electronic = require('../../src/electronic');
const Mcore = require('../../src/protocol/mcore');
const assert = require('chai').assert;


let mcore = new Mcore({
    "driver": "serial"
});

mcore.setTransport({
    send: function (buf) {
        console.log(buf);
    },
    onReceived: function (parse) {
        console.log('recevied')
    }
})

// rgb led
describe('test rgb led', () => {
    const functions = ['r', 'g', 'b', 'position', 'turnOn', 'turnOff', 'red', 'green', 'blue'];
    const NAME = 'rgb led';
    
    let led1_1 = mcore.rgbLed(1, 1);
    let led1_2 = mcore.rgbLed(1, 2);
    let led2_1 = mcore.rgbLed(2, 1);
    let example = mcore.rgbLed(1, 1);
    it('test port和slot相同 为同一实例', () => {
        assert.equal(led1_1, mcore.rgbLed(1, 1));
        assert.equal(led1_2, mcore.rgbLed(1, 2));
        assert.equal(led2_1, mcore.rgbLed(2, 1));
    });

    it('test port或slot不同 不为同一实例', () => {
        assert.notEqual(led1_1, led1_2);
        assert.notEqual(led1_1, led2_1);
        assert.notEqual(led2_1, led1_2);
    });

    it('test port and slot must be number', () => {
        let leda_b = electronic.rgbLed('a', 'b');
        assert.isNotOk(leda_b.port);
        assert.isNotOk(leda_b.slot);
    });
    
    for (let i = 0; i < functions.length; i ++) {
        it(`test ${NAME} can run ${functions[i]}`, () => {
            assert.isOk(example[functions[i]]());
        });
    }
});

// motor
describe('test motor', () => {
    let dcmotor = mcore.dcMotor(1);
    it('test dc motor can start', () => {
        assert.isOk(dcmotor.start())
    });
});