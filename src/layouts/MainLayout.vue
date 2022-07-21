<template>
	<div>
		<l-header />
			<main>
				<h2>
					Main
				</h2>
				<router-view />
			</main>
		<l-footer />
	</div>
</template>

<script>
	import lHeader from '@/components/layout/l-header.vue';
	import lFooter from '@/components/layout/l-footer.vue';
	
	export default {
		name: 'main-layout',
		components: {
			lHeader,
			lFooter
		}
	}
</script>