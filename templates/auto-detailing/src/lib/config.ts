import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "San Diego Select",
    tagline: "Luxury Auto Detailing, Flawless Finish",
    phone: "(858) 330-0726",
    phoneHref: "tel:+18583300726",
    email: "info@sandiegoselect.com",
    address: "888 Prospect St La Jolla, CA 92037",
    city: "La Jolla",
    serviceAreas: ["Rancho Bernardo", "Lakeside", "Santa Luz", "East Lake", "4S Ranch", "Poway", "San Carlos", "Oceanside", "Del Mar", "El Cajon", "Carmel Valley", "Encinitas", "Rancho Santa Fe", "Solana Beach", "Pacific Beach", "La Mesa", "Coronado", "Chula Vista", "Hillcrest", "North Park", "Golden Hill", "Bankers Hill", "La Jolla", "Point Loma", "Ocean Beach", "Sunset Cliffs", "Mission Valley"],
    license: "Licensed & Insured",
    since: "2010",
    google_rating: "5.0",
    review_count: "150",
    emergency: false,
    theme: "ember",
    niche: "auto-detailing",
  },

  services: [
    { icon: "sparkles", title: "Full Detail", desc: "Experience a comprehensive interior and exterior rejuvenation for your vehicle.", urgent: false },
    { icon: "shield-check", title: "Ceramic Coating", desc: "Protect your paint with a durable, long-lasting ceramic coating for superior shine and defense.", urgent: false },
    { icon: "wrench", title: "Paint Correction", desc: "Eliminate swirl marks, scratches, and imperfections to restore your car's flawless finish.", urgent: false },
    { icon: "home", title: "Interior Detail", desc: "Deep clean and sanitize every surface, leaving your car's interior fresh and immaculate.", urgent: false },
    { icon: "truck", title: "Exotic Car Detailing", desc: "Specialized care for high-end vehicles, ensuring a pristine finish worthy of its luxury.", urgent: false },
    { icon: "scissors", title: "Vinyl, Window Tint, PPF", desc: "Expert application and removal of vinyl wraps, window tint, and paint protection film.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "La Jolla", stars: 5, text: "San Diego Select did an incredible full detail on my Porsche. It looked better than when I bought it! The team was professional, on time, and the results were absolutely stunning. Worth every penny for the luxury treatment." },
    { name: "Mark T.", location: "Rancho Santa Fe", stars: 5, text: "I had my classic Mustang's paint corrected and a ceramic coating applied by San Diego Select. The difference is night and day. The paint depth and shine are unbelievable, and the service was top-notch from start to finish. Highly recommend for any car enthusiast." },
    { name: "Jessica R.", location: "Del Mar", stars: 5, text: "My SUV's interior was a disaster with kids and pets, but San Diego Select worked magic. The stain removal and odor elimination were fantastic. It feels like a brand new car inside! Their mobile service was so convenient too." }
  ],

  trustBadges: [
    "Luxury Vehicle Experts", "Mobile Detailing Available", "Open 7 Days a Week", "5-Star Rated Service", "Premium Products Used", "Experienced Technicians"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Vehicles Detailed", suffix: "+", decimals: 0 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "sparkles", title: "Luxury Finish", desc: "We deliver a showroom-quality finish for every vehicle, specializing in high-end and exotic cars." },
    { icon: "truck", title: "Mobile Convenience", desc: "Our expert detailers come to you, providing premium services at your home or office." },
    { icon: "clock", title: "Open 7 Days a Week", desc: "Flexible scheduling to fit your busy lifestyle, ensuring your car is always pristine." },
    { icon: "award", title: "Certified Professionals", desc: "Our team is highly trained and experienced in the latest detailing techniques and products." },
    { icon: "shield-check", title: "Premium Products", desc: "We use only the highest quality, safest products for superior results and vehicle protection." },
    { icon: "heart", title: "Customer Satisfaction", desc: "Your complete satisfaction is our priority; we go above and beyond for every detail." }
  ],

  formServiceOptions: ["Full Detail", "Ceramic Coating", "Paint Correction", "Interior Detail", "Exotic Car Detailing", "Motorcycle Detailing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!