<script lang="ts">
	import '../app.scss'
	import Header from './Header.svelte'
	import { Links, PageSwitch, Row } from '$lib/components'
	import Gradient from '$/lib/components/common/Gradient.svelte'
	import { classMap } from '$/helpers/classMap'
	import { onMount } from 'svelte'
	import { isMobile } from '$/lib/stores/common'

	const routePaths = ['/skills', '/experience', '/works', '/about-me']

	let innerWidth = 659

	$: if (innerWidth < 660) isMobile.set(true)
	$: if (innerWidth > 660) isMobile.set(false)

	onMount(() => (innerWidth = window.innerWidth))
</script>

<svelte:window bind:innerWidth />

<div
	class={classMap({
		app: true,
		web: !$isMobile
	})}
>
	<div class:web__content={!$isMobile}>
		<Gradient
			id="header-navbar-list"
			class={classMap({ web__content__gradient: !$isMobile })}
			show={!$isMobile}
			position="all"
		>
			<div class:web__content__gradient__fill={!$isMobile}>
				<Header />

				<main>
					<slot />
				</main>

        <Links class="app__links" />
        <PageSwitch class="app__page-switch" {routePaths} />
			</div>
		</Gradient>
	</div>
</div>

<style lang="scss" global>
	.app {
		@apply box-border m-0 p-0 h-full w-full;
		@apply text-black-700 bg-white-400 font-base;
		@apply dark:text-white-400 dark:bg-black-700;
	}
	.web {
		@apply flex justify-center justify-items-center items-center;
		@apply sm:min-h-screen;
		@apply bg-gray-500 dark:bg-black-600;
	}

	.web__content {
		@apply w-full min-h-[800px] relative;
		@apply sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px];
	}
	.web__content__gradient {
		@apply min-h-[800px];
	}
	.web__content__gradient__fill {
		@apply min-h-[800px];
	}

	.app__links {
		@apply m-4 absolute bottom-0 left-0;
	}

	.app__page-switch {
		@apply m-4 absolute bottom-6 right-0;
	}
</style>
