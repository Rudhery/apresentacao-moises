import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import useGSAP, { animations } from '../hooks/useGSAP'
import './Hero.css'

const Hero = () => {
  const [selectedModal, setSelectedModal] = useState(null)
  const { scope, gsap, ScrollTrigger } = useGSAP()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typewriter effect para o título principal
      gsap.set(".hero-title-main", { text: "" })
      animations.typewriter(".hero-title-main", "MOISÉS", 2)

      // Animação em cascata para elementos do hero
      animations.staggerReveal([
        ".hero-title-subtitle",
        ".hero-subtitle-container", 
        ".hero-description-container",
        ".hero-characteristics",
        ".hero-stats"
      ])

      // Parallax nos elementos flutuantes
      animations.parallaxBg(".floating-element", 0.3)
      
      // Animação contínua nos elementos flutuantes
      animations.floatingAnimation(".floating-element")

      // Hover effects nos stats e características
      animations.hoverScale(".stat", 1.08)
      animations.hoverScale(".characteristic", 1.05)

      // Animação especial para o indicador de scroll
      gsap.fromTo(".scroll-indicator",
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: 3,
          ease: "power2.out"
        }
      )

      // Animação de pulsação para o scroll indicator
      gsap.to(".scroll-indicator", {
        scale: 1.1,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

    }, scope)

    return () => ctx.revert()
  }, [])

  const heroDetails = {
    "120-anos": {
      title: "120 Anos de Vida Plena",
      icon: "⏳",
      description: "A longevidade de Moisés demonstra o cuidado especial de Deus por Seus servos fiéis.",
      fullContent: `Moisés viveu 120 anos, divididos em três períodos perfeitos de 40 anos cada um, demonstrando a mão providencial de Deus sobre sua vida:

**Primeiros 40 anos (1393-1353 a.C.) - Preparação no Egito:**
Criado na casa de Faraó como príncipe, foi instruído em toda sabedoria dos egípcios. Esta educação privilegiada o preparou para liderar uma nação e negociar com reis. Deus usou até mesmo o sistema educacional pagão para preparar Seu servo.

**Segundos 40 anos (1353-1313 a.C.) - Purificação no Deserto:**
Como pastor em Midiã, aprendeu humildade, paciência e dependência de Deus. O deserto quebrou sua auto-suficiência e o ensinou a depender completamente do Senhor. Esta experiência foi essencial para pastorear Israel por 40 anos.

**Últimos 40 anos (1313-1273 a.C.) - Liderança de Israel:**
Como libertador e legislador, conduziu Israel do Egito ao limiar da Terra Prometida. Aos 120 anos, sua vista estava clara e seu vigor não havia diminuído - um milagre sustentado por Deus para completar sua missão.

"Era Moisés da idade de cento e vinte anos quando morreu; os seus olhos nunca se escureceram, nem perdeu o seu vigor." (Deuteronômio 34:7)`,
      references: [
        "Deuteronômio 34:7 - Vigor preservado até a morte",
        "Atos 7:20-23 - Primeiros 40 anos no Egito",
        "Êxodo 7:7 - Idade ao começar o ministério"
      ]
    },
    "40-anos-deserto": {
      title: "40 Anos no Deserto",
      icon: "🏜️",
      description: "Período de formação espiritual e liderança do povo de Deus pela wilderness.",
      fullContent: `Os 40 anos no deserto representam o maior período de liderança pastoral da história bíblica:

**A Escola de Deus:**
O deserto se tornou uma universidade espiritual onde Deus ensinou Israel a viver pela fé, não pela vista. Cada dia dependiam do maná, cada movimento seguiam a nuvem e a coluna de fogo.

**Provisões Milagrosas:**
- Maná diário por 40 anos (exceto no sábado)
- Água da rocha em Horebe e Cades
- Roupas e sandálias que não se gastaram
- Proteção divina contra serpentes e inimigos

**Estabelecimento da Adoração:**
Moisés supervisionou a construção do Tabernáculo, organizou o sacerdócio levítico, e estabeleceu o sistema sacrificial. Ensinou as festas sagradas e os princípios de vida santa.

**Formação de Líderes:**
Preparou Josué como sucessor, organizou os anciãos, estabeleceu juízes, e formou uma geração inteira para conquistar Canaã. O deserto foi necessário para transformar escravos em nação teocrática.

**Lições de Obediência:**
Através de rebeliões como Corá, Datã e Abirão, o povo aprendeu sobre autoridade divina. Moisés demonstrou mansidão e intercessão constante, mostrando o coração de um verdadeiro pastor.`,
      references: [
        "Números 14:33-34 - 40 anos decretados por Deus",
        "Deuteronômio 8:2-4 - Propósito do deserto",
        "Neemias 9:19-21 - Provisões no deserto"
      ]
    },
    "10-pragas": {
      title: "As 10 Pragas Divinas",
      icon: "⚡",
      description: "Demonstrações do poder supremo de Deus sobre todos os deuses do Egito.",
      fullContent: `As dez pragas foram juízos específicos de Deus contra as divindades egípcias, provando Sua supremacia absoluta:

**1. Água em Sangue (Êxodo 7:14-25)**
Contra Hápi (deus do Nilo) - O próprio rio que era adorado se tornou repugnante e mortal.

**2. Rãs (Êxodo 8:1-15)**
Contra Heqet (deusa-rã da fertilidade) - As rãs, antes símbolo de vida, trouxeram praga e morte.

**3. Piolhos (Êxodo 8:16-19)**
Os magos confessaram: "Este é o dedo de Deus" - não conseguiram reproduzir este milagre.

**4. Moscas (Êxodo 8:20-32)**
Deus fez distinção entre Gósen (Israel) e o resto do Egito, mostrando Sua proteção especial.

**5. Morte do Gado (Êxodo 9:1-7)**
Contra Ápis (touro sagrado) - Os próprios animais adorados pelos egípcios morreram.

**6. Úlceras (Êxodo 9:8-12)**
Até os magos foram atingidos e não puderam se apresentar diante de Faraó.

**7. Saraiva (Êxodo 9:13-35)**
Contra Nut (deusa do céu) - O próprio céu atacou o Egito com fogo e gelo.

**8. Gafanhotos (Êxodo 10:1-20)**
Contra Osíris (deus da fertilidade) - Destruição total das colheitas restantes.

**9. Trevas (Êxodo 10:21-29)**
Contra Rá (deus-sol) - O próprio sol foi derrotado por trevas sobrenaturais por três dias.

**10. Morte dos Primogênitos (Êxodo 12:29-30)**
Contra Faraó (considerado deus) - O próprio filho de Faraó morreu, provando que o Deus de Israel reina supremo.

Cada praga aumentava em intensidade, dando oportunidades de arrependimento, mas demonstrando que "não há outro deus além do Senhor."`,
      references: [
        "Êxodo 7-12 - Relato completo das pragas",
        "Salmo 78:43-51 - Recordação poética",
        "Êxodo 12:12 - Juízo contra os deuses do Egito"
      ]
    },
    "5-livros": {
      title: "Os 5 Livros do Pentateuco",
      icon: "📜",
      description: "A Torá sagrada, fundamento de toda revelação divina escrita.",
      fullContent: `Moisés escreveu os cinco primeiros livros da Bíblia, conhecidos como Pentateuco (cinco rolos) ou Torá:

**1. GÊNESIS (Bereshit - "No Princípio")**
- Criação do universo e da humanidade
- A queda e promessa de redenção
- Os patriarcas: Abraão, Isaque, Jacó e José
- Fundamentos da fé e das promessas divinas

**2. ÊXODO (Shemot - "Nomes")**
- Libertação do Egito e nascimento da nação
- As dez pragas e a Páscoa
- Travessia do Mar Vermelho
- Entrega da Lei no Monte Sinai

**3. LEVÍTICO (Vayikrá - "E Chamou")**
- Manual do sacerdócio e adoração
- Leis de pureza e santidade
- Sistema sacrificial apontando para Cristo
- Festas sagradas e ano sabático

**4. NÚMEROS (Bamidbar - "No Deserto")**
- Jornada pelo deserto por 40 anos
- Censos e organização das tribos
- Rebeliões e disciplina divina
- Preparação para a conquista de Canaã

**5. DEUTERONÔMIO (Devarim - "Palavras")**
- Repetição e explicação da Lei
- Últimos discursos de Moisés
- Bênçãos e maldições
- Morte de Moisés e sucessão de Josué

Estes livros contêm:
- **613 mandamentos** (segundo a tradição judaica)
- **História** desde a criação até a morte de Moisés
- **Lei moral, civil e cerimonial** para Israel
- **Profecias** sobre o Messias vindouro
- **Tipos e sombras** apontando para Cristo

Jesus confirmou a autoria mosaica: "Porque, se vós crêsseis em Moisés, creríeis em mim, porque de mim escreveu ele" (João 5:46).`,
      references: [
        "João 5:46 - Jesus confirma autoria de Moisés",
        "Lucas 24:27 - Moisés escreveu sobre Cristo",
        "2 Timóteo 3:16 - Toda Escritura é inspirada"
      ]
    },
    "principe-pastor": {
      title: "Príncipe & Pastor",
      icon: "👑",
      description: "Preparado nos palácios, moldado nos pastos - a formação completa de um líder.",
      fullContent: `A vida de Moisés demonstra como Deus prepara Seus servos através de experiências aparentemente contraditórias:

**O Príncipe (1393-1353 a.C.):**
Criado na casa de Faraó, recebeu a melhor educação do mundo antigo:
- **Educação política:** Aprendeu a arte de governar e diplomacia
- **Conhecimento militar:** Estratégias de guerra e liderança de exércitos
- **Cultura egípcia:** Línguas, matemática, arquitetura e administração
- **Acesso ao poder:** Conhecia o funcionamento do império mais poderoso da época

Esta formação o equipou para:
- Confrontar Faraó de igual para igual
- Organizar e liderar uma nação de 2 milhões de pessoas
- Administrar leis complexas e sistemas sociais

**O Pastor (1353-1313 a.C.):**
40 anos cuidando de ovelhas no deserto de Midiã:
- **Humildade:** Quebrou seu orgulho e auto-suficiência
- **Paciência:** Aprendeu a lidar com criaturas teimosas e dependentes
- **Liderança gentil:** Desenvolveu compaixão e cuidado pastoral
- **Conhecimento do deserto:** Preparação prática para guiar Israel

**O Libertador (1313-1273 a.C.):**
Combinando ambas as experiências:
- Usou sua educação principesca para confrontar Faraó
- Aplicou sua experiência pastoral para guiar Israel
- Demonstrou que Deus usa todas as experiências para Seus propósitos

"Foi instruído Moisés em toda a ciência dos egípcios; e era poderoso em suas palavras e obras" (Atos 7:22). Mas teve que aprender humildade como pastor antes de se tornar o maior líder da história de Israel.

A lição: Deus prepara Seus servos através de todas as circunstâncias da vida, tanto prosperidade quanto adversidade.`,
      references: [
        "Atos 7:22 - Moisés instruído na ciência egípcia",
        "Êxodo 3:1 - Moisés apascentava o rebanho",
        "Números 12:3 - Moisés era mui manso"
      ]
    },
    "profeta-deus": {
      title: "Profeta de Deus",
      icon: "🔥",
      description: "O maior profeta do Antigo Testamento, que falava com Deus face a face.",
      fullContent: `Moisés ocupa posição única entre todos os profetas da história:

**Relacionamento Único com Deus:**
"E nunca mais se levantou em Israel profeta algum como Moisés, a quem o Senhor conhecera face a face" (Deuteronômio 34:10). Enquanto outros profetas recebiam visões e sonhos, Moisés conversava diretamente com Deus.

**Características do Ministério Profético:**

**1. Revelação Direta:**
- Sarça ardente (Êxodo 3)
- Monte Sinai - recebimento da Lei
- Tenda da congregação - encontros regulares
- Monte Nebo - última visão profética

**2. Sinais e Maravilhas:**
- Vara que se tornou serpente
- Mão leprosa e curada
- Dez pragas no Egito
- Abertura do Mar Vermelho
- Água da rocha
- Maná do céu

**3. Mediação entre Deus e o Povo:**
- Recebia as leis e as transmitia
- Intercedia quando o povo pecava
- Ofereceu-se para ser riscado do livro de Deus
- Estabeleceu o sacerdócio mediador

**4. Profecias Messiânicas:**
"O Senhor teu Deus te levantará um profeta do meio de ti, de teus irmãos, como eu; a ele ouvireis" (Deuteronômio 18:15). Esta profecia aponta diretamente para Cristo.

**5. Escritor da Revelação:**
Registrou as palavras exatas de Deus nos cinco livros do Pentateuco, estabelecendo o fundamento de toda a Escritura.

**O Padrão Profético:**
Jesus é chamado de "Profeta semelhante a Moisés" porque:
- Ambos foram salvos na infância de tentativas de extermínio
- Ambos libertaram o povo de Deus
- Ambos mediaram alianças divinas
- Ambos realizaram sinais extraordinários
- Ambos morreram fora da terra prometida (Moisés no Nebo, Jesus fora de Jerusalém)

"Porque a lei foi dada por Moisés; a graça e a verdade vieram por Jesus Cristo" (João 1:17).`,
      references: [
        "Deuteronômio 34:10 - Nenhum profeta como Moisés",
        "Deuteronômio 18:15 - Profecia sobre Cristo",
        "João 1:17 - Lei por Moisés, graça por Cristo"
      ]
    },
    "mediador-lei": {
      title: "Mediador da Lei",
      icon: "⚖️",
      description: "Através dele, Deus estabeleceu Sua Lei santa e os princípios eternos de justiça.",
      fullContent: `Moisés serviu como mediador entre o Deus santo e o povo pecador, estabelecendo o padrão para toda mediação futura:

**A Necessidade de Mediação:**
No Monte Sinai, quando Deus desceu em fogo e trovões, o povo tremeu de medo e disse: "Fala tu conosco, e ouviremos; e não fale Deus conosco, para que não morramos" (Êxodo 20:19). A santidade de Deus era demasiada para o pecado humano suportar.

**Os Elementos da Mediação:**

**1. Recebimento da Lei:**
- Os Dez Mandamentos escritos pelo dedo de Deus
- 613 preceitos específicos (segundo tradição judaica)
- Leis morais (permanentes para toda humanidade)
- Leis cerimoniais (tipos apontando para Cristo)
- Leis civis (para governo teocrático de Israel)

**2. Transmissão Fiel:**
"Todas as palavras que o Senhor tem falado faremos" - Moisés transmitiu exatamente o que recebeu, sem adicionar nem diminuir.

**3. Intercessão Constante:**
- No incidente do bezerro de ouro
- Durante as rebeliões no deserto
- Nas pragas de serpentes e doenças
- Ofereceu sua própria vida pelo perdão do povo

**4. Estabelecimento do Sacerdócio:**
Organizou o sistema levítico de mediação permanente, com sacrifícios que apontavam para o sacrifício perfeito de Cristo.

**O Propósito da Lei:**
"De sorte que a lei nos serviu de aio, para nos conduzir a Cristo" (Gálatas 3:24):
- Revelar a santidade de Deus
- Mostrar a pecaminosidade humana
- Criar fome pela graça
- Estabelecer padrões eternos de justiça

**Tipo de Cristo:**
Assim como Moisés mediou a Antiga Aliança, Cristo medeia a Nova:
- Moisés subiu ao monte e desceu com a Lei
- Cristo subiu ao céu e enviou o Espírito Santo
- Moisés intercedeu por Israel
- Cristo intercede por nós eternamente
- Moisés estabeleceu sacrifícios temporários
- Cristo ofereceu sacrifício eterno

"Há um só Mediador entre Deus e os homens, Jesus Cristo homem" (1 Timóteo 2:5).`,
      references: [
        "Êxodo 20:19 - Povo pede mediação de Moisés",
        "Gálatas 3:24 - Lei como pedagogo para Cristo",
        "1 Timóteo 2:5 - Cristo, único Mediador"
      ]
    }
  }

  const scrollToNext = () => {
    document.getElementById('timeline')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const openModal = (modalKey) => {
    setSelectedModal(heroDetails[modalKey])
  }

  const closeModal = () => {
    setSelectedModal(null)
  }

  return (
    <section id="hero" className="hero section gradient-bg-1" ref={scope}>
      {/* Floating elements */}
      <div className="floating-element" style={{ top: '5%', left: '8%' }}>
        ✞
      </div>
      
      <div className="floating-element" style={{ top: '15%', right: '12%' }}>
        📖
      </div>

      <div className="floating-element" style={{ top: '70%', left: '5%' }}>
        🌊
      </div>

      <div className="floating-element" style={{ top: '60%', right: '8%' }}>
        ⚡
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">MOISÉS</span>
            <span className="hero-title-subtitle">O Libertador de Israel</span>
          </h1>
          
          <div className="hero-subtitle-container">
            <h2 className="hero-subtitle">Servo Fiel do Deus Todo-Poderoso</h2>
            <h3 className="hero-subtitle-latin">O Grande Libertador de Israel</h3>
            <div className="subtitle-divider"></div>
          </div>
          
          <div className="hero-description-container">
            <p className="hero-description">
              <strong>Moisés, o servo de Deus</strong> — Escolhido pelo Senhor para libertar o povo de Israel 
              da escravidão no Egito e conduzi-los à Terra Prometida. Através dele, Deus estabeleceu 
              Sua Lei e revelou Sua santidade ao povo escolhido.
            </p>
            
            <div className="hero-characteristics">
              <div 
                className="characteristic clickable"
                onClick={() => openModal('principe-pastor')}
              >
                <span className="char-icon">👑</span>
                <span className="char-text">Príncipe & Pastor</span>
                <span className="click-hint-hero">👆</span>
              </div>
              <div 
                className="characteristic clickable"
                onClick={() => openModal('profeta-deus')}
              >
                <span className="char-icon">🔥</span>
                <span className="char-text">Profeta de Deus</span>
                <span className="click-hint-hero">👆</span>
              </div>
              <div 
                className="characteristic clickable"
                onClick={() => openModal('mediador-lei')}
              >
                <span className="char-icon">⚖️</span>
                <span className="char-text">Mediador da Lei</span>
                <span className="click-hint-hero">👆</span>
              </div>
            </div>
          </div>
          
          <div className="hero-stats">
            <div 
              className="stat clickable"
              onClick={() => openModal('120-anos')}
            >
              <span className="stat-number">120</span>
              <span className="stat-label">Anos de Vida</span>
              <span className="stat-detail">Força até o fim</span>
              <span className="click-hint-hero">👆</span>
            </div>
            <div 
              className="stat clickable"
              onClick={() => openModal('40-anos-deserto')}
            >
              <span className="stat-number">40</span>
              <span className="stat-label">Anos no Deserto</span>
              <span className="stat-detail">Provação & Ensino</span>
              <span className="click-hint-hero">👆</span>
            </div>
            <div 
              className="stat clickable"
              onClick={() => openModal('10-pragas')}
            >
              <span className="stat-number">10</span>
              <span className="stat-label">Pragas Divinas</span>
              <span className="stat-detail">Poder do Senhor</span>
              <span className="click-hint-hero">👆</span>
            </div>
            <div 
              className="stat clickable"
              onClick={() => openModal('5-livros')}
            >
              <span className="stat-number">5</span>
              <span className="stat-label">Livros Escritos</span>
              <span className="stat-detail">Pentateuco</span>
              <span className="click-hint-hero">👆</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="scroll-indicator"
        onClick={scrollToNext}
      >
        <ChevronDown size={32} />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            className="hero-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="hero-modal-content"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="hero-modal-close" onClick={closeModal}>×</button>
              
              <div className="hero-modal-header">
                <span className="hero-modal-icon">{selectedModal.icon}</span>
                <div>
                  <h2>{selectedModal.title}</h2>
                  <p className="hero-modal-description">{selectedModal.description}</p>
                </div>
              </div>
              
              <div className="hero-modal-body">
                <div className="hero-modal-content-text">
                  {selectedModal.fullContent.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return <h3 key={index} className="hero-modal-subtitle">{paragraph.slice(2, -2)}</h3>
                    }
                    return <p key={index}>{paragraph}</p>
                  })}
                </div>
                
                <div className="hero-modal-references">
                  <h3>Referências Bíblicas:</h3>
                  <ul>
                    {selectedModal.references.map((ref, index) => (
                      <li key={index}>{ref}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero 