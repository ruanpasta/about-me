<script lang="ts">
  import { classMap } from "$helpers/classMap"

  export let show = false
  export let direction: 'bottom' | 'top' | 'left' | 'right' = 'bottom'
  export let filled = false
  export let backgroundColor = ''

  let externalClass = ''
  export { externalClass as class }
</script>

<div class={classMap({
  [externalClass]: true,
  gradient: show,
  'gradient--bottom': direction === 'bottom',
  'gradient--top': direction === 'top',
  'gradient--left': direction === 'left',
  'gradient--right': direction === 'right',
})}>
  <div class={classMap({
    overlaid: !filled,
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
  }

  .overlaid {
    @apply bg-[color:var(--color-background)];
  }
</style>
