import Vue from 'vue'
import App from './App.vue'
import Hexagon from './hexagon'
// import 'vue-hexagon-grid/dist/vue-hexagon-grid.min.css';

Vue.component('vue-hexagon-grid', Hexagon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
