<script lang="ts">
  import githubIcon from "$lib/assets/github.svg?raw";
  import linkedinIcon from "$lib/assets/linkedin.svg?raw";
  import profilePhoto from "$lib/assets/pfp.jpg";
  import ImgHeader from "$lib/components/ImgHeader.svelte";
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
<div class="socials">
  <a
    href="https://github.com/digcheese"
    aria-label="GitHub"
    class="icon-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {@html githubIcon}

    <p class="footer">GitHub</p>
  </a>
  <a
    href="https://linkedin.com/in/jeffrey-x-1a9a3b272"
    aria-label="GitHub"
    class="icon-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {@html linkedinIcon}
    <p class="footer">LinkedIn</p>
  </a>
  <a
    href="mailto:jeffxue269@gmail.com"
    aria-label="email link"
    class="icon-link"
    target="_blank"
  >
    <p class="footer">jeffxue269@gmail.com</p></a
  >
</div>

<h2>Featured Projects</h2>

<style>
  .socials {
    display: flex;
    gap: 1rem; /* between each icon-text grouping */
  }
  .icon-link {
    display: flex;
    align-items: center;
    gap: 0.3rem; /* between icon and it's text*/
  }
  /* .icon-link:not(:first-child)::before {
        content: "|";
        color: var(--pale-slate);
        font-size: 50%;
        margin-right: 0.5rem;
    } */
  .icon-link :global(svg) {
    width: 1.2rem;
    height: 1.2rem;
    fill: currentColor;
    display: block;
    flex-shrink: 0;
  }
</style>
