import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Loader from "./components/AppLoader.vue";

import "./assets/styles/main.scss";

const app = createApp(App);
app.component("Loader", Loader);
app.use(store);
app.use(router);
app.mount("#app");
