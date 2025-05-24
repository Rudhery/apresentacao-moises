import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useGSAP, { animations } from '../hooks/useGSAP'
import './Miracles.css'

const Miracles = () => {
  const [selectedMiracle, setSelectedMiracle] = useState(null)
  const { scope, gsap, ScrollTrigger } = useGSAP()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título da seção
      animations.revealText(".section-title")

      // Animação do subtítulo
      gsap.fromTo(".subtitle",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: 0.5,
          ease: "power2.out"
        }
      )

      // Animação dos cards de milagres com ScrollTrigger
      gsap.fromTo(".miracle-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationY: 15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".miracles-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Hover effects para os cards
      animations.hoverScale(".miracle-card", 1.08)

      // Animação dos ícones com efeito de brilho
      gsap.fromTo(".miracle-icon",
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".miracles-grid",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animação da citação bíblica
      gsap.fromTo(".miracles-quote",
        {
          opacity: 0,
          scale: 0.9,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".miracles-quote",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Efeito parallax no background da seção
      gsap.to(".miracles::before", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".miracles",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

    }, scope)

    return () => ctx.revert()
  }, [])

  const miracles = [
    {
      title: "A Sarça Ardente",
      description: "Deus Se revelou a Moisés numa sarça que ardia mas não se consumia, chamando-o para libertar Seu povo.",
      icon: "🔥",
      verse: "Eu Sou o que Sou - Êxodo 3:14",
      key: "sarca-ardente"
    },
    {
      title: "A Vara que Virou Serpente",
      description: "Primeiro sinal do poder divino diante de Faraó, demonstrando que o Deus de Israel é supremo.",
      icon: "🐍",
      verse: "Esta é a mão do Senhor - Êxodo 7:9",
      key: "vara-serpente"
    },
    {
      title: "As Dez Pragas de Deus",
      description: "Manifestações do juízo divino sobre o Egito, cada uma humilhando um deus egípcio específico.",
      icon: "⚡",
      verse: "Para que saibas que Eu Sou o Senhor - Êxodo 7:17",
      key: "dez-pragas"
    },
    {
      title: "A Abertura do Mar Vermelho",
      description: "O maior milagre do Êxodo, onde Deus abriu o mar e salvou Israel, destruindo o exército egípcio.",
      icon: "🌊",
      verse: "O Senhor pelejará por vós - Êxodo 14:14",
      key: "mar-vermelho"
    },
    {
      title: "Água da Rocha",
      description: "Deus fez brotar água da rocha seca para sustentar Israel no deserto árido durante 40 anos.",
      icon: "💧",
      verse: "Eis que ferirei a rocha - Êxodo 17:6",
      key: "agua-rocha"
    },
    {
      title: "O Maná do Céu",
      description: "Pão celestial enviado por Deus diariamente por 40 anos para alimentar Israel no deserto.",
      icon: "🍞",
      verse: "Pão do céu lhes deu a comer - Salmo 78:24",
      key: "mana-ceu"
    }
  ]

  const miracleDetails = {
    "sarca-ardente": {
      title: "A Sarça Ardente",
      icon: "🔥",
      description: "O encontro mais sagrado da história - Deus Se revela pelo Seu santo nome.",
      fullContent: `Este é um dos momentos mais sagrados e transformadores da história bíblica. No Monte Horebe, enquanto Moisés apascentava o rebanho de seu sogro Jetro, Deus Se manifestou de forma sobrenatural.

**O Milagre da Sarça:**
Uma sarça comum ardia com fogo, mas não se consumia. Este fenômeno sobrenatural captou a atenção de Moisés, que se aproximou para investigar. A sarça ardente representa a natureza santa de Deus - Sua presença purifica sem destruir o que é consagrado a Ele.

**A Revelação do Nome Divino:**
Quando Moisés se aproximou, Deus o chamou pelo nome: "Moisés! Moisés!" Esta chamada dupla demonstra a intimidade e urgência divina. Deus Se revela como "EU SOU O QUE SOU" (YHWH), estabelecendo Sua identidade como o Deus eterno, auto-existente e imutável.

**Terra Santa:**
Deus ordenou: "Tira as sandálias dos pés, porque o lugar em que estás é terra santa." Onde Deus Se revela torna-se sagrado. Esta foi a primeira vez na história que Deus designou um local específico como "terra santa".

**A Comissão Divina:**
Neste encontro, Deus comissionou Moisés para a maior operação de resgate da história: libertar Israel do Egito. Prometeu estar com ele, dando-lhe sinais milagrosos para autenticar sua missão.

**Significado Profético:**
A sarça que arde mas não se consome é um tipo de Israel - uma nação que sofre perseguição mas não é destruída, preservada pela presença de Deus. Também representa a presença de Deus conosco - Ele habita em nós sem nos consumir.

**Tipo de Cristo:**
Jesus referiu-se a este evento quando disse "Antes que Abraão existisse, EU SOU" (João 8:58), aplicando a Si mesmo o nome divino revelado na sarça.`,
      references: [
        "Êxodo 3:1-15 - O encontro na sarça ardente",
        "Êxodo 3:14 - Revelação do nome divino EU SOU",
        "João 8:58 - Jesus usa o mesmo nome divino",
        "Atos 7:30-34 - Relato de Estêvão sobre o evento"
      ]
    },
    "vara-serpente": {
      title: "A Vara que Virou Serpente",
      icon: "🐍",
      description: "O primeiro sinal milagroso para autenticar a missão divina de Moisés.",
      fullContent: `A transformação da vara de Moisés em serpente foi o primeiro sinal milagroso dado por Deus para autenticar sua missão diante do povo e de Faraó.

**O Sinal de Deus:**
Quando Moisés duvidou de sua capacidade de convencer o povo, Deus lhe deu três sinais. O primeiro foi lançar sua vara pastoral ao chão, e ela se tornou uma serpente viva. Quando a pegou pela cauda, voltou a ser vara.

**Simbolismo Profundo:**
A vara representa autoridade e governo. A serpente representa sabedoria (Mt 10:16) mas também pode simbolizar o poder do mal. Deus demonstrou que toda autoridade terrena (a vara) está sob Seu controle, e que Ele tem poder sobre todas as forças espirituais.

**Confronto no Palácio:**
Diante de Faraó, Aarão lançou a vara que se transformou em serpente. Os magos egípcios conseguiram reproduzir o milagre através de suas artes ocultas, mas a vara de Aarão devorou as deles, demonstrando a supremacia do poder divino sobre a magia humana.

**Vara de Autoridade:**
Esta mesma vara se tornaria o instrumento de muitos milagres: as pragas no Egito, a abertura do Mar Vermelho, a água da rocha. Representa como Deus usa instrumentos simples nas mãos de Seus servos para realizar grandes obras.

**Tipo de Cristo:**
Assim como a vara "morreu" (virou serpente) e "ressuscitou" (voltou a ser vara), Cristo morreu e ressuscitou. A vara que traz juízo (serpente) se torna instrumento de salvação (vara pastoral).

**Lição de Fé:**
Este milagre ensinou a Moisés que Deus pode usar qualquer instrumento comum para manifestar Seu poder extraordinário. A vara simples de pastor se tornou o cajado mais poderoso da história.`,
      references: [
        "Êxodo 4:1-5 - O primeiro sinal da vara",
        "Êxodo 7:8-12 - Confronto com os magos egípcios",
        "Números 17:8 - A vara de Aarão que floresceu",
        "Hebreus 9:4 - A vara conservada na arca"
      ]
    },
    "dez-pragas": {
      title: "As Dez Pragas Divinas",
      icon: "⚡",
      description: "Juízos específicos contra os deuses do Egito, provando a supremacia do Deus de Israel.",
      fullContent: `As dez pragas representam o mais sistemático julgamento divino contra uma nação na história bíblica. Cada praga atacou especificamente uma divindade egípcia, demonstrando sua impotência diante do Deus verdadeiro.

**Sequência Estratégica das Pragas:**

**1-3: Ataque às Fontes de Vida**
- Água em sangue contra Hápi (deus do Nilo)
- Rãs contra Heqet (deusa da fertilidade)
- Piolhos - onde os magos confessaram: "Este é o dedo de Deus"

**4-6: Intensificação do Juízo**
- Moscas com distinção entre Israel e Egito
- Morte do gado contra Ápis (touro sagrado)
- Úlceras atingindo até os magos

**7-9: Ataques Cósmicos**
- Saraiva com fogo contra Nut (deusa do céu)
- Gafanhotos contra Osíris (deus da fertilidade)
- Trevas contra Rá (deus-sol principal)

**10: Julgamento Final**
- Morte dos primogênitos contra Faraó (considerado deus)

**Propósito Divino:**
"Para que saibas que Eu Sou o Senhor" - cada praga aumentava em intensidade, dando oportunidades de arrependimento, mas demonstrando que não há outro Deus além do Senhor.

**Proteção Sobrenatural:**
Nas últimas pragas, Deus fez distinção clara entre Egito e Israel, mostrando Sua proteção especial sobre o povo escolhido.`,
      references: [
        "Êxodo 7-12 - Relato completo das dez pragas",
        "Salmo 78:43-51 - Recordação poética das pragas",
        "Êxodo 12:12 - Juízo contra todos os deuses do Egito",
        "Romanos 9:17 - Propósito de Deus com Faraó"
      ]
    },
    "mar-vermelho": {
      title: "A Abertura do Mar Vermelho",
      icon: "🌊",
      description: "O milagre supremo da libertação - Deus abre o mar e destrói os inimigos.",
      fullContent: `A abertura do Mar Vermelho é possivelmente o milagre mais espetacular e significativo do Antigo Testamento, demonstrando o poder absoluto de Deus sobre a natureza e sobre os exércitos humanos.

**A Situação Impossível:**
Após deixar o Egito, Israel se encontrou numa situação humanamente impossível: o Mar Vermelho à frente, montanhas desertas aos lados, e o poderoso exército egípcio com 600 carros escolhidos se aproximando por trás.

**A Resposta de Fé:**
Moisés respondeu com uma das declarações de fé mais poderosas da Bíblia: "Não temais; estai quietos e vede a salvação do Senhor... O Senhor pelejará por vós, e vós estareis calados" (Êxodo 14:13-14).

**O Milagre Supremo:**
Deus instruiu Moisés a estender sua vara sobre o mar. Durante toda a noite, um vento oriental forte soprou, dividindo as águas e criando um caminho seco no fundo do mar. As águas ficaram como muros de ambos os lados.

**A Travessia Milagrosa:**
Cerca de 2 milhões de israelitas atravessaram em terra seca. A nuvem de Deus os protegeu durante toda a noite, dando luz aos israelitas e trevas aos egípcios.

**A Destruição dos Inimigos:**
Quando os egípcios entraram na passagem seca em perseguição, Deus confundiu seus carros de guerra, tirando as rodas. Depois fez as águas retornarem, destruindo completamente o exército de Faraó. Nenhum egípcio sobreviveu.

**Significado Profético:**
Este evento é tipo do batismo cristão (1 Coríntios 10:1-2) e da salvação - libertação completa do domínio do pecado pela intervenção sobrenatural de Deus.`,
      references: [
        "Êxodo 14:21-31 - A abertura do Mar Vermelho",
        "Êxodo 15:1-21 - O cântico de vitória de Moisés",
        "1 Coríntios 10:1-2 - Tipologia do batismo",
        "Hebreus 11:29 - Pela fé passaram o Mar Vermelho"
      ]
    },
    "agua-rocha": {
      title: "Água da Rocha",
      icon: "💧",
      description: "Provisão sobrenatural de água no deserto árido - sustento divino por 40 anos.",
      fullContent: `O milagre da água da rocha demonstra o cuidado providencial de Deus e Sua capacidade de prover o impossível em circunstâncias desesperadoras.

**O Primeiro Milagre (Êxodo 17:1-7):**
Em Refidim, apenas três dias após o milagre do Mar Vermelho, o povo se encontrou sem água no deserto árido. Começaram a murmurar e contender com Moisés, chegando quase a apedrejá-lo.

**A Instrução Divina:**
Deus ordenou a Moisés: "Toma contigo alguns dos anciãos de Israel, e toma na tua mão a tua vara... eis que Eu estarei ali diante de ti sobre a rocha, em Horebe, e tu ferirás a rocha, e dela sairão águas."

**O Milagre da Provisão:**
Moisés feriu a rocha com a mesma vara que havia trazido as pragas sobre o Egito. Imediatamente jorrou água abundante, suficiente para saciar cerca de 2 milhões de pessoas e seus animais.

**O Segundo Milagre (Números 20:1-13):**
Quarenta anos depois, em Cades, novamente faltou água. Desta vez, Deus ordenou que Moisés apenas falasse à rocha, mas ele a feriu duas vezes com ira. Água abundante saiu, mas Moisés foi disciplinado por não santificar a Deus diante do povo.

**Tipologia Cristã:**
O apóstolo Paulo revela que "a rocha era Cristo" (1 Coríntios 10:4). Cristo é a Rocha ferida uma só vez na cruz, de quem flui a água viva da salvação. O erro de Moisés foi "ferir" Cristo duas vezes, quando Ele foi oferecido uma só vez.

**Sustento Contínuo:**
Esta água milagrosa acompanhou Israel durante toda a jornada de 40 anos no deserto, uma provisão sobrenatural constante da graça divina.`,
      references: [
        "Êxodo 17:1-7 - Primeira água da rocha em Refidim",
        "Números 20:1-13 - Segunda água da rocha em Cades",
        "1 Coríntios 10:4 - A rocha era Cristo",
        "João 7:37-38 - Jesus, fonte de água viva"
      ]
    },
    "mana-ceu": {
      title: "O Maná do Céu",
      icon: "🍞",
      description: "Pão celestial enviado diariamente por 40 anos - sustento sobrenatural no deserto.",
      fullContent: `O maná representa uma das provisões mais extraordinárias e duradouras de Deus na história, alimentando sobrenaturalmente uma nação inteira por quatro décadas.

**O Milagre Diário:**
Três dias após a travessia do Mar Vermelho, começou a faltar comida no deserto. Deus prometeu "fazer chover pão do céu" e cumpriu fielmente por exatos 40 anos, exceto aos sábados.

**Características Sobrenaturais:**
O maná aparecia todas as manhãs como orvalho, exceto no sábado. Era como semente de coentro, branco, com sabor de mel. Cada pessoa deveria colher um ômer (cerca de 2,3 litros) por dia.

**Lições de Dependência:**
- **Provisão Diária:** Não se podia guardar para o dia seguinte (apodrecia), ensinando dependência diária de Deus
- **Descanso Sabático:** Na sexta-feira, caía porção dupla que se conservava, santificando o sábado
- **Suficiência Divina:** Quem colhia muito não tinha demais, quem colhia pouco não tinha de menos

**Tipologia de Cristo:**
Jesus declarou: "Eu sou o pão da vida... Vossos pais comeram o maná no deserto e morreram. Este é o pão que desce do céu, para que o que dele comer não morra" (João 6:48-50).

**O Memorial Perpétuo:**
Deus ordenou que um ômer de maná fosse guardado na arca da aliança como memorial perpétuo para as futuras gerações (Hebreus 9:4).

**O Fim do Maná:**
O maná cessou no dia seguinte à primeira Páscoa em Canaã, quando comeram dos frutos da terra prometida (Josué 5:12).`,
      references: [
        "Êxodo 16:1-36 - A provisão do maná",
        "Números 11:7-9 - Descrição detalhada do maná",
        "João 6:48-58 - Jesus, o pão da vida",
        "Hebreus 9:4 - Maná guardado na arca"
      ]
    }
  }

  const openModal = (miracleKey) => {
    setSelectedMiracle(miracleDetails[miracleKey])
  }

  const closeModal = () => {
    setSelectedMiracle(null)
  }

  return (
    <section id="miracles" className="miracles section gradient-bg-3" ref={scope}>
      <div className="container">
        <h2 className="section-title text-white">
          Os Grandes Milagres de Deus
        </h2>
        
        <p className="subtitle text-white mb-12">
          Manifestações do poder do Deus Todo-Poderoso através de Seu servo Moisés, 
          revelando Sua glória e supremacia sobre toda a criação
        </p>
        
        <div className="miracles-grid">
          {miracles.map((miracle, index) => (
            <div
              key={index}
              className="miracle-card card clickable-miracle"
              onClick={() => openModal(miracle.key)}
            >
              <div className="miracle-icon-container">
                <div className="miracle-icon">{miracle.icon}</div>
                <div className="icon-glow"></div>
              </div>
              
              <h3 className="miracle-title">{miracle.title}</h3>
              <p className="miracle-description">{miracle.description}</p>
              <div className="miracle-verse">{miracle.verse}</div>
              <div className="click-hint-miracle">👆 Clique para saber mais</div>
              
              <div className="miracle-decoration"></div>
            </div>
          ))}
        </div>
        
        <div className="miracles-quote">
          <blockquote>
            "E Moisés estendeu a sua mão sobre o mar, e o Senhor fez retirar o mar por um forte vento oriental toda aquela noite; e o mar tornou-se em seco, e as águas foram partidas."
          </blockquote>
          <cite>Êxodo 14:21</cite>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMiracle && (
          <motion.div
            className="miracle-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="miracle-modal-content"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="miracle-modal-close" onClick={closeModal}>×</button>
              
              <div className="miracle-modal-header">
                <span className="miracle-modal-icon">{selectedMiracle.icon}</span>
                <div>
                  <h2>{selectedMiracle.title}</h2>
                  <p className="miracle-modal-description">{selectedMiracle.description}</p>
                </div>
              </div>
              
              <div className="miracle-modal-body">
                <div className="miracle-modal-content-text">
                  {selectedMiracle.fullContent.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return <h3 key={index} className="miracle-modal-subtitle">{paragraph.slice(2, -2)}</h3>
                    }
                    return <p key={index}>{paragraph}</p>
                  })}
                </div>
                
                <div className="miracle-modal-references">
                  <h3>Referências Bíblicas:</h3>
                  <ul>
                    {selectedMiracle.references.map((ref, index) => (
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

export default Miracles 