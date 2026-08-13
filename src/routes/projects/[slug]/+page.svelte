<script lang="ts">
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();
</script>

<h1>{data.meta.title}</h1>
<data.content />
