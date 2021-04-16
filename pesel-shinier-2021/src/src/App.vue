<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import router from "./router";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
Vue.use(Buefy);

export default {
  router,
  name: "app",
  component: { UserList, UserForm },
};
</script>
