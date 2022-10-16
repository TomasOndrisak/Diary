import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/HomeView.vue'
import About from '../Views/AboutView.vue'
import Settings from '../Views/SettingsView.vue'
import Calendar from '../Views/CalendarView.vue'
import Diary from '../Views/DiaryView.vue'
import Login from '../Views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
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
            path: '/diary/:id',
            name: 'diary',
            component: Diary,

        },
        {
            path: '/diary',
            component: Diary
        },
        {
            path: '/',
            component: Login
        }

    ]
})

export default router;