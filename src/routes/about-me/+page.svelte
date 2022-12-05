<script>
	import { classMap } from '$/helpers/classMap'
	import { isMobile } from '$/lib/stores/common'
	import { Card } from '$lib/components'
	import Gradient from '$lib/components/common/Gradient.svelte'
	import { t } from '$lib/translations'

	const resume = $t('common.mock.aboutMe.resume')
</script>

<Card title={$t('common.menu.aboutMe')}>
	<div class="about-me-image">
		<Gradient class="about-me-image--rounded" position="all" rounded>
			<figure>
				<img
					src="/images/ruanpasta.jpg"
					alt="Foto de Ruan Pasta"
					data-testid="about-me-image"
				/>
			</figure>
		</Gradient>
	</div>

	<p
		class={classMap({
			'about-me-resume': true,
			'about-me-resume--mobile': $isMobile
		})}
	>
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
		@apply overflow-auto max-h-[450px];

		&--mobile {
			@apply max-h-[500px];
		}
	}
</style>
