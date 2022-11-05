<script lang="ts">
	import { classMap } from '$helpers/classMap'
	import { Gradient } from '../common'
	import type { MenuItem } from './Menus'

	let className = ''
	export { className as class }
	export let menu: MenuItem
	export let level = 0

	let showHover = false
	let isGradient = false

	const showGradient = () => {
		let timeTohide = 300
		isGradient = true
		setTimeout(() => (isGradient = false), timeTohide)
	}

	const itemClicked = () => {
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
		show={isGradient}
		backgroundColor="var(--color-intermediate-background)"
	>
		<div
			on:mouseenter={() => (showHover = true)}
			on:mouseleave={() => (showHover = false)}
		>
			<svelte:element
				this={menu.path ? 'a' : 'span'}
        href={menu.path}
				class={classMap({
					menu__label: true,
					'menu__label--hover': showHover
				})}
			>
				{menu.name}
			</svelte:element>
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
		@apply text-[color:var(--color-text)];

		&__submenu {
			@apply pl-8 ml-2.5;
			@apply border-l-2;
			@apply border-[color:var(--color-text-secondary)];
		}

		&--expanded {
			@apply text-[color:var(--color-text)];
		}
	}

	.menu__label {
		@apply block;

		&--hover {
			@apply text-[color:var(--color-text-highlighted)] font-black;
		}
	}
</style>
