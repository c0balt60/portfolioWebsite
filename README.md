# c0balt's Portfolio

Personal portfolio for Roblox game development and web work, live at [cobalt60.web.app](https://cobalt60.web.app).
Sky themed: light mode is the day sky, dark mode is the night sky.

Built with [Astro](https://astro.build), [SolidJS](https://www.solidjs.com) and [Tailwind CSS](https://tailwindcss.com), hosted on Firebase.

## Development

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # type-check + build to dist/
```

## Editing content

All content lives in `src/content/` as Markdown.

| Folder      | What it is | Notes |
|-------------|------------|-------|
| `blog/`     | Blog posts | `draft: true` hides a post |
| `projects/` | Projects   | One folder per project, images go in the same folder |
| `work/`     | Work timeline entries | `dateEnd: "Now"` marks a current job |

### Project images

Put images next to the project's `index.md` and reference them in the frontmatter:

```yaml
cover: ./cover.png          # shown on the card and as the page banner
gallery:                    # thumbnails that open in a lightbox
  - ./screenshot1.png
  - ./screenshot2.png
```

Images are optimized automatically at build time. Inline images in the body (`![alt](./image.png)`) also work.

### Code blocks

Every fenced code block gets a header with the language name and a copy button. Consecutive blocks with the same `group` in the fence become one block with tabs:

````md
```luau tab="Luau" group="example"
print("hi")
```
```ts tab="TypeScript" group="example"
console.log("hi")
```
````

`tab` defaults to the language name. Blocks must be directly adjacent (no text between them).

### Work stack chips

```yaml
stack: ["Rojo", "Lune"]
packages: ["Fusion", "Promise"]
```

### Skills and the icon carousel

Edit `SKILLS` in `src/consts.ts`. Set `carousel: true` on an item to show it in the home page carousel.
`icon` is a file name in `public/icons/` (without `.svg`); items without one show a monogram.
Icons come from [Simple Icons](https://simpleicons.org), so any single-color SVG dropped into `public/icons/` works.
