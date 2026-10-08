import { MessageCircle, ChevronDown } from 'lucide-react';
import { BUSINESS, whatsappLink } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[680px] items-center justify-center overflow-hidden sm:min-h-screen"
    >
      <div className="absolute inset-0">
        <img
          src="/images/WhatsApp_Image_2026-10-07_at_17.33.58.jpeg"
          alt="Hand-styled copper red wig on a mannequin by Style by Diva in Ibadan"
          width={720}
          height={1280}
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950/80 via-noir-950/60 to-noir-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="animate-fade-down mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2 backdrop-blur-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-200">
            {BUSINESS.city}'s Premier Wig Stylist
          </span>
        </div>

        <h1 className="animate-fade-up font-serif text-4xl font-semibold leading-tight text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl">
          Crown Yourself in
          <span className="block text-gradient-gold">Gilded Beauty</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-200/80 sm:text-lg md:text-xl"
          style={{ animationDelay: '0.15s' }}
        >
          Luxury wig installation, ponytail styling, and custom colour services
          in the heart of {BUSINESS.city}, {BUSINESS.country}. Flawless hairlines.
          Head-turning looks. Every single time.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-base font-semibold text-noir-950 shadow-xl shadow-gold-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/40"
          >
            <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Book Your Appointment
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-cream-300/30 px-8 py-4 text-base font-medium text-cream-100 transition-all duration-300 hover:border-gold-300/60 hover:bg-gold-500/10 hover:text-gold-200"
          >
            View Our Work
          </a>
        </div>


      </div>

      <a
        href="#gallery"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-300/60 transition-colors hover:text-gold-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

