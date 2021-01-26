import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data () {
    return {
      cards: [
        {
          number: '0451958398373321',
          name: 'Elias Lundgren',
          date: '11/23',
          ccv: '783',
          vendor: 'bitcoin'
        },
        {
          number: '5823945732914097',
          name: 'Elias Lundgren',
          date: '05/24',
          ccv: '827',
          vendor: 'evil'
        },
        {
          number: '6634501821234567',
          name: 'Elias Lundgren',
          date: '03/23',
          ccv: '189',
          vendor: 'blockchain'
        },
        {
          number: '1244567891234217',
          name: 'Elias Lundgren',
          date: '06/21',
          ccv: '133',
          vendor: 'ninja'
        }
      ]
    }
  },
  render: h => h(App)
}).$mount('#app')
