const { defineNumber, defineString } = require('../core/type');
const Electronic = require('./electronic');

class Buzzer extends Electronic {
    /**
     * Buzzer类，声音模块
     * @constructor
     * @param {number} port - 声音模块port口
     * @param {number} slot - 声音模块slot口
     */
    constructor(port, slot) {
        super(port, slot);
    }

    /**
     * 播放声音
     * @param {string} tone - 声音音调
     * @param {number} beat - 声音音节
     */
    play(tone, beat) {
        this.tone = defineString(tone.toLocaleUpperCase());
        this.beat = defineNumber(beat);
        this._run();
        return this;
    }

    _run() {
        this.api.setTone(this.tone, this.beat);
    }
}