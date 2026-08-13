import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
app.use(ElementPlus, { size: 'default', zIndex: 3000 })
app.use(router).mount('#app')
void useAuthStore().restore()
