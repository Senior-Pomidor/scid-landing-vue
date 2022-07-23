import axios from "axios";

const state = {
	services: []
};

const mutations = {
	SET_SERVICES: (state, services) => {
		state.services = services;
	},
	SET_SERVICES_MOCKUP: (state, servicesMockup) => {
		state.services = servicesMockup;
	}
};

const actions = {
	FETCH_SERVICES({ commit }) {
		return axios("https://fakestoreapi.com/products?limit=10", {
				method: "GET",
			})
			.then((services) => {
				commit("SET_SERVICES", services.data);
				return services;
			})
			.catch((error) => {
				alert(error);
				return error;
			});
	},
	async FETCH_SERVICES_MOCKUP({ commit }) {
		let mockup = await import('../mockup.json')
		commit("SET_SERVICES_MOCKUP", mockup.services);
		return mockup;
	}
};

const getters = {
	SERVICES: (state) => state.services
};


export default {
	state,
	getters,
	actions,
	mutations
}
