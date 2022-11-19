<script lang="ts">
  import { prefetch } from '$app/navigation'
	import { classMap } from '$helpers/classMap'
  import { getContext } from 'svelte'
	import { Gradient } from '../common'
  import type { MenuContext } from './MenuContext'
	import type { MenuItem } from './Menus'

	let className = ''
	export { className as class }
	export let menu: MenuItem
	export let level = 0

  const { closeMenu } = getContext<MenuContext>('menu')

	let showHover = false
	let isGradient = false

	const showGradient = () => {
		let timeTohide = 300
		isGradient = true
		setTimeout(() => (isGradient = false), timeTohide)
	}

	const itemClicked = () => {
    if (!menu.items?.length) return closeMenu?.()
		menu.expanded = !menu.expanded
		showGradient()
	}
</script>

<li
	class={classMap({
		[className]: true,
		menu: true,
		menu__submenu: level > 0,
		'menu--expanded': menu.expanded && menu.items?.length
	})}
	on:click={itemClicked}
	on:keydown={() => {}}
>
	{#if menu.icon}
		<svelte:component this={menu.icon} />
	{/if}

	<Gradient
		class="w-full ml-3"
    bgClass="bg-background-intermediate"
		show={isGradient}
	>
		<div
			on:mouseenter={() => (showHover = true)}
			on:mouseleave={() => (showHover = false)}
		>
			<a
        data-sveltekit-prefetch
        href={menu.path}
				class={classMap({
					menu__label: true,
					'menu__label--hover': showHover
				})}
			>
				{menu.name}
			</a>
		</div>
	</Gradient>
</li>

{#if menu.expanded && menu.items}
	{#each menu.items || [] as item}
		<svelte:self menu={item} level={level + 1} class="ml-3" />
	{/each}
{/if}

<style lang="scss">
	.menu {
		@apply flex items-center gap-2 text-2xl cursor-pointer;
		@apply text-default;

		&__submenu {
			@apply pl-8 ml-2.5;
			@apply border-l-2;
			@apply border-disabled;
		}

		&--expanded {
			@apply text-default;
		}
	}

	.menu__label {
		@apply block;

		&--hover {
			@apply text-highlighted font-black;
		}
	}
</style>
