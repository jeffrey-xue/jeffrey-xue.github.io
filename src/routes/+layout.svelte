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

<style>
  main {
    max-width: 35rem;
    margin: 0 auto;
    padding: 4rem 1rem 0rem; /* top | left and right | bottom */
  }
</style>
