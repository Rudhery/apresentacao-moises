import React from 'react'
import { motion } from 'framer-motion'
import './Timeline.css'

const Timeline = () => {
  const timelineEvents = [
    {
      year: "1393 a.C.",
      title: "Nascimento Providencial",
      description: "Nasce durante a escravidão no Egito. Pela providência divina, é salvo das águas do Nilo e criado na casa de Faraó, preparando-se para sua futura missão como libertador do povo de Deus.",
      details: "Deus preparando Seu servo desde o berço (Êxodo 2:1-10)",
      icon: "👶",
      location: "Delta do Nilo, Egito"
    },
    {
      year: "1353 a.C.",
      title: "A Escolha Pela Fé",
      description: "Aos 40 anos, escolhe sofrer com o povo de Deus a viver nos prazeres do pecado. Mata um egípcio e foge para Midiã, onde Deus o prepara como pastor por 40 anos.",
      details: "Pela fé, Moisés rejeitou ser chamado filho da filha de Faraó (Hebreus 11:24-25)",
      icon: "🏃",
      location: "Do Egito para Midiã"
    },
    {
      year: "1313 a.C.",
      title: "O Chamado Divino na Sarça",
      description: "No Monte Horebe, Deus Se revela na sarça ardente que não se consome. O Senhor comissiona Moisés para libertar Seu povo, revelando Seu nome sagrado 'EU SOU O QUE SOU'.",
      details: "Primeira revelação do nome divino na história (Êxodo 3:1-15)",
      icon: "🔥",
      location: "Monte Horebe (Sinai)"
    },
    {
      year: "1313 a.C.",
      title: "Confronto com o Poder Mundial",
      description: "Moisés e Aarão se apresentam diante de Faraó em nome do Deus de Israel. Demonstram o poder divino através de sinais, mas o coração de Faraó se endurece contra o Senhor.",
      details: "O poder de Deus versus o poder humano (Êxodo 7:1-13)",
      icon: "👑",
      location: "Palácio Real, Egito"
    },
    {
      year: "1312 a.C.",
      title: "As Dez Pragas - Juízo de Deus",
      description: "Deus manifesta Seu poder através de dez pragas devastadoras, demonstrando Sua supremacia sobre todos os deuses do Egito e forçando a libertação de Seu povo.",
      details: "Cada praga humilhava uma divindade egípcia (Êxodo 7-12)",
      icon: "⚡",
      location: "Todo o Egito"
    },
    {
      year: "1312 a.C.",
      title: "O Cordeiro Sacrificial",
      description: "Deus estabelece o sacrifício do cordeiro sem mácula como proteção contra a morte dos primogênitos. Este evento demonstra a necessidade de obediência exata aos mandamentos divinos.",
      details: "Obediência rigorosa às ordenanças de Deus (Êxodo 12:1-13)",
      icon: "🐑",
      location: "Terra de Gósen, Egito"
    },
    {
      year: "1312 a.C.",
      title: "O Milagre do Mar Vermelho",
      description: "Encurralados pelo exército egípcio, Deus abre o Mar Vermelho. Israel passa em terra seca enquanto os egípcios são destruídos - demonstração suprema do poder libertador de Deus.",
      details: "Grande livramento do povo escolhido de Deus (Êxodo 14:21-31)",
      icon: "🌊",
      location: "Mar Vermelho"
    },
    {
      year: "1312 a.C.",
      title: "A Lei de Deus no Monte Sinai",
      description: "No Monte Sinai, Deus entrega os Dez Mandamentos e toda a Lei através de Moisés. A Lei revela a santidade de Deus e estabelece os padrões morais para o povo.",
      details: "A Lei é santa, justa e boa (Romanos 7:12)",
      icon: "📜",
      location: "Monte Sinai"
    },
    {
      year: "1311 a.C.",
      title: "O Bezerro de Ouro - Intercessão",
      description: "Israel peca adorando o bezerro de ouro. Moisés intercede pelo povo, demonstrando seu papel como mediador fiel entre Deus e o povo. Deus mostra Sua misericórdia e perdão.",
      details: "Moisés intercede como mediador fiel (Êxodo 32:11-14)",
      icon: "💥",
      location: "Monte Sinai"
    },
    {
      year: "1312-1272 a.C.",
      title: "40 Anos de Ensino no Deserto",
      description: "Devido à incredulidade, uma geração morre no deserto. Moisés ensina e forma uma nova geração, estabelecendo o culto e as ordenanças conforme a vontade de Deus.",
      details: "O deserto como escola de Deus para Seu povo (Deuteronômio 8:2-3)",
      icon: "🏜️",
      location: "Deserto do Sinai"
    },
    {
      year: "1273 a.C.",
      title: "A Última Profecia e Partida",
      description: "Aos 120 anos, Moisés profetiza sobre o Profeta que viria, abençoa as tribos e contempla a Terra Prometida antes de morrer. Deus o sepulta pessoalmente em local desconhecido.",
      details: "O Senhor levantará um Profeta semelhante a Moisés (Deuteronômio 18:15)",
      icon: "🏔️",
      location: "Monte Nebo, Jordânia"
    }
  ]

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          A Jornada do Servo de Deus
        </motion.h2>
        
        <motion.p 
          className="timeline-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          A vida extraordinária de Moisés revela o plano redentor de Deus, desde sua preservação milagrosa 
          até sua morte profética — 120 anos de fidelidade ao serviço do Altíssimo.
        </motion.p>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + index * 0.1,
                ease: "easeOut" 
              }}
            >
              <div className="timeline-content card">
                <div className="timeline-icon">
                  <span>{event.icon}</span>
                </div>
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
                <div className="timeline-details">{event.details}</div>
                <div className="timeline-location">📍 {event.location}</div>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="timeline-conclusion"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <blockquote>
            "Nunca mais se levantou em Israel profeta algum como Moisés, a quem o Senhor conhecera face a face."
          </blockquote>
          <cite>Deuteronômio 34:10</cite>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline 