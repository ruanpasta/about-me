<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import { getContext } from 'svelte'
	import { Gradient } from '../common'
	import type { MenuContext } from './MenuContext'
	import type { MenuItem } from './Menus'
	import { t } from '$lib/translations'

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
		'ab-menu-list': true,
		'ab-menu-list__submenu': level > 0,
		'ab-menu-list--expanded': menu.expanded && menu.items?.length
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
					'ab-menu-list__label': true,
					'ab-menu-list__label--hover': showHover
				})}
			>
				{$t(menu.name)}
			</a>
		</div>
	</Gradient>
</li>

{#if menu.expanded && menu.items}
	{#each menu.items || [] as item}
		<svelte:self menu={item} level={level + 1} class="ml-3" />
	{/each}
{/if}

<style lang="scss" global>
	.ab-menu-list {
		@apply flex items-center cursor-pointer;
		@apply text-black-700 dark:text-white-400 font-normal;

		&__submenu {
			@apply pl-8 ml-2.5;
			@apply border-l-2;
			@apply border-black-800 dark:border-gray-100;
		}

		&--expanded {
			@apply text-black-700 dark:text-white-400;
		}
	}

	.ab-menu-list__label {
		@apply block;

		&--hover {
			@apply text-black-900 dark:text-white-100 font-black;
		}
	}
</style>
