const child_process = require('child_process');
const path = require('path');
const parent = child_process.fork(path.resolve(__dirname, 'child.js'), [], {});

function Server(){

  //监听子进程
  this.addListener = function (handle){
    parent.on('message', buf => {
      // console.log('get reponse', buf[2], buf);
      handle(buf);
    });
  }

  //向子进程发送消息
  this.send = function(buf){
    // console.log('set request', buf[3], buf);
    parent.send(buf);
  }
}

module.exports = Server;