import type { Site, Page, Links, Socials } from "@types"

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

// Store Page
export const STORE: Page = {
  TITLE: "Store",
  DESCRIPTION: "Purchase my services."
}

// Purchase Page
export const PURCHASE: Page = {
  TITLE: "Purchase",
  DESCRIPTION: "Finalize your purchases."
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
  {
    TEXT: "Store",
    HREF: "/store"
  }
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

