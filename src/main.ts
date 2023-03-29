import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// VueX
import store from './store'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App).use(store)
app.use(router).use(store).use(vuetify).mount('#app')
