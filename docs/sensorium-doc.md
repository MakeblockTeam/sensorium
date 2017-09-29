


#quick start 快速起步

1）git clone
2) npm install sensorium --save-dev
3) <script type="text/javascript" src="sensorium.js"></script>

let sensorium = new Sensorium();
sensorium.createMcore()


#Characteristic interpretation 特性解读
##API 级别
  - 传感器级别 API
  - 主控板级别 API
  - 命名空间级别 API

##API 类型
  - 常规类型        hz 等等设置运行参数的 API
  - 执行类型        run 及 对 run 的封装
  - 读值类型        统一为 getData
  - getter 类型    统一 protocol

##开发者 API vs 用户 API


#Examples
##复杂 API
- 表情面板
- 编码电机


##脑洞开起来
- 构造任何 UI 作为输入端
  - 常用的是 blockly 块
  - 构建一个微信物联网控制面板
- 输出端作用于谁？
  - 作用于主控板