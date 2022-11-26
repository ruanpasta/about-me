<script lang="ts">
	import '../app.scss'
	import Header from './Header.svelte'
	import { theme } from '$lib/stores/theme'
	import { Links, PageSwitch } from '$lib/components'
	import { ThemeOptions } from '$/common'
	import Gradient from '$/lib/components/common/Gradient.svelte'
	import { classMap } from '$/helpers/classMap'
  import { onMount } from 'svelte'

  const routePaths = ['/skills', '/experience', '/works', '/about-me']

	let innerWidth = 999

	$: isMobile = innerWidth < 660

  onMount(() => innerWidth = window.innerWidth)
</script>

<svelte:head>
	<meta
		name="color-scheme"
		content={$theme === ThemeOptions.System ? 'light dark' : $theme}
	/>
	<link rel="stylesheet" href={`/theme/${$theme}.scss`} />
</svelte:head>

<svelte:window bind:innerWidth />

<div
	class={classMap({
		app: true,
		web: !isMobile
	})}
>
	<div class:web__content={!isMobile}>
		<Gradient
      id="header-navbar-list"
			class={classMap({ web__content__gradient: !isMobile })}
			show={!isMobile}
			position="all"
		>
			<div class:web__content__gradient__fill={!isMobile}>
				<Header />

				<main>
					<slot />
          <PageSwitch {routePaths} />
				</main>

				<footer class="app__footer">
					<Links class="links" />
				</footer>
			</div>
		</Gradient>
	</div>
</div>

<style lang="scss">
	.app {
		@apply box-border m-0 p-0 h-full w-full;
	}
	.web {
		@apply flex justify-center justify-items-center items-center;
		@apply sm:min-h-screen;
    @apply bg-background-intermediate
	}
	.web__content {
		@apply w-full min-h-[800px] relative;
		@apply sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px];
	}
	:global(.web__content__gradient) {
		@apply min-h-[800px];
	}
	.web__content__gradient__fill {
		@apply min-h-[800px];
	}
	.app__footer {
		@apply absolute bottom-0 mb-2 ml-2;
	}
	:global(.links) {
		@apply left-2 p-2 rounded-2xl bg-background;
	}
</style>
