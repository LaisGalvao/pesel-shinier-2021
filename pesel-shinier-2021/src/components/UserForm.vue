<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <p class="title">Cadastrar novo usuário</p>
        <b-field>
          <b-button class="btnsalva" v-on:click="add">Salvar</b-button>
        </b-field>
      </div>
    </section>

    <b-field label="Nome" class="name">
      <b-input type="text" placeholder="Seu nome" v-model="name"></b-input>
    </b-field>

    <b-field label="Email" class="email">
      <b-input
        type="email"
        placeholder="email@exemplo.com"
        maxlength="30"
        v-model="email"
      >
      </b-input>
    </b-field>

    <b-field label="Password" class="pass">
      <b-input
        type="password"
        placeholder="sua senha"
        maxlength="30"
        v-model="pass"
      ></b-input>
    </b-field>

    <b-field label="seu CPF" class="cpf">
      <b-input placeholder="Seu CPF" type="number" min="10" max="20" v-model="cpf">
      </b-input>
    </b-field>

    <b-field label="telefone" class="tel">
      <b-input placeholder="(11) 91234-5678" type="tel" min="10" max="12" v-model="tel">
      </b-input>
    </b-field>

    <b-field label="Subject">
      <b-select placeholder="Selecione um cagro">
        <option value="1">Super-Admin</option>
        <option value="2">Outro cargo</option>
      </b-select>
    </b-field>
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
export default {
  data() {
    return {
      name: "",
      email: "",
      pass: "",
      cpf: "",
      tel: "",
    };
  },
  methods: {
    add() {
      if (this.name.trim() === "" || this.email.trim() === "") {
        return;
      }

      this.$emit("add-user", {
        name: this.name,
        email: this.email,
        pass: this.pass,
        cpf: this.cpf,
        tel: this.tel,
      });

      this.name = "";
      this.email = "";
      this.pass = "";
      this.cpf = "";
      this.tel = "";
    },
  },
};
</script>
