<script lang="ts">
  import { classMap } from '$helpers/classMap';
	import Menu from 'svelte-material-icons/Menu.svelte'

  let showMenu = false

  const init = (el: any) => {
    el.focus()
  }
</script>

<svelte:window  />

<div class={classMap({
  menu: true,
  menu__list: showMenu
})} on:mouseleave={() => showMenu = false} use:init >
  <button type="button" title="menu" on:click={() => showMenu = !showMenu}>
    <Menu size={30}  /> 
  </button>
</div>

<style lang="scss">
.menu {
  @apply text-[color:#810A0B];
}

.menu__list {
  @apply fixed top-0 left-0 w-full p-4;
  @apply bg-[color:var(--color-intermediate-background)];
}
</style>