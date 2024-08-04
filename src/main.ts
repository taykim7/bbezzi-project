import './css/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import CommonInput from './components/CommonInput.vue'
import CommonButton from './components/CommonButton.vue'

const app = createApp(App)

// 등록
app.use(router)

// global components
app.component('C-Input', CommonInput)
app.component('C-Button', CommonButton)

app.mount('#app')
