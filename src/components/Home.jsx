import React from 'react';
import '../styles/Home.css';
import { useTranslation } from '../hooks/useTranslation';
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiNestjs
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function Home({ isDarkMode }) {
  const { t } = useTranslation();
  
  const calculateAge = () => {
    const birthDate = new Date(1999, 0, 14);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const technologies = [
    { name: 'Javascript', icon: SiJavascript, url: 'https://www.javascript.com/', color: '#f7df1e' },
    { name: 'Typescript', icon: SiTypescript, url: 'https://www.typescriptlang.org/', color: '#3178c6' },
    { name: 'Node.js', icon: SiNodedotjs, url: 'https://nodejs.org/', color: '#339933' },
    { name: 'React', icon: SiReact, url: 'https://reactjs.org/', color: '#61dafb' },
    { name: 'Java', icon: FaJava, url: 'https://www.java.com/', color: '#ed8b00' },
    { name: 'Docker', icon: SiDocker, url: 'https://www.docker.com/', color: '#2496ed' },
    { name: 'Nest.js', icon: SiNestjs, url: 'https://nestjs.com/', color: '#e0234e' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/nathanmartinss',
      description: t('home.social.github'),
      color: isDarkMode ? '#24292f' : '#24292f'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/nathanmartinss',
      description: t('home.social.linkedin'),
      color: '#0a66c2'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:nathanmartinss@icloud.com',
      description: t('home.social.email'),
      color: isDarkMode ? '#8b5cf6' : '#7c3aed'
    }
  ];

  return (
    <main className="home-container">
      <div className="home-content">
        {/* Seção Hero Principal */}
        <section className="hero-section">
          <div className="profile-section">
            <div className="profile-image">
              <img
                src="/images/about/profile.jpeg"
                alt="Nathan Martins"
              />
            </div>
            <div className="profile-info">
              <h1 className="main-title">
                <span className="wave">👋</span> {t('home.about.greeting')}
              </h1>
              <div className="status">
                <span className="status-text">{t('home.about.status')} </span>
              </div>
            </div>
          </div>

          <div className="intro-text">
            <p>
              {t('home.about.intro1')} {calculateAge()} {t('home.about.intro2')}
            </p>
            <p>
              {t('home.about.techWork')}{' '}
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <span key={tech.name} className="tech-mention">
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-link-inline"
                      style={{ color: tech.color }}
                    >
                      <Icon className="tech-icon-inline" />
                      {tech.name}
                    </a>
                    {index < technologies.length - 1 && (index === technologies.length - 2 ? ` ${t('home.about.techAnd')} ` : ', ')}
                  </span>
                );
              })}
              {' '}{t('home.about.techDayToDay')}
            </p>
          </div>
        </section>

        {/* Stack Principal - apenas no topo */}
        <section className="top-section">
          <div className="tech-stack-card">
            <h3 className="tech-title">{t('home.about.stackTitle')}</h3>
            <div className="tech-grid">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-item"
                    style={{ '--tech-color': tech.color }}
                  >
                    <Icon className="tech-icon" />
                    <span className="tech-name">{tech.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Conecte-se comigo e CV */}
        <section className="social-cv-section">
          <div className="social-cards-container">
            <h3 className="section-title">{t('home.about.connectTitle')}</h3>
            <div className="social-cards">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                    style={{ '--accent-color': social.color }}
                  >
                    <div className="social-card-icon">
                      <Icon />
                    </div>
                    <div className="social-card-content">
                      <h4>{social.name}</h4>
                      <p>{social.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="cv-section">
            <h3 className="cv-title">{t('home.about.cvTitle')}</h3>
            <div className="cv-buttons">
              <a
                href="/assets/cv-nathan-portugues.pdf"
                target="_blank"
                className="cv-button primary"
              >
                <FaDownload />
                <span>CV (BR)</span>
              </a>
              <a
                href="/assets/cv-nathan-english.pdf"
                target="_blank"
                className="cv-button secondary"
              >
                <FaDownload />
                <span>CV (EN)</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Home;