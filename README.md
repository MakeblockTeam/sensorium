#sensorium
Sensorium is an api library for makeblock mainboards. It includes `mcore`, `orion`, `auriga` and  `megapi`.

# Install

```
npm install
```

# Generate library
Generate `sensorium.js` width npm. The target file is `/browser`.

```
npm run build
```

# Usage

## browser
inclue the file `/browser/sensorium.js` in your project.

```
<script src="sensorium.js"></script>
<script>
    var mcore = new Mcore();

    // set motor move.
    mcore.setDcMotor(10, 255);

    // get ultrasonic sensor's value
    mcore.getSensorValue('ultrasonic', {"port": 3}, function(val) { console.log(val);});
</script>

```

## cli test tool
Use [blessed](https://github.com/chjj/blessed) for comandline tool.
Connect your device to computer with usb, such as mbot.

open the terminal and run cli tool

```
node cli.js
```
then input your method in the code area

```
mcore.setDcMotor(9, 200);

mcore.setLed(0, 255, 0, 0);
mcore.turnOffLed(0);

mcore.setTone("C4", 250);

setInterval(function() { mcore.getSensorValue('ultrasonic', {"port": 3}, function(val) { }); }, 500)
```

dobule `ESC` to close the cli tool.

# Unit Test
Use [mocha](http://mochajs.org/) for unit test.In the project root folder, type the command.

```
$ npm install mocha -g
$ mocha
```

# Api documention (temp)

Use [jsdoc](http://usejsdoc.org/) for documention generation.
```
npm run doc
```

open `docs/api/index.html` in browser.

# Api list
## Mcore

Write:

```
mcore.setDcMotor(9, 200);

mcore.setLed(0, 255, 0, 0);
mcore.turnOffLed(0);

mcore.setTone("C4", 250);

```

Read:


```
mcore.getSensorValue('ultrasonic', {"port": 3}, function(val) {
  console.log(val);
});

- ultrasonic
- lineFollower

```
