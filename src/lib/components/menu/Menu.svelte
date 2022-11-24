<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import { setContext } from 'svelte'
	import Menu from 'svelte-material-icons/Menu.svelte'
	import Button from '../button/Button.svelte'
	import Gradient from '../common/Gradient.svelte'
	import type { MenuContext } from './MenuContext'
	import MenuList from './MenuList.svelte'
	import type { MenuItem } from './Menus'

	let showMenu = false
	export let menus: MenuItem[] = []
	export const appendTo = (element: HTMLElement | null): void => {
		if (element) {
			const menuDropdown = document.getElementById('ab-menu')
			if (menuDropdown) element.appendChild(menuDropdown)
		}
	}

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
</script>

<div>
	<Button
		type="button"
		title="Menu"
		class="ab-menu"
		onClick={() => (showMenu = !showMenu)}
		link
	>
		<Menu size={30} />
	</Button>
	<div id="ab-menu" class={showMenu ? 'ab-menu__dropdown' : ''}>
		<Gradient class="rounded-b-[28px]" show={showMenu} filled>
			<div
				class={classMap({
					'ab-menu': true,
					'ab-menu__list': showMenu,
					'ab-menu--open': showMenu
				})}
				on:mouseleave={() => closeMenu()}
			>
				<ul class="ab-menu__list__items">
					{#if showMenu}
						{#each menus as menu}
							<MenuList {menu} />
						{/each}
					{/if}
				</ul>
			</div>
		</Gradient>
	</div>
</div>

<style lang="scss">
	:global {
		.ab-menu {
			@apply text-secondary;
			@apply rounded-b-[30px];

			&__list {
				@apply flex flex-col gap-4;
				@apply bg-background-intermediate;
			}

			&--open {
				@apply p-4 text-default;
			}

      &__dropdown {
        @apply absolute top-0 left-0 w-full z-10;
      }

			.ab-menu__list__items {
				@apply flex flex-col gap-4;
			}
		}
	}
</style>
