export type Theme = 'light' | 'dark'

export interface Project {
  id: string
  title: string
  tag: string
  description: string
  iconLabel: string
  skills: string[]
  liveUrl: string
  contributionNote: string
}

export interface SkillGroup {
  title: string
  icon: string
  skills: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  duration: string
  techSupport: string[]
  infrastructure: string[]
}

export interface EducationItem {
  degree: string
  school: string
  note: string
}

export interface QuickStat {
  value: string
  label: string
}

export interface ContactPayload {
  name: string
  email: string
  subject?: string
  message: string
}

export interface ContactResult {
  ok: boolean
  message: string
}

export interface ITTool {
  id: string
  name: string
  category: string
  description: string
  usage: string
  skills: string[]
  website: string
  icon: string
}

export type ToolCategory =
  | 'Remote Access & Support'
  | 'Network Management & Diagnostics'
  | 'IT Service & Ticketing'
  | 'Development & Version Control'
  | 'Virtualization & OS Deployment'
  | 'System Administration'
  | 'Identity & Credential Management'
  | 'Cloud & Collaboration'
  | 'Security & Surveillance'