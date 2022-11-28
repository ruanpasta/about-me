import { writable } from 'svelte/store'
import { browser } from '$app/environment'
import { ThemeOptions } from '$/common'
import type { Theme } from '$/global'

const getTheme = () => {
	if (browser) {
		return (localStorage.getItem('theme') as Theme) ?? ThemeOptions.System
	}
	return ThemeOptions.System
}

const theme = writable<Theme>(getTheme())

theme.subscribe((theme: Theme) => {
	if (browser) return (localStorage.theme = theme)
})

export { theme }
