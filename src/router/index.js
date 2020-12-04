import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EventList",
    component: () => import("../views/EventList.vue")
  },
  {
    path: "/detail/:id",
    name: "EventDetail",
    component: () => import("../views/EventDetail.vue")
  },
  {
    path: "/edit/:id",
    name: "EventEdit",
    component: () => import("../views/EventEdit.vue")
  },
  {
    path: "/create",
    name: "EventCreate",
    component: () => import("../views/EventCreate.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
