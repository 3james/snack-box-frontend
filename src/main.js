import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import CommonAlertMessage from '@/components/CommonAlertMessage'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('CommonAlertMessage', CommonAlertMessage)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')