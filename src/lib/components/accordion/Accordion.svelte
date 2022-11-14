<script lang="ts">
	import { Gradient, Row } from '../common'

  export let list: any[] =[{}, {}];
</script>

{#each list as item}
  <div class="accordion">
    <Gradient class="accordion__header" show={true} filled>
      <Row class="accordion__header__content">
        <h2>Senior Sistemas</h2>
        +
      </Row>
    </Gradient>
    <Row class="accordion__links" justify="start">
      <a href="">Links</a>
      <a href="">Links</a>
    </Row>
    <Row>
      <p>Content</p>
    </Row>
    <Row>
      <p>badges</p>
    </Row>
  </div>
{/each}

<style lang="scss">
  .accordion {
    @apply my-4;
    @apply text-[var(-color-text-highlighted)];
  }

  :global {
    .accordion__header {
      @apply rounded-lg;

      &__content {
        @apply p-4 font-semibold;
      }
    }

    .accordion__links {
      @apply mt-2;
    }
  }
</style>
