import type { PageLoad } from "./$types";
import type { ProjectModule } from "$lib/components/ProjectData";

const modules = import.meta.glob<ProjectModule>(
  "/src/lib/projects/*/*.svelte",
  {
    eager: true,
  },
);

export const load: PageLoad = () => {
  const projects = Object.values(modules).map((mod) => mod.metadata);
  return { projects };
};
