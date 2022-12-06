<script lang="ts">
	import { Card, Accordion, Row, Badge, Button } from '$lib/components'
	import type { PageData } from './$types'
	import { t } from '$lib/translations'
	import { classMap } from '$/helpers/classMap'
	import { isMobile } from '$/lib/stores/common'

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

<Card title={$t('common.menu.experience')}>
	<div
		class={classMap({
			'experience-content': true,
			'experience-content--mobile': $isMobile
		})}
	>
		{#each experiences as item}
			<Accordion
				title={item.company}
				subTitle={getSubTitle(item.entree, item.leave)}
				opened={item.opened}
				onClick={() => toggle(item)}
			>
				{#if item?.links?.length}
					<Row class="experience-content-buttons" justify="start">
						{#each item.links as link}
							<Button
								class="experience-button"
								data-title={link.label}
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
					<p>{$t(item.roleDescription)}</p>
				</Row>

				{#if item.technologies?.length}
					<Row class="experience-content-badges" justify="start">
						{#each item?.technologies as tecnology}
							<Badge label={tecnology.label} />
						{/each}
					</Row>
				{/if}
			</Accordion>
		{/each}
	</div>
</Card>

<style lang="scss" global>
	.experience-content {
		@apply overflow-auto max-h-[450px];

		&--mobile {
			@apply max-h-[530px];
		}
	}

	.experience-content-buttons {
		@apply mt-4 flex flex-wrap gap-4;
	}
	.experience-content-badges {
		@apply mt-2 flex flex-wrap gap-2;
	}
	.experience-button {
		svg {
			@apply inline mr-2;
			@apply text-green-900 dark:text-orange;
		}
	}
</style>
