import Vue from 'vue'
import UserForm from './components/UserForm.vue'
import UserList from './components/UserList.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
   
    {
        path: '/form',
        name: 'cadastrar',
        component: UserForm
    },
    {
        path: '/',
        name: 'Usuarios',
        component: UserList
    }
]

const router = new VueRouter({
mode: 'history',

routes
})

export default router
