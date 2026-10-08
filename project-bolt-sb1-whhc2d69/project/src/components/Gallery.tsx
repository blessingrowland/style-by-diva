import { GALLERY } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * GALLERY PHOTOS — HOW TO REPLACE WITH YOUR OWN
 *
 * 1. Open src/lib/constants.ts
 * 2. Scroll to the GALLERY array near the bottom
 * 3. For each entry, replace the "image" value with your own photo URL
 *    or a local file path (e.g. "/photos/my-work-1.jpg" if you drop
 *    images into the public/ folder).
 * 4. Update "title" and "category" to describe each photo.
 * 5. You can add or remove entries freely — the grid adjusts automatically.
 *
 * Example entry:
 *   {
 *     image: '/photos/sleek-ponytail.jpg',
 *     title: 'Sleek Low Ponytail',
 *     category: 'Ponytail',
 *   }
 */

export default function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="bg-noir-950 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream-50 sm:text-5xl">
            A Gallery of <span className="text-gradient-gold">Gorgeous</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((item, index) => (
            <GalleryCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  index,
}: {
  item: (typeof GALLERY)[number];
  index: number;
}) {
  const isLarge = index === 0 || index === 5;

  return (
    <div
      className={`reveal group relative overflow-hidden rounded-xl bg-noir-800 ${
        isLarge ? 'col-span-2 row-span-2' : ''
      }`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      <img
        src={item.image}
        alt={`${item.title} — ${item.category} by Style by Diva in Ibadan`}
        className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
          isLarge ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'
        }`}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir-950/90 via-noir-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-xs font-medium uppercase tracking-widest text-gold-300">
          {item.category}
        </p>
        <h3 className="mt-1 font-serif text-lg font-semibold text-cream-50">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
