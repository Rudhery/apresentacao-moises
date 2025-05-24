import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Miracles from './components/Miracles'
import Legacy from './components/Legacy'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="App">
      <ParticleBackground />
      <Navigation />
      <main>
        <Hero />
        <Timeline />
        <Miracles />
        <Legacy />
      </main>
    </div>
  )
}

export default App 