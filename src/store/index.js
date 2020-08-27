import Vue from 'vue'
import Vuex from 'vuex'
import { $http } from '../helpers/index'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		items: null
	},
	mutations: {
		'SET-ITEMS'(state, payload){
			state.items = payload;
		}
	},
	getters: {
		'GET-STATE-ITEMS'({ items }){
			return items
		}
	},
	actions: {
		async 'GET-ITEMS'(context, payload) {
			try {
				const data = await $http(payload);
				this.commit('SET-ITEMS', data);
				return true
			}
			catch (error) {
				throw error
			}

		}
	},
	modules: {
	}
})
