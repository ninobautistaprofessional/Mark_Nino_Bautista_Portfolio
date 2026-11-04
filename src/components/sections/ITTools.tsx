import { motion } from 'framer-motion'
import { Filter, Search } from 'lucide-react'
import { itTools } from '../../data/it-tools'
import { ToolCard } from '../ui/ToolCard'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useState, useMemo } from 'react'

export function ITTools() {
  const reduced = useReducedMotion()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(itTools.map((t) => t.category)))],
    [],
  )

  const filteredTools = useMemo(() => {
    return itTools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  const reveal = (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 20 },
    whileInView: reduced ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  })

  const clearFilters = () => {
    setSearchQuery('')
    setActiveCategory('All')
  }

  return (
    <section id="it-tools" className="wrap py-16 scroll-mt-20">
      <div className="mb-7">
        <div className="text-accent font-bold tracking-[0.13em] uppercase text-xs">
          IT Tools & Technologies
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mt-2 mb-0">
          Tools I use every day
        </h2>
        <p className="text-muted mt-3 max-w-xl m-0">
          Software, platforms, and technical utilities I actively use in IT operations and web
          development work.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted" />
          <input
            type="text"
            placeholder="Search tools by name, category, or skill…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-line bg-panel/50 text-text placeholder-muted/50 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            const base =
              'px-4 py-2 rounded-xl text-xs font-semibold transition-colors border'
            const activeCls = 'bg-accent text-[#08201e] border-accent'
            const inactiveCls =
              'border-line bg-transparent text-muted hover:bg-white/5 hover:text-text'
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${base} ${isActive ? activeCls : inactiveCls}`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool, i) => (
            <motion.article
              key={tool.id}
              {...reveal(i * 0.05)}
              className="flex flex-col"
            >
              <ToolCard tool={tool} />
            </motion.article>
          ))
        ) : (
          <div className="col-span-3 text-center py-16">
            <Filter className="mx-auto size-8 text-muted/50 mb-3" />
            <p className="text-muted text-lg">No tools match your search and filter criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-line text-sm text-accent hover:bg-accent hover:text-[#08201e] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
