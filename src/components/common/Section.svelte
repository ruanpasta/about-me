<section>
  <slot />
</section>

<style lang="scss">
  section {
    @apply justify-start;
    font-weight: 900;
    background-color: red;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-image: conic-gradient(#f3ec78, #af4261);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
</style>