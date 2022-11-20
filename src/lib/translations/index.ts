import i18n, { type Config } from 'sveltekit-i18n'

const config: Config = {
	loaders: [
		{
			locale: 'en-US',
			key: 'common',
			loader: async () => (await import('./i18n/en-US.json')).default
		},
		{
			locale: 'pt-BR',
			key: 'common',
			loader: async () => (await import('./i18n/pt-BR.json')).default
		}
	]
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(
	config
)
