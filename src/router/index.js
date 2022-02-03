import { createRouter, createWebHistory } from "vue-router";
import form from "../views/Form.vue";
import preview from "../views/Preview.vue";

const routes = [{ path: '/form', component: form, alias: '/' }, { path: '/preview', component: preview }]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;