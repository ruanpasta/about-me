<script lang="ts">
  import { Gradient } from "$lib/components"

  let externalClass = ''
  export { externalClass as class }
  export let name: string
  export let role: string
</script>

<Gradient class={externalClass}>
  <div class="presentation">
    <span class="name">{name}</span>
    <span class="role">{role}</span>
  </div>
</Gradient>


<style lang="scss">
  .presentation {
    @apply flex flex-col p-2;
    @apply font-semibold;
  }

  .name {
    @apply uppercase;
    @apply bg-gradient-to-r from-primary via-secondary to-tertiary;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .role {
    @apply self-end text-3xl;
  }
</style>
