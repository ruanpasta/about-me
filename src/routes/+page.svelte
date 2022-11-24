<script>
	import { Presentation } from '$lib/components'
	import { t } from '$lib/translations'
</script>

<div class="flex justify-center justify-items-center">
	<div class="presentation">
		<Presentation class="w-full" name="Ruan Pasta" role={$t('common.title')} />
	</div>
</div>

<style lang="scss">
	.presentation {
		@apply w-full px-4 mt-[20%];
	}
</style>
