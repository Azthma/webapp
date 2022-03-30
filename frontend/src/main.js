import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
