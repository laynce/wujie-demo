import { createRouter, createWebHistory } from "vue-router";
import Vapp from "../views/Vapp.vue";
import Rapp from "../views/Rapp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/vue-app",
    },
    {
      path: "/vue-app",
      name: "Vapp",
      component: Vapp,
    },
    {
      path: "/react-app",
      name: "Rapp",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Rapp,
    },
  ],
});

export default router;
