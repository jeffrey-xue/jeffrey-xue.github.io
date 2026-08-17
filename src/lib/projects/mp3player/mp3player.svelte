<script module lang="ts">
  import type { ProjectMetadata } from "$lib/components/ProjectData";
  import icon from "$lib/projects/mp3player/icon.png";

  export const metadata: ProjectMetadata = {
    slug: "mp3player",
    title: "Custom MP3 Player",
    id: 1,
    // TODO: specify that i made my own pcb when i eventually do that LOL
    description:
      "MP3 player made with my own firmware, electronic, and mechanical design. Uses an ESP32-S3 MCU and PCM5102 DAC",
    icon: icon,
    icon_alt: "LCD display showing 'Hello World!'",
  };
</script>

hi this is an example_project
