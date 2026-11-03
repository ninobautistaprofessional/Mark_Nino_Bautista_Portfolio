import { Mail, Phone } from 'lucide-react'
import { profile } from '../../data/profile'

export function Contact() {
  return (
    <section id="contact" className="wrap py-16 scroll-mt-20">
      <div className="mb-7">
        <div className="text-accent font-bold tracking-[0.13em] uppercase text-xs">Let's connect</div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mt-2 mb-0">
          Looking for an IT professional?
        </h2>
        <p className="text-muted mt-3 max-w-xl m-0">I'm open to opportunities in {profile.openTo}</p>
      </div>
      <div className="bg-gradient-to-b from-white/5 to-transparent bg-panel border border-line rounded-card p-6 flex flex-col gap-4">
        <h3 className="mt-0 mb-2">Contact details</h3>
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-accent hover:underline">
          <Mail size={16} /> {profile.email}
        </a>
        <a href={`tel:${profile.phoneTel}`} className="inline-flex items-center gap-2 text-accent hover:underline">
          <Phone size={16} /> {profile.phone}
        </a>
        <p className="text-muted text-sm m-0 mt-2">
          Email: {profile.email} · Phone: {profile.phone}
        </p>
      </div>
    </section>
  )
}