<div class={classMap({
  [className]: true,
  'ab-row': true,
  'ab-row--gradient': true,
})}>
  <slot />
</div>

<script lang="ts">
  import { classMap } from "../../helpers/classMap";

  let className = ''
  export { className as class }
</script>

<style lang="scss">
  .ab-row {
    @apply flex flex-row justify-between relative box-border w-full;

    // &--gradient {
    //   display: inline;
    //   background-image: radial-gradient(at 50% 100%, violet, indigo, blue, green, yellow, orange, red 75%);
    //   -webkit-background-clip: text;
    //   color: transparent;
    // }
  }
</style>