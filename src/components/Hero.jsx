import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('timeline')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section id="hero" className="hero section gradient-bg-1">
      {/* Floating elements */}
      <motion.div 
        className="floating-element" 
        style={{ top: '5%', left: '8%' }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ✞
      </motion.div>
      
      <motion.div 
        className="floating-element" 
        style={{ top: '15%', right: '12%' }}
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        📖
      </motion.div>

      <motion.div 
        className="floating-element" 
        style={{ top: '70%', left: '5%' }}
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🌊
      </motion.div>

      <motion.div 
        className="floating-element" 
        style={{ top: '60%', right: '8%' }}
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⚡
      </motion.div>

      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            MOISÉS
            <span className="hero-title-subtitle">O Libertador de Israel</span>
          </motion.h1>
          
          <motion.div
            className="hero-subtitle-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: "easeOut"
            }}
          >
            <h2 className="hero-subtitle">Servo Fiel do Deus Todo-Poderoso</h2>
            <h3 className="hero-subtitle-latin">O Grande Libertador de Israel</h3>
            <div className="subtitle-divider"></div>
          </motion.div>
          
          <motion.div 
            className="hero-description-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.1,
              ease: "easeOut"
            }}
          >
            <p className="hero-description">
              <strong>Moisés, o servo de Deus</strong> — Escolhido pelo Senhor para libertar o povo de Israel 
              da escravidão no Egito e conduzi-los à Terra Prometida. Através dele, Deus estabeleceu 
              Sua Lei e revelou Sua santidade ao povo escolhido.
            </p>
            
            <div className="hero-characteristics">
              <div className="characteristic">
                <span className="char-icon">👑</span>
                <span className="char-text">Príncipe & Pastor</span>
              </div>
              <div className="characteristic">
                <span className="char-icon">🔥</span>
                <span className="char-text">Profeta de Deus</span>
              </div>
              <div className="characteristic">
                <span className="char-icon">⚖️</span>
                <span className="char-text">Mediador da Lei</span>
              </div>
            
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.4,
              ease: "easeOut"
            }}
          >
            <div className="stat">
              <span className="stat-number">120</span>
              <span className="stat-label">Anos de Vida</span>
              <span className="stat-detail">Força até o fim</span>
            </div>
            <div className="stat">
              <span className="stat-number">40</span>
              <span className="stat-label">Anos no Deserto</span>
              <span className="stat-detail">Provação & Ensino</span>
            </div>
            <div className="stat">
              <span className="stat-number">10</span>
              <span className="stat-label">Pragas Divinas</span>
              <span className="stat-detail">Poder do Senhor</span>
            </div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Livros Escritos</span>
              <span className="stat-detail">Pentateuco</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button 
        className="scroll-indicator"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}

export default Hero 