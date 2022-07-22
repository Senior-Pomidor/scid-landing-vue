<template>
	<swiper
		:slides-per-view="1"
		:loop="true"
		:speed="1500"
		:autoplay="{ delay: 5000 }"
		:initialSlide="1"
		:pagination="{ clickable: true, el: '.b-slider__pagination', bulletClass: 'b-slider__pagination-bullet', bulletActiveClass: 'b-slider__pagination-bullet--active' }"
		class="b-slider"
	>
		<swiper-slide v-for="slide in slides" :key="slide.id">
			<div :style="{backgroundImage: `url(${slide.img})`}" class="b-slider__slide">
				<div class="container b-slider__container">
					<p class="b-slider__text" v-html="slide.text"></p>
				</div>
			</div>
		</swiper-slide>
		
		<div class="container">
			<div class="b-slider__pagination"></div>
		</div>
	</swiper>
</template>

<script>
	import { Pagination, Autoplay } from 'swiper'
	import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
	
	import 'swiper/swiper-bundle.css'
	
	SwiperCore.use([Pagination, Autoplay])
	
	export default {
		name: 'b-slider',
		components: {
			Swiper,
			SwiperSlide,
		},
		props: {
			slides: {
				type: Array,
				required: true,
				default: [
					{id: 1, text: 'Первый слайд <span class="b-slider__text-accent">для замены</span>', img: '/img/content/slides/slide-1.jpg'},
					{id: 2, text: 'Второй слайд <span class="b-slider__text-accent">для замены</span>', img: '/img/content/slides/slide-1.jpg'}
				]
			}
		},
		data() {
			return {
				styleObject: {
					color: 'red',
					fontSize: '13px'
				}
			}
		},
		methods: {
			// 
		}
	}
</script>

<style lang="scss">
	$bullet-bg-color: $color-light-grey;
	$bullet-bg-color--active: $color-accent;
	
	.b-slider {
		width: 100%;
		// max-width: 1440px;
		
		&__slide {
			min-height: 672px;
			min-width: 100%;
			width: 100%;
			background-repeat: no-repeat;
			background-size: cover;
		}
		
		&__pagination {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 1.5rem 0;
			
			&-bullet {
				display: inline-block;
				width: .625rem;
				height: .625rem;
				background-color: $bullet-bg-color;
				border-radius: 50%;
				z-index: 1;
				cursor: pointer;
				
				&--active {
					width: 1.5rem;
					height: 1.5rem;
					position: relative;
					background-color: transparent;
					border: 1px solid $bullet-bg-color--active;
					
					&::before {
						position: absolute;
						top: 50%;
						left: 50%;
						display: block;
						width: .625rem;
						height: .625rem;
						content: "";
						border-radius: 50%;
						background-color: $bullet-bg-color--active;
						transform: translate(-50%, -50%);
						z-index: 0;
					}
				}
			}
			
			&-bullet + &-bullet {
				margin-left: 1.125rem;
			}
		}
	}
</style>
