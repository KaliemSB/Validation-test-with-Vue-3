import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state () {
      return {
        user: {}
      }
    }
  })

createApp(App).use(router).use(store).mount('#app')
 