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
      groupPath: '/works',
			items: [
				{
					name: 'common.mock.projects.aboutMe.title',
					path: '/works/about-me'
				},
				{
					name: 'common.mock.projects.vueWeatherChallenge.title',
					path: '/works/vue-weather-challenge'
				},
				{
					name: 'common.mock.projects.angularCalendarChallenge.title',
					path: '/works/angular-calendar-challenge'
				},
				{
					name: 'common.mock.projects.nextjsCoinChallenge.title',
					path: '/works/nextjs-coin-challenge'
				},
				{
					name: 'common.mock.projects.angularPlatformChallenge.title',
					path: '/works/angular-platform-challenge'
				},
				{
					name: 'common.mock.projects.vueGiphyChallenge.title',
					path: '/works/vue-giphy-challenge'
				},
			]
		},
		{ name: 'common.menu.aboutMe', icon: InformationOutline, path: '/about-me' }
	]
</script>

<header>
	<Navbar>
		<Row>
			<Section class="logo">
				<Button title={$t('common.hints.home')} name="logo" link>
					<a href="/">RP</a>
				</Button>
			</Section>
			<Section>
				<Menu {menus} />
			</Section>
			<Section class="nav-buttons">
				<LanguageSwitch />
				<ThemeSwitch />
			</Section>
		</Row>
	</Navbar>
</header>

<style lang="scss" global>
	.logo {
		@apply text-2xl font-black text-green-900 dark:text-orange select-none;
	}
	.nav-buttons {
		@apply grid grid-flow-col gap-4;
	}
</style>
