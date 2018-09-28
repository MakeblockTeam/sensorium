## Changelog
### [0.4.5] - 2018-08-20
#### Fix
-  fix bug

### [0.4.0] - 2018-05-23
#### Fix
-  fix bug of encoderMotor

### [0.3.9] - 2018-04-08
#### Add
-  Add method `setEmitMessage`,`getEmitMessage` for InfraredOnBoard module.

### [0.3.8] - 2018-04-04
#### Add
-  add two modules for mcore: `InfraredOnBoard`, `Infrared`

### [0.3.7] - 2018-04-03
#### Fixed
-  fix bug: missing some package when unpacking the received protocol.
### Changed
-  rename some modules mothod, such as `stop` to `setStop`, `reverse` to `setReverse`

### [0.3.6] - 2018-03-28
#### Fixed
-  fix bug: can't get right electronic module id when code was uglified.

### [0.3.5] - 2017-11-30
#### Fixed
-  fix the wrong spelling: `sensorium.doRecevied` => `sensorium.doReceived`.

### [0.3.3] - 2017-10-26
#### Fixed
-  fix bug of `sensorium.write` and `Control.pipe`

### [0.3.2] - 2017-09-29
#### Changed
-  unify the mainboard apis call as follows:
   - auriga.getVersion().getData().then((val) =>console.log(val))
   - auriga.setFirmwareMode().run()
   - auriga.readVoltage().getData().then((val) =>console.log(val))

### [0.3.1] - 2017-09-21
#### Fixed
-  fix bug: sensorium.SUPPORT instead of sensorium.getSupport()

### [0.3.0] - 2017-09-19
#### Changed
-  优化文件结构
-  Humiture 类将旧版本 API getHumidity, getTemperature 改为 readHumidity, readTemperature
-  EncoderMotorOnBoard 类将旧版本 API getSpeed, getAngle 改为 readSpeed, readAngle
-  FourLeds 类将旧版本类名 FourLed 改为 FourLeds
-  FourKeys 类将旧版本类名 FourKey 改为 FourKeys
-  所有的电子模块增加一个 protocol 方法，该方法为一个 getter 函数，以便提供获取协议的能力
-  规范所有模块提供 `run` 接口， 用于执行，并提供 `getData` 接口，用于读值。此外还提供了一些它们的封装接口

### [0.2.7] - 2017-09-12
#### Changed
-  优化文件结构
-  完善接口文档

## [0.2.6] - 2017-08-29
### Changed
-  sensorium 实例调用 setSender 设置传输方法
-  sensorium 实例调用 doReceived 将响应数据分发

### [0.2.5] - 2017-08-11
#### Fixed
-  Auriga Buzzer 模块无效的 bug
-  Auriga SmartServo 运动到相对位置、绝对位置等的 bug

### [0.2.4] - 2017-08-08
#### Added
- mcore 板载红外线传感器（读）接口 InfraredOnBoard
- 其他主控板外接红外线传感器（读）接口 Infrared
- LedMatrix 模块 4 种模式均增加 clear() 方法，以便能快捷的清除面板上显示的内容

#### Changed
- LedMatrix 模块 4 种模式显示内容的接口由原来的 ledMatrixData() 调整为 content()

#### Fixed
-  LedMatrix 表情面板显示字符不能工作的 bug

### [0.2.3] - 2017-08-08
#### Added
- Sensorium 实例新增 `send` 方法，该方法支持直接 write 协议
- Sensorium 库新增 API 文档，详情见 `./jsdoc` 目录

#### Fixed
-  Sorry for `async/await` throwing error. 已使用 babel-plugin-transform-runtime 转译修复此问题

### [0.2.2] - 2017-08-03
#### Added
- Sensorium 实例新增 `createMcore`,`createAuriga`,`createMegaPi`等方法创建对应的主控板实例

#### Changed
- 所有的读值接口，采用 Promise 回调的方式，先前版本通过传回调函数的方式被弃用
- getVerion 接口移至 Board 类实现，被各主控板继承
- LedMatrix 类重构，通过调用 `charMode`,`emotionMode`等方法进入不同的 ledMatrix 模式

### [0.2.1] - 2017-07-27
#### Added
- 提供了光线、温度、音量、led灯的板载 API

#### Changed
- 完善传各种参数给 API 时，参数少传、类型错传的容错机制，同时提供更加平滑的 warn 警告而程序不会被错误中断

### [0.2.1] - 2017-07-26
#### Added
- RgbLed 类中加了一个 rgb() 的接口，方便直接传入 hex color 值

#### Changed
- 优化了 Transport 类对通讯通道的初始化方式

#### Fixed
- 解决蓝牙返回值没有被监测到的 bug

