import type { Component } from "svelte";
import type { PageLoad } from "./$types";

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

export const load: PageLoad = () => {
  const projects = Object.values(modules).map((mod) => mod.metadata);
  return { projects };
};
