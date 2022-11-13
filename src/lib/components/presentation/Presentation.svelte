<script>
  import { Gradient } from "$lib/components"

  let externalClass = ''
  export { externalClass as class }
</script>

<Gradient class={externalClass} show={true}>
  <div class="presentation">
    <span class="name">RUAN PASTA</span>
    <span class="role">Software Engenier</span>
  </div>
</Gradient>


<style lang="scss">
  .presentation {
    @apply flex flex-col p-2;
    @apply font-semibold;
  }

  .name {
    @apply bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-tertiary)];
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .role {
    @apply self-end text-3xl;
  }
</style>
