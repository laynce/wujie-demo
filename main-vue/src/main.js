import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import WujieVue from "wujie-vue3";
const app = createApp(App);
const { setupApp } = WujieVue;

app.use(WujieVue);
app.use(router);

app.mount("#app");

setupApp({
  name: "sub-vue",
  url: "http://localhost:8080/",
  exec: true,
  sync: true,
});

setupApp({
  name: "sub-react",
  url: "http://localhost:9000/",
  exec: true,
  sync: true,
});
