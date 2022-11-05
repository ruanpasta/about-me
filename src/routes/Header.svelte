<header>
  <Navbar>
    <Row>
      <Section class="logo">RP</Section>
      <Section>
        <Menu {menus} />
      </Section>
      <Section>
        <ThemeSwitch />
      </Section>
    </Row>
  </Navbar>
</header>

<script lang="ts">
  import { Navbar, Row, Section, ThemeSwitch } from "$lib/components";
  import Menu from "$lib/components/menu/Menu.svelte";
	import PackageVariantClosed from 'svelte-material-icons/PackageVariantClosed.svelte'
	import BookOpenPageVariantOutline from 'svelte-material-icons/BookOpenPageVariantOutline.svelte'
	import BriefcaseOutline from 'svelte-material-icons/BriefcaseOutline.svelte'
	import InformationOutline from 'svelte-material-icons/InformationOutline.svelte'
	import type { MenuItem } from '$lib/components/menu/Menus'

	let menus: MenuItem[] = [
		{
			name: 'Works',
			icon: PackageVariantClosed,
			path: '',
			items: [
        {
          name: 'Weather now',
          path: '/works/weather-now',
        },
        {
          name: 'Other',
          path: '/works/other'
        },
      ]
    },
    { name: 'Skills', icon: BookOpenPageVariantOutline, path: '/skills' },
    { name: 'Experience', icon: BriefcaseOutline, path: '/experience' },
    { name: 'About me', icon: InformationOutline, path: '/about-me' }
	]
</script>

<style lang="scss">
  :global(.logo) {
    @apply text-2xl font-black text-[color:var(--color-primary)];
  }
</style>
