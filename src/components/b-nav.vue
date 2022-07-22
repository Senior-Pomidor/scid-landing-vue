<template>
	<nav class="b-nav">
		<ul class="b-nav__list">
			<li class="b-nav__item">
				<router-link to="/" class="b-nav__link">Кейсы</router-link>
			</li>
			<li class="b-nav__item">
				<router-link to="/" class="b-nav__link b-nav__link--accent">Бизнесу</router-link>
			</li>
			<li class="b-nav__item">
				<router-link to="/" class="b-nav__link">Услуги</router-link>
			</li>
			<li class="b-nav__item">
				<router-link to="/" class="b-nav__link">Контакты</router-link>
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
	// $link-color: $body-color;
	// $link-color--hover: $color-red;
	// $link-color--active: $color-red;
	
	.b-nav {
		&__list {
			display: flex;
		}
		
		&__item:not(:first-child) {
			margin-left: 3rem;
		}
		
		&__link {
			color: $link-color;
			text-transform: uppercase;
			box-sizing: border-box;
			transition: color .1s ease;
			
			&--accent {
				@include webfont-icon($webfont-icon--star);
		
				&::before {
					width: 0.875rem;
					color: $color-accent;
					margin-right: 7px;
					font-size: 0.875rem;
				}
			}
			
			&:hover {
				color: $link-color--hover;
			}
			
			&:active {
				color: $link-color--active;
			}
		}
		
		@include breakpoint($breakpoint-sm) {
			flex-direction: column;
			width: 100%;
			
			&__list {
				flex-direction: column;
				align-items: center;
				width: 100%;
			}
			
			&__item {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				padding: .5rem $container-padding;
				margin: 0 !important;
				background-color: $color-white;
			}
			
			&__link {
				position: relative;
				
				&--accent {
					&::before {
						position: absolute;
						top: 50%;
						right: 100%;
						width: 0.875rem;
						transform: translateY(-50%);
					}
				}
			}
		}
	}
</style>