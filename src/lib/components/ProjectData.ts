import type { Component } from "svelte";

export interface ProjectMetadata {
  slug: string;
  title: string;
  id?: number;
  description: string;
  icon?: string;
  icon_alt?: string;
  tags?: string[];
}

export interface ProjectModule {
  default: Component;
  metadata: ProjectMetadata;
}
