<script lang="ts">
  import { classMap } from "$helpers/classMap"

  export let show = false
  export let position: 'bottom' | 'top' | 'left' | 'right' | 'all' = 'bottom'
  export let filled = false
  export let backgroundColor = ''
  export let rounded = false

  let externalClass = ''
  export { externalClass as class }
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
    overlaid: !filled,
    'gradient--rounded': position === 'all' && rounded
  })}
  style={`background-color: ${backgroundColor};`}
  >
    <slot />
  </div>
</div>

<style lang="scss">
  .gradient {
    @apply bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-tertiary)];

    &:hover {
      @apply bg-gradient-to-r from-[color:var(--color-tertiary)] via-[color:var(--color-secondary)] to-[color:var(--color-primary)];
    }

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
    @apply bg-[color:var(--color-background)];
  }
</style>
