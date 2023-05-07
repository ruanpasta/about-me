<script>
	import { Card } from '$/lib/components'
	import { t } from '$lib/translations'

	export const projects = [
		{ label: 'common.mock.projects.aboutMe.title', value: 'about-me' },
		{ label: 'common.mock.projects.weatherNow.title', value: 'weather-now' },
		{ label: 'common.mock.projects.coinApp.title', value: 'weather-now' }
	]
</script>

<Card title="Works">
	<div class="projects-list">
		{#each projects as project}
			<a
				data-sveltekit-preload-data="hover"
				href={`works/${project.value}`}
				class="projects-list__item"
			>
				{$t(project.label)}
			</a>
		{/each}
	</div>
</Card>

<style lang="scss" global>
	:global(.projects-list) {
		@apply flex flex-col items-center;
	}
	.projects-list__item {
		@apply text-black-700 dark:text-white-400;
		@apply hover:text-black-900 dark:hover:text-white-100 hover:font-black;
	}
</style>
