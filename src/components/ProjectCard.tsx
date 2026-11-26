import { createSignal, For, onMount } from "solid-js"
import { formatDate } from "@lib/utils"
import { vtName } from "@lib/vt"

export type ProjectCardData = {
  href: string
  title: string
  summary: string
  date: Date
  tags: string[]
  cover?: string
}

export default function ProjectCard(props: { project: ProjectCardData }) {
  let card!: HTMLAnchorElement
  let img: HTMLImageElement | undefined
  const [loaded, setLoaded] = createSignal(false)
  const slug = () => props.project.href.split("/").filter(Boolean).pop() ?? ""
  // Cached images can finish before onLoad is attached.
  onMount(() => img?.complete && setLoaded(true))

  // Subtle 3D tilt + cursor glow (skipped for reduced motion).
  function onPointerMove(e: PointerEvent) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg)`
    card.style.setProperty("--glow-x", `${x * 100}%`)
    card.style.setProperty("--glow-y", `${y * 100}%`)
  }

  function onPointerLeave() {
    card.style.transform = ""
  }

  return (
    <a ref={card} href={props.project.href} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} class="group relative flex flex-col h-full card card-hover overflow-hidden">
      <div
        style={props.project.cover ? { "view-transition-name": vtName("cover", slug()) } : undefined}
        class={`relative aspect-video overflow-hidden border-b border-black/10 dark:border-white/10 ${props.project.cover && !loaded() ? "animate-pulse bg-sky-200/60 dark:bg-white/10" : ""}`}
      >
        {props.project.cover ? (
          <img ref={img} src={props.project.cover} alt="" loading="lazy" onLoad={() => setLoaded(true)} class={`size-full object-cover transition duration-500 group-hover:scale-105 ${loaded() ? "opacity-100" : "opacity-0"}`} />
        ) : (
          <div class="size-full grid place-items-center bg-gradient-to-br from-sky-300 via-sky-200 to-indigo-300 dark:from-indigo-950 dark:via-slate-900 dark:to-black">
            <span class="text-4xl font-bold tracking-widest uppercase text-white/80 dark:text-white/30 transition-transform duration-500 group-hover:scale-110">
              {props.project.title.replace(/^[^:]*:\s*/, "").slice(0, 2)}
            </span>
          </div>
        )}
      </div>
      <div class="flex flex-col flex-1 p-4">
        <div class="text-xs uppercase opacity-75">{formatDate(props.project.date)}</div>
        <div style={{ "view-transition-name": vtName("title", slug()) }} class="font-semibold mt-1 text-black dark:text-white">{props.project.title}</div>
        <div class="text-sm line-clamp-2 mt-1">{props.project.summary}</div>
        <ul class="flex flex-wrap gap-1 mt-auto pt-3">
          <For each={props.project.tags}>{(tag) => <li class="chip">{tag}</li>}</For>
        </ul>
      </div>
      <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--glow-x,50%)_var(--glow-y,50%),rgba(56,189,248,0.18),transparent_60%)]" />
    </a>
  )
}
