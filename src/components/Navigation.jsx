import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navigation.css'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <motion.nav 
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* <span className="logo-icon">✞</span> */}
          <span className="logo-text">Moisés</span>
        </motion.div>
        
        <div className="nav-links">
          {[
            { name: 'Início', id: 'hero' },
            { name: 'Cronologia', id: 'timeline' },
            { name: 'Milagres', id: 'miracles' },
            { name: 'Legado', id: 'legacy' }
          ].map((link, index) => (
            <motion.button
              key={link.id}
              className="nav-link"
              onClick={() => scrollToSection(link.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation 