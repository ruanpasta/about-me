<script lang="ts">
	import { Card, Button } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData

  const navigate = (url: string) =>
    window.open(url, '_blank')
</script>

<Card title={data?.title}>
  {data?.description}
  <div>
    {#each data?.links as link}
      <Button onClick={() => navigate(link.url)}>
        {link.label}
      </Button>
    {/each}
  </div>
</Card>
