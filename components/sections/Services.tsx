'use client'

import { motion } from 'framer-motion'
import {
  Home,
  Wrench,
  Paintbrush,
  Droplets,
  Zap,
  Hammer,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Construção Civil',
      description:
        'Construção de casas, edifícios e obras comerciais do zero, seguindo os mais altos padrões de qualidade.',
    },
    {
      icon: Wrench,
      title: 'Reformas Completas',
      description:
        'Reformas residenciais e comerciais, desde pequenos ajustes até transformações completas.',
    },
    {
      icon: Paintbrush,
      title: 'Acabamentos',
      description:
        'Pintura, revestimentos, pisos e todos os acabamentos para deixar seu espaço único.',
    },
    {
      icon: Droplets,
      title: 'Hidráulica',
      description:
        'Instalação e manutenção de sistemas hidráulicos, com profissionais qualificados.',
    },
    {
      icon: Zap,
      title: 'Elétrica',
      description:
        'Instalações elétricas seguras e modernas, seguindo todas as normas técnicas.',
    },
    {
      icon: Hammer,
      title: 'Alvenaria',
      description:
        'Serviços de alvenaria, estruturas e fundações com qualidade e durabilidade.',
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços em construção e reformas
            para atender todas as suas necessidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
