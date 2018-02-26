利用board作为通信类。

事件机制：
1. 用户对获取传感器进行取值函数定义
2. driver中定义事件框架
3. board中定义事件实体
4. parse中执行定义的事件，将值返回给PromiseList
5. PromiseList 拿到值执行用户定义的取值函数


## 步骤
- [x]构建文件结构
- [x]定义基本类
    - [x]主板类
    - [x]发送数据的接口类
- [x]nodejs事件的写法
    - 定义this.on(event, callback)
    - 通过callback进行调用

### 第一步：实现数据协议发送，确定接口名称
- [x]基于已有的程序结构实现
- [x]选择主板实现
- [x]完成读取传感器数值的逻辑部分
    - [x]基本协议发送
    - [x]模拟读取传感器的数值
    - [x]超时重发
- [x]利用browerify生成浏览器可以以后用的代码，命名为sensorium.js，进行测试
    - 需要把主类通过window对象export出去
- []定义接口名称
    - [x]auriga 部分
    - [x]mcore
    - []orion
    - []megapi
- [x]定义不同平台发送数据的接口
- [x]完成cordova蓝牙数据收发测试
- [x]利用 `blessed` 构建命令行界面工具
- [x]增加协议发送的单元测试，mocha
- [x]利用[jsdoc](http://usejsdoc.org/) 生成api文档
- []增加 `electron` 打包壳
- []返回接口的实体数据测试，hd作为测试工具
- [x]node-serialport做测试
- []增加 emit 和 on 的广播事件
- 想实现的是一个可以在web上跑的应用，借助这些传感器，组合成应用工具

### 第二步：实现数据接管
- []在makeblockhd上进行测试
- []定义数据层，接收并解析数据
- []不同协议做版本区分
- []跑通蓝牙部分

### 代码规范
- 2个空格代替tab
- 注释采用jsDoc规范
- 文件名称统一采用`_`连接


### 参考资源
- [api 书写格式](http://johnny-five.io/examples/sensor/)
- [mocha](http://mochajs.org)
- [chaijs](http://chaijs.com/)
(Chai 是一个针对 Node.js 和浏览器的行为驱动测试和测试驱动测试的诊断库，可与任何 JavaScript 测试框架集成。)


### refactor-v0.1
- [] 根据 auriga 实现的接口，抽离 api.js ，将接口做一个一个抽象，被各个主板继承

