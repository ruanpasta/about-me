<div class={classMap({
  [className]: true,
  'ab-row': true,
  'ab-row--start': justify === 'start',
  'ab-row--between': justify === 'between',
  'ab-row--end': justify === 'end',
  'ab-row--center': justify === 'center',
})}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { classMap } from "$helpers/classMap";

  let className = ''
  export { className as class }
  export let justify: 'start' | 'between' | 'end' | 'center' = 'between'
</script>

<style lang="scss" global>
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

    &--center {
      @apply justify-center;
    }
  }
</style>
