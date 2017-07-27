import Board from '../core/Board';
import electronics from '../electronic/index';
import Version from './firmware/version';
import Settings from './settings';
//支持位置
const SUPPORT_INDEX = Settings.SUPPORTLIST.indexOf('Mcore');

//实现一个板子就注册一个板子名称
class Mcore extends Board{
  constructor(conf){
    //继承 Board
    super(conf);
    let this_ = this;
    //主控板名
    this.name = 'Mcore';
    //固件版本
    this.version = null;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.supportStamp().charAt(SUPPORT_INDEX) === '1'){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments, this.name);
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
}

export default Mcore;