<script lang="ts">
  import githubIcon from "$lib/assets/github.svg?raw";
  import linkedinIcon from "$lib/assets/linkedin.svg?raw";
  import profilePhoto from "$lib/assets/pfp.jpg";
</script>

<div class="header">
  <img src={profilePhoto} alt="My parents. Taken by me in Yellowstone" />
  <h1>Jeffrey Xue</h1>
  <nav>
    <a href="/"> <p class="footer">home</p></a>
    <a href="/projects"><p class="footer">projects</p></a>
    <a href="/"><p class="footer">misc.</p></a>
  </nav>
</div>
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
  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-rows: auto;
    column-gap: 0.8rem;
    row-gap: 0;
  }
  .header h1 {
    grid-column: 2;
    grid-row: 1;
    font-size: 3rem;
    margin: 0;
  }
  .header nav {
    grid-column: 2;
    grid-row: 2;
    margin: 0;
    display: flex;
    gap: 1rem;
  }
  .header img {
    grid-column: 1;
    grid-row: 1 / 3;
    height: 5rem;
  }
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
