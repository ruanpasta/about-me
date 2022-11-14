<script lang="ts">
	import { Gradient, Row } from '../common'

  export let title: string
  export let subTitle: string
  export let opened = false
  export let onClick = () => {}

  $: icon = opened ? '-' : '+'
</script>

<div class="accordion">
  <svelte:element
    this="button"
    class="accordion__header"
    on:click={onClick}
  >
    <Gradient class="accordion__header__gradient" show={true} filled>
      <Row class="accordion__header__content">
        <h2>{title}</h2>
        <Row class="accordion__header__content__subsection" justify="end">
          <h3>{subTitle}</h3>
          {icon}
        </Row>
      </Row>
    </Gradient>
  </svelte:element>
  {#if opened}
    <slot />
  {/if}
</div>

<style lang="scss">
  .accordion {
    @apply my-4;
    @apply text-[var(-color-text-highlighted)];
  }

  :global {
    .accordion__header {
      @apply cursor-pointer w-full;

      &__gradient {
        @apply rounded-lg;
      }

      &__content {
        @apply p-4 font-semibold;
      }

      &__content__subsection {
        @apply max-w-[20%];
      }

      &__content__subsection h3 {
        @apply text-base mr-2;
      }
    }

    .accordion__links {
      @apply mt-2;
    }
  }
</style>
