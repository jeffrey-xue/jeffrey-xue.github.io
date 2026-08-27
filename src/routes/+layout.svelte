<script lang="ts">
  import { page } from "$app/state";
  import favicon from "$lib/assets/favicon.webp";
  import SocialsBar from "$lib/components/SocialsBar.svelte";
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

  {#if page.url.pathname !== "/"}
    <footer>
      <hr />
      <div class="footer-contents">
        <p class="footer">This is the footer!</p>
        <SocialsBar />
      </div>
    </footer>
  {/if}
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
    padding: 4rem 1rem; /* top | left and right | bottom */
    width: 100%;
    box-sizing: border-box;
  }
  footer {
    flex-shrink: 0;
    width: 100%;
  }
  footer hr {
    border: 1px solid var(--alabaster-grey);
    margin: 0;
  }
  footer .footer-contents {
    max-width: 40rem;
    margin: 0 auto;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
</style>
