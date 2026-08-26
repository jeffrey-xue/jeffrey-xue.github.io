<script lang="ts">
  import ImgHeader from "$lib/components/ImgHeader.svelte";

  let { data } = $props();
</script>

<ImgHeader
  src={data.meta.icon}
  alt={data.meta.icon_alt}
  heading={data.meta.title}
/>

<div>
  <p class="small desc">
    {data.meta.description}
  </p>
  <br />
  <data.content />
</div>

<style>
  div {
    padding-top: 1rem;
  }
</style>
