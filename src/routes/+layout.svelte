<svelte:head>
  <meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme} />
  <link rel="stylesheet" href={`/theme/${$theme}.scss`} />
</svelte:head>

<script lang="ts">
  import "../app.css";
  import Header from "./Header.svelte";
  import { theme } from '$lib/stores/theme'
  import ThemeSwitch from "$lib/components/ThemeSwitch/ThemeSwitch.svelte";
</script>

<div class="app">
  <Header />
  <ThemeSwitch />

  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  .app {
    @apply box-border m-0 p-0 font-base bg-black h-full w-full;
    background: var(--color-lightest);
  }
</style>