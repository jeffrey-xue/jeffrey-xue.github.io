<script module lang="ts">
  import type { ProjectMetadata } from "$lib/components/ProjectData";
  import icon from "$lib/projects/autonomous_claw/icon.webp";
  import claw from "$lib/projects/autonomous_claw/claw.webp";

  export const metadata: ProjectMetadata = {
    slug: "autonomous_claw",
    title: "Autonomous Claw",
    id: -1,
    description:
      "My contributions to our team for the APSC 101 engineering design challenge: Build an autonomous retrieval system.",
    icon: icon,
    icon_alt: "The completed version of the claw.",
  };
</script>

<p>
  The goal of this design challenge was to build an autonomous end effector that
  could pick up a variety of objects from foam cubes to cups and pencils. The
  end effector would then be attached to a pulley system we could raise/lower
  and move side to side.
</p>
<div class="outer">
  <img src={claw} alt="The claw again." style="width:10rem" />
  <div>
    <p>We had access to:</p>
    <ul>
      <li>One servo</li>
      <li>An Arduino Uno R3</li>
      <li>One Sonar sensor</li>
    </ul>
    <p>
      Ultimately settling on the design pictured on the right. Note that the
      claw is suspended from the battery & electronics panel. This prevented a
      common failure case we noticed where the claw touches the ground and
      detaches from the pulley.
    </p>

    <p>
      The algorithm used to acuate the claw was written in ArduinoIDE and is a
      simple timer based system. Upon reaching a certain distance from the floor
      a timer starts for closing the claw and vice verse when leaving that
      distance.
    </p>
  </div>
</div>

<style>
  div.outer {
    display: flex;
    gap: 1rem;
  }
</style>
