import './css/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

const app = createApp(App)

// 등록
app.use(router)

app.mount('#app')
