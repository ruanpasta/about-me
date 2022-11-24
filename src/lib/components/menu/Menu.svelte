<script lang="ts">
	import { classMap } from '$helpers/classMap'
  import { onMount, setContext } from 'svelte'
	import Menu from 'svelte-material-icons/Menu.svelte'
  import type { MenuContext } from './MenuContext'
	import MenuList from './MenuList.svelte'
	import type { MenuItem } from './Menus'

	let showMenu = false
	export let menus: MenuItem[] = []
  export let appendTo: HTMLElement | null = null

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

  onMount(() => {
    if (appendTo) {
      const thisMenu = document.getElementById('ab-menu')
      if (thisMenu) {
        appendTo.append(thisMenu)
      }
    }
  })
</script>

<!-- TODO: Use Gradient component here -->

<div id="ab-menu" class:gradient={showMenu}>
	<div
		class={classMap({
			menu: true,
			menu__list: showMenu,
			'menu--open': showMenu
		})}
		on:mouseleave={() => closeMenu()}
	>
		<div>
			<button
				type="button"
				title="menu"
				on:click={() => (showMenu = !showMenu)}
			>
				<Menu size={30} />
			</button>
		</div>

		<ul class="menu__list__items">
			{#if showMenu}
				{#each menus as menu}
					<MenuList {menu} />
				{/each}
			{/if}
		</ul>
	</div>
</div>

<style lang="scss">
	.menu {
		@apply text-secondary;
		@apply rounded-b-[30px];

		&__list {
			@apply flex flex-col gap-4;
			@apply bg-background-intermediate;
		}

		&--open {
			@apply p-4 text-default;
		}

		.menu__list__items {
			@apply flex flex-col gap-4;
		}
	}

	.gradient {
		@apply absolute top-0 left-0 w-full z-10;
		@apply pb-0.5 rounded-b-[30px];
		@apply bg-gradient-to-r from-primary via-secondary to-tertiary;
	}
</style>
