<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import { setContext } from 'svelte'
	import Menu from 'svelte-material-icons/Menu.svelte'
	import Button from '../button/Button.svelte'
	import type { MenuContext } from './MenuContext'
	import type { MenuItem } from './Menus'
	import { t } from '$lib/translations'
	import MenuModal from './MenuModal.svelte'
	import { isMobile } from '$/lib/stores/common'

	let showMenu = false
	export let menus: MenuItem[] = []

	const closeExpandedMenu = (item: MenuItem): void => {
		item.expanded = false
		if (item.items?.length)
			return item.items.forEach((item: MenuItem) => closeExpandedMenu(item))
	}

	const closeMenu = () => {
		showMenu = false
		menus.forEach(closeExpandedMenu)
	}

	setContext<MenuContext>('menu', { closeMenu })

	const show = (menu?: MenuItem) => {
		if ($isMobile) return (showMenu = !showMenu)
		if (menu?.items) showMenu = !showMenu
	}

	const handleClick = (event: MouseEvent) => {
		const className = (event?.target as HTMLElement)?.className
		if (typeof className === 'string' && !className.includes('menu'))
			showMenu = false
	}
</script>

<svelte:window on:click={handleClick} />

<div>
	{#if $isMobile}
		<Button
			type="button"
			title="Menu"
			class="ab-menu"
			onClick={() => show()}
			link
		>
			<Menu size={30} />
		</Button>
		<MenuModal id="ab-menu-modal" {menus} {showMenu} />
	{:else}
		<div class="menu-items relative">
			{#each menus as menu}
				<MenuModal {menu} {showMenu} />
				<a
					data-sveltekit-preload-data="hover"
					href={menu.path}
					class={classMap({
						'menu-items__label': true
					})}
					on:click={() => show(menu)}
				>
					{$t(menu.name)}
				</a>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss" global>
	.ab-menu {
		@apply text-green-500/70 dark:text-red/50;
		@apply rounded-b-[30px];

		&__list {
			@apply flex flex-col gap-4;
			@apply bg-white-500 dark:bg-black-600;
		}

		&--open {
			@apply p-4 text-black-700 dark:text-white-400;
		}

		&__dropdown {
			@apply fixed top-0 left-0 w-full z-10;
		}

		.ab-menu__list__items {
			@apply flex flex-col gap-4;
		}
	}

	.menu-items {
		@apply flex gap-2 select-none;
		@apply font-bold text-transparent bg-clip-text;
		@apply bg-green-900 dark:bg-orange;

		&__label {
			@apply text-xl;
			@apply hover:text-black-900/50 dark:hover:text-white-100/50;
		}
	}
</style>
