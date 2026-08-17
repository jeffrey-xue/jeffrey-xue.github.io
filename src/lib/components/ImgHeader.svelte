<!-- USE @sveltejs/enhanced-img for image optimization and also specifying mobile sizes -->
<script lang="ts">
  import emptyBox from "$lib/assets/empty_box.svg";
  let {
    src = emptyBox,
    alt = "",
    heading,
  }: { src?: string; alt?: string; heading: string } = $props();
</script>

<main>
  <img {src} {alt} />
  <h1>{heading}</h1>
  <nav>
    <a href="/"> <p class="footer">home</p></a>
    <a href="/projects"><p class="footer">projects</p></a>
    <a href="/misc"><p class="footer">misc.</p></a>
  </nav>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-rows: auto;
    column-gap: 0.8rem;
    row-gap: 0;
  }
  h1 {
    grid-column: 2;
    grid-row: 1;
    margin: 0;
  }
  nav {
    grid-column: 2;
    grid-row: 2;
    margin: 0;
    display: flex;
    gap: 1rem;
  }
  img {
    grid-column: 1;
    grid-row: 1 / 3;
    height: 5rem;
  }
</style>
