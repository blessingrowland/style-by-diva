export const BUSINESS = {
  name: 'Style by Diva',
  tagline: 'Luxury Wig & Ponytail Studio',
  city: 'Ibadan',
  country: 'Nigeria',
  phoneDisplay: '0802 299 1567',
  phoneRaw: '2348022991567',
  email: 'hello@stylebydiva.com',
  address: 'Ibadan, Nigeria',
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  whatsappMessage: "Hi Style by Diva, I'd like to book a styling appointment.",
};

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? BUSINESS.whatsappMessage);
  return `https://wa.me/${BUSINESS.phoneRaw}?text=${text}`;
}

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    name: 'Custom Wig Installation',
    description:
      'Seamless, natural-looking wig installation tailored to your face shape and skin tone.',
    price: '₦15,000',
    duration: '1–2 hrs',
    icon: 'crown',
  },
  {
    name: 'Ponytail Styling',
    description:
      'Sleek, voluminous ponytails — from classy low ponies to bold high-fashion statement pieces.',
    price: '₦10,000',
    duration: '45 min',
    icon: 'sparkles',
  },
  {
    name: 'Wig Customisation & Colour',
    description:
      'Pluck, bleach, tint, and custom colour to make your wig look like it grew from your scalp.',
    price: '₦20,000',
    duration: '2–3 hrs',
    icon: 'palette',
  },
  {
    name: 'Frontal / Closure Install',
    description:
      'Flawless lace frontal and closure installs with invisible hairline and secure hold.',
    price: '₦18,000',
    duration: '1.5–2 hrs',
    icon: 'scissors',
  },
  {
    name: 'Bridal & Event Styling',
    description:
      'Show-stopping looks for your big day. Trials available. Group bookings for bridal parties.',
    price: '₦35,000',
    duration: '2–4 hrs',
    icon: 'heart',
  },
  {
    name: 'Wig Maintenance & Revival',
    description:
      'Wash, deep condition, and restore shine to your favourite wigs so they look brand new.',
    price: '₦8,000',
    duration: '1 hr',
    icon: 'droplet',
  },
];

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Adetutu Bakare',
    location: 'Ibadan',
    text: "Honestly the best wig install I've ever had in Ibadan. The hairline was so natural my husband didn't even realise it was a wig! Style by Diva is the truth.",
    rating: 5,
  },
  {
    name: 'Chioma Eze',
    location: 'Ring Road, Ibadan',
    text: "I came in for a ponytail for my sister's wedding and left feeling like a celebrity. The attention to detail is unmatched. I've already booked my next three appointments.",
    rating: 5,
  },
  {
    name: 'Fatima Okoye',
    location: 'Jericho, Ibadan',
    text: 'She customised and coloured my old wig and it looked better than when I first bought it. The studio is clean, professional, and so luxurious. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Blessing Adeyemi',
    location: 'Iwo Road, Ibadan',
    text: 'I was nervous about my bridal look but she made me feel so comfortable. My guests could not stop talking about my hair. Worth every naira!',
    rating: 5,
  },
  {
    name: 'Halima Sani',
    location: 'Agodi, Ibadan',
    text: 'Fast, clean, and incredibly skilled. I bring all my wigs here now for maintenance. They always come back looking brand new. The best in Ibadan, no cap.',
    rating: 5,
  },
  {
    name: 'Yetunde Williams',
    location: 'Cocoa House, Ibadan',
    text: 'The gold-standard of wig styling in Ibadan. The studio atmosphere is so chic and the results speak for themselves. I tell everyone about Style by Diva.',
    rating: 5,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'Do I need to book an appointment in advance?',
    answer:
      'Yes, all styling sessions are by appointment only. Tap the "Book Now" button to send a WhatsApp message and we will find a time that works for you. Same-day appointments are sometimes available — just ask!',
  },
  {
    question: 'Do you provide the wigs, or do I bring my own?',
    answer:
      'Both! You can bring your own wig or ponytail for installation and customisation. We also have a selection of premium wigs available for purchase — ask on WhatsApp for our current catalogue.',
  },
  {
    question: 'How long does a wig installation take?',
    answer:
      'A standard installation takes 1–2 hours. Custom colour and heavy customisation can take 2–3 hours. Bridal and event styling may take up to 4 hours depending on the complexity of the look.',
  },
  {
    question: 'Where is the studio located?',
    answer:
      'Our studio is in Ibadan, Nigeria. We will share the exact address and directions on WhatsApp once your appointment is confirmed.',
  },
  {
    question: 'Do you offer home service or bridal party bookings?',
    answer:
      'Yes! We offer home service within Ibadan for an additional fee, and we cater to bridal parties. Contact us on WhatsApp with your event details and group size for a custom quote.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, cash, and POS payments. A 50% deposit is required to secure your appointment slot, and the balance is paid after your session.',
  },
];

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

export const GALLERY: GalleryItem[] = [
  {
    image: '/images/WhatsApp_Image_2026-10-07_at_17.33.58.jpeg',
    title: 'Copper Red Wig Transformation',
    category: 'Custom Wig',
  },
  {
    image:
      'https://images.pexels.com/photos/30645898/pexels-photo-30645898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Afro Glam',
    category: 'Styling',
  },
  {
    image:
      'https://images.pexels.com/photos/28656263/pexels-photo-28656263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Gold Statement',
    category: 'Event Look',
  },
  {
    image:
      'https://images.pexels.com/photos/13221803/pexels-photo-13221803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Snow White Afro',
    category: 'Wig Custom',
  },
  {
    image:
      'https://images.pexels.com/photos/8331146/pexels-photo-8331146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Bold & Beautiful',
    category: 'Editorial',
  },
  {
    image:
      'https://images.pexels.com/photos/31065905/pexels-photo-31065905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Braided Updo',
    category: 'Styling',
  },
  {
    image:
      'https://images.pexels.com/photos/22619770/pexels-photo-22619770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Golden Hour',
    category: 'Glam',
  },
  {
    image:
      'https://images.pexels.com/photos/6923529/pexels-photo-6923529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Studio Session',
    category: 'Behind the Scenes',
  },
  {
    image:
      'https://images.pexels.com/photos/30591934/pexels-photo-30591934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Couture Finish',
    category: 'Editorial',
  },
];
