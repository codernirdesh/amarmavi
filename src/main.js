import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "./plugins/vuesax.js";
import player from "vue-hls-player";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  player,
  render: h => h(App)
}).$mount("#app");
