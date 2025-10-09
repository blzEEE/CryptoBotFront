import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAppStore } from './stores/app'

const pinia = createPinia()
const buildComponent = () => {
    if(useAppStore.authentificated){

    }
}

const app = createApp(App)
app.use(pinia)
app.use(router)

const store = useAppStore()

app.mount('#app')
