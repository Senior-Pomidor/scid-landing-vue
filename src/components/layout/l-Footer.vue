<template>
	<footer class="l-footer">
		<div class="l-footer__container container">
			<div class="l-footer__logo-wrapper">
				<div class="l-footer__logo">

				</div>
			</div>
			<div class="l-footer__links">
				<div class="l-footer__links-col">
					<h4 class="l-footer__list-title">
						Для связи
					</h4>
					<ul class="l-footer__list">
						<li class="l-footer__list-item">
							<a href="tel:+7 (926) 126-64-57" class="l-footer__link">
								<i class="social social--watsapp"></i>7 (926) 126-64-57
							</a>
						</li>
						<li class="l-footer__list-item">
							<a href="tel:+7 (926) 126-64-57" class="l-footer__link">
								<i class="social social--mail"></i>7 (926) 126-64-57
							</a>
						</li>
						<li class="l-footer__list-item">
							<a href="tel:+7 (926) 126-64-57" class="l-footer__link">
								<i class="social social--telegram"></i>7 (926) 126-64-57
							</a>
						</li>
					</ul>
				</div>

				<div class="l-footer__links-col">
					<h4 class="l-footer__list-title">
						Компания
					</h4>
					<ul class="l-footer__list">
						<li class="l-footer__list-item">
							<router-link to="/" class="l-footer__link">Услуги</router-link>
						</li>
						<li class="l-footer__list-item">
							<router-link to="/" class="l-footer__link">Кейсы</router-link>
						</li>
						<li class="l-footer__list-item">
							<router-link to="/" class="l-footer__link">Контакты</router-link>
						</li>
						<li class="l-footer__list-item">
							<router-link to="/" class="l-footer__link">Сотрудничество</router-link>
						</li>
					</ul>
				</div>

				<div class="l-footer__links-col">
					<h4 class="l-footer__list-title">
						Документы
					</h4>
					<ul class="l-footer__list">
						<li class="l-footer__list-item">
							<a href="/">Политика <br> конфиденциальности</a>
						</li>
						<li>
							<a href="/">Пользовательское <br> соглашение</a>
						</li>
					</ul>
				</div>

				<div class="l-footer__links-col">
					<h4 class="l-footer__list-title">
						Будьте в курсе
					</h4>
					
					<form action="" class="l-footer__form">
						<fieldset class="l-footer__fieldset">
							<input type="email" placeholder="E ‒ mail" class="l-footer__input">
							<button type="submit" class="l-footer__submit-btn" title="Отправить"></button>
						</fieldset>
					</form>

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

			<div class="l-footer__copyright">
				<b-copyright :info="{ year: '2022', owner: 'SCID' }"></b-copyright>
			</div>
		</div>
	</footer>
</template>

<script>
import bCopyright from '@/components/b-copyright.vue';

export default {
	name: 'l-header',
	components: {
		bCopyright
	}
}
</script>

<style lang="scss">
$l-footer-bg-color: $color-accent;
$l-footer-text-color: $color-white;
$l-footer-logo-bg-color: $color-green-shadow;
$l-footer-input-bg: rgba(255, 255, 255, 0.1);

.l-footer {
	padding: 3.75rem 0 1rem;
	background-color: $l-footer-bg-color;

	* {
		color: $l-footer-text-color;
	}
	
	.social {
		color: inherit;
		
		&::before {
			color: inherit;
			background-color: rgba(255, 255, 255, 0.1);
		}
	}

	&__container,
	&__links {
		display: flex;
	}

	&__container {
		flex-wrap: wrap;
	}
	
	&__logo {
		width: 6.75rem;
		height: 9.625rem;
		background-color: $l-footer-logo-bg-color;
		border-radius: 16px;
		margin-right: 2rem;
	}
	
	&__logo-wrapper {
		width: calc(108px + 80px);
	}

	&__links {
		flex-grow: 1;
		justify-content: space-between;
	}

	&__list-title {
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.5;
		margin-bottom: 1.5rem;
	}
	
	&__list-item {
		margin-bottom: .875rem;
		
		.social::before {
			margin-right: .5rem;
			margin-bottom: 4px;
		}
	}
	
	&__form {
		margin-bottom: 3.125rem;
		width: 255px;
		flex-basis: 255px;
		max-width: 255px;
	}
	
	&__fieldset {
		position: relative;
    padding: 0;
    margin: 0;
    border: 0;
	}
	
	&__input {
		width: 100%;
		background-color: $l-footer-input-bg;
		margin: 0;
		padding: .5rem .75rem;
		padding-right: calc(1rem + .75rem);
		border: none;
		border-radius: 8px;
		box-sizing: border-box;
		
		@include webfont-icon($webfont-icon--send);
		
		&::placeholder {
			color: $l-footer-text-color;
			// line-height: ;
		}
		&:focus,
		&:active,
		&:hover {
			border: none;
			outline: none;
    	outline-offset: 0;
		}
	}
	
	&__submit-btn {
    position: absolute;
    top: 50%;
		width: 0;
		height: 0;
    right: 1rem;
		padding: 0;
		margin: 0;
		border: none;
		
		@include webfont-icon($webfont-icon--send);
		// transform: translateY(-50%);
		
		&::before {
			position: absolute;
			top: 0;
			left: 0;
			height: initial;
			
			font-size: 1rem;
			transform: translate(-50%, -50%);
			cursor: pointer;
		}
	}

	&__socials {
		display: flex;
	}
	
	&__socials-item + &__socials-item {
		margin-left: 1rem;
	}
	

	&__copyright {
		display: flex;
		justify-content: center;
		width: 100%;
	}
}

// .l-footer__socials-item {
// 	margin-right: 1rem;
// }

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