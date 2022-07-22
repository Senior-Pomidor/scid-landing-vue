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
	.copyright {
		display: inline-block;
		font-family: Inter, sans-serif;
		font-size: .875rem;
		line-height: 1.7;
		padding: 0.625rem;
	}
</style>
