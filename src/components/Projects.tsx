import { createMemo, createSignal, For } from "solid-js"
import ProjectCard, { type ProjectCardData } from "@components/ProjectCard"
import TagFilter, { toggleTag } from "@components/TagFilter"
import { hasAllTags } from "@lib/utils"

type Props = {
  tags: string[]
  data: ProjectCardData[]
}

export default function Projects(props: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const projects = createMemo(() => props.data.filter((project) => hasAllTags(project.tags, filter())))

  return (
    <div class="space-y-6">
      <TagFilter tags={props.tags} selected={filter()} onToggle={(tag) => setFilter(toggleTag(filter(), tag))} onClear={() => setFilter(new Set<string>())} />
      <div class="text-sm uppercase">
        Showing {projects().length} of {props.data.length} projects
      </div>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <For each={projects()}>
          {(project) => (
            <li class="animate-fade-up">
              <ProjectCard project={project} />
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}
