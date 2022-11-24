<script lang="ts">
	import { loadTranslations, locale } from '$lib/translations'
	import { Button } from '$lib/components'
	import { t } from '$lib/translations'

	let current = locale.get() || 'en-US'

	const changeLangue = async () => {
		await loadTranslations(current === 'en-US' ? 'pt-BR' : 'en-US', '/')
		current = locale.get()
	}
</script>

<Button title={$t('common.hints.languageSwitch')} onClick={changeLangue} link>
	{current}
</Button>
