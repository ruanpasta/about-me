<script lang="ts">
	import { Card, Accordion, Row, Badge, Button } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData

	$: experiences = data?.expiriences || []

	const toggle = (item: any) => {
		experiences = experiences?.map((currentItem) => {
			if (currentItem?.company === item?.company)
				currentItem.opened = !currentItem.opened
			else currentItem.opened = false
			return currentItem
		})
	}

	const getSubTitle = (entree: string, leave: string) =>
		`${entree}-${leave || 'Present'}`

	const navigate = (url: string) => url && window.open(url, '_blank')
</script>

<Card title={'Experience'}>
	{#each experiences as item}
		<Accordion
			title={item.company}
			subTitle={getSubTitle(item.entree, item.leave)}
			opened={item.opened}
			onClick={() => toggle(item)}
		>
			{#if item?.links?.length}
				<Row class="experience-content" justify="start">
					{#each item.links as link}
						<Button
							class="experience-button"
							onClick={() => navigate(link.url)}
							link
						>
							<svelte:component this={link.component} slot="leftIcon" />
							{link.label}
						</Button>
					{/each}
				</Row>
			{/if}

			<Row>
				<p>{item.roleDescription}</p>
			</Row>

			{#if item.technologies?.length}
				<Row class="experience-content" justify="start">
					{#each item?.technologies as tecnology}
						<Badge label={tecnology.label} />
					{/each}
				</Row>
			{/if}
		</Accordion>
	{/each}
</Card>

<style lang="scss">
	:global {
		.experience-content {
			@apply mt-4;
		}

		.experience-button {
			svg {
				@apply inline mr-2;
				@apply text-primary;
			}
		}
	}
</style>
