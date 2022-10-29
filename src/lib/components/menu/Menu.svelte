<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import Menu from 'svelte-material-icons/Menu.svelte'
	import MenuList from './MenuList.svelte'
	import type { MenuItem } from './Menus'

	let showMenu = false
  export let menus: MenuItem[] = [] 

  const select = (menu) => {
    menus.forEach((item) => {
      if (item.name === menu.name) return item.selected = !item.selected
      return item.selected = false
    })
    console.log(menus)
  }

  const closeExpandedMenu = (item: MenuItem) => {
    item.expanded = false
    if (item.items?.length) return closeExpandedMenu(item.items)
  }

  const closeMenu = () => {
    showMenu = false
    menus.forEach(closeExpandedMenu)
  }
</script>

<div class:gradient={showMenu}>
  <div
    class={classMap({
      menu: true,
      menu__list: showMenu,
      'menu--open': showMenu
    })}
    on:mouseleave={() => closeMenu()}
  >
    <div>
      <button type="button" title="menu" on:click={() => (showMenu = !showMenu)}>
        <Menu size={30} />
      </button>
    </div>

    <ul class="menu__list__items">
      {#if showMenu}
        {#each menus as menu}
          <MenuList {menu} {select} />
        {/each}
      {/if}
    </ul>
  </div>
</div>

<style lang="scss">
	.menu {
		@apply text-[color:var(--color-secondary)];
    @apply rounded-b-[30px];

    &__list {
      @apply flex flex-col gap-4;
      @apply bg-[color:var(--color-intermediate-background)];
    }

    &--open {
      @apply p-4 text-[color:var(--color-primary)];
    }
    
    .menu__list__items {
      @apply flex flex-col gap-4;
    }
	}

  .gradient {
    @apply fixed top-0 left-0 w-full;
    @apply pb-0.5 rounded-b-[30px];
    @apply bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-tertiary)];
  }
</style>