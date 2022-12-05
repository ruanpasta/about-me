<script lang="ts">
	import { theme } from '$lib/stores/theme'
	import { onMount, SvelteComponent } from 'svelte'

	import WhiteBalanceSunny from 'svelte-material-icons/WhiteBalanceSunny.svelte'
	import MoonWaningCrescent from 'svelte-material-icons/MoonWaningCrescent.svelte'
	import type { Theme } from 'src/global'
	import { Button, Empty } from '$lib/components'
	import { classMap } from '$helpers/classMap'
	import { ThemeOptions } from '$/common'
	import { t } from '$lib/translations'

	$: if ($theme) changeTheme()

	const changeTheme = () => {
		try {
			if (
				$theme === ThemeOptions.Dark ||
				(($theme === ThemeOptions.System || !$theme) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			)
				document.documentElement.classList.add('dark')
			else document.documentElement.classList.remove('dark')
		} catch {}
	}

	const getTheme = (theme: Theme): 'light' | 'dark' => {
		try {
			if (theme === ThemeOptions.System || !theme) {
				if (window.matchMedia('(prefers-color-scheme: dark)').matches)
					return ThemeOptions.Dark
				return ThemeOptions.Light
			}
			return theme
		} catch {
			return ThemeOptions.Light
		}
	}

	const Icon = (theme: Theme): any => {
		console.log('Icon getTheme', getTheme(theme))
		return getTheme(theme) === 'light' ? WhiteBalanceSunny : MoonWaningCrescent
	}

	let component = Empty

	onMount(() => {
		component = Icon($theme)
		updateThemeOnSystemPreferencesChanges()
	})

	const handleOnClick = () => {
		const newTheme = getTheme($theme) === 'light' ? 'dark' : 'light'
		theme.set(newTheme)
		component = Icon(newTheme)
	}

	const updateThemeOnSystemPreferencesChanges = () =>
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', () => {
				changeTheme()
				component = Icon($theme)
			})
</script>

<Button
	class={classMap({
		'dark-theme': $theme === ThemeOptions.Dark,
		'light-theme': $theme === ThemeOptions.Light
	})}
	title={$t('common.hints.themeSwitch')}
	data-testid="theme-switch"
	onClick={handleOnClick}
	link
>
	<svelte:component this={component} />
</Button>
