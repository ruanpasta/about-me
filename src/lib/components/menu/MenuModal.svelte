<script lang="ts">
	import { classMap } from '$/helpers/classMap'
	import { getContext } from 'svelte'
	import { Gradient } from '../common'
	import type { MenuContext } from './MenuContext'
	import MenuList from './MenuList.svelte'
	import type { MenuItem } from './Menus'

	export let menu: MenuItem = { name: '', path: '' }
	export let menus: MenuItem[] = []
	export let showMenu = false
	export let isMobile = false
	const { closeMenu } = getContext<MenuContext>('menu')

	$: hasMenus = menus?.length
	$: hasMenuItems = menu?.items?.length

	$: menuItems = menu?.items || []
	$: menuList = menus || []
</script>

<div
	class={classMap({
		relative: !isMobile
	})}
>
	{#if (hasMenus || hasMenuItems) && showMenu}
		<div
			id="ab-menu-modal"
			class={classMap({
				'ab-menu-modal__dropdown': true,
				'ab-menu-modal__dropdown--mobile': isMobile
			})}
		>
			<Gradient
				class={classMap({
					'ab-menu-modal__gradient': true,
					'ab-menu-modal__gradient--mobile': isMobile
				})}
				position="all"
				filled
			>
				<div
					class={classMap({
						'ab-menu-modal': true,
						'ab-menu-modal--mobile': isMobile,
						'ab-menu-modal__list': true,
						'ab-menu-modal__list--mobile': isMobile,
						'ab-menu-modal--open': true
					})}
					on:mouseleave={() => closeMenu()}
				>
					<ul
						class={classMap({
							'ab-menu-modal__list__items': true,
							'ab-menu-modal__list__items--mobile': isMobile
						})}
					>
						{#if hasMenuItems}
							{#each menuItems as item}
								<MenuList menu={item} />
							{/each}
						{:else if hasMenus}
							{#each menuList as item}
								<MenuList menu={item} />
							{/each}
						{/if}
					</ul>
				</div>
			</Gradient>
		</div>
	{/if}
</div>

<style lang="scss">
	.ab-menu-modal {
		@apply text-secondary/50 text-2xl;
		@apply w-max;
		@apply rounded-b-[30px] rounded-tl-none rounded-tr-[30px];

		&--mobile {
			@apply rounded-b-[30px] rounded-t-none w-full;
		}

		&__list {
			@apply flex flex-col gap-4;
			@apply bg-background-intermediate;
		}

		&--open {
			@apply p-3 text-default;
		}

		&__dropdown {
			@apply absolute top-0 left-0 w-full z-10;
		}

		&__dropdown--mobile {
			@apply fixed top-0 left-0 w-full z-10;
		}

		.ab-menu-modal__list__items {
			@apply flex flex-col gap-2 text-lg;
		}

		.ab-menu-modal__list__items--mobile {
			@apply flex flex-col gap-4 text-xl;
		}
	}

	:global {
		.ab-menu-modal__gradient {
			@apply rounded-[30px] w-max relative top-10 left-2;
			@apply rounded-b-[30px] rounded-tl-none rounded-tr-[30px];
		}

		.ab-menu-modal__gradient--mobile {
			@apply rounded-b-[30px] rounded-t-none w-full relative top-0 left-0;
		}
	}
</style>
