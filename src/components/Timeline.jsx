import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Timeline.css'

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const timelineEvents = [
    {
      year: "1393 a.C.",
      title: "Nascimento Providencial",
      description: "Nasce durante a escravidão no Egito. Pela providência divina, é salvo das águas do Nilo e criado na casa de Faraó, preparando-se para sua futura missão como libertador do povo de Deus.",
      details: "Deus preparando Seu servo desde o berço (Êxodo 2:1-10)",
      icon: "👶",
      location: "Delta do Nilo, Egito",
      fullDescription: `Moisés nasce em um período crítico da história de Israel, quando o povo estava sob severa opressão egípcia. O Faraó havia decretado a morte de todos os meninos hebreus, mas Deus tinha um plano específico para este bebê.

Sua mãe, Joquebede, demonstra fé extraordinária ao escondê-lo por três meses e depois colocá-lo em uma arca de juncos no rio Nilo. A providência divina faz com que a própria filha de Faraó o encontre e o adote, garantindo que ele seja criado no palácio real com toda educação e privilégios da elite egípcia.

Este nascimento e preservação milagrosa demonstram como Deus prepara Seus servos desde antes mesmo do nascimento, posicionando-os estrategicamente para cumprir Seus propósitos eternos.`,
      biblicalReferences: [
        "Êxodo 2:1-10 - O nascimento e preservação de Moisés",
        "Atos 7:20-22 - Moisés instruído em toda sabedoria dos egípcios",
        "Hebreus 11:23 - A fé dos pais de Moisés"
      ]
    },
    {
      year: "1353 a.C.",
      title: "A Escolha Pela Fé",
      description: "Aos 40 anos, escolhe sofrer com o povo de Deus a viver nos prazeres do pecado. Mata um egípcio e foge para Midiã, onde Deus o prepara como pastor por 40 anos.",
      details: "Pela fé, Moisés rejeitou ser chamado filho da filha de Faraó (Hebreus 11:24-25)",
      icon: "🏃",
      location: "Do Egito para Midiã",
      fullDescription: `Aos 40 anos, Moisés toma uma decisão crucial que mudaria sua vida para sempre. Apesar de ter sido criado como príncipe do Egito com acesso a todas as riquezas e honras do império mais poderoso da época, ele escolhe se identificar com seu povo oprimido.

Ao ver um egípcio espancando um hebreu, Moisés intervém e mata o agressor, revelando seu coração compassivo para com seu povo. No entanto, quando tenta mediar uma briga entre dois hebreus no dia seguinte, descobre que sua ação foi descoberta e precisa fugir para salvar sua vida.

Esta fuga para Midiã não é apenas um escape, mas parte do plano divino de preparação. Por 40 anos, Deus molda o caráter de Moisés no deserto, transformando-o de um príncipe impulsivo em um pastor humilde e paciente, preparando-o para a maior tarefa de sua vida.`,
      biblicalReferences: [
        "Êxodo 2:11-15 - A fuga de Moisés para Midiã",
        "Hebreus 11:24-26 - A escolha de Moisés pela fé",
        "Atos 7:23-29 - O relato de Estêvão sobre este período"
      ]
    },
    {
      year: "1313 a.C.",
      title: "O Chamado Divino na Sarça",
      description: "No Monte Horebe, Deus Se revela na sarça ardente que não se consome. O Senhor comissiona Moisés para libertar Seu povo, revelando Seu nome sagrado 'EU SOU O QUE SOU'.",
      details: "Primeira revelação do nome divino na história (Êxodo 3:1-15)",
      icon: "🔥",
      location: "Monte Horebe (Sinai)",
      fullDescription: `Este é um dos momentos mais sagrados e transformadores da história bíblica. Enquanto Moisés apascentava o rebanho de seu sogro Jetro, Deus Se manifesta de forma sobrenatural em uma sarça que ardia mas não se consumia.

Neste encontro, Deus revela Seu nome sagrado "EU SOU O QUE SOU" (YHWH), estabelecendo Sua identidade como o Deus eterno, auto-existente e imutável. Este nome se torna o fundamento da fé judaico-cristã, revelando a natureza eterna e soberana de Deus.

Moisés, inicialmente relutante e sentindo-se inadequado, recebe a comissão divina para libertar Israel do Egito. Deus promete estar com ele e lhe dá sinais milagrosos para autenticar sua missão diante do povo e de Faraó. Este chamado marca o início da maior operação de resgate da história.`,
      biblicalReferences: [
        "Êxodo 3:1-15 - O chamado na sarça ardente",
        "Êxodo 4:1-17 - Os sinais milagrosos dados a Moisés",
        "João 8:58 - Jesus usa o mesmo nome divino 'EU SOU'"
      ]
    },
    {
      year: "1313 a.C.",
      title: "Confronto com o Poder Mundial",
      description: "Moisés e Aarão se apresentam diante de Faraó em nome do Deus de Israel. Demonstram o poder divino através de sinais, mas o coração de Faraó se endurece contra o Senhor.",
      details: "O poder de Deus versus o poder humano (Êxodo 7:1-13)",
      icon: "👑",
      location: "Palácio Real, Egito",
      fullDescription: `Este confronto representa mais do que uma negociação diplomática - é um embate espiritual entre o poder de Deus e as forças do mal que oprimem Seu povo. Moisés e Aarão entram no palácio mais poderoso do mundo antigo para fazer uma demanda impossível: liberte o povo hebreu.

Faraó, considerado um deus pelos egípcios, recusa-se a reconhecer a autoridade do Deus de Israel. Quando Aarão lança sua vara que se transforma em serpente, os magos egípcios conseguem reproduzir o milagre, mas a vara de Aarão devora as deles, demonstrando a supremacia do poder divino.

O endurecimento do coração de Faraó serve ao propósito divino de demonstrar o poder de Deus através das pragas que virão, para que toda a terra saiba que o Senhor é Deus. Este confronto estabelece o padrão de como Deus lida com líderes orgulhosos que se opõem à Sua vontade.`,
      biblicalReferences: [
        "Êxodo 7:1-13 - O primeiro confronto com Faraó",
        "Êxodo 5:1-2 - A demanda inicial de libertação",
        "Romanos 9:17 - O propósito de Deus com Faraó"
      ]
    },
    {
      year: "1312 a.C.",
      title: "As Dez Pragas - Juízo de Deus",
      description: "Deus manifesta Seu poder através de dez pragas devastadoras, demonstrando Sua supremacia sobre todos os deuses do Egito e forçando a libertação de Seu povo.",
      details: "Cada praga humilhava uma divindade egípcia (Êxodo 7-12)",
      icon: "⚡",
      location: "Todo o Egito",
      fullDescription: `As dez pragas não foram apenas demonstrações de poder, mas juízos específicos contra os deuses do Egito. Cada praga atacava diretamente uma divindade egípcia, provando sua impotência diante do Deus verdadeiro.

As pragas seguiram uma progressão: sangue (contra Hápi, deus do Nilo), rãs (contra Heqet, deusa-rã), piolhos, moscas, morte do gado (contra Ápis, touro sagrado), úlceras, saraiva (contra Nut, deusa do céu), gafanhotos (contra Osíris, deus da fertilidade), trevas (contra Rá, deus-sol) e morte dos primogênitos (contra Faraó, considerado deus).

Cada praga aumentava em intensidade, dando oportunidades para arrependimento. Os magos egípcios conseguiram imitar as primeiras pragas, mas foram forçados a admitir "Este é o dedo de Deus" quando não conseguiram produzir piolhos. As pragas demonstraram que o Deus de Israel é soberano sobre toda a criação.`,
      biblicalReferences: [
        "Êxodo 7:14-12:36 - As dez pragas detalhadas",
        "Salmo 78:43-51 - Recordação poética das pragas",
        "Êxodo 8:19 - Os magos reconhecem o poder divino"
      ]
    },
    {
      year: "1312 a.C.",
      title: "O Cordeiro Sacrificial",
      description: "Deus estabelece o sacrifício do cordeiro sem mácula como proteção contra a morte dos primogênitos. Este evento demonstra a necessidade de obediência exata aos mandamentos divinos.",
      details: "Obediência rigorosa às ordenanças de Deus (Êxodo 12:1-13)",
      icon: "🐑",
      location: "Terra de Gósen, Egito",
      fullDescription: `A instituição da Páscoa marca um dos momentos mais proféticos e tipológicos da história bíblica. Deus estabelece um ritual preciso: cada família deveria tomar um cordeiro sem defeito, matá-lo no crepúsculo, e aplicar seu sangue nos umbrais das portas.

Este cordeiro deveria ser perfeito, macho de um ano, separado por quatro dias para inspeção. O sangue aplicado nas portas seria o sinal para o anjo da morte "passar por cima" (Páscoa) aquela casa. A carne deveria ser assada e comida com ervas amargas e pães sem fermento, com as pessoas vestidas para viagem.

Este evento é profético, apontando para Cristo como o "Cordeiro de Deus que tira o pecado do mundo". A obediência exata às instruções divinas era questão de vida ou morte - não havia espaço para interpretações humanas ou modificações. Isso ensina que a salvação vem pela obediência específica aos mandamentos de Deus, não por obras humanas.`,
      biblicalReferences: [
        "Êxodo 12:1-28 - A instituição da Páscoa",
        "João 1:29 - Jesus como o Cordeiro de Deus",
        "1 Coríntios 5:7 - Cristo, nossa Páscoa"
      ]
    },
    {
      year: "1312 a.C.",
      title: "O Milagre do Mar Vermelho",
      description: "Encurralados pelo exército egípcio, Deus abre o Mar Vermelho. Israel passa em terra seca enquanto os egípcios são destruídos - demonstração suprema do poder libertador de Deus.",
      details: "Grande livramento do povo escolhido de Deus (Êxodo 14:21-31)",
      icon: "🌊",
      location: "Mar Vermelho",
      fullDescription: `Este é possivelmente o milagre mais espetacular do Antigo Testamento. Após deixar o Egito, Israel se encontra aparentemente encurralado: o Mar Vermelho à frente, montanhas aos lados, e o poderoso exército egípcio se aproximando por trás.

Deus instrui Moisés a estender sua vara sobre o mar. Durante toda a noite, um vento oriental forte sopra, dividindo as águas e criando um caminho seco no meio do mar. As águas ficam como muros de ambos os lados, permitindo que cerca de 2 milhões de israelitas atravessem em segurança.

Quando os egípcios entram na passagem seca em perseguição, Deus confunde seus carros de guerra e depois faz as águas retornarem, destruindo completamente o exército de Faraó. Nenhum egípcio sobreviveu. Este evento liberta Israel definitivamente da escravidão e estabelece a fama de Deus entre todas as nações. É um tipo da salvação - liberdade completa do domínio do pecado.`,
      biblicalReferences: [
        "Êxodo 14:21-31 - A travessia do Mar Vermelho",
        "Êxodo 15:1-21 - O cântico de vitória",
        "1 Coríntios 10:1-2 - Tipologia do batismo"
      ]
    },
    {
      year: "1312 a.C.",
      title: "A Lei de Deus no Monte Sinai",
      description: "No Monte Sinai, Deus entrega os Dez Mandamentos e toda a Lei através de Moisés. A Lei revela a santidade de Deus e estabelece os padrões morais para o povo.",
      details: "A Lei é santa, justa e boa (Romanos 7:12)",
      icon: "📜",
      location: "Monte Sinai",
      fullDescription: `Cinquenta dias após a saída do Egito, Israel chega ao Monte Sinai onde ocorre uma das revelações mais importantes da história. Deus desce sobre o monte em fogo, com trovões, relâmpagos e som de trombeta cada vez mais forte, fazendo toda a montanha tremer violentamente.

Na presença terrível da santidade divina, Deus entrega os Dez Mandamentos - princípios morais eternos que refletem Seu caráter santo. Estes mandamentos se dividem em dois grupos: os primeiros quatro regulam o relacionamento com Deus, e os últimos seis o relacionamento com o próximo.

Além dos Dez Mandamentos, Deus entrega todo o sistema legal, cerimonial e civil que governaria Israel. A Lei serve como pedagogo para conduzir à Cristo, revelando a santidade de Deus e a necessidade humana de um Salvador. O povo, aterrorizado pela presença divina, pede que Moisés seja seu mediador, estabelecendo um padrão para o sacerdócio mediador.`,
      biblicalReferences: [
        "Êxodo 19:16-20:17 - A entrega dos Dez Mandamentos",
        "Deuteronômio 5:4-22 - Repetição dos mandamentos",
        "Gálatas 3:24 - A Lei como pedagogo"
      ]
    },
    {
      year: "1311 a.C.",
      title: "O Bezerro de Ouro - Intercessão",
      description: "Israel peca adorando o bezerro de ouro. Moisés intercede pelo povo, demonstrando seu papel como mediador fiel entre Deus e o povo. Deus mostra Sua misericórdia e perdão.",
      details: "Moisés intercede como mediador fiel (Êxodo 32:11-14)",
      icon: "💥",
      location: "Monte Sinai",
      fullDescription: `Enquanto Moisés está no monte recebendo as tábuas da Lei, o povo se impacienta e pressiona Aarão a fazer um deus visível. Aarão cede à pressão e molda um bezerro de ouro com os ornamentos do povo, proclamando uma festa "ao Senhor".

Esta apostasia acontece apenas 40 dias após testemunharem a glória de Deus no Sinai! Representa a tendência humana de buscar o tangível em lugar do espiritual, e de criar deuses conforme suas próprias conveniências. O pecado é especialmente grave porque quebra o primeiro e segundo mandamentos recém-dados.

Quando Moisés desce e vê a idolatria, quebra as tábuas da Lei em justa indignação. Porém, demonstra seu coração pastoral ao interceder fervorosamente pelo povo. Sua oração é uma das mais poderosas da Bíblia, oferecendo até mesmo ser riscado do livro de Deus em favor do povo. Deus aceita sua intercessão e renova a aliança, mostrando que a misericórdia divina triunfa sobre o juízo quando há genuína mediação.`,
      biblicalReferences: [
        "Êxodo 32:1-35 - O incidente do bezerro de ouro",
        "Êxodo 32:11-14, 31-32 - A intercessão de Moisés",
        "Deuteronômio 9:7-29 - Recordação do evento"
      ]
    },
    {
      year: "1312-1272 a.C.",
      title: "40 Anos de Ensino no Deserto",
      description: "Devido à incredulidade, uma geração morre no deserto. Moisés ensina e forma uma nova geração, estabelecendo o culto e as ordenanças conforme a vontade de Deus.",
      details: "O deserto como escola de Deus para Seu povo (Deuteronômio 8:2-3)",
      icon: "🏜️",
      location: "Deserto do Sinai",
      fullDescription: `Os 40 anos no deserto não foram punição arbitrária, mas uma escola divina necessária. Após a rebelião em Cades-Barneia, onde os israelitas se recusaram a entrar na Terra Prometida por medo dos gigantes, Deus decretou que aquela geração morreria no deserto.

Durante estas quatro décadas, Moisés funciona como pastor, professor e líder espiritual. Ele estabelece o sistema de culto detalhado, com o tabernáculo como centro da vida nacional. Ensina as leis civis, morais e cerimoniais, preparando a nova geração para viver como nação teocrática.

O deserto se torna laboratório de fé: Deus provê maná diariamente por 40 anos, ensina dependência e confiança. As roupas e sandálias não se gastam, demonstrando cuidado divino. Os levitas são separados para o serviço sagrado, e todo o sistema sacrificial é estabelecido. Moisés forma líderes e prepara Josué como seu sucessor, garantindo continuidade da liderança.`,
      biblicalReferences: [
        "Números 14:26-35 - O decreto dos 40 anos",
        "Deuteronômio 8:1-20 - Lições do deserto",
        "Neemias 9:19-21 - Cuidado divino no deserto"
      ]
    },
    {
      year: "1273 a.C.",
      title: "A Última Profecia e Partida",
      description: "Aos 120 anos, Moisés profetiza sobre o Profeta que viria, abençoa as tribos e contempla a Terra Prometida antes de morrer. Deus o sepulta pessoalmente em local desconhecido.",
      details: "O Senhor levantará um Profeta semelhante a Moisés (Deuteronômio 18:15)",
      icon: "🏔️",
      location: "Monte Nebo, Jordânia",
      fullDescription: `A partida de Moisés é única na história. Aos 120 anos, com vista ainda clara e vigor não diminuído, ele sobe ao Monte Nebo para seu encontro final com Deus. Antes disso, pronuncia suas últimas palavras ao povo no livro de Deuteronômio - um discurso magistral de despedida.

Sua profecia mais importante é sobre "O Profeta" que Deus levantaria semelhante a ele (Deuteronômio 18:15-19). Esta profecia messiânica aponta diretamente para Cristo, o Mediador da Nova Aliança. Moisés abençoa cada tribo individualmente, demonstrando amor pastoral até o fim.

Do Monte Nebo, Deus lhe mostra toda a Terra Prometida - da Dan até Berseba, do mar até o deserto. Embora não possa entrar fisicamente, Deus permite que ele veja com clareza sobrenatural toda a herança de seu povo. Então Moisés morre, e o próprio Deus o sepulta em local secreto, preservando-o da idolatria futura. Sua morte marca o fim da era da Lei e prepara o caminho para a era da Graça.`,
      biblicalReferences: [
        "Deuteronômio 34:1-12 - A morte de Moisés",
        "Deuteronômio 18:15-19 - Profecia sobre o Profeta",
        "Atos 3:22-23 - Pedro identifica Jesus como este Profeta"
      ]
    }
  ]

  const openModal = (event) => {
    setSelectedEvent(event)
  }

  const closeModal = () => {
    setSelectedEvent(null)
  }

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
              <div 
                className="timeline-content card"
                onClick={() => openModal(event)}
                style={{ cursor: 'pointer' }}
              >
                <div className="timeline-icon">
                  <span>{event.icon}</span>
                </div>
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
                <div className="timeline-details">{event.details}</div>
                <div className="timeline-location">📍 {event.location}</div>
                <div className="click-hint">👆 Clique para saber mais</div>
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

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <span className="modal-icon">{selectedEvent.icon}</span>
                <div>
                  <h2>{selectedEvent.title}</h2>
                  <div className="modal-year">{selectedEvent.year}</div>
                  <div className="modal-location">📍 {selectedEvent.location}</div>
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-description">
                  {selectedEvent.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="modal-references">
                  <h3>Referências Bíblicas:</h3>
                  <ul>
                    {selectedEvent.biblicalReferences.map((ref, index) => (
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

export default Timeline 