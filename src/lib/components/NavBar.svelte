<!-- TURN THIS COMPONENT INTO THE FULL HEADER since i want to have an icon photo for every project page -->

<script lang="ts">
  let { class: className = "" } = $props();
</script>

<nav class={className}>
  <a href="/"> <p class="footer">home</p></a>
  <a href="/projects"><p class="footer">projects</p></a>
  <a href="/"><p class="footer">misc.</p></a>
</nav>

<style>
  nav {
    display: flex;
    gap: 1rem;
  }
</style>
