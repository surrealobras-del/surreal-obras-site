'use client'

import { motion } from 'framer-motion'
import { Building2, Award, Users, Target, Handshake } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const About = () => {
  const features = [
    {
      icon: Building2,
      title: '15 Anos de Experiência',
      description: 'Mais de uma década e meia transformando sonhos em realidade',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Compromisso com a excelência em cada projeto realizado',
    },
    {
      icon: Users,
      title: 'Equipe Profissional',
      description: 'Time especializado e dedicado ao sucesso do seu projeto',
    },
    {
      icon: Handshake,
      title: 'Parceria Kazavel',
      description: 'Trabalhamos em parceria com a imobiliária Kazavel',
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/sobre_nos_site.png"
              alt="Sobre a Surreal Construções e Reformas"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Transformando Sonhos em Realidade
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com <strong className="text-primary">15 anos de experiência</strong> no mercado, a Surreal Construções e Reformas é uma empresa especializada em transformar espaços e realizar sonhos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trabalhamos com <strong className="text-primary">reformas e construção</strong>, oferecendo soluções completas sempre priorizando qualidade, prazo e satisfação do cliente.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Temos o orgulho de trabalhar em <strong className="text-primary">parceria com a imobiliária Kazavel</strong>, garantindo projetos de excelência e resultados que superam expectativas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa equipe experiente e comprometida está pronta para transformar seu projeto em realidade, seja uma reforma completa ou uma construção do zero.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <Icon className="text-primary" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
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

export default About
