import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
		meta: { layout: "main" },
	},
	{
		path: "/services",
		name: "Services",
		component: () => import("../views/Services.vue"),
		meta: { layout: "main" },
	},
	{
		path: "/redirect",
		redirect: "/",
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
	
export default router;
