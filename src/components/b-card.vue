<template>
	<article class="b-card">
		<router-link to="/" class="b-card__link">
			<div class="b-card__img-wrapper">
				<img src="/img/content/unsplash_688Fna1pwOQ.jpg" alt="" class="b-card__img">
			</div>
			
			<p class="b-card__info">
				Кадастровые работы в отношении земельных участков
			</p>
		</router-link>
	</article>
</template>

<script>

</script>

<style lang="scss">
	$card-text-color: $body-color;
	$card-text-color--hover: $color-red;
	$card-text-color--active: $color-accent;
	
	$card-img-wh-relations: 1.36;
	
	.b-card {
		// display: block;
		color: $card-text-color;
		border-radius: 20px;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
		
		&__link {
			display: block;
			padding: 1.5rem;
			color: inherit;
			
			&:hover {
				color: $card-text-color--hover;
			}
			
			&:active {
				color: $card-text-color--active;
			}
		}
		
		&__img-wrapper {
			position: relative;
			border-radius: 8px;
			margin-bottom: 1rem;
			padding-top: calc(100% / $card-img-wh-relations);
			overflow: hidden;
		}
		
		&__img {
			position: absolute;
			top: 0;
			left: 0;
			display: inline-block;
			width: 100%;
			height: 100%;
			max-width: 100%;
			object-fit: cover;
		}
		
		&__info {
			color: inherit;
			margin-bottom: 0;
		}
	}
</style>