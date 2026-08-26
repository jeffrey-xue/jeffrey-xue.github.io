<!-- USE @sveltejs/enhanced-img for image optimization and also specifying mobile sizes -->
<script lang="ts">
  import emptyBox from "$lib/assets/empty_box.svg";
  let {
    src = emptyBox,
    alt = "",
    heading,
  }: { src?: string; alt?: string; heading: string } = $props();
</script>

<header>
  <img {src} {alt} />
  <h1>{heading}</h1>
  <nav>
    <p class="footer">
      <a href="/"> home</a>
      <a href="/projects">projects</a>
      <a href="/misc">misc.</a>
    </p>
  </nav>
</header>

<style>
  header {
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
    align-self: end;
  }
  img {
    grid-column: 1;
    grid-row: 1 / 3;
    height: 5rem;
  }
</style>
