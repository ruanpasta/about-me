<script lang="ts">
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte'
	import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte'
	import { Row } from '../common'
	import { page, navigating } from '$app/stores'
	import type { NavigationTarget } from '@sveltejs/kit'
	import { onMount } from 'svelte'

	export let routePaths: string[] = []

	const getPathIndex = (currentPath: string): number =>
		routePaths.findIndex((route) => currentPath.includes(route))

	let previousPath = ''
	let nextPath = ''

  $: if ($navigating) updatePaths($navigating.to)

	onMount(() => updatePaths($page.url.pathname))

	const updatePaths = (route: NavigationTarget | string | null) => {
		const isString = typeof route === 'string'
		const currentPathIndex = getPathIndex(
			(isString ? route : route?.routeId) || ''
		)

		previousPath = routePaths[currentPathIndex - 1] ?? '/'
		nextPath = routePaths[currentPathIndex + 1] ?? '/'

		const isHome = currentPathIndex === -1

		if (isHome) {
			previousPath = routePaths[routePaths.length - 1]
			nextPath = routePaths[0]
		}
	}
</script>

<Row class="ab-page-switch" justify="center">
	<div class="ab-page-switch__left">
		<a data-sveltekit-prefetch href={previousPath}>
			<ChevronLeft size={24} />
		</a>
	</div>
	<div class="ab-page-switch__right">
		<a data-sveltekit-prefetch href={nextPath}>
			<ChevronRight size={24} />
		</a>
	</div>
</Row>

<style lang="scss">
	:global {
		.ab-page-switch {
			@apply mt-8;

			&__left {
				@apply cursor-pointer;
				@apply rounded-l-2xl bg-primary/70;
				@apply hover:bg-primary/90;
			}

			&__right {
				@apply cursor-pointer;
				@apply rounded-r-2xl bg-tertiary/70;
				@apply hover:bg-tertiary/100;
			}
		}
	}
</style>
