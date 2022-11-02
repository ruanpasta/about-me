<section class={externalClass}>
  <slot />
</section>

<script>
    let externalClass = ''
    export { externalClass as class }
</script>

<style lang="scss">
  section {
    @apply justify-start;
  }
</style>
