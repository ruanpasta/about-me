<script lang="ts">
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte'
	import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte'
	import { Row } from '../common'
	import { page, navigating } from '$app/stores'
	import type { NavigationTarget } from '@sveltejs/kit'
	import { onMount } from 'svelte'

	const routePaths = ['skills', 'experience', 'work', 'about-me']

	const getPathIndex = (currentPath: string): number | null => {
		const index = routePaths.findIndex((route) => currentPath.includes(route))
		return index === -1 ? null : index
	}

	let previousPath = ''
	let nextPath = ''

	const updatePaths = (route: NavigationTarget | string | null) => {
		const isString = typeof route === 'string'
		const currentPathIndex = getPathIndex(
			(isString ? route : route?.routeId) || ''
		)

		const isHome = !currentPathIndex

		if (isHome) {
			previousPath = routePaths[routePaths.length - 1]
			nextPath = routePaths[0]
		} else {
			previousPath =
				currentPathIndex === 0 ? '/' : routePaths[currentPathIndex - 1]
			nextPath =
				currentPathIndex === routePaths.length - 1
					? '/'
					: routePaths[currentPathIndex + 1]
		}
	}

	$: if ($navigating) updatePaths($navigating.to)

	onMount(() => updatePaths($page.url.pathname))
</script>

<Row class="ab-page-switch" justify="center">
	{previousPath} - {nextPath}
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
