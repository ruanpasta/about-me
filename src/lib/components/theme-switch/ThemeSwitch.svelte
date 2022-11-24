<script lang="ts">
	import { theme } from '$lib/stores/theme'
	import { onMount } from 'svelte'

	import WhiteBalanceSunny from 'svelte-material-icons/WhiteBalanceSunny.svelte'
	import MoonWaningCrescent from 'svelte-material-icons/MoonWaningCrescent.svelte'
	import type { Theme } from 'src/global'
	import { Button, Empty } from '$lib/components'
  import { classMap } from '$helpers/classMap'
  import { ThemeOptions } from '$/common'
	import { t } from '$lib/translations'

	let isSystemDark = false

	const getTheme = (theme: Theme) => {
		if (theme !== ThemeOptions.System) return theme
		if (theme === ThemeOptions.System && isSystemDark) return 'dark'
		return 'light'
	}

	const Icon = (theme: Theme) =>
		getTheme(theme) === 'light' ? WhiteBalanceSunny : MoonWaningCrescent

	let component = Empty

	onMount(() => {
		const storageTheme = window.localStorage.getItem('theme') as Theme
		if (
			storageTheme &&
			(storageTheme.includes('light') || storageTheme.includes('dark'))
		)
			return updateThemeByStorage(storageTheme)
		updateThemeOnInitBySystemPreferences(),
			updateThemeOnSystemPreferencesChanges()
	})

	theme.subscribe((currentTheme) => (component = Icon(currentTheme)))

	const updateThemeByStorage = (storageTheme: Theme) => {
		theme.set(storageTheme)
		component = Icon(storageTheme)
	}

	const handleOnClick = () => {
		const newTheme = getTheme($theme) === 'light' ? 'dark' : 'light'
		window.localStorage.setItem('theme', newTheme)
		theme.set(newTheme)
	}

	const updateThemeOnInitBySystemPreferences = () => {
		isSystemDark =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		component = Icon($theme)
	}

	const updateThemeOnSystemPreferencesChanges = () =>
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				isSystemDark = event.matches
				component = Icon($theme)
			})
</script>

<Button
  class={classMap({
    'dark-theme': $theme === ThemeOptions.Dark,
    'light-theme': $theme === ThemeOptions.Light,
  })}
	title={$t('common.hints.themeSwitch')}
	data-testid="theme-switch"
	onClick={handleOnClick}
  link
>
	<svelte:component this={component} />
</Button>
