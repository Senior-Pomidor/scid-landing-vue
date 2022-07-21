<template>
	<footer class="l-footer">
		<div class="l-footer__container container">
			<div class="l-footer__links">
				<div class="l-footer__links-row">
					<div class="l-footer__links-col">
						<h4 class="l-footer__links-title">
							Для связи
						</h4>
						<ul class="l-footer__links-list">
							<li class="l-footer__links-item">
								<a href="tel:+7 (926) 126-64-57" class="l-footer__link">
									<i class="social social--watsapp"></i>
									7 (926) 126-64-57
								</a>
							</li>
							<li class="l-footer__links-item">
								<a href="tel:+7 (926) 126-64-57" class="l-footer__link">
									<i class="social social--mail"></i>
									7 (926) 126-64-57
								</a>
							</li>
							<li class="l-footer__links-item">
								<a href="tel:+7 (926) 126-64-57" class="l-footer__link">
									<i class="social social--telegram"></i>
									7 (926) 126-64-57
								</a>
							</li>
						</ul>
					</div>
					
					<div class="l-footer__links-col">
						<h4 class="l-footer__links-title">
							Компания
						</h4>
						<ul class="l-footer__links-list">
							<li class="l-footer__links-item">
								<router-link to="/" class="l-footer__link">Услуги</router-link>
							</li>
							<li>
								<router-link to="/">Кейсы</router-link>
							</li>
							<li>
								<router-link to="/">Контакты</router-link>
							</li>
							<li>
								<router-link to="/">Сотрудничество</router-link>
							</li>
						</ul>
					</div>
					
					<div class="l-footer__links-col">
						<h4 class="l-footer__links-title">
							Документы
						</h4>
						<ul class="l-footer__links-list">
							<li class="l-footer__links-item">
								<a href="/">Политика <br> конфиденциальности</a>
							</li>
							<li>
								<a href="/">Пользовательское <br> соглашение</a>
							</li>
						</ul>
					</div>
					
					<div class="l-footer__links-col">
						<h4 class="l-footer__links-title">
							Будьте в курсе
						</h4>
						
						<ul class="l-footer__socials">
							<li class="l-footer__socials-item">
								<a href="" class="l-footer__social-link">
									<i class="social social--instagram"></i>
								</a>
							</li>
							<li class="l-footer__socials-item">
								<a href="" class="l-footer__social-link">
									<i class="social social--vk"></i>
								</a>
							</li>
							<li class="l-footer__socials-item">
								<a href="" class="l-footer__social-link social">
									<i class="social social--facebook"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
			<Copyright class="l-footer__copyright" :info="{year: '2005', owner: 'chel'}"></Copyright>
		</div>
	</footer>
</template>

<script>
	import Copyright from '@/components/Copyright.vue';
	
	export default {
		name: 'l-header',
		components: {
			Copyright
		}
	}
</script>

<style lang="scss">
	$l-footer-bg-color: $color-accent;
	
	.l-footer {
		background-color: $l-footer-bg-color;
		
		.social {
			&::before {
				background-color: rgba(255, 255, 255, 0.1);
			}
		}
	}
	
	.l-footer__socials-item {
		margin-right: 1rem;
	}
	
	// .social {
	// 	display: inline-block;
	// 	@include webfont-icon($webfont-icon--watsapp);
		
	// 	&::before {
	// 		display: inline-flex;
	// 		align-items: center;
	// 		justify-content: center;
	// 		width: 2rem;
	// 		height: 2rem;
	// 		color: $color-white;
	// 		background-color: $color-accent;
	// 		border-radius: 50%;
	// 		margin-right: .5rem;
	// 	}
	// }
</style>