import Vuex from 'vuex'

import { stayModule } from './modules/stay.module.js'


export const store = Vuex.createStore({
  strict: true,
  modules: {
    
    stayModule,
 
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
