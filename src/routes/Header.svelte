<script lang="ts">
	import {
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

	let menus: MenuItem[] = [
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
		{ name: 'common.menu.aboutMe', icon: InformationOutline, path: '/about-me' }
	]
</script>

<header>
	<Navbar>
		<Row>
			<Section class="logo">
				<a href="/" name="logo">RP</a>
			</Section>
			<Section>
				<Menu {menus} />
			</Section>
			<Section>
				<LanguageSwitch />
				<ThemeSwitch />
			</Section>
		</Row>
	</Navbar>
</header>

<style lang="scss">
	:global(.logo) {
		@apply text-2xl font-black text-primary;
	}
</style>
