import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Miracles.css'

const Miracles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const miracles = [
    {
      title: "A Sarça Ardente",
      description: "Deus Se revelou a Moisés numa sarça que ardia mas não se consumia, chamando-o para libertar Seu povo.",
      icon: "🔥",
      verse: "Eu Sou o que Sou - Êxodo 3:14"
    },
    {
      title: "A Vara que Virou Serpente",
      description: "Primeiro sinal do poder divino diante de Faraó, demonstrando que o Deus de Israel é supremo.",
      icon: "🐍",
      verse: "Esta é a mão do Senhor - Êxodo 7:9"
    },
    {
      title: "As Dez Pragas de Deus",
      description: "Manifestações do juízo divino sobre o Egito, cada uma humilhando um deus egípcio específico.",
      icon: "⚡",
      verse: "Para que saibas que Eu Sou o Senhor - Êxodo 7:17"
    },
    {
      title: "A Abertura do Mar Vermelho",
      description: "O maior milagre do Êxodo, onde Deus abriu o mar e salvou Israel, destruindo o exército egípcio.",
      icon: "🌊",
      verse: "O Senhor pelejará por vós - Êxodo 14:14"
    },
    {
      title: "Água da Rocha",
      description: "Deus fez brotar água da rocha seca para sustentar Israel no deserto árido durante 40 anos.",
      icon: "💧",
      verse: "Eis que ferirei a rocha - Êxodo 17:6"
    },
    {
      title: "O Maná do Céu",
      description: "Pão celestial enviado por Deus diariamente por 40 anos para alimentar Israel no deserto.",
      icon: "🍞",
      verse: "Pão do céu lhes deu a comer - Salmo 78:24"
    }
  ]

  return (
    <section id="miracles" className="miracles section gradient-bg-3" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Os Grandes Milagres de Deus
        </motion.h2>
        
        <motion.p 
          className="subtitle text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Manifestações do poder do Deus Todo-Poderoso através de Seu servo Moisés, 
          revelando Sua glória e supremacia sobre toda a criação
        </motion.p>
        
        <div className="miracles-grid">
          {miracles.map((miracle, index) => (
            <motion.div
              key={index}
              className="miracle-card card"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="miracle-icon-container">
                <div className="miracle-icon">{miracle.icon}</div>
                <div className="icon-glow"></div>
              </div>
              
              <h3 className="miracle-title">{miracle.title}</h3>
              <p className="miracle-description">{miracle.description}</p>
              <div className="miracle-verse">{miracle.verse}</div>
              
              <div className="miracle-decoration"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="miracles-quote"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <blockquote>
            "E Moisés estendeu a sua mão sobre o mar, e o Senhor fez retirar o mar por um forte vento oriental toda aquela noite; e o mar tornou-se em seco, e as águas foram partidas."
          </blockquote>
          <cite>Êxodo 14:21</cite>
        </motion.div>
      </div>
    </section>
  )
}

export default Miracles 