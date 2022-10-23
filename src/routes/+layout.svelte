<script lang="ts">
  import "../app.css";
  import { Navbar, Row, Section } from '../components'

  let navbarComponent: Navbar;
  $: if (navbarComponent) console.log(navbarComponent)
</script>

<div class="app">
  <Navbar bind:this={navbarComponent} color="primary" class="cabrito">
    <Row>
      <Section>RP</Section>
      <Section>Icone</Section>
      <Section>Icone</Section>
    </Row>
  </Navbar>

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    @apply box-border m-0 p-0;
  }
</style>