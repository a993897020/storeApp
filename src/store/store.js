import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        foodList:[],
        userName:'',
        isLogin:false
    },
    getters:{
        food:state=>state.foodList,
        name:state=>state.userName,
        login:state=>state.isLogin,
    },
    mutations:{
        getFood(state,food){
            state.foodList.push(food)
        },
        userStatus(state,user){
            if(user){
                state.userName=user
                state.isLogin=true
            }else{
                state.userName=null
                state.isLogin=false
            }
        }
    },
    actions:{
        setUser({commit},user){
            commit("userStatus",user)
        }
    }
})