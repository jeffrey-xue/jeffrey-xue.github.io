<script lang="ts">
  import ImgHeader from "$lib/components/ImgHeader.svelte";
  import ProjectPreviewBlock from "$lib/components/ProjectPreviewBlock.svelte";
  let { data } = $props();
</script>

<ImgHeader heading="Projects" />
<ul>
  {#each data.projects as project (project.slug)}
    <a href="/projects/{project.slug}">
      <ProjectPreviewBlock metadata={project} />
    </a>
  {/each}
</ul>

<style>
  ul {
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    gap: 1rem;
  }
</style>
