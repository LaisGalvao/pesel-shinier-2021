<template>
  <div class="list-group">
    <!--<UserForm v-on:add-user="add"></UserForm>-->
    <section class="hero">
      <div class="hero-body">
        <p class="title">Usuários</p>
        <b-field>
          <b-button class="btnsalva"><a href="" class="salva">Novo usuário</a></b-button>
        </b-field>
      </div>
    </section>
    <p class="nadamostra" v-if="users.length <= 0">Nada a mostrar...</p>
    <div
      class="list-group-item"
      v-else
      v-for="(user, index) in allUsers"
      v-bind:key="index"
    >
      <span class="user-name">
        Nome: <strong>{{ user.name }}</strong>
      </span>
      <p>{{ user.email }}</p>
      <p>{{ user.pass }}</p>
      <p>{{ user.cpf }}</p>
      <p>{{ user.tel }}</p>
      <div>
        <a href="#" title="Excluir" v-on:click.prevent="removeU(index)">Excluir</a>
      </div>
    </div>
  </div>
</template>
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

.nadamostra {
  color: snow;
  margin-top: -30px;
  position: absolute;
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
<script>
import UserForm from "./UserForm";
export default {
  components: {
    UserForm,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(users) {
      this.users.push(user);
    },
    removeUser(index) {
      this.users.splice(index, 1);
    },
  },
  computed: {
    allUsers() {
      return this.users.map((user) => ({
        ...user,
        name: user.name.trim() === "" ? "Anônimo" : user.name,
      }));
    },
  },
  watch: {
    comments(val) {
      console.log("val", val);
    },
  },
};
</script>
