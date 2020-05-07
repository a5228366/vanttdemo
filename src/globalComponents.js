// 从node——modules中获取vant组件
import { Cell, CellGroup, Icon, Image } from 'vant';
// 注册全局组件变量
const GlobalComponents = {
   install(Vue) {
     // 将vant组件放入vue的模板中
      Vue.use(Cell);
      Vue.use(CellGroup);
      Vue.use(Icon);
      Vue.use(Image);
   }
}

export default GlobalComponents
