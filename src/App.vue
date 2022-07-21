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
	@import '@/styles/main.scss';
</style>
