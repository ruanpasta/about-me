<script lang="ts">
	import { Card, Button, Badge, Row } from '$lib/components'
	import type { PageData } from './$types'
	import { t } from '$lib/translations'

	export let data: PageData

	$: title = $t(data?.title) || ''
	$: description = $t(data?.description) || ''
	$: links = data?.links || []
	$: technologies = data?.technologies || []

	const navigate = (url: string) => window.open(url, '_blank')
</script>

<Card {title}>
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
</Card>

<style lang="scss" global>
	.works-links {
    @apply my-4 flex flex-wrap gap-4;
	}

  .works-badges {
		@apply mt-2 flex flex-wrap gap-2;
  }
</style>
