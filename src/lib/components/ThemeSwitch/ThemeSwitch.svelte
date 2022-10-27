<script lang="ts">
	import { theme } from '$lib/stores/theme'
	import { onMount } from 'svelte'

	import WhiteBalanceSunny from 'svelte-material-icons/WhiteBalanceSunny.svelte'
	import MoonWaningCrescent from 'svelte-material-icons/MoonWaningCrescent.svelte'
  import type { Theme } from 'src/global';

	let isSystemDark = false

	const getTheme = (theme: Theme) => {
		if (theme !== 'system') return theme
		if (theme === 'system' && isSystemDark) return 'dark'
		return 'light'
	}

  const Icon = (theme: Theme)  => getTheme(theme) === 'light' ? WhiteBalanceSunny : MoonWaningCrescent

	let component = Icon($theme)

  onMount(
		() => {
        window.matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', event => {
            isSystemDark = event.matches
            component = Icon($theme)
          })
    }
  )

  theme.subscribe((currentTheme) => component = Icon(currentTheme))

	const handleOnClick = () => theme.set(getTheme($theme) === 'light' ? 'dark' : 'light')
</script>

<button class="icon" on:click={handleOnClick} on:keyup={() => {}}>
  <svelte:component this={component} />
</button>

<style lang="scss">
	.icon {
		@apply w-6 h-6 p-1 rounded-full;
		@apply text-[color:var(--color-background)] bg-[color:var(--color-text)];
	}
</style>
