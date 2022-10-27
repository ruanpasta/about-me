<script lang="ts">
	import { theme } from '$lib/stores/theme'
	import { onMount } from 'svelte'

	import WhiteBalanceSunny from 'svelte-material-icons/WhiteBalanceSunny.svelte'
	import MoonWaningCrescent from 'svelte-material-icons/MoonWaningCrescent.svelte'
  import type { Theme } from 'src/global';
  import { Empty } from '$lib/components';

	let isSystemDark = false

	const getTheme = (theme: Theme) => {
		if (theme !== 'system') return theme
		if (theme === 'system' && isSystemDark) return 'dark'
		return 'light'
	}

  const Icon = (theme: Theme)  => getTheme(theme) === 'light' ? WhiteBalanceSunny : MoonWaningCrescent

  let component = Empty

  onMount(() => {
        console.log('Robin')
        const storageTheme = window.localStorage.getItem('theme') as Theme
        if (storageTheme && storageTheme.includes('light' || 'dark'))
          return updateThemeByStorage(storageTheme)
        console.log('Batman')
        updateThemeOnInitBySystemPreferences(),
        updateThemeOnSystemPreferencesChanges()
    }
  )

  theme.subscribe((currentTheme) => component = Icon(currentTheme))

  const updateThemeByStorage = (storageTheme: Theme) => {
    console.log(storageTheme)
    theme.set(storageTheme)
    component = Icon(storageTheme)
  }

	const handleOnClick = () => {
    const newTheme = getTheme($theme) === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', newTheme)
    theme.set(newTheme)
  }

  const updateThemeOnInitBySystemPreferences = () => {
    isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    component = Icon($theme)
  }

  const updateThemeOnSystemPreferencesChanges = () => window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
      isSystemDark = event.matches
      component = Icon($theme)
  })
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
