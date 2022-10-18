import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/HomeView.vue'
import About from '../Views/AboutView.vue'
import Settings from '../Views/SettingsView.vue'
import Calendar from '../Views/CalendarView.vue'
import Diary from '../Views/DiaryView.vue'
import Login from '../Views/LoginView.vue'
import Register from '../Views/RegisterView.vue'
import {auth} from '../firebase'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                requiresAuth: true
              }
        },
        {
            path: '/about',
            component: About,
            meta: {
                requiresAuth: true
              }
      
        },
        {
            path: '/settings',
            component: Settings,
            meta: {
                requiresAuth: true
              }
   
        },
        {
            path: '/calendar',
            component: Calendar,
            meta: {
                requiresAuth: true
            }
         
        },
        {  
            path: '/diary/:id',
            name: 'diary',
            component: Diary,
            meta: {
                requiresAuth: true
            }

        },
        {
            path: '/diary',
            component: Diary,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/',
            component: Login
        },

       

    ]
})

router.beforeEach((to, from, next)=> {
    if(to.path === '/' && auth.currentUser){
        next('/home')
        return;
    }

    if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
        next('/')
        return;
    }
    next();
}) 

export default router;

