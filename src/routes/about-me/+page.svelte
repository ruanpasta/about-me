<script>
	import { Card } from '$lib/components'
	import Gradient from '$lib/components/common/Gradient.svelte'
	import { t } from '$lib/translations'

	const resume = $t('common.mock.aboutMe.resume')

	// let fragmentedResume = resume.split('.')
</script>

<Card title={$t('common.menu.aboutMe')}>
	<div class="about-me-image">
		<Gradient
			class="about-me-image--rounded"
			position="all"
			rounded
		>
			<figure>
				<img
					src="/images/ruanpasta.jpg"
					alt="Foto de Ruan Pasta"
					data-testid="about-me-image"
				/>
			</figure>
		</Gradient>
	</div>

	<!-- {#each fragmentedResume as text} -->
	<!-- 	<p class="about-me-resume"> -->
	<!-- 		{text} -->
	<!-- 	</p> -->
	<!-- {/each} -->
  <p class="about-me-resume">
    {resume}
  </p>
</Card>

<style lang="scss">
	:global {
		.about-me-image {
			@apply flex justify-center mb-4;

			&--rounded {
				@apply w-40;
			}

			img {
				@apply rounded-full;
			}
		}
	}

	.about-me-resume {
		@apply mx-10 mb-4 whitespace-pre-line;
	}
</style>
