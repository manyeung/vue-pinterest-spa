import Vue from 'vue'
import Vuex from 'vuex'
import stackGrid from './modules/stack-grid'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        stackGrid
    }
})