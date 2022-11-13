<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import Card from '$lib/components/card/Card.svelte'

	// TODO: Crerate type for tecnologies
	const tecnologies: any[] = [
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
	<p class="skills__resume">
		Ola, sou um amante do ecosistema JS/TS e tudo que os envolve, mas estou em
		uma constante busca de novos conhecimentos, nas areas de Backend, Devops,
		Design e tambem no desenvolvimento de games. Veja algumas das tecnologias
		que uso:
	</p>
	<div class="skills">
		<div class="skills__tecnologies">
			{#each tecnologies as technology}
				<span
					class={classMap({
						skills__tecnologies__item: true,
						'skills__tecnologies__item--highlighted': technology.highlighted
					})}>{technology.label}</span
				>
			{/each}
		</div>
	</div>
</Card>

<style lang="scss">
	.skills {
		@apply flex justify-center pt-8;
		@apply text-[color:var(--color-text-secondary)];

		&__tecnologies {
			@apply flex flex-wrap justify-center max-w-xs;
		}

		&__tecnologies__item {
			@apply m-4;
		}

		&__tecnologies__item--highlighted {
			@apply font-bold text-[color:var(--color-text-highlighted)] uppercase;
		}
	}

	.skills__resume {
		@apply mx-10 text-justify;
	}
</style>
