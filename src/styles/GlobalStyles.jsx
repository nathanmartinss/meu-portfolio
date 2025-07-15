import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app {
    min-height: 100vh;
    transition: all 0.3s ease;
  }

  /* Tema Dark */
  .app.dark {
    background-color: #0a0a0a;
    color: #e4e4e7;
  }

  /* Tema Light */
  .app.light {
    background-color: #ffffff;
    color: #18181b;
  }

  /* Header */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .app.dark .header {
    background-color: rgba(10, 10, 10, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .app.light .header {
    background-color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .logo-text {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #8b5cf6;
    letter-spacing: -0.02em;
    position: relative;
    text-decoration: none;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradientShift 3s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .logo-text:hover {
    transform: translateY(-1px) scale(1.01);
    filter: drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3));
    animation-duration: 1s;
  }

  .logo-text::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #8b5cf6, #a855f7, #7c3aed);
    border-radius: 8px;
    opacity: 0;
    z-index: -1;
    filter: blur(8px);
    transition: opacity 0.4s ease;
  }

  .logo-text:hover::before {
    opacity: 0.1;
  }

  .logo-text::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #8b5cf6, #a855f7, #7c3aed);
    border-radius: 2px;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .logo-text:hover::after {
    width: 110%;
  }

  /* Menu Desktop */
  .menu-desktop {
    display: flex;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    .menu-desktop {
      display: none;
    }
  }

  .menu-item {
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }

  .app.dark .menu-item {
    color: #a1a1aa;
  }

  .app.light .menu-item {
    color: #52525b;
  }

  .app.dark .menu-item:hover,
  .app.dark .menu-item.active {
    color: #a78bfa;
    background-color: rgba(139, 92, 246, 0.15);
  }

  .app.light .menu-item:hover,
  .app.light .menu-item.active {
    color: #8b5cf6;
    background-color: rgba(139, 92, 246, 0.1);
  }

  /* Botões de Ação */
  .action-buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .language-toggle {
    background: none;
    border: 2px solid;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.375rem 0.5rem;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
    min-width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app.dark .language-toggle {
    border-color: rgba(255, 255, 255, 0.2);
    color: #d1d5db;
  }

  .app.light .language-toggle {
    border-color: rgba(0, 0, 0, 0.1);
    color: #374151;
  }

  .app.dark .language-toggle:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .app.light .language-toggle:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.2);
  }

  .theme-toggle {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .app.dark .theme-toggle:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .app.light .theme-toggle:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* Menu Mobile Toggle */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 24px;
  }

  .hamburger span {
    width: 100%;
    height: 2px;
    transition: all 0.3s ease;
  }

  .app.dark .hamburger span {
    background-color: #e4e4e7;
  }

  .app.light .hamburger span {
    background-color: #18181b;
  }

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  /* Menu Mobile */
  .menu-mobile {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 0.5rem;
  }

  .menu-item-mobile {
    text-decoration: none;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }

  .app.dark .menu-item-mobile {
    color: #a1a1aa;
  }

  .app.light .menu-item-mobile {
    color: #52525b;
  }

  .app.dark .menu-item-mobile:hover,
  .app.dark .menu-item-mobile.active {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .app.light .menu-item-mobile:hover,
  .app.light .menu-item-mobile.active {
    color: #000000;
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* Conteúdo Principal */
  .main-content {
    padding-top: 5rem;
    min-height: 100vh;
  }

  .content-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  /* Status */
  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #6b7280;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .status-text {
    font-size: 0.875rem;
    font-family: monospace;
  }

  .app.dark .status-text {
    color: #6b7280;
  }

  .app.light .status-text {
    color: #9ca3af;
  }

  .user-handle {
    font-family: monospace;
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }

  .app.dark .user-handle {
    color: #6b7280;
  }

  .app.light .user-handle {
    color: #9ca3af;
  }

  /* Seção de Introdução */
  .intro-section {
    line-height: 1.8;
  }

  .greeting {
    font-size: 1.875rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .description p {
    margin-bottom: 1.5rem;
  }

  .tech-link {
    text-decoration: none;
    font-family: monospace;
    font-size: 0.875rem;
    padding: 0.125rem 0.375rem;
    margin: 0 0.125rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }

  .tech-link:hover {
    background-color: rgba(139, 92, 246, 0.1);
  }

  .inline-link {
    color: #8b5cf6;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: all 0.2s ease;
  }

  .inline-link:hover {
    color: #7c3aed;
  }

  .closing {
    margin-top: 2rem;
    font-size: 1.125rem;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .nav-content {
      padding: 1rem;
    }

    .content-wrapper {
      padding: 1rem;
    }

    .greeting {
      font-size: 1.5rem;
    }
  }
`;

export default GlobalStyles;