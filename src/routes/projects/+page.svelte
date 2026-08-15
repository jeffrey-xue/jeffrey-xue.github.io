<script lang="ts">
  import ImgHeader from "$lib/components/ImgHeader.svelte";
  import box from "$lib/assets/empty_box.svg";
  let { data } = $props();
</script>

<ImgHeader src={box} heading="Projects" />

<ul>
  {#each data.projects as project (project.slug)}
    <ul>
      <a href="/projects/{project.slug}">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </a>
    </ul>
  {/each}
</ul>

<style>
  ul {
    padding-left: 0;
  }
</style>
