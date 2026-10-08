import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/constants';

const NAV_LINKS = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-noir-950/95 backdrop-blur-md shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#hero"
          onClick={closeMenu}
          className="font-serif text-xl font-semibold tracking-wide text-cream-100 sm:text-2xl"
        >
          <span className="text-gradient-gold">Style</span> by Diva
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-cream-200/80 transition-colors duration-300 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-noir-950 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-cream-100 transition-colors hover:text-gold-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 bg-noir-900/98 px-5 pb-6 pt-2 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider text-cream-200/80 transition-colors hover:bg-gold-500/10 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-noir-950"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
