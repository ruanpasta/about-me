<script>
	import { classMap } from '$/helpers/classMap'
	import { Card } from '$/lib/components'

	export const projects = [
		{ label: 'Weather now', value: 'weather-now' },
		{ label: 'About me', value: 'about-me' }
	]
</script>

<Card title="Works">
	<div class="projects-list">
		{#each projects as project}
			<a
				data-sveltekit-prefetch
				href={`works/${project.value}`}
				class="projects-list__item"
			>
				{project.label}
			</a>
		{/each}
	</div>
</Card>

<style lang="scss">
	:global(.projects-list) {
		@apply flex flex-col items-center;
	}
	.projects-list__item {
		@apply text-default;
		@apply hover:text-highlighted hover:font-black;
	}
</style>
