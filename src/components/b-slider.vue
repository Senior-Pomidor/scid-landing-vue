<template>
		<!-- :autoplay="{ delay: 5000 }" -->
		<!-- allowTouchMove: false, -->
	<swiper
		:slides-per-view="1"
		:loop="true"
		:speed="1500"
		:allowTouchMove="false"
		:initialSlide="1"
		:pagination="{ clickable: true, el: '.b-slider__pagination', bulletClass: 'b-slider__pagination-bullet', bulletActiveClass: 'b-slider__pagination-bullet--active' }"
		class="b-slider"
	>
		<swiper-slide v-for="slide in slides" :key="slide.id">
			<div :style="{backgroundImage: `url(${slide.img})`}" class="b-slider__slide">
				<div class="container b-slider__container">
					<h2 class="b-slider__text" v-html="slide.text"></h2>
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
	$slider-text-color--accent: $color-accent;
	
	.b-slider {
		width: 100%;
		// max-width: 1440px;
		
		&__text {
			width: 100%;
			max-width: 794px;
			font-size: 4rem;
			font-weight: 600;
			line-height: 1.36;
			margin: 0;
			
			&--accent {
				color: $slider-text-color--accent;
			}
		}
		
		&__slide {
			min-width: 100%;
			width: 100%;
			height: 672px;
			background-repeat: no-repeat;
			background-size: cover;
		}
		
		&__container {
			height: 100%;
			display: flex;
			align-items: center;
		}
		
		&__pagination {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1.5rem;
			
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
		
		
		@include breakpoint($breakpoint-md) {
			&__slide {
				height: 524px;
			}
		}
		
		@include breakpoint($breakpoint-xs) {
			&__slide {
				height: 50vh;
			}
			
			&__pagination {
				// display: none;
			}
		}
	}
</style>
