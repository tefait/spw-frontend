import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App); // Definisikan app terlebih dahulu
app.use(router); // Gunakan router
app.mount('#app'); // Mount aplikasi
