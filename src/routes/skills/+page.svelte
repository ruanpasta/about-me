<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import Card from '$lib/components/card/Card.svelte'
  import type { Technologies } from 'src/global'

	const technologies: Technologies[] = [
		{ label: 'github', highlighted: false },
		{ label: 'angular', highlighted: true },
		{ label: 'sass', highlighted: false },
		{ label: 'flutter', highlighted: true },
		{ label: 'css', highlighted: false },
		{ label: 'vue', highlighted: true },
		{ label: 'html', highlighted: false },
		{ label: 'react', highlighted: true },
		{ label: 'sql', highlighted: false },
		{ label: 'ui', highlighted: false },
		{ label: 'svelte', highlighted: true },
		{ label: 'npm/yarn', highlighted: false },
		{ label: 'neovim', highlighted: false }
	]
</script>

<Card title={'Skills'}>
	<p>
		Ola, sou um amante do ecosistema JS/TS e tudo que os envolve, mas estou em
		uma constante busca de novos conhecimentos, nas areas de Backend, Devops,
		Design e tambem no desenvolvimento de games. Veja algumas das tecnologias
		que uso:
	</p>
	<div class="skills">
		<div class="skills__technologies">
			{#each technologies as technology}
				<span
					class={classMap({
						skills__technologies__item: true,
						'skills__technologies__item--highlighted': technology.highlighted
					})}>{technology.label}</span
				>
			{/each}
		</div>
	</div>
</Card>

<style lang="scss">
	.skills {
		@apply flex justify-center pt-8;
		@apply text-disabled;

		&__technologies {
			@apply flex flex-wrap justify-center max-w-xs;
		}

		&__technologies__item {
			@apply m-4;
		}

		&__technologies__item--highlighted {
			@apply font-bold text-highlighted uppercase;
		}
	}
</style>
