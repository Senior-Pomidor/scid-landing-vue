<template>
	<div id="app-content">
		<l-header />
			<main class="l-page">
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

<style lang="scss">
	#app-content {
		display: flex;
		flex-wrap: wrap;
		min-height: 100vh;
		
		header,
		main,
		footer {
			width: 100%;
		}
		
		footer {
			align-self: flex-end;
		}
	}
</style>
