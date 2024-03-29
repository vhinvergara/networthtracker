import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import TitleHeader from "./components/common/HeroTitleHeader.vue";
import "../src/assets/css/global.css";
const app = createApp(App);
app.use(store);
app.use(router);
app.provide("$axios", axios);
app.provide("$router", router);
app.provide("$store", store);
app.provide("$ifLayoutMax", screen.width > 768 ? true : false); //Default desktop
app.component("hero-title-header", TitleHeader);
app.mount("#app");
