<section class={className}>
  <slot />
</section>

<script>
    let className = ''
    export { className as class }
</script>

<style lang="scss">
  section {
    @apply justify-start;
  }
</style>
