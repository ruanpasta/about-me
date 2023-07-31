<script>
	import { Card } from '$/lib/components'
	import { t } from '$lib/translations'

	export const projects = [
		{
			name: 'common.mock.projects.aboutMe.title',
			path: '/works/about-me'
		},
		{
			name: 'common.mock.projects.vueWeatherChallenge.title',
			path: '/works/vue-weather-challenge'
		},
		{
			name: 'common.mock.projects.angularCalendarChallenge.title',
			path: '/works/angular-calendar-challenge'
		},
		{
			name: 'common.mock.projects.nextjsCoinChallenge.title',
			path: '/works/nextjs-coin-challenge'
		},
		{
			name: 'common.mock.projects.angularPlatformChallenge.title',
			path: '/works/angular-platform-challenge'
		},
		{
			name: 'common.mock.projects.vueGiphyChallenge.title',
			path: '/works/vue-giphy-challenge'
		}
	]
</script>

<Card title="Works">
	<div class="projects-list">
		{#each projects as project}
			<a
				data-sveltekit-preload-data="hover"
				href={project.path}
				class="projects-list__item"
			>
				{$t(project.name)}
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
