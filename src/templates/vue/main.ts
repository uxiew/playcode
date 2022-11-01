// import { createApp } from "vue";
// const app = window.__app__ = createApp(__modules__["${MAIN_FILE}"].default)
// app.config.errorHandler = e => console.error(e)
// app.mount('#app')`
import { createApp } from 'vue';
import App from './App.vue';

console.log('Hello world');

const app = createApp(App);
app.mount('#app');
