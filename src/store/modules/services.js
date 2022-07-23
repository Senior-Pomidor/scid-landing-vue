import axios from "axios";

const state = {
	services: [
		{
			id: "1",
			link: "/",
			image: "img/content/service-picture-1.jpg",
			title: "Кадастровые работы в&nbsp;отношении земельных участков",
		},
		{
			id: "2",
			link: "/",
			image: "img/content/service-picture-2.jpg",
			title: "Кадастровые работы <br> в&nbsp;отношении земельных участков",
		},
		{
			id: "3",
			link: "/",
			image: "img/content/service-picture-3.jpg",
			title: "Кадастровые работы <br> в&nbsp;отношении земельных участков",
		},
		{
			id: "4",
			link: "/",
			image: "img/content/service-picture-4.jpg",
			title: "Кадастровые работы <br> в&nbsp;отношении земельных участков",
		},
		{
			id: "5",
			link: "/",
			image: "img/content/service-picture-5.jpg",
			title: "Кадастровые работы <br> в&nbsp;отношении земельных участков",
		},
		{
			id: "6",
			link: "/",
			image: "img/content/service-picture-6.jpg",
			title: "Кадастровые работы <br> в&nbsp;отношении земельных участков",
		},
		{
			id: "7",
			link: "/",
			image: "img/content/service-picture-6.jpg",
			title: "Кадастровые работы <br> в&nbsp;отношении земельных участков",
		},
		{
			id: "8",
			link: "/",
			image: "img/content/service-picture-6.jpg",
			title: "Кадастровые работы <br> в&nbsp;отношении земельных участков",
		},
	],
};

const mutations = {
	SET_SERVICES: (state, services) => {
		state.services = services;
	},
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
};

const getters = {
	SERVICES: (state) => state.products,
};


export default {
	state,
	getters,
	actions,
	mutations
}
