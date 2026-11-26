import type { Site, Page, Links, Socials, SkillGroup } from "@types"

// Global
export const SITE: Site = {
  TITLE: "c0balt's Portfolio",
  DESCRIPTION: "Welcome to my portfolio, here is a showcase of my work.",
  AUTHOR: "c0balt60.",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "elmt.c0balt60@gmail.com",
    HREF: "mailto:elmt.c0balt60@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "c0balt60",
    HREF: "https://github.com/c0balt60"
  },
  {
    NAME: "Discord",
    ICON: "discord",
    TEXT: "c0balt60.",
    HREF: "https://discord.com/channels/@me",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "c0balt60",
    HREF: "https://x.com/c0balt60129129",
  },
]


// Skills: `carousel: true` puts the item in the home page icon carousel.
// `icon` is a file name in /public/icons (without .svg); omit it to show a monogram.
// `color` is the brand color used on hover.
export const SKILLS: SkillGroup[] = [
  {
    NAME: "Languages",
    ITEMS: [
      { name: "Luau", icon: "lua", color: "#00A2FF", carousel: true },
      { name: "TypeScript", icon: "typescript", color: "#3178C6", carousel: true },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E", carousel: true },
      { name: "HTML / CSS", icon: "html5", color: "#E34F26", carousel: true },
    ],
  },
  {
    NAME: "Roblox",
    ITEMS: [
      { name: "Roblox Studio", icon: "robloxstudio", color: "#00A2FF", carousel: true },
      { name: "Rojo", color: "#E13835", carousel: true },
      { name: "Lune", color: "#8B5CF6", carousel: true },
      { name: "Pesde", color: "#F59E0B" },
      { name: "darklua", color: "#6366F1" },
      { name: "Selene", color: "#F472B6" },
      { name: "React-lua", color: "#61DAFB", carousel: true },
      { name: "Fusion", color: "#22D3EE", carousel: true },
      { name: "Reflex", color: "#A78BFA" },
    ],
  },
  {
    NAME: "Web",
    ITEMS: [
      { name: "Astro", icon: "astro", color: "#FF5D01", carousel: true },
      { name: "SolidJS", icon: "solid", color: "#2C4F7C", carousel: true },
      { name: "Tailwind", icon: "tailwindcss", color: "#06B6D4", carousel: true },
      { name: "Node.js", icon: "nodedotjs", color: "#5FA04E", carousel: true },
    ],
  },
  {
    NAME: "Tools",
    ITEMS: [
      { name: "Git", icon: "git", color: "#F05032", carousel: true },
      { name: "GitHub", icon: "github", color: "#8B949E", carousel: true },
      { name: "VS Code", color: "#007ACC" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28", carousel: true },
    ],
  },
]
