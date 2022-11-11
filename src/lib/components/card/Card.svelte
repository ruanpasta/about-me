<script>
  import Gradient from "../common/Gradient.svelte"

</script>

<section class="card">
  <Gradient class="card__header" show={true}>
    <h1 class="card__header__title">This is a Card</h1>
  </Gradient>

  <slot />
</section>

<style lang="scss">
  :global {
    .card {
      @apply m-4 text-xl;
      
      &__header {
        @apply mb-4;
      }

      &__header__title {
        @apply text-right text-3xl pb-2;
      }
    }
  }
</style>