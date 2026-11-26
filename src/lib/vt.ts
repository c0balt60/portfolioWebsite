// Valid, per-slug view-transition-name (e.g. project-cover-my-app).
export const vtName = (kind: "cover" | "title", slug: string) => `project-${kind}-${slug}`.replace(/[^a-zA-Z0-9_-]/g, "-")
