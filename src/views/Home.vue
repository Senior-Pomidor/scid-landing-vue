<template>
	<article class="home">
		<h1>
			Home
		</h1>
		
		<section class="section services">
			<div class="container">
				<div class="services__container">
					<h2 class="section__title">
						Наши услуги
					</h2>
					
					<div class="services__grid">
						<b-card class="services__grid-item"></b-card>
						<b-card class="services__grid-item"></b-card>
						<b-card class="services__grid-item"></b-card>
						<b-card class="services__grid-item"></b-card>
						<b-card class="services__grid-item"></b-card>
						<b-card class="services__grid-item"></b-card>
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
import bCard from '@/components/b-card.vue'

export default {
	 name: 'home',
	 
	 components: {
		 bCard
	 }
}
</script>

<style lang="scss">
	.services {
		--grid-columns: 3;
		
		
		padding-bottom: 2.5rem;
		
		&__container {
			display: flex;
			flex-direction: column;
		}
		
		&__grid {
			display: grid;
			grid-template-columns: repeat(var(--grid-columns), 1fr);
			grid-column-gap: 1.5rem;
			grid-row-gap: 2rem;
			margin-bottom: 2rem;
		}
		
		&__grid-item {
			min-width: 0;
		}
		
		&__btn {
			align-self: center;
		}
		
		@include breakpoint($breakpoint-sm) {
			--grid-columns: 2;
		}
		
		@include breakpoint($breakpoint-xs) {
			--grid-columns: 1;
		}
	}
</style>