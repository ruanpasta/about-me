<div class={classMap({
  [className]: true,
  'ab-row': true,
  'ab-row--gradient': true,
})}>
  <slot />
</div>

<script lang="ts">
  import { classMap } from "$helpers/classMap";

  let className = ''
  export { className as class }
</script>

<style lang="scss">
  .ab-row {
    @apply flex flex-row justify-between relative box-border w-full;
  }
</style>