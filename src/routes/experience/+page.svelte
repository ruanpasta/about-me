<script lang="ts">
	import { Card, Accordion, Row, Badge, Button } from '$lib/components'
	import MapMarker from 'svelte-material-icons/MapMarker.svelte'
	import OpenInNew from 'svelte-material-icons/OpenInNew.svelte'
  import type { Experiences } from "src/global";

	let items: Experiences[] = [
		{
			company: 'Octadesk',
			opened: true,
			roleDescription:
				'Desenvolvo as solucoes de frontend, principalmente focado no projeto Widget com as tecnologias Vuejs/Nuxt e Svelte.',
			entree: '2022',
			leave: '',
			links: [
				{ label: 'Remote', url: '', component: MapMarker },
				{
					label: 'octadesk.com',
					url: 'https://octadesk.com',
					component: OpenInNew
				}
			],
			technologies: [
				{ label: 'Vue' },
				{ label: 'Svelte' },
				{ label: 'Flutter' },
				{ label: 'TailwindCSS' },
				{ label: 'Javascript' },
				{ label: 'Typescript' }
			]
		},
		{
			company: 'AmbevTech',
			opened: false,
			roleDescription:
				'Desenvolvo as solucoes de frontend, principalmente focado no projeto Widget com as tecnologias Vuejs/Nuxt e Svelte.',
			entree: '2021',
			leave: '2022',
			links: [
				{ label: 'Blumenau, SC', url: '', component: MapMarker },
				{
					label: 'ambev.com',
					url: 'https://ambev.com',
					component: OpenInNew
				}
			],
			technologies: [
				{ label: 'React' },
				{ label: 'Java' },
				{ label: 'Springboot' },
				{ label: 'Styledcomponents' },
				{ label: 'Javascript' },
				{ label: 'Typescript'}
			]
		},
		{
			company: 'Senior Sistemas',
			opened: false,
			roleDescription:
				'Desenvolvo as solucoes de frontend, principalmente focado no projeto Widget com as tecnologias Vuejs/Nuxt e Svelte.',
			entree: '2018',
			leave: '2022',
			links: [
				{ label: 'Blumenau, SC, BR', url: '', component: MapMarker },
				{
					label: 'seniorsistemas.com',
					url: 'https://seniorsistemas.com',
					component: OpenInNew
				}
			],
			technologies: [
				{ label: 'Angular' },
				{ label: 'Ionic' }, 
				{ label: 'Flutter' }, 
				{ label: 'Sass' }, 
				{ label: 'Javascript' }, 
				{ label: 'Typescript' }, 
			]
		}
	]

	const toggle = (item: any) => {
		items = items?.map((currentItem) => {
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
	{#each items as item}
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
