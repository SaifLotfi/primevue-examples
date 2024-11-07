import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';
import App from './App.vue';

import './assets/main.css';

import 'primeicons/primeicons.css';
import pinia from './stores';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false,
    },
  },
  ripple: true,
});

app.use(ToastService);
app.use(pinia);

app.mount('#app');
