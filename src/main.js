import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";

import "../src/assets/css/global.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.provide("$axios", axios);
app.provide("$router", router);
app.provide("$store", store);
app.mount("#app");
