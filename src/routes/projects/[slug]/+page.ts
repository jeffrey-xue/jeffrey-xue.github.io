import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { ProjectModule } from "$lib/components/ProjectData.js";

const modules = import.meta.glob<ProjectModule>(
  "/src/lib/projects/*/*.svelte",
  {
    eager: true,
  },
);

export const entries = () => {
  return Object.values(modules).map((mod) => ({
    slug: mod.metadata.slug,
  }));
};

export const load: PageLoad = ({ params }) => {
  const path = `/src/lib/projects/${params.slug}/${params.slug}.svelte`;
  const mod = modules[path];

  if (!(path in modules)) error(404, "Project not found");
  return {
    content: mod.default,
    meta: mod.metadata,
  };
};
