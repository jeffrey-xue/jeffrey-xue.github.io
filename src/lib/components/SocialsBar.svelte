<script lang="ts">
  import githubIcon from "$lib/assets/github.svg?raw";
  import linkedinIcon from "$lib/assets/linkedin.svg?raw";
</script>

<div class="socials">
  <a
    href="https://github.com/jeffrey-xue"
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
  .icon-link :global(svg) {
    width: 1.2rem;
    height: 1.2rem;
    fill: currentColor;
    display: block;
    flex-shrink: 0;
  }
</style>
