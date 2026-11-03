import { motion } from 'framer-motion'
import { BookOpen, Globe, Headset, Network, ShoppingCart, Server, Wifi } from 'lucide-react'
import { skillGroups } from '../../data/skills'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const ICONS = {
  Wifi,
  Server,
  ShoppingCart,
  Headset,
  Network,
  Globe,
  BookOpen,
} as const

export function Skills() {
  const reduced = useReducedMotion()
  return (
    <section id="skills" className="wrap py-16 scroll-mt-20">
      <div className="mb-7">
        <div className="text-accent font-bold tracking-[0.13em] uppercase text-xs">Technical toolkit</div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mt-2 mb-0">Skills & technologies.</h2>
        <p className="text-muted mt-3 max-w-xl m-0">Core competencies in IT infrastructure, network administration, web hosting, systems support, and IT procurement.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => {
          const Icon = ICONS[g.icon as keyof typeof ICONS]
          return (
            <motion.article
              key={g.title}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-gradient-to-b from-white/5 to-transparent bg-panel border border-line rounded-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="mt-0 mb-0 text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="space-y-2 list-disc list-inside text-muted text-sm leading-relaxed">
                {g.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}