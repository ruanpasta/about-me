<script lang="ts">
	import { classMap } from '$helpers/classMap'
  import { onMount } from 'svelte'
	import type { MenuItem } from './Menus'

  let className = ''
  export { className as class }
	export let menu: MenuItem
  export let level = 0;
  
  let showHover = false

  const itemClicked = () => (menu.expanded = !menu.expanded)
  
</script>

<li
	class={classMap({
    [className]: true,
    'menu': true,
    'menu__submenu': level > 0,
    'menu--expanded': menu.expanded && menu.items?.length
  })}
	on:click={itemClicked}
	on:keydown={() => {}}
>
	{#if menu.icon}
		<svelte:component this={menu.icon} />
	{/if}
  <div
    class={classMap({
      'menu__gradient': true,
    })}
    on:mouseenter={() => showHover = true}
    on:mouseleave={() => showHover = false}
  >
    <a
      href=""
      class={classMap({
        'menu__label': true,
        'menu__label--hover': showHover 
      })}>
      {menu.name}
    </a>
  </div>
</li>

{#if menu.expanded && menu.items}
	{#each menu.items || [] as item}
    <svelte:self menu={item} level={level + 1} class="ml-3" />
	{/each}
{/if}

<style lang="scss">
	.menu {
		@apply flex items-center gap-2 text-2xl cursor-pointer;
    @apply text-[color:var(--color-text)];

    &__submenu {
      @apply pl-8 ml-2.5;
      @apply border-l-2;
    }

    &--expanded {
      @apply text-[color:var(--color-text)];
    }
	}

  .menu__gradient {
    @apply w-full ml-3 pb-0.5;

    &:active {
      animation: ripple 600ms linear;
      @apply bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-tertiary)];
    }
  }

  .menu__label {
    @apply block bg-[color:var(--color-intermediate-background)];

    &--hover {
      @apply text-[color:var(--color-text-highlighted)] font-black;
    }
  }
</style>
