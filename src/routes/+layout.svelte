<svelte:head>
  <meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme} />
  <link rel="stylesheet" href={`/theme/${$theme}.scss`} />
</svelte:head>

<script lang="ts">
  import "../app.css";
  import Header from "./Header.svelte";
  import { theme } from '$lib/stores/theme'
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>
</div> 

<style lang="scss">
  .app {
    @apply box-border m-0 p-0 h-full w-full;
  }
</style>
