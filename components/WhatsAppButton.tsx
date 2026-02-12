'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const whatsappNumber = '554599883622'
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-primary text-secondary text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        <span className="absolute inline-flex rounded-full h-full w-full bg-primary opacity-75 animate-ping"></span>
      </span>
    </motion.a>
  )
}

export default WhatsAppButton
