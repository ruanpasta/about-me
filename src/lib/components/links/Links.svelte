<script lang="ts">
  import { ThemeOptions } from '$/common'
	import { classMap } from '$helpers/classMap'
	import GitHub from '$icons/github-icon.svelte'
	import Linkedin from '$icons/linkedin-icon.svelte'
	import { theme } from '$lib/stores/theme'
  import { Button } from '$lib/components'

	let externalClass = ''
	export { externalClass as class }

  $: color = $theme === ThemeOptions.Dark ?  '#787878' : '#383838'

	const navigate = (url: string) => window.open(url, '_blank')
</script>

<div class={classMap({ [externalClass]: true, 'personal-links': true })}>
  <Button title="Github" onClick={() => navigate('https://github.com/ruanpasta')} link>
		<GitHub {color} />
  </Button>
  <Button title="Linkedin" onClick={() => navigate('https://www.linkedin.com/in/ruanpasta')} link>
		<Linkedin {color} />
  </Button>
</div>

<style lang="scss">
	.personal-links {
		@apply flex flex-col gap-2;
	}
</style>
