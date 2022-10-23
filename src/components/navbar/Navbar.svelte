<header
  bind:this={element}
  class={classMap({
    [className]: true,
    'type--primary': color === 'primary',
    'type--secondary': color === 'secondary',
  })}
  {...$$restProps}
>
  <slot />
</header>

<script lang="ts">
  import { classMap } from "../common/classMap";

  type $$Props = {
    class?: string;
    style?: string;
    color?: 'primary' | 'secondary';
    variant?: 'short' | 'fixed' | 'static' | 'standard';
  }

  let element: HTMLElement;
  export const getElement = () => element;  

  export let color: 'primary' | 'secondary' = 'primary'
  let className = '';
  export { className as class };
</script>

<style lang="scss">
  header {
    @apply bg-gray-300 p-4 justify-between;
  }

  .type {
    font-size: 20px;

    &--primary {
      background-color: red;
    }

    &--secondary {
      background-color: blue;
    }
  }
</style>