let Coding = {
    executor: ()=>{},
    init: function(sensorium, io) {
        var socket = io.connect('http://localhost:8800');
        socket.on('sensor2web', function(data) {
            sensorium.doReceived(JSON.parse(data));
        });
        sensorium.setSender(function(buf) {
            socket.emit('web2sensor', {
                buf: JSON.stringify(buf),
                sensor: 'None'
            });
        });
    },
    eval: function (code) {
        this.executor = (sensorium) => {
            // replace
            code = code.replace(/new\sSensorium\(.*\)/g, 'sensorium');
            // eval
            (window.execScript || function(code) {
                window["eval"].call(window, code);
                // TODO: 错误调用提示
            })(code);
        }
        return this.executor;
    }
}