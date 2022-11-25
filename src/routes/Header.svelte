<script lang="ts">
	import {
		Button,
		LanguageSwitch,
		Navbar,
		Row,
		Section,
		ThemeSwitch
	} from '$lib/components'
	import type { MenuItem } from '$lib/components/menu/Menus'

	import Menu from '$lib/components/menu/Menu.svelte'

	import PackageVariantClosed from 'svelte-material-icons/PackageVariantClosed.svelte'
	import BookOpenPageVariantOutline from 'svelte-material-icons/BookOpenPageVariantOutline.svelte'
	import BriefcaseOutline from 'svelte-material-icons/BriefcaseOutline.svelte'
	import InformationOutline from 'svelte-material-icons/InformationOutline.svelte'
	import { t } from '$lib/translations'

	let innerWidth = 999

	let menus: MenuItem[] = [
		{
			name: 'common.menu.skills',
			icon: BookOpenPageVariantOutline,
			path: '/skills'
		},
		{
			name: 'common.menu.experience',
			icon: BriefcaseOutline,
			path: '/experience'
		},
    {
			name: 'common.menu.work',
			icon: PackageVariantClosed,
			path: '',
			items: [
				{
					name: 'Weather now',
					path: '/works/weather-now'
				},
				{
					name: 'About me',
					path: '/works/about-me'
				}
			]
		},
		{ name: 'common.menu.aboutMe', icon: InformationOutline, path: '/about-me' }
	]

  $: isMobile = innerWidth < 660
</script>

<svelte:window bind:innerWidth />

<header>
	<Navbar>
		<Row>
			<Section class="logo">
        <Button title={$t('common.hints.home')} name="logo" link>
          <a href="/" name="logo">RP</a>
				</Button>
			</Section>
			<Section>
				<Menu {menus} {isMobile} />
			</Section>
			<Section class="nav-buttons">
				<LanguageSwitch />
				<ThemeSwitch />
			</Section>
		</Row>
	</Navbar>
</header>

<style lang="scss">
	:global {
		.logo {
			@apply text-2xl font-black text-primary;
		}
		.nav-buttons {
			@apply grid grid-flow-col gap-4;
		}
	}
</style>
