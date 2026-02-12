'use client'

import { motion } from 'framer-motion'
import { Users, Award, Briefcase, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const Team = () => {
  const specialties = [
    {
      icon: Briefcase,
      title: 'Engenheiros',
      description: 'Profissionais formados e experientes',
    },
    {
      icon: Users,
      title: 'Arquiteto',
      description: 'Design e planejamento especializado',
    },
    {
      icon: Award,
      title: 'Mestres de Obra',
      description: 'Experiência prática e conhecimento técnico',
    },
    {
      icon: CheckCircle,
      title: 'Especialistas',
      description: 'Profissionais qualificados em cada área',
    },
  ]

  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nossa Equipe
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos com profissionais qualificados e experientes em todas as
            áreas da construção e reforma
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Profissionais Qualificados em Todas as Áreas
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A Surreal Construções e Reformas conta com uma equipe completa e
              multidisciplinar, formada por{' '}
              <strong className="text-primary">
                profissionais qualificados e experientes
              </strong>{' '}
              em todas as áreas da construção civil.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa equipe é composta por{' '}
              <strong className="text-primary">
                engenheiros, arquitetos, mestres de obra, pedreiros,
                eletricistas, encanadores, pintores e especialistas
              </strong>{' '}
              em acabamentos, cada um com expertise em sua área de atuação.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Todos os nossos profissionais são{' '}
              <strong className="text-primary">
                devidamente qualificados e certificados
              </strong>
              , garantindo que cada etapa do seu projeto seja executada com
              excelência, segurança e dentro dos mais altos padrões de
              qualidade.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trabalhamos com comprometimento, dedicação e atenção aos detalhes,
              sempre priorizando a satisfação do cliente e a entrega de
              resultados que superam expectativas.
            </p>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/equip.png"
              alt="Equipe Surreal Construções e Reformas"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Cards de Especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <motion.div
                key={specialty.title}
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
                      {specialty.title}
                    </h3>
                    <p className="text-gray-600">{specialty.description}</p>
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

export default Team
