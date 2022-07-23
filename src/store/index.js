import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		services: []
	},
	mutations: {
	},
	actions: {
		async fetchContacts({commit}) {
			let services = fetch('https://fakestoreapi.com/products?limit=5')
												.then(res=>res.json())
												.then(json=>console.log(json));
			commit('updateContacts', contacts)
		},
		},
	modules: {
		home
	},
	getters: {
		
	}
})
	