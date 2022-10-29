<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import Menu from 'svelte-material-icons/Menu.svelte'
	import BookOpenPageVariantOutline from 'svelte-material-icons/BookOpenPageVariantOutline.svelte'
	import BriefcaseOutline from 'svelte-material-icons/BriefcaseOutline.svelte'
	import InformationOutline from 'svelte-material-icons/InformationOutline.svelte'
	import PackageVariantClosed from 'svelte-material-icons/PackageVariantClosed.svelte'
	import MenuList from './MenuList.svelte'
	import type { MenuItem } from './Menus'

	let showMenu = false

	let menus: MenuItem[] = [
		{
			name: 'Work',
			icon: PackageVariantClosed,
			path: '',
			items: [
        {
				name: 'Weather now',
				path: ''
			},
        {
				name: 'Other',
				path: ''
			},
    ]
		},
		{ name: 'Skills', icon: BookOpenPageVariantOutline, path: '' },
		{ name: 'Expirience', icon: BriefcaseOutline, path: '' },
		{ name: 'About me', icon: InformationOutline, path: '' }
	]
</script>

<div
	class={classMap({
		menu: true,
		menu__list: showMenu
	})}
	on:mouseleave={() => (showMenu = false)}
>
  <div>
    <button type="button" title="menu" on:click={() => (showMenu = !showMenu)}>
      <Menu size={30} />
    </button>
  </div>

	<ul>
		{#if showMenu}
      {#each menus as menu}
  			<MenuList {menu} />
      {/each}
		{/if}
	</ul>
</div>

<style lang="scss">
	.menu {
		@apply text-[color:#810A0B];
	}

	.menu__list {
		@apply fixed top-0 left-0 w-full p-4;
		@apply flex flex-col gap-3;
		@apply bg-[color:var(--color-intermediate-background)];
	}
</style>
