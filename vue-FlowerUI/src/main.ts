
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import sotre from './vuex/index'
import router from './routes'
import  '../src/assets/css/global.scss'
import '../src/utils/rem'
const app=createApp(App)
app.use(router)
app.use(sotre)
app.use(ElementPlus)
app.mount('#app')
