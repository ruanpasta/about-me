<div class={classMap({
  [className]: true,
  'ab-row': true,
  'ab-row--start': justify === 'start',
  'ab-row--between': justify === 'between',
  'ab-row--end': justify === 'end',
})}>
  <slot />
</div>

<script lang="ts">
  import { classMap } from "$helpers/classMap";

  let className = ''
  export { className as class }
  export let justify: 'start' | 'between' | 'end' = 'between'
</script>

<style lang="scss">
  .ab-row {
    @apply flex flex-wrap flex-row justify-between relative box-border w-full items-center;

    &--start {
      @apply justify-start;
    }
    &--between {
      @apply justify-between;
    }
    &--end {
      @apply justify-end;
    }
  }
</style>
