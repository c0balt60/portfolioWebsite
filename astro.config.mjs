import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import { codeMeta } from "./src/lib/shikiCodeMeta.mjs"

// https://astro.build/config
export default defineConfig({
  site: "https://cobalt60.web.app",
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      transformers: [codeMeta],
    },
  },
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})