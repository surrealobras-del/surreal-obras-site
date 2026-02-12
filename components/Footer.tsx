'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/surrealobras/',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61587587356248',
      icon: Facebook,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCSkZqNfTNl_PSYA9UEZbyhw',
      icon: Youtube,
    },
  ]

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <Image
              src="https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/logo_black.png"
              alt="Surreal Construções e Reformas"
              width={150}
              height={60}
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Transformando sonhos em realidade através de construções e
              reformas de qualidade.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#obras"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Obras
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=R.+Cuiabá,+4570+-+Alto+Alegre,+Cascavel+-+PR,+85805-260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  R. Cuiabá, 4570 - Alto Alegre
                  <br />
                  Cascavel - PR, 85805-260
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <Link
                  href="tel:4599883622"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  (45) 9988-3622
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <Link
                  href="mailto:surrealobras@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  surrealobras@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Surreal Construções e Reformas. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
