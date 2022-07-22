<template>
	<article class="home">
		<h1 class="hidden">Главный заголовок</h1>
		<section class="section">
			<h2 class="hidden">Заголовок секции со слайдером</h2>
			<b-slider :slides="slides"></b-slider>
		</section>
		
		<section class="section services">
			<div class="container">
				<div class="services__container">
					<h2 class="section__title">
						Наши услуги
					</h2>
					
					<div class="services__grid">
						<b-card class="services__grid-item" v-for="service in services" :key="service.id" :info="service"></b-card>
					</div>
					
					<router-link to="/" class="services__btn btn btn--accent">
						Все услуги
					</router-link>
				</div>
			</div>
		</section>
	</article>
</template>
	
<script>
import bCard from '@/components/b-card.vue';
import bSlider from '@/components/b-slider.vue'

export default {
	 name: 'home',
	 components: {
		 bCard,
		 bSlider
	 },
	 data() {
		return {
			services: [
				{
					id: '1',
					link: '/',
					img: '/img/content/service-picture-1.jpg',
					desc: 'Кадастровые работы в&nbsp;отношении земельных участков'
				}, {
					id: '2',
					link: '/',
					img: '/img/content/service-picture-2.jpg',
					desc: 'Кадастровые работы <br> в&nbsp;отношении земельных участков'
				}, {
					id: '3',
					link: '/',
					img: '/img/content/service-picture-3.jpg',
					desc: 'Кадастровые работы <br> в&nbsp;отношении земельных участков'
				}, {
					id: '4',
					link: '/',
					img: '/img/content/service-picture-4.jpg',
					desc: 'Кадастровые работы <br> в&nbsp;отношении земельных участков'
				}, {
					id: '5',
					link: '/',
					img: '/img/content/service-picture-5.jpg',
					desc: 'Кадастровые работы <br> в&nbsp;отношении земельных участков'
				}, {
					id: '6',
					link: '/',
					img: '/img/content/service-picture-6.jpg',
					desc: 'Кадастровые работы <br> в&nbsp;отношении земельных участков'
				}
			],
			slides: [
				{id: 1, text: 'Lorem ipsum dolor sit amet, <span class="b-slider__text--accent">consectetur adipiscing elit</span>', img: '/img/content/slides/slide-1.jpg'},
				{id: 2, text: 'Lorem ipsum dolor sit amet, <span class="b-slider__text--accent">consectetur adipiscing elit</span>', img: '/img/content/slides/slide-1.jpg'},
				{id: 3, text: 'Lorem ipsum dolor sit amet, <span class="b-slider__text--accent">consectetur adipiscing elit</span>', img: '/img/content/slides/slide-1.jpg'},
				{id: 4, text: 'Lorem ipsum dolor sit amet, <span class="b-slider__text--accent">consectetur adipiscing elit</span>', img: '/img/content/slides/slide-1.jpg'}
			],
		}
	 }
}
</script>

<style lang="scss">
	.home {
		// 
	}
	.services {
		--grid-columns: 3;
		--grid-column-gap: 1.5rem;
		--grid-row-gap: 2rem;
		
		
		padding-bottom: 2.5rem;
		
		&__container {
			display: flex;
			flex-direction: column;
		}
		
		&__grid {
			display: grid;
			grid-template-columns: repeat(var(--grid-columns), 1fr);
			grid-column-gap: var(--grid-column-gap);
			grid-row-gap: var(--grid-row-gap);
			margin-bottom: 2rem;
		}
		
		&__grid-item {
			min-width: 0;
		}
		
		&__btn {
			align-self: center;
		}
		
		@include breakpoint($breakpoint-md) {
			--grid-column-gap: 1rem;
			--grid-row-gap: 1.5rem;
		}
		
		@include breakpoint($breakpoint-sm) {
			--grid-columns: 2;
			// --grid-column-gap: .5rem;
			--grid-row-gap: 1rem;
		}
		
		@include breakpoint($breakpoint-xs) {
			--grid-columns: 1;
		}
	}
</style>