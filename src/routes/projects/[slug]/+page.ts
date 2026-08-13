import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

import type { Component } from "svelte";

interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
}

interface ProjectModule {
  default: Component;
  metadata: ProjectMetadata;
}

const modules = import.meta.glob<ProjectModule>("/src/lib/content/*.svelte", {
  eager: true,
});

export const entries = () => {
  return Object.values(modules).map((mod) => ({
    slug: mod.metadata.slug,
  }));
};

export const load: PageLoad = ({ params }) => {
  const path = `/src/lib/content/${params.slug}.svelte`;
  const mod = modules[path];

  if (!(path in modules)) error(404, "Project not found");
  return {
    content: mod.default,
    meta: mod.metadata,
  };
};
