<script lang="ts">
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte'
	import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte'
	import { Row } from '../common'
	import { page, navigating } from '$app/stores'
	import type { NavigationTarget } from '@sveltejs/kit'
	import { onMount } from 'svelte'
	import { classMap } from '$/helpers/classMap'
	import { isMobile } from '$/lib/stores/common'

	let externalClass = ''
	export { externalClass as class }
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
			(isString ? route : route?.route?.id) || ''
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

<div
	class={classMap({
		[externalClass]: true,
		'ab-page-switch': true
	})}
>
	<Row justify="center">
		<div
			class={classMap({
				'ab-page-switch__left': true,
				'ab-page-switch__left--mobile': $isMobile
			})}
		>
			<a data-sveltekit-preload-data="hover" href={previousPath}>
				<ChevronLeft size={24} />
			</a>
		</div>
		<div
			class={classMap({
				'ab-page-switch__right': true,
				'ab-page-switch__right--mobile': $isMobile
			})}
		>
			<a data-sveltekit-preload-data="hover" href={nextPath}>
				<ChevronRight size={24} />
			</a>
		</div>
	</Row>
</div>

<style lang="scss" global>
	.ab-page-switch {
		@apply w-max;
	}

	.ab-page-switch__left {
		@apply cursor-pointer;
		@apply rounded-l-2xl bg-green-900/70 dark:bg-orange/50;
		@apply hover:bg-green-900/90 dark:hover:bg-orange/80;

    &--mobile {
      @apply rounded-full ml-4;
    }
	}

	.ab-page-switch__right {
		@apply cursor-pointer;
		@apply rounded-r-2xl bg-green-100/70 dark:bg-blue/50;
		@apply hover:bg-green-100/100 dark:hover:bg-blue/100;

    &--mobile {
      @apply rounded-full ml-4;
    }
	}
</style>
