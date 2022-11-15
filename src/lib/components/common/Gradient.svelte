<script lang="ts">
  import { classMap } from "$helpers/classMap"

  // TODO: change {show} default value to true
  export let show = false
  export let position: 'bottom' | 'top' | 'left' | 'right' | 'all' = 'bottom'
  export let filled = false
  export let rounded = false

  let externalClass = ''
  export { externalClass as class }
  export let bgClass = ''
</script>

<div class={classMap({
  [externalClass]: true,
  gradient: show,
  'gradient--bottom': position === 'bottom',
  'gradient--top': position === 'top',
  'gradient--left': position === 'left',
  'gradient--right': position === 'right',
  'gradient--all': position === 'all',
  'gradient--rounded': position === 'all' && rounded
})}>
  <div class={classMap({
    [bgClass]: true,
    overlaid: !filled && !bgClass,
    'gradient--rounded': position === 'all' && rounded
  })}
  >
    <slot />
  </div>
</div>

<style lang="scss">
  .gradient {
    @apply transition ease-in-out delay-150;
    @apply bg-gradient-to-r from-primary via-secondary/50 to-tertiary/25;
    @apply hover:bg-primary duration-500;

    &--bottom {
      @apply pb-0.5;
    }

    &--top {
      @apply pt-0.5;
    }
  
    &--left {
      @apply pl-0.5;
    }
  
    &--right {
      @apply pr-0.5;
    }

    &--all {
      @apply p-0.5;
    }

    &--rounded {
      @apply rounded-full
    }
  }

  .overlaid {
    @apply bg-background;
  }
</style>
