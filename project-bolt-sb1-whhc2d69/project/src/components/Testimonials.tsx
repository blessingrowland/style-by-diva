import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="bg-noir-950 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Client Love
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream-50 sm:text-5xl">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal relative rounded-2xl border border-gold-500/10 bg-noir-800/60 p-7 transition-all duration-300 hover:border-gold-500/30 hover:bg-noir-800"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold-500/15" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-300 text-gold-300"
                  />
                ))}
              </div>

              <p className="relative text-sm leading-relaxed text-cream-200/80">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-6 border-t border-gold-500/10 pt-5">
                <p className="font-serif text-lg font-semibold text-cream-50">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gold-400/80">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
