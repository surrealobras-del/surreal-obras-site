import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Team from '@/components/sections/Team'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Services />
      <Portfolio />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
