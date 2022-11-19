<script lang="ts">
	import { Card, Button } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData

  $: title = data?.title || ''
  $: description = data?.description || ''
  $: links = data?.links || []

	const navigate = (url: string) => window.open(url, '_blank')
</script>

<Card {title}>
	<p>{description}</p>
	<div class="work__links">
		{#each links as link}
			<Button onClick={() => navigate(link.url)}>
				{link.label}
			</Button>
		{/each}
	</div>
</Card>

<style lang="scss">
	.work__links {
		@apply my-4;
	}
</style>
