import Vue from 'vue'
import Router from 'vue-router'

import SnsPage from '@/page/sns/SnsPage'
import signUpPage from '@/page/signup/SignUpPage'

Vue.use(Router)

const router = new Router({
    routes: [

        { path: '/', redirect: '/sns' },

        { path: '/sns', component: SnsPage },

        { path: '/sign-up', component: signUpPage },

    ]
})

export default router;