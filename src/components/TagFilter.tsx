import { For } from "solid-js"
import { cn } from "@lib/utils"

type Props = {
  tags: string[]
  selected: Set<string>
  onToggle: (tag: string) => void
  onClear: () => void
}

const pill = (active: boolean) => cn(
  "px-3 py-1 rounded-full text-sm border blend",
  active
    ? "bg-black dark:bg-white text-white dark:text-black border-transparent"
    : "border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:text-black dark:hover:text-white hover:border-sky-400/60 dark:hover:border-indigo-400/50",
)

export default function TagFilter(props: Props) {
  return (
    <div class="flex flex-wrap gap-2">
      <button type="button" onClick={props.onClear} class={pill(props.selected.size === 0)}>
        All
      </button>
      <For each={props.tags}>
        {(tag) => (
          <button type="button" aria-pressed={props.selected.has(tag)} onClick={() => props.onToggle(tag)} class={pill(props.selected.has(tag))}>
            {tag}
          </button>
        )}
      </For>
    </div>
  )
}

// Toggle a tag in a set, returning a new set (for Solid signals).
export function toggleTag(set: Set<string>, tag: string) {
  const next = new Set(set)
  if (!next.delete(tag)) next.add(tag)
  return next
}
