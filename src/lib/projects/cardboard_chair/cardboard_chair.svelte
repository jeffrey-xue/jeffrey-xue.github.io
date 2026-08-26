<script module lang="ts">
  import type { ProjectMetadata } from "$lib/components/ProjectData";
  import icon from "$lib/projects/cardboard_chair/icon.webp";
  import flatpac from "$lib/projects/cardboard_chair/flatpac.webp";
  import chair2 from "$lib/projects/cardboard_chair/chair2.webp";
  import prototype from "$lib/projects/cardboard_chair/prototype.webp";

  export const metadata: ProjectMetadata = {
    slug: "cardboard_chair",
    title: "Cardboard Chair",
    id: 0,
    description:
      "My design process and contributions to our team for the APSC 100 engineering design project: Build a chair with only cardboard.",
    icon: icon,
    icon_alt: "The final version of the chair.",
  };
</script>

<p>
  Over the span of about a month, me and four other students designed a
  cardboard chair. Our chair had to meet a variety of metrics from minimizing
  material & build time to maximizing the maximum supported weight & internal
  storage volume.
</p>

<img src={chair2} alt="The final version of the chair." />
<p>
  Above is the final version of the chair. The base and backrest were able to
  support the full weight of one of my group members.
</p>

<p>
  When prototyping, we eventually reached an X-shaped design that used slotting
  elements to join all the parts. This can be seen in the flat packed photo of
  the chair. Moving from the scale model prototype to the final version, small
  changes were made to some component dimensions alongside a locking mechanism
  to keep the seat in place (to meet a 'no loose parts requirement').
</p>

<div>
  <img src={prototype} alt="Scaled down prototype of our final design." />
  <img src={flatpac} alt="The flat packed version of our chair." />
</div>

<style>
  div img {
    width: 50%;
  }
  div {
    display: flex;
    gap: 1rem;
  }
</style>
