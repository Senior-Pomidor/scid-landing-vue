<template>
  <div id="app">
		<!-- общий компонент. в зав-ти от условия :is="" вместо него будет стоять дргуой компонент -->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style lang="scss">

</style>

<script>
	import MainLayout from '@/layouts/MainLayout.vue'
	
	export default {
		components: {
			MainLayout
		},
		computed: {
			layout() {
				//возвращает название нужного компонента лэйаута
				return (this.$route.meta.layout || 'main') + '-layout'
			}
		}
	}
</script>

<style lang="scss">
	// флексбокс сетка http://flexboxgrid.com/
	@import '~flexboxgrid/dist/flexboxgrid.min.css';
	
	//fonts
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

	@font-face {
		font-family: 'webfont';
		src: url('./assets/fonts/webfont/webfont.eot');
		src: url('./assets/fonts/webfont/webfont.eot#iefix') format('embedded-opentype'),
			url('./assets/fonts/webfont/webfont.ttf') format('truetype'),
			url('./assets/fonts/webfont/webfont.woff') format('woff'),
			url('./assets/fonts/webfont/webfont.svg#webfont') format('svg');
		font-weight: normal;
		font-style: normal;
		font-display: block;
	}
	
	// общие стили
	@import '@/styles/main.scss';
</style>
