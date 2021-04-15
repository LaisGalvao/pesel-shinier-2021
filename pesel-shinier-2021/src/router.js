import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserList from './components/UserList'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },{
            name: 'users',
            path: '/users',
            component: UserList
        }
        
    ]
})
