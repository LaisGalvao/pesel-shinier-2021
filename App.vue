<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import router from "vue-router";
import UserList from "./components/UserList";
Vue.use(Buefy);
export default {
  router,
  name: "app",
  components: UserList,
};
</script>
