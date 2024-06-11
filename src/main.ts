import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.hivesApiBaseUrl = "https://sylvain-hive-api.osc-fr1.scalingo.io/api/v1/hives/"

app.use(router)

app.mount('#app')
