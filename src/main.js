import './assets/styles/common.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'

const app = createApp(App)

app.use(router)
app.use(Vue3Lottie)
app.use(BootstrapIconsPlugin)

app.mount('#app')
