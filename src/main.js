import './assets/styles/common.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(Vue3Lottie)
app.use(BootstrapIconsPlugin)

// axios 전역 설정
app.config.globalProperties.$axios = axios

app.mount('#app')
