import Vue from 'vue'
import Router from 'vue-router'

import Layout from "@/layout/Layout";

import LoginPage from '@/page/login/LoginPage'
import SignUpPage from '@/page/signup/SignUpPage'
import SnsPage from '@/page/sns/SnsPage'

Vue.use(Router)

const router = new Router({
    routes: [

        { path: '/', redirect: '/login' },

        // { path: '/sns', component: snsPage },

        // { path: '/sign-up', component: signUpPage },

        { path: '/login', component: LoginPage },

        { path: '/sign-up', component: SignUpPage },

        // {
        //     path: '/login',
        //     component: Layout,
        //     children: [
        //         { path: '', component: LoginPage }
        //     ]
        // },

        // {
        //     path: '/sign-up',
        //     component: Layout,
        //     children: [
        //         { path: '', component: SignUpPage }
        //     ]
        // },

        {
            path: '/sns',
            component: Layout,
            children: [
                { path: '', component: SnsPage }
            ]
        },


    ]
})

export default router;