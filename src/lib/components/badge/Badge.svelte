<script lang="ts">
  export let label: string;
</script>

<span class="badge">{label}</span>

<style lang="scss" global>
  .badge {
    @apply text-lg lowercase text-black-700 dark:text-white-400;
    @apply px-2 rounded-2xl;
    @apply bg-gray-500 dark:bg-gray-100;
  }
</style>
