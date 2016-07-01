/**
 * @fileOverview mainboards of Makeblock. Include orion, mcore, auriga, megaPi.
 * @author Hyman (hujinhong@makelbock.cc)
 */

class Board {
    constructor(type) {
        this.boardType = type;
    }

    // 获取型号
    getVersion() {
        var version = new Command().getVersion();
        this.version = version;
        return version;
    }


}