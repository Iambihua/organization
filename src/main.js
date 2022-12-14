import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./assets/fonts/fonts.css";
import "tailwindcss/tailwind.css";
import "normalize.css/normalize.css";
// import "amfe-flexible";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
