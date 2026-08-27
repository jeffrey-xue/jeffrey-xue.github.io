<script module lang="ts">
  import type { ProjectMetadata } from "$lib/components/ProjectData";
  import icon from "$lib/projects/ctl-overlay/ctllogo.webp";
  import screenshot from "$lib/projects/ctl-overlay/screenshot.webp";

  export const metadata: ProjectMetadata = {
    slug: "ctl-overlay",
    title: "CTL Overlay",
    id: 100,
    description:
      "OBS overlay for the Collegiate Tetris League. A configurable browser source built with ReactJS.",
    icon: icon,
    icon_alt: "The CTL logo: 'Colette'",
  };
</script>

<p>
  The purpose of the CTL overlay is to displays player avatars and stats,
  alongside animations, during Collegiate Tetris League match livestreams. As a
  part of the organizing team for CTL, I have taken on the overlay for future
  maintenance and new features as the tournament format changes.
</p>

<img src={screenshot} alt="Stream footage with the overlay in action." />

<p>
  Above is a livestream screenshot of the overlay (the player icons and stats)
  in action.
</p>

<p>
  In prepration for the upcoming 2027 season, I have created a Devcontainer and
  fixed some font issues. The main features that I need to implement are: a
  system for displaying 'first-pick bans' alongside many quality of life
  improvements.
</p>
