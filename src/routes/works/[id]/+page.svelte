<script lang="ts">
	import { Card, Button } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData

	const navigate = (url: string) => window.open(url, '_blank')
</script>

<Card title={data?.title}>
	<p class="work__resume">
		{data?.description}
	</p>
	<div class="work__links">
		{#each data?.links as link}
			<Button onClick={() => navigate(link.url)}>
				{link.label}
			</Button>
		{/each}
	</div>
</Card>

<style lang="scss">
	.work__resume {
		@apply mx-10 text-justify;
	}

	.work__links {
		@apply mx-10 my-4;
	}
</style>
