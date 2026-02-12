'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { getObrasAtivas, type Obra } from '@/lib/obras'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Portfolio = () => {
  const [obras, setObras] = useState<Obra[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchObras() {
      try {
        setLoading(true)
        const response = await getObrasAtivas()
        
        if (response.status && response.data) {
          setObras(response.data)
        } else {
          setError(response.message || 'Erro ao carregar obras')
        }
      } catch (err) {
        setError('Erro ao buscar obras')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchObras()
  }, [])

  return (
    <section id="obras" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nossas Obras
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados com excelência e
            dedicação
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Carregando obras...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : obras.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhuma obra encontrada.</p>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="pb-12"
          >
            {obras.map((obra) => (
              <SwiperSlide key={obra.id}>
                <Link href={`/obra/${obra.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-64 w-full">
                      {obra.main_image ? (
                        <Image
                          src={obra.main_image}
                          alt={obra.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">Sem imagem</span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {obra.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {new Date(obra.created_at).toLocaleDateString('pt-BR', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  )
}

export default Portfolio
