<script lang="ts">
  export let label: string;
</script>

<span class="badge">{label}</span>

<style lang="scss">
  .badge {
    @apply text-lg lowercase text-default;
    @apply px-2 rounded-2xl;
    @apply bg-gray;
  }
</style>
