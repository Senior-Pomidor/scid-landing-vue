<template>
	<nav class="b-nav">
		<ul class="b-nav__list">
			<li class="b-nav__item">
				<router-link to="/" class="b-nav__link">
					Кейсы
				</router-link>
			</li>
			<li class="b-nav__item">
				<router-link to="/" class="b-nav__link b-nav__link--accent">
					Бизнесу
				</router-link>
			</li>
			<li class="b-nav__item">
				<router-link to="/" class="b-nav__link">
					Услуги
				</router-link>
			</li>
			<li class="b-nav__item">
				<router-link to="/" class="b-nav__link">
					Контакты
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'b-nav'
	}
</script>

<style lang="scss">
	.b-nav__link--accent {
		// position: relative;
		@include webfont-icon($webfont-icon--facebook);
		
		
		// &::before {
		// 	// position: relative;
		// 	display: inline-block;
		// 	content: "content";
			
			
		// }
	}
</style>