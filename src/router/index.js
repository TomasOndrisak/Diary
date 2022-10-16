import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/Home.vue'
import About from '../Views/About.vue'
import Settings from '../Views/Settings.vue'
import Calendar from '../Views/Calendar.vue'
import Diary from '../Views/Diary.vue'

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
        },
        {
            path: '/settings',
            component: Settings
        },
        {
            path: '/calendar',
            component: Calendar
        },
        {
            path: '/diary',
            component: Diary
        }

    ]
})

export default router;