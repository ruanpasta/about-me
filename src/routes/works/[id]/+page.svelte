<script lang="ts">
	import { Card, Button } from '$lib/components'
	import type { PageData } from './$types'
	import { t } from '$lib/translations'

	export let data: PageData

	$: title = $t(data?.title) || ''
	$: description = $t(data?.description) || ''
	$: links = data?.links || []

	const navigate = (url: string) => window.open(url, '_blank')
</script>

<Card {title}>
	<p data-testid="works-card-description">{description}</p>
	<div class="work-links">
		{#each links as link}
			<Button onClick={() => navigate(link.url)}>
				{link.label}
			</Button>
		{/each}
	</div>
</Card>

<style lang="scss">
	.work-links {
    @apply my-4 grid grid-flow-col auto-cols-max gap-4;
	}
</style>
