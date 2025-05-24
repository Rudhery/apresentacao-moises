import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Book, Scale, Heart, Cross } from 'lucide-react'
import './Legacy.css'

const Legacy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const legacyAspects = [
    {
      icon: <Book size={48} />,
      title: "O Pentateuco",
      description: "Os cinco primeiros livros da Bíblia, fundamentais para toda a fé cristã e revelação de Deus.",
      details: "Gênesis, Êxodo, Levítico, Números e Deuteronômio"
    },
    {
      icon: <Scale size={48} />,
      title: "A Lei Moral de Deus",
      description: "Os Dez Mandamentos como expressão do caráter santo de Deus e padrão moral universal.",
      details: "Fundamento da justiça e moralidade divina"
    },
    {
      icon: <Heart size={48} />,
      title: "Exemplo de Fé e Obediência",
      description: "Modelo de fé, humildade e obediência que inspira os servos de Deus através dos séculos.",
      details: "Pela fé rejeitou os tesouros do Egito (Hebreus 11)"
    }
  ]

  const achievements = [
    { number: "2", label: "Bilhões de Cristãos", suffix: "B+" },
    { number: "40", label: "Anos de Liderança", suffix: "" },
    { number: "3500", label: "Anos de Influência", suffix: "+" },
    { number: "5", label: "Livros Sagrados", suffix: "" }
  ]

  return (
    <section id="legacy" className="legacy section gradient-bg-4" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          O Legado Eterno de Moisés
        </motion.h2>
        
        <motion.p 
          className="subtitle text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          O impacto duradouro do maior servo de Deus do Antigo Testamento, 
          cujo legado ressoa através da história bíblica até hoje
        </motion.p>

        {/* Achievement Stats */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className="achievement-number">
                {achievement.number}
                <span className="achievement-suffix">{achievement.suffix}</span>
              </div>
              <div className="achievement-label">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Legacy Aspects */}
        <div className="legacy-grid">
          {legacyAspects.map((aspect, index) => (
            <motion.div
              key={index}
              className="legacy-card card"
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="legacy-icon">
                {aspect.icon}
              </div>
              <h3 className="legacy-title">{aspect.title}</h3>
              <p className="legacy-description">{aspect.description}</p>
              <div className="legacy-details">{aspect.details}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Final Quote */}
        <motion.div 
          className="final-tribute"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <div className="tribute-content">
            <h3 className="tribute-title">O Servo Fiel de Deus</h3>
            <p className="tribute-text">
              Moisés permanece como o maior profeta do Antigo Testamento, servo fiel que cumpriu 
              fielmente a vontade do Altíssimo. Seu exemplo de fé, humildade e obediência continua 
              a inspirar os servos de Deus ao redor do mundo, provando que Deus usa homens fiéis para cumprir 
              Seus propósitos eternos.
            </p>
            <div className="tribute-signature">
              <span className="signature-line"></span>
              <span className="signature-text">Soli Deo Gloria</span>
              <span className="signature-line"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Legacy 