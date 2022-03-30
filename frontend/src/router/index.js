import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../pages/Home.vue");
const AddAnime = () => import("../components/anime/AddAnimePost.vue")

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/add-anime",
      name: "AddAnime",
      component: AddAnime,
    },
  ],
  mode: "history",
});

export default router;