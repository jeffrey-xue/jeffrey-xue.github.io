<script lang="ts">
  import emptyBox from "$lib/assets/empty_box.svg";
  import type { ProjectMetadata } from "./ProjectData";
  let { metadata }: { metadata: ProjectMetadata } = $props();

  let src = $derived(metadata.icon ?? emptyBox);
  let alt = $derived(metadata.icon_alt ?? "A wireframe box with black border.");
  let title = $derived(metadata.title ?? "");
  let desc = $derived(metadata.description ?? "");
</script>

<main>
  <img {src} {alt} />
  <div class="text">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
</main>

<style>
  main {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 3px 3px 0 0;
    display: block;
  }

  .text {
    border: 1px solid var(--alabaster-grey);
    border-top: none;
    border-radius: 0 0 3px 3px;
    min-height: 8rem;
  }
  h3,
  p {
    margin: 0;
    padding: 0.3rem;
  }
</style>
