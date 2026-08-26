<script module lang="ts">
  import type { ProjectMetadata } from "$lib/components/ProjectData";
  import icon from "$lib/projects/ubcsailbot_devops/icon.jpg";
  import polaris_gui from "$lib/projects/ubcsailbot_devops/polaris_gui.png";
  import gui_on_water from "$lib/projects/ubcsailbot_devops/onwater.jpg";

  export const metadata: ProjectMetadata = {
    slug: "ubcsailbot_devops",
    title: "DevOps at Sailbot",
    id: 98,
    description:
      "A summary of my contributions to the UBC Sailbot engineering design team as the Developer Operations Team Lead.",
    icon: icon,
    icon_alt:
      "POLARIS on the water for its official launch. Photo not taken by me.",
  };
</script>

<p>
  I joined UBC Sailbot in September 2025 as a member of the Develeoper
  Operations subteam and started working on optimizing development environments,
  deployment workflows, and tools used during on-water testing.
</p>

<img src={polaris_gui} alt="Screenshot of the POLARIS GUI." />

<p>
  The <a
    href="https://github.com/UBCSailbot/polaris-gui/"
    target="_blank"
    rel="noopener noreferrer">POLARIS GUI</a
  > began as side project vibecoded by the electrical team for system monitoring over
  WiFi when the boat was on water. As the GUI's requirements increased, I was introduced
  to the project to refactor it and create a basic development environment.
</p>

Here are the major changes:
<ul>
  <li>
    Refactored three 2500+ line python files into multiple relevant
    async-workers, UI, and CAN bus modules. Thereby defining the new project
    structure
  </li>
  <li>Introduced Github Actions + VScode workspace linting checks</li>
  <li>
    Added several Software Team features to the GUI, e.g.,
    launching/monitoring/stopping the software over SSH into a Docker container
  </li>
</ul>
<p>Bellow is the GUI in action on the chaseboat!</p>

<img
  src={gui_on_water}
  alt="The POLARIS GUI in action on the chaseboat. Taken by Pawan."
/>

<p>
  Closely related to the GUI is my work on optimizing the CI/CD pipelines for
  the Software team's codebase (<a
    href="https://github.com/UBCSailbot/sailbot_workspace/"
    target="_blank"
    rel="nopener noreferrer">sailbot_workspace</a
  >). This mostly came in the form of reassessing our approach to deploying
  software to the Raspberry Pi (RPI) on the boat.
</p>

<p>
  The initial approach was building our ROS2 application from source on the RPI
  but there were complaints of slow build times and thermal throttling.
  Consequently the Software Team Lead and I began investigating creating a
  'release' Docker image with only the prebuilt binaries that could be
  downloaded by the RPI. This potential solution was relatively easy to
  implement since we already had a 'base image' for our Devcontainer that
  contained the important dependencies and configs. Overall our new approach cut
  down deployment times from 30 minutes to 10.
</p>

<p>
  For the following months where on-water tests (OWTs) were sparse the new
  'release container approach' worked well. However as testing ramped up, there
  was demand from other team members that needed to make on the field bug fixes.
  Typically software is deployed to the RPI in the days leading up to a OWT
  where the boat is indoors and has a strong internet connection. Running a
  GitHub Actions workflow to build and then downloading a docker image during an
  OWT, when the boat is on the seashore with poor internet, becomes
  significantly more cumbersome.
</p>

<p>
  Thus I implemented a more robust solution. A second Docker image/container was
  created on the RPI that acted as a pseudo 'Devcontainer' with all the build
  tools, source files, and configs. This way during an OWT, the software could
  be rebuilt with any local bug fixes. With both approaches being availible, my
  team members could leverage the both of their benefits: software immediately
  ready to be tested & on-site flexibility to fix bugs during downtime when
  other systems are being tested. And as a plus one, the workflow of the POLARIS
  GUI operator on the chaseboat changes minimally when the Docker container is
  swapped.
</p>
