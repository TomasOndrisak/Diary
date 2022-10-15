import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/Home.vue'
import About from '../Views/about.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router;