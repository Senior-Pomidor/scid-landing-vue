<template>
	<Home></Home>
</template>

<script>
import Home from './Home';
import {mapActions} from 'vuex';

export default {
	components: {
		Home
	},
	methods: {
		...mapActions(['FETCH_SERVICES'])
	},
	mounted() {
		this.FETCH_SERVICES();
	}
}
</script>