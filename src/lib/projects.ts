import { getImage } from "astro:assets"
import type { CollectionEntry } from "astro:content"
import type { ProjectCardData } from "@components/ProjectCard"

// Plain, serializable card data (with an optimized cover) for project cards.
export async function toProjectCard(project: CollectionEntry<"projects">): Promise<ProjectCardData> {
  const { title, summary, date, tags, cover } = project.data
  return {
    href: `/projects/${project.slug}`,
    title,
    summary,
    date,
    tags,
    cover: cover && (await getImage({ src: cover, width: 800, format: "webp" })).src,
  }
}
