import {createStore} from 'vuex';
import router from '../router'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut 
    } from 'firebase/auth';

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        },
        CLEAR_USER(state){
            state.user = null
        }
    },
    actions: {
        async login({commit}, details){
           const {email, password } = details
           try {
            await signInWithEmailAndPassword(auth, email, password)
           }
           catch(error){
            console.log(error);
           }
           commit('SET_USER', auth.currentUser);
           router.push('/home');
           console.log('logged in successfuly')
        },
        async register({commit}, details){
            const {email, password } = details
            try {
             await createUserWithEmailAndPassword(auth, email, password)
            }
            catch(error){
             console.log(error);
            }
            commit('SET_USER', auth.currentUser);
            console.log('registered successfuly')
            router.push('/home');
        },
        async logout ({commit}){
           await signOut(auth);
           commit('CLEAR_USER');
           router.push('/');
           console.log('logged out successfuly')
        },
       
        fetchUser ({commit}) {
            auth.onAuthStateChanged(async user => {
                if (user === null){
                    commit('CLEAR_USER');
                } else {
                    commit('SET_USER', user);
                   if (router.isReady() && router.currentRoute.value.path === '/'){
                    router.push('/home')

                   }
                }
            } )
        }
    }
})