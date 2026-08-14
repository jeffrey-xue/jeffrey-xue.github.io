<script lang="ts">
  import NavBar from "$lib/components/NavBar.svelte";

  let { data } = $props();
</script>

<header>
  <h1>Projects</h1>
  <NavBar />
</header>

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
  h1 {
    margin: 0;
  }
</style>
