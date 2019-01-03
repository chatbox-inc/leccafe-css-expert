import Vuex from "vuex"
import { firebaseMutations, firebaseAction } from 'vuexfire'
import {postRef,loginWithGoogle} from "./service/firebase";

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            posts: {},
            user: null
        },
        mutations: {
            ...firebaseMutations,
            SET_USER(state,user){
                state.user = user
            }
        },
        actions: {
            INIT_POSTS: firebaseAction(({ bindFirebaseRef }) => {
                bindFirebaseRef('posts', postRef(), {
                    readyCallback(){
                        // do something
                    }
                })
            }),
            async LOGIN({commit}){
                const {user} = await loginWithGoogle()
                commit("SET_USER",user)
                return user
            },
            async RELOGIN({commit}) {
                const user = await relogin()
                if(user){
                    commit("SET_USER",user)
                    return user
                }
            },
        }
    })
    Vue.mixin({
        store
    })

    async function afterEach(to, from, next) {

    }
    router.afterEach(afterEach)

}
