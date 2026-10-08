import {
  Crown,
  Sparkles,
  Palette,
  Scissors,
  Heart,
  Droplet,
  MessageCircle,
  Clock,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES, whatsappLink } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ICON_MAP: Record<string, LucideIcon> = {
  crown: Crown,
  sparkles: Sparkles,
  palette: Palette,
  scissors: Scissors,
  heart: Heart,
  droplet: Droplet,
};

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-noir-900 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream-50 sm:text-5xl">
            Services & <span className="text-gradient-gold">Pricing</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
          <p className="mx-auto mt-6 max-w-2xl text-cream-200/70">
            From everyday glam to bridal perfection — choose your look and book
            instantly on WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Sparkles;
            return (
              <div
                key={service.name}
                className="reveal group relative overflow-hidden rounded-2xl border border-gold-500/10 bg-noir-800/80 p-7 transition-all duration-300 hover:border-gold-500/40 hover:bg-noir-800 hover:shadow-2xl hover:shadow-gold-500/10"
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-500/5 transition-all duration-500 group-hover:bg-gold-500/10" />

                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-noir-950">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-cream-50 sm:text-2xl">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gold-500/10 pt-5">
                    <div>
                      <span className="font-serif text-2xl font-bold text-gold-300">
                        {service.price}
                      </span>
                      <span className="ml-2 inline-flex items-center gap-1 text-xs text-cream-300/60">
                        <Clock className="h-3 w-3" />
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <a
                    href={whatsappLink(
                      `Hi, I'd like to book: ${service.name} (${service.price})`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book this service
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
