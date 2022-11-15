<script lang="ts">
	import { Gradient, Row } from '../common'
	import { classMap } from '$helpers/classMap'

  export let link = false
  export let onClick = () => {}

  let externalClass = ''
  export { externalClass as class }
</script>

<button
  type="button"
  class={classMap({
    [externalClass]: true,
    'about-me-button': true
  })}
  on:click={onClick}
  on:keydown={() => {}}
>
  <Gradient class="about-me-button__container" show={!link}>
    <div class="about-me-button__container__content">
      <Row justify="start">
        <slot name="leftIcon" />
        <slot />
      </Row>
    </div>
  </Gradient>
</button>

<style lang="scss">
  :global {
    .about-me-button {
      @apply mr-4;

      &__container__content {
        @apply pb-2;
  
        &:hover {
          @apply font-bold;
        }
      }
    }
  }
</style>
