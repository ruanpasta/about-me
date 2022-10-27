<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	import WhiteBalanceSunny from 'svelte-material-icons/WhiteBalanceSunny.svelte';
	import MoonWaningCrescent from 'svelte-material-icons/MoonWaningCrescent.svelte';

	$: isSystemDark = false;
	onMount(
		() =>
			(isSystemDark =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
	);

	const getTheme = () => {
		if ($theme !== 'system') return $theme;
		if ($theme === 'system' && isSystemDark) return 'dark';
		return 'light';
	};

	const getComponent = getTheme() === 'light' ? WhiteBalanceSunny : MoonWaningCrescent;
	let component = getComponent;

	theme.subscribe((current) => component = current === 'light' ? WhiteBalanceSunny : MoonWaningCrescent);

	const handleOnClick = () => theme.set($theme === 'light' ? 'dark' : 'light');
</script>

<button class="icon" on:click={handleOnClick} on:keyup={() => {}}>
  <svelte:component this={component} />
</button>

<style lang="scss">
	.icon {
		@apply w-6 h-6 p-1 rounded-full;
		@apply text-[color:var(--color-background)] bg-[color:var(--color-text)];
	}
</style>
