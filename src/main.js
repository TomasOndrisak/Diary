import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import createStore from './store/index'



const app = createApp(App);

app.use(router);
app.use(createStore);
app.mount('#app');
