<template>
  <div class="container">
    <h1>Comentários</h1>
    <hr />
    <UserForm v-on:add-user="add"></UserForm>
    <div class="list-group">
    <p v-if="users.length <= 0">Sem comentários...</p>
    <div v-else class="list-group-item" v-for="(user, index) in allUsers" v-bind:key="index">
        <span class="comment__author">Autor: <strong>{{ user.name }}</strong></span>
        <p>{{ user.message }}</p>
        <div>
        <a href="#" title="Excluir" v-on:click.prevent="removeUser(index)">Excluir</a>
        </div>
    </div>
    </div>
    <hr />
  </div>
</template>

<script>
import UserForm from './UserForm';
export default {
  components: {
    UserForm
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    addUSer(users) {
      this.users.push(user);
    },
    removeUser(index) {
      this.users.splice(index, 1);
    }
  },
  computed: {
    allUsers() {
      return this.users.map(user => ({
        ...user,
        name: user.name.trim() === '' ? 'Anônimo' : user.name
      }))
    }
  },
  watch: {
    comments(val) {
      console.log('val', val)
    }
  }
}
</script>