// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/components/ef/index.css'
import Container from 'element-ui'
import Form from 'element-ui'

Vue.use(ElementUI, {size: 'small'})
Vue.use(Container)
Vue.use(Form)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: {App},
    template: '<App/>'
})
