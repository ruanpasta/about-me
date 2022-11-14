<svelte:head>
  <meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme} />
  <link rel="stylesheet" href={`/theme/${$theme}.scss`} />
</svelte:head>

<script lang="ts">
  import "../app.scss";
  import Header from "./Header.svelte";
  import { theme } from '$lib/stores/theme'
  import { Links } from "$lib/components"
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <Links class="links" />
  </footer>
</div> 

<style lang="scss">
  .app {
    @apply box-border m-0 p-0 h-full w-full;
  }

  :global(.links) {
    @apply fixed bottom-2 left-2 p-2 rounded-2xl bg-[color:var(--color-background)];
  }

</style>
