<template>
	<header class="l-header">
		<div class="l-header-top">
			<div class="l-header__container container">
				<div class="l-header__logo">
					<img src="/img/icons/logo.svg" alt="SCID logo" class="l-header__logo-img"/>
				</div>
				
				<div class="l-header__nav" :class="{open: !isOpen}">
					<b-nav />
				
					<a href="#" class="l-header__call-btn btn">
						Заказать звонок
					</a>
				</div>
				
				<button class="l-header__nav-btn" @click="isOpen = !isOpen">
					<!-- <span class="namigazugtum"></span>. -->
				</button>
			</div>
		</div>
	</header>
</template>

<script>
	import bNav from '@/components/b-nav.vue';
	
	export default {
		name: 'l-header',
		components: {
			bNav
		},
		data: () => ({
			isOpen: true,
		}),
	}
</script>

<style lang="scss">
	$header-nav-bg: $color-white;
	$burger-border-color: $body-color;
	$burger-border-color--active: $link-color--hover;
	
	.l-header {
		position: fixed;
		width: 100%;
		
		&-top {
			position: relative;
			padding: 1.5rem 0;
			box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.07);
			box-sizing: border-box;
		}
		
		&__container {
			display: flex;
			justify-content: space-between;
		}
		
		&__nav {
			display: flex;
			align-items: baseline;
			background-color: $header-nav-bg;
			
			&.open {
				display: flex;
			}
		}
		
		&__nav-btn {
			display: none;
			position: relative;
			align-self: center;
			width: 2rem;
			height: 1.5rem;
			background: none;
			border: none;
			border-top: 4px solid $burger-border-color;
			border-bottom: 4px solid $burger-border-color;
			
			&::before {
				position: absolute;
				top: 50%;
				left: 0;
				display: block;
				width: 100%;
				height: 4px;
				border-top: 4px solid $burger-border-color;
				content: "";
				transform: translateY(-2px);
			}
			
			&:active,
			&:active::before {
				border-color: $burger-border-color--active;
			}
		}
		
		&__call-btn {
			margin-left: 2.5rem;
		}
		
		@include breakpoint($breakpoint-sm) {
			&-top {
				padding: .5rem 0;
				height: 60px;
			}
			
			&__container {
				height: 100%;
			}
			
			&__logo {
				&-img {
					display: inline-block;
					height: 100%;
				}
			}
			
			&__nav {
				display: none;
				position: absolute;
				top: 100%;
				left: 0;
				width: 100%;
				flex-direction: column;
				align-items: center;
				padding: 1rem 0 2rem;
				box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.03);
			}
			
			&__nav-btn {
				display: block;
			}
			
			&__call-btn {
				margin-top: .5rem;
				margin-left: 0;
			}
		}
	}
</style>