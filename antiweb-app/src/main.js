import 'materialize-css/dist/js/materialize.min'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios";



createApp(App).use(store).use(router,axios).mount('#app')
