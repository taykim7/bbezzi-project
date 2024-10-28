import './css/base.css'
import 'swiper/css'
import 'swiper/css/pagination'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import CommonInput from './components/CommonInput.vue'
import CommonButton from './components/CommonButton.vue'
import CommonKeypad from './components/CommonKeypad.vue'
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
import { createVuetify } from 'vuetify'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const vuetify = createVuetify({
  defaults: {
    VDialog: {
      width: 'auto'
    }
  },
  icons: {
    defaultSet: 'mdi'
  }
})

const app = createApp(App)

// 등록
app.use(router)
app.use(createPinia())
app.use(vuetify)

// global components
app.component('C-Input', CommonInput)
app.component('C-Button', CommonButton)
app.component('C-Keypad', CommonKeypad)
app.component('V-Line', Line)

app.mount('#app')
