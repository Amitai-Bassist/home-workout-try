import { createApp } from 'vue';

import { router } from './router.js';
import { store } from './store/store.js';

import './assets/styles/main.scss';
import './assets/styles/setup/_typography.scss';
import rootCmp from './root-cmp.vue';

import VueClickAway from 'vue3-click-away';
// import moment from 'moment';


const app = createApp(rootCmp);
app.use(router);
app.use(store);
app.use(VueClickAway);


app.mount('#app');
