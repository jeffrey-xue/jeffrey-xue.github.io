<script lang="ts">
  import profilePhoto from "$lib/assets/pfp.jpg";
  import ImgHeader from "$lib/components/ImgHeader.svelte";
  import ProjectPreviewBlock from "$lib/components/ProjectPreviewBlock.svelte";
  import SocialsBar from "$lib/components/SocialsBar.svelte";

  import { metadata as project1Metadata } from "$lib/projects/ctl-overlay/ctl-overlay.svelte";
  import { metadata as project2Metadata } from "$lib/projects/mp3player/mp3player.svelte";
</script>

<ImgHeader
  heading="Jeffrey Xue"
  src={profilePhoto}
  alt="My parents. Taken by me in Yellowstone"
/>

<p>
  Hi! I'm studying Engineering Physics at the University of British Columbia and
  based in the Lower Mainland. My technical interests are systems engineering,
  robotics, and embeded systems.
</p>

<SocialsBar />

<div class="featured-projects-heading">
  <h2>Featured Projects</h2>
  <a href="/projects"> <p class="footer projects">view all</p></a>
</div>
<div class="featured-projects">
  <ProjectPreviewBlock metadata={project1Metadata} />
  <ProjectPreviewBlock metadata={project2Metadata} />
</div>

<style>
  .footer.projects {
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }
  .featured-projects {
    display: flex;
    gap: 1rem;
  }
  .featured-projects-heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
</style>
