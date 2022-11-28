<script lang="ts">
	import '../app.scss'
	import Header from './Header.svelte'
	import { theme } from '$lib/stores/theme'
	import { Links, PageSwitch, Row } from '$lib/components'
	import { ThemeOptions } from '$/common'
	import Gradient from '$/lib/components/common/Gradient.svelte'
	import { classMap } from '$/helpers/classMap'
  import { onMount } from 'svelte'

  const routePaths = ['/skills', '/experience', '/works', '/about-me']

	let innerWidth = 999

	$: isMobile = innerWidth < 660

  $: dark = $theme === ThemeOptions.Dark

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
		web: !isMobile,
    dark
	})}
>
  {dark}
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
				</main>

				<footer class="app__footer">
          <Row>
            <Links class="app__footer__item" />
            <PageSwitch class="app__footer__item" {routePaths} />
          </Row>
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
    @apply bg-white-500 dark:bg-black-600;
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
		@apply absolute bottom-0 w-[99%];
	}

  :global(.app__footer__item) {
    @apply m-2;
  }
</style>
