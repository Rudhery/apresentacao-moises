import React, { useEffect, useState } from 'react'
import useGSAP from '../hooks/useGSAP'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const { scope, gsap } = useGSAP()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline principal do loading
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(onComplete, 1000 )
        }
      })

      // Animação inicial dos elementos
      tl.from('.loading-logo', {
        scale: 0,
        rotation: 180,
        duration: 1,
        ease: "back.out(1.7)"
      })
      .from('.loading-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .from('.loading-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3")

      // Animação da barra de progresso
      const progressBar = gsap.to('.progress-fill', {
        width: '100%',
        duration: 3,
        ease: "power2.inOut",
        onUpdate: function() {
          setProgress(Math.round(this.progress() * 100))
        }
      })

      tl.add(progressBar, "-=1")

      // Versículos que aparecem durante o carregamento
      const verses = [
        "Preparando a jornada...",
        "\"Eu sou o caminho, e a verdade, e a vida\" - João 14:6",
        "\"Lâmpada para os meus pés é tua palavra\" - Salmo 119:105",
        "Carregando os milagres de Deus..."
      ]

      verses.forEach((verse, index) => {
        tl.to('.loading-verse', {
          text: verse,
          duration: 0.1,
          ease: "none"
        }, index * 0.8)
      })

      // Animação de saída
      tl.to('.loading-content', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in"
      }, "+=0.5")
      .to('.loading-screen', {
        yPercent: -100,
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.3")

    }, scope)

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div className="loading-screen" ref={scope}>
      <div className="loading-content">
        <div className="loading-logo">
          <span className="logo-symbol">📜</span>
        </div>
        
        <h1 className="loading-title">MOISÉS</h1>
        <p className="loading-subtitle">O Libertador de Israel</p>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">{progress}%</span>
        </div>
        
        <p className="loading-verse">Preparando a jornada...</p>
      </div>
      
      {/* Elementos decorativos animados */}
      <div className="loading-particles">
        <span className="particle-1">🕊</span>
        <span className="particle-2">⭐</span>
        <span className="particle-3">📜</span>
        <span className="particle-4">🔥</span>
      </div>
    </div>
  )
}

export default LoadingScreen 