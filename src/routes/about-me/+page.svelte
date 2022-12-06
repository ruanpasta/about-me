<script>
	import { classMap } from '$/helpers/classMap'
	import { isMobile } from '$/lib/stores/common'
	import { Card } from '$lib/components'
	import Gradient from '$lib/components/common/Gradient.svelte'
	import { t } from '$lib/translations'
</script>

<Card title={$t('common.menu.aboutMe')}>
	<div
		class={classMap({
			'about-me-content': true,
			'about-me-content--mobile': $isMobile
		})}
	>
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

		<p class="about-me-resume">
			{$t('common.mock.aboutMe.resume')}
		</p>
	</div>
</Card>

<style lang="scss" global>
	.about-me-content {
		@apply overflow-auto max-h-[500px];

		&--mobile {
			@apply max-h-[530px];
		}
	}

	.about-me-image {
		@apply flex justify-center mb-4;

		&--rounded {
			@apply w-40;
		}

		img {
			@apply rounded-full;
		}
	}

	.about-me-resume {
		@apply mx-10 mb-4 whitespace-pre-line;
	}
</style>
