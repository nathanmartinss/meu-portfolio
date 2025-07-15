import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

function Header({ isDarkMode, toggleTheme, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const menuItems = [
    { id: 'home', label: t('nav.home'), href: '/' },
    { id: 'about', label: t('nav.about'), href: '/about' },
    { id: 'projects', label: t('nav.projects'), href: '/projects' },
  ];

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo/Nome */}
          <div className="logo">
            <span className="logo-text">Nathan M.</span>
          </div>

          {/* Menu Desktop */}
          <div className="menu-desktop">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`menu-item ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="action-buttons">
            {/* Toggle Language */}
            <button
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              {language === 'pt' ? '🇧🇷' : '🇺🇸'}
            </button>

            {/* Toggle Dark Mode */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            {/* Menu Mobile */}
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="menu-mobile">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`menu-item-mobile ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;