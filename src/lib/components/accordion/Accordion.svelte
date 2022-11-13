<script lang="ts">
	import { Gradient, Row } from '../common'

  export let list: any[] =[{}, {}];
</script>

{#each list as item}
  <div class="accordion">
    <Gradient class="accordion__header" show={true} filled>
      <Row class="accordion__header__content">
        <h2>Senior Sistemas</h2>
        Icone
      </Row>
    </Gradient>
    <Row class="accordion__links">
      <a href="">Links</a>
      <a href="">Links</a>
    </Row>
  </div>
{/each}

<style lang="scss">
  .accordion {
    @apply mb-4;

  }

  :global {
    .accordion__header {
      @apply rounded-lg;

      &__content {
        @apply p-4 font-semibold;
      }
    }

    .accordion__links {
      @apply justify-start;
    }
  }
</style>
