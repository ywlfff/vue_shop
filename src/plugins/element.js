import Vue from 'vue'
// 完整引用
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 按需引入
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
