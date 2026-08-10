import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
app.use(router).mount('#app')
void useAuthStore().restore()
