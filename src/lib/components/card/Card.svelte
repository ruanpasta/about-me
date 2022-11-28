<script lang="ts">
	import Gradient from '../common/Gradient.svelte'
	import Section from '../common/Section.svelte'

	export let title: string
</script>

<Section class="card">
	<Gradient class="card__header">
		<h1 class="card__header__title">{title}</h1>
	</Gradient>

	<slot />
</Section>

<style lang="scss" global>
	.card {
		@apply m-4 text-xl;

		&__header {
			@apply mb-4;
		}

		&__header__title {
			@apply text-right text-3xl pb-2;
		}
	}
</style>
