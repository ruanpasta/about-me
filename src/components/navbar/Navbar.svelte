<nav
  bind:this={element}
  class={classMap({
    [className]: true,
  })}
  {...$$restProps}
>
  <slot />
</nav>

<script lang="ts">
  import { classMap } from "../../helpers/classMap";

  let element: HTMLElement;
  export const getElement = () => element;  

  let className = '';
  export { className as class };
</script>

<style lang="scss">
  nav {
    @apply p-4 justify-between;
  }
</style>