<template>
	<article class="b-card">
		<router-link to="/" class="b-card__link">
			<div class="b-card__img-wrapper">
				<img :src="info.image" alt="Услуга" class="b-card__img">
			</div>
			
			<p class="b-card__desc" v-html="info.title"></p>
		</router-link>
	</article>
</template>

<script>
	export default {
		name: 'b-card',
		props: {
			info: {
				type: Object,
				required: true,
				default: () => ({
					// link: '/',
					image: '/img/content/card-picture-plug.jpg',
					title: 'Описание услуги'
				})
			}
		}
	}
</script>

<style lang="scss">
	$card-text-color: $body-color;
	$card-text-color--hover: $color-accent;
	// $card-text-color--active: $color-accent;
	
	$card-img-wh-relations: 1.36;
	
	.b-card {
		// display: block;
		color: $card-text-color;
		border-radius: 20px;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
		
		&__link {
			display: block;
			padding: 1.5rem;
			color: inherit;
			transition: color $transition-duration-base ease, transform $transition-duration-base ease;
			-webkit-transition: color $transition-duration-base ease, transform $transition-duration-base ease;
			-moz-transition: color $transition-duration-base ease, transform $transition-duration-base ease;
			-ms-transition: color $transition-duration-base ease, transform $transition-duration-base ease;
			-o-transition: color $transition-duration-base ease, transform $transition-duration-base ease;
			
			@include hover() {
				color: $card-text-color--hover;
			}
		}
		
		&__img-wrapper {
			position: relative;
			border-radius: 8px;
			margin-bottom: 1rem;
			padding-top: calc(100% / $card-img-wh-relations);
			overflow: hidden;
		}
		
		&__img {
			position: absolute;
			top: 0;
			left: 0;
			display: inline-block;
			width: 100%;
			height: 100%;
			max-width: 100%;
			object-fit: contain;
		}
		
		&__desc {
			font-size: 1.25rem;
			font-weight: 600;
			left: 1.3;
			color: inherit;
			margin-bottom: 0;
		}
		
		@include breakpoint($breakpoint-md) {
			&__desc {
				font-size: 1.125rem;
			}
		}
	}
</style>
