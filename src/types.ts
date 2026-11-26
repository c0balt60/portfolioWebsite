export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export type Skill = {
  name: string
  icon?: string
  color: string
  carousel?: boolean
}

export type SkillGroup = {
  NAME: string
  ITEMS: Skill[]
}
