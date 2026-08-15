<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main>
  {@render children()}
</main>

<footer>
  <hr />
  hi
</footer>

<style>
  main {
    max-width: 35rem;
    margin: 0 auto;
    padding: 4rem 1rem 0rem; /* top | left and right | bottom */
  }
  footer {
    position: fixed;
    bottom: 0rem;
    text-align: center;
    width: 100%;
  }
  footer hr {
    border: 1px solid var(--pale-slate);
  }
</style>
