import "./assets/main.css"

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './axios.js'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import VScrollLock from 'v-scroll-lock'

createApp(App).use(VScrollLock).use(router).use(pinia).mount('#app')
