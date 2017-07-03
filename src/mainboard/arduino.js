import Board from '../core/Board';
import electronics from '../electronic/index';
import Settings from './settings';
//支持位置
const SUPPORT_INDEX = Settings.SUPPORTLIST.indexOf('Arduino');

//实现一个板子就注册一个板子名称
class Arduino extends Board{
  constructor(conf){
    //继承 Board
    super(conf);
    let this_ = this;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.supportStamp().charAt(SUPPORT_INDEX) === '1'){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    }
  }
}

export default Arduino;