<script lang="ts">
  import "../app.css";
  import Header from "./Header.svelte";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  .app {
    @apply box-border m-0 p-0 font-base bg-black h-full w-full;
  }
</style>