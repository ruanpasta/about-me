<script lang="ts">
  export let label: string;
</script>

<span class="badge">{label}</span>

<style lang="scss">
  .badge {
    @apply text-lg lowercase;
    @apply px-2 mr-2 rounded-2xl;
    @apply bg-[color:var(--color-text-secondary)];
  }
</style>
