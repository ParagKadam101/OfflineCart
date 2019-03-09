import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import Login from '@/view/login'
import Signup from '@/view/signup'

let router = new Router({
    routes:[
        {
            path: '/signup',    
            component: Signup
        },
        {
            path: '/login',   
            component: Login
        }
    ]
});

export default router;