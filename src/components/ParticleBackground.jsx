import React, { useEffect } from 'react'
import useGSAP from '../hooks/useGSAP'
import './ParticleBackground.css'

const ParticleBackground = () => {
  const { scope, gsap } = useGSAP()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Criar partículas dinamicamente
      const particleContainer = document.querySelector('.particle-container')
      const particles = []
      
      // Diferentes tipos de partículas (símbolos bíblicos)
      const symbols = ['✝', '🕊', '⭐', '💫', '🌙', '☀️', '🔥', '💧', '🌊', '📜']
      
      // Criar 30 partículas
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)]
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem'
        particleContainer.appendChild(particle)
        particles.push(particle)
      }

      // Animar cada partícula
      particles.forEach((particle, index) => {
        // Movimento principal
        gsap.to(particle, {
          y: -window.innerHeight - 100,
          duration: Math.random() * 20 + 15,
          repeat: -1,
          delay: Math.random() * 5,
          ease: "none"
        })

        // Movimento horizontal flutuante
        gsap.to(particle, {
          x: Math.random() * 200 - 100,
          duration: Math.random() * 8 + 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        })

        // Rotação
        gsap.to(particle, {
          rotation: 360,
          duration: Math.random() * 10 + 5,
          repeat: -1,
          ease: "none"
        })

        // Pulsação de opacidade
        gsap.to(particle, {
          opacity: Math.random() * 0.3 + 0.1,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        })

        // Escala variável
        gsap.to(particle, {
          scale: Math.random() * 0.5 + 0.8,
          duration: Math.random() * 4 + 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        })
      })

      // Efeito parallax nas partículas baseado no scroll
      gsap.to('.particle', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

    }, scope)

    return () => ctx.revert()
  }, [])

  return (
    <div className="particle-background" ref={scope}>
      <div className="particle-container"></div>
    </div>
  )
}

export default ParticleBackground 