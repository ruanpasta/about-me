<script lang="ts">
	import { Card, Button, Badge, Row } from '$lib/components'
	import type { PageData } from './$types'
	import { t } from '$lib/translations'
	import { classMap } from '$/helpers/classMap'
	import { isMobile } from '$/lib/stores/common'

	export let data: PageData

	$: title = $t(data?.title) || ''
	$: description = $t(data?.description) || ''
	$: links = data?.links || []
	$: technologies = data?.technologies || []

	const navigate = (url: string) => window.open(url, '_blank')
</script>

<Card {title}>
	<div
		class={classMap({
			'works-content': true,
			'works-content--mobile': $isMobile
		})}
	>
		<p data-testid="works-card-description">{description}</p>
		<Row class="works-badges" justify="start">
			{#each technologies as tecnology}
				<Badge label={tecnology.label} />
			{/each}
		</Row>
		<div class="works-links">
			{#each links as link}
				<Button onClick={() => navigate(link.url)}>
					{$t(link.label)}
				</Button>
			{/each}
		</div>
	</div>
</Card>

<style lang="scss" global>
	.works-content {
		@apply overflow-auto max-h-[450px];

		&--mobile {
			@apply max-h-[530px];
		}
	}

	.works-links {
		@apply my-4 flex flex-wrap gap-4;
	}

	.works-badges {
		@apply mt-2 flex flex-wrap gap-2;
	}
</style>
