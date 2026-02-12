'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getObraById, type ObraDetalhes } from '@/lib/obras'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ObraPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [obra, setObra] = useState<ObraDetalhes | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchObra() {
      if (!id) return

      try {
        setLoading(true)
        const response = await getObraById(id)

        if (response.status && response.data && response.data.length > 0) {
          setObra(response.data[0])
        } else {
          setError(response.message || 'Obra não encontrada')
        }
      } catch (err) {
        setError('Erro ao buscar obra')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchObra()
  }, [id])

  if (loading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Carregando obra...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !obra) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-secondary mb-4">
              Obra não encontrada
            </h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <Button onClick={() => router.push('/')} variant="outline">
              <ArrowLeft className="mr-2" size={20} />
              Voltar para o início
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Structured data para a obra
  const obraStructuredData = obra ? (() => {
    const data: any = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": obra.title,
      "description": obra.description || `Projeto de construção/reforma: ${obra.title}`,
      "creator": {
        "@type": "Organization",
        "name": "Surreal Construções e Reformas",
        "url": process.env.NEXT_PUBLIC_SITE_URL || "https://surreal-obras-site.vercel.app"
      },
      "dateCreated": obra.created_at
    }
    
    if (obra.images && obra.images.length > 0) {
      data.image = obra.images[0].url
    }
    
    if (obra.address) {
      data.location = {
        "@type": "Place",
        "address": obra.address
      }
    }
    
    return data
  })() : null

  return (
    <main className="min-h-screen">
      {obraStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obraStructuredData) }}
        />
      )}
      <Header />
      <div className="pt-24">
        {/* Botão Voltar */}
        <div className="container mx-auto px-4 py-2">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="mb-2"
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar
          </Button>
        </div>

        {/* Hero Section com primeira imagem */}
        {obra.images && obra.images.length > 0 && (
          <div className="relative h-[60vh] w-full mb-8">
            <Image
              src={obra.images[0].url}
              alt={`${obra.title} - Projeto Surreal Construções e Reformas`}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="container mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                  itemProp="name"
                >
                  {obra.title}
                </motion.h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  {obra.address && (
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{obra.address}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary text-secondary rounded-full font-semibold">
                      {obra.status === 'completed' ? 'Concluída' : 'Em Andamento'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <article className="container mx-auto px-4 pb-20" itemScope itemType="https://schema.org/CreativeWork">
          {/* Descrição */}
          {obra.description && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Sobre o Projeto
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line" itemProp="description">
                {obra.description}
              </p>
            </motion.section>
          )}

          {/* Galeria de Imagens */}
          {obra.images && obra.images.length > 1 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 overflow-hidden"
              aria-label="Galeria de imagens do projeto"
            >
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
                Galeria de Imagens
              </h2>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
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
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                className="pb-12"
              >
                {obra.images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative h-80 w-full rounded-lg overflow-hidden">
                      <Image
                        src={image.url}
                        alt={`${obra.title} - Imagem ${image.order} - Galeria do projeto Surreal Construções e Reformas`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.section>
          )}

          {/* Vídeos */}
          {obra.videos && obra.videos.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
              aria-label="Vídeos do projeto"
            >
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
                Vídeos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {obra.videos.map((video) => (
                  <div
                    key={video.id}
                    className="relative aspect-video rounded-lg overflow-hidden bg-gray-900"
                  >
                    <iframe
                      src={video.url}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${obra.title} - Vídeo ${video.order}`}
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Botão de Contato */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/554599883622?text=Olá! Gostaria de saber mais sobre esta obra."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </motion.section>
        </article>
      </div>
      <Footer />
    </main>
  )
}
