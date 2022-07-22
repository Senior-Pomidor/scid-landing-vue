<template>
	<swiper
		:slides-per-view="1"
		:loop="true"
		:pagination="{ clickable: true, el: '.b-slider__pagination' }"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
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
	import { Pagination } from 'swiper'
	import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
	
	import 'swiper/swiper-bundle.css'
	
	SwiperCore.use([Pagination])
	
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
			onSwiper (swiper) {
				console.log(swiper)
			},
			onSlideChange () {
				console.log('slide change')
			}
		}
	}
</script>

<style lang="scss">
	.b-slider {
		width: 100%;
		// max-width: 1440px;
		
		&__slide {
			min-height: 672px;
			min-width: 100%;
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
</style>
