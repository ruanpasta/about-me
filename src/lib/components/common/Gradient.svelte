<script lang="ts">
  import { classMap } from "$helpers/classMap"

  export let show = true
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
})}
  {...$$restProps}
>
  <div class={classMap({
    [bgClass]: true,
    overlaid: !filled && !bgClass,
    'gradient--rounded': position === 'all' && rounded
  })}
  >
    <slot />
  </div>
</div>

<style lang="scss" global>
  .gradient {
    @apply transition ease-in-out delay-150;
    @apply bg-gradient-to-r from-green-900 dark:from-orange via-green-500/50 dark:via-red/50 to-green-100/25 dark:to-blue/25;
    @apply hover:bg-green-900 dark:hover:bg-orange duration-500;

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
    @apply bg-white-400 dark:bg-black-700;
  }
</style>
