import { loadTranslations, locale } from '$lib/translations'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url
	const defaultLocale = 'en-US' // TODO: get from cookie, user session, ...
	const initLocale = locale.get() || defaultLocale
	await loadTranslations(initLocale, pathname)

	return {}
}
