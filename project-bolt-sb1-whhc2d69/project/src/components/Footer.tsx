import { MessageCircle, Instagram, MapPin } from 'lucide-react';
import { BUSINESS, whatsappLink } from '@/lib/constants';

const NAV_LINKS = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/10 bg-noir-950 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#hero"
              className="font-serif text-2xl font-semibold text-cream-100"
            >
              <span className="text-gradient-gold">Style</span> by Diva
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-200/60">
              {BUSINESS.tagline} — bringing flawless hairlines and head-turning
              looks to {BUSINESS.city}, {BUSINESS.country}. Book your
              appointment today and let us crown you in beauty.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/20 text-gold-300 transition-all hover:bg-gold-500/10 hover:border-gold-500/40"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/20 text-gold-300 transition-all hover:bg-gold-500/10 hover:border-gold-500/40"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-300">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200/60 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-300">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-cream-200/60">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400/80" />
                {BUSINESS.address}
              </li>
              <li className="text-sm text-cream-200/60">
                {BUSINESS.phoneDisplay}
              </li>
              <li className="text-sm text-cream-200/60">
                {BUSINESS.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gold-500/10 pt-6 text-center">
          <p className="text-xs text-cream-300/50">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
            reserved. Wig &amp; Ponytail Stylist in {BUSINESS.city},{' '}
            {BUSINESS.country}.
          </p>
        </div>
      </div>
    </footer>
  );
}
