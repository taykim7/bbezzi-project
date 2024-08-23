import './css/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import CommonInput from './components/CommonInput.vue'
import CommonButton from './components/CommonButton.vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const app = createApp(App)

// 등록
app.use(router)
app.use(createPinia())

// global components
app.component('C-Input', CommonInput)
app.component('C-Button', CommonButton)
app.component('V-Line', Line)

app.mount('#app')
