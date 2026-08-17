<script lang="ts">
  import emptyBox from "$lib/assets/empty_box.svg";
  import type { ProjectMetadata } from "./ProjectData";
  let { metadata }: { metadata: ProjectMetadata } = $props();

  let src = $derived(metadata.icon ?? emptyBox);
  let alt = $derived(metadata.icon_alt ?? "A wireframe box with black border.");
  let title = $derived(metadata.title ?? "");
  let desc = $derived(metadata.description ?? "");
  let slug = $derived(metadata.slug);
  // let tags = $derived(metadata.tags ?? []);
</script>

<a href="/projects/{slug}">
  <img {src} {alt} />
  <div class="text">
    <h3>{title}</h3>
    <p class="small">{desc}</p>
    <!-- <ul>
      {#each tags as tag}
        <li>
          <p class="footer">
            {tag}
          </p>
        </li>
      {/each}
    </ul> -->
  </div>
</a>

<style>
  a {
    width: 100%;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 1px 1px 0 0;
    display: block;
    background-color: var(--alabaster-grey);
  }
  .text {
    border: 1px solid var(--pale-slate);
    border-radius: 0 0 3px 3px;
    min-height: 7rem;
    padding-top: 0.4rem;
  }
  h3,
  p {
    margin: 0;
    padding: 0.3rem;
  }
  /* ul {
    display: flex;
    gap: 1rem;
  }
  li {
    align-items: center;
  } */
</style>
