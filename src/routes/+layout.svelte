<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="page">
  <main>
    {@render children()}
  </main>

  <footer>
    <hr />
    <p class="footer">hi</p>
  </footer>
</div>

<style>
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1 0 auto;
    max-width: 40rem;
    margin: 0 auto;
    padding: 4rem 1rem 0rem; /* top | left and right | bottom */
    width: 100%;
    box-sizing: border-box;
  }
  footer {
    flex-shrink: 0;
    text-align: center;
    width: 100%;
  }
  footer hr {
    border: 1px solid var(--pale-slate);
  }
</style>
