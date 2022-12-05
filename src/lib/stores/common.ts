import { writable } from 'svelte/store'
import { browser } from '$app/environment'
import { ThemeOptions } from '$/common'
import type { Theme } from '$/global'

// theme
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

// isMobile
const isMobile = writable<boolean>(true)

export { theme, isMobile }