<script lang="ts">
  import Gradient from "../common/Gradient.svelte"

  export let onClick = () => {}

  let invertedGradient = false
</script>

<button
  class="button"
  on:click={onClick}
>
  <Gradient class="button__container" show={true}>
    <div class="button__container__content">
      <slot />
    </div>
  </Gradient>
</button>

<style lang="scss">
  .button {
    @apply mr-4 my-4;

    &__container {
      @apply mb-4;
    }

    &__container__content {
      @apply pb-2;

      &:hover {
        @apply font-bold;
      }
    }
  }
</style>
