import Command from '../../../src/communicate/command';
import Event from 'events';
const Emitter = new Event.EventEmitter();

//服务端
function Server(time){
  this.messageTimeout = time || 30;

  this.request = function(buf){
    let this_ = this;
    let time = Math.floor(Math.random() * 20 - 10);
    let timeout_ = this_.messageTimeout + time;
    //响应时间是浮动的
    setTimeout(function(){
      this_.response(buf);
    }, timeout_);
  }

  this.response = function(buf){
    let buff = [0xff, 0x55, buf[3], 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a];
    Emitter.emit('data', buff);
  }
}

function SerialPort(){
  const server = new Server();
  this.send = function(buf){
    server.request(buf);
  }
  this.on = function(event, callback){
    Emitter.on(event, function(buff){
      callback(buff);
    });
  };
}

// console.log(Command.pipe);

const serialPort = new SerialPort();
const Transport = {
  send: function(buf){
    // console.log('transport send: ', buf);
    serialPort.send(buf);
  },

  //old name is onReceive
  addListener: function(pipe){
    serialPort.on('data', function(buff) {
      // console.log('transport receive', buff);
      pipe(buff);
    });
  }
};

Transport.addListener(Command.pipe.bind(Command));
export default Transport;