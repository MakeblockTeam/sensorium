const randomTime = function(time){
  time = time || 10;
  return 30 + Math.floor(2 * time * Math.random() - time);
}

process.on('message', buf => {
  // console.log('get request', buf[3], buf);
  handle(buf);
});

function handle(buf){
  let buff = [0xff, 0x55, buf[3], 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a];  
  setTimeout(() => {
    // console.log('set reponse', buff[2], buff);
    process.send(buff);
  }, randomTime());
}


