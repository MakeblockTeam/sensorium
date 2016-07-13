#sensorium
Sensorium is an api library for makeblock mainboards. It includes `mcore`, `orion`, `auriga` and  `megapi`.

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
    mcore.getSensorValue('ultrasonic', 3, function(val) {
        console.log(val);
    })
</script>

```

# Test
In the project root folder

```
$ mocha
```


