<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <b-field>
        <img src="../assets/analytics.png" alt="Analytics" class="img-head" />
        <b-input placeholder="Buscar funcionalidade.." class="search"></b-input>
      </b-field>
    </nav>

    <aside class="menu">
      <ul class="menu-list">
        <li>
          <a><i class="fas fa-home"></i> Dashboard</a>
        </li>
        <li>
          <a><i class="fas fa-users"></i> Grupos</a>
        </li>
        <li>
          <a href=""><i class="fas fa-user"></i>Usuários</a>
        </li>
        <li>
          <a><i class="fas fa-atom"></i> Sistemas</a>
        </li>
        <li>
          <a><i class="fas fa-sitemap"></i> Categoria</a>
        </li>
      </ul>
    </aside>
    <!--<UserList />-->
  </div>
</template>
<script>
//import UserList from "../components/UserList.vue";
export default {
  name: "Home",
  //components: UserList,
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

.hero {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.title {
  color: snow;
}

.container {
  width: 80%;
  height: 120vh;
  border-radius: 12px;
  margin-left: 16%;
  padding-left: 2rem;
  margin-top: -650px;
  flex-direction: column;
  background-color: #363636;
}

.btnsalva {
  background-color: #4ecca3;
  color: snow;
  float: right;
  margin-top: -70px;
  margin-right: 220px;
}

.salva {
  text-decoration: none;
}
.salva:visited {
  color: snow;
}

.media {
  color: snow;
  position: relative;
}

.list-group {
  width: 60%;
  height: 10rem;
  margin-left: 20%;
  padding-left: 2rem;
  margin-top: -620px;
  background-color: #b9b9b9;
  position: relative;
}

.name {
  display: inline-flex;
  flex-direction: column;
  width: 40%;
  color: whitesmoke;
}

.email {
  width: 40%;
  display: inline-flex;
  flex-direction: column;
}

.pass {
  margin-top: auto;
  width: 20%;
  display: inline-flex;
  flex-direction: column;
}

.tel {
  margin-top: auto;
  width: 20%;
  display: inline-flex;
  flex-direction: column;
}

.cpf {
  margin-top: auto;
  width: 20%;
  display: inline-flex;
  flex-direction: column;
}
</style>
