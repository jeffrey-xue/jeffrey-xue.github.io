<script module lang="ts">
  import type { ProjectMetadata } from "$lib/components/ProjectData";
  import icon from "$lib/projects/mp3player/icon.webp";

  export const metadata: ProjectMetadata = {
    slug: "mp3player",
    title: "Custom MP3 Player",
    id: 99,
    // TODO: specify that i made my own pcb when i eventually do that LOL
    description:
      "MP3 player made with my own firmware, electronic, and mechanical design. Uses an ESP32-S3 MCU and PCM5102 DAC",
    icon: icon,
    icon_alt: "LCD display showing 'Hello World!'",
  };
</script>

<p>
  Currently I have been writing <a
    href="https://github.com/jeffrey-xue/mp3player"
    target="_blank"
    rel="noopener noreferrer"
  >
    the firmware for my MP3 player
  </a>. To do so I'm using the Espressif IoT Development Framework in C/C++ with
  LVGL for the user interface.
</p>

<p>
  While writing and testing firmware, I've set up a temporary breadboard
  circuit. [IMAGE PENDING]. Found out the hard way after a day of debugging that
  high frequency signals and breadboards do not mix well.
</p>

<p>My next steps are:</p>

<ul>
  <li>The audio processing part of the firmware</li>
  <li>UI polish</li>
  <li>PCB design</li>
  <li>Electronics enclosure</li>
</ul>
