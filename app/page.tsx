import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Team from '@/components/sections/Team'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Surreal Construções e Reformas",
    "image": "https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/logo_black.png",
    "description": "Empresa especializada em construção e reformas em Cascavel, PR. 15 anos de experiência transformando sonhos em realidade.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Cuiabá, 4570 - Alto Alegre",
      "addressLocality": "Cascavel",
      "addressRegion": "PR",
      "postalCode": "85805-260",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-24.9575",
      "longitude": "-53.4592"
    },
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://surreal-obras-site.vercel.app",
    "telephone": "+554599883622",
    "email": "surrealobras@gmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/surrealobras/",
      "https://www.facebook.com/profile.php?id=61587587356248",
      "https://www.youtube.com/channel/UCSkZqNfTNl_PSYA9UEZbyhw"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Cascavel"
    },
    "serviceType": ["Construção", "Reformas", "Arquitetura", "Engenharia"]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Team />
        <Services />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
