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
							<a href="tel:+7 (926) 126-64-57" class="l-footer__link l-footer__link--contact">
								<span class="nobr"><i class="social social--watsapp"></i>7 (926) 126-64-57</span>
							</a>
						</li>
						<li class="l-footer__list-item">
							<a href="tel:+7 (926) 126-64-57" class="l-footer__link l-footer__link--contact">
								<span class="nobr"><i class="social social--mail"></i>7 (926) 126-64-57</span>
							</a>
						</li>
						<li class="l-footer__list-item">
							<a href="tel:+7 (926) 126-64-57" class="l-footer__link l-footer__link--contact">
								<span class="nobr"><i class="social social--telegram"></i>7 (926) 126-64-57</span>
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
							<a href="files/documents/privacy-policy.pdf" class="l-footer__link" target="_blank">Политика <br> конфиденциальности</a>
						</li>
						<li class="l-footer__list-item">
							<a href="files/documents/user-agreement.pdf" class="l-footer__link" target="_blank">Пользовательское <br> соглашение</a>
						</li>
					</ul>
				</div>

				<div class="l-footer__links-col">
					<h4 class="l-footer__list-title">
						Будьте в курсе
					</h4>
					
					<form class="l-footer__form" @submit.prevent="sendMail()">
						<fieldset class="l-footer__fieldset">
							<input type="email" placeholder="E ‒ mail" class="l-footer__input" v-model.trim="email" ref="input-email">
							<button type="submit" class="l-footer__submit-btn" title="Отправить"></button>
						</fieldset>
					</form>

					<ul class="l-footer__socials">
						<li class="l-footer__socials-item">
							<a href="https://vk.com/scidru" class="l-footer__link l-footer__social-link" target="_blank">
								<i class="social social--instagram"></i>
							</a>
						</li>
						<li class="l-footer__socials-item">
							<a href="https://vk.com/scidru" class="l-footer__link l-footer__social-link" target="_blank">
								<i class="social social--vk"></i>
							</a>
						</li>
						<li class="l-footer__socials-item">
							<a href="https://vk.com/scidru" class="l-footer__link l-footer__social-link" target="_blank">
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
	},
	data() {
		return {
			email: ''
		}
	},
	methods: {
		sendMail() {
			let message = this.email
											? `Спасибо за подписку!\n Вы будете получать новости на почту ${this.email}.`
											: `Пожалуйста введите email`
											
			// POST запрос с отправкой email
			
			alert(message);
			this.email = '';
			this.$refs['input-email'].blur(); //снятие фокуса с инпута
		}
	}
}
</script>

<style lang="scss">
$l-footer-bg-color: $color-accent;
$l-footer-text-color: $color-white;
$l-footer-logo-bg-color: $color-green-shadow;
$l-footer-input-bg: rgba(255, 255, 255, 0.2);

$l-footer-social-bg: rgba(255, 255, 255, 0.1);
$l-footer-social-bg--hover: rgba(255, 255, 255, 0.2);

$l-footer-link-color--hover: $body-color;

.l-footer {
	--logo-wrapper-width: 195px;
	
	padding: 3.75rem 0 1rem;
	background-color: $l-footer-bg-color;

	* {
		color: $l-footer-text-color;
	}
	
	.social {
		color: inherit;
		
		&::before {
			color: inherit;
			background-color: $l-footer-social-bg;
		}
		
		@include hover(){
			&::before {
				color: $l-footer-link-color--hover;
				background: $l-footer-social-bg--hover;
			}
		}
	}

	&__container,
	&__links {
		display: flex;
	}

	&__container {
		flex-wrap: wrap;
	}
	
	&__logo-wrapper {
		flex-basis: var(--logo-wrapper-width);
		width: var(--logo-wrapper-width);
		margin-bottom: 2rem;
	}
	
	&__logo {
		width: 6.75rem;
		height: 9.625rem;
		background-color: $l-footer-logo-bg-color;
		border-radius: 16px;
		margin-right: 2rem;
	}

	&__links {
		flex-basis: calc(100% - var(--logo-wrapper-width));
		width: calc(100% - var(--logo-wrapper-width));
		flex-grow: 1;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 2.25rem;
	}
	
	&__links-col {
		box-sizing: border-box;
		margin-bottom: 1.5rem;
	}
	
	&__link {
		transition: color $transition-duration-base ease, background-color $transition-duration-base ease;
		-webkit-transition: color $transition-duration-base ease, background-color $transition-duration-base ease;
		-moz-transition: color $transition-duration-base ease, background-color $transition-duration-base ease;
		-ms-transition: color $transition-duration-base ease, background-color $transition-duration-base ease;
		-o-transition: color $transition-duration-base ease, background-color $transition-duration-base ease;
		

		
		* {
			color: inherit;
		}
		
		&--contact {
			font-size: .875rem;
			line-height: 1.35;
			
			.social {
				font-size: 1rem;
			}
		}
		
		
		@include hover() {
			color: $l-footer-link-color--hover;
			
			.social::before {
				background-color: $l-footer-social-bg--hover;
			}
		}
	}

	&__list-title {
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.5;
		margin-bottom: 1.5rem;
	}
	
	&__list-item {
		.social::before {
			margin-right: .5rem;
			margin-bottom: 4px;
		}
	}
	
	&__list-item + &__list-item {
		margin-top: .875rem;
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
		font-size: .875rem;
		line-height: 1.7;
		background-color: $l-footer-input-bg;
		margin: 0;
		padding: .5rem .75rem;
		padding-right: calc(1rem + .75rem);
		border: none;
		border-radius: 8px;
		box-sizing: border-box;
		transition: box-shadow $transition-duration-base ease;
		-webkit-transition: box-shadow $transition-duration-base ease;
		-moz-transition: box-shadow $transition-duration-base ease;
		-ms-transition: box-shadow $transition-duration-base ease;
		-o-transition: box-shadow $transition-duration-base ease;
		
		@include webfont-icon($webfont-icon--send);
		
		&::placeholder {
			color: $l-footer-text-color;
		}
		
		&:focus,
		&:active,
		&:hover {
			border: none;
			outline: none;
			outline-offset: 0;
		}
		
		@include hover() {
			box-shadow: 0px 0px 4px 0px #ffffff;
		}
		
		&:focus {
			box-shadow: 0px 0px 4px 0px #ffffff;
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
		transition: color $transition-duration-base ease;
		-webkit-transition: color $transition-duration-base ease;
		-moz-transition: color $transition-duration-base ease;
		-ms-transition: color $transition-duration-base ease;
		-o-transition: color $transition-duration-base ease;
		
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
		
		@include hover() {
			color: $l-footer-link-color--hover;
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
	
	@include breakpoint($breakpoint-md) {
		--logo-wrapper-width: 150px;
		
		&__list-title {
			font-size: 1.15rem;
		}
		
		&__link {
			font-size: 0.875rem;
		}
	}
	
	@include breakpoint($breakpoint-sm) {
		padding: 2.5rem 0 .5rem;
		
		&__links {
			margin-bottom: 1rem;
		}
		
		&__links-col {
			flex-basis: initial;
		}
		
		&__list-item + &__list-item {
			margin-top: .5rem;
		}
	}
	
	@include breakpoint($breakpoint-xs) {
		padding-top: 1.5rem 0 .5rem;
		
		&__links {
			flex-basis: 100%;
			width: 100%;
		}
		
		&__links-col:nth-child(odd) {
			padding-right: .5rem;
			// flex-basis: 100%;
		}
		
		&__list-title {
			margin-bottom: .75rem;
		}
		
		&__form {
			width: 100%;
			flex-basis: 100%;
			max-width: 400px;
		}
	}
	
	@include breakpoint(415px) {
		&__links-col:last-child {
			flex-basis: 100%;
		}
	}
}
</style>
