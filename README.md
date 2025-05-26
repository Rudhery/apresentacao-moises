# 📿 **MOISÉS** - O Libertador de Israel

<div align="center">
  
  ![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
  ![React](https://img.shields.io/badge/React-18.2.0-blue)
  ![GSAP](https://img.shields.io/badge/GSAP-3.12.2-green)
  ![License](https://img.shields.io/badge/License-MIT-yellow)

### 🎭 **Uma Experiência Imersiva sobre a Vida do Maior Libertador da História**

_Apresentação interativa desenvolvida em React com animações avançadas em GSAP_

<a href="https://apresentacao-moises.vercel.app/" target="_blank" rel="noopener noreferrer" style="color:white;">
  🔗 <strong>Ver Demo</strong>
</a>


</div>

---

## 🌟 **Sobre o Projeto**

Esta apresentação interativa conta a história épica de **Moisés**, o grande libertador do povo de Israel, através de uma experiência web moderna e envolvente. Desenvolvida com **React** e **GSAP**, oferece uma jornada visual através dos principais eventos bíblicos da vida de Moisés, desde sua salvação das águas do Nilo até sua morte no Monte Nebo.

### 🎯 **Perspectiva Bíblica**

- Baseado na **perspectiva evangélica protestante**
- Conteúdo fundamentado nas **Sagradas Escrituras**
- Interpretação **cristocêntrica** dos eventos
- Referências bíblicas precisas e detalhadas

---

## ✨ **Funcionalidades Principais**

### 🏛️ **Seções Interativas**

- **🦸 Hero Section** - Apresentação com estatísticas impressionantes
- **📅 Timeline** - Linha do tempo interativa da vida de Moisés
- **⚡ Milagres** - Detalhes dos 6 grandes milagres divinos
- **🏆 Legado** - O impacto eterno de Moisés na história

### 🎨 **Experiência Visual**

- **🌟 Sistema de Partículas** - Background animado com símbolos bíblicos
- **📱 Design Responsivo** - Otimizado para todos os dispositivos
- **🎭 Animações GSAP** - Transições suaves e efeitos 3D
- **🌈 Paleta Bíblica** - Cores inspiradas em pergaminhos antigos

### 🚪 **Modais Detalhados**

- **📖 Conteúdo Extenso** - Cada elemento possui informações aprofundadas
- **📝 Referências Bíblicas** - Versículos específicos para cada tópico
- **🔍 Análise Teológica** - Interpretação evangélica dos eventos

---

## 🛠️ **Tecnologias Utilizadas**

<div align="center">

| Frontend                                                                                                          | Animações                                                                                                             | Estilização                                                                                        | Ferramentas                                                                                     |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)         | ![GSAP](https://img.shields.io/badge/GSAP-3.12.2-88CE02?style=for-the-badge&logo=greensock&logoColor=white)           | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)    | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)    |

</div>

### 🎮 **Bibliotecas Principais**

```json
{
  "gsap": "^3.12.2",
  "react": "^18.2.0",
  "framer-motion": "^10.16.4",
  "lucide-react": "^0.263.1"
}
```

---

## 🚀 **Instalação**

### 📋 **Pré-requisitos**

- Node.js (versão 16 ou superior)
- NPM ou Yarn

### ⚡ **Passos Rápidos**

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Rudhery/apresentacao-moises.git
   cd apresentacao-moises
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

---

## 📁 **Estrutura do Projeto**

```
src/
├── 📱 components/
│   ├── 🏛️ Hero.jsx              # Seção principal com estatísticas
│   ├── 📅 Timeline.jsx          # Linha do tempo da vida de Moisés
│   ├── ⚡ Miracles.jsx          # Seção dos milagres divinos
│   ├── 🏆 Legacy.jsx            # Legado e impacto de Moisés
│   ├── 🧭 Navigation.jsx        # Menu de navegação
│   ├── ✨ ParticleBackground.jsx # Sistema de partículas animadas
│   ├── ⏳ LoadingScreen.jsx     # Tela de carregamento
│   └── 🎨 *.css                 # Estilos componentes
├── 🎣 hooks/
│   └── 🎭 useGSAP.js            # Hook customizado para animações GSAP
├── 🎨 App.css                   # Estilos globais
└── 📱 App.jsx                   # Componente principal
```

---

## 🎯 **Funcionalidades Detalhadas**

### 🦸 **Hero Section**

- **📊 Estatísticas Interativas**: 120 anos de vida, 40 anos no deserto, 10 pragas, 5 livros
- **🏷️ Características**: Príncipe & Pastor, Profeta de Deus, Mediador da Lei
- **🎭 Animações**: Efeito typewriter, parallax, hover effects
- **📱 Responsivo**: Adaptação completa para mobile

### 📅 **Timeline Interativa**

- **⏰ Períodos da Vida**: Nascimento, juventude, deserto, libertação, liderança, morte
- **📖 Detalhes Bíblicos**: Contexto histórico e teológico de cada período
- **🎨 Visual Atrativo**: Cards com animações de entrada escalonadas

### ⚡ **Milagres Divinos**

1. **🔥 A Sarça Ardente** - Chamado divino e revelação do nome sagrado
2. **🐍 Vara em Serpente** - Primeiro sinal de autenticação
3. **⚡ Dez Pragas** - Juízo divino contra os deuses do Egito
4. **🌊 Mar Vermelho** - O maior milagre de libertação
5. **💧 Água da Rocha** - Provisão no deserto
6. **🍞 Maná do Céu** - Sustento sobrenatural por 40 anos

### 🎨 **Sistema de Partículas**

- **✝️ Símbolos Bíblicos**: Cruz, pomba, estrela, pergaminho, fogo, água
- **🌊 Movimento Fluido**: Animações parallax baseadas no scroll
- **🎯 Performance**: Otimizado para não impactar a experiência

---

## 🎨 **Paleta de Cores**

<div align="center">

| Cor                 | Hex       | Uso                      |
| ------------------- | --------- | ------------------------ |
| 🟤 **Parchment**    | `#F4F1DE` | Background principal     |
| 🟫 **Antique Gold** | `#B8860B` | Destaques e botões       |
| 🟤 **Olive Brown**  | `#8B7355` | Textos secundários       |
| 🟣 **Deep Purple**  | `#4A4A8A` | Gradientes e backgrounds |
| 🔵 **Royal Blue**   | `#667DEA` | Efeitos e animações      |

</div>

---

## 📱 **Responsividade**

- **🖥️ Desktop** (1920px+): Experiência completa com todas as animações
- **💻 Laptop** (1024px-1919px): Layout otimizado para telas médias
- **📱 Tablet** (768px-1023px): Grid adaptativo e botões maiores
- **📱 Mobile** (320px-767px): Interface touch-friendly e navegação simplificada

---

## 🎭 **Animações GSAP**

### ✨ **Efeitos Implementados**

- **📝 Typewriter**: Escrita animada do título principal
- **🔄 Parallax**: Movimento baseado no scroll
- **📊 Stagger**: Revelação escalonada de elementos
- **🎯 Hover Effects**: Interações ao passar o mouse
- **🚪 Modal Transitions**: Entrada e saída suaves dos modais
- **🌊 Floating Elements**: Elementos flutuantes com movimento orgânico

### 🎣 **Hook Customizado**

```javascript
// Exemplo de uso do hook useGSAP
const { scope, gsap, ScrollTrigger } = useGSAP();

// Animação de revelação
animations.staggerReveal([".hero-title", ".hero-description", ".hero-stats"]);
```

---

## 📖 **Conteúdo Bíblico**

### 🔍 **Fundamentação Teológica**

- **📜 Pentateuco**: Baseado nos 5 livros escritos por Moisés
- **✝️ Tipologia Cristã**: Conexões com Cristo em cada evento
- **📝 Referências**: Mais de 50 versículos bíblicos citados
- **🏛️ Contexto Histórico**: Situação do Egito e Israel antigos

### 📚 **Temas Abordados**

- 🔥 **Chamado Divino**: A sarça ardente e a comissão
- ⚖️ **Mediação**: Moisés como tipo de Cristo
- 🏺 **Milagres**: Demonstrações do poder de Deus
- 📜 **Lei**: Estabelecimento dos princípios divinos
- 🏆 **Legado**: Impacto eterno na história da salvação

---

## 👨‍💻 **Autor**

Desenvolvido com ❤️ e dedicação para glorificar a Deus através da tecnologia.

### 🤝 **Contribuições**

Contribuições são bem-vindas! Sinta-se à vontade para:

- 🐛 Reportar bugs
- 💡 Sugerir novas funcionalidades
- 📖 Melhorar a documentação
- 🎨 Aprimorar o design

---

## 📜 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🙏 **Agradecimentos**

- **📖 Sagradas Escrituras** - Fonte de toda verdade e inspiração
<!-- - **⛪ Igreja Evangélica** - Perspectiva teológica fundamentada -->
- **👥 Comunidade React** - Ferramentas e conhecimento compartilhado
- **🎨 GSAP Team** - Biblioteca de animações extraordinária

---

<div align="center">

### 🎯 **"Porque a palavra de Deus é viva, e eficaz..."** - Hebreus 4:12

**Deus seja Louvado** ✝️

</div>
