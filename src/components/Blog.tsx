import type { CollectionEntry } from "astro:content"
import { createMemo, createSignal, For, Show } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import TagFilter, { toggleTag } from "@components/TagFilter"
import { formatDate, hasAllTags, readingTime } from "@lib/utils"

type Props = {
  tags: string[]
  data: CollectionEntry<"blog">[]
}

export default function Blog(props: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const posts = createMemo(() => props.data.filter((post) => hasAllTags(post.data.tags, filter())))
  // The newest post is featured while no filter is active.
  const featured = () => (filter().size === 0 ? posts()[0] : undefined)
  const rest = () => (featured() ? posts().slice(1) : posts())

  return (
    <div class="space-y-6">
      <TagFilter tags={props.tags} selected={filter()} onToggle={(tag) => setFilter(toggleTag(filter(), tag))} onClear={() => setFilter(new Set<string>())} />
      <Show when={featured()}>
        {(post) => (
          <a href={`/blog/${post().slug}`} class="group relative block card card-hover overflow-hidden p-6 md:p-8">
            <div aria-hidden="true" class="absolute -top-24 -right-24 size-64 rounded-full bg-sky-300/40 dark:bg-indigo-600/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <div class="relative">
              <div class="flex flex-wrap items-center gap-2 text-xs uppercase">
                <span class="chip normal-case border-sky-400/50 text-sky-700 dark:text-sky-300">Latest</span>
                <span>{formatDate(post().data.date)}</span>
                <span>· {readingTime(post().body)}</span>
              </div>
              <div class="mt-3 text-2xl font-bold text-black dark:text-white">{post().data.title}</div>
              <div class="mt-2">{post().data.summary}</div>
              <div class="mt-4 text-sm font-semibold text-black dark:text-white group-hover:translate-x-1 blend">Read post →</div>
            </div>
          </a>
        )}
      </Show>
      <div class="text-sm uppercase">
        Showing {posts().length} of {props.data.length} posts
      </div>
      <ul class="flex flex-col gap-3">
        <For each={rest()}>
          {(post) => (
            <li class="animate-fade-up">
              <ArrowCard entry={post} />
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}
