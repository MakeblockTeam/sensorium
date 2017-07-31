# Changelog

## [0.2.1] - 2017-07-27
### Added
- 提供了光线、温度、音量、led灯的板载 API
### Changed
- 完善传各种参数给 API 时，参数少传、类型错传的容错机制，同时提供更加平滑的 warn 警告而程序不会被错误中断

## [0.2.1] - 2017-07-26
### Added
- RgbLed 类中加了一个 rgb() 的接口，方便直接传入 hex color 值
### Changed
- 优化了 Transport 类对通讯通道的初始化方式
### Fixed
- 解决蓝牙返回值没有被监测到的 bug

