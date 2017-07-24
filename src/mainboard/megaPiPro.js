import Board from '../core/Board';
import electronics from '../electronic/index';
import Mode from './firmware/mode';
import Version from './firmware/version';
import Settings from './settings';
//支持位置
const SUPPORT_INDEX = Settings.SUPPORTLIST.indexOf('MegaPiPro');

//实现一个板子就注册一个板子名称
class MegaPi extends Board{
  constructor(conf){
    super(conf);
    let this_ = this;
    //主控板名
    this.name = 'MegaPiPro';
    //固件当前模式
    this.currentMode = null;
    //固件版本
    this.version = null;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.supportStamp().charAt(SUPPORT_INDEX) === '1'){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments, this_.name);
        };
      }
    }
  }

  /**
   * 获取版本号，所有主控板支持
   * @param  {!Function} callback
   */
  getVersion(callback){
    let this_ = this;
    if(this.version){
      typeof callback == 'function' && callback(this.version);    
    }else{
      Version.getVersion(function(val){
        this_.version = val;
        typeof callback == 'function' && (this.version);
      });
    }
  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */
  setFirmwareMode(mode){
    let subCmd = 0x12;
    Mode.setMode(subCmd, mode);
    return this;
  }
  /**
   * 获取固件模式
   * @param  {Function} callback 取值后回调函数
   */
  //TODO: 数据缓存
  getFirmwareMode(callback){
    let subCmd = 0x72;
    Mode.getMode(subCmd, callback);
    return this;
  }
}

export default MegaPi;