<script lang="ts">
	import { classMap } from '$helpers/classMap'
import { onMount } from 'svelte'
	import type { MenuItem } from './Menus'

	export let menu: MenuItem
  export let level = 0;
	onMount(() => console.log(menu))
</script>

<li
	class={classMap({
    'item': true,
    'item--border': level > 0
  })}
	on:click={() => (menu.expanded = !menu.expanded)}
	on:keydown={() => {}}
>
	{#if menu.icon}
		<svelte:component this={menu.icon} />
	{/if}
	{menu.name}
</li>

{#if menu.expanded && menu.items}
	{#each menu.items || [] as item}
    <svelte:self menu={item} level={level + 1} />
	{/each}
{/if}

<style lang="scss">
	.item {
		@apply flex items-center gap-2 text-2xl cursor-pointer;

    &--border {
      @apply pl-4 ml-3;
      @apply border-l-2 border-[color:var(--color-primary)];
    }
	}
</style>
