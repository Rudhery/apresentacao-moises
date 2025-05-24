import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Miracles from './components/Miracles'
import Legacy from './components/Legacy'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Timeline />
      <Miracles />
      <Legacy />
    </div>
  )
}

export default App 