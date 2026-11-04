import type { ITTool } from '../../types'
import { ExternalLink, Monitor, Smartphone, Wifi, Link, Ticket, Code, GitBranch, Github, Search, Server, Download, HardDrive, Terminal, Badge, Cloud, Eye, Activity, MessageCircle } from 'lucide-react'

const ICONS = {
  Monitor,
  Smartphone,
  Wifi,
  Link,
  Ticket,
  Code,
  GitBranch,
  Github,
  Search,
  Server,
  Download,
  HardDrive,
  Terminal,
  Badge,
  Cloud,
  Eye,
  Activity,
  MessageCircle,
} as const

interface ToolCardProps {
  tool: ITTool
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = ICONS[tool.icon as keyof typeof ICONS]

  return (
    <article className="bg-gradient-to-b from-white/5 to-transparent bg-panel border border-line rounded-card p-6 hover:border-accent/50 transition-colors group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="mt-0 mb-1 text-lg font-semibold text-text">{tool.name}</h3>
          <span className="inline-block border border-accent/30 text-accent rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-tight">
            {tool.category}
          </span>
        </div>
      </div>
      <p className="text-muted text-sm leading-relaxed mb-4">{tool.description}</p>
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-2">How I use it</h4>
        <p className="text-muted text-sm leading-relaxed m-0">{tool.usage}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-2">Technical skills</h4>
        <div className="flex flex-wrap gap-2">
          {tool.skills.map((s) => (
            <span key={s} className="px-2.5 py-1 border border-line bg-white/5 rounded-lg text-text text-xs">
              {s}
            </span>
          ))}
        </div>
      </div>
      {tool.website ? (
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:underline transition-colors"
        >
          Visit website <ExternalLink size={12} strokeWidth={1.5} />
        </a>
      ) : null}
    </article>
  )
}