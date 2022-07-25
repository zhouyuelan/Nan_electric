import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "@/router";

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

const app = createApp(App);


app.use(ElementPlus);
app.use(router);
app.mount("#app");
