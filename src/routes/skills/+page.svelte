<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import Card from '$lib/components/card/Card.svelte'
  import type { PageData } from './$types'
	import { t } from '$lib/translations'

	export let data: PageData

  $: description = data?.description || ''
  $: technologies = data?.technologies || []
</script>

<Card title={$t('common.menu.skills')}>
	<p>
		{description}
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
</Card>

<style lang="scss">
	.skills {
		@apply flex justify-center pt-8;
		@apply text-disabled;

		&__technologies {
			@apply flex flex-wrap justify-center max-w-xs;
		}

		&__technologies__item {
			@apply m-4;
		}

		&__technologies__item--highlighted {
			@apply font-bold text-highlighted uppercase;
		}
	}
</style>
