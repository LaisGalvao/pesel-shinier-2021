<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <b-field>
        <img src="./assets/analytics.png" alt="Analytics" class="img-head" />
        <b-input placeholder="Buscar funcionalidade.." class="search"></b-input>
      </b-field>
    </nav>
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
<style>
.menu {
  background-color: #050a0c;
  width: 15%;
  height: 100vh;
}

.menu-list {
  margin-top: 90px;
}

.img-head {
  padding: 30px;
}

.displayed {
  display: none;
}

.fas {
  color: #363636;
}

.navbar {
  background-color: #050a0c;
}

.search {
  width: 80vh;
  padding: 30px;
  background-color: #050a0c;
}

li {
  margin-top: 20px;
}

html {
  background: #050a0c;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #050a0c;
}
</style>
