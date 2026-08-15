<script lang="ts">
  import ImgHeader from "$lib/components/ImgHeader.svelte";

  let { data } = $props();
</script>

<ImgHeader
  src={data.meta.icon}
  alt={data.meta.icon_alt}
  heading={data.meta.title}
/>

<main>
  <data.content />
</main>

<style>
  main {
    padding-top: 1rem;
  }
</style>
