// 把components下的所有组件通过插件的方式进行全局化注册
import ImageView from '@/components/ImageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    // app.component('组件名字'，组件配置对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
  }
}