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
						<b-card class="services__grid-item" v-for="(service, index) in SERVICES" :key="service.id" :info="service" v-if="index < maxServices || isShow"></b-card>
					</div>
					
					<button class="services__btn btn btn--accent" v-if="!isShow" v-on:click="isShow = !isShow">
						Все услуги
					</button>
				</div>
			</div>
		</section>
	</article>
</template>
	
<script>
import bCard from '@/components/b-card.vue';
import bSlider from '@/components/b-slider.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
	name: 'home',
	components: {
		 bCard,
		 bSlider
	},
	data() {
		return {
			isShow: false,
			maxServices: 6,
			slides: [
				{id: 1, text: 'Lorem ipsum dolor sit amet, <span class="b-slider__text--accent">consectetur adipiscing elit</span>', img: 'img/content/slides/slide-1.jpg'},
				{id: 2, text: 'Lorem ipsum dolor sit amet, <span class="b-slider__text--accent">consectetur adipiscing elit</span>', img: 'img/content/slides/slide-1.jpg'},
				{id: 3, text: 'Lorem ipsum dolor sit amet, <span class="b-slider__text--accent">consectetur adipiscing elit</span>', img: 'img/content/slides/slide-1.jpg'},
				{id: 4, text: 'Lorem ipsum dolor sit amet, <span class="b-slider__text--accent">consectetur adipiscing elit</span>', img: 'img/content/slides/slide-1.jpg'}
			],
		}
	},
	computed: {
		...mapGetters(['SERVICES']),
	},
	methods: {
		...mapActions(['FETCH_SERVICES_MOCKUP'])
	},
	beforeMount() {
		this.FETCH_SERVICES_MOCKUP();
	}
}
</script>

<style lang="scss">
	.services {
		--grid-columns: 3;
		--grid-column-gap: 1.5rem;
		--grid-row-gap: 2rem;
		
		padding-bottom: 4rem;
		
		&__container {
			display: flex;
			flex-direction: column;
		}
		
		&__grid {
			display: grid;
			grid-template-columns: repeat(var(--grid-columns), 1fr);
			grid-column-gap: var(--grid-column-gap);
			grid-row-gap: var(--grid-row-gap);
		}
		
		&__grid-item {
			min-width: 0;
		}
		
		&__btn {
			align-self: center;
			margin-top: 2rem;
		}
		
		@include breakpoint($breakpoint-md) {
			--grid-column-gap: 1rem;
			--grid-row-gap: 1.5rem;
			
			padding-bottom: 3rem;
		}
		
		@include breakpoint($breakpoint-sm) {
			--grid-columns: 2;
			--grid-row-gap: 1rem;
			
		}
		
		@include breakpoint($breakpoint-xs) {
			--grid-columns: 1;
		}
	}
</style>
