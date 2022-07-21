<template>
	<div class="copyright">
		Copyright &copy; {{ info.year }} {{ info.owner }}
	</div>
</template>

<script>
	export default {
		name: 'copyright',
		props: {
			info: {
				type: Object,
			}
		}
	}
</script>

<style lang="scss">
	
</style>