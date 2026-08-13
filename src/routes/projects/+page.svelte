<script lang="ts">
  let { data } = $props();
</script>

<h1>Projects</h1>

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
