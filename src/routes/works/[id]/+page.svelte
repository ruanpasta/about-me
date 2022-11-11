<script lang="ts">
	import { Card } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div>
	<Card>
    {data?.description}
    {data?.links?.[0].label}
    {data?.links?.[1].label}
  </Card>
</div>
