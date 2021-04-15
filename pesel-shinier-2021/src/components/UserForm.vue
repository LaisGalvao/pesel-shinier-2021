<template>
  <div class="container">
                <h1>Cadastrar usuário</h1>
                <hr>
                <div class="form-cad form-group">
                    <p>
                        <input placeholder="nome" 
                        class="form-control"
                        type="text" name="name" 
                        id="name" v-model="name">
                    </p>
                    <p>
                        <input placeholder="email@example.com" 
                        class="form-control"
                        type="email" name="email" 
                        id="name" v-model="email">
                    </p>
                    <p>
                        <input placeholder="you password.." 
                        class="form-control"
                        type="password" name="password" 
                        id="name" v-model="pass">
                    </p>
                    <p>
                        <input placeholder="123.456.789-00" 
                        class="form-control"
                        type="text" name="cpf" 
                        id="name" v-model="cpf">
                    </p>
                    <p>
                        <input placeholder="(11) 91234-5678" 
                        class="form-control"
                        type="tel" name="tel" 
                        id="name" v-model="tel">
                    </p>
                    <button type="submit" 
                    class="btn btn-primary"
                    v-on:click="add">
                        Cadastrar
                    </button>
                </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        pass: '',
        cpf: '',
        tel: ''
      }
    },
    methods: {
      add() {
        if(this.name.trim() ==='' || this.email.trim() ===''){
                        return
                    }

        this.$emit('add-user', {
          name: this.name,
          email: this.email,
          pass: this.pass,
          cpf: this.cpf,
          tel: this.tel
        });

        this.name = '';
        this.email = '';
        this.pass = '';
        this.cpf = '';
        this.tel = '';
      }
    }
  }
</script>