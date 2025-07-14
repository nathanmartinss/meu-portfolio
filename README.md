# 🚀 Portfólio Nathan Martins

Um portfólio moderno e responsivo desenvolvido em React, apresentando minha jornada como Desenvolvedor Full-Stack. O projeto conta com design clean, modo escuro/claro, animações suaves e uma experiência de usuário otimizada.

![Preview do Portfólio](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3)

## 🌟 Demonstração

**Deploy:** [nathanm.com.br](https://nathanm.br)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Execução](#-instalação-e-execução)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Arquitetura](#-arquitetura)
- [Design System](#-design-system)
- [Responsividade](#-responsividade)
- [Performance](#-performance)
- [Contribuição](#-contribuição)
- [Autor](#-autor)

## 🎯 Sobre o Projeto

Este portfólio foi desenvolvido com o objetivo de apresentar minha experiência profissional, projetos desenvolvidos e habilidades técnicas de forma interativa e moderna. O projeto demonstra competências em desenvolvimento frontend, design responsivo, e boas práticas de desenvolvimento.

### Características Principais:
- ✅ **Design Responsivo**: Adaptável a todos os dispositivos
- ✅ **Tema Escuro/Claro**: Sistema de temas dinâmico
- ✅ **Animações Fluidas**: Transições e micro-interações
- ✅ **SEO Otimizado**: Meta tags e estrutura semântica
- ✅ **Performance**: Carregamento otimizado e lazy loading
- ✅ **Acessibilidade**: Compatível com leitores de tela

## 🛠 Tecnologias Utilizadas

### Frontend Core
- **[React](https://reactjs.org/)** `^18.2.0` - Biblioteca para interfaces de usuário
- **[React Router DOM](https://reactrouter.com/)** `^6.x` - Roteamento SPA
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** - Estilização avançada com CSS Variables

### Ícones e UI
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
  - Simple Icons (Si) - Ícones de tecnologias
  - Font Awesome (Fa) - Ícones gerais
  - Material Design (Md) - Ícones do Material Design

### Ferramentas de Desenvolvimento
- **[Create React App](https://create-react-app.dev/)** - Setup e build
- **[PostCSS](https://postcss.org/)** - Processamento de CSS
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### Design e UX
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS Variables** - Sistema de temas dinâmico
- **Keyframes Animations** - Animações personalizadas
- **Mobile-First Design** - Abordagem responsiva

## ⚡ Funcionalidades

### 🏠 Página Inicial (Home)
- Apresentação pessoal com cálculo automático de idade
- Stack de tecnologias com ícones interativos
- Cards de navegação rápida
- Links para redes sociais
- Download de currículo (PT/EN)

### 👨‍💻 Sobre Mim (About)
- História profissional detalhada
- Formação acadêmica
- Experiências e competências
- Valores e objetivos profissionais

### 🚀 Projetos (Projects)
- Showcase de projetos destacados
- Grid responsivo de projetos
- Tecnologias utilizadas em cada projeto
- Links para repositórios e demos
- Categorização (Destacados/Outros)

### 🎨 Recursos Visuais
- **Modo Escuro/Claro**: Alternância dinâmica de temas
- **Animações**: Hover effects, transições suaves
- **Ícones Coloridos**: Ícones temáticos para cada tecnologia
- **Loading States**: Estados de carregamento para imagens

## 📁 Estrutura do Projeto

```
my-app/
├── public/
│   ├── assets/
│   │   ├── cv-nathan-portugues.pdf
│   │   └── cv-nathan-english.pdf
│   ├── images/
│   │   ├── about/
│   │   │   └── profile.jpeg
│   │   └── project/
│   │       ├── gamesgalaxy.png
│   │       ├── techtree.jpg
│   │       └── ...
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── styles/
│   │   ├── About.css
│   │   ├── GlobalStyles.jsx
│   │   ├── Home.css
│   │   └── Projects.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── tailwind.config.js
```

## 🚀 Instalação e Execução

### Pré-requisitos
- **Node.js** (versão 16.x ou superior)
- **npm** (versão 8.x ou superior)

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/nathanmartinss/portfolio.git
cd portfolio/my-app
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm start
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📜 Scripts Disponíveis

### `npm start`
Executa o app em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`
Inicia o test runner no modo interativo.\
Veja mais sobre [testes](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`
Compila o app para produção na pasta `build`.\
Otimiza o build para melhor performance e minifica os arquivos.

### `npm run eject`
**Nota: esta é uma operação irreversível!**\
Remove a dependência única de build tool do projeto.

## 🏗 Arquitetura

### Padrões Utilizados
- **Component-Based Architecture**: Componentes reutilizáveis e modulares
- **CSS Modules Pattern**: Organização de estilos por componente
- **Responsive Design**: Mobile-first approach
- **State Management**: useState hooks para gerenciamento local

### Sistema de Roteamento
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
</Routes>
```

### Sistema de Temas
```css
:root {
  --primary-color: #8b5cf6;
  --text-primary: #1f2937;
  --card-bg: #ffffff;
  /* ... */
}

.dark {
  --text-primary: #f7fafc;
  --card-bg: #1e2122;
  /* ... */
}
```

## 🎨 Design System

### Cores Principais
- **Primary**: `#8b5cf6` (Purple 500)
- **Primary Hover**: `#7c3aed` (Purple 600)
- **Text Primary**: `#1f2937` (Gray 900)
- **Text Secondary**: `#4b5563` (Gray 600)

### Tipografia
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700
- **Scale**: 0.8rem → 2.2rem

### Espaçamento
- **Gap System**: 0.5rem, 1rem, 1.5rem, 2rem, 2.8rem
- **Padding**: 1rem, 1.5rem, 2rem
- **Border Radius**: 12px, 16px, 50px

## 📱 Responsividade

### Breakpoints
- **Mobile**: `< 480px`
- **Tablet**: `481px - 768px`
- **Desktop**: `769px - 1024px`
- **Large Desktop**: `> 1024px`

### Grid System
```css
/* Desktop */
.grid {
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

/* Mobile */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
```

## ⚡ Performance

### Otimizações Implementadas
- **Lazy Loading**: Carregamento sob demanda de imagens
- **Code Splitting**: Divisão de código por rotas
- **CSS Optimization**: Minificação e compressão
- **Image Optimization**: Fallbacks para imagens quebradas
- **Bundle Size**: Análise e otimização do tamanho do build

### Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

## 👨‍💻 Autor

**Nathan Martins**
- **GitHub**: [@nathanmartinss](https://github.com/nathanmartinss)
- **LinkedIn**: [nathanmartinss](https://linkedin.com/in/nathanmartinss)
- **Email**: nathanmartinss@icloud.com

## 🌟 Inspiração

**Mateusf:** [v9.mateusf.com](https://v9.mateusf.com)

---

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
