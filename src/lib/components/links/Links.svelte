<script lang="ts">
  import { classMap } from '$helpers/classMap'
  import GitHub from '$icons/github-icon.svelte'
  import Linkedin from '$icons/linkedin-icon.svelte'
  
  let externalClass = ''
  export { externalClass as class }
</script>

<div class={classMap({[externalClass]: true, links: true})}>
  <a href="https://github.com/ruanpasta" target="_blank" rel="noreferrer noopener">
    <GitHub />
  </a>
  <a href="https://www.linkedin.com/in/ruanpasta" target="_blank" rel="noreferrer noopener">
    <Linkedin />
  </a>
</div>

<style lang="scss">
  .links {
    @apply flex flex-col gap-2;
  }
</style>