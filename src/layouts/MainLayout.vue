<template>
	<div>
		<Header />
			<main>
				<h2>
					Main
				</h2>
				<router-view />
			</main>
		<Footer />
	</div>
</template>

<script>
	import Header from '@/components/layout/l-Header.vue';
	import Footer from '@/components/layout/l-Footer.vue';
	
	export default {
		name: 'main-layout',
		components: {
			Header,
			Footer
		}
	}
</script>