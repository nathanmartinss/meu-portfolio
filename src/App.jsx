import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  // Determinar página atual baseada na rota
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/projects') return 'projects';
    return 'home';
  };

  // Carregar preferência de tema salva
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentPage={getCurrentPage()}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </Router>
    </>
  );
}

export default App;