<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import Card from '$lib/components/card/Card.svelte'
	import type { PageData } from './$types'
	import { t } from '$lib/translations'
  import { isMobile } from '$/lib/stores/common'

	export let data: PageData

	$: description = data?.description || ''
	$: technologies = data?.technologies || []
</script>

<Card title={$t('common.menu.skills')}>
	<div
		class={classMap({
			'skills-content': true,
			'skills-content--mobile': $isMobile
		})}
	>
		<p data-testid="skills-card-description">
			{$t(description)}
		</p>
		<div class="skills">
			<div class="skills__technologies">
				{#each technologies as technology}
					<span
						class={classMap({
							skills__technologies__item: true,
							'skills__technologies__item--highlighted': technology.highlighted
						})}>{technology.label}</span
					>
				{/each}
			</div>
		</div>
	</div>
</Card>

<style lang="scss" global>
  .skills-content {
		@apply overflow-auto max-h-[450px];

		&--mobile {
			@apply max-h-[530px];
		}
	}

	.skills {
		@apply flex justify-center pt-8;
		@apply text-black-800 dark:text-gray-100;

		&__technologies {
			@apply flex flex-wrap justify-center;
		}

		&__technologies__item {
			@apply m-4;
		}

		&__technologies__item--highlighted {
			@apply font-bold text-black-900 dark:text-white-100 uppercase;
		}
	}
</style>
