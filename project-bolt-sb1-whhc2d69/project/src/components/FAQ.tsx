import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS, whatsappLink } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FAQ() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-noir-900 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Good to Know
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream-50 sm:text-5xl">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="reveal overflow-hidden rounded-xl border border-gold-500/10 bg-noir-800/60 transition-colors hover:border-gold-500/25"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base font-semibold text-cream-50 sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-gold-300">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-cream-200/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="text-cream-200/70">Still have questions?</p>
          <a
            href={whatsappLink('Hi, I have a question about your services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-6 py-3 text-sm font-semibold text-gold-300 transition-all hover:bg-gold-500/10 hover:text-gold-200"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
