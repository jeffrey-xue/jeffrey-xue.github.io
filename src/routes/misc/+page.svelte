<script lang="ts">
  import ImgHeader from "$lib/components/ImgHeader.svelte";
  let { data } = $props();

  const duck = String.raw`
       __
      ( '<
       )(
( ----'  '.
 (________;`;

  const waterStates = ["^~".repeat(15), "~^".repeat(15)];

  let waterIndex = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      waterIndex = (waterIndex + 1) % waterStates.length;
    }, 1000);

    return () => clearInterval(interval);
  });

  const water = $derived(waterStates[waterIndex]);
</script>

<ImgHeader heading="Misc" />

<div class="container">
  <div>
    <div class="duck">
      <pre>{duck}</pre>
    </div>
    <div class="water">{water}</div>
  </div>
  <div>
    <p>It's a pond with a duck</p>
    <p class="footer">Flashier things coming soon...</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    gap: 5rem;
  }
  .duck {
    display: flex;
    justify-content: center;
    font-family: monospace;
  }
  .water {
    font-family: monospace;
    white-space: nowrap;
    margin: 0;
    text-align: center;
  }
  pre {
    margin: 0;
  }
  p {
    margin: 0;
  }
</style>
