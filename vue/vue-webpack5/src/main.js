import './styles/styles.css'
import './styles/sass.scss'
import './scripts/babel'

import xml from './assets/code_xml.xml'

console.log("xml:", xml)

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
