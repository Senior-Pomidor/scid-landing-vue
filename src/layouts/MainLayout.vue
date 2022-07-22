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
		},
		mounted() {
			setTimeout(() => {
				this.setMainPadding()
			}, 0)
		},
		methods: {
			setMainPadding: function() {
				const header = document.querySelector('.l-header');
				const page = document.querySelector('.l-page');
				
				page.style.paddingTop = header.clientHeight + 'px';
			}
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
		
		.l-page {
			@include breakpoint($breakpoint-sm) {
				padding-top: 60px !important;
			}
		}
	}
</style>
