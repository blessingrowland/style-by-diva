import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram } from 'lucide-react';
import { BUSINESS, whatsappLink } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="bg-noir-950 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream-50 sm:text-5xl">
            Book Your <span className="text-gradient-gold">Appointment</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
          <p className="mx-auto mt-6 max-w-2xl text-cream-200/70">
            Ready to transform your look? Reach out on WhatsApp for the fastest
            response, or use any of the details below.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="reveal flex flex-col gap-4">
            <ContactCard
              icon={<MapPin className="h-6 w-6" />}
              title="Visit the Studio"
              lines={[BUSINESS.address]}
            />
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              title="Call or Text"
              lines={[BUSINESS.phoneDisplay]}
            />
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title="Email Us"
              lines={[BUSINESS.email]}
            />
            <ContactCard
              icon={<Clock className="h-6 w-6" />}
              title="Opening Hours"
              lines={['Mon–Sat: 9:00 AM – 7:00 PM', 'Sunday: By appointment only']}
            />
          </div>

          <div className="reveal flex flex-col items-center justify-center rounded-2xl border border-gold-500/15 bg-noir-800/60 p-8 text-center sm:p-12">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/10 text-gold-300">
              <MessageCircle className="h-10 w-10" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-cream-50 sm:text-3xl">
              Fastest Response on WhatsApp
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
              Tap below to start a chat with a pre-filled booking message. We
              typically reply within 15 minutes during business hours.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-base font-semibold text-noir-950 shadow-xl shadow-gold-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/40"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Book Now on WhatsApp
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream-200/60 transition-colors hover:text-gold-300"
            >
              <Instagram className="h-4 w-4" />
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gold-500/10 bg-noir-800/60 p-5 transition-colors hover:border-gold-500/25 sm:p-6">
      <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/10 text-gold-300">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold text-cream-50">
          {title}
        </h3>
        {lines.map((line, i) => (
          <p key={i} className="mt-1 text-sm text-cream-200/70">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
